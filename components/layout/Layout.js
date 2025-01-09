"use client";
import Aos from "aos";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import DataBg from "../elements/DataBg";
import Breadcrumb from "./Breadcrumb";
import PageHead from "./PageHead";

import Footer4 from "./footer/Footer4";

import Header4 from "./header/Header4";

export const metadata = {
  title: "Apexa - Business Consulting NextJS Template",
};

export default function Layout({
  headerStyle,
  footerStyle,
  headTitle,
  breadcrumbTitle,
  children,
  transparent,
}) {
  const [scroll, setScroll] = useState(0);
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("mobile-menu-visible")
      : document.body.classList.remove("mobile-menu-visible");
  };
  // Search Menu
  const [isSearch, setSearch] = useState(false);
  const handleSearch = () => setSearch(!isSearch);
  // Moblile Menu
  const [isOffcanvus, setOffcanvus] = useState(false);
  const handleOffcanvus = () => setOffcanvus(!isOffcanvus);

  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();
    Aos.init();

    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);
  return (
    <>
      <PageHead headTitle={headTitle} />
      <DataBg />

      {headerStyle == 4 ? (
        <Header4
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isSearch={isSearch}
          handleSearch={handleSearch}
          isOffcanvus={isOffcanvus}
          handleOffcanvus={handleOffcanvus}
        />
      ) : null}

      <main className="fix">
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

        {children}
      </main>

      {footerStyle == 4 ? <Footer4 /> : null}

      <BackToTop />
    </>
  );
}

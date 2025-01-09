import Link from "next/link";

export default function Footer4() {
  return (
    <>
      <footer>
        <div className="tienichcuocgoi vitri3 themes4">
          <ul id="ultienichcuocgoi">
            <li className="sodienthoaizalo">
              <a
                rel="noopener nofflow"
                target="_blank"
                href="https://zalo.me/0918638068"
                data-original-title="Nhắn tin cho chúng tôi qua Zalo"
                data-placement="top"
                data-toggle="tooltip"
              >
                <span className="icimg">
                  <img
                    width={40}
                    height={40}
                    alt="sodienthoaizalo"
                    src="https://vutruso.com/wp-content/uploads/2024/08/sodienthoaizalo.svg"
                  />
                </span>
                <span className="tienichname">0918 638 068</span>
              </a>
            </li>
            <li className="facebook">
              <a
                rel="noopener nofflow"
                target="_blank"
                href="https://zalo.me/0918638068"
                data-original-title="Nhắn tin cho chúng tôi qua Facebook"
                data-placement="top"
                data-toggle="tooltip"
              >
                <span className="icimg">
                  <img
                    alt="facebook"
                    src="https://vutruso.com/wp-content/uploads/2024/08/facebook.svg"
                  />
                </span>
                <span className="tienichname">Thuê xe ô tô</span>
              </a>
            </li>
            <li className="sodienthoai">
              <a
                rel="noopener nofflow"
                href="tel:vutruso"
                data-original-title="Nhấn để gọi ngay"
                data-placement="top"
                data-toggle="tooltip"
              >
                <span className="icimg">
                  <img
                    width={40}
                    height={40}
                    className="lac"
                    alt="sodienthoai"
                    src="https://vutruso.com/wp-content/uploads/2024/08/sodienthoai.svg"
                  />
                  <div className="vutruso-alo-ph-circle" />
                  <div className="vutruso-alo-ph-circle-fill" />
                </span>
                <span className="tienichname">0918 638 068</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__area-four">
          <div className="container">
            <div className="footer__top-three footer__top-four">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-6">
                  <div className="footer-widget">
                    <div className="">
                      <Link href="/">
                        <img
                          src="/logo.jpg"
                          alt="thuê xe du lịch đà lạt"
                          width={100}
                        />
                      </Link>
                    </div>
                    <br />
                    <div className="footer-info-list mb-25">
                      <ul className="list-wrap">
                        <li>
                          <div className="icon">
                            <i className="flaticon-phone-call" />
                          </div>
                          <div className="content">
                            <Link href="tel:0918638068">0918 638 068</Link>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="flaticon-envelope" />
                          </div>
                          <div className="content">
                            <Link href="mailto:Trungthanhdalattravel@gmail.com">
                              Trungthanhdalattravel@gmail.com
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="icon">
                            <i className="flaticon-pin" />
                          </div>
                          <div className="content">
                            <p>
                              10 Phạm Hồng Thái, phường 10, thành phố Đà Lạt,
                              Lâm Đồng.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="footer__social-three">
                      <ul className="list-wrap">
                        <li>
                          <Link href="https://www.facebook.com/profile.php?id=100063954044555">
                            <i className="fab fa-facebook-f" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.facebook.com/profile.php?id=100063954044555">
                            <i className="fab fa-twitter" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.facebook.com/profile.php?id=100063954044555">
                            <i className="fab fa-instagram" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.facebook.com/profile.php?id=100063954044555">
                            <i className="fab fa-pinterest-p" />
                          </Link>
                        </li>
                        <li>
                          <Link href="https://www.facebook.com/profile.php?id=100063954044555">
                            <i className="fab fa-youtube" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">Dịch vụ cho thuê xe ô tô dalat</h4>
                    <div className="footer-link-list">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/about">Giới thiệu</Link>
                        </li>
                        <li>
                          <Link href="/about">Bảng giá thuê xe ô tô</Link>
                        </li>
                        <li>
                          <Link href="/team">Meet our team</Link>
                        </li>
                        <li>
                          <Link href="/contact">Case Studies</Link>
                        </li>
                        <li>
                          <Link href="/blog">Latest news</Link>
                        </li>
                        <li>
                          <Link href="/contact">Contact us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">Thuê xe ô tô đà lạt</h4>
                    <div className="footer-link-list">
                      <ul className="list-wrap">
                        <li>
                          <Link href="/thue-xe-4-cho-da-lat">
                            Thuê xe 4 chỗ đà lạt
                          </Link>
                        </li>
                        <li>
                          <Link href="/thue-xe-5-cho-da-lat">
                            Thuê xe 5 chỗ đà lạt
                          </Link>
                        </li>
                        <li>
                          <Link href="/thue-xe-7-cho-da-lat">
                            Thuê xe 7 chỗ đà lạt
                          </Link>
                        </li>
                        <li>
                          <Link href="/thue-xe-16-cho-da-lat">
                            Thuê xe 16 chỗ đà lạt
                          </Link>
                        </li>
                        <li>
                          <Link href="/thue-xe-29-cho-da-lat">
                            Thuê xe 29 chỗ đà lạt
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                  <div className="footer-widget">
                    <h4 className="fw-title">Các dòng xe ô tô cho thuê 2025</h4>
                    <div className="footer-instagram">
                      <ul className="list-wrap">
                        <li>
                          <Link href="#">
                            <img
                              src="/assets/img/images/footer_insta01.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <img
                              src="/assets/img/images/footer_insta02.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <img
                              src="/assets/img/images/footer_insta03.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <img
                              src="/assets/img/images/footer_insta04.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <img
                              src="/assets/img/images/footer_insta05.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <img
                              src="/assets/img/images/footer_insta06.jpg"
                              alt=""
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__bottom-four">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <div className="copyright-text">
                      <p>
                        Copyright ©{" "}
                        <Link href="/">Du lịch Trung Thành Đà Lạt</Link> | All
                        Right 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-shape-two">
            <img
              src="/assets/img/images/h4_footer_shape.png"
              alt=""
              data-aos="fade-right"
              data-aos-delay={400}
            />
          </div>
        </div>
      </footer>
    </>
  );
}

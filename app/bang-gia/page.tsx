import LichTrinhComponent from "../../components/home/lichTrinh";
import Layout from "../../components/layout/Layout";

export const metadata = {
  title: "Thuê xe 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ Đà Lạt",
  description:
    "Dịch vụ Thuê xe 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ Đà Lạt. DỊCH VỤ THUÊ XE Ô TÔ ĐÀ LẠT (CÓ TÀI XẾ); Thuê xe ô tô Đà Lạt tham quan các địa điểm theo yêu cầu",
  openGraph: {
    title: "Thuê xe 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ Đà Lạt",
    description:
      "Dịch vụ Thuê xe 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ Đà Lạt. DỊCH VỤ THUÊ XE Ô TÔ ĐÀ LẠT (CÓ TÀI XẾ); Thuê xe ô tô Đà Lạt tham quan các địa điểm theo yêu cầu",
    images: "/logo.jpg",
  },
};

export default function BangGia() {
  return (
    <>
      <Layout
        headerStyle={4}
        footerStyle={4}
        headTitle=""
        breadcrumbTitle=""
        transparent=""
      >
        <br /> <br /> <br /> <br /> <br /> <br />
        <div className="container">
          <LichTrinhComponent />
        </div>
      </Layout>
    </>
  );
}

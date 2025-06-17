import Image from "next/image";
import HeaderSection from "./section/header-section/page";
import TerlarisSection from "./section/terlaris-section/page";
import KategoriSection from "./section/kategori-section/page";
import SemuaSection from "./section/semua-section/page";
import FooterSection from "./section/footer-section/page";

export default function Home() {
  return (
    <>
      <HeaderSection/>
      <TerlarisSection/>
      <KategoriSection/>
      <SemuaSection/>
      <FooterSection/>
    </>
  )
}

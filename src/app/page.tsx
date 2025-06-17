import HeaderSection from "./section/header-section/page";
import TerlarisSection from "./section/terlaris-section/page";
import KategoriSection from "./section/kategori-section/page";
import SemuaSection from "./section/semua-section/page";
import FooterSection from "./section/footer-section/page";

export default function Home() {
  return (
    <>
      <main className="space-y-10">
        {/* Section Header */}
        <section>
          <HeaderSection />
        </section>

        {/* Section Terlaris */}
        <section>
          <TerlarisSection />
        </section>

        {/* Section Kategori */}
        <section>
          <KategoriSection />
        </section>

        {/* Section Semua Produk */}
        <section>
          <SemuaSection />
        </section>

        {/* Section Footer */}
        <section>
          <FooterSection />
        </section>
      </main>
    </>
  );
}

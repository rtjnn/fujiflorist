import produkList from "@/data/produk.json";
import Image from "next/image";

export default function TerlarisSection() {
  const produkTerbaru = produkList.slice(-4); // Ambil 4 produk paling akhir

  return (
    <section className="py-12 bg-[#fffafa] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-[#D88FA2] mb-8">
          Produk Terbaru
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {produkTerbaru.map((produk, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={produk.gambar}
                  alt={produk.nama}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  quality={90}
                  priority={index < 2} // Prioritaskan gambar pertama
                />
              </div>

              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-gray-800">
                  {produk.nama}
                </h3>
                <p className="text-sm text-gray-500 capitalize">
                  {produk.kategori}
                </p>
                <p className="text-[#D88FA2] font-bold mt-2 text-lg">
                  Rp {produk.harga.toLocaleString("id-ID")}
                </p>
                <a
                  href={`https://api.whatsapp.com/send/?phone=6285722069952&text=${encodeURIComponent(
                    `Halo saya tertarik dengan produk "${produk.nama}"`
                  )}`}
                  className="mt-4 inline-block w-full rounded-md bg-[#D88FA2] text-white text-center py-2 font-semibold whitespace-nowrap transition-colors duration-300 hover:bg-[#c6778f]"
                >
                  Pesan!
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import produkList from '@/data/produk.json';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>; // karena async
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const kategoriName = decodeURIComponent(slug.replace(/-/g, ' ')).toLowerCase();

  let produkTerkait = [];

  if (kategoriName === 'lihat semua parcel') {
    produkTerkait = produkList.filter((produk) =>
      ['parcel bunga', 'parcel buah'].includes(produk.kategori.toLowerCase())
    );
  } else if (kategoriName === 'lihat semua bunga') {
    produkTerkait = produkList.filter((produk) =>
      ['bunga meja', 'buket bunga', 'bunga standing', 'bunga buah'].includes(produk.kategori.toLowerCase())
    );
  } else if (kategoriName === 'lihat semua papan') {
    produkTerkait = produkList.filter((produk) =>
      ['ulang tahun', 'pernikahan', 'duka cita', 'pembukaan'].includes(produk.kategori.toLowerCase())
    );
  } else {
    produkTerkait = produkList.filter(
      (produk) => produk.kategori.toLowerCase() === kategoriName
    );
  }

  return (
    <section className="relative min-h-screen pt-32 pb-12 bg-white animate-fade-in-up">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 mb-4">
          <div className="text-sm text-gray-500">
            <nav className="flex items-center space-x-1" aria-label="Breadcrumb">
              <Link href="/" className="hover:underline text-[#D88FA2] font-medium">Home</Link>
              <span><ChevronRight size={16} /></span>
              <span className="text-[#D88FA2] font-medium cursor-default">Kategori</span>
              <span><ChevronRight size={16} /></span>
              <span className="capitalize text-gray-700">{kategoriName}</span>
            </nav>
          </div>
        </div>

        {/* Produk */}
        {produkTerkait.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {produkTerkait.map((produk, index) => (
              <Link
                key={`${produk.nama}-${index}`}
                href={`https://api.whatsapp.com/send/?phone=6285722069952&text=${encodeURIComponent(`Halo saya tertarik dengan produk "${produk.nama}"`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-200 hover:scale-105"
              >
                <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                  <div className="relative">
                    <Image
                      width={300}
                      height={300}
                      src={produk.gambar}
                      alt={produk.nama}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute top-2 left-2 bg-[#D88FA2] text-white text-xs font-semibold px-3 py-1 rounded-full capitalize">
                      {produk.kategori}
                    </span>
                  </div>
                  <div className="p-4 space-y-2">
                    <h2 className="text-lg font-bold text-gray-800 leading-snug">
                      {produk.nama}
                    </h2>
                    <p className="text-[#D88FA2] font-extrabold text-lg">
                      Rp {produk.harga.toLocaleString('id-ID')}
                    </p>
                    <p className="mt-2 font-semibold text-[#D88FA2] hover:underline">
                      Pesan sekarang!
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 text-lg mt-16">
            Belum ada produk untuk kategori ini.
          </div>
        )}
      </div>
    </section>
  );
}

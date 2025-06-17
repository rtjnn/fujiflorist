'use client';

import { useSearchParams } from 'next/navigation';
import produkList from '@/data/produk.json';
import { useMemo } from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  const hasilPencarian = useMemo(() => {
    return produkList.filter((produk) =>
      produk.nama.toLowerCase().includes(query)
    );
  }, [query]);

  return (
    <section className="relative min-h-screen pt-32 pb-12 bg-white animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
        
           <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 mb-4">
            <div className="text-sm text-gray-500">
                <nav className="flex items-center space-x-1" aria-label="Breadcrumb">
                    <Link href="/" className="hover:underline text-[#D88FA2] font-medium">Home</Link>
                    <span><ChevronRight /></span>
                    <span className=" text-[#D88FA2] font-medium cursor-default">Hasil Pencarian</span>
                    <span><ChevronRight /></span>
                    <span className="capitalize text-gray-700">{query}</span>
                </nav>
            </div>
        </div>
        </div>

        {hasilPencarian.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {hasilPencarian.map((produk, index) => (
               <a
              key={`${produk.nama}-${index}`}
              href={`https://api.whatsapp.com/send/?phone=6285722069952&text=${encodeURIComponent(
                `Halo saya tertarik dengan produk "${produk.nama}"`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-200 hover:scale-105"
            >
              <div key={index} className="bg-white border rounded-xl shadow-sm overflow-hidden">
                <Image
                width={300}
                height={200}
                  src={produk.gambar}
                  alt={produk.nama}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">{produk.nama}</h2>
                  <p className="text-sm text-gray-500 capitalize">{produk.kategori}</p>
                  <p className="mt-2 text-[#D88FA2] font-bold">
                    Rp {produk.harga.toLocaleString('id-ID')}
                  </p>
                  <p className="mt-2 font-semibold text-[#D88FA2] hover:underline">
                  Pesan sekarang!
                </p>
                </div>
              </div>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            Tidak ada produk yang cocok dengan pencarian.
          </p>
        )}
      </div>
    </section>
  );
}

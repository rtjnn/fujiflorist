'use client';

import { useState } from 'react';
import produkList from '@/data/produk.json';

export default function SemuaSection() {
  const initialCount = 8;
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const handleToggle = () => {
    if (visibleCount >= produkList.length) {
      setVisibleCount(initialCount); // reset ke 8
    } else {
      setVisibleCount((prev) => prev + 8);
    }
  };

  const visibleProducts = produkList.slice(0, visibleCount);
  const isAllVisible = visibleCount >= produkList.length;

  return (
    <section className="py-10 font-sans bg-[#fffafa]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-[#D88FA2]">Produk Kami</h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {visibleProducts.map((produk, index) => (
            <a
              key={`${produk.nama}-${index}`}
              href={`https://api.whatsapp.com/send/?phone=6285722069952&text=${encodeURIComponent(
                `Halo saya tertarik dengan produk "${produk.nama}"`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white shadow-md rounded-xl overflow-hidden transition-transform duration-200 hover:scale-105"
            >
              <img
                src={produk.gambar}
                alt={produk.nama}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-800">{produk.nama}</h3>
                <p className="text-sm text-gray-600 capitalize">{produk.kategori}</p>
                <p className="text-[#D88FA2] font-bold mt-2">
                  Rp {Number(produk.harga).toLocaleString('id-ID')}
                </p>
                <p className="mt-2 font-semibold text-[#D88FA2] hover:underline">
                  Pesan sekarang!
                </p>
              </div>
            </a>
          ))}
        </div>

        {produkList.length > initialCount && (
          <div className="text-center mt-6">
            <button
              onClick={handleToggle}
              className="text-sm text-white bg-[#D88FA2] hover:bg-[#c6778f] transition px-4 py-2 rounded"
            >
              {isAllVisible ? 'Tampilkan Lebih Sedikit' : 'Lihat Lainnya'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

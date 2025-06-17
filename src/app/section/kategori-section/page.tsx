'use client';

import { useState } from 'react';
import kategoriList from '@/data/kategori.json';
import Link from 'next/link';

const categories = kategoriList;

export default function KategoriSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleCategories = showAll ? categories : categories.slice(0, 8);

  return (
    <section className="py-10 bg-white text-center font-sans">
      <h2 className="text-2xl font-bold mb-6 text-[#D88FA2]">SHOP BY CATEGORY</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-10 max-w-5xl mx-auto">
        {visibleCategories.map((cat) => (
          <Link
            key={cat.nama}
            href={`/pages/Kategori/${encodeURIComponent(cat.nama.replace(/\s+/g, '-'))}`}
            className="flex flex-col items-center justify-center transition-transform duration-200 hover:scale-105"
          >
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#D88FA2]">
              <img
                src={cat.gambar}
                alt={`Gambar kategori ${cat.nama}`}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-700 hover:text-[#D88FA2] transition-colors duration-200 text-center leading-tight px-1">
              {cat.nama}
            </p>
          </Link>
        ))}
      </div>

      {categories.length > 8 && (
        <div className="mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm font-medium text-[#D88FA2] hover:text-[#c6778f] transition"
          >
            {showAll ? 'Tampilkan Lebih Sedikit' : 'Tampilkan Lebih Banyak'}
          </button>
        </div>
      )}
    </section>
  );
}

'use client';

import {
  ShieldCheck,
  Clock,
  Smile,
  PackageCheck,
  PhoneCall
} from 'lucide-react';

export default function TentangSection() {
  const fitur = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#D88FA2]" />,
      judul: 'Produk Berkualitas',
      deskripsi: 'Kami hanya menyediakan produk bunga segar dan terbaik.'
    },
    {
      icon: <Clock className="w-10 h-10 text-[#D88FA2]" />,
      judul: 'Tepat Waktu',
      deskripsi: 'Pengiriman selalu dilakukan sesuai jadwal yang disepakati.'
    },
    {
      icon: <Smile className="w-10 h-10 text-[#D88FA2]" />,
      judul: 'Pelayanan Ramah',
      deskripsi: 'Tim kami siap membantu Anda dengan senyum.'
    },
    {
      icon: <PackageCheck className="w-10 h-10 text-[#D88FA2]" />,
      judul: 'Packing Aman',
      deskripsi: 'Setiap produk dikemas dengan aman hingga ke tangan Anda.'
    },
    {
      icon: <PhoneCall className="w-10 h-10 text-[#D88FA2]" />,
      judul: 'Respon Cepat',
      deskripsi: 'Kami merespon pesanan dan pertanyaan dengan cepat.'
    }
  ];

  return (
    <section className="py-24 sm:py-32 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-12">
          Kenapa Harus Membeli di Toko Kami?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {fitur.map((item, index) => (
            <div key={index} className="text-center p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{item.judul}</h3>
              <p className="text-sm text-gray-500 mt-2">{item.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

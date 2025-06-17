'use client';

import Link from "next/link";
import React, { useState } from "react";

export default function FooterSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (key: string) => {
    setOpenItem(openItem === key ? null : key);
  };

  return (
    <footer className="text-gray-900 pt-5 pb-3 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Bantuan */}
          <div className="w-full md:w-4/12 px-4 mb-6 md:mb-0">
            <h6 className="font-semibold mb-4 text-[#D88FA2]">Bantuan</h6>
            <div className="space-y-2 text-sm text-gray-700">

              {/* Item Accordion */}
              {[
                {
                  key: "faq",
                  title: "FAQ",
                  content: "Kami telah berdiri lebih dari 10 tahun dan telah melayani 100++ customer.",
                },
                {
                  key: "cara-order",
                  title: "Cara Order",
                  content:
                    "Klik produk yang akan kamu beli lalu akan otomatis diarahkan menuju whatsapp admin kami..",
                },
                {
                  key: "pembayaran",
                  title: "Pembayaran",
                  content: (
                    <ul className="pl-4 list-disc space-y-1">
                      <li><strong>Transfer Bank:</strong> melalui ATM, mobile banking, atau internet banking ke Mandiri, BCA, BNI.</li>
                      <li><strong>COD:</strong> Bayar saat barang diterima di rumah.</li>
                      <li><strong>QRIS:</strong> Scan QR code dari OVO, DANA, Gopay, dll.</li>
                    </ul>
                  ),
                },
                {
                  key: "pengiriman",
                  title: "Pengiriman",
                  content: "Pengiriman sesuai estimasi yang telah ditentukan bersama.",
                },
              ].map((item) => (
                <div key={item.key} className="border-b py-2">
                  <button
                    onClick={() => toggleItem(item.key)}
                    className="flex justify-between items-center w-full font-semibold text-left text-gray-800"
                  >
                    {item.title}
                    <span className="text-xl">{openItem === item.key ? '−' : '+'}</span>
                  </button>
                  {openItem === item.key && (
                    <div className="mt-2 text-sm text-gray-600">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Layanan Customer */}
          <div className="w-1/2 md:w-2/12 px-4 mb-6 md:mb-0">
            <h6 className="font-semibold mb-4 text-[#D88FA2]">Layanan Customer</h6>
            <ul>
              <li>
                <a
                  href="https://wa.me/628522335445"
                  className="text-gray-500 hover:text-green-600 no-underline flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-whatsapp"></i> 0852-2332-5445
                </a>
              </li>
            </ul>
          </div>

          {/* Lokasi */}
          <div className="w-full md:w-5/12 px-4 mb-6 md:mb-0">
            <h6 className="font-semibold mb-4 text-[#D88FA2]">Lokasi Kami</h6>
            <div
              className="relative overflow-hidden rounded-xl shadow-sm"
              style={{ paddingBottom: "56.25%", height: 0 }}
            >
              <iframe
                src="https://maps.google.com/maps?q=-6.7975969022585385,107.57413738843681&z=15&output=embed"
                allowFullScreen
                loading="lazy"
                className="absolute top-0 left-0 w-full h-full border-0"
                title="Lokasi Kami"
              />
            </div>
          </div>
        </div>

        <hr className="border-gray-400 my-6" />

        {/* Newsletter */}
        <div className="max-w-xl lg:max-w-lg">
          <h2 className="text-4xl font-semibold tracking-tight text-[#D88FA2]">Subscribe to our newsletter</h2>
          <p className="mt-4 text-lg text-gray-700">Dapatkan info terbaru seputar promo dan produk dari kami langsung ke email kamu.</p>
          <div className="mt-6 flex max-w-md gap-x-4">
            <label className="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-gray-700 outline-1 placeholder:text-gray-400 focus:outline-[#D88FA2] sm:text-sm"
              placeholder="Masukkan email kamu"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-[#D88FA2] hover:bg-[#c6778f] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              Subscribe
            </button>
          </div>
        </div>

        <hr className="border-gray-400 my-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
          <p className="text-gray-500 text-sm">&copy; 2024 Fuji Florist. All rights reserved.</p>
          <div className="flex space-x-4 text-gray-500">
            <Link href="#" className="hover:text-[#D88FA2]">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link href="#" className="hover:text-[#D88FA2]">
              <i className="bi bi-instagram"></i>
            </Link>
            <Link href="#" className="hover:text-[#D88FA2]">
              <i className="bi bi-twitter"></i>
            </Link>
            <Link href="#" className="hover:text-red-600">
              <i className="bi bi-youtube"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

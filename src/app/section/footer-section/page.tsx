import React from "react";

export default function FooterSection() {
  return (
    <footer className="text-gray-900 pt-5 pb-3 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Bantuan */}
          <div className="w-full md:w-4/12 px-4 mb-6 md:mb-0">
            <h6 className="font-semibold mb-4 text-[#D88FA2]">Bantuan</h6>

            <div className="space-y-4 text-gray-600 text-sm">
              <div>
                <h6 className="font-semibold mb-1">FAQ</h6>
                <p>Jawaban dari FAQ atau informasi yang relevan.</p>
              </div>

              <div>
                <h6 className="font-semibold mb-1">Cara Order</h6>
                <p>Pilih Produk yang akan anda beli lalu masukan keranjang dan masuk halaman pembayaran.</p>
              </div>

              <div>
                <h6 className="font-semibold mb-1">Pembayaran</h6>
                <ul className="pl-4 list-disc space-y-1 text-gray-700">
                  <li>
                    <strong>Transfer Bank:</strong> Anda bisa melakukan pembayaran melalui ATM, mobile banking, atau internet banking ke rekening Mandiri, BCA, atau BNI.
                  </li>
                  <li>
                    <strong>COD (Bayar di Tempat):</strong> Nikmati kemudahan berbelanja dan bayar saat barang diterima di rumah Anda.
                  </li>
                  <li>
                    <strong>QRIS:</strong> Cukup scan QR code dari aplikasi dompet digital (OVO, DANA, Gopay, dll) untuk membayar dengan cepat dan aman.
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="font-semibold mb-1">Pengiriman</h6>
                <p>Pengiriman sesuai estimasi yang telah ditentukan bersama.</p>
              </div>
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
              className="flex-none rounded-md bg-[#D88FA2] hover:bg-[#c6778f] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D88FA2]"
            >
              Subscribe
            </button>
          </div>
        </div>

        <hr className="border-gray-400 my-6" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
          <p className="text-gray-500 text-sm">&copy; 2024 Toko Bunga Zildan. All rights reserved.</p>
          <div className="flex space-x-4 text-gray-500">
            <a href="#" className="hover:text-[#D88FA2]">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="hover:text-[#D88FA2]">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="hover:text-[#D88FA2]">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="hover:text-red-600">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

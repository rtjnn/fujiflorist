import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Script from "next/script";
import produk from "@/data/produk.json"; // ⬅ pastikan path ke file JSON benar

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fujiflorist.online"),
  title: "Toko Bunga Bandung | Fuji Florist",
  description:
    "Fuji Florist adalah toko bunga terbaik di Bandung. Menyediakan buket bunga, bunga papan, parcel, dan layanan pengiriman cepat ke seluruh Bandung.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "toko bunga bandung",
    "buket bunga bandung",
    "bunga papan bandung",
    "parcel bunga bandung",
    "florist bandung",
    "fuji florist",
  ],
  openGraph: {
    title: "Toko Bunga Bandung | Fuji Florist",
    description:
      "Pesan buket bunga dan papan bunga terbaik dari Fuji Florist Bandung. Layanan cepat, harga terjangkau, kualitas terjamin.",
    url: "https://fujiflorist.online",
    siteName: "Fuji Florist",
    images: [
      {
        url: "/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Toko Bunga Bandung Fuji Florist",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* Structured data logo untuk Google */}
        <Script
          id="structured-data-logo"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fuji Florist",
              url: "https://fujiflorist.online",
              logo: "https://fujiflorist.online/logo.png",
            }),
          }}
        />

        {/* Structured data produk-produk utama */}
        <Script
          id="structured-data-products"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": produk.slice(0, 6).map((item) => ({
                "@type": "Product",
                name: item.nama,
                image: `https://fujiflorist.online${item.gambar}`,
                description: item.nama,
                brand: {
                  "@type": "Brand",
                  name: "Fuji Florist",
                },
                offers: {
                  "@type": "Offer",
                  priceCurrency: "IDR",
                  price: item.harga,
                  availability: "https://schema.org/InStock",
                  url: `https://fujiflorist.online/produk/${item.id}`, // Ubah jika struktur URL berbeda
                },
              })),
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="fixed top-0 left-0 w-full h-16 bg-white z-50 shadow-md">
          <Navbar />
        </div>
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}

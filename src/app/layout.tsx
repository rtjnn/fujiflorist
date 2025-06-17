import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fujiflorist.online"), // ← Tambahkan ini
  title: "Toko Bunga Bandung | Fuji Florist",
  description:
    "Fuji Florist adalah toko bunga terbaik di Bandung. Menyediakan buket bunga, bunga papan, parcel, dan layanan pengiriman cepat ke seluruh Bandung.",
  icons: {
    icon: "/logo.ico",
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
        url: "/og-banner.jpg", // ← Pastikan file ini ada di /public
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="fixed top-0 left-0 w-full h-16 bg-white z-50 shadow-md">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}

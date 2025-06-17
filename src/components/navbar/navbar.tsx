'use client';

import { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import Link from 'next/link';

type SectionType = 'flowers' | 'papan' | 'parcel';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMega, setOpenMega] = useState<SectionType | null>(null);
  const [openMobileSub, setOpenMobileSub] = useState<SectionType | null>(null);
  const megaMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setOpenMega(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems: { name: string; section: SectionType }[] = [
    { name: 'FLOWERS', section: 'flowers' },
    { name: 'BUNGA PAPAN', section: 'papan' },
    { name: 'PARCEL', section: 'parcel' },
  ];

  const handleMegaClick = (section: SectionType) => {
    setOpenMega((prev) => (prev === section ? null : section));
  };

  const toggleMobileSub = (section: SectionType) => {
    setOpenMobileSub((prev) => (prev === section ? null : section));
  };

  const renderMegaMenu = (section: SectionType) => {
    const contentMap: Record<SectionType, string[][]> = {
      flowers: [['BUKET BUNGA'], ['BUNGA MEJA'], ['Graduation'], ['Lihat semua bunga']],
      papan: [['ULANG TAHUN', 'PERNIKAHAN', 'DUKA CITA'], ['PEMBUKAAN', 'Lihat semua papan']],
      parcel: [['PARCEL BUNGA', 'PARCEL BUAH'], ['Lihat semua parcel']],
    };

    const content = contentMap[section];
    const isFourCol = content.length === 4;
    const gridCols = isFourCol ? 'lg:grid-cols-4' : 'lg:grid-cols-3';
    const widthClass = isFourCol ? 'lg:w-[950px]' : 'lg:w-[800px]';

    return (
      <div
        ref={megaMenuRef}
        className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 p-6 z-50 bg-white
          border border-[#E5E7EB] rounded-xl shadow-xl ${widthClass} grid ${gridCols} gap-6 animate-fadeIn`}
      >
        {content.map((group, idx) => (
          <div key={idx} className="space-y-2">
            {group.map((item, i) => (
              <a
                key={i}
                href={`/pages/Kategori/${encodeURIComponent(item.toLowerCase().replace(/\s+/g, '-'))}`}
                className="block text-sm text-[#2D2D2D] hover:text-[#D88FA2] transition duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const renderMobileSubMenu = (section: SectionType) => {
    const mobileItems: Record<SectionType, string[]> = {
      flowers: ['BLOOM BOX', 'BUKET BUNGA', 'BUNGA MEJA', 'Lihat semua bunga'],
      papan: ['ULANG TAHUN', 'PERNIKAHAN', 'DUKA CITA', 'PEMBUKAAN', 'Lihat semua papan'],
      parcel: ['PARCEL BUNGA', 'PARCEL BUAH', 'Lihat semua parcel'],
    };

    return mobileItems[section].map((item) => (
      <a
        key={item}
        href={`/pages/Kategori/${encodeURIComponent(item.toLowerCase().replace(/\s+/g, '-'))}`}
        className="block text-sm pl-4 py-1 text-[#6B7280] hover:text-[#D88FA2] transition"
      >
        {item}
      </a>
    ));
  };

  return (
    <>
      {/* ... bagian promo banner bisa ditaruh di luar Navbar kalau tidak dinamis */}

      <nav className="fixed top-0 left-0 w-full z-[9999] bg-white border-b border-[#E5E7EB] shadow-sm font-sans animate-slideDown">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-center py-3 border-b border-[#E5E7EB]">
            <Link
              href="/"
              className="text-2xl font-bold tracking-wide text-[#D88FA2] hover:opacity-80 transition"
            >
              Fuji Florist
            </Link>
          </div>

          <div className="flex justify-between items-center py-2">
            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-1 justify-center space-x-6 text-sm font-medium">
              <Link href="/" className="text-[#2D2D2D] hover:text-[#D88FA2] transition">
                NEW ARRIVAL
              </Link>
              {navItems.map(({ name, section }) => (
                <div key={section} className="relative">
                  <button
                    onClick={() => handleMegaClick(section)}
                    className={`flex items-center gap-1 uppercase transition font-medium ${
                      openMega === section
                        ? 'text-[#D88FA2]'
                        : 'text-[#6B7280] hover:text-[#D88FA2]'
                    }`}
                  >
                    {name}
                    <ChevronDown size={16} />
                  </button>
                  {openMega === section && renderMegaMenu(section)}
                </div>
              ))}
            </div>

            {/* Search & Icons */}
            <div className="hidden lg:block ml-6">
              <form action="/pages/search" method="GET" className="relative w-64">
                <input
                  type="text"
                  name="q"
                  placeholder="Cari produk..."
                  className="w-full px-4 py-2 pr-10 text-sm rounded-full border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#5A4FCF] transition"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#D88FA2]"
                >
                  <Search size={18} />
                </button>
              </form>
            </div>

            <div className="hidden lg:flex items-center space-x-5 text-[#6B7280] ml-4">
              <i className="fas fa-user hover:text-[#D88FA2] transition" />
              <i className="fas fa-heart hover:text-[#D88FA2] transition" />
              <i className="fas fa-shopping-bag hover:text-[#D88FA2] transition" />
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#2D2D2D]">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-[#E5E7EB] px-4 py-4 space-y-3 text-[#2D2D2D] animate-fadeIn">
            <form action="/pages/search" method="GET" className="relative w-full">
              <input
                type="text"
                name="q"
                placeholder="Cari produk..."
                className="w-full px-4 py-2 pr-10 text-sm rounded-full border border-[#E5E7EB] focus:outline-none focus:ring-2 focus:ring-[#5A4FCF] transition"
              />
              <button
                type="submit"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#D88FA2]"
              >
                <Search size={18} />
              </button>
            </form>

            <Link href="#" className="block text-[#2D2D2D] font-medium">
              NEW ARRIVAL
            </Link>
            {navItems.map(({ name, section }) => (
              <div key={section}>
                <button
                  className="w-full flex justify-between items-center text-[#2D2D2D] font-semibold"
                  onClick={() => toggleMobileSub(section)}
                >
                  {name}
                  <ChevronDown
                    className={`transition-transform ${openMobileSub === section ? 'rotate-180' : ''}`}
                    size={18}
                  />
                </button>
                {openMobileSub === section && (
                  <div className="ml-2 mt-2 space-y-1">{renderMobileSubMenu(section)}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}

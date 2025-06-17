export default function HeaderSection() {
  return (
    <div className="relative isolate overflow-hidden bg-[#C46A82] py-24 sm:py-32">
      {/* Background Image */}
      <img
        src="gambar/bunga.jpg"
        alt="Bunga berkualitas"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#2E1F26]/90 via-[#2E1F26]/70 to-transparent"
        aria-hidden="true"
      />

      {/* Blur Decorations */}
      <div
        className="hidden sm:block absolute top-[-20rem] left-1/2 -z-10 transform -translate-x-1/2 blur-3xl"
        aria-hidden="true"
      >
        <div className="aspect-[1097/845] w-[68.5rem] bg-gradient-to-tr from-[#D88FA2] to-[#B4C7A3] opacity-20" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl text-center mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Temukan Bunga Terbaik untuk Momen Spesial Anda
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#F3D9DF]">
            Bunga segar dan layanan terpercaya untuk membuat setiap acara lebih bermakna. Kirimkan cinta dan perhatian lewat rangkaian bunga indah dari kami.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {[
            { label: 'Pelanggan Puas', value: '100+' },
            { label: 'Pelayanan', value: '24 Jam' },
            { label: 'Gratis Ongkir', value: '40 Kota' },
            { label: 'Kepuasan Dijamin', value: '100%' },
          ].map((item, index) => (
            <div key={index}>
              <dd className="text-3xl font-semibold tracking-tight text-white">{item.value}</dd>
              <dt className="mt-1 text-base leading-7 text-[#FADBE0]">{item.label}</dt>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

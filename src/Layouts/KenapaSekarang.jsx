import React from "react";

export const KenapaSekarang = () => {
  return (
    <>
      <section id="kenapa-sekarang" class="relative py-24 bg-[#F8FAF7] overflow-hidden">
        {/* subtle background blur */}
        <div class="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div class="w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        <div class="absolute -top-16 -right-16 w-56 h-56 bg-gradient-to-br from-green-200 to-yellow-200 rounded-full blur-3xl opacity-25"></div>
        <div class="absolute bottom-0 right-10 w-40 h-40 bg-green-300 rounded-full blur-2xl opacity-15"></div>

        <div class="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div>
            <h2 class="text-4xl font-bold text-gray-900 leading-tight mb-6">
              Kenapa Bisnis Baju Anak
              <span class="relative inline-block ml-2">
                <span class="relative z-10">Wajib Kamu Seriusin</span>
                <span class="absolute bottom-1 left-0 w-full h-3 bg-yellow-300/70 -z-0 rounded"></span>
              </span>
              Tahun Ini?
            </h2>

            <p class="text-lg text-gray-600 leading-relaxed mb-8">
              Baju orang dewasa dipakai bertahun-tahun. Baju anak? Ganti ukuran
              setiap beberapa bulan. Artinya: repeat order lebih cepat.
            </p>

            {/* Bullet Points */}
            <div class="space-y-6">
              <div class="flex gap-4">
                <div class="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-700 font-semibold">
                  1
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Anak tumbuh cepat. Orang tua beli lagi dan lagi.
                </p>
              </div>

              <div class="flex gap-4">
                <div class="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-700 font-semibold">
                  2
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Permintaan naik saat musim sekolah & Ramadan.
                </p>
              </div>

              <div class="flex gap-4">
                <div class="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-700 font-semibold">
                  3
                </div>
                <p class="text-gray-700 leading-relaxed">
                  Brand serius masih sedikit. Pasar masih longgar.
                </p>
              </div>
            </div>

            {/* Strategic Callout */}
            <div class="mt-10 relative rounded-2xl p-[1px] bg-gradient-to-r from-yellow-300/60 to-transparent">
              <div class="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/60 shadow-sm">
                <h4 class="font-semibold text-gray-900 mb-2">
                  Kenapa harus sekarang?
                </h4>

                <p class="text-gray-600 leading-relaxed">
                  Slot distributor dibatasi per wilayah. Semakin cepat ambil
                  posisi, semakin kuat kuasai pasar.
                </p>
              </div>
            </div>
          </div>
          <div class="hidden lg:block absolute right-1/3 top-20 bottom-20 w-px bg-gradient-to-b from-transparent via-green-300/30 to-transparent"></div>

          {/* RIGHT SIDE – Premium Card */}
          <div class="relative group rounded-3xl p-[1px] bg-gradient-to-br from-green-200/50 via-white to-transparent transition duration-500">
            <div class="relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 border border-white/60 shadow-sm group-hover:shadow-2xl transition duration-500 overflow-hidden">
              {/* decorative glow */}
              <div class="absolute -top-10 -right-10 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition"></div>

              <h3 class="text-2xl font-semibold text-gray-900 mb-8">
                Cara Kerja Bisnis Lamonte
              </h3>

              <div class="space-y-6">
                <div class="flex gap-4">
                  <div class="w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <p class="font-medium text-gray-900">
                      Pilih Paket Sesuai Modal
                    </p>
                    <p class="text-gray-600 text-sm">
                      Semua sudah termasuk sistem & akses ekosistem.
                    </p>
                  </div>
                </div>

                <div class="flex gap-4">
                  <div class="w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <p class="font-medium text-gray-900">Ikuti Onboarding</p>
                    <p class="text-gray-600 text-sm">
                      Panduan lengkap dari instal aplikasi hingga jualan.
                    </p>
                  </div>
                </div>

                <div class="flex gap-4">
                  <div class="w-8 h-8 flex items-center justify-center rounded-full bg-green-600 text-white font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <p class="font-medium text-gray-900">Jualan + Tim Backup</p>
                    <p class="text-gray-600 text-sm">
                      Tim support bantu closing dan strategi marketing.
                    </p>
                  </div>
                </div>
              </div>

              <div class="mt-10">
                <a
                  href="#paket-kemitraan"
                  class="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-yellow-400 hover:bg-yellow-500 transition font-semibold text-gray-900 shadow-md"
                >
                  Lanjut Pilih Paket →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

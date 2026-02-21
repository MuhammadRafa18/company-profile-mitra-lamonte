import React from "react";

export const Ecorsystem = () => {
  return (
    <>
      <section class="relative py-24 bg-[#F8FAF7]">
        <div class="max-w-6xl mx-auto px-6">
          {/* <!-- Header --> */}
          <div class="text-center max-w-2xl mx-auto mb-16">
            <span class="inline-block px-4 py-2 text-sm font-semibold bg-green-100 text-green-700 rounded-full mb-4">
              EKOSISTEM MITRA
            </span>

            <h2 class="text-4xl font-bold text-gray-900 mb-4">
              Lamonte Partner Ecosystem 4.0
            </h2>

            <p class="text-gray-600 text-lg leading-relaxed">
              Sistem lengkap dari perhitungan modal, branding, hingga closing.
              Semua dalam satu ekosistem yang terintegrasi.
            </p>
          </div>

          {/* <!-- Grid Cards --> */}
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Card 1 --> */}
            <div class="relative group rounded-3xl p-[1px] bg-gradient-to-br from-blue-200/40 via-white to-transparent hover:from-blue-300/50 transition-all duration-500">
              <div class="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-sm group-hover:shadow-2xl transition duration-500 overflow-hidden">
                {/* subtle decorative blur */}
                <div class="absolute -top-10 -right-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition"></div>

                {/* icon */}
                <div class="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 shadow-inner mb-6">
                  <svg
                    class="w-7 h-7 text-blue-700"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 17v-6a2 2 0 012-2h4" />
                  </svg>
                </div>
                <span class="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
                  Modul A
                </span>

                {/* title */}
                <h3 class="text-xl font-semibold text-gray-900 mb-3">
                  Branding Toko Naik Kelas
                </h3>

                {/* description */}
                <p class="text-gray-600 leading-relaxed mb-6">
                  Toko kecil rasa official store. Dapat desain sertifikat, ID
                  card, banner, dan template feed seragam. Bikin calon pembeli
                  langsung percaya
                </p>

                {/* link */}
                <a
                  href="#"
                  class="inline-flex items-center text-blue-700 font-medium gap-2 transition-all duration-300 group-hover:gap-3"
                >
                  Pelajari Modul
                  <span class="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* <!-- Card 2 --> */}
            <div class="relative group rounded-3xl p-[1px] bg-gradient-to-br from-green-200/40 via-white to-transparent hover:from-green-300/50 transition-all duration-500">
              <div class="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-sm group-hover:shadow-2xl transition duration-500 overflow-hidden">
                {/* subtle decorative blur */}
                <div class="absolute -top-10 -right-10 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition"></div>

                {/* icon */}
                <div class="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-green-100 to-green-50 shadow-inner mb-6">
                  <svg
                    class="w-7 h-7 text-green-700"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 17v-6a2 2 0 012-2h4" />
                  </svg>
                </div>
                <span class="inline-block text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full mb-4">
                  Modul B
                </span>

                {/* title */}
                <h3 class="text-xl font-semibold text-gray-900 mb-3">
                  Angka Jelas, Target Nyata
                </h3>

                {/* description */}
                <p class="text-gray-600 leading-relaxed mb-6">
                  Masukkan modal dan target penghasilan. Sistem hitung otomatis
                  target harian, harga ideal, dan skenario promo.
                </p>

                {/* link */}
                <a
                  href="#"
                  class="inline-flex items-center text-green-700 font-medium gap-2 transition-all duration-300 group-hover:gap-3"
                >
                  Pelajari Modul
                  <span class="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* <!-- Card 3 --> */}
            <div class="relative group rounded-3xl p-[1px] bg-gradient-to-br from-pink-200/40 via-white to-transparent hover:from-pink-300/50 transition-all duration-500">
              <div class="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-sm group-hover:shadow-2xl transition duration-500 overflow-hidden">
                {/* subtle decorative blur */}
                <div class="absolute -top-10 -right-10 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition"></div>

                {/* icon */}
                <div class="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-pink-50 shadow-inner mb-6">
                  <svg
                    class="w-6 h-6 text-pink-600"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                </div>
                <span class="inline-block text-xs font-semibold text-pink-600 bg-pink-50 px-3 py-1 rounded-full mb-4">
                  Modul C
                </span>

                {/* title */}
                <h3 class="text-xl font-semibold text-gray-900 mb-3">
                  Konten & Katalog Profesional
                </h3>

                {/* description */}
                <p class="text-gray-600 leading-relaxed mb-6">
                  Diajarin cara foto anak pakai HP angle yang Laku, dan fiber
                  praktis Plus stok foto katalog profesional yang siap pakal
                </p>

                {/* link */}
                <a
                  href="#"
                  class="inline-flex items-center text-pink-700 font-medium gap-2 transition-all duration-300 group-hover:gap-3"
                >
                  Pelajari Modul
                  <span class="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Bottom CTA --> */}
          <div class="mt-10 text-center">
            <a
              href="#"
              class="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-yellow-400 hover:bg-yellow-500 transition font-semibold text-gray-900  shadow-[0_10px_30px_rgba(26,60,4,0.25)] hover:shadow-[0_15px_40px_rgba(26,60,4,0.35)] hover:-translate-y-1"
            >
              Cek Slot Wilayah
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

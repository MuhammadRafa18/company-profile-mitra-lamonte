import React from "react";

export const KenapaSekarang = () => {
  return (
    <>
      <section
        id="kenapa-sekarang"
        class="relative py-14 md:py-20 bg-gradient-to-b from-amber-50 via-white to-white overflow-hidden"
      >
        {/* <!-- Soft Yellow Ambient Glow --> */}
        <div class="absolute -top-24 -left-24 w-72 h-72 bg-yellow-300 opacity-10 blur-3xl rounded-full"></div>
        <div class="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400 opacity-5 blur-3xl rounded-full"></div>

        <div class="relative max-w-7xl mx-auto px-5 md:px-8">
          <div class="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-start">
            {/* <!-- LEFT SIDE --> */}
            <div>
              {/* <!-- Headline --> */}
              <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Bisnis Baju Anak Bukan Sekadar Tren
                <span class="relative inline-block">
                  <span class="relative z-10">
                    Kebutuhannya Datang Berulang
                  </span>
                  <span class="absolute bottom-1 left-0 w-full h-3 bg-yellow-300/60 -z-0 rounded"></span>
                </span>
              </h2>

              {/* <!-- Subline --> */}
              <p class="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed">
                Baju dewasa cenderung dipakai lama. Baju anak mengikuti
                pertumbuhan.
              </p>

              {/* <!-- Bullet Points --> */}
              <div class="mt-8 space-y-5">
                <div class="flex gap-4">
                  <div class="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 text-gray-900 font-semibold text-sm shrink-0">
                    1
                  </div>
                  <p class="text-gray-700 leading-relaxed">
                    Pertumbuhan menciptakan kebutuhan baru
                  </p>
                </div>

                <div class="flex gap-4">
                  <div class="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 text-gray-900 font-semibold text-sm shrink-0">
                    2
                  </div>
                  <p class="text-gray-700 leading-relaxed">
                    Ada fase permintaan yang berulang
                  </p>
                </div>

                <div class="flex gap-4">
                  <div class="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 text-gray-900 font-semibold text-sm shrink-0">
                    3
                  </div>
                  <p class="text-gray-700 leading-relaxed">
                    Pasarnya ramai, tapi jarang terstruktur
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- RIGHT SIDE (Sticky Conversion Card) --> */}
            <div class="lg:sticky lg:top-24">
              {/* <!-- Gradient Border Soft --> */}
              <div class="rounded-3xl p-[1px] bg-gradient-to-br from-yellow-300/40 to-transparent">
                <div class="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                  <h3 class="text-2xl font-semibold text-gray-900">
                    Bagaimana Kemitraan Lamonte Berjalan
                  </h3>

                  <div class="mt-8 space-y-6">
                    <div class="flex gap-4">
                      <div class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-900 text-white font-semibold text-sm shrink-0">
                        1
                      </div>
                      <div>
                        <p class="font-medium text-gray-900">
                          Memilih Skema Kemitraan
                        </p>
                        <p class="text-gray-600 text-sm leading-relaxed">
                          Disesuaikan dengan kapasitas dan arah pengembangan bisnis.
                        </p>
                      </div>
                    </div>

                    <div class="flex gap-4">
                      <div class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-900 text-white font-semibold text-sm shrink-0">
                        2
                      </div>
                      <div>
                        <p class="font-medium text-gray-900">
                          Proses Onboarding & Aktivasi Sistem
                        </p>
                        <p class="text-gray-600 text-sm leading-relaxed">
                          Produk, aplikasi, dan alur operasional.
                        </p>
                      </div>
                    </div>

                    <div class="flex gap-4">
                      <div class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-900 text-white font-semibold text-sm shrink-0">
                        3
                      </div>
                      <div>
                        <p class="font-medium text-gray-900">
                          Pendampingan Saat Penjualan Berjalan
                        </p>
                        <p class="text-gray-600 text-sm leading-relaxed">
                          Support untuk strategi, marketing, dan operasional.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* <!-- CTA --> */}
                  <div class="mt-8">
                    <a
                      href="#paket-kemitraan"
                      class="w-full inline-flex justify-center items-center gap-3 px-8 py-4 rounded-2xl bg-yellow-400 hover:bg-yellow-500 transition font-semibold text-white shadow-md"
                    >
                      Lihat Informasi Kemitraan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

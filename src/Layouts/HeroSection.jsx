import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.png";
export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden font-sans">
      {/* subtle background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-[#f6fbe9]" />

      <div
        className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 
                  py-16 sm:py-20 lg:py-28 
                  grid lg:lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center"
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 
                      text-xs font-semibold tracking-wide 
                      bg-gray-100 text-gray-700
                      px-4 py-1.5 rounded-full mb-6"
          >
            Jalur Distribusi 2026
          </div>

          {/* Headline */}
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl 
                     font-bold text-[#1A3C04] 
                     leading-tight"
          >
            Bangun Brand Baju Anakmu
            <span className="">
              Tanpa Produksi & Gudang
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6  font-medium text-base sm:text-lg text-gray-600 leading-relaxed">
            Sistem distribusi siap pakai untuk kamu yang ingin fokus jualan dan
            branding tanpa ribet operasional.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button
              className="bg-[#1A3C04] text-white
                           px-6 py-3 rounded-full font-medium cursor-pointer  
                           hover:bg-[#142F03] hover:text-white
                           transition-all duration-300"
            >
              Lihat Paket dan Bonus
            </button>
          </div>

          {/* Small trust line */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-sm text-gray-600">
            {[
              "Modal ringan, branding mewah",
              "Pola penjualan terbukti jalan",
              "Dibimbing sampai benar-benar bisa",
              "Tanpa ribet produksi & gudang",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 text-gray-500 mt-[2px] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>

                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
        

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={hero}
              alt="Distribusi produk"
              className="w-full h-[300px] sm:h-[380px] lg:h-[450px] object-cover"
            />
          </div>

          {/* floating card */}
          <div
            className="hidden sm:block absolute -bottom-6 -left-6 
                      bg-white shadow-lg border border-gray-100 rounded-xl px-6 py-4"
          >
            <p className="text-sm text-gray-500">Produk Siap Kirim</p>
            <p className="text-lg font-bold text-[#1A3C04]">
              1000+ Paket / Minggu
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

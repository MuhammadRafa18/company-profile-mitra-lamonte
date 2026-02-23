import React from "react";
import { redirectToWhatsApp } from "./Redirec";

export const Vidio = () => {
  return (
    <>
      <div
        id="dokumentasi"
        className="relative py-14 md:py-20 px-4 sm:px-6 lg:px-16 
          bg-gradient-to-b from-amber-50 via-white to-white overflow-hidden"
      >
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
            <span
              className="inline-block px-4 py-2 text-[11px] font-semibold rounded-full mb-4
            text-[color:var(--color-tersier)]
            bg-[rgba(76,175,80,0.10)]"
            >
              VIDIO PENJELASAN
            </span>

            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
              font-semibold text-gray-900 leading-[1.15]"
            >
              Bangun Bisnis Fashion <br className="hidden sm:block" />
              dengan Sistem yang Sudah Jalan
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              Pelajari bagaimana mitra menjalankan bisnis dengan arah yang lebih
              jelas, dukungan yang nyata, dan sistem yang dirancang untuk tumbuh
              jangka panjang.
            </p>

            {/* CTA */}
            <div className="pt-3">
              <button
                onClick={() =>
                  redirectToWhatsApp({
                    phone: "628111189921",
                    type: "mitra",
                  })
                }
                className="w-full sm:w-auto px-6 py-3 rounded-2xl 
              bg-amber-400 hover:bg-amber-300
              text-white text-sm font-semibold
                shadow-lg shadow-amber-200/40
                transition-all duration-300
                hover:-translate-y-0.5 cursor-pointer"
              >
                Daftar Jadi Mitra
              </button>
            </div>

            {/* Divider Halus */}
            <div className="w-10 h-[2px] bg-amber-400/70 mx-auto lg:mx-0"></div>
          </div>

          {/* RIGHT VIDEO */}
          <div className="lg:col-span-7 relative group">
            {/* Glow Premium */}
            <div className="absolute -inset-3 bg-amber-200/40 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

            <div
              className="relative aspect-video rounded-3xl overflow-hidden
              shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              border border-amber-100
              transition-all duration-500
              group-hover:-translate-y-1"
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/i8ol6RhnD60"
                title="Video Penjelasan"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

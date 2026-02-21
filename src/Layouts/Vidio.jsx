import React from "react";

export const Vidio = () => {
  return (
    <>
      <div id="dokumentasi" className="relative font-sans py-28 px-6 lg:px-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* subtle background accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A3C04]/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:col-span-5 lg:pt-12 space-y-6 max-w-lg">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#1A3C04] uppercase">
              Video Penjelasan
            </span>

            <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 leading-[1.15]">
              Sistem Distribusi yang Terstruktur dan Teruji
            </h2>

            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
              Penjelasan menyeluruh mengenai alur distribusi, dukungan
              operasional, serta mekanisme kemitraan yang dijalankan secara
              konsisten.
            </p>

            <div className="w-12 h-[2px] bg-[#1A3C04]"></div>
          </div>

          {/* Right Video */}
          <div className="lg:col-span-7 relative group">
            <div className="absolute -inset-4 bg-[#1A3C04]/8 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-100 transition-transform duration-500 group-hover:-translate-y-2">
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

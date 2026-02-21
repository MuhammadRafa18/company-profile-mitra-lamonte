import React from "react";
import katalog1 from "../assets/1.jpeg"
import katalog2 from "../assets/2.jpeg"
import katalog3 from "../assets/3.jpeg"
import katalog4 from "../assets/4.jpeg"
import katalog5 from "../assets/5.jpeg"
import katalog6 from "../assets/6.jpeg"
import { redirectToWhatsApp } from "./Redirec";

export const Katalog = () => {
    const image = [katalog1,katalog2,katalog3,katalog4,katalog6];
  return (
    <>
      <section id="katalog" className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* subtle glow background */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-green-200 rounded-full blur-[180px] opacity-20"></div>
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-yellow-200 rounded-full blur-[180px] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-5 tracking-tight">
              Katalog Produk Laris Lamonte
            </h2>

            <div className="h-[2px] w-20 mx-auto bg-gradient-to-r from-green-600 to-yellow-500 rounded-full mb-6"></div>

            <p className="text-lg text-gray-600">
              Model kekinian, bahan nyaman, desain syari. Disukai anak,
              disetujui bunda.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {image.map((img, i) => (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={img}
                    alt="Produk Lamonte"
                    className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* subtle hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* optional label */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold text-green-700 rounded-full shadow-sm">
                  Best Seller
                </span>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div className="text-center mt-16">
            <button onClick={() =>
                  redirectToWhatsApp({
                    phone: "628111189921",
                    type: "katalog",
                  })
                }
             className="px-8 py-3 rounded-full bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold shadow-lg hover:shadow-2xl hover:brightness-110 transition-all duration-300 cursor-pointer">
              Lihat Semua Katalog
            </button>

            <p className="text-xs text-gray-500 mt-6">
              Mitra mendapat katalog update setiap ada model baru, lengkap
              dengan foto dan deskripsi siap pakai.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

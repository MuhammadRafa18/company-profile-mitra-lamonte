import React from "react";
import { redirectToWhatsApp } from "./Redirec";
import paket1 from "../assets/paket1.jpg";
import paket2 from "../assets/paket2.jpg";
import paket3 from "../assets/paket3.jpg";
import paket4 from "../assets/paket4.jpg";
import paket5 from "../assets/paket5.jpg";

export const PaketKemitraan = () => {
  const slides = [
    {
      badge: "Starter",
      title: "Paket Mulai Aman",
      price: "Rp 650.000",
      desc: "Cocok untuk yang mau mulai tanpa tekanan stok besar.",
      features: [
        "Produk siap jual",
        "Campur ukuran & model",
        "Panduan jualan dasar",
        "Bisa langsung jalan",
      ],
      image: paket1,
      color: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        glow: "bg-blue-500",
      },
    },

    {
      badge: "Growth",
      title: "Paket Jualan Serius",
      price: "Rp 850.000",
      desc: "Untuk yang ingin ritme jualan lebih stabil & variatif.",
      features: [
        "Stok lebih variatif",
        "Mix model favorit",
        "Lebih fleksibel jualan",
        "Margin lebih enak",
      ],
      image: paket2,
      color: {
        bg: "bg-green-50",
        text: "text-green-600",
        glow: "bg-green-500",
      },
    },

    {
      badge: "Best Value",
      title: "Paket Usaha Stabil",
      price: "Rp 1.000.000",
      desc: "Pilihan ideal untuk yang ingin fokus bangun alur bisnis.",
      features: [
        "Komposisi stok lebih matang",
        "Lebih siap scaling",
        "Lebih aman main harga",
        "Lebih nyaman jualan",
      ],
      image: paket3,
      color: {
        bg: "bg-amber-50",
        text: "text-amber-600",
        glow: "bg-amber-500",
      },
    },

    {
      badge: "Serius Bangun Brand",
      title: "Paket Level Up",
      price: "Rp 1.200.000",
      desc: "Untuk yang ingin usaha terlihat lebih proper & rapi.",
      features: [
        "Varian lebih kuat",
        "Lebih mudah bikin promo",
        "Lebih menarik di konten",
        "Lebih siap main volume",
      ],
      image: paket4,
      color: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        glow: "bg-purple-500",
      },
    },
    {
      badge: "High Tier",
      title: "Paket Skala Serius",
      price: "Rp 1.500.000",
      desc: "Untuk yang ingin stok lebih siap, lebih leluasa main volume & promo.",
      features: [
        "Komposisi stok lebih agresif",
        "Lebih kuat main bundling",
        "Lebih fleksibel strategi harga",
        "Lebih siap dorong omset",
      ],
      image: paket5,
      color: {
        bg: "bg-rose-50",
        text: "text-rose-600",
        glow: "bg-rose-500",
      },
    },
  ];
  return (
    <>
      <section id="paket-kemitraan" className="relative py-14 md:py-20 bg-gradient-to-b from-amber-50 via-white to-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Headline */}
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 text-[11px] font-semibold rounded-full mb-4 text-amber-700 bg-amber-100">
              PAKET KEMITRAAN
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Bangun Bisnis Fashion Tanpa Tebak-Tebakan
            </h2>

            <p className="text-sm text-gray-600 max-w-md mx-auto">
              Sistem, strategi, dan pendampingan yang bantu usaha kamu jalan
              lebih rapi & terarah.
            </p>
          </div>
          <div
            className="
            flex gap-4 md:gap-6 overflow-x-auto pb-4
            snap-x snap-mandatory scroll-smooth
            [-ms-overflow-style:none] [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden"
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="
                snap-start shrink-0
                w-[70%] sm:w-[50%] md:w-[40%] lg:w-[320px]"
              >
                <div
                  className="
                  bg-white rounded-3xl overflow-hidden
                  border border-[rgba(0,0,0,0.05)]
                  shadow-[0_15px_40px_rgba(0,0,0,0.06)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                  relative"
                >
                  {/* ✅ Ambient Shape (Halus Banget) */}
                  <div
                    className={`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-3xl opacity-10 ${slide.color.glow}`}
                  />

                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white to-transparent opacity-40" />

                  {/* Image */}
                  <div className="relative">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full aspect-[4/3] object-cover"
                    />

                    <div
                      className={`absolute inset-0 opacity-10 ${slide.color.glow}`}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Badge */}
                    <span
                      className={`inline-block text-[10px] font-semibold px-3 py-1 rounded-full mb-2 ${slide.color.text} ${slide.color.bg}`}
                    >
                      {slide.badge}
                    </span>

                    {/* Title */}
                    <h3 className="text-xs sm:text-sm font-semibold text-gray-900">
                      {slide.title}
                    </h3>

                    {/* Price */}
                    <div className="mt-2 text-sm sm:text-lg font-bold text-gray-900">
                      {slide.price}
                    </div>

                    {/* Desc */}
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      {slide.desc}
                    </p>

                    {/* Features */}
                    <ul className="mt-3 space-y-1 ">
                      {slide.features.map((item, i) => (
                        <li
                          key={i}
                          className="text-xs text-gray-700 flex items-start gap-2"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full mt-1.5 ${slide.color.glow}`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Button */}
                    <button
                      onClick={() =>
                        redirectToWhatsApp({
                          phone: "628111189921",
                          type: "paket",
                          data : {
                            paket: slide.title
                          },
                        })
                      }
                      className=" cursor-pointer
                      mt-4 w-full py-2.5 rounded-xl
                      bg-gradient-to-r from-[#FFC83D] via-[#FFB800] to-[#F59E0B]
                      text-white text-xs font-semibold
                      shadow-[0_8px_20px_rgba(255,184,0,0.35)]
                      transition-all duration-300
                      hover:scale-[1.02]"
                    >
                      Pilih Paket Ini
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

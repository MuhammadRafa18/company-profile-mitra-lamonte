import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.png";
import { useNavigate } from "react-router";
import { redirectToWhatsApp } from "./Redirec";
export const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Program Reseller Fashion Anak"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-white">
        {/* Small Label */}
        <span
          className="inline-block 
        bg-[#FFC83D] text-black
          text-xs font-medium tracking-wide
          px-4 py-1.5 rounded-full 
          mb-6"
        >
          Official Reseller Program
        </span>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
          Bangun Bisnis Fashion Anak
          <span className="block">Tanpa Infrastruktur Produksi</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base sm:text-lg text-gray-200 max-w-2xl">
          Kami menghadirkan skema kemitraan yang terstruktur, dengan dukungan
          produk, sistem, dan pendampingan berkelanjutan.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <button
            onClick={() =>
              redirectToWhatsApp({
                phone: "628111189921",
                type: "mitra",
              })
            }
            className="inline-block bg-[#4CAF50] hover:bg-[#3f9e46]
                   text-white font-semibold text-lg
                   px-8 py-4 rounded-full
                   shadow-[0_12px_35px_rgba(76,175,80,0.35)]
                   transition-all duration-300 cursor-pointer"
          >
            Ajukan Sebagai Mitra Resmi
          </button>

          <p className="mt-4 text-sm text-gray-300">
            Telah dipercaya oleh mitra aktif di berbagai kota.
          </p>
        </div>
      </div>
    </section>
  );
};

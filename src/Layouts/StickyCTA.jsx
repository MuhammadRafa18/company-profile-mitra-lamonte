import React from "react";
import { redirectToWhatsApp } from "./Redirec";

export const StickyCTA = () => {
  return (
    <>
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[92%] max-w-xl z-50">
        <div className="backdrop-blur-xl bg-white/85 shadow-2xl rounded-full px-4 py-3 flex items-center justify-between">
          <span className="text-xs sm:text-sm font-medium text-gray-800 pl-3">
            Bangun Bisnis Fashion Anak Bersama Kami
          </span>

          <button
            onClick={() =>
              redirectToWhatsApp({
                phone: "628111189921",
                type: "mitra",
              })
            }
            className="bg-[#FFC83D] text-xs sm:text-sm cursor-pointer text-black px-6 py-3 rounded-full font-semibold hover:brightness-95 active:scale-95 transition text-white"
          >
            Mulai Jadi Mitra
          </button>
        </div>
      </div>
    </>
  );
};

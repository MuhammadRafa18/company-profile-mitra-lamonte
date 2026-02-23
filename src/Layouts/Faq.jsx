import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { redirectToWhatsApp } from "./Redirec";

export const Faq = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
  {
    q: "Saya benar-benar baru, belum pernah jualan. Masih cocok ikut?",
    a: "Justru itu yang paling banyak gabung. Sistem kemitraan ini dirancang supaya kamu nggak mulai dengan tebak-tebakan. Ada panduan jelas, materi siap pakai, dan arahan yang bisa langsung dipraktikkan.",
  },
  {
    q: "Kalau saya sudah jualan produk lain, masih relevan gabung?",
    a: "Sangat relevan. Banyak mitra menjadikan Lamonte sebagai lini yang lebih stabil & lebih mudah diposisikan. Produk tetap jalan tanpa harus bentrok dengan jualan utama kamu.",
  },
  {
    q: "Ada jaminan pasti laku?",
    a: "Tidak ada bisnis yang bisa menjanjikan hasil instan. Yang kami siapkan adalah produk yang sudah terbukti jalan, sistem yang rapi, dan pola jualan yang lebih terarah. Eksekusi tetap di tangan kamu.",
  },
];

  return (
    <section id="faq" className="relative py-14 md:py-20 bg-gradient-to-b from-amber-50 via-white to-white  overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-30" />
      {/* subtle background glow */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-green-200 rounded-full blur-[150px] opacity-20"></div>
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-yellow-200 rounded-full blur-[150px] opacity-20"></div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
        
          <h2 className="text-4xl font-bold text-gray-900 mb-5 tracking-tight">
            Pertanyaan yang Sering Ditanyakan Calon Mitra
          </h2>
          <div className="h-[2px] w-20 mx-auto bg-primery rounded-full"></div>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`  group rounded-3xl border transition-all duration-500 shadow-sm hover:shadow-xl
              ${
                open === i
                  ? "bg-green-50 border-green-200"
                  : "bg-white border-gray-100"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left cursor-pointer"
              >
                <span className="font-semibold text-gray-900">{item.q}</span>

                <ChevronDown
                  className={`transition-transform duration-500 cursor-pointer
                  ${open === i ? "rotate-180 text-green-600" : "text-gray-400"}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500
                ${open === i ? "max-h-40 px-6 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() =>
              redirectToWhatsApp({
                phone: "628111189921",
                type: "faq",
              })
            }
            className="px-8 py-3 rounded-full bg-primery text-white font-semibold shadow-lg hover:shadow-2xl hover:brightness-110 transition-all duration-300 cursor-pointer"
          >
            Masih Ada Pertanyaan? Konsultasi Langsung
          </button>
        </div>
      </div>
    </section>
  );
};

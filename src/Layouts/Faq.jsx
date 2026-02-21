import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { redirectToWhatsApp } from "./Redirec";

export const Faq = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "Saya pemula banget, belum pernah jualan. Masih bisa ikut?",
      a: "Sangat bisa. Ekosistem ini memang dibuat agar pemula punya sistem jualan rapi sejak awal. Ada panduan step-by-step, video, dan grup WA yang bantu kamu dari nol.",
    },
    {
      q: "Kalau saya sudah jualan brand lain, boleh gabung Lamonte juga?",
      a: "Boleh. Banyak mitra yang menambah Lamonte sebagai lini premium. Kami bantu atur positioning supaya jualanmu tidak saling tabrakan.",
    },
    {
      q: "Apakah ada garansi kalau saya nggak bisa jualan?",
      a: "Kami tidak janji kaya mendadak. Kami siapkan sistem, materi, dan pendampingan. Tugasmu hadir di kelas, praktik, dan konsisten. Kalau kamu niat belajar dan mau ikut arahan, peluang berhasil jauh lebih besar.",
    },
  ];

  return (
    <section id="faq" className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-green-200 rounded-full blur-[150px] opacity-20"></div>
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-yellow-200 rounded-full blur-[150px] opacity-20"></div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-5 tracking-tight">
            Pertanyaan yang Sering Ditanyakan Calon Mitra
          </h2>
          <div className="h-[2px] w-20 mx-auto bg-gradient-to-r from-green-600 to-yellow-500 rounded-full"></div>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`group rounded-3xl border transition-all duration-500 shadow-sm hover:shadow-xl
              ${
                open === i
                  ? "bg-green-50 border-green-200"
                  : "bg-white border-gray-100"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left"
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
            className="px-8 py-3 rounded-full bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold shadow-lg hover:shadow-2xl hover:brightness-110 transition-all duration-300 cursor-pointer"
          >
            Masih Ada yang Mengganjal? Tanya Admin Sekarang
          </button>
        </div>
      </div>
    </section>
  );
};

import { useRef, useState } from "react";
import testimoni1 from "../assets/testimoni1.jpg";
import testimoni2 from "../assets/testimoni2.jpg";
import testimoni3 from "../assets/testimoni3.jpg";
import testimoni4 from "../assets/testimoni4.jpg";
import testimoni5 from "../assets/testimoni5.jpg";
import testimoni6 from "../assets/testimoni6.jpg";
import testimoni7 from "../assets/testimoni7.jpg";
import testimoni8 from "../assets/testimoni8.jpg";
import testimoni9 from "../assets/testimoni9.jpg";
import testimoni10 from "../assets/testimoni10.jpg";
import testimoni11 from "../assets/testimoni11.jpg";
import testimoni12 from "../assets/testimoni12.jpg";
import testimoni13 from "../assets/testimoni13.jpg";
import testimoni14 from "../assets/testimoni14.jpg";
import testimoni15 from "../assets/testimoni15.jpg";
import testimoni16 from "../assets/testimoni16.jpg";
import testimoni17 from "../assets/testimoni17.jpg";
import testimoni18 from "../assets/testimoni18.jpg";



export const Testimoni = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const sectionRef = useRef(null);

  const mitraData = [
    {
      image: testimoni1,
      title: "Mitra Bandung",
      phase: "Bulan ke-2",
      growth: "+37% transaksi",
    },
    {
      image: testimoni2,
      title: "Mitra Surabaya",
      phase: "Repeat Order",
      growth: "+52% peningkatan",
    },
    {
      image: testimoni3,
      title: "Mitra Makassar",
      phase: "Distribusi Aktif",
      growth: "+41% volume",
    },
    {
      image: testimoni4,
      title: "Mitra Medan",
      phase: "Repeat Order",
      growth: "+48% volume",
    },
    {
      image: testimoni5,
      title: "Mitra Yogyakarta",
      phase: "Bulan Ke-4",
      growth: "+34% volume",
    },
    {
      image: testimoni6,
      title: "Mitra Pontianak",
      phase: "Distribusi Aktif",
      growth: "+55% volume",
    },
    {
      image: testimoni7,
      title: "Mitra Bali",
      phase: "Repeat Order",
      growth: "+29% volume",
    },
    {
      image: testimoni8,
      title: "Mitra Palu",
      phase: "Repeat Order",
      growth: "+26% volume",
    },
    {
      image: testimoni9,
      title: "Mitra Batam",
      phase: "Bulan Ke-6",
      growth: "+30% volume",
    },
    {
      image: testimoni10,
      title: "Mitra Tanggerang",
      phase: "Distribusi Aktif",
      growth: "+28% volume",
    },

  ];

  return (
    <section
      id="testimoni"
      ref={sectionRef}
      className="relative py-14 md:py-20 bg-gradient-to-b from-amber-50 via-white to-white overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block px-4 py-2 text-[11px] font-semibold rounded-full mb-4 text-amber-700 bg-amber-100">
            TESTIMONI MITRA
          </span>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
            Bisnisnya Sudah Jalan. Bukan Baru Mulai.
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Transaksi berjalan, repeat order terjadi, distribusi aktif di berbagai kota.
          </p>
        </div>

        {/* Slider */}
        <div
          className="flex gap-4 md:gap-6 overflow-x-auto pb-4
          snap-x snap-mandatory scroll-smooth
          [-ms-overflow-style:none] [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden"
        >
          {mitraData.map((item, i) => (
            <div
              key={i}
              onClick={() => setSelectedImage(item.image)}
              className="snap-start shrink-0 cursor-pointer
              w-[65%] sm:w-[50%] md:w-[40%] lg:w-[312px]

              bg-white rounded-3xl overflow-hidden
              border border-amber-100
              shadow-[0_10px_30px_rgba(0,0,0,0.06)]

              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_40px_rgba(0,0,0,0.10)]"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[4/5] object-cover"
                />

                <div className="absolute top-4 right-4 bg-amber-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {item.growth}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-sm font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  {item.phase}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Preview */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center 
            bg-black/40 backdrop-blur-sm animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Preview"
                className="max-h-[85vh] w-auto mx-auto rounded-2xl shadow-2xl"
              />

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white cursor-pointer"
              >
                <svg
                  className="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    d="m8.464 15.535l7.072-7.07m-7.072 0l7.072 7.07"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

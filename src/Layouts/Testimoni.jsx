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
  const [showAll, setShowAll] = useState(false);
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
      title: "Mitra Pontianak",
      phase: "Bulan ke-5",
      growth: "+39% volume",
    },
    {
      image: testimoni6,
      title: "Mitra Bali",
      phase: "Distribusi Aktif",
      growth: "+44% volume",
    },

    {
      image: testimoni7,
      title: "Mitra Semarang",
      phase: "Bulan ke-3",
      growth: "+35% transaksi",
    },
    {
      image: testimoni8,
      title: "Mitra Palembang",
      phase: "Repeat Order",
      growth: "+46% volume",
    },
    {
      image: testimoni9,
      title: "Mitra Samarinda",
      phase: "Distribusi Aktif",
      growth: "+42% volume",
    },
    {
      image: testimoni10,
      title: "Mitra Batam",
      phase: "Bulan ke-4",
      growth: "+38% transaksi",
    },
    {
      image: testimoni11,
      title: "Mitra Pekanbaru",
      phase: "Repeat Order",
      growth: "+50% peningkatan",
    },
    {
      image: testimoni12,
      title: "Mitra Yogyakarta",
      phase: "Distribusi Aktif",
      growth: "+43% volume",
    },

    {
      image: testimoni13,
      title: "Mitra Banjarmasin",
      phase: "Bulan ke-2",
      growth: "+36% transaksi",
    },
    {
      image: testimoni14,
      title: "Mitra Manado",
      phase: "Repeat Order",
      growth: "+49% volume",
    },
    {
      image: testimoni15,
      title: "Mitra Kupang",
      phase: "Distribusi Aktif",
      growth: "+40% volume",
    },
    {
      image: testimoni16,
      title: "Mitra Tasikmalaya",
      phase: "Bulan ke-6",
      growth: "+45% peningkatan",
    },
    {
      image: testimoni17,
      title: "Mitra Cirebon",
      phase: "Repeat Order",
      growth: "+47% volume",
    },
    {
      image: testimoni18,
      title: "Mitra Malang",
      phase: "Distribusi Aktif",
      growth: "+51% transaksi",
    },
  ];
  const sectionRef = useRef(null);

  return (
    <>
      <div
        id="testimoni"
        ref={sectionRef}
        className="py-28 px-6 lg:px-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#1A3C04] uppercase">
              Dokumentasi Mitra
            </span>

            <h2 className="mt-4 text-3xl lg:text-5xl font-semibold text-gray-900 leading-tight">
              Aktivitas dan Transaksi Mitra Aktif
            </h2>

            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Beberapa dokumentasi nyata dari mitra yang telah menjalankan
              sistem distribusi secara konsisten.
            </p>

            <div className="mt-6 w-12 h-[2px] bg-[#1A3C04]"></div>
          </div>

          {/* Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ease-in-out`}
          >
            {mitraData.map((item, i) => {
              const visible = showAll || i < 3;

              return (
                <div
                  key={i}
                  onClick={() => visible && setSelectedImage(item.image)}
                  className={`
                    group cursor-pointer bg-white rounded-3xl overflow-hidden border border-gray-100
                    transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none h-0 overflow-hidden"}
                `}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-[4/5] object-cover transition duration-700 group-hover:scale-105"
                    />

                    {/* Growth Badge */}
                    <div className="absolute top-4 right-4 bg-[#1A3C04] text-white text-xs px-3 py-1 rounded-full shadow">
                      {item.growth}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">{item.phase}</p>

                    <div className="mt-4 h-[1px] bg-gray-100"></div>

                    <p className="mt-4 text-sm text-gray-600">
                      Aktivitas distribusi berjalan stabil dan menunjukkan
                      pertumbuhan konsisten.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-4 text-center">
            <button
              onClick={() => {
                setShowAll((prev) => {
                  const next = !prev;

                  if (prev === true) {
                    setTimeout(() => {
                      sectionRef.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }, 100);
                  }

                  return next;
                });
              }}
              className={`
                    relative px-8 py-4 rounded-full font-medium cursor-pointer
                    transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${
                      showAll
                        ? "bg-[#1A3C04] text-white shadow-lg hover:shadow-xl hover:-translate-y-1"
                        : "bg-[#1A3C04] text-white shadow-[0_10px_30px_rgba(26,60,4,0.25)] hover:shadow-[0_15px_40px_rgba(26,60,4,0.35)] hover:-translate-y-1"
                    }
                `}
            >
              {showAll
                ? "Tampilkan Lebih Sedikit"
                : "Lihat Lebih Banyak Dokumentasi"}
            </button>
          </div>
        </div>
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/0 backdrop-blur-0 animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Preview"
                className="max-h-[85vh] w-auto mx-auto rounded-2xl shadow-2xl"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white text-sm tracking-widest uppercase cursor-pointer"
              >
                <svg
                  className="w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#ffff"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="m8.464 15.535l7.072-7.07m-7.072 0l7.072 7.07"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

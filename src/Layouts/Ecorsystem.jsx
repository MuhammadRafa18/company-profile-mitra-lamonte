export const Ecorsystem = () => {
  const slides = [
    {
      badge: "Modul Branding",
      title: "Tampilan Bisnis Lebih Meyakinkan",
      desc: "Visual, materi promosi, dan identitas usaha dibuat lebih rapi dan konsisten. Bukan sekadar terlihat jualan, tapi terlihat seperti brand.",

      color: {
        bg: "bg-yellow-50",
        text: "text-[#FFC83D]",
        glow: "bg-yellow-400",
      },

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="#FFC83D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M13.5 8h-3M15 2l-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3" />
            <path d="M16.899 22A5 5 0 0 0 7.1 22M9 2l3 6" />
            <circle cx="12" cy="15" r="3" />
          </g>
        </svg>
      ),
    },

    {
      badge: "Modul Strategi",
      title: "Arah Jualan Lebih Jelas",
      desc: "Bukan tebak-tebakan harga atau target. Semua dibantu lebih terukur supaya kamu tahu angka yang dikejar.",

      color: {
        bg: "bg-green-50",
        text: "text-green-500",
        glow: "bg-green-400",
      },

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#22C55E"
            d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 2v4h10V4zm0 6v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"
          />
        </svg>
      ),
    },

    {
      badge: "Modul Konten",
      title: "Produk Terlihat Lebih Menarik",
      desc: "Panduan visual dan materi katalog yang bantu produk tampil lebih proper dan enak dilihat calon pembeli.",

      color: {
        bg: "bg-blue-50",
        text: "text-blue-500",
        glow: "bg-blue-400",
      },

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="3.2" fill="#3B82F6" />
          <path
            fill="#3B82F6"
            d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"
          />
        </svg>
      ),
    },
    {
      badge: "Pendampingan",
      title: "Tidak Jalan Sendiri",
      desc: "Bukan cuma materi. Ada arahan, evaluasi, dan pendampingan supaya bisnis kamu benar-benar bergerak, bukan sekadar paham teori.",

      color: {
        bg: "bg-purple-50",
        text: "text-purple-500",
        glow: "bg-purple-400",
      },

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#A855F7"
            d="M12 12c2.7 0 8 1.34 8 4v2H4v-2c0-2.66 5.3-4 8-4m0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="ecosystem" className="relative py-14 md:py-20 bg-gradient-to-b from-amber-50 via-white to-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span
            className="inline-block px-4 py-2 text-[11px] font-semibold rounded-full mb-4
            text-[color:var(--color-tersier)]
            bg-[rgba(76,175,80,0.10)]"
          >
            EKOSISTEM MITRA
          </span>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Sistem Pendukung Bisnis Mitra
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Dirancang untuk membantu mitra membangun bisnis yang lebih rapi,
            terarah, dan berkelanjutan.
          </p>
        </div>

        {/* Slider */}
        <div
          className="
          flex gap-4 overflow-x-auto pb-4
          snap-x snap-mandatory scroll-smooth
          [-ms-overflow-style:none] [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
          lg:grid lg:grid-cols-4
          lg:gap-3
          lg:overflow-visible"
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="
              group snap-start shrink-0
              w-[70%] sm:w-[45%] md:w-[40%] lg:w-full
              bg-white rounded-3xl p-6 md:p-7
              border border-[rgba(0,0,0,0.04)]
              shadow-[0_10px_30px_rgba(0,0,0,0.05)]
              relative overflow-hidden
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              {/* Glow Dinamis */}
              <div
                className={`absolute -top-10 -right-10 w-28 h-28
                rounded-full blur-3xl opacity-10 ${slide.color.glow}`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-2xl mb-5
                ${slide.color.bg}`}
              >
                <div
                  className={`${slide.color.text}
                  transition duration-500 group-hover:scale-110`}
                >
                  {slide.icon}
                </div>
              </div>

              {/* Badge */}
              <span
                className={`inline-block text-[11px] font-semibold tracking-wide
                px-3 py-1 rounded-full mb-3
                ${slide.color.text} ${slide.color.bg}`}
              >
                {slide.badge}
              </span>

              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                {slide.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {slide.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

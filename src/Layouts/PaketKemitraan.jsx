import React from "react";
import { redirectToWhatsApp } from "./Redirec";

export const PaketKemitraan = () => {
  return (
    <>
      <section id="paket-kemitraan" className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* <!-- subtle noise overlay --{">"} */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-multiply"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        ></div>
        {/* 
  <!-- background glow --> */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-green-300 rounded-full blur-[200px] opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-yellow-200 rounded-full blur-[200px] opacity-20 animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          {/* <!-- Header --> */}
          <div className="text-center max-w-2xl mx-auto mb-24">
            <h2 className="text-4xl font-bold text-gray-900 mb-5 tracking-tight">
              Pilih Jalur Kemitraan Sesuai Kondisi Kamu
            </h2>
            <div className="h-[2px] w-20 mx-auto bg-gradient-to-r from-green-600 to-yellow-500 rounded-full mb-6"></div>
            <p className="text-lg text-gray-600">
              Mulai dari paket hemat sampai skala distribusi serius.
            </p>
          </div>

          {/* <!-- Pricing Grid --> */}
          <div className="grid lg:grid-cols-3 gap-12 items-stretch">
            {/* 
      <!-- CARD 1 --> */}
            <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-gray-200 to-transparent transition-all duration-500 hover:scale-[1.02]">
              <div className="relative bg-white rounded-3xl p-10 border border-gray-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-5">
                    Paket Sampel Murmer
                  </h3>

                  <div className="mb-7">
                    <span className="text-4xl font-bold text-gray-900 group-hover:text-green-600 transition">
                      Rp 650.000
                    </span>
                    <p className="text-sm text-gray-500 mt-2">
                      Cocok untuk mulai tanpa risiko besar
                    </p>
                  </div>

                  <ul className="space-y-3 text-gray-600">
                    <li>✔ 25 pcs campur ukuran</li>
                    <li>✔ Stock ringan, aman untuk mulai</li>
                    <li>✔ Cocok untuk pemula</li>
                  </ul>
                </div>

                <button
                  onClick={() =>
                    redirectToWhatsApp({
                      phone: "628111189921",
                      type: "paket",
                      data: { paket: "Paket Sampel Murmer" },
                    })
                  }
                  className="mt-10 w-full py-3 rounded-full border border-gray-300 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  Pilih Paket
                </button>
              </div>
            </div>

            {/* <!-- CARD 2 HIGHLIGHT --> */}
            <div className="group relative scale-105 rounded-3xl p-[1px] bg-gradient-to-br from-green-500 via-green-300 to-transparent transition-all duration-500 hover:scale-[1.07]">
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-10 border border-white/60 shadow-2xl flex flex-col justify-between transition-all duration-500">
                {/* <!-- badge --> */}
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-600 to-green-500 text-white text-xs font-semibold px-5 py-2 rounded-full shadow-lg animate-[float_4s_ease-in-out_infinite]">
                  Paling Dipilih Mitra
                </span>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-5">
                    Paket Mix Sampel
                  </h3>

                  <div className="mb-7">
                    <span className="text-4xl font-bold bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
                      Rp 850.000
                    </span>
                    <p className="text-sm text-gray-500 mt-2">
                      Kombinasi best seller & margin stabil
                    </p>
                  </div>

                  <ul className="space-y-3 text-gray-600">
                    <li>✔ 30 pcs mix import lokal</li>
                    <li>✔ Variasi lebih lengkap</li>
                    <li>✔ Cocok untuk scaling awal</li>
                  </ul>
                </div>

                <button
                  onClick={() =>
                    redirectToWhatsApp({
                      phone: "628111189921",
                      type: "paket",
                      data: { paket: "Paket Mix Sampel" },
                    })
                  }
                  className="mt-10 w-full py-3 rounded-full bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold shadow-lg hover:shadow-2xl hover:brightness-110 transition-all duration-300 cursor-pointer"
                >
                  Pilih Paket Ini
                </button>
              </div>
            </div>

            {/* <!-- CARD 3 --> */}
            <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-gray-200 to-transparent transition-all duration-500 hover:scale-[1.02]">
              <div className="relative bg-white rounded-3xl p-10 border border-gray-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-5">
                    Paket Usaha Mix Fashion
                  </h3>

                  <div className="mb-7">
                    <span className="text-4xl font-bold text-gray-900 group-hover:text-green-600 transition">
                      Rp 1.000.000
                    </span>
                    <p className="text-sm text-gray-500 mt-2">
                      Untuk mitra yang ingin naik kelas
                    </p>
                  </div>

                  <ul className="space-y-3 text-gray-600">
                    <li>✔ 36 pcs mix fashion</li>
                    <li>✔ Support konten</li>
                    <li>✔ Siap jualan marketplace</li>
                  </ul>
                </div>

                <button onClick={() =>
                    redirectToWhatsApp({
                      phone: "628111189921",
                      type: "paket",
                      data: { paket: "Paket Usaha Mix Fashion" },
                    })
                  } 
                className="mt-10 w-full py-3 rounded-full border border-gray-300 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-pointer">
                  Pilih Paket
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

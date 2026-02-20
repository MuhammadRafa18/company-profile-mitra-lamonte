import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuItems = [
    { id: 1, name: "Program", href: "#program" },
    { id: 2, name: "Vidio", href: "#vidio" },
    { id: 3, name: "Paket", href: "#paket" },
    { id: 4, name: "Testimoni", href: "#testimoni" },
    { id: 5, name: "Faq", href: "#faq" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div
        className={`sticky top-0 z-50 w-full transition-all duration-300
        ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm transition-colors duration-300 ease-in-out" : "bg-white border-b-2 border-b-[#F4E04D]"}
      `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-5 flex items-center justify-between">
          {/* <!-- LOGO --> */}
          <div className="flex items-center ">
            <img
              src="https://lamonte.id/_ipx/f_webp&s_416x128/https://storage.googleapis.com/ama-ecommerce/lmi/2024/12/27/0-3-900x270.webp"
              alt=""
              className="w-28 sm:w-32 lg:w-40"
            />
            <div class="hidden sm:flex flex-col">
              <span class="text-xs font-black uppercase tracking-widest text-[#4A6718] leading-normal">
                Distributor
              </span>
              <span class="text-[10px] text-white bg-[#4A6718]  px-1 rounded font-bold inline-block w-max">
                Official Access
              </span>
            </div>
          </div>
          {/* Menu */}
          <ul className="hidden lg:flex items-center gap-6 lg:gap-10 text-sm font-medium tracking-wide">
            <li>
              <Link
                href="#"
                className="text-[#1A3C04]
                relative
                after:absolute after:-bottom-1 after:left-0
                after:h-[2px] after:w-0
                after:bg-[#1A3C04]
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                Program
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-[#1A3C04]
                relative
                after:absolute after:-bottom-1 after:left-0
                after:h-[2px] after:w-0
                after:bg-[#1A3C04]
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                Vidio
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-[#1A3C04]
                relative
                after:absolute after:-bottom-1 after:left-0
                after:h-[2px] after:w-0
                after:bg-[#1A3C04]
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                Paket
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-[#1A3C04]
                relative
                after:absolute after:-bottom-1 after:left-0
                after:h-[2px] after:w-0
                after:bg-[#1A3C04]
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                Testimoni
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-[#1A3C04]
                relative
                after:absolute after:-bottom-1 after:left-0
                after:h-[2px] after:w-0
                after:bg-[#1A3C04]
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                Faq
              </Link>
            </li>
            <li></li>
          </ul>

          {/* <!-- RIGHT MENU --> */}
          <div className="flex space-x-2">
            <div
              className="hidden lg:flex items-center gap-6  px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 
            text-xs  rounded-full bg-[#F4E04D] hover:cursor-pointer
            border-2 border-[#4A6718]  font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              <a href="#" className="text-[#1A3C04] ">
                JADI MITRA SEKARANG
              </a>
            </div>
            {/* Button Menu */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 focus:outline-none"
            >
              {open ? (
                <svg
                  className="w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="m8.464 15.535l7.072-7.07m-7.072 0l7.072 7.07"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white shadow-md px-4 sm:px-6 lg:px-8"
            >
              <div className="px-6 py-8 space-y-6">
                {menuItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block text-base font-medium text-[#1A3C04]
                    hover:text-[#4A6718] transition-colors"
                  >
                    {item.name}
                  </a>
                ))}

                <div className="pt-4">
                  <a
                    href="#"
                    className="block text-center bg-[#F4E04D] text-[#1A3C04]
                  font-semibold py-3 rounded-full shadow-md"
                  >
                    Jadi Mitra Sekarang
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

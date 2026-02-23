import { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
        ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm transition-colors duration-300 ease-in-out" : "bg-white border-b-2 border-b-olive-100"}
      `}
      >
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:py-4 flex items-center justify-between">
          {/* <!-- LOGO --> */}
          <div className="flex items-center gap-3">
            <a href="#hero-section">
              <img
                src="https://lamonte.id/_ipx/f_webp&s_416x128/https://storage.googleapis.com/ama-ecommerce/lmi/2024/12/27/0-3-900x270.webp"
                alt=""
                className="w-28 sm:w-32 lg:w-40"
              />
            </a>
            <div className="flex lg:hidden items-center gap-2">
              <div className="w-[3px] h-8 bg-[#4A6718] rounded-full"></div>

              <div className="flex lg:hidden flex-col leading-tight">
                <span className="text-sm font-semibold text-gray-900">
                  Fashion Partnership
                </span>
                <span className="text-[11px] bg-[#4A6718] text-white px-2 py-[2px] rounded-full w-max">
                  Exclusive Program
                </span>
              </div>
            </div>
          </div>
          {/* Menu */}
          <ul className="hidden lg:flex items-center space-x-6 text-sm font-medium tracking-wide">
            <li>
              <a
                href="#hero-section"
                className="text-gray-700 hover:text-[#4A6718]
                relative
                after:absolute after:-bottom-1 after:left-0
                after:h-[2px] after:w-0
                after:bg-[#4A6718]/70
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                Program
              </a>
            </li>
            <li>
              <a
                href="#dokumentasi"
                className="text-gray-700 hover:text-[#4A6718]
                relative
                after:absolute after:-bottom-1 after:left-0
                after:h-[2px] after:w-0
                after:bg-[#4A6718]/70
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                Koleksi
              </a>
            </li>
            <li>
              <a
                href="#paket-kemitraan"
                className="text-gray-700 hover:text-[#4A6718]
                relative
                after:absolute after:-bottom-1 after:left-0
                after:h-[2px] after:w-0
                after:bg-[#4A6718]/70
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                Skema
              </a>
            </li>
            <li>
              <a
                href="#testimoni"
                className="text-gray-700 hover:text-[#4A6718]
                relative
                after:absolute after:-bottom-1 after:left-0
                after:h-[2px] after:w-0
                after:bg-[#4A6718]/70
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                Mitra
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-gray-700 hover:text-[#4A6718]
                relative
                after:absolute after:-bottom-1 after:left-0
                after:h-[2px] after:w-0
                after:bg-[#4A6718]/70
                after:transition-all after:duration-300
                hover:after:w-full"
              >
                FAQ
              </a>
            </li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
};

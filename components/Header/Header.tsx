"use client"; 

import { useState } from 'react';
import Logo from "./Logo";
import RegisterBtn from '../Button/Register/Register';

// آیکون‌های همبرگر و بستن
const HamburgerIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "خانه", active: true },
    { name: "امکانات", active: false },
    { name: "اشتراک", active: false },
    { name: "اپیدو مگ", active: false },
    { name: "درباره ما", active: false },
    { name: "مشاوره سریع", active: false },
  ];

  return (
    <>
      {/* سایه از هدر حذف شد */}
      <header className="relative w-full bg-white pt-5 pb-5 px-4 sm:px-8 md:px-[76px] z-40">
        <nav className="relative flex items-center justify-between w-full">
          
          {/* بخش چپ: دکمه Register در دسکتاپ و همبرگر در موبایل */}
          <div className="hidden lg:flex">
            <button className="flex items-center gap-2 bg-[#19c2f7] hover:bg-[#13b0e6] text-white font-bold py-2 px-6 rounded-xl shadow-md transition-all duration-200 text-lg">
              Register
              <RegisterBtn />
            </button>
          </div>
          <button 
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <HamburgerIcon />
          </button>

          {/* بخش وسط: لینک‌ها در دسکتاپ و دکمه Register در موبایل (با موقعیت absolute) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <ul className="hidden lg:flex items-center gap-8 text-gray-500 font-medium text-lg">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group cursor-pointer">
                  <span className="pb-1">{link.name}</span>
                  {link.active && (
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] h-1 w-8 bg-[#19c2f7] rounded transition-all duration-200 opacity-100"></span>
                  )}
                  {!link.active && (
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-[-8px] h-1 w-8 bg-[#19c2f7] rounded transition-all duration-200 opacity-0 group-hover:opacity-100"></span>
                  )}
                </li>
              ))}
            </ul>
            <div className="lg:hidden">
              <button className="flex items-center gap-2 bg-[#19c2f7] hover:bg-[#13b0e6] text-white font-bold py-2 px-6 rounded-xl shadow-md transition-all duration-200 text-lg">
                Register
                <RegisterBtn />
              </button>
            </div>
          </div>

          {/* بخش راست: لوگو */}
          <div className="flex justify-end">
            <Logo />
          </div>
        </nav>
      </header>

      {/* منوی موبایل (Overlay) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
          <button 
            className="absolute top-9 right-8 text-gray-700"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
          <ul className="flex flex-col items-center gap-10 text-gray-700 font-bold text-2xl">
            {navLinks.map((link) => (
              <li key={link.name} className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
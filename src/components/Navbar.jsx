"use client";

import { useEffect, useState } from "react";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./DropDownMenu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const pathname = usePathname(); 

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

    // Close dropdown when route changes
    useEffect(() => {
      closeDropDown();
    }, [pathname]);
  

  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 inset-x-0 z-[50] w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <div className="p-6 md:p-2 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link
              className="flex flex-col gap-2 cursor-pointer items-center justify-center"
              href="/"
            >
              <Image
                priority
                src="/images/logo.png"
                alt="Logo"
                width={200}
                height={200}
                className="w-14 h-14 md:w-24 md:h-24"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 text-black items-center text-center bg-clip-text">
            <Link href={"/"} className="hover:text-[#902617] cursor-pointer">
              Home
            </Link>
            <Link
              href={"about"}
              className="hover:text-[#902617] cursor-pointer"
            >
              About us
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            {isDropDownVisible ? (
              <div className="relative">
                <X
                  onClick={toggleDropDown}
                  className="w-8 h-8 text-slate-300 cursor-pointer"
                />
                <DropDownMenu onClose={closeDropDown} />
              </div>
            ) : (
              <AlignJustify
                onClick={toggleDropDown}
                className="w-8 h-8 text-slate-300 cursor-pointer"
              />
            )}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-white bg-[#58130a] hover:bg-[#cf7b70] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

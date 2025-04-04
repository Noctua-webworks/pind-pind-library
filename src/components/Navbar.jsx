"use client";

import { useEffect, useState } from "react";
import { AlignJustify, X, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./DropDownMenu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [isDonationMenuOpen, setIsDonationMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleDropDown = () => {
    setIsDropDownVisible(!isDropDownVisible);
  };

  const closeDropDown = () => {
    setIsDropDownVisible(false);
  };

  const toggleDonationMenu = () => {
    setIsDonationMenuOpen(!isDonationMenuOpen);
  };

  useEffect(() => {
    closeDropDown();
    setIsDonationMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Navbar */}
      <div className="sticky top-0 inset-x-0 z-[50] w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <div className="p-2 px-4 md:p-2 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link
              className="flex flex-col gap-2 cursor-pointer items-center justify-center"
              href="/"
            >
              <Image
                priority
                src="/images/logoblack.png"
                alt="Logo"
                width={200}
                height={200}
                className="w-20 h-20 md:w-20 md:h-20"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 text-black items-center text-center bg-clip-text relative">
            <Link href="/" className="hover:text-[#902617] cursor-pointer">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#902617] cursor-pointer">
              About us
            </Link>
            <Link href="/volunteer" className="hover:text-[#902617] cursor-pointer">
              Volunteer
            </Link>

            {/* Donation Dropdown */}
            <div className="relative">
              <button
                onClick={toggleDonationMenu}
                className="flex items-center gap-1 hover:text-[#902617] cursor-pointer focus:outline-none"
              >
                Donation
                {isDonationMenuOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {isDonationMenuOpen && (
                <div className="absolute bg-white shadow-md p-2 rounded-md mt-2 space-y-2 min-w-[200px] z-50">
                  <Link
                    href="/donate-money"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setIsDonationMenuOpen(false)}
                  >
                    Monetary donation
                  </Link>
                  <Link
                    href="/donate-books"
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => setIsDonationMenuOpen(false)}
                  >
                    Books donation
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            {isDropDownVisible ? (
              <div className="relative">
                <X
                  onClick={toggleDropDown}
                  className="w-8 h-8 text-gray-900 cursor-pointer"
                />
                <DropDownMenu onClose={closeDropDown} />
              </div>
            ) : (
              <AlignJustify
                onClick={toggleDropDown}
                className="w-8 h-8 text-gray-900 cursor-pointer"
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

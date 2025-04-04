"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const DropDownMenu = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDonationOpen, setIsDonationOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className={`
        w-screen
        h-screen
        bg-gradient-to-b 
        from-neutral-50
        to-neutral-400 
        bg-opacity-50
        text-slate-300
        p-6
        space-y-4
        absolute
        top-16
        left-0
        right-0
        z-50
        !translate-x-[-86%]
        rounded-t-3xl
        ${isVisible ? "overflow-auto" : "overflow-hidden"}
      `}
      initial={{ opacity: 0, y: "-80%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col space-y-6 text-black text-2xl">
        <Link href="/" onClick={onClose}>
          Home
        </Link>
        <Link href="/about" onClick={onClose}>
          About Us
        </Link>
        <Link href="/contact" onClick={onClose}>
          Contact
        </Link>

        {/* Donation Dropdown */}
        <div>
          <div
            onClick={() => setIsDonationOpen(!isDonationOpen)}
            className="flex items-center justify-between cursor-pointer"
          >
            <span>Donation</span>
            <ChevronDown
              className={`transition-transform ${
                isDonationOpen ? "rotate-180" : ""
              }`}
              size={20}
            />
          </div>

          {isDonationOpen && (
            <div className="mt-3 ml-4 flex flex-col space-y-2 text-lg text-gray-800">
              <Link href="/donate-money" onClick={onClose}>
                Monetary donation
              </Link>
              <Link href="/donate-books" onClick={onClose}>
                Books donation
              </Link>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DropDownMenu;

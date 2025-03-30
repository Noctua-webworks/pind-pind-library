"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const DropDownMenu = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

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
      <div className="flex-col flex space-y-10">
        <Link href="/" className="text-black text-2xl">
          Home
        </Link>
        <Link href="/about" className="text-black text-2xl">
          About Us
        </Link>
        <Link href="/contact" className="text-black text-2xl">
          Contact
        </Link>
      </div>
    </motion.div>
  );
};

export default DropDownMenu;

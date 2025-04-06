"use client";

import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-white text-[#58130a] py-10 rounded-t-3xl shadow-lg border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold">Pind Pind Library</h3>
            <p className="mt-2 text-gray-600">
              Bringing knowledge to every village by setting up libraries in
              religious places.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-gray-700">
              <li>
                <Link href="/about" className="hover:text-[#58130a] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/donate-money"
                  className="hover:text-[#58130a] transition"
                >
                  How to Contribute
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#58130a] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              {[
                { icon: FaFacebookF, link: "https://www.facebook.com/PindPindLibrary" },
                { icon: FaInstagram, link: "https://www.instagram.com/pindpindlibrary" },
                // { icon: FaTwitter, link: "#" },
                { icon: FaEnvelope, link: "mailto:pindpindlibraryfoundation@gmail.com" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  className="p-3 bg-[#58130a] rounded-full text-white hover:bg-opacity-80 transition"
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-10 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Pind Pind Library. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { FaQuoteLeft, FaBookOpen } from "react-icons/fa";

const booksContent = [
  {
    scholar: "Albert Einstein",
    quote: "The only thing that you absolutely have to know, is the location of the library.",
    image: "/einstein.jpg",
  },
  {
    scholar: "Carl Sagan",
    quote: "A book is proof that humans are capable of working magic.",
    image: "/sagan.jpg",
  },
  {
    scholar: "Malala Yousafzai",
    quote: "One child, one teacher, one book, one pen can change the world.",
    image: "/malala.jpg",
  },
  {
    scholar: "Mark Twain",
    quote: "The man who does not read has no advantage over the man who cannot read.",
    image: "/twain.jpg",
  },
];

export function BooksSection() {
  return (
    <section className="py-16 bg-white rounded-lg text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Power of Books</h2>
        
        {/* Block 1: Importance of Books */}
        <div className="p-8 bg-[#f3f4f] rounded-lg shadow-lg flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-xl">
          <FaBookOpen className="w-16 h-16 text-yellow-400 mb-4" />
          <h3 className="text-2xl font-semibold">Why Books Matter</h3>
          <p className="text-gray-300 mt-4">
            Books hold the wisdom of generations, provide knowledge, fuel imagination, and empower individuals to think critically. They are the foundation of learning and progress in every society.
          </p>
        </div>
        
        {/* Block 2: Scholars & Quotes in a Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {booksContent.map((item, index) => (
            <div
              key={index}
              className={`p-6 bg-[#f3f4f] rounded-lg shadow-lg flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-xl ${index % 2 === 0 ? 'col-span-1' : 'row-span-2'}`}
            >
              <Image
                src={item.image}
                width={200}
                height={200}
                className="rounded-lg object-cover border-4 border-gray-500"
                alt={item.scholar}
              />
              <h3 className="text-xl font-semibold mt-4">{item.scholar}</h3>
              <div className="flex items-center justify-center mt-2 text-yellow-400">
                <FaQuoteLeft className="w-6 h-6 mr-2" />
                <p className="italic text-gray-300">"{item.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// app/donate-books/page.js

import React from 'react';

export default function DonateBooksPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Donate Books to Pind Pind Library</h1>
      <p className="mb-4 text-gray-700">
        Be a part of the <strong>Pind Pind Library</strong> movement by donating new or gently used books that can educate, entertain, and inspire readers in rural villages. 
        Your book donations help us fill our village libraries and encourage a strong culture of reading and learning.
      </p>

      <h2 className="text-xl font-semibold mb-2">What Books to Donate?</h2>
      <ul className="list-disc ml-6 mb-4 text-gray-700 space-y-1">
        <li>Children’s books (story books, picture books, learning materials)</li>
        <li>Educational books (school textbooks, reference books)</li>
        <li>Fiction and non-fiction for teens and adults</li>
        <li>Inspirational and motivational books</li>
        <li>Books in local languages (Punjabi, Hindi, Urdu, etc.)</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">How to Donate?</h2>
      <p className="text-gray-700 mb-2">
        You can drop off or courier your books to our donation center at:
      </p>

      <div className="bg-gray-100 p-4 rounded-md shadow-md mb-4">
        <p><strong>Pind Pind Library Donation Center</strong></p>
        <p>Pind Pind Library Foundation</p>
        <p>Main Road, Near Gurudwara Sahib</p>
        <p>District Library Block, Punjab – 144001</p>
        <p>Email: <strong>books@pindpindlibrary.org</strong></p>
      </div>

      <p className="text-gray-600">
        For bulk donations or organizing a book collection drive in your city, reach out to us at the above email. Together, we can build a stronger, smarter Punjab—one book at a time.
      </p>

      <div className="mt-8 text-gray-700">
        <h3 className="text-lg font-semibold mb-2">Why Your Book Donation Matters</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Inspires children and adults in remote villages to read and learn</li>
          <li>Gives second life to books lying unused in homes</li>
          <li>Supports education where resources are scarce</li>
          <li>Spreads knowledge, creativity, and joy</li>
        </ul>
      </div>

      <p className="mt-6 text-gray-700">
        Thank you for contributing to the <strong>Pind Pind Library</strong> initiative. Your books are building futures!
      </p>
    </div>
  );
}

// app/donate-money/page.js

import React from 'react';

export const metadata = {
  title: 'Monetary donation - Pind Pind Library',
};

export default async function DonateMoneyPage() {
  // Static data (SSG) – you could fetch from a CMS or DB here if needed
  const bankDetails = {
    bankName: 'ICICI BANK LIMITED',
    accountHolder: 'Pind Pind Library Foundation',
    accountNumber: '241505000702',
    ifsc: 'ICIC0002415',
    // branch: 'Main City Branch',
    contactEmail: 'pindpindlibrary@gmail.com',
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Donate Money to Pind Pind Library</h1>
      <p className="mb-4 text-gray-700">
        Join us in building a library in every pind (village). Your financial support helps us set up free libraries,
        provide books to children and adults, and create a long-lasting impact on rural education through the
        <strong> Pind Pind Library initiative</strong>.
      </p>

      <h2 className="text-xl font-semibold mb-2">Bank Account Details</h2>
      <div className="bg-gray-100 p-4 rounded-md shadow-md">
        <p><strong>Bank Name:</strong> {bankDetails.bankName}</p>
        <p><strong>Account Holder Name:</strong> {bankDetails.accountHolder}</p>
        <p><strong>Account Number:</strong> {bankDetails.accountNumber}</p>
        <p><strong>IFSC Code:</strong> {bankDetails.ifsc}</p>
        {/* <p><strong>Branch:</strong> {bankDetails.branch}</p> */}
      </div>

      <p className="mt-4 text-gray-600">
        After transferring your donation, please email your transaction details to <strong>{bankDetails.contactEmail}</strong> so we can send you a receipt and acknowledge your support.
      </p>

      <div className="mt-8 text-gray-700">
        <h3 className="text-lg font-semibold mb-2">Why Donate to Pind Pind Library?</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Support free libraries in underserved rural villages</li>
          <li>Promote reading habits and access to knowledge in every pind</li>
          <li>Help create equal learning opportunities for all</li>
          <li>Be part of a mission to empower minds through books</li>
        </ul>
      </div>

      <p className="mt-6 text-gray-700">
        Every contribution, no matter how small, brings us closer to our vision of a library in every village. Thank you for
        supporting the <strong>Pind Pind Library</strong> movement.
      </p>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export default function LocationSelector() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    dob: "",
    phone: "",
    qualification: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/sendVolnMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Email sent successfully!");
        setFormData({ fullname: "", dob: "", phone: "", qualification: "" });
      } else {
        toast.error(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative py-24 flex items-center justify-center text-center bg-[#58130a] text-white overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-6"
        >
          <h1 className="text-5xl font-bold">Join the Movement</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Become a part of something greater. Your time, skills, and heart can bring real change to communities in need.
          </p>
        </motion.div>
      </section>

      <form className="max-w-lg mx-auto mt-5 p-4" onSubmit={handleSubmit}>
        {[
          { label: "Full Name", name: "fullname", type: "text" },
          { label: "Date of Birth", name: "dob", type: "date" },
          { label: "Phone", name: "phone", type: "tel" },
          { label: "Qualification", name: "qualification", type: "text" },
        ].map(({ label, name, type }, i) => (
          <div key={i}>
            <label className="block mt-4 mb-2 text-sm font-medium text-gray-900">{label}</label>
            <input
              required
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#58130a] focus:border-[#58130a] block w-full p-2.5"
            />
          </div>
        ))}

        <div className="mb-3">
          <button
            type="submit"
            disabled={loading}
            className={`cursor-pointer inline-flex h-12 items-center justify-center rounded-md border border-white bg-[#58130a] hover:bg-[#cf7b70] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 mb-10 focus:ring-offset-2 focus:ring-offset-slate-50 w-full mt-2 ${loading ? "opacity-50" : ""}`}
          >
            {loading ? (
              <div className="animate-spin w-5 h-5 border-4 border-t-transparent border-white rounded-full"></div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
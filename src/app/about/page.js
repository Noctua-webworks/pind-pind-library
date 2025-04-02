"use client";

import React from "react";
import Image from "next/image";
import { FaBook, FaHandsHelping, FaGlobe, FaUsers, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function AboutUs() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/contact");
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
                    <h1 className="text-5xl font-bold">About Us</h1>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">
                        Empowering communities through knowledge – one book, one village at a time.
                    </p>
                </motion.div>
            </section>

            {/* Our Mission */}
            <section className="container mx-auto px-6 py-20 text-center">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl"
                >
                    <FaGlobe className="text-5xl text-[#58130a] mx-auto" />
                    <h2 className="text-4xl font-bold mt-4">Our Mission</h2>
                    <p className="mt-6 text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
                        We believe that knowledge should be accessible to everyone. Our mission is to bring books to
                        villages, creating spaces where people can learn, grow, and connect through literature.
                    </p>
                </motion.div>
            </section>

            {/* Why We Started */}
            <section className="bg-white dark:bg-gray-800 py-20 px-6">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="w-full md:w-[35%]"
                    >
                        <h2 className="text-4xl font-bold">Why We Started</h2>
                        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                            Many villages lack access to books, limiting education and growth. We started this initiative to bridge
                            this gap, ensuring that knowledge reaches every corner, inspiring generations to come.
                        </p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="w-full md:w-[35%]"
                    >
                        <Image
                            src="/images/library.jpg"
                            width={500}
                            height={300}
                            alt="Library in a village"
                            className="rounded-lg shadow-lg w-full"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Prerequisites */}
            <section className="bg-gray-200 dark:bg-gray-800 py-20 px-6">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="container mx-auto text-center p-6 rounded-lg shadow-lg bg-white dark:bg-gray-900"
                >
                    <FaCheckCircle className="text-5xl text-[#58130a] mx-auto" />
                    <h2 className="text-4xl font-bold mt-4">Prerequisites for Setting Up a Library</h2>
                    <p className="mt-6 text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
                        To establish a library, your village must have a religious place where the library can be hosted. This ensures accessibility and sustainability within the community.
                    </p>
                </motion.div>
            </section>

            {/* How We Work */}
            <section className="container mx-auto px-6 py-20">
                <h2 className="text-4xl font-bold text-center">How to Set Up a Library</h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center hover:shadow-xl"
                    >
                        <FaUsers className="text-4xl text-[#58130a] mx-auto" />
                        <h3 className="text-2xl font-semibold mt-2">Contact Us</h3>
                        <p className="mt-2 text-gray-700 dark:text-gray-300">Reach out to us, and we will walk you through the process.</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center hover:shadow-xl"
                    >
                        <FaHandsHelping className="text-4xl text-[#58130a] mx-auto" />
                        <h3 className="text-2xl font-semibold mt-2">Guidance & Support</h3>
                        <p className="mt-2 text-gray-700 dark:text-gray-300">We assist you in organizing and setting up a library in a religious place.</p>
                    </motion.div>
                </div>
            </section>



            {/* Call to Action */}
            <section className="bg-[#58130a] text-white text-center py-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold">Join Us in Making a Difference</h2>
                    <p className="mt-4 text-lg max-w-3xl mx-auto">
                        Be a part of our mission. Donate books, volunteer, or help us spread the word.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="cursor-pointer mt-6 px-6 py-3 bg-white text-[#58130a] font-semibold rounded-lg shadow-lg"
                        onClick={handleClick}
                    >
                        Get Involved
                    </motion.button>
                </motion.div>
            </section>
        </div>
    );
}   

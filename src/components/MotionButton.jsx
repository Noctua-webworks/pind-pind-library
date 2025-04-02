"use client";

import { useRouter } from 'next/navigation';
import React from 'react'
import { motion } from "framer-motion";

function MotionButton({title}) {
    const router = useRouter();

    const handleClick = () => {
        router.push("/contact");
    };
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer mt-6 px-6 py-3 bg-white text-[#58130a] font-semibold rounded-lg shadow-lg"
            onClick={handleClick}
        >
            {title}
        </motion.button>
    )
}

export default MotionButton

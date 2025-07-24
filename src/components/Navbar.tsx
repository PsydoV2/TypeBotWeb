"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav>
      <Image
        src="/typebotguy/typebotsummer.png"
        alt="TypeBot Logo"
        width={50}
        height={50}
        priority
      />

      <h1>TypeBot</h1>

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        href="https://github.com/PsydoV2/TypeBot"
        id="gitBtnSmall"
      >
        <FaGithub />
      </motion.a>
    </nav>
  );
}

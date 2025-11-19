"use client";

import { motion } from "framer-motion";

export default function AboutMobileContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative z-10 px-6 py-8 bg-linear-to-t from-[#0A0A0A]/95 to-transparent backdrop-blur-[10px] rounded-t-[30px]"
    >
      <h2 className="reveal text-[28px] font-extrabold text-stone uppercase leading-tight">
        ABOUT RADKAAT
      </h2>

      <p className="reveal text-sandstorm text-[15px] font-semibold mt-2">
        Born in the Himalayas. Inspired by adventure.
      </p>

      <div className="reveal text-stone-300 text-[14px] mt-4 leading-relaxed space-y-2 pr-1">
        <p>
          We are a movement of explorers, creators, and athletes redefining
          outdoor adventure.
        </p>
        <p>
          Designed for the wild. Crafted with precision. Powered by nature.
        </p>
        <p>
          Radkaat isn’t a brand — it’s a community built on courage, passion and purpose.
        </p>
      </div>

      <p className="reveal text-sandstorm text-[16px] font-bold mt-4 italic">
        Rise fierce. Rise Radkaat.
      </p>
    </motion.div>
  );
}

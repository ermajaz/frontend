"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const menuData = {
  support: [
    { name: "Contact Us", href: "/support/contact" },
    { name: "Help & FAQ", href: "/support/help" },
    { name: "Support Center", href: "/support/supportcenter" },
  ],
  about: [
    { name: "Company", href: "/about/company" },
    { name: "Mission", href: "/about/mission" },
    { name: "Our Story", href: "/about/story" },
  ],
};

export default function FooterMenu() {
  const [hoveredMenu, setHoveredMenu] = useState<"support" | "about" | null>(
    null
  );

  return (
    <div className="flex flex-col sm:flex-row gap-16 relative mb-10">
      {(["support", "about"] as const).map((menu) => (
        <div
          key={menu}
          className="relative"
          onMouseEnter={() => setHoveredMenu(menu)}
          onMouseLeave={() => setHoveredMenu(null)}
        >
          {/* Title */}
          <div className="cursor-pointer flex flex-col">
            <h3 className="uppercase font-bold tracking-widest text-white mb-1">
              {menu === "support" ? "Support" : "About Us"}
            </h3>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: hoveredMenu === menu ? "100%" : 0 }}
              className="h-0.5 bg-rust"
            />
          </div>

          {/* Dropdown */}
          <AnimatePresence>
            {hoveredMenu === menu && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 pt-3 flex gap-4 text-white whitespace-nowrap"
              >
                {menuData[menu].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="hover:text-rust text-[14px] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

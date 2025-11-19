// components/bike-showcase/TechSidebar.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useStopScroll } from "@/hooks/useStopScroll";

export default function TechSidebar({ bike, onClose }: { bike: any; onClose: () => void }) {
  useStopScroll(true);

  return (
    <motion.aside
      className="fixed inset-y-0 right-0 z-1100 w-[80%] bg-[#0b0b0b] border-l border-white/10 shadow-2xl overflow-auto"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">{bike.uiName} — Specifications</h3>
          <button onClick={onClose} className="text-white/80 p-2 bg-white/6 rounded">
            <X />
          </button>
        </div>

        {/* Tabular styled specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bike.techSpec.map((t: any) => (
            <div key={t.label} className="p-4 bg-white/3 border border-white/6 rounded">
              <div className="text-sm text-white/60">{t.label}</div>
              <div className="text-lg font-medium mt-2">{t.value}</div>
            </div>
          ))}
        </div>

        {/* full detailed table below - show each spec block */}
        <div className="mt-8">
          {bike.specs.map((s: any) => (
            <div key={s.key} className="mb-6 p-4 border border-white/6 rounded bg-white/3">
              <h4 className="font-semibold">{s.label}</h4>
              <p className="text-sm text-white/80 mt-2">{s.content}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}

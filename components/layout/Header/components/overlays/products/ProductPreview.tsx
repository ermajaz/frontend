"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ModelDetails = {
    id: string;
    label: string; // "Model-1"
    image: string;
    title: string; // "SEROW-1"
    price: string; // "₹10,000"
    colors: string[]; // ["#A3B17A", "#D9C98A", "#8A2C2C"]
};

export default function ProductPreview({
    details,
    activeVariant,
    setActiveVariant,
}: {
    details: { models: string[] } & Partial<ModelDetails>;
    activeVariant: string;
    setActiveVariant: (v: string) => void;
}) {
    // derive models array -> if details.models provided, use that (labels),
    // otherwise fallback to hardcoded three models
    const modelLabels: string[] =
        details.models ??
        ["Model-1", "Model-2", "Model-3"];

    const baseImage = (details as any).image || "/images/dummy-cycle.png";
    const baseTitle = (details as any).title || "SEROW-1";
    const basePrice = (details as any).price || "₹10,000";
    const baseColors: string[] = (details as any).colors || ["#8EA23A", "#D9C98A", "#8B2B2B"];

    const [activeModelIndex, setActiveModelIndex] = useState(0);

    return (
        <div className="w-full h-full max-w-[980px] relative flex flex-col justify-between items-stretch">
            {/* Top model tabs over the image area */}
            <div className="absolute top-6 left-8 right-8 z-30 pointer-events-none">
                <div className="w-fit flex items-center border-b border-white/10 justify-start gap-6 pointer-events-auto">
                    {modelLabels.map((m, idx) => {
                        const active = idx === activeModelIndex;
                        return (
                            <button
                                key={m}
                                onClick={() => setActiveModelIndex(idx)}
                                className={`relative text-white/90 cursor-pointer text-xl font-semibold tracking-wide px-1  ${active ? "text-white" : "text-white/45"
                                    }`}
                                aria-current={active ? "true" : "false"}
                            >
                                {m}
                                {/* underline whose width is equal to the word */}
                                <span
                                    className={`block h-0.5 mt-3 ${active ? "bg-white w-full" : "bg-white/10 w-0"
                                        }`}
                                    style={{ transformOrigin: "left" }}
                                />
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Big image container */}
            <div className="w-full h-[560px] bg-[#0b0b0b] rounded-md overflow-hidden relative flex items-center justify-center">
                <Image
                    src={baseImage}
                    alt={baseTitle}
                    fill
                    priority
                    className="object-contain"
                />
            </div>

            {/* Bottom variant strip (full width dark bar) */}
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="mb-5 w-[95%] mx-auto bg-[#0b0b0b] border border-white/6 rounded-sm p-4 flex items-center justify-between"
            >
                {/* Left: model selection compact (Model-1 Model-2 Model-3) */}
                <div className="flex items-center gap-6">
                    <div className="text-left mr-2">
                        <div className="text-sm text-white/80">{baseTitle}</div>
                        <div className="text-xs text-white/60">From: {basePrice}</div>
                    </div>
                </div>

                {/* Right: quick info + CTA */}
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-3">
                        {baseColors.map((c) => {
                            const active = c === activeVariant;
                            return (
                                <button
                                    key={c}
                                    onClick={() => setActiveVariant(c)}
                                    className="relative w-8 h-8 cursor-pointer rounded-full flex items-center justify-center"
                                >
                                    {active && (
                                        <span className="absolute inset-0 rounded-full border-2 border-white" />
                                    )}
                                    <span className="w-6 h-6 rounded-full" style={{ backgroundColor: c }} />
                                </button>
                            );
                        })}
                    </div>
                    <Link
                        href="#"
                        className="bg-white text-black px-4 py-2 rounded-sm cursor-pointer font-medium"
                    >
                        View Product
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}

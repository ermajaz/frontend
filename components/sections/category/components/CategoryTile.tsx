"use client";

import Image from "next/image";

export default function CategoryTile({ product }: { product: any }) {
  return (
    <div className="relative group cursor-pointer">
      <div className="relative overflow-hidden shadow-2xl h-[28rem] w-full rounded-lg">

        {/* Image */}
        <Image
          src={product.image}
          alt={product.title}
          fill
          quality={100}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/30" />

        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h3 className="relative text-[42px] font-bold uppercase text-white drop-shadow-lg translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out">
            {product.title}

            {/* Underline */}
            <span className="absolute left-1/2 -bottom-1 h-[3px] w-0 bg-sandstorm transition-all duration-500 group-hover:w-full -translate-x-1/2" />
          </h3>
        </div>
      </div>
    </div>
  );
}

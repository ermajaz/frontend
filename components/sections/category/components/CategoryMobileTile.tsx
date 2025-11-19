"use client";

import Image from "next/image";

export default function CategoryMobileTile({ product }: { product: any }) {
  return (
    <div className="relative group cursor-pointer">
      <div className="relative w-full h-[20rem] rounded-xl overflow-hidden shadow-xl">

        {/* Image */}
        <Image
          src={product.image}
          alt={product.title}
          fill
          quality={100}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all" />

        {/* Title */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-center">
          <h3 className="text-[30px] font-bold uppercase text-white">
            {product.title}
          </h3>

          {/* Small underline */}
          <div className="mx-auto w-0 h-[2px] bg-sandstorm transition-all duration-500 group-hover:w-16"></div>
        </div>
      </div>
    </div>
  );
}

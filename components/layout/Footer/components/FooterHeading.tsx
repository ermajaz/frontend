"use client";

import Image from "next/image";

export default function FooterHeading() {
  return (
    <div className="flex flex-row items-center gap-2 mb-10">
      <div className="relative w-20 h-20">
        <Image
          src="/images/born-in-shimla.png"
          alt="Born in Shimla"
          fill
          quality={100}
          className="object-contain"
        />
      </div>

      <h2 className="text-[32px] font-bold uppercase leading-tight font-display">
        Radkaat. <br /> Here to Help
      </h2>
    </div>
  );
}

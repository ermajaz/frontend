"use client";

import Image from "next/image";

export default function FooterImage() {
  return (
    <div className="relative hidden lg:flex w-full h-[500px]">
      <Image
        src="/images/footer-img.jpg"
        alt="Radkaat Riders"
        fill
        quality={100}
        priority
        className="object-cover"
      />
    </div>
  );
}

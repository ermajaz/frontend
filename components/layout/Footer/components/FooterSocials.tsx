"use client";

import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function FooterSocials() {
  return (
    <div className="flex gap-6 text-[12px] mb-6">
      <Link href="#" className="flex items-center gap-2 hover:text-rust">
        <Facebook size={15} /> Facebook
      </Link>
      <Link href="#" className="flex items-center gap-2 hover:text-rust">
        <Instagram size={15} /> Instagram
      </Link>
      <Link href="#" className="flex items-center gap-2 hover:text-rust">
        <Youtube size={15} /> YouTube
      </Link>
    </div>
  );
}

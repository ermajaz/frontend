"use client";

import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="w-full max-w-xl relative">
      <input
        type="text"
        placeholder="Search products..."
        className="w-full px-5 py-3 rounded-md bg-white/10 text-white placeholder-white/50 border border-white/20"
      />
      <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50" />
    </div>
  );
}

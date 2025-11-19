"use client";

import { Search, User, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  onSearchOpen: () => void;
  onProductsOpen: () => void;
  onUserMenuOpen: () => void;
}

export default function HeaderIcons({
  onSearchOpen,
  onProductsOpen,
  onUserMenuOpen,
}: Props) {
  const router = useRouter();

  return (
    <div className="flex items-center gap-6">

      {/* Search */}
      <button
        onClick={onSearchOpen}
        className="relative group cursor-pointer"
      >
        <Search
          size={22}
          strokeWidth={1.7}
          className="transition-all duration-200 group-hover:text-army"
        />
        <span className="absolute inset-0 blur-md opacity-0 group-hover:opacity-40 bg-army/30 transition-all" />
      </button>

      {/* User */}
      <button
        onClick={onUserMenuOpen}
        className="relative group cursor-pointer"
      >
        <User size={22} strokeWidth={1.7} className="group-hover:text-army" />
      </button>

      {/* Cart */}
      <button
        onClick={() => router.push("/cart")}
        className="relative group cursor-pointer"
      >
        <ShoppingCart
          size={22}
          strokeWidth={1.7}
          className="group-hover:text-army"
        />
        <span className="absolute -top-1 -right-2 bg-army text-black text-[10px] font-semibold rounded-full px-1.5 py-0.5 leading-none">
          2
        </span>
      </button>
    </div>
  );
}

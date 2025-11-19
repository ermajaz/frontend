"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useHeaderScrollBehavior } from "./useHeaderScrollBehaviour";
import Logo from "./components/Logo";
import HeaderIcons from "./components/HeaderIcons";
import SearchOverlay from "./components/SearchOverlay";
import ProductsOverlay from "./components/ProductsOverlay";
import UserMenuModal from "./components/UserMenuModal";

export default function HeaderMobile() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { showHeader } = useHeaderScrollBehavior();

  const [searchOpen, setSearchOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    if (!headerRef.current) return;

    gsap.to(headerRef.current, {
      y: showHeader ? 0 : -headerRef.current.offsetHeight,
      duration: 0.35,
      ease: "power3.out",
    });
  }, [showHeader]);

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 text-white left-0 w-full z-50 px-6 py-3 bg-black/40 backdrop-blur-md flex items-center justify-between"
      >
        <Logo />
        <HeaderIcons
          onSearchOpen={() => setSearchOpen(true)}
          onProductsOpen={() => setProductsOpen(true)}
          onUserMenuOpen={() => setUserMenuOpen(true)}
        />
      </header>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
      {productsOpen && <ProductsOverlay onClose={() => setProductsOpen(false)} />}
      <UserMenuModal open={userMenuOpen} onClose={() => setUserMenuOpen(false)} />
    </>
  );
}

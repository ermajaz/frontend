"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useHeaderScrollBehavior } from "./useHeaderScrollBehaviour";
import Logo from "./components/Logo";
import NavList from "./components/NavList";
import HeaderIcons from "./components/HeaderIcons";
import SearchOverlay from "./components/SearchOverlay";
import ProductsOverlay from "./components/ProductsOverlay";
import UserMenuModal from "./components/UserMenuModal";

export default function HeaderDesktop() {
  const headerRef = useRef<HTMLDivElement>(null);
  const { showHeader, onHoverStart, onHoverEnd } = useHeaderScrollBehavior();

  const [searchOpen, setSearchOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  // GSAP header animation
  useEffect(() => {
    if (!headerRef.current) return;
    gsap.to(headerRef.current, {
      y: showHeader ? 0 : -headerRef.current.offsetHeight,
      duration: 0.4,
      ease: "power3.out",
    });
  }, [showHeader]);

  return (
    <>
      <header
        ref={headerRef}
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
        className="fixed w-full top-0 left-0 z-50 text-white flex items-center justify-between px-12 py-4 bg-black/10 backdrop-blur-sm"
      >
        <Logo />
        <NavList onProductsOpen={() => setProductsOpen(true)} />
        <HeaderIcons
          onSearchOpen={() => setSearchOpen(true)}
          onProductsOpen={() => setProductsOpen(true)}
          onUserMenuOpen={() => setUserMenuOpen(true)}
        />

        <UserMenuModal open={userMenuOpen} onClose={() => setUserMenuOpen(false)} />
      </header>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
      {productsOpen && <ProductsOverlay onClose={() => setProductsOpen(false)} />}
    </>
  );
}

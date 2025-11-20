"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";

/**
 * LayoutProvider conditionally renders Header/Footer based on route.
 * This keeps your RootLayout clean and scalable.
 */
export const LayoutProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  // Define routes where Header/Footer should NOT appear
  const hiddenRoutes = [
    "/cart",
    "/cart/address",
    "/cart/payment",
    "/experience",
    "/test-ride",
    "/signin",
    "/signup",
    "/reset-password"
  ];

  // Check if current path matches any hidden route
  const shouldHideLayout = hiddenRoutes.some((path) => pathname.startsWith(path));

  return (
    <>
      {!shouldHideLayout && <Header/>}
      {children}
      {!shouldHideLayout && <Footer />}
    </>
  );
};

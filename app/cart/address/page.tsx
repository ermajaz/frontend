// src/app/cart/address/page.tsx
"use client";
// import AddressForm from "@/features/cart/components/shared/AddressForm";
import { useRouter } from "next/navigation";

export default function CartAddressPage() {
  const router = useRouter();
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-2xl font-semibold mb-6">Shipping Address</h1>
      {/* <AddressForm onNext={() => router.push("/cart/payment")} /> */}
    </div>
  );
}

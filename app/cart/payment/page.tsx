// src/app/cart/payment/page.tsx
"use client";
// import PaymentForm from "@/features/cart/components/shared/PaymentForm";
import { useRouter } from "next/navigation";

export default function CartPaymentPage() {
  const router = useRouter();

  const handleSuccess = () => {
    router.push("/cart/success");
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-2xl font-semibold mb-6">Payment</h1>
      {/* <PaymentForm onSuccess={handleSuccess} /> */}
    </div>
  );
}

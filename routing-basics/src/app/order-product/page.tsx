"use client";
import { redirect, useRouter } from "next/navigation";

export default function OrderProductPage() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Order placed successfully!");
    router.push("/");
    // router.replace("/"); // Use replace if you don't want to keep the order page in history
    // router.back(); // Use back if you want to go back to the previous page
    // router.forward(); // Use forward if you want to go forward to the next page

    // redirect("/"); // This will redirect to the home page
  };

  return (
    <div>
      <h1>Order Product Page</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Place Order</button>
    </div>
  );
}

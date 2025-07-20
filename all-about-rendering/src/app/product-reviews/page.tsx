import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";
import { Suspense } from "react";

export default function ProductPage() {
    return (
        <div>
            <h1>Product Reviews Page</h1>
            <Suspense fallback={<p>Product is Loading...</p>}>
                <Product />
            </Suspense>
            <Suspense fallback={<p>Reviews are Loading...</p>}>
                <Reviews />
            </Suspense>
        </div>
    );
}
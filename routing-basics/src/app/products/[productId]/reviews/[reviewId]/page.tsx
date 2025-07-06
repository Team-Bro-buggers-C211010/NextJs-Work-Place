import { notFound } from "next/navigation";
import React from "react";

const getRandomInt = (count: number) => {
  return Math.floor(Math.random() * count) + 1; // get random number between 1 and count
};

const ReviewId = async ({
  params,
}: {
  params: Promise<{
    productId: string;
    reviewId: string;
  }>;
}) => {
  // Simulating a random error for demonstration purposes
  const randomInt = getRandomInt(2);
  if (randomInt === 2) {
    throw new Error("Random Error for loading");
  }

  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound(); // this will trigger the 404 page
    // notFound(); this will search for the not-found.tsx file in the same directory and render it

    // redirect('/products') // this will redirect to the products page
  }
  return (
    <div>
      <h1>
        Review {reviewId} for product {productId}
      </h1>
      <h2>Featured products</h2>
    </div>
  );
};

export default ReviewId;

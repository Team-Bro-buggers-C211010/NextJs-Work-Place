import { notFound } from 'next/navigation';
import React from 'react'

const ReviewId = async ({params} : {
    params: Promise <{
        productId: string;
        reviewId: string;
    }>
}) => {
    const {productId, reviewId} = await params;
    if(parseInt(reviewId) > 1000) {
      notFound(); // this will trigger the 404 page
    // notFound(); this will search for the not-found.tsx file in the same directory and render it
    }
  return (
    <div>Reviewing Product {productId} where review Id is {reviewId}</div>
  )
}

export default ReviewId
import React from 'react'

const ReviewId = async ({params} : {
    params: Promise <{
        productId: string;
        reviewId: string;
    }>
}) => {
    const {productId, reviewId} = await params;
  return (
    <div>Reviewing Product {productId} where review Id is {reviewId}</div>
  )
}

export default ReviewId
// This file is used to define a custom 404 page for the application
// This is custom 404 for review id route
"use client"

import { usePathname } from 'next/navigation'
import React from 'react'

// this file is not take any props/params, it is used to define a custom 404 page for the application
const NotFound = () => {
  const pathname = usePathname();
  const productId = pathname.split('/')[2];
  const reviewId = pathname.split('/')[4];
  return (
    <h1 className='text-2xl'>Review {reviewId} for product {productId} is not found</h1>
  )
}

export default NotFound
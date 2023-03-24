import React from 'react'
import { FeaturedProduct } from '../molecules/FeaturedProduct'
import { ProductCard } from '../molecules/ProductCard'

export const MerchSection = () => {
     return (
          <>
               <div>
                    <FeaturedProduct />
                    <h1 className='text-[#F07167] md:text-4xl text-3xl md:p-0 p-2'>Produk Dari ketjilbergerak</h1>
                    <ProductCard />
               </div>
          </>
     )
}

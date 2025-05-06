"use client"
import React from 'react';
import { ProductCard } from './product-card';
import { Star, X } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { limitedOfferProducts } from '@/lib/products';
import { useAppDispatch, useAppSelector } from '@/store/hooks/hooks';
import { toggleCompare } from '@/store/slices/compareSlice';



const FeaturedProduct = () => {

    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 9)
    targetDate.setHours(targetDate.getHours() + 15)
    targetDate.setMinutes(targetDate.getMinutes() + 34)
    targetDate.setSeconds(targetDate.getSeconds() + 17)

    
      const dispatch = useAppDispatch()
      const comparedProducts = useAppSelector(state => state.compare.comparedIds)

      const handleAddToCompare = (productId: number) => {
        dispatch(toggleCompare(productId))
      }


   


  const getComparedProductsData = () => {
    return limitedOfferProducts.filter((product) => comparedProducts.includes(product.id))
  }


    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="md:col-span-1 bg-[#fff8f0] rounded-lg p-6 relative">
                    <div className="bg-white rounded-full px-3 py-1 text-xs inline-block mb-4">
                        <CountdownTimer targetDate={targetDate} />
                    </div>
                    <h3 className="text-sm font-medium">Shopping For Real Life</h3>
                    <h2 className="text-4xl font-bold mt-1 mb-2">Microsoft Surf Book 13</h2>
                    <div className="flex items-center mb-2">
                        {[1, 2, 3, 4, 5].map((star, index) => (
                            <Star
                                key={index}
                                className={`h-4 w-4 ${index < 3 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                        ))}
                        <span className="text-xs ml-2">3.2</span>
                    </div>
                    <div className="text-4xl font-bold text-[#e63946] mt-4">$120.00</div>

                    <div className="absolute bottom-6 right-6 bg-[#e0f2f1] rounded-full p-4">
                        <div className="text-center">
                            <div className="text-xs">Save upto</div>
                            <div className="font-bold">50% OFF</div>
                        </div>
                    </div>
                </div>


                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {limitedOfferProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCompare={handleAddToCompare}
                            isCompared={comparedProducts.includes(product.id)}
                        />
                    ))}
                </div>
            </div>

            {
      comparedProducts.length > 0
       && (
        <Dialog>
          <DialogTrigger asChild>
            <Button className="fixed bottom-4 right-4 z-50 bg-blue-500 hover:bg-blue-600">
              Compare Products ({comparedProducts.length})
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[900px]">
            <DialogHeader>
              <DialogTitle>Product Comparison</DialogTitle>
            </DialogHeader>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border p-2 bg-gray-50">Feature</th>
                    {getComparedProductsData().map((product) => (
                      <th key={product.id} className="border p-2 bg-gray-50 relative">
                        {product.name}
                        <button
                          onClick={() => handleAddToCompare(product.id)}
                          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2 font-medium">Price</td>
                    {getComparedProductsData().map((product) => (
                      <td key={product.id} className="border p-2">
                        ${product.price.toFixed(2)}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border p-2 font-medium">Rating</td>
                    {getComparedProductsData().map((product) => (
                      <td key={product.id} className="border p-2">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span>{product.rating}</span>
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border p-2 font-medium">Availability</td>
                    {getComparedProductsData().map((product) => (
                      <td key={product.id} className="border p-2">
                        {product.inStock ? (
                          <span className="text-green-500">In Stock</span>
                        ) : (
                          <span className="text-red-500">Out of Stock</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border p-2 font-medium">Category</td>
                    {getComparedProductsData().map((product) => (
                      <td key={product.id} className="border p-2">
                        {product.category}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="border p-2 font-medium">Action</td>
                    {getComparedProductsData().map((product) => (
                      <td key={product.id} className="border p-2">
                        <Button className="w-full bg-rose-500 hover:bg-rose-600">Add to Cart</Button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </DialogContent>
        </Dialog>
      )}

        </div>
    );
};

export default FeaturedProduct;
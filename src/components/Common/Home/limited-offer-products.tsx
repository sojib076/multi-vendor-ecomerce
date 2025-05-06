"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"


import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ProductCard } from "./product-card"
import { limitedOfferProducts } from "@/lib/products"
 

const productCategories = ["Electronics", "Beauty & Health", "Fashions"]

export function LimitedOfferProducts() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [comparedProducts, setComparedProducts] = useState<number[]>([])

  const filteredProducts = activeCategory
    ? limitedOfferProducts.filter((product) => product.category === activeCategory)
    : limitedOfferProducts

  const handleAddToCompare = (productId: number) => {
    if (comparedProducts.includes(productId)) {
      setComparedProducts(comparedProducts.filter((id) => id !== productId))
    } else {
      if (comparedProducts.length < 3) {
        setComparedProducts([...comparedProducts, productId])
      } else {
        alert("You can compare up to 3 products at a time")
      }
    }
  }

  const getComparedProductsData = () => {
    return limitedOfferProducts.filter((product) => comparedProducts.includes(product.id))
  }

  return (
    <div className="container mx-auto min-h-[70vh]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-2xl font-bold">Limited Offer Products</h2>
        <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
          {productCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(activeCategory === category ? null : category)}
              className={activeCategory === category ? "bg-rose-500 hover:bg-rose-600" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
        <Link href="/products" className="hidden md:flex items-center text-rose-500 hover:text-rose-600 mt-4 md:mt-0">
          View All Products <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCompare={handleAddToCompare}
            isCompared={comparedProducts.includes(product.id)}
          />
        ))}
      </div>

      <div className="flex justify-center mt-6 md:hidden">
        <Link href="/products" className="flex items-center text-rose-500 hover:text-rose-600">
          View All Products <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

     

      {
      comparedProducts.length > 0 && (
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
  )
}

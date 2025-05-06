"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Eye, Heart, BarChart2, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { addToCart, CartItem } from "@/store/slices/cartSlice"
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks"

interface ProductCardProps {
  product: {
    id: number
    name: string
    price: number
    originalPrice: number
    rating: number
    inStock: boolean
    image: string
    category: string
    availableQuantity: number
    discount: string
    saleTag: string
  }
  onAddToCompare: (productId: number) => void
  isCompared: boolean
}

export function ProductCard({ product, onAddToCompare, isCompared }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const dispatch = useAppDispatch()
  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    }

    dispatch(addToCart(cartItem))
  }
  const cartState = useAppSelector((state) => state.cart) || { items: [] }
   const isInCart = cartState.items.some((item) => item.id === product.id)
  return (
    <div className="group relative border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-110 cursor-pointer ">
      
      {product.inStock && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">In Stock</span>
        </div>
      )}

  
  
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors hover:cursor-pointer"
              >
                <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-500"}`} />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{isWishlisted ? "Remove from wishlist" : "Add to wishlist"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <Dialog>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <DialogTrigger asChild>
                  <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors">
                    <Eye className="h-4 w-4 text-gray-500 cursor-pointer" />
                  </button>
                </DialogTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Quick view</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <DialogContent className="sm:max-w-[800px]">
            <DialogHeader>
              <DialogTitle>Quick View</DialogTitle>
              <DialogDescription>Product details</DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold">{product.name}</h2>
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"
                      } ${i === Math.floor(product.rating) && product.rating % 1 > 0 ? "text-yellow-400" : ""}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-gray-500 text-sm">{product.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-rose-500">${product.price.toFixed(2)}</span>
                  <span className="text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-500">Available only: {product.availableQuantity}</p>
                <div className="flex gap-2 mt-4">
                  <Button className="bg-rose-500 hover:bg-rose-600">
                    <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
                  </Button>
                  <Button className="cursor-pointer" variant="outline" onClick={() => onAddToCompare(product.id)}>
                    <BarChart2 className="h-4 w-4 mr-2 " /> Compare
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => onAddToCompare(product.id)}
                className={`rounded-full p-2 shadow-md transition-colors ${
                  isCompared ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-white text-gray-500 hover:bg-gray-100"
                }`}
              >
                <BarChart2 className="h-4 w-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{isCompared ? "Remove from comparison" : "Add to comparison"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Product image */}
      <Link href={`/product/${product.id}`} className="block relative">
        <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={150}
            height={150}
            className="object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      {/* Product info */}
      <div className="p-4 group ">
        <div
          className="flex justify-between items-center mb-2"
        > <div className="bg-red-500 text-white text-[10px] px-2 py-1 rounded">{product.discount}</div>
        <h6 className="text-[10px] text-rose-500 ">{product.saleTag}</h6>
       
        </div>

      

        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"
              } ${i === Math.floor(product.rating) && product.rating % 1 > 0 ? "text-yellow-400" : ""}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-gray-500 text-sm">{product.rating}</span>
          
        </div>
        <Link href={`/product/${product.id}`} className="block">
          <h3 className="font-medium text-sm mb-2 line-clamp-2 h-10">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg font-bold text-rose-500">${product.price.toFixed(2)}</span>
          <span className="text-gray-500 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
        </div>
        <div className="text-xs text-green-500 mb-4">Available only: {product.availableQuantity}</div>

      {
        isInCart ? (
          <Button  className=" cursor-pointer flex items-center justify-center bg-rose-500 text-white text-sm font-bold py-2 rounded hover:bg-rose-600 transition duration-300">
            Already in Cart
           
          </Button>
        ) : (
          <Button onClick={handleAddToCart} className="bg-rose-500 cursor-pointer text-white text-sm font-bold py-2 rounded hover:bg-rose-600 transition duration-300 flex items-center justify-center">
            Add to Cart
            <ShoppingCart className="h-4 w-4 ml-2" />
          </Button>
        ) 
      }
      </div>
      
    </div>
  )
}

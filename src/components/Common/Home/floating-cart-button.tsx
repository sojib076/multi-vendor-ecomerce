"use client"

import { useState, useEffect } from "react"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useAppSelector } from "@/store/hooks/hooks"
import { CartDropdown } from "../Header/cart-dropdown"

export function FloatingCartButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cartState = useAppSelector((state) => state.cart) || { totalItems: 0 }
  const { totalItems } = cartState

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = document.documentElement.scrollHeight * 0.2
      setIsVisible(window.scrollY > scrollThreshold)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Button container with animation */}
      <div
        className={`fixed bottom-4 
          left-4 z-50 transform transition-all duration-500 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <Button
        size={"lg"}
          onClick={() => setIsCartOpen(true)}
          className="bg-red-500 shadow-lg cursor-pointer p-2 relative"
        >
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <div className="absolute -top-2 -right-2 bg-white text-rose-500 text-xs rounded-full h-6 w-6 flex items-center justify-center border-2 border-rose-500 font-bold">
              {totalItems}
            </div>
          )}
        </Button>
      </div>

      <Dialog open={isCartOpen} onOpenChange={setIsCartOpen}>
        <DialogContent className="sm:max-w-md p-0">
          <DialogHeader className="px-4 pt-5 pb-0">
            <DialogTitle>Your Shopping Cart</DialogTitle>
          </DialogHeader>
          <CartDropdown />
        </DialogContent>
      </Dialog>
    </>
  )
}

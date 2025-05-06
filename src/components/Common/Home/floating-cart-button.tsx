"use client"

import { useState, useEffect } from "react"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useAppSelector } from "@/store/hooks/hooks"
import { CartDropdown } from "../Header/cart-dropdown"

export function FloatingCartButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cartState = useAppSelector((state) => state.cart) || { totalItems: 0 }
  const { totalItems } = cartState

  useEffect(() => {
    const handleScroll = () => {
      // Calculate 20% of the document height
      const scrollThreshold = document.documentElement.scrollHeight * 0.2

      // Show button when scrolled past 20% of the page
      if (window.scrollY > scrollThreshold) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <>
      <Button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 bg-rose-500 hover:bg-rose-600 shadow-lg flex items-center justify-center"
      >
        <ShoppingCart className="h-6 w-6" />
        {totalItems > 0 && (
          <div className="absolute -top-2 -right-2 bg-white text-rose-500 text-xs rounded-full h-6 w-6 flex items-center justify-center border-2 border-rose-500 font-bold">
            {totalItems}
          </div>
        )}
      </Button>

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

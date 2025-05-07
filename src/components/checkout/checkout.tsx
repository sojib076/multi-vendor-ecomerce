"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, CreditCard, Truck, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"




export default function CheckoutPage() {
  const [isProcessing, setIsProcessing] = useState(false)
  
  

  // Mock data for the checkout page
  const cartItem = {
    id: "drone-x-nano",
    name: "Mini X Nano Fly 4K Camera Drone UHD 20MP",
    price: 390.0,
    image: "/placeholder.svg?height=80&width=80",
    quantity: 1,
  }

  const subtotal = cartItem.price * cartItem.quantity
  const shipping = 15.0
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const handleCheckout = () => {
    setIsProcessing(true)

    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false)
     toast.success("Order placed successfully!")
  }
    , 2000)
  }

  return (
    <div className="min-h-screen bg-[#d8e8e4]">
      
    

      {/* Main Content */}
      <main className=" px-4 py-8">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Shopping
          </Link>
          <h1 className="text-2xl font-bold mt-2">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <div className="bg-white rounded-md p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Truck className="h-5 w-5 text-green-600 mr-2" />
                <h2 className="text-lg font-semibold">Shipping Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" className="mt-1" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" className="mt-1" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" placeholder="123 Main St" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="New York" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input id="postalCode" placeholder="10001" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="state">State/Province</Label>
                  <Input id="state" placeholder="NY" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" placeholder="United States" className="mt-1" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" className="mt-1" />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-md p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <CreditCard className="h-5 w-5 text-green-600 mr-2" />
                <h2 className="text-lg font-semibold">Payment Method</h2>
              </div>

              <Tabs defaultValue="card">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="card" className="text-sm">
                    Credit Card
                  </TabsTrigger>
                  <TabsTrigger value="paypal" className="text-sm">
                    PayPal
                  </TabsTrigger>
                  <TabsTrigger value="bank" className="text-sm">
                    Bank Transfer
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="card" className="space-y-4">
                  <div>
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input id="cardName" placeholder="John Doe" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="4242 4242 4242 4242" className="mt-1" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" className="mt-1" />
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <input type="checkbox" id="saveCard" className="mr-2" />
                    <Label htmlFor="saveCard" className="text-sm">
                      Save card for future purchases
                    </Label>
                  </div>
                </TabsContent>

                <TabsContent value="paypal">
                  <div className="text-center py-8">
                    <Image
                      src="/placeholder.svg?height=60&width=120&text=PayPal"
                      alt="PayPal"
                      width={120}
                      height={60}
                      className="mx-auto mb-4"
                    />
                    <p className="text-sm text-gray-600 mb-4">
                      You will be redirected to PayPal to complete your purchase securely.
                    </p>
                    <Button className="bg-[#0070ba] hover:bg-[#005ea6]">Continue with PayPal</Button>
                  </div>
                </TabsContent>

                <TabsContent value="bank">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="accountName">Account Holder Name</Label>
                      <Input id="accountName" placeholder="John Doe" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="accountNumber">Account Number</Label>
                      <Input id="accountNumber" placeholder="000123456789" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="routingNumber">Routing Number</Label>
                      <Input id="routingNumber" placeholder="123456789" className="mt-1" />
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Please make the transfer within 24 hours. Your order will be processed after the payment is
                      confirmed.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Billing Address */}
            <div className="bg-white rounded-md p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Billing Address</h2>

              <RadioGroup defaultValue="same" className="space-y-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="same" id="same" />
                  <Label htmlFor="same">Same as shipping address</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="different" id="different" />
                  <Label htmlFor="different">Use a different billing address</Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-md p-6 shadow-sm sticky top-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

              {/* Product */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative h-20 w-20 border rounded-md overflow-hidden flex-shrink-0">
                  <Image src={cartItem.image || "/placeholder.svg"} alt={cartItem.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{cartItem.name}</h3>
                  <p className="text-sm text-gray-500">Qty: {cartItem.quantity}</p>
                  <p className="text-sm font-medium">${cartItem.price.toFixed(2)}</p>
                </div>
              </div>

              <Separator className="my-4" />

              {/* Price Breakdown */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>

              <Separator className="my-4" />

              {/* Total */}
              <div className="flex justify-between font-medium text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              {/* Promo Code */}
              <div className="mt-6">
                <Label htmlFor="promoCode">Promo Code</Label>
                <div className="flex mt-1">
                  <Input id="promoCode" placeholder="Enter code" className="rounded-r-none" />
                  <Button variant="outline" className="rounded-l-none border-l-0">
                    Apply
                  </Button>
                </div>
              </div>

              {/* Checkout Button */}
              <Button
                className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-6"
                onClick={handleCheckout}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Place Order"
                )}
              </Button>

              {/* Security Note */}
              <div className="mt-4 flex items-center justify-center text-xs text-gray-500">
                <Shield className="h-3 w-3 mr-1" />
                <span>Secure checkout powered by Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Customer Service</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Returns & Refunds
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Secure Shopping</h3>
              <p className="text-sm text-gray-600">
                Your payment information is processed securely. We do not store credit card details nor have access to
                your credit card information.
              </p>
              <div className="flex space-x-2 mt-3">
                <Image src="/placeholder.svg?height=30&width=40" alt="Visa" width={40} height={30} />
                <Image src="/placeholder.svg?height=30&width=40" alt="Mastercard" width={40} height={30} />
                <Image src="/placeholder.svg?height=30&width=40" alt="Amex" width={40} height={30} />
                <Image src="/placeholder.svg?height=30&width=40" alt="PayPal" width={40} height={30} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-2">Our customer service is available 24/7</p>
              <p className="text-sm font-medium">+1-800-555-9876</p>
              <p className="text-sm text-gray-600">support@angadi.com</p>
            </div>
          </div>
          <div className="border-t mt-8 pt-6 text-center text-sm text-gray-600">
            <p>© 2023 Angadi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

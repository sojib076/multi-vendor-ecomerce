"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, ChevronLeft, ChevronRight, Minus, Plus, Info,  ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { addToCart, CartItem } from "@/store/slices/cartSlice"
import { toast } from "sonner"
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks"
import RelatedProducts from "./RelatedProducts"
import Link from "next/link"



// Mock product data
const product = {
    id: 123456,
    name: "Mini X Nano Fly 4K Camera Drone UHD 20MP",
    price: 390.0,
    originalPrice: 469.0,
    image: "/placeholder.svg?height=400&width=400",
    sku: "56648R",
    brand: "GADSHAWK",
    model: "Nano Model XOP",
    features: "Integrated GPS, Compact",
    color: "White",
    connectivity: "Wi-Fi",
    inStock: true,
    reviews: 26,
}

export default function ProductDetails() {
    const [quantity, setQuantity] = useState(1)
    const [isWishlisted, setIsWishlisted] = useState(false)


    const dispatch = useAppDispatch()
    const cartState = useAppSelector((state) => state.cart) || { items: [] }
    const isInCart = cartState.items.some((item) => item.id === product.id)

    const handleAddToCart = () => {
        const cartItem: CartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity,
        }

        dispatch(addToCart(cartItem))

        toast('Added to cart',
            {
                description: `${product.name} has been added to your cart`,

                duration: 3000,
                style: { backgroundColor: "#4caf50", color: "#fff" },
            }
        )
    }

    const incrementQuantity = () => {
        setQuantity((prev) => prev + 1)
    }

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1)
        }
    }

    const toggleWishlist = () => {
        setIsWishlisted((prev) => !prev)
        toast(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist',
            {
                description: `${product.name} has been ${isWishlisted ? 'removed from' : 'added to'} your wishlist`,
                duration: 3000,
                style: { backgroundColor: "#4caf50", color: "#fff" },
            }
        )


    }

    /* Product Gallery */
    const productImages = [
        "/placeholder.svg?height=400&width=400",
        "/placeholder.svg?height=400&width=400&text=Image2",
        "/placeholder.svg?height=400&width=400&text=Image3",
        "/placeholder.svg?height=400&width=400&text=Image4",
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1))
    }

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1))
    }

    const selectImage = (index: number) => {
        setCurrentImageIndex(index)
    }

    return (
        <div className="min-h-screen bg-[#d8e8e4] ">
            {/* Breadcrumb */}
            <div className="mx-auto lg:px-4 px-1 py-6">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Products Details III</h1>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                        <span>Home</span>
                        <span>|</span>
                        <span>Page</span>
                        <span>|</span>
                        <span>Product Details III</span>
                    </div>
                </div>

                {/* Product Details Container */}
                <div className="bg-gray-50 rounded-md lg:p-6 p-2 my-8 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Product Gallery */}
                        <div className="space-y-4">
                            <div className="border rounded-md overflow-hidden relative h-[400px]">
                                <Image
                                    src={productImages[currentImageIndex] || "/placeholder.svg"}
                                    alt={`${product.name} - Image ${currentImageIndex + 1}`}
                                    fill
                                    className="object-contain transition-opacity duration-300"
                                />
                                <button
                                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors z-10"
                                    onClick={prevImage}
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </button>
                                <button
                                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors z-10"
                                    onClick={nextImage}
                                    aria-label="Next image"
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </button>
                            </div>
                            <div className="flex gap-2 overflow-x-auto pb-2">
                                {productImages.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`border rounded-md overflow-hidden w-20 h-20 flex-shrink-0 cursor-pointer transition-all ${currentImageIndex === index
                                            ? "border-green-500 border-2"
                                            : "border-gray-200 opacity-70 hover:opacity-100"
                                            }`}
                                        onClick={() => selectImage(index)}
                                    >
                                        <Image
                                            src={image || "/placeholder.svg"}
                                            alt={`Thumbnail ${index + 1}`}
                                            width={80}
                                            height={80}
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-4">
                            <h1 className="text-2xl font-bold">{product.name}</h1>

                            {/* Ratings */}
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-sm text-gray-500">{product.reviews} Reviews</span>
                                <span className="text-sm text-gray-500 ml-4">SKU: {product.sku}</span>
                                <span className="text-xs text-white bg-green-500 px-2 py-0.5 rounded">
                                    {product.inStock ? "In Stock" : "Out of Stock"}
                                </span>
                            </div>

                            {/* Price */}
                            <div className="flex items-center gap-3">
                                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
                                <span className="text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                            </div>

                            {/* Shipping Info */}
                            <div className="text-sm text-gray-600">
                                <p>Exclusive Of All Taxes</p>
                                <p>
                                    EMI Starts at $35. No Cost EMI Available{" "}
                                    <span className="text-teal-600 cursor-pointer inline-flex items-center">
                                        EMI Options <Info className="h-3 w-3 ml-1" />
                                    </span>
                                </p>
                            </div>

                            {/* Alert */}
                            <div className="bg-orange-50 border border-orange-100 p-3 rounded-md flex items-start gap-2">
                                <span className="text-orange-500 font-bold">!</span>
                                <p className="text-sm text-orange-800">This Product Has Been Added To 120 People&apos;s Carts</p>
                            </div>

                            {/* Delivery Info */}
                            <div className="text-sm text-gray-600">
                                <p className="leading-relaxed">
                                    Vestibulum Dapibus Ultricies Arcu, At Varius Mauris Vivamus Ac, Aliquam Erat Volutpat. Pellentesque
                                    Commodo Ut Elit At Gravida. Nunc At Maleada Turpis Sed Fermentum.
                                </p>
                            </div>

                            {/* Quantity and Add to Cart */}
                            <div className="flex flex-col space-y-4 pt-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center border rounded-md">
                                        <button className="px-3 py-2 border-r" onClick={decrementQuantity} disabled={quantity <= 1}>
                                            <Minus className="h-4 w-4" />
                                        </button>
                                        <input
                                            type="text"
                                            value={quantity}
                                            onChange={(e) => {
                                                const val = Number.parseInt(e.target.value)
                                                if (!isNaN(val) && val > 0) {
                                                    setQuantity(val)
                                                }
                                            }}
                                            className="w-12 text-center py-2"
                                        />
                                        <button className="px-3 py-2 border-l" onClick={incrementQuantity}>
                                            <Plus className="h-4 w-4" />
                                        </button>
                                    </div>
                                    <button
                                        className={`border p-2 rounded-md transition-colors ${isWishlisted ? "bg-red-50 border-red-200 text-red-500" : "hover:bg-gray-50"
                                            }`}
                                        onClick={toggleWishlist}
                                    >
                                        <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
                                    </button>
                                </div>

                        <div className="flex gap-2">
                        {
                                    isInCart ? (
                                        <Button className=" cursor-pointer flex items-center justify-center bg-rose-500 text-white text-sm font-bold py-2 rounded hover:bg-rose-600 transition duration-300">
                                            Already in Cart

                                        </Button>
                                    ) : (
                                        <Button onClick={handleAddToCart} className="bg-rose-500 cursor-pointer text-white text-sm font-bold py-2 rounded hover:bg-rose-600 transition duration-300 flex items-center justify-center">
                                            Add to Cart
                                            <ShoppingCart className="h-4 w-4 ml-2" />
                                        </Button>
                                    )
                                }

                                <Link href={`/checkout/${product.id}`}>
                                    <Button className="bg-green-500 text-gray-700 
                                    hover:bg-green-600 text-sm font-bold  hover:text-white
                                        cursor-pointer
                                    transition duration-300 flex items-center justify-center py-2 rounded-md w-full">
                                        Buy Now
                                        
                                    </Button>
                                </Link>
                        </div>


                            </div>

                            {/* Product Specifications */}
                            <div className="border-t pt-4 mt-6">
                                <div className="grid grid-cols-3 gap-2 text-sm">
                                    <div className="col-span-1 font-medium text-gray-600">Brand :</div>
                                    <div className="col-span-2">{product.brand}</div>

                                    <div className="col-span-1 font-medium text-gray-600">Model Name :</div>
                                    <div className="col-span-2">{product.model}</div>

                                    <div className="col-span-1 font-medium text-gray-600">Special Features :</div>
                                    <div className="col-span-2">{product.features}</div>

                                    <div className="col-span-1 font-medium text-gray-600">Colour :</div>
                                    <div className="col-span-2">{product.color}</div>

                                    <div className="col-span-1 font-medium text-gray-600">Connectivity Technology :</div>
                                    <div className="col-span-2">{product.connectivity}</div>
                                </div>
                            </div>

                            {/* Payment Methods */}
                            <div className="flex gap-2 pt-4 border-t mt-4">
                                <Image src="/placeholder.svg?height=30&width=40" alt="Visa" width={40} height={30} />
                                <Image src="/placeholder.svg?height=30&width=40" alt="Mastercard" width={40} height={30} />
                                <Image src="/placeholder.svg?height=30&width=40" alt="Amex" width={40} height={30} />
                                <Image src="/placeholder.svg?height=30&width=40" alt="Discover" width={40} height={30} />
                                <Image src="/placeholder.svg?height=30&width=40" alt="PayPal" width={40} height={30} />
                            </div>
                        </div>
                    </div>

                    {/* Product Tabs */}
                    <div className="mt-12 md:min-h-[300px] min-h-[200px] ">
                        <Tabs defaultValue="description">
                            <TabsList className="border-b grid grid-cols-3 w-full justify-start lg:gap-8">
                                <TabsTrigger value="description" className="pb-2 lg:text-base font-medium">
                                    Description
                                </TabsTrigger>
                                <TabsTrigger value="specification" className="pb-2 lg:text-base font-medium">
                                    Specification
                                </TabsTrigger>
                                <TabsTrigger value="reviews" className="pb-2 lg:text-base font-medium">
                                    Reviews
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="description" className="pt-4 text-sm text-gray-600 leading-relaxed">
                                <p>
                                    Nunc Ut Dui Pharetra, Suscipit Justo Quis, Ullamcorper Enim. Quisque Dapibus Pharetra Facilisis.
                                    Maecenas Tempus Est Dignissim Blandit Lobortis. Pellentesque Facilisis, Ante In Sollicitudin Pharetra,
                                    Est Turpis Vestibulum Turpis, Eget Vestibulum Turpis Ut At Risus. Quisque Ut Odio Eget Dignissim
                                    Dapibus. Cras Fringilla Ut Orci Ut Gravida. Nullam Sed Urna Molestis, Pharetra Justo At, Tempor
                                    Tellus.
                                </p>
                                <p className="mt-4">
                                    Vestibulum Eget Urna Ut Nisi Pharetra Accumsan Vitae Sed Eros. Etiam Hendrerit Sagittis Elit, Eu
                                    Imperdiet Nisi Condimentum Eu. Sed Accumsan Eget A Metus Pharetra, Non Imperdiet Justo Sagittis. Nulla
                                    Venenatis Magna A Elit Varius Sodales.
                                </p>
                            </TabsContent>
                            <TabsContent value="specification" className="pt-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                    <div className="border rounded-md p-4">
                                        <h3 className="font-medium mb-2">Technical Specifications</h3>
                                        <ul className="space-y-1 text-gray-600">
                                            <li>Camera: 4K Ultra HD</li>
                                            <li>Battery Life: 30 minutes</li>
                                            <li>Range: 2km</li>
                                            <li>Weight: 250g</li>
                                            <li>Dimensions: 15 x 15 x 5 cm</li>
                                        </ul>
                                    </div>
                                    <div className="border rounded-md p-4">
                                        <h3 className="font-medium mb-2">Package Contents</h3>
                                        <ul className="space-y-1 text-gray-600">
                                            <li>1 x Mini X Nano Fly Drone</li>
                                            <li>1 x Remote Controller</li>
                                            <li>2 x Batteries</li>
                                            <li>1 x Charging Cable</li>
                                            <li>1 x User Manual</li>
                                        </ul>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="reviews" className="pt-4">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-gray-100 rounded-full h-12 w-12 flex items-center justify-center">
                                            <span className="text-gray-500">JD</span>
                                        </div>
                                        <div>
                                            <h4 className="font-medium">John Doe</h4>
                                            <div className="flex items-center gap-2">
                                                <div className="flex">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <svg
                                                            key={star}
                                                            className={`w-4 h-4 ${star <= 4 ? "text-yellow-400" : "text-gray-300"} fill-current`}
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <span className="text-sm text-gray-500">2 weeks ago</span>
                                            </div>
                                            <p className="text-sm text-gray-600 mt-1">
                                                Great drone for the price! The camera quality is excellent and battery life is decent.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>

                <RelatedProducts />
            </div>
        </div>
    )
}

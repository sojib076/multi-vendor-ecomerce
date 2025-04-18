import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const shopByCategory = [
        {
          name: "Fashions",
          image: "/placeholder.svg?height=200&width=200",
          link: "/category/fashion",
          tag: "",
        },
        {
          name: "Electric Gadgets",
          image: "/placeholder.svg?height=200&width=200",
          link: "/category/electronics",
          tag: "SALE",
        },
        {
          name: "Double Door Fridge",
          image: "/placeholder.svg?height=200&width=200",
          link: "/category/appliances/fridge",
          tag: "",
        },
        {
          name: "Health & Beauty",
          image: "/placeholder.svg?height=200&width=200",
          link: "/category/health-beauty",
          tag: "SALE",
        },
        {
          name: "Mobile Tripod",
          image: "/placeholder.svg?height=200&width=200",
          link: "/category/accessories/tripod",
          tag: "",
        },
        {
          name: "Toys & Games",
          image: "/placeholder.svg?height=200&width=200",
          link: "/category/toys-games",
          tag: "NEW",
        },
      ]
export function ShopByCategory() {
    
      
  return (
    <div className="py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Shop Deals By Category</h2>
        <Link href="/categories" className="flex items-center text-sm text-gray-500 hover:text-rose-500">
          All Categories <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {shopByCategory.map((category, index) => (
          <Link key={index} href={category.link} className="group">
            <div className="relative bg-gray-100 rounded-lg overflow-hidden">
              {category.tag && (
                <div
                  className={`absolute top-2 right-2 z-10 text-xs font-bold px-2 py-1 rounded ${
                    category.tag === "SALE"
                      ? "bg-red-500 text-white"
                      : category.tag === "NEW"
                        ? "bg-green-500 text-white"
                        : ""
                  }`}
                >
                  {category.tag}
                </div>
              )}
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={200}
                height={200}
                className="w-full h-auto transition-transform group-hover:scale-105"
              />
            </div>
            <h3 className="mt-2 text-center text-sm font-medium">{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}

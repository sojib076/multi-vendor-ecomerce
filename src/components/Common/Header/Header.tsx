"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Heart, ListEnd, Phone, Search, ShoppingCart, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Add this style to the component


const topNavLinks = [
  { title: "Track Order", href: "/track" },
  { title: "About Us", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "FAQ", href: "/faq" },
]

const languages = ["English", "Spanish", "French"]
const currencies = ["USD", "EUR", "GBP"]

const searchCategories = [
  { id: "all", name: "All Categories" },
  { id: "electronics", name: "Electronics" },
  { id: "fashion", name: "Fashion" },
  { id: "home", name: "Home & Kitchen" },
  { id: "beauty", name: "Beauty & Health" },
  { id: "toys", name: "Toys & Games" },
]

const browseCategories = [
  { id: 1, name: "Electronics" },
  { id: 2, name: "Fashion" },
  { id: 3, name: "Home & Kitchen" },
  { id: 4, name: "Beauty & Health" },
  { id: 5, name: "Toys & Games" },
  { id: 6, name: "Sports & Outdoors" },
  { id: 7, name: "Books & Media" },
  { id: 8, name: "Jewellery" },
  { id: 9, name: "Auto-Mobiles" },
  { id: 10, name: "Appliances" },
]

const mainNavLinks = [
  { title: "Home", href: "/" },
  { title: "Kitchen", href: "/category/kitchen" },
  { title: "Electronics", href: "/category/electronics" },
  { title: "Fashion", href: "/category/fashion" },
  { title: "Jewellery", href: "/category/jewellery" },
  { title: "Beauty & Health", href: "/category/beauty-health" },
  { title: "Toys & Games", href: "/category/toys-games" },
  { title: "Auto-Mobiles", href: "/category/auto-mobiles" },
]

export function Header() {
  const [selectedCategory, setSelectedCategory] = useState(searchCategories[0])

  return (
    <header className="">
      {/* Top navigation bar */}
      <div className="bg-black text-white px-4 py-2 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex flex-wrap justify-center md:justify-start space-x-3 md:space-x-6 mb-2 md:mb-0">
          {topNavLinks.map((link) => (
            <Link key={link.title} href={link.href} className="hover:text-gray-300">
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center space-x-2 md:space-x-4">
          <div className="flex items-center text-xs md:text-sm">
            <Phone className="h-3 w-3 mr-1" />
            <span className="hidden sm:inline">Contact Us 24/7 •</span> +800 1456 9876
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:text-gray-300 text-xs md:text-sm">
              English <ChevronDown className="h-4 w-4 ml-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {languages.map((language) => (
                <DropdownMenuItem key={language}>{language}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center hover:text-gray-300 text-xs md:text-sm">
              USD <ChevronDown className="h-4 w-4 ml-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {currencies.map((currency) => (
                <DropdownMenuItem key={currency}>{currency}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="w-full md:w-[90%] mx-auto">
        <div className="px-4 flex flex-col md:flex-row justify-between items-center border-b py-4 md:py-10 gap-4">
          <Link href="/" className="text-2xl font-bold">
            <span>Angadi</span>
            <span className="text-red-500">.</span>
            <span className="text-yellow-500">.</span>
            <span className="text-green-500">.</span>
          </Link>

          <div className="flex items-center  w-full max-w-xl">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-r-none  w-20 md:w-28 text-xs md:text-sm">
                  {selectedCategory.name.split(" ")[0]} <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {searchCategories.map((category) => (
                  <DropdownMenuItem key={category.id} onSelect={() => setSelectedCategory(category)}>
                    {category.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="text" placeholder="Search for anything" className="rounded-l-none text-xs md:text-sm" />
              <Button type="submit" size="icon" className="bg-teal-100 hover:bg-teal-200 text-teal-700">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between w-full md:w-auto md:space-x-4">
            <Link href="/account" className="flex items-center text-xs md:text-sm">
              <div className="bg-rose-100 rounded-full p-2 mr-2">
                <User className="h-4 w-4 text-rose-500" />
              </div>
              <div className="flex flex-col">
                <span>Sign In</span>
                <span>Account</span>
              </div>
            </Link>
            <Link href="/wishlist" className="text-gray-700">
              <div className="relative">
                <div className="bg-gray-100 rounded-full p-2">
                  <Heart className="text-rose-500" />
                </div>
                <div className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </div>
              </div>
            </Link>
            <Link href="/cart" className="flex items-center">
              <Button className="bg-rose-500 hover:bg-rose-600 flex items-center space-x-2 text-xs md:text-sm">
                <ShoppingCart className="h-4 w-4" />
                <span>Cart</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="pb-4 md:pb-10 pt-3 md:pt-5 overflow-x-auto">
          <div className="mx-auto px-4 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center bg-sky-100 text-sky-700 hover:bg-sky-200 rounded-none py-2 md:py-3 px-3 md:px-4 text-xs md:text-sm w-full md:w-auto justify-between md:justify-start"
                >
                  <ListEnd className="mr-2" />
                  <span>Browse Categories</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[200px] shadow-none bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                {browseCategories.map((category) => (
                  <DropdownMenuItem key={category.id}>
                    <Link href={`/category/${category.id}`} className="w-full">
                      {category.id}. {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <nav className="flex overflow-x-auto w-full pb-2 md:pb-0 hide-scrollbar">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="px-3 md:px-4 py-2 md:py-3 hover:text-rose-500 whitespace-nowrap text-xs md:text-sm"
                >
                  {link.title}
                </Link>
              ))}
            </nav>

            <Button variant="ghost" className="ml-auto hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

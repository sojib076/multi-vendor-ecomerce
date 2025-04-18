"use client"

import { ChevronDown } from "lucide-react"
import Link from "next/link"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface CategoryDropdownProps {
  name: string
  items: string[]
}

export function CategoryDropdown({ name, items }: CategoryDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="px-4 py-3 hover:text-rose-500 flex items-center">
          {name}
          <ChevronDown className="h-4 w-4 ml-1" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item) => (
          <DropdownMenuItem key={item}>
            <Link
              href={`/category/${name.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="w-full"
            >
              {item}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

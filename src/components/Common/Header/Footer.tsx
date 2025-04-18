import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Youtube, InstagramIcon as Tiktok } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">
                Angadi<span className="text-red-500">.</span>
                <span className="text-green-500">.</span>
                <span className="text-blue-500">.</span>
              </h2>
              <p className="text-gray-600 mt-4 text-sm">
                Vivamus Ut Leo Maximuor. Donec Gravida Eleifend Nisi Id Luctus. Vivamus Fermentum.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Our Address</h3>
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                <p className="text-gray-600 text-sm">9826 Painter Ave, Whittier, CA, United States.</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-500" />
                <p className="text-gray-600 text-sm">+1800 396 756</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-gray-500" />
                <p className="text-gray-600 text-sm">support@ahca.com</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Link href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                <Instagram className="h-5 w-5 text-gray-700" />
              </Link>
              <Link href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                <Facebook className="h-5 w-5 text-gray-700" />
              </Link>
              <Link href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                <Twitter className="h-5 w-5 text-gray-700" />
              </Link>
              <Link href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                <Youtube className="h-5 w-5 text-gray-700" />
              </Link>
              <Link href="#" className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors">
                <Tiktok className="h-5 w-5 text-gray-700" />
              </Link>
            </div>
          </div>

          {/* Let Us Help You */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Let Us Help You</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Your Orders
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Returns & Replacements
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Shipping Rates & Policies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Refund And Returns Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Terms And Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Cookie Settings
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Get To Know Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Get To Know Us</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Inverstor Relations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Devices
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Social Responsibility
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Store Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Legal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Site Map
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Tracking Order
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Investors
                </Link>
              </li>
            </ul>
          </div>

          {/* For Buyers */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">For Buyers</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  My account
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                  Contact
                </Link>
              </li>
            </ul>

            <div className="pt-4">
              <h3 className="text-lg font-medium mb-4">Download App</h3>
              <div className="space-y-2">
                <Link href="#" className="block">
                  <Image
                    src="/placeholder.svg?height=40&width=140"
                    alt="Download on the App Store"
                    width={140}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
                <Link href="#" className="block">
                  <Image
                    src="/placeholder.svg?height=40&width=140"
                    alt="Get it on Google Play"
                    width={140}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">©Designthemes all rights Reserved</p>

          <div className="lg:flex hidden items-center gap-4 ">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=24&width=40"
                alt="Visa"
                width={40}
                height={24}
                className="h-6 w-auto"
              />
              <Image
                src="/placeholder.svg?height=24&width=40"
                alt="Mastercard"
                width={40}
                height={24}
                className="h-6 w-auto"
              />
              <Image
                src="/placeholder.svg?height=24&width=40"
                alt="PayPal"
                width={40}
                height={24}
                className="h-6 w-auto"
              />
              <Image
                src="/placeholder.svg?height=24&width=40"
                alt="Skrill"
                width={40}
                height={24}
                className="h-6 w-auto"
              />
              <Image
                src="/placeholder.svg?height=24&width=40"
                alt="AliPay"
                width={40}
                height={24}
                className="h-6 w-auto"
              />
              <Image
                src="/placeholder.svg?height=24&width=40"
                alt="Amazon Pay"
                width={40}
                height={24}
                className="h-6 w-auto"
              />
              <Image
                src="/placeholder.svg?height=24&width=40"
                alt="Google Pay"
                width={40}
                height={24}
                className="h-6 w-auto"
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="#" className="hover:text-gray-900">
                Terms & Condition
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-gray-900">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

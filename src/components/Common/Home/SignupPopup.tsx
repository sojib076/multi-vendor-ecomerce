"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, AtSign, Instagram, Facebook, Youtube, Twitter } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignupPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [acceptPolicy, setAcceptPolicy] = useState(false)

  useEffect(() => {
    // Check if popup has been shown before
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup")

    // Only set up scroll listener if popup hasn't been shown before
    if (!hasSeenPopup) {
      const handleScroll = () => {
        // Calculate how far user has scrolled as a percentage
        const scrollTop = window.scrollY
        const windowHeight = window.innerHeight
        const documentHeight = document.documentElement.scrollHeight
        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100

        // Show popup when user has scrolled 20% of the page with 50% probability
        if (scrollPercentage >= 20 && Math.random() < 0.5) {
          setIsVisible(true)
          // Mark as seen
          sessionStorage.setItem("hasSeenPopup", "true")
          // Remove scroll listener after showing
          window.removeEventListener("scroll", handleScroll)
        }
      }

      // Add scroll event listener
      window.addEventListener("scroll", handleScroll)

      // Clean up
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const closePopup = () => {
    setIsVisible(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && acceptPolicy) {
      // Handle form submission here
      console.log("Form submitted with email:", email)
      closePopup()
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative flex w-full max-w-4xl overflow-hidden rounded-lg shadow-xl">
        {/* Left side - Pink background (50%) */}
        <div className="hidden w-1/2 bg-[#f8b1aa] md:block"></div>

        {/* Right side - Content (50%) */}
        <div className="w-full bg-black p-6 md:w-1/2">
          <button
            onClick={closePopup}
            className="absolute right-4 top-4 text-white hover:text-gray-300"
            aria-label="Close popup"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="flex h-full flex-col items-center justify-center space-y-6 px-4 py-8 text-center">
            <h2 className="text-4xl font-bold text-[#f8b1aa] md:text-5xl">Signup Today!</h2>
            <h3 className="text-3xl font-bold text-[#f8b1aa] md:text-4xl">Sale Upto 15% Off</h3>

            <p className="text-sm text-white">
              If You Have An Issue Or Question That Requires Immediate Assistance, You Can Click The Button Below To
              Chat Live With A Customer Service
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 rounded-l-md border-0 bg-white px-4 py-2 text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="rounded-r-md bg-[#f8b1aa] px-4 py-2 font-medium text-white hover:bg-[#f69c94]"
                >
                  Send Message
                </button>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="privacy"
                  checked={acceptPolicy}
                  onCheckedChange={(checked) => setAcceptPolicy(checked as boolean)}
                />
                <label htmlFor="privacy" className="text-sm text-white">
                  I Accept The Privacy And Cookies Policy To Received
                </label>
              </div>
            </form>

            <div className="space-y-2">
              <p className="text-white">Social Media :</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-white hover:text-[#f8b1aa]" aria-label="At sign">
                  <AtSign className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-[#f8b1aa]" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-[#f8b1aa]" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-[#f8b1aa]" aria-label="Youtube">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-[#f8b1aa]" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            <p className="text-sm text-white">You Can Click The Button Below To Chat Live</p>
          </div>
        </div>
      </div>
    </div>
  )
}

import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"


export function PromotionalBanners() {
    const promotionalBanners = [
        {
          title: "Play It",
          subtitle: "One More Time",
          highlight: "4hrs",
          bgColor: "bg-blue-50",
          buttonText: "Shop Now",
          buttonLink: "/shop/gaming",
        },
        {
          title: "Active Wear",
          subtitle: "Save Upto 40%",
          description: "There Are Many Variations Of Passages Of Available",
          bgColor: "bg-green-50",
          buttonText: "Shop Now",
          buttonLink: "/shop/active-wear",
        },
        {
          title: "Elaxcy",
          subtitle: "350 CZI",
          description: "Live On The Edge",
          bgColor: "bg-teal-50",
          buttonText: "Shop Now",
          buttonLink: "/shop/elaxcy",
        },
      ]
  return (
    <div className=" py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {promotionalBanners.map((banner, index) => (
          <div key={index} className={`${banner.bgColor} h-[260px] p-6 rounded-lg`}>
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-2xl font-medium">{banner.title}</h3>
                <h2 className="text-4xl font-bold mb-2">{banner.subtitle}</h2>
                {banner.highlight && (
                  <div className="flex items-center gap-1 mb-4">
                    <Zap className="w-4 h-4" />
                    <span>{banner.highlight}</span>
                  </div>
                )}
                {banner.description && <p className="text-sm text-gray-600 mb-4">{banner.description}</p>}
              </div>
              <Link href={banner.buttonLink} className="flex items-center text-sm font-medium hover:underline">
                {banner.buttonText} <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

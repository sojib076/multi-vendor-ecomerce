import { Headphones, Percent, RotateCcw, Truck } from "lucide-react"


export function ServiceHighlights() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "truck":
        return <Truck className="w-6 h-6 text-rose-500" />
      case "percent":
        return <Percent className="w-6 h-6 text-rose-500" />
      case "headphones":
        return <Headphones className="w-6 h-6 text-rose-500" />
      case "rotate-ccw":
        return <RotateCcw className="w-6 h-6 text-rose-500" />
      default:
        return null
    }
  }

   const serviceHighlights = [
    {
      title: "Free Delivery",
      description: "Free Shipping On All Order",
      icon: "truck",
    },
    {
      title: "Big Saving Shop",
      description: "Save 10% Every Order Guarantee",
      icon: "percent",
    },
    {
      title: "Online Support 24/7",
      description: "Support Online 24hrs A Day",
      icon: "headphones",
    },
    {
      title: "Money Back Return",
      description: "Back Guarantee Under 7 Days",
      icon: "rotate-ccw",
    },
  ]
  

  return (
    <div className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {serviceHighlights.map((service, index) => (
          <div key={index} className="flex items-center gap-4 p-4 border-r last:border-r-0">
            {getIcon(service.icon)}
            <div>
              <h3 className="font-medium">{service.title}</h3>
              <p className="text-sm text-gray-500">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

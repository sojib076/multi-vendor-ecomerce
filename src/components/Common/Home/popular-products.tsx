import React from 'react';
import { CountdownTimer } from './CountdownTimer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Popularproducts = () => {
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 9)
  targetDate.setHours(targetDate.getHours() + 15)
  targetDate.setMinutes(targetDate.getMinutes() + 34)
  targetDate.setSeconds(targetDate.getSeconds() + 17)
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 mt-20">
        {/* New Arrivals Banner */}
        <div className="bg-[#e8f2e9] rounded-lg p-6">
          <Badge className="bg-[#333] text-white mb-2">Popular Products</Badge>
          <h3 className="text-sm font-medium mt-4">New Arrivals</h3>
          <h2 className="text-2xl font-bold mt-1 mb-4">Sneakers Sports Shoes</h2>
          <Button className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white rounded-full px-6">Shop Now</Button>
        </div>

        {/* Discount Banner */}
        <div className="bg-[#ffeee8] rounded-lg p-6">
          <div className="flex justify-end mb-2">
            <div className="bg-white rounded-full px-3 py-1 text-xs">
              <CountdownTimer targetDate={targetDate} />
            </div>
          </div>
          <h3 className="text-sm font-medium mt-4">Big Discounts</h3>
          <h2 className="text-2xl font-bold mt-1 mb-2">Save Up To 30% OFF</h2>
          <p className="text-sm text-gray-600">Get these incredible deals straight to your inbox</p>
        </div>
      </div>

      {/* Summer Sale Banner */}
      <div className="bg-[#2a5e59] text-white rounded-lg p-4 mb-6 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-xl font-bold">Summer Sale</h2>
        <div className="flex items-center">
          <div className="border border-dashed border-white px-3 py-1 mx-2">SUMMERASS</div>
          <span className="text-sm mx-2">Upto 50% Discount Offers Along With Unlimited Campaigns And Deals</span>
        </div>
        <Button variant="outline" className="bg-white text-[#2a5e59] hover:bg-gray-100">
          Explore <span className="ml-1">→</span>
        </Button>
      </div>
    </div>
  );
};

export default Popularproducts;
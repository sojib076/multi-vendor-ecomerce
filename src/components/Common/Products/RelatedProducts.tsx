import Image from 'next/image';
import React from 'react';

const RelatedProducts = () => {
    return (
        <div>
             <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="bg-white rounded-md overflow-hidden border">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt={`Related Product ${item}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                    {item === 1 ? "New" : item % 2 === 0 ? "-10%" : ""}
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className={`w-3 h-3 ${star <= 3 ? "text-yellow-400" : "text-gray-300"} fill-current`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                    <span className="text-xs text-gray-500 ml-1">3.2</span>
                  </div>
                  <h3 className="text-sm font-medium mt-1">New Brand Chico Watch Star Red</h3>
                  <div className="flex items-center text-xs mt-1">
                    <span className="text-gray-600">Store:</span>
                    <span className="font-medium ml-1">London</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Available only: 45</div>
                </div>
              </div>
            ))}
          </div>
        </div>
            
        </div>
    );
};

export default RelatedProducts;
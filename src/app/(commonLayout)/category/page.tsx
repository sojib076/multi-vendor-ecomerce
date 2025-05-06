import React from 'react';

const Categories = () => {
    return (
        <div className='w-[90%] mx-auto '>
            <h1 className="text-2xl font-bold mb-4">Shop by Category</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {/* Example category items */}
                {Array.from({ length: 12 }, (_, index) => (
                    <div key={index} className="bg-gray-200 p-4 rounded-lg flex flex-col items-center">
                        <img src="/placeholder.svg" alt={`Category ${index + 1}`} className="w-full h-32 object-cover mb-2" />
                        <span className="text-sm font-semibold">Category {index + 1}</span>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Categories;
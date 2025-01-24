'use client';

import React from 'react';

const CardSection: React.FC = () => {
  const categories = [
    {
      name: 'Women',
      description: 'Explore stylish and trendy fashion for women.',
      image: '/woman.png',
      subcategories: [
        { name: 'Dresses', image: '/womaniya.jpg', description: 'Elegant dresses for every occasion.' },
        { name: 'Shoes', image: '/womaniya.jpg', description: 'Comfortable and stylish shoes for women.' },
        { name: 'Handbags', image: '/womaniya.jpg', description: 'Designer handbags to complement your look.' },
      ],
    },
    {
      name: 'Men',
      description: 'Modern and sleek fashion for men.',
      image: '/man.png',
      subcategories: [
        { name: 'Shirts', image: '/maniya.png', description: 'Smart shirts for the professional look.' },
        { name: 'Pants', image: '/maniya.png', description: 'Casual and formal pants for men.' },
        { name: 'Shoes', image: '/maniya.png', description: 'High-quality shoes for all occasions.' },
      ],
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-14 tracking-wide">
        Shop by Categories
      </h2>

      {categories.map((category, index) => (
        <div key={index} className="mb-20">
          {/* Category Section */}
          <div className="text-center mb-10">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-80 object-cover rounded-lg shadow-2xl mb-6"
            />
            <h3 className="text-3xl font-bold text-gray-800">{category.name}</h3>
            <p className="text-gray-500 text-lg mt-3">{category.description}</p>
          </div>

          {/* Subcategory Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.subcategories.map((subcategory, subIndex) => (
              <div
                key={subIndex}
                className="bg-white shadow-xl rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={subcategory.image}
                  alt={subcategory.name}
                  className="w-full h-48 object-cover transition duration-300 transform hover:scale-110"
                />
                <div className="p-5">
                  <h4 className="text-xl font-semibold text-gray-800">{subcategory.name}</h4>
                  <p className="text-gray-500 mt-2">{subcategory.description}</p>
                </div>
                <div className="p-5 bg-gray-700 text-white text-center rounded-b-lg">
                  <button className="bg-transparent hover:bg-gray-900 px-6 py-2 rounded-lg transition duration-200">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;

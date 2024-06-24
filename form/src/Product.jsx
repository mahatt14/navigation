import React from 'react';

const Product = () => {
  const products = [
    {
      id: 1,
      imageUrl: 'https://i.pinimg.com/236x/e0/e8/3c/e0e83cf6657a73374020bda3a8bec1d1.jpg',
      title: 'Pc Screens',
      description: 'This is the description for Product 1.',
      price: 29.99,
    },
    {
      id: 2,
      imageUrl: 'https://i.pinimg.com/236x/6d/88/4f/6d884f4c8a50cfee4f2c726eef2b2df1.jpg',
      title: 'Camera',
      description: 'This is the description for Product 2.',
      price: 39.99,
    },
    {
      id: 3,
      imageUrl: 'https://i.pinimg.com/236x/d4/c0/29/d4c029c36b5fa4f34a5a60b0cc4cb1ee.jpg',
      title: 'Power Bank',
      description: 'This is the description for Product 3.',
      price: 49.99,
    },
    {
      id: 3,
      imageUrl: 'https://i.pinimg.com/736x/aa/4a/22/aa4a22592e1b16c0108c4ffa08125c21.jpg',
      title: 'Smart Watch',
      description: 'This is the description for Product 3.',
      price: 49.99,
    },
    {
      id: 3,
      imageUrl: 'https://i.pinimg.com/236x/1b/d2/d0/1bd2d007439bd8d70a236095e77a4507.jpg',
      title: 'Mobile',
      description: 'This is the description for Product 3.',
      price: 49.99,
    },
    {
      id: 3,
      imageUrl: 'https://i.pinimg.com/236x/30/af/ca/30afca9d67f0680c396e6422a54bf912.jpg',
      title: 'Speaker',
      description: 'This is the description for Product 3.',
      price: 49.99,
    },
    {
      id: 3,
      imageUrl: 'https://i.pinimg.com/236x/6b/f9/98/6bf998cdaa147b1e10b44b84c721c736.jpg',
      title: 'Indicator light',
      description: 'This is the description for Product 3.',
      price: 49.99,
    },
    {
      id: 3,
      imageUrl: 'https://i.pinimg.com/236x/f4/43/5e/f4435e45b562807ef390e546f24a2a7f.jpg',
      title: 'labtop',
      description: 'This is the description for Product 3.',
      price: 49.99,
    },
   
  ];

  return (
    <div className="bg-white py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-2xl font-bold mb-8 border-b-4 ">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden "
            >
              <div className="relative">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-64 object-cover transform hover:scale-105 transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                <div className="absolute bottom-4 left-4 text-white font-bold text-xl">
                  {product.title}
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-800 font-bold text-lg">
                    ${product.price}
                  </p>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold  px-4 py-1  rounded">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
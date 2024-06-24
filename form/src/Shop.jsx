
import React from 'react';

const ProductPage = () => {
  const products = [
    {
      id: 1,
      title: 'HeadPhone',
      image: 'https://i.pinimg.com/236x/85/d5/a4/85d5a4d7e80550df90d827422544c628.jpg',
      price: 19.99,
      title1: 50.99,
    },
    {
      id: 2,
      title: 'Fridge',
      image: 'https://i.pinimg.com/236x/b4/b0/d6/b4b0d6c4bf4623284c1143f386523546.jpg',
      price: 24.99,
    },
    {
      id: 3,
      title: 'Desktop',
      image: 'https://i.pinimg.com/236x/47/df/b8/47dfb824a08ce64cdcdac25ab01e1e37.jpg',
      price: 14.99,
    },
    {
      id: 4,
      title: 'Laptop',
      image: 'https://i.pinimg.com/736x/11/e0/a3/11e0a37ccfa6394bcf5b251c6731d295.jpg',
      price: 29.99,
    },
    {
      id: 5,
      title: 'Laptop',
      image: 'https://i.pinimg.com/236x/8a/77/3f/8a773fa9ea67135bf0f43a98d5c6203c.jpg',
      price: 29.99,
    },
    {
      id: 6,
      title: 'Laptop',
      image: 'https://i.pinimg.com/236x/25/af/80/25af807b5d58974e4c3c6dc07ee7504a.jpg',
      price: 29.99,
    },
    {
      id: 7,
      title: 'Laptop',
      image: 'https://i.pinimg.com/236x/c0/49/39/c049394bbce4d9d0401434041c782705.jpg',
      price: 29.99,
    },
    {
      id: 8,
      title: 'Laptop',
      image: 'https://i.pinimg.com/236x/9c/3a/46/9c3a4663ef5a3e873abc3c116abd850a.jpg',
      price: 29.99,
    },
  ];

  return (
    <div>
      <nav className="bg-gray-900 py-4 px-6 flex justify-between items-center mb-16 ">
        <div className="flex items-center">
          <a href="/" className="text-white font-bold text-lg">
            Electronic Shop
          </a>
          <ul className="ml-8 flex">
            <li className="mr-6">
           
              <a href="/products" className="text-white hover:text-gray-400">
                Home
              </a>
            </li>
            <li className="mr-6">
              <a href="/about" className="text-white hover:text-gray-400">
              Product
              </a>
            </li>
            <li className="mr-6">
              <a href="/contact" className="text-white hover:text-gray-400">
               About
              </a>
            </li>

            <li className="mr-6">
              <a href="/contact" className="text-white hover:text-gray-400">
              Contact
              </a>
            </li>
          </ul>
        </div>
        <div className='justify-between  flex items-center gap-6 '>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ">Sign Up</button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ">Search</button>
        <input className='bg-white-300 text-black py-2 px-4 rounded hover:bg-gray-300 placeholder-black' type="text" placeholder='search' />


          {/* <a
            href="/signup"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md gap-4"
          >
            Sign Up
          </a> */}
        </div>
        
      </nav>

        <section className='h-full max-h-[640px] mb-8 xl:mb-10 '>
        <div className='flex flex-col lg:flex-row '>
          <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center 
          lg:items-start text-center lg:text-left 
          justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-bold leading-none mb-6'>
            
                   Electronic Gadget
                    Up To <span className='text-purple-900 '> 50% </span>Off 
          </h1>
          <p className='mx-w-[480px] mb-4 font-semibold'>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Commodi hic ipsam, id odio doloremque numquam 
             in quisquam officia et veniam. 
             Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Omnis distinctio iusto debitis autem natus alias illum animi 
              nemo tempore voluptatibus!</p>
              <button className="bg-purple-900 hover:bg-yellow-600 text-white px-20 py-3 rounded-md mt-4">
                  Buy Now
                </button>
                
        </div>
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src="https://i.pinimg.com/236x/40/61/c8/4061c8841fa8ab02aa484db1cfcb96f0.jpg" alt="" />
          <img src="https://i.pinimg.com/236x/97/53/d0/9753d047372af58ea35a5b105bab2c22.jpg" alt="" />
          </div>
        </div>
        </section>

      <div className="py-8 mb-10 ">
      <h1 className="text-6xl font-bold mb-10 flex justify-center items-center border-b-4 text-purple-900 ">Products</h1>
      
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  ">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden "
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{product.title}</h3>
                <p className="text-gray-600 text-base">
                  Price: ${product.price.toFixed()}
                  
                </p>
                <p className="text-gray-600 text-base ">
                title1: ${product.title1}
                </p>
                <button className="bg-blue-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md mt-4 ">
                  Buy Now               
                </button>              
              </div>  
                
            </div>     
          ))}
        </div>
        
      </div>
      <div className='mb-20 flex  items-center 
          lg:items-start text-center lg:text-left 
           font-bold flex-row justify-evenly '>
      <p >
      <ul>
      <li className='w-7 h-5 mb-3'><a href="#" className="hover:text-gray-400"><i className="facebook-f"><img src="https://cdn-icons-png.freepik.com/256/4555/4555999.png?uid=R73052817&ga=GA1.1.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
      </ul>
      Free Shipping
       <span className='grid font-semibold' >
       On Order Over $1000
      </span>
      </p>

      <p >
      <ul>
      <li className='w-7 h-5 mb-3'><a href="#" className="hover:text-gray-400"><i className="facebook-f"><img src="https://cdn-icons-png.freepik.com/256/4555/4555999.png?uid=R73052817&ga=GA1.1.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
      </ul>
      Free Return
       <span className='grid font-semibold ' >
       Within 30 days
      </span>
      </p>

      <p >
      <ul>
      <li className='w-7 h-5 mb-3'><a href="#" className="hover:text-gray-400"><i className="facebook-f"><img src="https://cdn-icons-png.freepik.com/256/4555/4555999.png?uid=R73052817&ga=GA1.1.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
      </ul>
      Fast Delivery
       <span className='grid font-semibold ' >
       World Wide
      </span>
      </p>

      <p >
      <ul>
      <li className='w-7 h-5 mb-3'><a href="#" className="hover:text-gray-400"><i className="facebook-f"><img src="https://cdn-icons-png.freepik.com/256/4555/4555999.png?uid=R73052817&ga=GA1.1.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
      </ul>
      Big Choice
       <span className='grid font-semibold ' >
       Of Products
      </span>  
      </p>
      </div>
      
      <footer className="bg-gray-900 text-white py-10 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* User Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">UseFul Links</h3>
          <ul>
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">Product</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-lg font-bold mb-4">Our Products</h3>
          <ul>
            <li><a href="#" className="hover:text-gray-400">laptops</a></li>
            <li><a href="#" className="hover:text-gray-400">Fridges</a></li>
            <li><a href="#" className="hover:text-gray-400"> Smart Mobiles</a></li>
            <li><a href="#" className="hover:text-gray-400">Smart Tv's</a></li>
            <li><a href="#" className="hover:text-gray-400">Gaming Laptops</a></li>
            <li><a href="#" className="hover:text-gray-400">PS 5</a></li>

          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contacts</h3>
          <ul>
            <li>Email: info@ElectronicShop.com</li>
            <li>Phone: +252 (61) 6-144494</li>
            <li>Address: Digfer Banadir Street, Mogadisho Somalia</li>
          </ul>
        </div>

        {/* Social Media Networks */}
        <div>
          <h3 className="text-lg font-bold mb-4">Social Media</h3>
          <h3 className='mb-4'>You Can Follow Here .</h3>
          <ul className="flex space-x-4">
            <li className='w-7 h-5'><a href="#" className="hover:text-gray-400"><i className="facebook-f"><img src="https://cdn-icons-png.freepik.com/256/5968/5968764.png?uid=R73052817&ga=GA1.2.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
            <li className='w-7 h-5'><a href="#" className="hover:text-gray-400"><i className="twitter"><img src="https://cdn-icons-png.freepik.com/256/3670/3670151.png?uid=R73052817&ga=GA1.2.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
            <li className='w-7 h-5'><a href="#" className="hover:text-gray-400"><i className="instagram"><img src="https://cdn-icons-png.freepik.com/256/1384/1384063.png?uid=R73052817&ga=GA1.2.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
            <li className='w-7 h-5'><a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"> <img src="https://cdn-icons-png.freepik.com/256/9068/9068642.png?uid=R73052817&ga=GA1.2.1962600705.1715278960&semt=ais_hybrid" alt="" /></i></a></li>
          </ul>
        </div>
      </div>
     
      <div className="text-center mt-8 text-gray-400 ">
        &copy; Electronic Shop. All rights reserved.
      </div>
    </footer>

    </div>
  );
};

export default ProductPage;


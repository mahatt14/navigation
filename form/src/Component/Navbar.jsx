import React from 'react'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div>
    
    <header class="shadow mb-2 bg-gray-900 text-white ">
<div class="bg-gray-900 py-4 px-6 flex justify-between items-center mb-16 ">
<img className='w-12 h-12' src="https://cdn-icons-png.freepik.com/256/5968/5968253.png?ga=GA1.1.1962600705.1715278960&semt=ais_hybrid" alt=""  />
        <a href="/" className="text-white font-bold text-3xl">
            <span className='text-orange-500'>El</span>ectronic <span className='text-orange-500'>Shop</span>
          </a>
  <input type="checkbox" class="peer hidden" id="navbar-open" />
  <label class="absolute top-5 right-7 cursor-pointer md:hidden" for="navbar-open">
    <span class="sr-only">Toggle Navigation</span>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </label>
  <nav aria-label="Header Navigation" class="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start  ">
    <ul class="flex flex-col items-start space-y-2 md:ml-auto md:flex-row md:space-y-0 ">
    <li className="mr-6 ">
          <Link to="/" className="text-white hover:text-orange-500 text-xl font-bold">Home</Link>
          </li>
          <li className="mr-6">
          <Link to="/Product" className="text-white hover:text-orange-500 text-xl font-bold">Product</Link>
          </li>
          <li className="mr-6">
          <Link to="/About" className="text-white hover:text-orange-500 text-xl font-bold">About</Link>
          </li>

          <li className="mr-6">
          <Link to="/Contact" className="text-white hover:text-orange-500 text-xl font-bold">Contact</Link>
          </li>
    </ul>
    <div>
      <ul>
      <li class="text-gray-600 md:mr-12 hover:text-blue-600">
        <Link to="/Login"><button class="rounded-md border-2 border-orange-500 px-6 py-1 font-medium text-white transition-colors hover:bg-orange-500 hover:text-white mr-3">Login</button></Link>
        <button class="rounded-md border-2 border-orange-500 px-6 py-1 font-medium text-white transition-colors hover:bg-orange-500 hover:text-white mr-3">Search</button>
        <input className='rounded-md border-2 border-orange-500 px-2 py-1 font-medium text-black transition-color mr-3 placeholder-black' type="text" placeholder='search' />
        
        <button class="rounded-md border-2 border-orange-500 px-6 py-1 font-medium text-white transition-colors hover:bg-orange-500 hover:text-white mr-3 ">
        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
        </button>
       

      </li>
      </ul>
    </div>
  </nav>
</div>
</header>

      
    </div>
  )
}

export default Navbar
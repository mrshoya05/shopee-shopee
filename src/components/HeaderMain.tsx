import React from 'react'
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'

function HeaderMain() {
  return (
   //here we will create  heade  LOGO in most right  then search bar with search icon  in center about 50% widt  thn in most right 3 icons for cart, user and heart one (avtar , heart, cart   ) heart and cart with   counting ,
<>


<div className="flex items-center justify-between p-4 border text-white">
    <div className="flex items-center text-gray-500 text-xl font-bold">
        SHOPEE-SHOPEE
    </div>
    <div className="flex items-center w-1/2 outline-none border rounded-md">
        <input
            type="text"
            placeholder="Search..."
            className="w-full p-1 rounded-l-md focus:outline"
        />
        <button className="bg-blue-500 p-2 rounded-r-md">
            <FaSearch className="h-5 w-5 text-white" />
        </button>
    </div>
    <div className="flex items-center space-x-3">
        <div className="relative">
            <FaShoppingCart className="h-6 w-6 text-gray-900" />
            <span className="absolute top-[-6] right-[-5] inline-flex items-center justify-center text-gray-300 px-1 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                3
            </span>
        </div>
        <div className="relative ">
            <FaHeart  className='h-6 w-6 text-gray-900' />
            <span className="absolute top-[-6] right-[-5] inline-flex items-center text-gray-300 justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                5
            </span>
        </div>
        <div className="relative"></div>
            <FaUser className="h-6 w-6 text-gray-900" />
        </div>
    </div>


</>

  )
}

export default HeaderMain
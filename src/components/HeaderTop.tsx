import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedinIn } from 'react-icons/lia';
import { RiInstagramFill } from 'react-icons/ri';

const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block '>
        <div className='container p-4'>

            <div  className='flex justify-between items-center'>
    <div className="hidden lg:flex gap-1">
        <div className="header_top_icon_wrapper">
        <FaFacebook />
       
        </div>
        <div className="header_top_icon_wrapper">
        <RiInstagramFill />
       
        </div>
        <div className="header_top_icon_wrapper">
        <BsTwitter />
       
        </div>
        <div className="header_top_icon_wrapper">
        <LiaLinkedinIn />
       
        </div>
    </div>
    <div className='text-gray-500 '>
<b>FREE SHIPPING </b> THIS WEEK ON ORDERS OVER $100
    </div>

    <div className='flex gap-4'>
   <select className='border-none bg-transparent text-gray-500  text-[12px] w-[70px]'
     name = 'currency'
     id = 'currency'>
         <option value="en">USD $</option>
         <option value="fr">ERU   </option>
         <option value="de">INR </option>
    </select>
<select className='border-none bg-transparent  text-gray-500 text-[12px] w-[80px]'>
            <option value="en">ENG</option>
            <option value="fr">FRA   </option>
            <option value="de">DEU </option>    
    </select>

    </div>
            </div>

        </div>
    </div>
  )
}

export default HeaderTop
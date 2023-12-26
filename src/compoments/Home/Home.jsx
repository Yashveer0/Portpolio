import React from 'react'
import {Link, NavLink } from 'react-router-dom'
import pic  from "../../assets/WhatsApp Image 2023-06-18 at 9.22.55 AM.jpeg"
import logo  from "../../assets/logo-no-background.png"

export default function Home(props) {
    

     return (
        <><div className='w-full flex-wrap flex justify-between  '>
             <div className="w-1/2 flex bg-gray-400 flex-wrap ">
                    <img className='flex-wrap w-1/2 rounded  py-4 px-4' 
                    title='Yash veer'
                    src={pic} alt="Yash veer" />   
                   
                    <div className='flex-wrap w-auto  text-left '>
                    <h1 className=' flex-wrap w-full text-2xl font-bold py-2 px-2'>Hi, <br/> I'm Yash, <br/>  web <span className='text-red-700'>developer</span> </h1>  
                    <p className=' px-2 py-2 text-1xl font-bold'>turning ideas into real life <span className='text-red-700'>products</span>  is my calling .</p> 
                    <Link
                            to="/contactUs"
                            className="text-white bg-black hover:bg-sky-700 focus:ring-4 focus:ring-orange-300  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 ml-2 mr-2 focus:outline-none"
                        >
                            Contect Me !
                        </Link>
                    </div>
                     
               </div>
              <div className=" flex-wrap w-1/2 flex justify-center ">
              <img className='flex-wrap  h-80 py-2 px-2 mt-20' src={logo} alt="Logo" />
              </div>
         </div>
        </>
    )
};


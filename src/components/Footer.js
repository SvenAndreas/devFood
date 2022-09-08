import React from 'react'
import {Link} from "react-router-dom";
import Logo from "../img/logo.png"
import {GrSend, GrLinkedin,GrGithub} from "react-icons/gr"

function Footer() {
  return (
    <div className='bg-backGroundColor/75 p-5 mt-[8rem] md:mt-[12rem]  w-[100%]'>

        <div className='flex flex-wrap'>
        <div className='w-[20rem] py-2 flex flex-col grow m-auto'>
            <Link to="/">
                <div>
                    <img src={Logo} className="w-[10rem]" alt='logo' />
                    <p className='text-amber-50 drop-shadow-md text-x1 font-bold '>
                    Delivery App
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </Link>
        </div>
     
        <div className='w-[20rem] py-2 flex flex-col mx-2 grow md:m-auto'>
          <h3 className='text-xl font-semibold mt-4'>
            Delivery time
          </h3>
          <p className=' text-sm font-bold mt-4'>
            Monday-Saturday
          </p>
          <p>
            10:00hs - 23:30hs
          </p>
          <p className=' text-sm font-bold mt-4'>
            Sunday
          </p>
          <p>
            Off
          </p>
        </div>

        <div className='w-[20rem] py-2 flex flex-col mx-2 grow md:mt-9'>
          <h3 className='text-xl font-semibold mt-4'>
            Contact
            </h3>
          <p className='mt-2'>
            Location:
          </p>
          <p>
            Casa Grande,Córdoba,Argentina.
          </p>
          <p className=' text-sm font-bold mt-4'>
            Phone: +541133671001
            </p>
          <p className=' text-sm font-bold mt-4'>
            Email: svenandreasclausz@gmail.com
          </p>
          <div className='flex mt-1 ml-1'>
            <a href="https://linkedin.com/in/sven-andreas-clausz" target="_blank" rel="noreferrer">
             <GrLinkedin className='mx-3  mt-2'/>
            </a>
            <a href="https://github.com/SvenAndreas" target="_blank" rel='noreferrer' >
             <GrGithub className='mx-3    mt-2'/>
            </a>
          </div>
        </div>

        <div className='max-w-[20rem] py-2 flex flex-col grow '>
          <h3 className='text-xl font-semibold mt-4'>
            Newsletter
          </h3>
          <p className='mt-2'>
            Subscribe our newsletter
          </p>
          <div className='flex items-center bg-transparent border border-black p-2'>
            <input 
            type="email" 
            placeholder='Enter your email' 
            className=' outline-none place py-1 bg-transparent placeholder:transparent placeholder:text-black' 
            />
            <div className='shadow-lg rounded-xl cursor-pointer hover:shadow-none '>
                <GrSend className='bg-amber-100 px-2 h-8 w-10 ml-[4px] rounded-xl'/>
            </div>
          </div>
        </div>
        </div>

        <div className='mt-10 w-[20rem] flex mx-auto'>
            <p className='text-sm text-center font-medium'>
                 Website made with ❤ by Sven Andreas Clausz.
                 2022
            </p>
        </div>

    </div>
  )
}

export default Footer
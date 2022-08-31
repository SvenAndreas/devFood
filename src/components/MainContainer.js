import React from 'react'
import Delivery from "../img/delivery.png"
import {RiMotorbikeFill} from "react-icons/ri"
import Background from "../img/background.png"

function MainContainer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-screen '>
      <div className='py-2  flex-col flex items-start md:items-start gap-3'>
          <div className='flex items-center gap-2 self-center bg-amber-500/40 p-2 rounded-full py-1 px-5 shadow-md  md:self-start'>
            <p className='text-base select-none text-amber-800 font-semibold'>
              Bike Delivery
            </p>
            <div className='w-10 h-10 rounded-full overflow-hidden bg-slate-100/80 drop-shadow-xl'>
            <img
              src={Delivery} 
              className="w-full h-full obeject-contain" alt="delivery"
              />
            </div>
          </div>
          <p className='text-[2.5rem] text-center self-center select-none font-bold tracking-wide md:text-start md:text-[4rem] md:self-start'>
            The fastest delivery in
            <br/>
            <span className='text-amber-600 select-none text-[3rem] md:text-[5rem]'>your City</span>
          </p>
          <p className='text-base text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          <div className='flex justify-center w-[80%] self-center md:justify-start'>
            <button className='bg-gradient-to-br from-amber-400 to-amber-700 w-full p-2 font-bold rounded-sm flex items-center justify-center self-center text-amber-100 hover:shadow-md transition-all ease-in-out md:w-40 '>
              Order now
              <RiMotorbikeFill className='ml-2'/>
            </button>
          </div>
        </div>
    
      <div className="w-full flex items-cemter justify-end">
        <div className=''>
          <img src={Background} alt="background" className='object-contain rounded-3xl h-[60%] mr-15 bg-gradient-to-t from-amber-100/0 to-amber-300/75' />
        </div>
      </div>
    </div>
  )
}

export default MainContainer
import React from 'react'
import Delivery from "../img/delivery.png"
import {RiMotorbikeFill} from "react-icons/ri"
import {containerData} from "../utils/data"

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
          <div className='flex justify-center w-[80%] self-center md:justify-start mb-5'>
            <button className='bg-gradient-to-br from-amber-400 to-amber-700 w-full p-2 font-bold rounded-sm flex items-center justify-center self-center text-amber-100 hover:shadow-md transition-all ease-in-out md:w-40 '>
              Order now
              <RiMotorbikeFill className='ml-2'/>
            </button>
          </div>
        </div>
        <div className="py-2 flex-1 grid grid-row-2 grid-cols-2 bg-amber-100 justify-items-center items-center rounded-3xl">
            {containerData &&
              containerData.map((e) => (
                <div
                  key={e.id}
                  className="p-2 m-2 flex-0 mt-5 bg-slate-50/40  backdrop-blur-xl rounded-3xl flex flex-col flex-wrap items-center justify-center shadow-md min-w-[40px]"
                >
                  <img
                    src={e.src}
                    className="min-w-xs"
                    alt={e.name}
                  />
                  <p className="text-base lg:text-xl font-semibold mt-2 lg:mt-4">
                    {e.name}
                  </p>

                  <p className="text-[12px] text-center lg:text-sm font-semibold my-1 lg:my-3">
                    {e.decp}
                  </p>

                  <p className="text-sm font-semibold">
                    <span className="text-xs text-red-600">$</span> {e.price}
                  </p>
                </div>
              ))}
        </div>
    </div>
  )
}

export default MainContainer
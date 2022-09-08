import React from 'react'
import Delivery from "../img/delivery.png"
import {MdOutlineDeliveryDining,MdArrowForwardIos} from "react-icons/md"
import {AiOutlineCheckCircle} from "react-icons/ai"
import {containerData,categories} from "../utils/data"

function Home() {
  return (
    <div className=' max-h-[45rem] grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-screen px-10'>

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

          <div className='flex self-center md:self-start'>
            <AiOutlineCheckCircle className='mt-[5px] select-none font-bold text-amber-800  md:self-start'/>
            <p className='text-[1rem] select-none font-bold tracking-wide text-amber-800 md:text-start md:self-start'>
              Easy way to make an order
            </p>
          </div>

          <p className='text-[2.5rem] text-center self-center select-none font-bold tracking-wide md:text-start md:text-[4rem] md:self-start'>
             The fastest delivery in
            <span className='text-amber-600 select-none text-[3rem] md:text-[5rem]'> your City</span>
          </p>
          <p className='text-base text-center md:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

          <div className='flex justify-center w-[100%] self-center mt-10 md:justify-start mb-5'>
            <button className='bg-gradient-to-br from-amber-400 to-amber-700 w-[50%] p-2 font-bold rounded-lg flex items-center justify-center self-center text-amber-100 duration-300 hover:bg-gradient-to-bl hover:shadow-lg md:w-[50%] '>
             <p className='ml-5'>Order now</p>
             <MdArrowForwardIos className='ml-auto'/>
            </button>
            <button className='ml-2 w-[50%] p-2 font-bold border-[1.3px] rounded-lg text-amber-700 border-amber-700 duration-150  hover:text-amber-600 hover:shadow-lg  '>
              See all foods
            </button>
          </div>

          <div className="flex mx-auto md:mx-0">
            <MdOutlineDeliveryDining className='bg-amber-700 text-white rounded-full text-2xl'/>
            <p className='font-semibold'>No shipping charge</p>
          </div>

          <div className='hidden lg:flex w-[100%] justify-evenly mt-1   0'>
            {categories && categories.map(e=>(
            <div key={e.name} className='flex flex-col items-center duration-300 hover:-translate-y-6'>
              <div className='bg-amber-700 rounded-full w-[6rem] flex justify-center '>
                <img src={e.url} alt={e.name} className="max-w-[5rem]"/>
              </div>
              <h6 className='font-semibold'>{e.name}</h6>
            </div>
            ))}
          </div>

        </div>
        <div className='bg-backGroundColor/75 rounded-3xl w-full h-full'>
            <div className='flex justify-center text-center'>
                <div >
                    <p className='mx-auto mt-2 font-semibold text-3xl text-amber-600 drop-shadow-md'>
                        House recomendation 
                    </p>
                </div>
            </div>
            <div className="py-2 flex-1 grid grid-row-2 grid-cols-2  rounded-3xl lg:mb-3 md:h-[50%] lg:h-[100vh] xl:max-h-[43rem]">
            {containerData &&
              containerData.map((e) => (
                <div
                key={e.id}
                className="p-2 m-2 flex-1 mt-5 bg-slate-50/40  backdrop-blur-xl rounded-3xl flex flex-col flex-wrap items-center justify-center shadow-md min-w-[40px] max-h-[19rem]"
              >
                <img
                  src={e.src}
                  className="min-w-xs max-h-[10rem]"
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

    </div>
  )
}

export default Home
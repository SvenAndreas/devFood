import React from 'react'
import {motion} from "framer-motion"


function FoodCard({imageUrl,price,description,name}) {


  return (
        <div className='h-auto flex flex-col justify-between mx-2 rounded-xl  bg-amber-50/20 backdrop-blur-xl shadow-md xl:w-[20rem] '>
            <div className='flex justify-center items-center pt-10 mt-2'>
                <img src={imageUrl} alt={name} className='duration-300  max-h-[250px] max-w-[250px] hover:scale-125'/>
            </div>
            <p className='font-semibold text-lg'>{description}</p>
            <div className='flex w-full'>
                <p className='mx-3 my-2 p-2 font-semibold text-xl '>
                    <span className='text-red-600 text-base'>
                        $
                    </span>
                    {price}
                </p> 
                <motion.div whileTap={{scale:0.75}} className='mx-3 bg-red-700 p-2 ml-auto rounded-xl my-2 cursor-pointer'>
                        <p className='text-white font-semibold'>Add to cart</p>
                </motion.div>  
            </div>
        </div>
       )
}

export default FoodCard
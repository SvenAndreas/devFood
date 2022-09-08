import React, { useState } from 'react'
import { categories } from "../utils/data.js"
import FoodCard from './FoodCard.js'
import { useSelector } from 'react-redux'
import Loader from './Loader'

function Menucontainer() {

    const [select, setSelect] = useState("all")
    const items = useSelector((state)=>state.foodItems)
    console.log(items)

    return (
        <section className='w-full text-center mt-[42rem] md:mt-[12rem] lg:mt-[14rem]'>

            <p className='my-5 font-semibold text-[4rem]  md:text-[6rem] drop-shadow-lg text-amber-700 font-serif'>
                Our menu
            </p>

            <div className='m-auto flex flex-col items-center justify-start w-full md:w-[95%]  border rounded-xl'>
                <div className='bg-backGroundColor w-full p-[2rem]  flex flex-0 md:justify-evenly overflow-x-scroll md:overflow-visible rounded-xl shadow-lg'>
                    <div
                        onClick={() => setSelect("all")}
                    >
                        <p
                            className={`text-2xl font-semibold ${select === "all" ? "text-amber-700 bg-white px-[1.5rem] py-[0.2rem]" : "text-white"} mx-4 md:mx-0 rounded-lg cursor-pointer drop-shadow-md`}>
                            All
                        </p>
                    </div>
                    {categories && categories.map(e =>
                    (<div
                        onClick={() => setSelect(e.name)}
                        key={e.name}
                    >
                        <p whileTap={{ scale: 0.75 }} className={`text-2xl font-semibold ${select === e.name ? "text-amber-700 bg-white px-[1.5rem] py-[0.2rem]" : "text-white"} mx-4 md:mx-0  rounded-lg cursor-pointer drop-shadow-md`}>
                            {e.name}
                        </p>
                    </div>)
                    )}
                </div>

                <div className='flex md:max-h-[30rem] lg:max-h-[40rem] w-full overflow-x-scroll md:overflow-y-scroll md:overflow-x-hidden scrollbar md:grid md:grid-cols-3 lg:grid-cols-4   mt-3 gap-3'>
                    {!items 
                    ? 
                    <div className='mt-[10rem] ml-[28rem] xl:ml-[50rem] '><Loader /></div> 
                    :
                         Object.values(items).map(e => <FoodCard imageUrl={e.imageUrl} description={e.description} price={e.price} name={e.name} />
                    )}
                </div>
            </div>

        </section>
    )
}

export default Menucontainer
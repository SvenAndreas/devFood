import React,{useState} from 'react'
import {MdFastfood, MdDescription,MdOutlinePriceChange} from "react-icons/md"
import {RiUploadCloud2Fill, RiDeleteBin2Line, } from "react-icons/ri"
import {AiFillPicture} from "react-icons/ai"
import {categories} from "../utils/data"
import Loader from './Loader'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../firebase/firebase.config'


function CreateProduct() {

  const [isLoading, setIsLoading] = useState(false)
  const [imageAsset, setImageAsset] = useState(null)

  const upLoadImage = (e)=>{
    setIsLoading(true);
    const imageInfo = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageInfo.name}`)
    const upLoad = uploadBytesResumable(storageRef,imageInfo)
    upLoad.on("state_changed",(snapshot)=>{
      const upLoadProgress = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
    },(error)=>{
      console.log(error)
    },()=>{
      getDownloadURL(upLoad.snapshot.ref).then(downloadURL =>{
        setImageAsset(downloadURL);
        setIsLoading(false);
      })
    })
  }
  const deleteImage = ()=>{}
  return (
      <form className='flex flex-col w-[80%] m-auto h-550 items-center bg-slate-300/40 border border-gray-500'
      onSubmit={(e)=>e.preventDefault(e)}>
        <h1 className='mt-4'>
          Add new item
        </h1>
        <div className='flex mt-2 w-full justify-center'>
          <MdFastfood className='self-center mr-2'/>
          <input
          className='w-[80%] outline-none border-b-2 border-slate-500 bg-amber-200/75 placeholder:text-gray-500'
          placeholder='Give me a title...'
          type="text"
          name="title"
          />
        </div>
        <div className='flex mt-2 w-full justify-center'>
          <select className='w-[80%] ml-6 outline-none border border-solid border-slate-500 bg-amber-200/75 placeholder:text-gray-500'>
            <option value="other" className='bg-white placeholder:text-gray-500' >
              Select category
            </option>
            {categories && categories.map(e=>(
              <option
               className='text-base font-semibold'
               key={e.id}
              >
                {e.name}
              </option>
            ))}
          </select>
        </div>
        <p className='mt-2 flex items-center'>
          <AiFillPicture className='mr-1'/>
          Image
          </p>
        <div className='w-[80%] md:w-[60%] h-225 mt-3 bg-slate-500/10 ml-6 cursor-pointer rounded-lg border-2 border-dotted border-black/40 flex items-center justify-center'>
          {isLoading ? (
            <Loader/>
          ):(
            <>
              {!imageAsset ? (
                 <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                 <div className='flex items-center justify-center flex-col'>
                   <RiUploadCloud2Fill className='cursor-pointer scale-150'/>
                   <p className='text-center cursor-pointer'>
                     Click here to upload
                   </p>
                 </div>
                 <input
                  className="w-0 h-0" 
                  type="file" 
                  accept='image/*'
                  onChange={upLoadImage}
                  />
               </label>
              ):(
                <>
                  <div className='relative h-full'>
                    <img 
                      src={imageAsset}
                      alt="UploadedImage"   
                      className='w-full h-full object-cover'/>
                    <button 
                      className='absolute right-2 bottom-2 w-7 h-6 flex items-center justify-center rounded-full bg-red-500 text-xl cursor-pointer hover:drop-shadow-xl duration-500 transition-all' 
                      onClick={deleteImage}>
                      <RiDeleteBin2Line className='text-white'/>
                    </button>
                  </div>
                </>
              )}
            </>
          )
          }
        </div>
        <div className='flex mt-2 w-full justify-center'>
          <MdDescription className='self-center mr-2'/>
          <textarea
          className='w-[80%] outline-none border-slate-500 bg-amber-200/75 placeholder:text-gray-500'
          placeholder='Description...'
          type="text"
          name="description"
          />
        </div>
        <div className='flex mt-2 w-full justify-center'>
          <MdOutlinePriceChange className='self-center mr-2'/>
          <input
          className='w-[80%] outline-none border-b-2 border-slate-500 bg-amber-200/75 placeholder:text-gray-500'
          placeholder="Price"
          type="text"
          name="price"
          />
        </div>
        <button
         type='submit'
         className='mt-3 md:mt-5 md:mr-4 md:ml-auto md:w-auto w-full bg-emerald-500 text-white font-semibold px-12 py-2 rounded-lg hover:bg-emerald-400'
         >
          Save
        </button>
      </form>
  )
}

export default CreateProduct
import React, { useState } from 'react'
import { MdFastfood, MdDescription, MdOutlinePriceChange } from "react-icons/md"
import { RiUploadCloud2Fill, RiDeleteBin2Line, } from "react-icons/ri"
import { AiFillPicture } from "react-icons/ai"
import { categories } from "../utils/data"
import Loader from './Loader'
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../firebase/firebase.config'
import { useDispatch, useSelector } from 'react-redux'
import { setFoodItems, setIsLoading } from '../redux/actions'
import { getAllItems, saveItem } from '../utils/firebaseFunctions'


export function validate(input) {
  let errors = {};

  // let imgPostDot = input.img.lastIndexOf(".")+1; // +1 if not it brings the dot too
  // let validExt = ["jpg","png","jpeg"];
  // let imgExt = input.img.substring(imgPostDot)

  // else if(!validExt.includes(imgExt)){
  //   errors.img= "Invalid extension, must be .jpg .jpeg or .png"
  // }
  if (input.select === "other") {
    errors.select = "*Select a category"
  }
  if (!input.img) {
    errors.img = "*Image is required"
  }
  if (!input.title) {
    errors.title = "*Title is required"
  }
  else if (!/^[a-zA-Z\s]*$/.test(input.title)) {
    errors.title = "*Title only accept letters"
  }
  if (!input.price) {
    errors.price = "*Price is required"
  }
  else if (!/[0-9]/.test(input.price)) {
    errors.price = "*Price only accept numbers"
  }
  if (!input.description) {
    errors.description = "*Description is requiered"
  }
  return errors;
}


function CreateProduct() {

  const initialState = {
    title: "",
    price: "",
    description: "",
    img: "",
    select: "other",
  }

  const errorsIntialState = {
    title: "*Title is required",
    price: "*Price is required",
    description: "*Description is required",
    img: "*Image is required",
    select: "*Select a category"
  }

  const isLoading = useSelector((state) => state.loading)
  const dispatch = useDispatch()

  // const [isLoading, setIsLoading] = useState(false)
  const [imageAsset, setImageAsset] = useState(null)
  const [input, setInput] = useState(initialState)
  const [errors, setErrors] = useState(errorsIntialState)
  const [msg, setMsg] = useState({ error: "", succes: "" });

  
  const fetchData = async () =>{
    await getAllItems().then((data)=>{
      dispatch(setFoodItems(data))
    })
  }


  const handleInputChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    console.log(e.target.value)
    setErrors(validate({ ...input, [e.target.name]: e.target.value }))
  }

  const upLoadImage = (e) => {
    dispatch(setIsLoading())
    const imageInfo = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageInfo.name}`)
    const upLoad = uploadBytesResumable(storageRef, imageInfo)
    upLoad.on("state_changed", (snapshot) => {
      const upLoadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    }, (error) => {
      console.log(error)
      dispatch(setIsLoading());
      setMsg((prev) => ({ ...prev, error: "Error while uploading : try again 🚨" }))
      setTimeout(() => {
        setMsg((prev) => ({ ...prev, error: "" }))
      }, 3000);
    }, () => {
      getDownloadURL(upLoad.snapshot.ref).then(downloadURL => {
        setImageAsset(downloadURL);
        dispatch(setIsLoading());
        setInput((prev) => ({ ...prev, img: e.target.value.substring(e.target.value.lastIndexOf(".") + 1) }))
        setErrors(validate({ ...input, img: e.target.value.substring(e.target.value.lastIndexOf(".") + 1) }));
        setMsg((prev) => ({ ...prev, succes: "Image uploaded succesfully 😊" }))
        setTimeout(() => {
          setMsg((prev) => ({ ...prev, succes: "" }))
        }, 3000);
      })
    })
  }

  const deleteImage = () => {
    dispatch(setIsLoading())
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      dispatch(setIsLoading());
      setInput((prev) => ({ ...prev, img: "" }))
      setErrors((prev) => ({ ...prev, img: "*Image is required" }))
      setMsg((prev) => ({ ...prev, succes: "Image removed succesfully 😊" }))
      setTimeout(() => {
        setMsg((prev) => ({ ...prev, succes: "" }))
      }, 3000);
    })
  }

  const saveDetails = (e) => {
    e.preventDefault();
    try {
      if (!input.description || !input.select || !input.img || !input.price) {
        setMsg((prev) => ({ ...prev, error: "Required fields can't be empty" }))
        setTimeout(() => {
          setMsg((prev) => ({ ...prev, error: "" }))
        }, 3000);
      } else {
        const data = {
          id: `${Date.now()}`,
          title: input.title,
          imageUrl: imageAsset,
          category: input.select,
          description: input.description,
          price: input.price,
          qty: 1
        }
        saveItem(data);
        setInput(initialState);
        setImageAsset(null);
        setErrors(errorsIntialState)
        
        // setInput((prev)=>({...prev,select:document.forms[0]["select"].value="other"}))

        setMsg((prev) => ({ ...prev, succes: "New product uploaded 😊" }))
        setTimeout(() => {
          setMsg((prev) => ({ ...prev, succes: "" }))
        }, 3000);
      }
    } catch (error) {
      console.log(error)
      setMsg((prev) => ({ ...prev, error: "Error while uploading : try again 🚨" }))
      setTimeout(() => {
        setMsg((prev) => ({ ...prev, error: "" }))
      }, 3000);
    }
    fetchData()
  }


  return (
    <form className='flex flex-col w-[80%] m-auto h-650 items-center bg-slate-300/40 border border-gray-500'
      onSubmit={saveDetails}>
      {!msg.succes ? null : <p className='text-white bg-emerald-600 p-2 font-bold text-md mt-2 rounded-xl'>{msg.succes}</p>}
      {!msg.error ? null : <p className='text-white bg-red-600 p-2 font-bold text-md mt-2 rounded-xl'>{msg.error}</p>}
      <h1 className='mt-4'>
        Add new item
      </h1>
      <div className='flex mt-2 w-full justify-center'>
        <MdFastfood className='self-center mr-2' />
        <input
          className='w-[80%] outline-none border-b-2 border-slate-500 bg-amber-200/75 placeholder:text-gray-500'
          placeholder='Give me a title...'
          type="text"
          name="title"
          value={input.title}
          onChange={handleInputChange}
        />
      </div>
      {!errors ? null : <p className='text-red-500 font-semibold text-sm'>{errors.title}</p>}
      <div className='flex mt-2 w-full justify-center'>
        <select
          name="select"
          className='w-[80%] ml-6 outline-none border border-solid border-slate-500 bg-amber-200/75 placeholder:text-gray-500'
          onClick={handleInputChange}
        >
          <option value="other" className='bg-white placeholder:text-gray-500' >
            Select category
          </option>
          {categories && categories.map(e => (
            <option
              className='text-base font-semibold'
              key={e.id}
              value={e.name}
            >
              {e.name}
            </option>
          ))}
        </select>
      </div>
      {!errors ? null : <p className='text-red-500 font-semibold text-sm' >{errors.select}</p>}
      <p className='mt-2 flex items-center'>
        <AiFillPicture className='mr-1' />
        Image
      </p>
      <div className='w-[80%] md:w-[60%] h-225 mt-3 bg-slate-500/10 ml-6 cursor-pointer rounded-lg border-2 border-dotted border-black/40 flex items-center justify-center xs:mr-4'>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {!imageAsset ? (
              <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                <div className='flex items-center justify-center flex-col'>
                  <RiUploadCloud2Fill className='cursor-pointer scale-150' />
                  <p className='text-center cursor-pointer'>
                    Click here to upload
                  </p>
                </div>
                <input
                  className="w-0 h-0"
                  type="file"
                  accept='image/*'
                  onChange={upLoadImage}
                  name="image"
                  value={input.img}
                />
              </label>
            ) : (
              <>
                <div className='relative h-full'>
                  <img
                    src={imageAsset}
                    alt="UploadedImage"
                    className='w-full h-full object-cover'
                    name="imageUploaded"
                  />
                  <button
                    className='absolute right-2 bottom-2 w-7 h-6 flex items-center justify-center rounded-full bg-red-500 text-xl cursor-pointer hover:drop-shadow-xl duration-500 transition-all'
                    onClick={deleteImage}>
                    <RiDeleteBin2Line className='text-white' />
                  </button>
                </div>
              </>
            )}
          </>
        )
        }
      </div>
      {!errors ? null : <p className='text-red-500 font-semibold text-sm'>{errors.img}</p>}
      <div className='flex mt-2 w-full justify-center'>
        <MdDescription className='self-center mr-2' />
        <textarea
          className='w-[80%] outline-none border-slate-500 bg-amber-200/75 placeholder:text-gray-500'
          placeholder='Description...'
          type="text"
          name="description"
          value={input.description}
          onChange={handleInputChange}
        />
      </div>
      {!errors ? null : <p className='text-red-500 font-semibold text-sm'>{errors.description}</p>}
      <div className='flex mt-2 w-full justify-center'>
        <MdOutlinePriceChange className='self-center mr-2' />
        <input
          className='w-[80%] outline-none border-b-2 border-slate-500 bg-amber-200/75 placeholder:text-gray-500'
          placeholder="Price"
          type="text"
          name="price"
          value={input.price}
          onChange={handleInputChange}
        />
      </div>
      {!errors ? null : <p className='text-red-500 font-semibold text-sm'>{errors.price}</p>}
      <button
        type='submit'
        className='mt-3 mb-3 md:mt-5 md:mr-4 md:ml-auto md:w-auto w-full bg-emerald-500 text-white font-semibold px-12 py-2 rounded-lg hover:bg-emerald-400'
      >
        Save
      </button>
    </form>
  )
}

export default CreateProduct
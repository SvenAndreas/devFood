import React from 'react'
import Logo from "../img/logo.png"
import Avatar from "../img/avatar.png"
import { RiShoppingBasketFill } from "react-icons/ri"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase/firebase.config'
import { useDispatch, useSelector } from "react-redux"
import { setUser } from '../redux/actions'

export default function NavBar() {


  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)
  console.log(user)


  const login = async () => {
    const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider);
    dispatch(setUser(providerData[0]))
    localStorage.setItem("user",JSON.stringify(providerData[0]))
  };

  return (
    <nav className='fixed z-50 w-screen bg-orange-700/50 p-3.5 px-7'>
      {/* desktop & tablet */}
      <div className='hidden md:flex w-full h-full'>

        <Link to="/">
          <div className='flex items-center gap-2'>
            <img src={Logo} className="w-16 object-cover" alt='logo' />
            <p className='text-headingColor text-x1 font-bold '>City</p>
          </div>
        </Link>

        <ul className='flex items-center gap-8 ml-auto'>
          <li className='text-base cursor-pointer text-amber-100 font-semibold hover:text-amber-700 duration-300 transition-all ease-in-out'>Home</li>
          <li className='text-base cursor-pointer text-amber-100 font-semibold hover:text-amber-700 duration-300 transition-all ease-in-out'>Menu</li>
          <li className='text-base cursor-pointer text-amber-100 font-semibold hover:text-amber-700 duration-300 transition-all ease-in-out'>About Us</li>
          <li className='text-base cursor-pointer text-amber-100 font-semibold hover:text-amber-700 duration-300 transition-all ease-in-out'>Service</li>
        </ul>

        <div className='flex items-center ml-3'>
          {user ? <motion.img whileTap={{ scale: 0.75 }} src={user.photoURL} alt="userprofile" className="w-8 mr-5 ml-3  cursor-pointer rounded-full " referrerPolicy='no-referrer' /> : <motion.img whileTap={{ scale: 0.75 }} src={Avatar} className="w-14 mr-2 cursor-pointer rounded-full " alt="userprofile" onClick={login} />}
          <div className='w-30 bg-slate-100/60 shadow-xl rounded-lg flex flex-col absolute px-4 py-2 top-12 right-16'>
            <p>New Item</p>
            <p>Log Out</p>
          </div>

          <RiShoppingBasketFill
            className='z-40 cursor-pointer transform scale-150 text-amber-100 focus:scale-75'
          />
          <div className='absolute top-4 z-10 right-4 w-4 h-4 bg-amber-700 rounded-full flex items-center justify-center cursor-pointer'>
            <p className='text-xs text-amber-300 cursor-pointer'>7</p>
          </div>
        </div>
      </div>


      {/* mobile */}
      <div className='flex md:hidden w-full h-full'>

      </div>

    </nav>
  )
}

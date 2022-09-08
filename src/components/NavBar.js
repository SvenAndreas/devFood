import React, { useState } from 'react'
import Logo from "../img/logo.png"
import Avatar from "../img/avatar.png"
import { RiShoppingBasketFill, RiLogoutCircleRLine, RiAddCircleLine, RiMenu3Fill} from "react-icons/ri"
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase/firebase.config'
import { useDispatch, useSelector } from "react-redux"
import { setUsers } from '../redux/actions'

export default function NavBar() {


  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const dispatch = useDispatch();
  const storeUser = useSelector((state) => state.user)

  const [user, setUser] = useState(storeUser)
  const [menu, setMenu] = useState(false)
  const [navMenu, setNavMenu] = useState(false)

  const login = async () => {
    if (!user) {
      const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider);
      dispatch(setUsers(providerData[0]))
      setUser(providerData[0])
      localStorage.setItem("user", JSON.stringify(providerData[0]))
    } else {
      setMenu(!menu)
    }
  };

  const display = () => {
    setNavMenu(!navMenu)
  }

  const logout = () =>{
    setMenu(!menu)
    localStorage.clear()
    dispatch(setUsers(null))
    setUser(null)
  }


  return (
    <nav className='fixed z-50 w-screen bg-amber-700 p-2.5 px-1'>
      {/* desktop & tablet */}
      <div className='hidden md:flex w-full h-full'>

        <Link onClick={()=>{if(menu === true)setMenu(!menu)}} to="/">
          <div className='flex ml-10 items-center gap-1'>
            <img src={Logo} className="w-20 object-cover xl:w-[10rem]" alt='logo' />
            <p className='text-amber-100 text-x1 font-bold xl:text-3xl '>
              Delivery App
            </p>
          </div>
        </Link>

        <ul className='flex items-center gap-8 m-auto'>
          <Link onClick={()=>{if(menu === true)setMenu(!menu)}} to="/">
            <li className='text-base xl:text-3xl cursor-pointer text-amber-100 font-semibold hover:text-amber-900 duration-300 transition-all ease-in-out'>
              Home
            </li>
          </Link>
          <li className='text-base xl:text-3xl cursor-pointer text-amber-100 font-semibold hover:text-amber-900 duration-300 transition-all ease-in-out'>
            Menu
          </li>
          <li className='text-base xl:text-3xl cursor-pointer text-amber-100 font-semibold hover:text-amber-900 duration-300 transition-all ease-in-out'>
            About Us
          </li>
          <li className='text-base xl:text-3xl cursor-pointer text-amber-100 font-semibold hover:text-amber-900 duration-300 transition-all ease-in-out'>
            Service
          </li>
        </ul>

        <div className='flex items-center ml-3 mr-20'>
          <div>
            <RiShoppingBasketFill
                className='z-40 cursor-pointer transform scale-150 xl:text-2xl text-amber-100 mr-8 ml-1'
              />
              <div className='absolute top-3 z-10 right-[10.4rem] w-4 h-4 lg:w-6 lg:h-6 xl:top-7 xl:right-[11.7rem] bg-amber-300/70 rounded-full flex items-center justify-center cursor-pointer'>
                <p className='text-xs lg:text-lg text-amber-700 cursor-pointer font-semibold'>7</p>
              </div>
            </div>
            
          {user
              ? <motion.img 
                whileTap={{ scale: 0.75}} 
                src={user.photoURL} 
                alt="userprofile" 
                className="shrink w-7 mr-5 ml-3  cursor-pointer rounded-full xl:w-[3.5rem] " 
                referrerPolicy='no-referrer' 
                onClick={login} 
              />
              : <motion.img 
                whileTap={{ scale: 0.75 }} 
                src={Avatar} 
                className="shrink w-14 mr-2 cursor-pointer  rounded-full xl:w-[3.5rem] " 
                alt="userprofile"
                onClick={login}
               />
            }
              
            
            {menu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6, y: -30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0, scale: 0.6, y: -50 }}
                className='w-[15rem] bg-slate-100/60 shadow-xl rounded-lg flex flex-col absolute top-[5.3rem] right-[7.6rem]'>
                {user && user.email === "svenandreasclausz@gmail.com" && (
                  <Link to="/createItem" onClick={()=>setMenu(!menu)}>
                    <p className='flex items-center w-[90%] px-3 mx-auto mt-3 text-2xl font-sembibold py-3 gap-3 cursor-pointer hover:bg-slate-100/60 rounded-md drop-shadow-md '>
                      New Item 
                      <RiAddCircleLine />
                    </p>
                  </Link>)}
                <p onClick={logout} className='flex items-center w-[90%] px-3 mx-auto mt-3 text-2xl font-sembibold py-3 gap-3 cursor-pointer hover:bg-slate-100/60 rounded-md drop-shadow-md mb-3'>
                  Log Out
                  <RiLogoutCircleRLine className='relative left-3' />
                </p>
              </motion.div>
            )}
        </div>
      </div>


      {/* mobile */}
      <div className='flex md:hidden w-full h-full justify-between items-center'>
        <Link to="/">
          <div className='flex items-center gap-2'>
            <img src={Logo} className="shrink w-16" alt='logo' />
            <p className='text-white text-sm shrink font-bold '>
              City
            </p>
          </div>
        </Link>
        <div className='flex items-center ml-3'>
           
          {user
              ? <motion.img whileTap={{ scale: 0.75 }} src={user.photoURL} alt="userprofile" className="shrink w-7 mr-5 ml-3  cursor-pointer rounded-full " referrerPolicy='no-referrer' onClick={login} />
              : <motion.img whileTap={{ scale: 0.75 }} src={Avatar} className="shrink w-14 mr-2 cursor-pointer  rounded-full " alt="userprofile" onClick={login} />
            }


          {menu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: -30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, scale: 0.6, y: -50 }}
              className='w-30 bg-slate-100/60 shadow-xl rounded-lg flex flex-col absolute top-12 right-20 mr-7'>
              {user && user.email === "svenandreasclausz@gmail.com" && (
                <Link to="/createItem">
                  <p className='flex items-center px-3 py-1 gap-3 cursor-pointer hover:bg-slate-100/70 rounded-md drop-shadow-md'onClick={()=>setMenu(!menu)}>
                    New Item 
                    <RiAddCircleLine />
                  </p>
                </Link>)}
              <p onClick={logout} className='flex items-center px-3 py-1 gap-3 cursor-pointer hover:bg-slate-100/70 rounded-md drop-shadow-md'>
                Log Out
                <RiLogoutCircleRLine className='relative left-3' />
              </p>
            </motion.div>
          )}

          <RiShoppingBasketFill
            className='shrink-0 z-40 cursor-pointer transform scale-150 text-amber-100 mr-8 ml-1'
          />
          <div className='absolute shrink mr-8 top-3 z-10 right-6 w-4 h-4 bg-amber-700 rounded-full flex items-center justify-center cursor-pointer'>
            <p className='text-xs shrink text-amber-300 cursor-pointer'>
              7
            </p>
          </div>
          <motion.div whileTap={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
            <RiMenu3Fill onClick={display} className='shrink-0 mr-4 scale-150 cursor-pointer text-white font-bold' />
          </motion.div>
          {navMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: -30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0, scale: 0.6, y: -50 }}
              className='w-30 bg-slate-100/60 shadow-xl rounded-lg flex flex-col absolute top-12 right-3'>
              <ul>
                <li className='block items-center px-3 py-1 gap-3 cursor-pointer hover:bg-slate-100/70 rounded-md drop-shadow-md'onClick={()=>setNavMenu(!navMenu)}>
                  Home
                </li>
                <li className='flex items-center px-3 py-1 gap-3 cursor-pointer hover:bg-slate-100/70 rounded-md drop-shadow-md'onClick={()=>setNavMenu(!navMenu)}>
                  Menu
                </li>
                <li className='flex items-center px-3 py-1 gap-3 cursor-pointer hover:bg-slate-100/70 rounded-md drop-shadow-md'onClick={()=>setNavMenu(!navMenu)}>
                  About Us
                </li>
                <li className='flex items-center px-3 py-1 gap-3 cursor-pointer hover:bg-slate-100/70 rounded-md drop-shadow-md'onClick={()=>setNavMenu(!navMenu)}>
                  Service
                </li>
              </ul>
            </motion.div>

          )}

        </div>
      </div>


    </nav>
  )
}

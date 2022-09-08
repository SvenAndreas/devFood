import React from 'react'
import Home from './Home'
import Menucontainer from './Menucontainer'

function MainContainer() {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <Home/>
      <Menucontainer/>
    </div>
  )
}

export default MainContainer
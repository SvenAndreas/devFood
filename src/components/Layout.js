import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import Routers from './Routers'

function Layout() {
    return (
        <div className='flex flex-col min-h-screen'>
            <NavBar />
                <div className='pt-[10rem]'>
                    <Routers />
                </div>
            <Footer />
        </div>
    )
}

export default Layout
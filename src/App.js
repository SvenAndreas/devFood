import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom";
import { CreateProduct, MainContainer, NavBar } from "./components";
import {AnimatePresence} from "framer-motion";



function App() {

  useEffect(()=>{
    document.body.style.backgroundColor="#ECCD9415"
  })

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col"> 
        <NavBar/>
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/" element={<MainContainer/>} />
            <Route exact path="/createItem" element={<CreateProduct/>} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;

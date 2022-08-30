import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom";
import { CreateProduct, MainContainer, NavBar } from "./components";
import {AnimatePresence} from "framer-motion";



function App() {

  useEffect(()=>{
    document.body.style.backgroundColor="#ECCD94"
  })

  return (
    <AnimatePresence>
      <div> 
        <NavBar/>
        <Routes>
          <Route path="/" element={<MainContainer/>} />
          <Route exact path="/createItem" element={<CreateProduct/>} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default App;

import React, { useEffect } from "react"
import {AnimatePresence} from "framer-motion";
import { getAllItems } from "./utils/firebaseFunctions";
import { useDispatch } from "react-redux";
import { setFoodItems } from "./redux/actions";
import Layout from "./components/Layout";



function App() {

  const dispatch = useDispatch();

  const fetchData = async () =>{
    await getAllItems().then((data)=>{
      dispatch(setFoodItems(data))
    })
  }
  useEffect(()=>{
    document.body.style.backgroundColor="#ECCD9415"
    fetchData();
  },[])

  return (
    <AnimatePresence exitBeforeEnter>
      <Layout/>
    </AnimatePresence>
  );
}

export default App;

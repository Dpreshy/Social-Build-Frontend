import React from "react"
import Header from "./components/Headers/Header"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeScreen from "./components/Home/HomeScreen"
import  DetailScreen from "./components/Profile/DetailScreen"
const App = ()=>{
  return(
    <BrowserRouter>
    <Header />

 <Routes>
   <Route path="/" element={<HomeScreen/>}/>
   <Route path="/detail" element={<DetailScreen/>}/>

 </Routes>
    </BrowserRouter>
    )
}
export default App
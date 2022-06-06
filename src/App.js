import React from "react"
import Header from "./components/Headers/Header"
import {BrowserRouter} from 'react-router-dom'
import HomeScreen from "./components/Home/HomeScreen"
const App = ()=>{
  return(
    <BrowserRouter>
    <Header />
<HomeScreen/>
 
    </BrowserRouter>
    )
}
export default App
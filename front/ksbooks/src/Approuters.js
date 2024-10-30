// import Dashboard from "./component/pages/Auth/Dashboard";
import App from "./App.js";
import Login from "./component/pages/Auth/Login";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from "./component/pages/Auth/About.js";

import Data from "./Data/Data";
import Create from "./Components/Create.js";
import Delete from "./Components/Delete.js";
import Update from "./Components/Update.jsx";

import React from 'react'
import Register from "./component/pages/Auth/Register.js";
const Approuters = () => {
  return (
    <div>
      
    <>
       <BrowserRouter>
        <Routes>
            <Route  path="/" element={<App/>}/> 
            <Route  path="create" element={<Create />}> Create </Route>
            <Route  path="Delete/:id" element={<Delete />}> Delete </Route>
            <Route  path="Update/:id" element={<Update />}> Update </Route>
            <Route path='component/pages/Auth/Login.js' element={<Login/>}>Login</Route>
            <Route path='component/pages/Auth/Register.js' element={<Register/>}>Register</Route>
            <Route path='component/pages/Auth/About.js' element={<About/>}>About</Route>
            <Route path="data" element={<Data/>}>Datas</Route>
        </Routes>
       </BrowserRouter>
       
    </>

    </div>
  )
}

export default Approuters

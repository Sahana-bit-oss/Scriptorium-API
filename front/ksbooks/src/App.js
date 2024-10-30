import React from 'react'
import'./App.css'
import Login from "./component/pages/Auth/Login";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Create from "./Components/Create.js";
import Update from "./Components/Update.jsx";
import Dashboard from "./component/pages/Auth/Dashboard.js"
import Register from './component/pages/Auth/Register.js';
import Get from './Get.js';
import About from './component/pages/Auth/About.js';

function App(){
  return (
    <div>
          <>
       <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Dashboard/>}/> 
            <Route  path="Get" element={<Get/>}/> 
            <Route  path="create" element={<Create />}> Create </Route>
            <Route  path="Update/:id" element={<Update />}> Update </Route>
            <Route path='component/pages/Auth/Login.js' element={<Login/>}>Login</Route>
            <Route path='component/pages/Auth/About.js' element={<About/>}>About</Route>
            <Route path='component/pages/Auth/Register.js' element={<Register/>}>Register</Route>
        </Routes>
       </BrowserRouter>
       
    </>
    </div>
  )
}

export default App

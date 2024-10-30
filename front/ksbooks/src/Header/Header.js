import React from 'react';
import '../Header/Header.css';



const Header = () => {
  return (
    <div>
       <h1 className='first'>Welcome to Scriptorium API</h1>
       <div className='code'>
       <ul>
            <li class="one"><a href='./component/pages/Auth/About.js'>About</a></li>
            <li class="one"><a href='./component/pages/Auth/Register.js'>Register</a></li>
            <li class="one"><a href='./component/pages/Auth/Login.js'>Login</a></li>
       </ul>
       
       </div>
    </div>
  )
}

export default Header

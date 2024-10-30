// import React from "react";
// import { useForm } from "react-hook-form";
// import './Login.css'

// function Login() {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();

//     const onSubmit = (data) => {
//         const userData = JSON.parse(localStorage.getItem(data.Username));
//         if (userData) { // getItem can return actual value or null
//             if (userData.password === data.password) {
//                 console.log(userData.name + " You Are Successfully Logged In");
//             } else {
//                 console.log("Username or Password is not matching with our record");
//             }
//         } else {
//             console.log("Username or Password is not matching with our record");
//         }
//     };
//     return (
//         <>
//             <p className="title">Login Form</p>

//             <form className="App" onSubmit={handleSubmit(onSubmit)}>
//                 <div className="divider">
//                 <p>Username
//                 <input type="Username" {...register("Username", { required: true })} />
//                 <br/>
//                 {errors.Username && <span style={{ color: "red" }}>
//                     *Username* is mandatory </span>}</p>
//                     <br/>
//                 <p>Password
//                 <input type="password" {...register("password")} />
//                 {errors.password && <span style={{ color: "red" }}>
//                     *Password* is mandatory </span>}</p>
//                 <br/>
//                 <br/>
//                 <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
//                 </div>
//                 <br/>
//             </form>
//         </>
//     );
// }
// export default Login;


// inside src/App.js
// Replace previous code with this.

// inside src/Login.jsx

import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import { useNavigate } from "react-router-dom";
function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navi = useNavigate()
    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.email));
        if (userData) { // getItem can return actual value or null
            if (userData.password === data.password) {
                
                console.log(userData.name + " You Are Successfully Logged In");
            } else {
                console.log("Email or Password is not matching with our record");
            }
        } else {
            console.log("Email or Password is not matching with our record");
        }
        navi('/Get') 
    };
    return (
        <>
            <p className="title">Login Form</p>

            <form className="Apps" onSubmit={handleSubmit(onSubmit)}>
                <div>
                <p>Email
                <input type="email" {...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                    </p>
                    <p>Password
                <label htmlFor="password"></label>
                <input type="password" {...register("password")} />
                </p>
                <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
            </div>
            </form>
        </>
    );
}
export default Login;


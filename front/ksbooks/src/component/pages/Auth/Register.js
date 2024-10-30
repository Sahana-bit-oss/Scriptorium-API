import React from "react";
import { useForm } from "react-hook-form";
import './Register.css'

function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <div className="shole">
            <div>
            <p className="title">Registration Form</p>

            <form className="Appss" onSubmit={handleSubmit(onSubmit)}>
            <p className="see">Name
                <label htmlFor="Name" className="see"></label>
                <input type="text" {...register("name")} />
                </p>
            <p className="see">Email
                <label htmlFor="Email" ></label>
                <input type="email" {...register("email", { required: true })} />
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                </p>
                <p className="see">Password
                    <label htmlFor="Password"></label>
                    <input type="password" {...register("password")} />
                </p>
                <input type={"submit"} className='btn btn-success'></input> 
            </form>
            </div>
        </div>
    );
}
export default Register;
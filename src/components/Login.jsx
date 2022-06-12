// import { Link } from "react-router-dom";
// import loginImg from '../assets/login.jpg'
import React from 'react'
import loginImg from '../assets/login2.jpg'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";
import { useForm } from 'react-hook-form';


export default function Login() {

  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValue: {
      email: " ",
      password: ""
    }

  });
  const navigate = useNavigate();

  const authhandle = (e) => {
    console.log("login data", userEmail)
    const url = 'https://localhost:8080/authenticate'
    axios.post(url, {
      userEmail: userEmail,
      password: password
    }).then((res) => {
      console.log("response", res.data.body.jwt)
      console.log("user", res.data.body.user.uID)

      localStorage.setItem('jwt', res.data.body.jwt)
      localStorage.setItem('users', JSON.stringify(res.data.body.users))
      console.log(res.data.body.user)
      console.log(localStorage.getItem('user'))

      if (res.data.body.users.type == 'A') {
        console.log("type: Admin")
        console.log(res.data.body)
        console.log(res.data.body.users.fName)
        alert('Welcome !!!  ' + res.data.body.users.fName)
        navigate("/admin")
      } else if (res.data.body.users.type == 'E') {
        console.log("type: employee")
        alert('Welcome !!!  ' + res.data.body.user.fName)
        navigate("/emplyoeedash")
      } else if (res.data.body.users.type == 'C') {
        console.log("type: customer")
        alert('Welcome !!!  ' + res.data.body.user.fName)
        navigate("/customerdash")
      } else {
        console.log("type: invalid")
        alert('Invalid User ')
      }

    })
  }

  return (

    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={loginImg} alt="" />
      </div>
      <div className='bg-violet-200 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-violet-300 p-8 px-8 rounded-1g shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40' onSubmit={handleSubmit((data) => {
                    // data.preventDefault();
                    console.log(data);
                    if(errors != ''){authhandle()}else(alert('please fill the fields'))
                })}>
          <h2 className='text-3xl dark:text-black font-bold text-center'>Sign in with your
            Email & Password</h2>
          <div className='flex flex-col text-gray-800 py-2'>
            <label>User Email</label>
            <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' required {...register("email", { required: 'This is required' })} type="email" onChange={(e) => setEmail(e.target.value)} />
            {errors.email?.message}
          </div>
          <div className='flex flex-col text-gray-800 py-2'>
            <label>Password</label>
            <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' {...register("password", { required: 'This is required', minLength: { value: 4, message: "Min length is 4" } })} type="password" required onChange={(e) => setPassword(e.target.value)} />
            <p >{errors.password?.message}</p>
          </div>
          <div className='flex justify-between text-gray-600 py-2'>
            <p className='flex items-center'><input className='mr-2' type="checkbox" />Remember me</p>
            <p>Forgot Password</p>
          </div>
          {/* <Link to="/admin" >    */}
          <button className='w-full my-5 py-2 bg-light bg-light bg-violet-200 shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40 text-black font-semibold rounded-lg' type="button" onClick={authhandle}>Sign In</button>
          {/* </Link> */}
          {/* <button className='w-full my-5 py-2 bg-light bg-light bg-violet-200 shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40 text-black font-semibold rounded-lg'>Sign In</button> */}
        </form>

      </div>
    </div>
  );
}



// import loginImg from '../assets/login.jpg'
// import { useNavigate } from 'react-router-dom';
import React from 'react'
import user1Img from '../assets/user1.jpg'
import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Createnewuser() {

  const [fName, setfirstName] = useState('');
  const [lName, setlastName] = useState('');
  const [addres, setaddress] = useState('');
  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');
  var jwt = localStorage.getItem("jwt")

  const getnewuser = (e) => {

    console.log("First Name:- " + fName)
    console.log("Last Name:- " + lName)
    console.log("Residential Address:- " + addres)
    console.log("User Email:- " + userEmail)
    console.log("User Password:- " + password)
    console.log("User Type:- " + type)
    console.log(jwt)

    axios({
      method: "post",
      url: "http://localhost:8080/createbankusers",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      data: {
        fName: fName,
        lName: lName,
        addres: addres,
        userEmail: userEmail,
        password: password,
        type: type
      },
      mode: "cors",
    }).then((res) => {
      console.log("response", res.data.body.jwt)
      console.log("user", res.data.body.user.uId)

      localStorage.setItem('jwt', res.data.body.jwt)
      localStorage.setItem('user', JSON.stringify(res.data.body.user))
      console.log(res.data.body.user)
      console.log(localStorage.getItem('user'))

    })
    toast.info("Create User Successfully !")
  }

  return (

    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={user1Img} alt="" />
      </div>
      <div className='bg-violet-200 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-violet-300 p-9 px-9 rounded-1g shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40'>
          <h2 className='text-3xl dark:text-black font-bold text-center'> Enter the Detalils</h2>
          <div className='flex flex-col text-gray-800 py-2'>
            <label>First Name</label>
            <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="text" required onChange={(e) => setfirstName(e.target.value)} />
          </div>
          <div className='flex flex-col text-gray-800 py-2'>
            <label>Last Name</label>
            <input className='rounded-lg bg-violet-200 mt-1 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="text" required onChange={(e) => setlastName(e.target.value)} />
          </div>
          <div className='flex flex-col text-gray-800 py-2'>
            <label>Address</label>
            <input className='rounded-lg bg-violet-200 mt-1 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="text" required onChange={(e) => setaddress(e.target.value)} />
          </div>
          <div className='flex flex-col text-gray-800 py-2'>
            <label>User Email</label>
            <input className='rounded-lg bg-violet-200 mt-1 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="email" required onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='flex flex-col text-gray-800 py-2'>
            <label>Password</label>
            <input className='rounded-lg bg-violet-200 mt-1 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="password" required onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='flex flex-col text-gray-800 py-2'>
            <label>Type</label>
            <input className='rounded-lg bg-violet-200 mt-1 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="text" required onChange={(e) => setType(e.target.value)} />
          </div>

          {/* <div className='flex justify-between text-gray-600 py-2'>
                <p className='flex items-center'><input className='mr-2' type="checkbox" />Remember me</p>
                <p>Forgot Password</p>
            </div> */}
          <div><button className='w-full my-5 py-2 bg-light bg-light bg-violet-200 shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40 text-black font-semibold rounded-lg' onClick={getnewuser}>Submit</button><ToastContainer /></div>
          <Link to="/admin">
            <button className='w-full my-1 py-2 bg-light bg-light bg-violet-200 shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40 text-black font-semibold rounded-lg'>Back</button>
          </Link>
          {/* 
            <button className='w-full my-1 py-2 bg-light bg-light bg-violet-200 shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40 text-black font-semibold rounded-lg'>Back</button> */}


        </form>

      </div>
    </div>
  );
}

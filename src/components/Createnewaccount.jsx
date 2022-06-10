import React from 'react'
// import loginImg from '../assets/login.jpg'
import CreatenewImg from '../assets/createnew1.jpg'
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


// import {Link} from "react-router-dom";


export default function Createnewaccount() {

  const [aNumber, setaccountnum] = useState('');
  const [aBalance, setbalance] = useState('');
  const [uId, setuserid] = useState('');
  var jwt = localStorage.getItem("jwt")
  // const navigate = useNavigate();

  const getnewaccount = (e) => {

    // console.log("login data", e)
    console.log(aNumber)
    console.log(aBalance)
    console.log(uId)
    console.log(jwt)

    axios({
      method: "post",
      url: "http://localhost:8080/createbankaccount",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      data: {
        aNumber: aNumber,
        aBalance: aBalance,
        uId: uId

      },
      // withCredentials: true,
      mode: "cors",
    }).then((res) => {
      console.log("response", res.data.body.jwt)
      console.log("user", res.data.body.user.uId)

      localStorage.setItem('jwt', res.data.body.jwt)
      localStorage.setItem('user', JSON.stringify(res.data.body.user))
      console.log(res.data.body.user)
      console.log(localStorage.getItem('user'))

    })
  }

  return (

    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>

        <img className='w-full h-full object-cover' src={CreatenewImg} alt="" />
      </div>


      <div className='bg-violet-200 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-violet-300 p-8 px-8 rounded-1g shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40'>
          <h2 className='text-3xl dark:text-black font-bold text-center'>Please Enter the Detalils</h2>
          <div className='flex flex-col text-gray-800 py-2'>
            <label>Account Number</label>
            <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="text" onChange={(e) => setaccountnum(e.target.value)} />
          </div>
          <div className='flex flex-col text-gray-800 py-2'>
            <label>Account Balance</label>
            <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="text" onChange={(e) => setbalance(e.target.value)} />
          </div>
          <div className='flex flex-col text-gray-800 py-2'>
            <label>User ID</label>
            <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="text" onChange={(e) => setuserid(e.target.value)} />
          </div>


          {/* <div className='flex justify-between text-gray-600 py-2'>
                <p className='flex items-center'><input className='mr-2' type="checkbox" />Remember me</p>
                <p>Forgot Password</p>
            </div> */}
          <button className='w-full my-5 py-2 bg-light bg-light bg-violet-200 shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40 text-black font-semibold rounded-lg' type="button" onClick={getnewaccount}>Submit</button>

          <Link to="/emplyoeedash">
            <button className='w-full my-1 py-2 bg-light bg-light bg-violet-200 shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40 text-black font-semibold rounded-lg'>Back</button>
          </Link>
          {/* <button className='w-full my-1 py-2 bg-light bg-light bg-violet-200 shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40 text-black font-semibold rounded-lg'>Back</button> */}
        </form>

      </div>

    </div>
  )
}

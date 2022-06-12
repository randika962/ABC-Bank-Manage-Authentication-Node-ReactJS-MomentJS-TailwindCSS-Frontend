// import { useNavigate } from 'react-router-dom';
// import loginImg from '../assets/login.jpg'
import React from 'react'
import DepositImg from '../assets/deposit1.jpg'
import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Depositsection() {

  const [sourceAccId, setAccountNumber] = useState('');
  const [transacDecription, setDescription] = useState('');
  const [transacAmount, setAmount] = useState('');
  const [transacTime, setDateTime] = useState('');
  var jwt = localStorage.getItem("jwt")

  const getdeposit = (e) => {

    console.log("Account Number:- " + sourceAccId)
    console.log("Transaction Description:- " + transacDecription)
    console.log("Deposit Amount:- " + transacAmount)
    console.log("Transaction Time:- " + transacTime)
    console.log(jwt)

    axios({
      method: "post",
      url: "http://localhost:8080/deposit",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      data: {
        sourceAccId: sourceACCId,
        transacDecription: transacDescription,
        transacAmount: transaconAmount,
        transacTime: transaconTime,

      },
      mode: "cors",
    }).then((res) => {
      console.log("response", res.data.body.jwt)
      console.log("user", res.data.body.user.uid)

      localStorage.setItem('jwt', res.data.body.jwt)
      localStorage.setItem('user', JSON.stringfy(res.data.body.users))
      console.log(res.data.body.user)
      console.log(localStorage.getItem('user'))

    })
    toast.info("Your Deposit Successfully !")
  }

  return (

    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={DepositImg} alt="" />
      </div>
      <div className='bg-violet-200 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-violet-300 p-8 px-8 rounded-1g shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40'>
          <h2 className='text-3xl dark:text-black font-bold text-center'>Please Enter the Detalils</h2>
          <div className='flex flex-col text-gray-800 py-2'>
            <label>Account Number</label>
            <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="text" onChange={(e) => setAccountNumber(e.target.value)} />
          </div>
          <div className='flex flex-col text-gray-800 py-2'>
            <label>Transaction Description</label>
            <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="text" onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className='flex flex-col text-gray-800 py-2'>
            <label>Deposit Amount</label>
            <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="text" onChange={(e) => setAmount(e.target.value)} />
          </div>
          <div className='flex flex-col text-gray-800 py-2'>
            <label>Date/Time</label>
            <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="datetime-local" onChange={(e) => setDateTime(e.target.value)} />
          </div>

          {/* <div className='flex justify-between text-gray-600 py-2'>
                <p className='flex items-center'><input className='mr-2' type="checkbox" />Remember me</p>
                <p>Forgot Password</p>
            </div> */}
          <div><button className='w-full my-5 py-2 bg-light bg-light bg-violet-200 shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40 text-black font-semibold rounded-lg' type='button' onClick={getdeposit}>Submit</button><ToastContainer /></div>
          <Link to="/customerdash">
            <button className='w-full my-1 py-2 bg-light bg-light bg-violet-200 shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40 text-black font-semibold rounded-lg'>Back</button>
          </Link>
        </form>

      </div>
    </div>
  );
}
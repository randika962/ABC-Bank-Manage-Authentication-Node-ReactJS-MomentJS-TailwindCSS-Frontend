import React from 'react'
import TransferImg from '../assets/transfer1.jpg'
import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import Account from './Account';
import Transaction from './Transaction';



export default function Transfersection() {


  const [sourceAccId, setAccountNumber] = useState('');
  const [transacDecription, setDescription] = useState('');
  const [transacAmount, setAmount] = useState('');
  const [transacTime, setDateTime] = useState('');
  const [destinationAccId, setTransferAcc] = useState('');
  var jwt = localStorage.getItem("jwt")
  const transObj = localStorage.getItem('transaction')
  const tansaction = JSON.parse(transObj);
  const Listaccounts = tansaction.account;


  const gettransfer = (e) => {

    console.log("Account Number:- " + sourceAccId)
    console.log("Transaction Description:- " + transacDecription)
    console.log("Withdraw Amount:- " + transacAmount)
    console.log("Transaction Time:- " + transacTime)
    console.log("Transfer Account Number:- " + destinationAccId)
    console.log(jwt)
    console.log(tansaction)
    console.log(Listaccounts)

    axios({
      method: "post",
      url: "http://localhost:8080/transfer",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      data: {
        sourceAccId: sourceAccId,
        transacDecription: transacDecription,
        transacAmount: transacAmount,
        transacTime: transacTime,
        destinationAccId: destinationAccId,

      },
      mode: "cors",
    }).then((res) => {
      console.log("response", res.data.body.jwt)
      console.log("user", res.data.body.user.uId)

      localStorage.setItem('jwt', res.data.body.jwt)
      localStorage.setItem('user', JSON.stringify(res.data.body.user))
      console.log(res.data.body.user)
      console.log(localStorage.getItem('user'))
      console.log("response", res.status)
    }).catch((err => {
      console.log('Error: ' + err.name);
      console.log('Fetch Aborted');
    }));
    toast.success("Your Transfer Successfully !")
  }


  return (

    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={TransferImg} alt="" />
      </div>
      <div className='bg-violet-200 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-violet-300 p-8 px-8 rounded-1g shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40'>
          <h2 className='text-3xl dark:text-black font-bold text-center'>Please Enter the Detalils</h2>
          {/* <div className='flex flex-col text-gray-800 py-2'>
            <label>Account Number</label>
            <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="number" required onChange={(e) => setAccountNumber(e.target.value)} />
          </div> */}
          <div className='flex flex-col text-gray-800 py-2'>
            <label>Account Number</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => setAccountNumber(e.target.value)} > 
              {/* <option selected>Choose Your Account</option> */}
              <option value="" disabled selected hidden>Choose Your Account</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="4">5</option>
              <option value="4">6</option>
              <option value="4">7</option>
              <option value="4">8</option>
              {/* <option>------</option>
              {Listaccounts.map((account) =>
                (<option value={account.sourceAccId}>{account.sourceAccId}</option>))} */}
            </select> 

            <div class="absolute inset-y-0 right-0 flex items-center px-2 text-blue-400 pointer-events-none">
              <svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
              </svg>
            </div>
            {/* <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="number"/> */}
          </div>
          <div className='flex flex-col text-gray-800 py-2'>
            <label>Transaction Description</label>
            <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="text" required onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className='flex flex-col text-gray-800 py-2'>
            <label>Transfer Amount</label>
            <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="number" required onChange={(e) => setAmount(e.target.value)} />
          </div>
          <div className='flex flex-col text-gray-800 py-2'>
            <label>Transfer Account Number</label>
            <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="number" required onChange={(e) => setTransferAcc(e.target.value)} />
          </div>
          <div className='flex flex-col text-gray-800 py-2'>
            <label>Date/Time</label>
            <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="datetime-local" onChange={(e) => setDateTime(e.target.value)} />
          </div>

          {/* <div className='flex justify-between text-gray-600 py-2'>
                  <p className='flex items-center'><input className='mr-2' type="checkbox" />Remember me</p>
                  <p>Forgot Password</p>
              </div> */}
          <button className='w-full my-5 py-2 bg-light bg-light bg-violet-200 shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40 text-black font-semibold rounded-lg' type='button' onClick={gettransfer}>Submit</button><ToastContainer />
          <Link to="/customerdash">
            <button className='w-full my-1 py-2 bg-light bg-light bg-violet-200 shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40 text-black font-semibold rounded-lg'>Back</button>
          </Link>
        </form>

      </div>
    </div>
  );
}


import React from 'react'
import TransferImg from '../assets/transfer1.jpg'
import { Link } from "react-router-dom";
export default function Transfersection() {

    
    return (
  
      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
          <img className='w-full h-full object-cover' src={TransferImg} alt="" />
        </div>
        <div className='bg-violet-200 flex flex-col justify-center'>
          <form className='max-w-[400px] w-full mx-auto bg-violet-300 p-8 px-8 rounded-1g shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40'>
            <h2 className='text-3xl dark:text-black font-bold text-center'>Please Enter the Detalils</h2>
            <div className='flex flex-col text-gray-800 py-2'>
              <label>Account Number</label>
              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Choose Your Account</option>
  <option value="1">accXXX</option>
  <option value="2">accXXX</option>
  <option value="3">accXXX</option>
  <option value="4">accXXX</option>
</select>
              {/* <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="number"/> */}
            </div>
            <div className='flex flex-col text-gray-800 py-2'>
              <label>Amount</label>
              <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="text"  />
            </div>
            <div className='flex flex-col text-gray-800 py-2'>
              <label>Transfer Account Number</label>
              <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="text" />
            </div>
            <div className='flex flex-col text-gray-800 py-2'>
              <label>Date/Time</label>
              <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="datetime-local"  />
            </div>
  
            {/* <div className='flex justify-between text-gray-600 py-2'>
                  <p className='flex items-center'><input className='mr-2' type="checkbox" />Remember me</p>
                  <p>Forgot Password</p>
              </div> */}
            <button className='w-full my-5 py-2 bg-light bg-light bg-violet-200 shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40 text-black font-semibold rounded-lg'>Submit</button>
            <Link to="/customerdash">
              <button className='w-full my-1 py-2 bg-light bg-light bg-violet-200 shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40 text-black font-semibold rounded-lg'>Back</button>
            </Link>
          </form>
  
        </div>
      </div>
    );
  }
  
import React from 'react'
// import React, { useEffect } from 'react'
import profileImg from '../assets/profile.png'
import axios from 'axios';
import { Link } from "react-router-dom";


export default function Emplouser() {

  // useEffect(() => {

    const getallempusers = (e) => {
      var user = JSON.parse(localStorage.getItem("user"))
      var fName = localStorage.getItem("fName")
      var jwt = localStorage.getItem("jwt")
      const url = 'http://localhost:8080/bankstransaction/bankusers'
      
      console.log(jwt)
      console.log(url)
      console.log("getalluers")
      // {getallusers()}
      
  
    }
    {getallempusers()}
  // });

  const DeleteEmpUser = (uId) => {

    console.log(uId)
    console.log(jwt)
    var jwt = localStorage.getItem("jwt")
    axios({
        method: "delete",
        url: "http://localhost:8080/bankusersdelete/7" + uId,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Authorization": `Bearer ` + jwt
        }, data: null,

        mode: "cors",
    }).then((res) => {
        console.log("response", res)
  
    })
}

  return (

    <div>
      <nav class="flex items-center justify-between flex-wrap bg-violet-300 p-6">
        <div class="flex items-center flex-shrink-0 text-black mr-6">
          <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" ></svg>
          <span class="font-semibold text-3xl tracking-tight">Users List</span>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">

          </button>
        </div>
        <div class="items-center hidden space-x-8 lg:flex ">
          <div class="text-base lg:flex-grow">
          </div>
          <div>
            <a href="/emplyoeedash" class="inline-block  px-4 py-2 leading-none border rounded font-semibold text-lg text-balck border-white hover:border-transparent hover:text-violet-400 hover:bg-white mt-4 lg:mt-0">Back</a>

          </div>
        </div>

      </nav>
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="bg-white border-b">
          </thead>
          <tbody maxWidth="150px">
            <tr class="bg-white border-b transition duration-300 ease-in-out ">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">List</td>     
              
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              list
              </td>
              <td>
                <button type='button' className='w-20 h-9 my-5 py-2  border-black bg-light bg-light bg-violet-300 hover:bg-slate-600 text-black font-semibold rounded-lg' onClick={DeleteEmpUser}>
                 Delete
                </button> 
                {/* <button type='button' className='w-20 h-9 my-5 py-2  border-black bg-light bg-light bg-violet-300 hover:bg-slate-600 text-black font-semibold rounded-lg'>
                 View
                </button> */}
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
      {/* <div className="flex flex-wrap justify-center">
        <img
          src={profileImg}
          class="p-1 bg-white border rounded max-w-sm"
          alt="..."
        /> */}


        {/* <img className='w-full min-h-full object-cover' src={addash1Img} alt="" /> */}

      {/* </div> */}
    </div>

  )
}
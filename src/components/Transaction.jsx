import React from 'react'
// import React, { useEffect } from 'react'
import moneyImg from '../assets/money1.png'
import axios from 'axios';
import Mytransaction from './Mytransaction';

// import {Link} from "react-router-dom";


// export default function Transaction() {

const Transaction = () => {
    var jwt = localStorage.getItem("jwt")
    // console.log(jwt)
    // var tansactions = '';

    // fetch(url, {
    //             "Access-Control-Allow-Origin": "*",
    //             "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //             "Authorization": `Bearer ` +user1.jwt
    //         })
    //         .then(res => {
    //             console.log(res)

    //         });
    axios({
        method: "get",
        url: "http://localhost:8080/banktransaction",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Authorization": `Bearer ` + jwt
        }, data: null,
        // data: {
        //     uFName: uFName,
        //     uLName: uLName,
        //     address: address,
        //     userEmail: userEmail,
        //     password: password,
        //     userType: userType
        // },
        // withCredentials: true,
        mode: "cors",
    }).then((res) => {
        // console.log("response", res.data)
        var tansactions = res.data;
        localStorage.setItem("transaction", JSON.stringify(tansactions))
    })
    // }
    const transObj = localStorage.getItem('transaction')
    const tansaction = JSON.parse(transObj);
    console.log(tansaction)
    return (
        <tbody maxWidth="150px">
            {tansaction.map((blog) => (
                <tr class="bg-white border-b transition duration-300 ease-in-out ">
                    <th class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" >Source Account ID</th>
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{blog.sourceAccId}</td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">

                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">

                    </td>
                    <th class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" >Transaction Amount</th>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {blog.transacAmount}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">

                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">

                    </td>
                    <th class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" >Transaction Time</th>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {blog.transacTime}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">

                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">

                    </td>
                    <th class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" >Transaction Type</th>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {blog.transacType}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">

                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">

                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </button>

                    </td >
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </button>
                    </td>
                </tr>
            ))}

        </tbody>
    );
}

export default Transaction;
// useEffect(() => {

//   const getalltransactions = (e) => {
//     var user = JSON.parse(localStorage.getItem("user"))
//     var fName = localStorage.getItem("fName")
//     var jwt = localStorage.getItem("jwt")
//     const url = 'http://localhost:8080/bankstransaction/banktransaction'

//     console.log(jwt)
//     console.log(url)
//     console.log("getalltransactions")
// {getallusers()}


//   }
//   {getalltransactions()}
// });

// return (

//   <div>
//     <nav class="flex items-center justify-between flex-wrap bg-violet-300 p-6">
//       <div class="flex items-center flex-shrink-0 text-black mr-6">
//         <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" ></svg>
//         <span class="font-semibold text-3xl tracking-tight">Transaction</span>
//       </div>
//       <div class="block lg:hidden">
//         <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">

//         </button>
//       </div>
//       <div class="items-center hidden space-x-8 lg:flex ">
//         <div class="text-base lg:flex-grow">
//         </div>
//         <div>
//           <a href="/admin" class="inline-block  px-4 py-2 leading-none border rounded font-semibold text-lg text-balck border-white hover:border-transparent hover:text-violet-400 hover:bg-white mt-4 lg:mt-0">Back</a>

//         </div>
//       </div>

//     </nav>
{/* <div className="flex flex-wrap justify-center">
<img
  src={moneyImg}
  class="p-1 bg-white border rounded max-w-sm"
  alt="..."
/> */}


{/* <img className='w-full min-h-full object-cover' src={addash1Img} alt="" /> */ }

    // </div>
    // </div>

  // )
// }

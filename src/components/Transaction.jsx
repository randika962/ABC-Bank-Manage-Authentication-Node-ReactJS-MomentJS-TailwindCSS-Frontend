// import React, { useEffect } from 'react'
// import {Link} from "react-router-dom";
// import Mytransaction from './Mytransaction';
// import moneyImg from '../assets/money1.png'
import React from 'react'
import axios from 'axios';


export default function Transaction() {

    

    var jwt = localStorage.getItem("jwt")

    axios({
        method: "get",
        url: "http://localhost:8080/banktransaction",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Authorization": `Bearer ` + jwt
        }, data: null,
        mode: "cors",
    }).then((res) => {
        var tansactions = res.data;
        localStorage.setItem("transaction", JSON.stringify(tansactions))
    })
 
  


    const transObj = localStorage.getItem('transaction')
    const tansaction = JSON.parse(transObj);
    console.log(tansaction)
  
   

    return (
        <div>
            <nav className="flex items-center justify-between flex-wrap bg-violet-300 p-6">
                <div className="flex items-center flex-shrink-0 text-black mr-6">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" ></svg>
                    <span className="font-semibold text-3xl tracking-tight">Transaction List</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    </button>
                </div>
                <div className="items-center hidden space-x-8 lg:flex ">
                    <div className="text-base lg:flex-grow">
                    </div>
                    <div>
                        <a href="/admin" className="inline-block  px-4 py-2 leading-none border rounded font-semibold text-lg text-balck border-white hover:border-transparent hover:text-violet-400 hover:bg-white mt-4 lg:mt-0">Back</a>
                    </div>
                </div>
            </nav>



            
      
       
   <table className='flex flex-col justify-center items-center py-2'>
  <tr>
   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
   <div className="flex flex-col justify-center items-center py-2   ">
   
   
<input name="end" type="datetime-local" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end"/>

                                                        
      </div>
      </td>
      
    
                                                    
       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
      <div className="flex flex-col justify-center items-cente py-2">
       
      <input name="end" type="datetime-local" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end"/>
   
        
                                                        
         </div>
         </td>
       <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        <button type="submit" className="border w-20 my-5 py-2 bg-light bg-light bg-violet-200 shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40 text-black font-semibold rounded-lg">Search</button>
        </td>
         </tr>
         </table>
        
           
           
{/* 
           <div class="flex items-center">
  <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
        </div>
        <input name="start" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start"/>
    </div>
  <span class="mx-4 text-gray-500">to</span>
  <div class="relative">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
    </div>
    <input name="end" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end"/>

    
</div>
</div> */}

           {/* <div className='w-24  justify-center items-center py-2 '>
           
            <input className=' order p-2 border-blue-200' type="datetime-local"  /> 
          </div>
          <div className='w-24'>
            
            <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="datetime-local"  />
          </div> */}

            <tbody maxWidth="150px">
                {tansaction.map((blog) => (
                    <tr className="bg-white border-b transition duration-300 ease-in-out ">
                        <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" >Transaction ID</th>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{blog.sourceAccId}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        </td>
                        <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" >Transaction Description</th>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {blog.transacDecription}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        </td>
                        <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" >Transaction Amount</th>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {blog.transacAmount}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        </td>
                        <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" >Transaction Time</th>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {blog.transacTime}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </button>
                        </td >
                    </tr>
                ))}
            </tbody>
        </div>
    );
}


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

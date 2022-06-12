// import React, { useEffect } from 'react'
// import profileImg from '../assets/profile.png'
// import { Link } from "react-router-dom";
import axios from 'axios';


export default function User() {
  
  var jwt = localStorage.getItem("jwt")

  axios({
    method: "get",
    url: "http://localhost:8080/bankusers",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Authorization": `Bearer ` + jwt
    }, data: null,

    mode: "cors",
  }).then((res) => {
    var users = res.data;
    localStorage.setItem("user", JSON.stringify(users))
  })

  const usersObj = localStorage.getItem('user')
  const users = JSON.parse(usersObj);
  const user = users.body;
  console.log(user);



  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-violet-300 p-6">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" ></svg>
          <span className="font-semibold text-3xl tracking-tight">User List</span>
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
      <tbody maxWidth="150px">
        {user.map((blog) => (
          <tr className="bg-white border-b transition duration-300 ease-in-out ">
            <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">User ID</th>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{blog.uId}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            </td>
            <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Name</th>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {`${blog.fName} ${blog.lName}`}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            </td>
            <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Residential Address</th>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {blog.addres}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            </td>
            <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Email</th>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {blog.userEmail}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            </td>
            <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">User Type</th>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {blog.type}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            </td>
            {/* <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button to={() => Userview()} >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </button>
                    </td > */}
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
              <button type="button" onClick={() => deleteUserz()}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}

// export default User;

// const DeleteUser = (uId) => {

//   console.log(uId)
//   console.log(jwt)
//   var jwt = localStorage.getItem("jwt")
//   axios({
//       method: "delete",
//       url: "http://localhost:8080/bankusersdelete/7" + uId,
//       headers: {
//           "Access-Control-Allow-Origin": "*",
//           "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//           "Authorization": `Bearer ` + jwt
//       }, data: null,

//       mode: "cors",
//   }).then((res) => {
//       console.log("response", res)

//   })
// }

// return (

//   <div>
//     <nav class="flex items-center justify-between flex-wrap bg-violet-300 p-6">
//       <div class="flex items-center flex-shrink-0 text-black mr-6">
//         <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" ></svg>
//         <span class="font-semibold text-3xl tracking-tight">Users</span>
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
//     <div class="flex flex-col">
// <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
//   <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
//     <div class="overflow-hidden">
//       <table class="min-w-full">
//         <thead class="bg-white border-b">
//         </thead>
//         <tbody maxWidth="150px">
//           <tr class="bg-white border-b transition duration-300 ease-in-out ">
//             <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">List</td>     

//             <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
//             list
//             </td>
//             <td>
//               <button type='button' className='w-20 h-9 my-5 py-2  border-black bg-light bg-light bg-violet-300 hover:bg-slate-600 text-black font-semibold rounded-lg' onClick={DeleteUser}>
//                Delete
//               </button> 
//               {/* <button type='button' className='w-20 h-9 my-5 py-2  border-black bg-light bg-light bg-violet-300 hover:bg-slate-600 text-black font-semibold rounded-lg'>
//                View
//               </button> */}
//             </td>

//           </tr>
{/* <tr class="bg-white border-b transition duration-300 ease-in-out ">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Account Number</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {user1.accounts[user1.accounts.length-1].accNumber}
              </td>
             
            </tr> */}
{/* <tr class="bg-white border-b transition duration-300 ease-in-out ">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">List</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
             list
              </td>
              <td>
                <button type='button' className='w-20 h-9 my-5 py-2  border-black bg-light bg-light bg-violet-300 hover:bg-slate-600 text-black font-semibold rounded-lg'>
                 Delete
                </button> <button type='button' className='w-20 h-9 my-5 py-2  border-black bg-light bg-light bg-violet-300 hover:bg-slate-600 text-black font-semibold rounded-lg' >
                 View
                </button>
              </td>
              
            </tr>
            <tr className="bg-white border-b transition duration-300 ease-in-out ">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">List</td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              list
              </td>
              <td>
                <button type='button' className='w-20 h-9 my-5 py-2  border-black bg-light bg-light bg-violet-300 hover:bg-slate-600 text-black font-semibold rounded-lg'>
                 Delete
                </button> <button type='button' className='w-20 h-9 my-5 py-2  border-black bg-light bg-light bg-violet-300 hover:bg-slate-600 text-black font-semibold rounded-lg' >
                 View
                </button>
              </td>

              
            </tr>
            <tr className="bg-white border-b transition duration-300 ease-in-out ">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">List</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
             list
              </td>
              <td>
                <button type='button' className='w-20 h-9 my-5 py-2  border-black bg-light bg-light bg-violet-300 hover:bg-slate-600 text-black font-semibold rounded-lg'>
                 Delete
                </button> <button type='button' className='w-20 h-9 my-5 py-2  border-black bg-light bg-light bg-violet-300 hover:bg-slate-600 text-black font-semibold rounded-lg' >
                 View
                </button>
              </td>
               */}
{/* </tr>
            <tr class="bg-white border-b transition duration-300 ease-in-out ">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">List</td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            list
              </td>
              <td>
                <button type='button' className='w-20 h-9 my-5 py-2  border-black bg-light bg-light bg-violet-300 hover:bg-slate-600 text-black font-semibold rounded-lg'>
                 Delete
                </button> <button type='button' className='w-20 h-9 my-5 py-2  border-black bg-light bg-light bg-violet-300 hover:bg-slate-600 text-black font-semibold rounded-lg' >
                 View
                </button>
              </td>
              
            </tr> */}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   </div>
// </div>
{/* </div> */ }
{/* <div className="flex flex-wrap justify-center"> */ }
{/* <img
          src={profileImg}
          class="p-1 bg-white border rounded max-w-sm"
          alt="..."
        /> */}


{/* <img className='w-full min-h-full object-cover' src={addash1Img} alt="" /> */ }

{/* </div> */ }
//     </div>

//   )
// }






// export default function User() {


// useEffect(() => {

// const getallusers = (e) => {
//   var user = JSON.parse(localStorage.getItem("user"))
//   var fName = localStorage.getItem("fName")
//   var jwt = localStorage.getItem("jwt")
//   const url = 'http://localhost:8080/bankstransaction/bankusers'

//   console.log(jwt)
//   console.log(url)
//   console.log("getalluers")
// {getallusers()}


// }
// {getallusers()}
// });







// const DeleteUser = (uId) => {
    // const UserID = props.userID
    // console.log(uId)
    // axios({
    //   method: "delete",
    //   url: "http://localhost:8080/bankusersdelete/7" + uId,
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //     "Authorization": `Bearer ` + jwt
    //   }, data: null,
      // data: {
      //     uFName: uFName,
      //     uLName: uLName,
      //     address: address,
      //     userEmail: userEmail,
      //     password: password,
      //     userType: userType
      // },
      // withCredentials: true,
    //   mode: "cors",
    // }).then((res) => {
    //   console.log("response", res)
      // var users = res.data;
      // localStorage.setItem("UserList", JSON.stringify(users))
  //   })
  // }
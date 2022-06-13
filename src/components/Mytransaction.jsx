// import React, { useEffect } from 'react'
// import { Link } from "react-router-dom";
// import { NavLink, useNavigate } from 'react-router-dom';
// import jsPDF from 'jspdf';
// import pdfMake from 'pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// import htmlToPdfmake from 'html-to-pdfmake';
import React from 'react'
import profileImg from '../assets/profile.png'
import axios from 'axios';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';


export default function Mytransaction() {
	
 
  var user = JSON.parse(localStorage.getItem("user"))

  const pdfexport = () => {
    console.log("Welcome pdf export service !")
    axios.get("http://localhost:8080/bankstransaction/ABC_Transaction/2")
    console.log(axios.get("http://localhost:8080/bankstransaction/ABC_Transaction/2"))
  }

  return (

    <div>
      <nav className="flex items-center justify-between flex-wrap bg-violet-300 p-6">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" ></svg>
          <span className="font-semibold text-3xl tracking-tight">Users Transaction</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          </button>
        </div>
        <div className="items-center hidden space-x-8 lg:flex ">
          <div className="text-base lg:flex-grow">
          </div>
          <div>
            <button type="button" className="inline-block  px-4 py-2 leading-none border rounded font-semibold text-lg text-balck border-white hover:border-transparent hover:text-violet-400 hover:bg-white mt-4 lg:mt-0" onClick={ ()  => pdfexport() }>Print</button>
          </div>
          <div>
            <a href="/customerdash" className="inline-block  px-4 py-2 leading-none border rounded font-semibold text-lg text-balck border-white hover:border-transparent hover:text-violet-400 hover:bg-white mt-4 lg:mt-0">Back</a>
          </div>
        </div>
      </nav>
      <div ref={componentRef}>
      <div className="flex flex-wrap justify-center">
        <img
          src={profileImg}
          class="p-1 bg-white border rounded max-w-sm"
          alt="..."
        />
        &nbsp;&nbsp;&nbsp;
        {/* <button type="button" className='w-40 h-10 my-5 py-2 text-center border-black bg-light bg-light bg-violet-300 hover:bg-slate-300 text-black font-semibold rounded-lg' onClick={ ()  => pdfexport() }>
                  PDF Export
        </button>  */}
        {/* <img className='w-full min-h-full object-cover' src={addash1Img} alt="" /> */}
        </div>
      <div>
        <br></br><br></br>
        <span className="font-semibold text-2xl tracking-tight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transaction Amount :-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`${user.bankaccount[0].transaction[0].transacAmount}`}</span>
      </div>
      <div>
        <br></br><br></br>
        <span className="font-semibold text-2xl tracking-tight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transaction Descripion :-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`${user.bankaccount[0].transaction[0].transacDecription}`}</span>
      </div>
      <div>
        <br></br><br></br>
        <span className="font-semibold text-2xl tracking-tight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transaction Type :-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`${user.bankaccount[0].transaction[0].transacType}`}</span>
      </div>
      {/* <div>
        <br></br><br></br>
        <span className="font-semibold text-2xl tracking-tight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Transaction Time :-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`${user.bankaccount[0].transaction[0].transacTime}`}</span>
      </div> */}
      <div>
        <br></br><br></br>
        <span className="font-semibold text-2xl tracking-tight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Source Account ID :-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`${user.bankaccount[0].transaction[0].sourceAccId}`}</span>
      </div>
      <div>
        <br></br><br></br>
        <span className="font-semibold text-2xl tracking-tight">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Destination Account ID :-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`${user.bankaccount[0].transaction[0].destinationAccId}`}</span>
      </div>
      </div>
    </div>

  );
}








//-------------------------------------------------------------------------------------------------------




// var fName = localStorage.getItem("fName")
// var jwt = localStorage.getItem("jwt")
// const navigate = useNavigate();
// const url = 'http://localhost:8080/bankusers/2'

// axios.post(url + fName, { headers: { "Authorization": `Bearer ${jwt}` } }).then(function (response) {

//   console.log(response.data);

// })




//-------------------------------------------------------------------------------------------------------







  // useEffect(() => {

    // const getexportpdf = (e) => {
    //   var user = JSON.parse(localStorage.getItem("user"))
    //   var fName = localStorage.getItem("fName")
    //   var jwt = localStorage.getItem("jwt")
    //   const url = 'http://localhost:8080/bankstransaction/bankstransaction/ABC_Transaction/2'  
    //   console.log(jwt)
    //   console.log(url)
    //   console.log("getonebytransactions")
      // {getallusers()}
    // }
    // {getexportpdf()}
  // });
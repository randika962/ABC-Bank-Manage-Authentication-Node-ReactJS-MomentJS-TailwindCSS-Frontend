// import addash1Img from '../assets/addash1.jpg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import axios from 'axios';
// import { useState } from "react";
// import { Nav, NavItem } from 'reactstrap';
import columnImg from "../assets/column-chart.png"
import columnImg1 from "../assets/column-chart1.jpg"
import { NavLink, useNavigate } from 'react-router-dom';


export default function Admin() {

  var user = JSON.parse(localStorage.getItem("user"))
  var fName = localStorage.getItem("fName")
  var jwt = localStorage.getItem("jwt")
  const userObj1 = localStorage.getItem('user1')
  const user1 = JSON.parse(userObj1);
  const navigate = useNavigate();
  const url = 'http://localhost:8080/bankusers/1'

  const outsign = (e) => {

    localStorage.removeItem('jwt')
    localStorage.removeItem('user')
    localStorage.removeItem('userid')
    navigate("/")
  }


  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-violet-300 p-6">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" ></svg>
          {
            console.log("User Details:- " + user)

          }
          {/* <span class="font-semibold text-3xl tracking-tight">WELCOME {`${user.fName} ${user.lName}`} !</span> */}
          <span className="font-semibold text-3xl tracking-tight">WELCOME Srimal Herath !</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-lg text-black hover:text-white mr-4">
              {/* <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 font-semibold text-lg text-black hover:text-white mr-4" onClick={oneuser}> */}
              Home
            </a>
            <a href="/user" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-lg text-black hover:text-white mr-4" onClick={() => getallusers(user)}>
              Users
            </a>
            <a href="/account" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-lg text-black hover:text-white mr-4">
              Accounts
            </a>
            <a href="/Transaction" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-lg text- black hover:text-white mr-4">
              Transaction
            </a>
            <a href="/createnewuser" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-lg text- black hover:text-white">
              Create User
            </a>
          </div>
          <div>
            <a href="/" className="inline-block  px-4 py-2 leading-none border rounded font-semibold text-lg text-balck border-white hover:border-transparent hover:text-violet-400 hover:bg-white mt-4 lg:mt-0" onClick={outsign}>Log Out</a>
          </div>
        </div>

      </nav>
      <section id="hero">
        <div className='container flex flex-col-reverse md:flex-row item-center px-6 mx-auto mt-10 space-y-0 md:space-y-0'>
          <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
            <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
              Powerfully Simple Business Banking
            </h1>
            <p className='max-w-sm text-center text-darkGrayisBlue md:text-left'>
              Built for small business owners, enterpreneurs, and freelancer.
              No hidden fees, no hassle.
            </p>
            <div className='flex justify-center md:justify-start'>
              <a href="#" className=' p-3 px-6 pt-2 text-white bg-black rounded-full baseline hover:bg-brightRedLight'> Start</a>
            </div>
            <div className='md:w-1/2'>
              <img src={columnImg} alt="" />
            </div>
          </div>
          <div className='md:w-1/2'>
            <img src={columnImg1} alt="" />
          </div>
        </div>
      </section>
      <div className='w-full min-h-screen'>
        {/* <img className='w-full min-h-full object-cover' src={addash1Img} alt="" /> */}
      </div>
    </div>



  );
}



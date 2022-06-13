// import { Link } from "react-router-dom";
// import { useState } from "react";
// import axios from 'axios';
// import { NavLink, useNavigate } from 'react-router-dom';
import React from 'react'
import classImg from "../assets/class1.jpg"
import classImg1 from "../assets/class.jpg"
import { useNavigate } from 'react-router-dom';

export default function Customerdash() {

  var user = JSON.parse(localStorage.getItem("user"))
  var username = localStorage.getItem("user")
  var fName = localStorage.getItem("userid")
  var jwt = localStorage.getItem("jwt")
  const navigate = useNavigate();
  const url = 'http://localhost:8080/bankusers/2'
  const ccoutsign = (e) => {

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
          <span className="font-semibold text-3xl tracking-tight">WELCOME {`${user.fName} ${user.lName}`} ! </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          </button>
        </div>
        <div className="items-center hidden space-x-8 lg:flex ">
          <div className="text-base lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-lg text-black hover:text-white mr-4">
              Home
            </a>
            <a href="/profile" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-lg text-black hover:text-white mr-4">
              Profile
            </a>
            <a href="/withdrawsection" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-lg text-black hover:text-white mr-4">
              Withdraw
            </a>
            <a href="/depositsection" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-lg text- black hover:text-white mr-4">
              Deposit
            </a>
            <a href="/mytransaction" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-lg text- black hover:text-white">
              MyTransaction
            </a>
          </div>
          <div>
            <a href="/" className="inline-block  px-4 py-2 leading-none border rounded font-semibold text-lg text-balck border-white hover:border-transparent hover:text-violet-400 hover:bg-white mt-4 lg:mt-0" onClick={ccoutsign}>Log Out</a>
          </div>
        </div>
      </nav>
      <div>
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
                <img src={classImg} alt="" />
              </div>
            </div>
            <div className='md:w-1/2'>
              <img src={classImg1} alt="" />
            </div>
          </div>
        </section>
        <div className='w-full min-h-screen'>
          {/* <img className='w-full min-h-full object-cover' src={addash1Img} alt="" /> */}
        </div>
      </div>

    </div>

  );
}
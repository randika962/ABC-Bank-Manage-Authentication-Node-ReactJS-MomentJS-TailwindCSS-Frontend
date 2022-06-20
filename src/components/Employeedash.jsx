// import addash1Img from '../assets/addash1.jpg'
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import axios from 'axios';
// import { NavLink, useNavigate } from 'react-router-dom';
import count1Img from "../assets/count1.jpg"
import countImg from "../assets/count.jpg"
import { useNavigate } from 'react-router-dom';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

import bank2Img from "../assets/bank2.jpg";
import bank3Img from "../assets/bank3.jpg";
import bank1Img from "../assets/bank1.jpg";
import bank4Img from "../assets/bank4.jpg";
import bank5Img from "../assets/bank5.jpg";





export default function Employeedash() {
   
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  console.log(date)

  

  var user = JSON.parse(localStorage.getItem("user"))
  var username = localStorage.getItem("user")
  var fName = localStorage.getItem("userid")
  var jwt = localStorage.getItem("jwt")
  const navigate = useNavigate();
  const url = 'http://localhost:8080/bankusers/3'
  const eoutsign = (e) => {

    localStorage.removeItem('jwt')
    localStorage.removeItem('user')
    localStorage.removeItem('userid')
    navigate("/")
  }
  let btnShow =document.querySelector("button");
  let output =document.querySelector("h1");

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-violet-300 p-6">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" ></svg>
          {
            console.log("All User Details:- " + user)
          }
          {/* <span className="font-semibold text-3xl tracking-tight">WELCOME {`${user.fName} ${user.lName}`} ! </span> */}
          <span className="font-semibold text-3xl tracking-tight">WELCOME Nikeshala Madubhashini !<h1 className='"font-semibold text-2xl tracking-tight"'>
         Today- {date}
</h1> </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
          <div className="text-base lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-lg text-black hover:text-white mr-4">
              Home
            </a>
            <a href="/Emplouser" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-lg text-black hover:text-white mr-4">
              Users
            </a>
            <a href="/Emploaccount" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-lg text-black hover:text-white mr-4">
              Accounts
            </a>
            <a href="/Emplotransaction" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-lg text- black hover:text-white mr-4">
              Transaction
            </a>
            <a href="/createnewaccount" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-lg text- black hover:text-white">
              Create Account
            </a>
          </div>
          <div>
            <a href="/" className="inline-block  px-4 py-2 leading-none border rounded font-semibold text-lg text-balck border-white hover:border-transparent hover:text-violet-400 hover:bg-white mt-4 lg:mt-0" onClick={eoutsign}>Log Out</a>
          </div>
        </div>
      </nav>
      <div >
      
      <AliceCarousel autoPlay autoPlayInterval="1000">

      < img  className="w-full min-h-full object-cover" src={bank1Img} alt="sliderimg" />
      
      <img className="w-full min-h-full object-cover"  src={bank2Img} alt="sliderimg"/>
      <img className="w-full min-h-full object-left" src={bank3Img} alt ="sliderimg"/>
      <img   className="w-full min-h-full object-left"src={bank4Img} alt="sliderimg"/>
      <img   className="w-full min-h-full object-left"src={bank5Img} alt="sliderimg"/>
</AliceCarousel>
      </div>
    



      {/* <section id="hero">
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
              <img src={countImg} alt="" />
            </div>
          </div>
          <div className='md:w-1/2'>
            <img src={count1Img} alt="" />
          </div>
        </div>
      </section>
      <div className='w-full min-h-screen'>
        {/* <img className='w-full min-h-full object-cover' src={addash1Img} alt="" /> */}
      </div>
    // </div> */}
  );
}
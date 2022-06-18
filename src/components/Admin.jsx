// import addash1Img from '../assets/addash1.jpg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import axios from 'axios';
// import { useState } from "react";
// import { Nav, NavItem } from 'reactstrap';
import columnImg from "../assets/column-chart.png"
import columnImg1 from "../assets/column-chart1.jpg"
import { NavLink, useNavigate } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


import bank2Img from "../assets/bank2.jpg";
import bank3Img from "../assets/bank3.jpg";
import bank1Img from "../assets/bank1.jpg";
import bank4Img from "../assets/bank4.jpg";
import bank5Img from "../assets/bank5.jpg";

// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";



export default function Admin() {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  console.log(date)
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

  const getallusers = (e) => {
    var user = JSON.parse(localStorage.getItem("user"))
    var fName = localStorage.getItem("fName")
    var jwt = localStorage.getItem("jwt")
    const url = 'http://localhost:8080/bankusers'

    console.log(jwt)
    console.log(url)
    console.log("getalluers")


  }
  let btnShow =document.querySelector("button");
  let output =document.querySelector("h1");
 
// btnShow.addEventListener('click', ()=>{
//   let today=new Date();

//   let month = today.getMonth() + 1;
//   let year = today.getFullYear();
//   let  date  = today.getDate();

//   let current_date=  month+"/"+date+"/"+year;
//   console.log("current date")
//   output.innerText=current_date;
// }
// )
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-violet-300 p-6">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" ></svg>
          {
            console.log("User Details:- " + user)

          }
          {/* <span class="font-semibold text-3xl tracking-tight">WELCOME {`${user.fName} ${user.lName}`} !</span> */}
          <span className="font-semibold text-3xl tracking-tight">WELCOME Srimal Herath ! <h1 className='"font-semibold text-2xl tracking-tight"'>
         Today- {date}
</h1></span>
          
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
            <a href="/alltransaction" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-lg text- black hover:text-white mr-4">
              Transaction
            </a>
            <a href="/createnewuser" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-lg text- black hover:text-white mr-80">
              Create User
            </a>
            <a href="/admin" className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-lg text-white hover:text-white-6" >
            
            </a>
            {/* {date} */}
          </div>
          <div>
            <a href="/" className="inline-block  px-4 py-2 leading-none border rounded font-semibold text-lg text-balck border-white hover:border-transparent hover:text-violet-400 hover:bg-white mt-4 lg:mt-0"  onClick={outsign} >Log Out</a>
          </div>
        </div>

      </nav>

      

      {/* <div>
            <div className="carousel-container">
                <Carousel infiniteLoop autoPlay useKeyboardArrows centerMode dynamicHeight>
                    <div>
                        <img src="https://via.placeholder.com/200/0000FF/808080" alt="Image 1" />
                        <p className="legend">Slider don't lie</p>
                    </div>
                    <div>
                         <img src="https://via.placeholder.com/200/FF0101/808080" alt="Image 2" />
                         <p className="legend">Slider don't lie</p>
                    </div>
                    <div>
                         <img src="https://via.placeholder.com/200/FEFF00/808080" alt="Image 3" />
                         <p className="legend">Slider don't lie</p>
                    </div>
                    <div>
                         <img src="https://via.placeholder.com/200/000000/808080" alt="Image 4" />
                         <p className="legend">Slider don't lie</p>
                    </div>                    
                </Carousel>
            </div>
        </div> */}
                                                                       
      <div >
      
      <AliceCarousel autoPlay autoPlayInterval="2000">

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
              <img src={columnImg} alt="" />
            </div>
          </div>
          <div className='md:w-1/2'>
            <img src={columnImg1} alt="" />
          </div>
        </div>
      </section> */}

{/* 
      <div className='w-full min-h-screen'> 
         <img className='w-full min-h-full object-cover' src={addash1Img} alt="" /> 
         <h1 className=''> {date}</h1> */}

      </div>
    //  </div> 
    



  );
}



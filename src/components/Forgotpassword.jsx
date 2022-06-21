import { Link } from "react-router-dom";
import DepositImg from '../assets/deposit1.jpg'
import Forgot1Img from '../assets/forgot1.jpg'


export default function Forgotpassword() {

  
  
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'> 
           <img className='w-full h-full object-cover' src={Forgot1Img} alt="" /> 
         </div> 
        <div className='w-full h-full object-cover bg-violet-200 flex flex-col justify-center'>
          <form className='max-w-[400px] w-full mx-auto bg-violet-300 p-10 px-10 rounded-1g shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40'>
            <h2 className='text-3xl dark:text-black font-bold text-center'>Forget Your Password</h2>
            <div className='flex flex-col text-gray-800 py-2'>
              <label>Enter Your Email</label>
              <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="email" />
            </div>
            {/* <div className='flex flex-col text-gray-800 py-2'>
              <label>Transaction Description</label>
              <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="text" />
            </div> */}
            {/* <div className='flex flex-col text-gray-800 py-2'>
              <label>Deposit Amount</label>
              <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="number" />
            </div> */}
            {/* <div className='flex flex-col text-gray-800 py-2'>
              <label>Date/Time</label>
              <input className='rounded-lg bg-violet-200 mt-2 p-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="datetime-local"  />
            </div> */}
  
            {/* <div className='flex justify-between text-gray-600 py-2'>
                  <p className='flex items-center'><input className='mr-2' type="checkbox" />Remember me</p>
                  <p>Forgot Password</p>
              </div> */}

             <Link to="/resetpassword">  
            <div><button className='w-full my-5 py-2 bg-light bg-light bg-violet-200 shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40 text-black font-semibold rounded-lg' type='button' >Send</button></div>
            </Link>
            <Link to="/">  
              <button className='w-full my-1 py-2 bg-light bg-light bg-violet-200 shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40 text-black font-semibold rounded-lg'>Back</button>
              </Link>
          </form>
  
        </div>
      </div>
      // </div>
    );
  }
  
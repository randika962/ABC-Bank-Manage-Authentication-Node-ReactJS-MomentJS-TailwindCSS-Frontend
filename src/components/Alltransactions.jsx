import React, { useState } from "react";
import Transaction from "./Transaction";
import Filteredtransaction from "./Filteredtransaction";


export default function Alltransaction() {

    const [isFiltering, setisFiltering] = useState('');
    const [stDate, setstDate] = useState('');
    const [edDate, setedDate] = useState('');


    const Filtering = () => {
        setisFiltering(true);
        console.log(isFiltering);
        if (isFiltering == true) {
            console.log('filtering');
            console.log('stdate' + stDate);
            console.log('edDate' + edDate);
        }

    }

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


                            <input name="end" type="datetime-local" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end" required onChange={(e) => setstDate(e.target.value)} />


                        </div>
                    </td>



                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <div className="flex flex-col justify-center items-cente py-2">

                            <input 
                                name="end" 
                                type="datetime-local" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Select date end" 
                                required 
                                onChange={(e) => setedDate(e.target.value)} />



                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <button type="submit" className="border w-20 my-5 py-2 bg-light bg-light bg-violet-200 shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40 text-black font-semibold rounded-lg">Search</button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        <button type="button" 
                        onClick={() => Filtering()} 
                        className="border w-20 my-5 py-2 bg-light bg-light bg-violet-200 shadow-lg shadow-violet-500/50 hover:shadow-violet-500/40 text-black font-semibold rounded-lg">All filter</button>
                    </td>
                </tr>
            </table>

            <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 ">
                    All Transactions
                </h3>

            </div>
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class="min-w-full">
                            <thead class="bg-white border-b">
                            </thead>
                            <>
                                {isFiltering ? <Filteredtransaction stDate={stDate} edDate={edDate} /> : <Transaction />}
                                {
                                    console.log(stDate)
    
                                }
                            </>

                        </table>
                    </div>
                </div>
            </div>

        </div>
    );

}   
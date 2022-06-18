import React, { useState } from 'react'
import axios from 'axios';
import moment from "moment";


const Filteredtransaction = ({ stDate, edDate }) => {

    const [datat, setDatat] = useState([]) 
    var jwt = localStorage.getItem("jwt")
    console.log("This is Start date "+stDate)
    var finalsdate = moment(stDate).format("YYYY-MM-DD h:mm:ss")
    var finaledate = moment(edDate).format("YYYY-MM-DD h:mm:ss")
    console.log("stDate: " + finalsdate);
    console.log("edDate: " + finaledate);

    axios({
        method: "get",
        url: "http://localhost:8080/filterbanktransactionbyDate?stDate=" + finalsdate + "&edDate=" + finaledate,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            "Authorization": `Bearer ` + jwt
        },
        mode: "cors",
    }).then((res) => {
        console.log("response", res.data)
        setDatat(res.data)
        var tansactions = res.data;
        localStorage.setItem("transactionfiltered", JSON.stringify(tansactions))
    })




    const transObj = localStorage.getItem('transactionfiltered')
    const tansaction = JSON.parse(transObj);
    console.log(tansaction)




    return (       
            <tbody maxWidth="150px">
                {datat.map((blog) => (
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
    );
}


export default Filteredtransaction;



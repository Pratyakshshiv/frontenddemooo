import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const DisplayTable = () => {
    const [userkaData, setuserkaData] = useState([])
    // const [id, setid] = useState(0)
    var id = 0;

    const deleteClicked = async (ide) => {
        let response = await fetch(`https://backend-peackock.onrender.com/api/deleteUser/${ide}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        loadData()
    }

    const loadData = async () => {
        let response = await fetch("https://backend-peackock.onrender.com/api/userData", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        response = await response.json();
        console.log(response);
        setuserkaData(response[0]);
    };
    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Mobile number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email address
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Details
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>

                    {userkaData !== []
                        ? userkaData.map((data) => {
                            return (
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {++id}
                                        </th>
                                        <td className="px-6 py-4">
                                            {data.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {data.number}
                                        </td>
                                        <td className="px-6 py-4">
                                            {data.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link to={`/edit/${data._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="#" onClick={() => deleteClicked(data._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                        : ""
                    }
                </table>
            </div>

        </div>
    )
}

export default DisplayTable

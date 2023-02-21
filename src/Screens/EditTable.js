import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const EditTable = () => {

    const [user, setuser] = useState(
        {
            name: "",
            email: "",
            number: "",
            password: ""
        }
    )

    const { id } = useParams();

    const navigate = useNavigate()

    useEffect(() => {
        loadUserDetails()
    }, [])

    const loadUserDetails = async () => {
        let response = await fetch(`https://backend-peackock.onrender.com/api/userEdit/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        response = await response.json();
        console.log(response);
        setuser(response[0]);
    }

    const edituserdetails = async () => {
        navigate("/display")
        let response = await fetch(`https://backend-peackock.onrender.com/api/userEdit/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: user.name,
                email: user.email,
                number: user.number,
                password: user.password
            }),
        });

    }


    const cancelClicked = () => {
        navigate("/display")
    }


    const onChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <Navbar />
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                Edit user information
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                    <input type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name" required=""
                                        value={user.name}
                                        onChange={onChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"
                                        value={user.email}
                                        onChange={onChange}
                                        required="" />
                                </div>
                                <div>
                                    <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile Number</label>
                                    <input type="number" name="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your number"
                                        value={user.number}
                                        onChange={onChange}
                                        required="" />
                                </div>
                                <button type="submit" onClick={edituserdetails} className="w-full text-white bg-orange-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Confirm</button>
                                <button type="submit" onClick={cancelClicked} className="w-full text-white bg-orange-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Cancel</button>
                            </form>
                        </div>
                    </div>
                </div >
            </section >
        </div >
    )
}

export default EditTable

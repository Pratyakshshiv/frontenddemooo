import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const ForgotPassword = () => {


    const [user, setuser] = useState(
        {
            email: ""
        }
    )

    const navigate = useNavigate()


    const sendOtp = async () => {
        navigate('/verify')
        const response = await fetch("https://backend-peackock.onrender.com/api/forgot-pass", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: user.email
            }),
        })
    }
    const onChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div className='grid place-items-center h-screen'>


            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Forgot Password</h5>

                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">please enter your email address to receive a verification code</p>
                <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" value={user.email} onChange={onChange} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                    </div>
                    <div>
                        <Link to={`/verify/${user.email}`} >

                            <button type="submit" onClick={sendOtp} className="w-full  text-black bg-orange-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Continue</button>
                        </Link>
                    </div>
                    <div className='text-center'>
                        <Link to="/login" className="text-orange-500">
                            Go back
                        </Link>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default ForgotPassword

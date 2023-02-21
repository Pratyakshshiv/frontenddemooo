import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {

    const { otp } = useParams()

    const navigate = useNavigate()

    const [details, setdetails] = useState({
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (details.password == details.confirmPassword) {
            const response = await fetch(`https://login-eight-delta.vercel.app/api/resetPass/${otp}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    password: details.password
                }),
            });
            const json = await response.json();
            console.log(json);

            if (!json.success) {
                navigate('/resetPass')
                alert("Password cannot be changed");
                console.log("reset not working")

            }
            if (json.success) {
                console.log("reset working")
                navigate("/passUpdated")
            }
        } else {
            alert("Password and confirm password does not match")
        }
    }

    const onChange = (e) => {
        setdetails({ ...details, [e.target.name]: e.target.value })
    }

    return (
        <div className='grid place-items-center h-screen'>


            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Reset Password</h5>

                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">Your new password must be different from previously used password</p>
                <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                        <input type="password" value={details.password} onChange={onChange} name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                        <input type="confirmPassword" value={details.confirmPassword} onChange={onChange} name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <div>
                        <a href="#">
                            <button onClick={handleSubmit} type="submit" className="w-full  text-black bg-orange-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset Password</button>
                        </a>
                    </div>
                </form>
            </div >


        </div >
    )
}

export default ResetPassword
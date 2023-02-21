import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';


const Verify = () => {

    const [otp, setOtp] = useState(
        {
            number: ""
        }
    )

    const navigate = useNavigate()
    const { email } = useParams()

    const handleSubmit = async (e) => {
        e.preventDefault();


        const response = await fetch(`https://login-eight-delta.vercel.app/api/verifyUser/${email}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                token: otp.number
            }),
        });
        const json = await response.json();
        console.log(json);

        if (!json.success) {
            alert("enter valid cred..");
            navigate("/forgotPass/")
            console.log("reset working")

        }
        if (json.success) {
            console.log("reset working")
            navigate("/resetPass/" + otp.number)
        }
    };

    const onChange = (e) => {
        setOtp({ ...otp, [e.target.name]: e.target.value })
    }

    return (
        <div className='grid place-items-center h-screen'>


            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white text-center">Verify Code</h5>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 text-center">Please enter the 4 digit code sent to your email</p>

                <div id="otp" className="flex flex-row justify-center text-center px-2 mt-5">
                    {/* <input onChange={onChange} value={otp.token} className="m-2 border h-10 w-10 text-center form-control rounded" type="number" id="first" maxlength="4" /> */}
                    <input type="number" name="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your number"
                        value={otp.number}
                        onChange={onChange}
                        required="" />
                    {/* <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="second" maxlength="1" />
                    <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="third" maxlength="1" />
                    <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fourth" maxlength="1" /> */}
                </div>
                <div className="flex justify-center text-center mt-5">
                    <a className="flex items-center text-orange-500 hover:text-blue-500 cursor-pointer"><span className="font-bold">Resend OTP</span><i className='bx bx-caret-right ml-1'></i></a>
                </div>

                <a href="#">
                    <button onClick={handleSubmit} type="submit" className="w-full  text-black bg-orange-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Continue</button>
                </a>
            </div>


        </div>
    )
}

export default Verify
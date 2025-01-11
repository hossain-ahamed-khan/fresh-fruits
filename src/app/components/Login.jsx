"use client"
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import Register from "./Register";
import Modal from "./Modal";

export default function Login() {
    const [registerModal, setRegisterModal] = useState(false)

    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>Login</h1>
            <form>
                <div>
                    <label>Email</label> <br />
                    <input type="text" placeholder='Enter your email' className='w-full border p-3 rounded-xl mt-2 mb-4' /> <br />
                    <label>Password</label> <br />
                    <input type="text" placeholder='Enter your password' className='w-full border p-3 rounded-xl mt-2 mb-4' />
                </div>

                <div className='flex justify-between'>
                    <div className="flex items-center mb-4">
                        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                    <div>
                        <button className='underline font-medium'>Forgot Password</button>
                    </div>
                </div>
                <div className='w-full bg-[#FF6A1A] text-white py-3 rounded-xl text-center text-lg font-semibold'>
                    <button>Login</button>
                </div>
                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 font-medium">or Sign in with</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
                <div className="flex justify-between gap-5">
                    <div className="flex items-center justify-center gap-2 flex-1 border py-2 rounded-xl">
                        <FcGoogle />
                        <button>Google</button>
                    </div>
                    <div className="flex items-center justify-center gap-2 flex-1 border py-2 rounded-xl">
                        <SiFacebook />
                        <button>Facebook</button>
                    </div>
                </div>
            </form>
            <p className="my-6 font-medium text-center">Don’t have an account? <button className="text-[#FF6A1A]" onClick={() => setRegisterModal(true)}>Sign up</button></p>
            <Modal isVisible={registerModal} onClose={() => setRegisterModal(false)}>
                <Register />
            </Modal>
        </div>
    )
}

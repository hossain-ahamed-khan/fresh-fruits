"use client"
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import Modal from "./Modal";
import Login from "./Login";

export default function Register() {
    const [showLoginModal, setShowLoginModal] = useState(false)

    return (
        <div>
            <h1 className='text-3xl font-bold text-center'>Register</h1>
            <form>
                <div>
                    <label>Full Name</label> <br />
                    <input type="text" placeholder='Enter your name' className='w-full border p-3 rounded-xl mt-2 mb-4' /> <br />
                    <label>Email</label> <br />
                    <input type="email" placeholder='Enter your email' className='w-full border p-3 rounded-xl mt-2 mb-4' /> <br />
                    <label>Password</label> <br />
                    <input type="text" placeholder='Enter your password' className='w-full border p-3 rounded-xl mt-2 mb-4' />
                </div>

                <div className='w-full bg-[#FF6A1A] text-white py-3 rounded-xl text-center text-lg font-semibold'>
                    <button>Register</button>
                </div>
                <div className="relative flex py-5 items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 font-medium">or Sign up with</span>
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
            <p className="my-6 font-medium text-center">Don’t have an account? <button className="text-[#FF6A1A]" onClick={() => setShowLoginModal(true)}>Login</button></p>
            <Modal isVisible={showLoginModal} onClose={() => setShowLoginModal(false)}>
                <Login />
            </Modal>
        </div>
    )
}

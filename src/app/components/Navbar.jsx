"use client"
import Image from "next/image";
import logo from "../../../public/fresh fruits images/main-logo.png";
import { MdFavorite } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import Modal from "./Modal";
import Login from "./Login";

export default function Navbar() {
    const [showLoginModal, setShowLoginModal] = useState(false)

    return (
        <div className="absolute top-0 w-full z-40 bg-none">
            <div className="w-10/12 mx-auto flex justify-between items-center py-4 px-8">
                <div className="flex items-center space-x-4">
                    <Image
                        className="rounded-xl"
                        src={logo}
                        width={40}
                        alt="Hero Main Image"
                    />
                    <h1 className="text-[#212337] text-3xl font-bold">Fresh Harvests</h1>
                </div>
                <div>
                    <ul className="flex items-center space-x-8">
                        <li className="cursor-pointer hover:text-[#FF6A1A]">Home</li>
                        <li className="cursor-pointer hover:text-[#FF6A1A]">Shop</li>
                        <li className="cursor-pointer hover:text-[#FF6A1A]">About us</li>
                        <li className="cursor-pointer hover:text-[#FF6A1A]">Blog</li>
                    </ul>
                </div>
                <div className="flex items-center space-x-8">
                    <div className="flex items-center gap-2 hover:text-[#FF6A1A]">
                        <MdFavorite />
                        <button>Favorites</button>
                    </div>
                    <div className="flex items-center gap-2 hover:text-[#FF6A1A]">
                        <FaShoppingCart />
                        <button>Cart</button>
                    </div>
                    <div className="border border-slate-200 px-5 py-2 rounded-xl hover:bg-[#FF6A1A] hover:text-white">
                        <button onClick={() => setShowLoginModal(true)}>Sign in</button>
                    </div>
                    <Modal isVisible={showLoginModal} onClose={() => setShowLoginModal(false)}>
                        <Login />
                    </Modal>
                </div>
            </div>
        </div>
    )
}
import Image from "next/image";
import logo from "../../../public/fresh fruits images/main-logo.png";
import { MdFavorite } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
    return (
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
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About us</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="flex items-center space-x-8 text-white">
                <div className="flex items-center gap-2">
                    <MdFavorite />
                    <button>Favorites</button>
                </div>
                <div className="flex items-center gap-2">
                    <FaShoppingCart />
                    <button>Cart</button>
                </div>
                <div className="border border-slate-200 px-5 py-2 rounded-xl">
                    <button>Sign in</button>
                </div>
            </div>
        </div>
    )
}
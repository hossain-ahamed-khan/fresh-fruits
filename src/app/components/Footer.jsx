import Image from "next/image";
import logo from "../../../public/fresh fruits images/main-logo.png";
import appStore from "../../../public/fresh fruits images/appstore.png";
import googlePlay from "../../../public/fresh fruits images/googleplay.png";
import visa from "../../../public/fresh fruits images/Visa.png";
import paypal from "../../../public/fresh fruits images/Paypal.png";
import applePay from "../../../public/fresh fruits images/ApplePay.png";
import { MdLocalPhone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="w-full bg-[#F4F6F6] pt-20 pb-10">
            <div className="w-5/6 mx-auto flex justify-between">
                <div>
                    <div className="flex items-center space-x-4">
                        <Image
                            className="rounded-xl"
                            src={logo}
                            width={50}
                            alt="Hero Main Image"
                        />
                        <h1 className="text-[#212337] text-4xl font-bold">Fresh Harvests</h1>
                    </div>
                    <div className="mt-40">
                        <p>Download App:</p>
                        <div className="flex items-center justify-start gap-6 mt-5">
                            <button>
                                <Image
                                    src={appStore}
                                    width={150}
                                    alt="Hero Main Image"
                                />
                            </button>
                            <button>
                                <Image
                                    src={googlePlay}
                                    width={150}
                                    alt="Hero Main Image"
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex gap-52">
                    <div className="space-y-5">
                        <h3 className="text-xl font-semibold">Quick links 1</h3>
                        <p>Home</p>
                        <p>Shop</p>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Detail Blog</p>
                    </div>
                    <div className="space-y-5">
                        <h3 className="text-xl font-semibold">Quick links 1</h3>
                        <p>Favorites</p>
                        <p>Cart</p>
                        <p>Sign in</p>
                        <p>Register</p>
                    </div>
                </div>
                <div className="space-y-8">
                    <div className="space-y-5">
                        <h3 className="text-xl font-semibold">Contact us</h3>
                        <div className="flex items-center gap-1">
                            <MdLocalPhone className="text-[#749B3F] text-2xl" />
                            <p>1234 5678 90</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <AiOutlineMail className="text-[#749B3F] text-2xl" />
                            <p>Freshharvests@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <CiLocationOn className="text-[#749B3F] text-2xl" />
                            <p>Tanjung Sari Street, Pontianak, Indonesia</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold">Accepted Payment Methods:</p>
                        <div className="flex items-center gap-5 mt-5">
                            <Image
                                src={visa}
                                width={80}
                                alt="Hero Main Image"
                            />
                            <Image
                                src={paypal}
                                width={80}
                                alt="Hero Main Image"
                            />
                            <Image
                                src={applePay}
                                width={80}
                                alt="Hero Main Image"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between w-5/6 mx-auto mt-10 border-t-2 pt-10">
                <div>
                    <p>© Copyright 2025, All Rights Reserved by Banana Studio</p>
                </div>
                <div className="flex gap-5 text-3xl">
                    <AiFillTwitterCircle />
                    <FaFacebook />
                    <FaInstagramSquare className="rounded-full" />
                </div>
            </div>

        </div>
    )
}

import Image from "next/image";
import coconut from "../../../../public/fresh fruits images/coconut-img.png";
import { RiStarSFill } from "react-icons/ri";
import { MdOutlineFavorite } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import ProductCard from "@/app/components/ProductCard";


export default function ProductDetails() {
    return (
        <div className="w-5/6 mx-auto mt-32">
            <div className="flex gap-10">
                <div className="flex-1 border rounded-xl flex justify-center items-center">
                    <Image
                        src={coconut}
                        width={500}
                        height={500}
                        alt="product image"
                    />
                </div>
                <div className="flex-1">
                    <p className="text-xl font-semibold text-[#749B3F] bg-[#749B3F1A] w-24 px-5 py-1 rounded-xl">Fruits</p>
                    <h1 className="text-5xl my-6 font-bold">Coconut</h1>
                    <div className="flex gap-2 items-center font-bold">
                        <div className="flex gap-1 text-[#FFB848] text-2xl">
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                            <RiStarSFill />
                        </div>
                        <p>5.0</p>
                        <p>(1 review)</p>
                    </div>
                    <p className="text-[#FF6A1A] text-3xl font-bold my-4">$6.3/kg</p>
                    <p>From our farm directly to your door, our fresh coconuts are harvested at the peak of ripeness, offering you a sweet, hydrating treat full of flavor. Packed with natural nutrients, coconut is perfect for a variety of culinary uses, from smoothies to savory dishes, or even for a refreshing drink straight from the shell.</p>

                    <div className="flex gap-3 mt-20 mb-5 text-xl font-semibold items-center">
                        <p>Quantity</p>
                        <div className="flex gap-3 items-center border rounded-xl">
                            <button className="px-4 py-2 border-r">-</button>
                            <p>1</p>
                            <button className="px-4 py-2 border-l">+</button>
                        </div>
                        <p>/kg</p>
                    </div>

                    <div className="flex gap-5 w-full">
                        <div className="flex flex-1 gap-2 items-center justify-center bg-[#F4F6F6] py-4 rounded-xl font-semibold">
                            <MdOutlineFavorite className="text-[#D9D9D9] text-2xl" />
                            <button>Save as favorite</button>
                        </div>
                        <div className="flex flex-1 gap-2 items-center justify-center bg-[#FF6A1A] py-4 rounded-xl text-white font-semibold">
                            <MdShoppingCart className="text-2xl" />
                            <button>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-20">
                <div className="space-x-3">
                    <button className="bg-[#749B3F] text-white px-5 py-2 rounded-xl">Description</button>
                    <button className="border rounded-xl text-[#A6A6A6] px-5 py-2">Reviews(1)</button>
                </div>
                <div className="bg-[#F4F6F6] w-2/3 p-6 rounded-xl mt-10">
                    <p>
                        Our coconuts are sustainably grown, ensuring the best quality and taste. Each coconut is handpicked and carefully prepared, offering you the freshest product possible. Rich in healthy fats, electrolytes, and essential nutrients, coconuts provide both hydration and nourishment. Whether youre using the water, flesh, or milk, our coconuts bring versatility to your kitchen while supporting healthy living. <br /> <br />
                        Perfect for smoothies, desserts, curries, and more — let the natural sweetness of the coconut elevate your recipes. Enjoy the tropical goodness in its purest form, directly from nature.
                    </p>
                </div>
            </div>

            <div className="my-40">
                <div className="space-y-5 w-1/2 mx-auto text-center">
                    <p className="text-xl font-semibold text-[#749B3F] bg-[#749B3F1A] w-44 mx-auto px-5 py-1 rounded-xl">Our Products</p>
                    <h1 className="text-4xl font-bold">Related products</h1>
                    <p className="pb-10">We pride ourselves on offering a wide variety of fresh and flavorful fruits, <br /> vegetables, and salad ingredients.</p>
                </div>

                <div className="grid grid-cols-4 gap-5">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>

            </div>
        </div>
    )
}

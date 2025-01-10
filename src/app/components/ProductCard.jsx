import Image from "next/image";
import mashroom from "../../../public/fresh fruits images/marshum-image.png";

export default function ProductCard() {
    return (
        <div className="p-4 rounded-xl shadow-xl">
            <div className="bg-[#D9D9D9] p-4 rounded-xl flex justify-center items-center">
                <Image
                    src={mashroom}
                    width={200}
                    height={200}
                    alt="Hero Main Image"
                />
            </div>
            <div className="text-center my-3">
                <h1 className="font-semibold text-2xl mb-2">Mushroom</h1>
                <p>$2.3/kg</p>
            </div>
            <button className="w-full py-3 border text-xl rounded-xl hover:bg-[#FF6A1A] hover:text-white">Add to cart</button>
        </div>
    )
}

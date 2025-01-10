import Navbar from "./components/Navbar";
import heroImage from "../../public/fresh fruits images/hero-bg.png";
import arrow from "../../public/fresh fruits images/arrow.png";
import discountCard from "../../public/fresh fruits images/Special Offer.png";
import appStore from "../../public/fresh fruits images/appstore.png";
import googlePlay from "../../public/fresh fruits images/googleplay.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF] text-[#212337] border-2 border-red-500">

      {/* --------------------- hero secrion --------------------- */}

      <div className="bg-[#F4F6F6]">


        <div className="relative">

          <Image
            src={heroImage}
            style={{
              width: '100%',
              height: 'auto',
            }}
            alt="Hero Main Image"
          />

          {/* --------------------- Navbar ---------------------  */}
          <div className="absolute top-0 w-full">
            <Navbar />
          </div>

          {/* --------------------- Hero --------------------- */}
          <div className="absolute top-48 left-48 h-[890px]">
            <div>
              <p className="w-80 text-[#749B3F] bg-[#749B3F1A] px-5 py-2 font-semibold text-xl rounded-xl">Welcome to Fresh Harvest</p>
              <h1 className="text-[#212337] text-8xl font-semibold my-6">Fresh Fruits and <br /> Vegetables</h1>
              <p className="text-[#4A4A52]">At Fresh Harvests, we are passionate about providing you with the freshest <br /> and most flavorful fruits and vegetables</p>
              <button className="bg-[#FF6A1A] px-8 py-3 font-semibold text-white rounded-xl my-10">Shop Now</button>

              <div className="flex items-center justify-around">
                <div>
                  <Image
                    src={arrow}
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    alt="Hero Main Image"
                  />
                </div>
                <div>
                  <Image
                    src={discountCard}
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    alt="Hero Main Image"
                  />
                </div>
              </div>
              <div className="mt-40">
                <p>Download App:</p>
                <div className="flex items-center justify-start gap-6 mt-5">
                  <button>
                    <Image
                      src={appStore}
                      width={200}
                      alt="Hero Main Image"
                    />
                  </button>
                  <button>
                    <Image
                      src={googlePlay}
                      width={200}
                      alt="Hero Main Image"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

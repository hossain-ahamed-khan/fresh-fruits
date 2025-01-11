import Navbar from "./components/Navbar";
import heroImage from "../../public/fresh fruits images/hero-bg.png";
import arrow from "../../public/fresh fruits images/arrow.png";
import discountCard from "../../public/fresh fruits images/Special Offer.png";
import appStore from "../../public/fresh fruits images/appstore.png";
import googlePlay from "../../public/fresh fruits images/googleplay.png";
import farmer from "../../public/fresh fruits images/farmer-img.png";
import seasonalFruit from "../../public/fresh fruits images/seasonal-fruit-image.png";
import specialOfferLeft from "../../public/fresh fruits images/special-offer-bg-left.png";
import specialOfferRight from "../../public/fresh fruits images/special-offer-bg-right.png";
import leavesLeft from "../../public/fresh fruits images/leaves-left.png";
import leavesRight from "../../public/fresh fruits images/leaves-right.png";
import customerImg from "../../public/fresh fruits images/customer-img.png";
import blogImg1 from "../../public/fresh fruits images/blog-img-1.png";
import blogImg2 from "../../public/fresh fruits images/blog-img-2.jpeg";
import blogImg3 from "../../public/fresh fruits images/blog-img-3.jpeg";
import Image from "next/image";
import { TiArrowRight } from "react-icons/ti";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF] text-[#212337]">

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



      {/* --------------------- product secrion --------------------- */}

      <div>
        <div className="w-5/6 mx-auto my-40">

          <div className="w-2/3 mx-auto text-center">
            <p className="text-xl font-semibold text-[#749B3F] bg-[#749B3F1A] w-52 mx-auto px-5 py-2 rounded-xl">Our Products</p>
            <h1 className="text-7xl font-bold text-[#212337] my-5">Our Fresh Products</h1>
            <p>We pride ourselves on offering a wide variety of fresh and flavorful fruits, <br /> vegetables, and salad ingredients.</p>
            <div className="flex justify-center gap-3 py-6">
              <button className="text-xl border px-6 py-2 rounded-xl hover:bg-[#749B3F] hover:text-white">All</button>
              <button className="text-xl border px-6 py-2 rounded-xl hover:bg-[#749B3F] hover:text-white">Fruits</button>
              <button className="text-xl border px-6 py-2 rounded-xl hover:bg-[#749B3F] hover:text-white">Vegetables</button>
              <button className="text-xl border px-6 py-2 rounded-xl hover:bg-[#749B3F] hover:text-white">Salad</button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-5">

            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

          </div>
          <div className="flex justify-center my-16">
            <button className="text-[#FF6A1A] border border-[#FF6A1A] font-semibold px-6 py-3 rounded-xl hover:bg-[#FF6A1A] hover:text-white">
              See All Products
            </button>
          </div>
        </div>
      </div>



      {/* --------------------- About us secrion --------------------- */}

      <div>
        <div className="w-5/6 mx-auto my-40">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <Image
                src={farmer}
                width={600}
                height={600}
                alt="Hero Main Image"
              />
            </div>
            <div className="flex-1">
              <p className="text-xl font-semibold text-[#749B3F] bg-[#749B3F1A] w-32 px-5 py-2 rounded-xl">About us</p>
              <h1 className="text-7xl font-bold text-[#212337] my-5">About Fresh Harvest</h1>
              <p>Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.</p>
              <button className="text-[#FF6A1A] border border-[#FF6A1A] font-semibold px-6 py-3 rounded-xl hover:bg-[#FF6A1A] hover:text-white mt-10">Read More</button>
            </div>
          </div>
        </div>
      </div>


      {/* --------------------- Special Offer secrion --------------------- */}

      <div className="bg-[#F4F6F6] relative">

        <div className="absolute bottom-10 right-20 z-10">
          <Image
            src={seasonalFruit}
            width={700}
            height={600}
            alt="Hero Main Image"
          />
        </div>

        <div className="absolute bottom-0 left-0">
          <Image
            src={specialOfferLeft}
            width={900}
            height={600}
            alt="Hero Main Image"
          />
        </div>

        <div className="absolute top-0 right-0">
          <Image
            src={specialOfferRight}
            width={900}
            height={600}
            alt="Hero Main Image"
          />
        </div>

        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Image
            src={leavesLeft}
            width={100}
            height={60}
            alt="Hero Main Image"
          />
        </div>

        <div className="w-5/6 mx-auto py-20 relative z-20">
          <p className="text-xl font-semibold text-[#749B3F] bg-[#749B3F1A] w-44 px-5 py-2 rounded-xl">Special Offer</p>
          <h1 className="text-7xl font-bold text-[#212337] my-5">Seasonal Fruit Bundle</h1>
          <p className="text-4xl font-semibold">Discount up to <span className="text-[#FF6A1A]">80% OFF</span></p>
          <div className="flex gap-4 my-10">
            <div className="w-24 h-28 bg-white rounded-xl shadow-xl flex flex-col justify-center items-center">
              <p className="text-4xl font-medium">03</p>
              <p>Days</p>
            </div>
            <div className="w-24 h-28 bg-white rounded-xl shadow-xl flex flex-col justify-center items-center">
              <p className="text-4xl font-medium">18</p>
              <p>Hour</p>
            </div>
            <div className="w-24 h-28 bg-white rounded-xl shadow-xl flex flex-col justify-center items-center">
              <p className="text-4xl font-medium">54</p>
              <p>Min</p>
            </div>
            <div className="w-24 h-28 bg-white rounded-xl shadow-xl flex flex-col justify-center items-center">
              <p className="text-4xl font-medium">21</p>
              <p>Second</p>
            </div>
          </div>
          <p className="bg-[#176D38] text-2xl font-semibold px-5 py-3 rounded-full w-60 text-white">CODE : <span className="text-[#FAC714]">FRUIT28</span></p>
        </div>

      </div>


      {/* --------------------- testimonial secrion --------------------- */}

      <div>
        <div className="w-5/6 mx-auto my-40 relative">

          <div className="absolute top-0 left-0">
            <Image
              src={leavesLeft}
              width={100}
              height={60}
              alt="Hero Main Image"
            />
          </div>

          <div className="absolute top-10 right-0">
            <Image
              src={leavesRight}
              width={100}
              height={60}
              alt="Hero Main Image"
            />
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold text-[#749B3F] bg-[#749B3F1A] w-36 mx-auto px-5 py-2 rounded-xl">Testimonial</p>
            <h1 className="text-6xl font-bold text-[#212337] my-5">What Our Customers Say</h1>
            <p className="mb-10">Our customers love Fresh Harvests. Here is what they have to <br /> say about our products and services.</p>
          </div>

          <div className="flex w-full">
            <div className="w-5/12 flex justify-center items-center">
              <Image
                src={customerImg}
                width={300}
                height={200}
                alt="Hero Main Image"
              />
            </div>
            <div className="w-7/12 flex flex-col justify-center">
              <div className="w-4/5 bg-[#F4F6F6] p-10 rounded-xl">
                <p>I absolutely love Fresh Harvest! The quality of their produce is outstanding. It is always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.</p>
                <p className="mt-10"><span className="font-semibold">Jane Doe - </span>Professional chef</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* --------------------- Blog secrion --------------------- */}

      <div>
        <div className="w-5/6 mx-auto my-40 relative">

          <div className="absolute top-10 right-10">
            <Image
              src={leavesRight}
              width={100}
              height={60}
              alt="Hero Main Image"
            />
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold text-[#749B3F] bg-[#749B3F1A] w-36 mx-auto px-5 py-2 rounded-xl">Testimonial</p>
            <h1 className="text-6xl font-bold text-[#212337] my-5">What Our Customers Say</h1>
            <p className="mb-10">Our customers love Fresh Harvests. Here is what they have to <br /> say about our products and services.</p>
          </div>

          <div className="grid grid-cols-3 gap-5">
            <div>
              <div>
                <Image
                  className="rounded-3xl"
                  src={blogImg1}
                  width={500}
                  height={200}
                  alt="Hero Main Image"
                />
              </div>
              <p className="mt-6 mb-3">May 23, 2024</p>
              <h2 className="font-semibold">Exploring Seasonal Delights: A Guide to What is Fresh A Guide to What is Fresh Right Now</h2>
              <div className="flex items-center gap-1 mt-3">
                <button className="text-[#FF6A1A] font-semibold hover:underline">Read More</button>
                <TiArrowRight className="text-[#FF6A1A] text-2xl font-semibold" />
              </div>
            </div>
            <div>
              <div>
                <Image
                  className="rounded-3xl"
                  src={blogImg2}
                  width={500}
                  height={200}
                  alt="Hero Main Image"
                />
              </div>
              <p className="mt-6 mb-3">May 23, 2024</p>
              <h2 className="font-semibold">Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads</h2>
              <div className="flex items-center gap-1 mt-3">
                <button className="text-[#FF6A1A] font-semibold hover:underline">Read More</button>
                <TiArrowRight className="text-[#FF6A1A] text-2xl font-semibold" />
              </div>
            </div>
            <div>
              <div>
                <Image
                  className="rounded-3xl"
                  src={blogImg3}
                  width={500}
                  height={200}
                  alt="Hero Main Image"
                />
              </div>
              <p className="mt-6 mb-3">May 23, 2024</p>
              <h2 className="font-semibold">The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week Right Now</h2>
              <div className="flex items-center gap-1 mt-3">
                <button className="text-[#FF6A1A] font-semibold hover:underline">Read More</button>
                <TiArrowRight className="text-[#FF6A1A] text-2xl font-semibold" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

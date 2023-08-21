import { AiFillStar } from "react-icons/ai";
import heroImg from "../assets/heroImg.png";

const Hero = () => {
  return (
    <>
      <section className="bg-secondary w-full">
        <div className="max-w-[1400px] w-[89%] m-auto grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
          {/* Left Side */}
          <div className="mt-20 md:mt-0 text-center md:text-start">
            <h2 className="text-black text-2xl font-bold drop-shadow-lg">
              Welcome To
            </h2>
            <h1 className="text-white text-6xl font-bold drop-shadow-lg mb-3">
              Cascade Media
            </h1>
            <p className="text-gray-500 font-medium my-3">
              Discover limitless growth possibilites through innovative social
              media strategies, driven by Cascade Media's expertise and passion
              for success.
            </p>
            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              <a
                href="/"
                className="duration-300 hover:bg-[#f88] hover:text-white py-2 px-6 rounded text-gray-700 shadow-lg drop-shadow bg-primary "
              >
                Pricing
              </a>
              <a
                href="/"
                className="duration-300 hover:bg-[#f88] hover:text-white py-2 px-6 rounded text-gray-700 shadow-lg drop-shadow bg-primary "
              >
                More Info
              </a>
            </div>
          </div>
          {/* Right Side */}
          <div className="relative w-full ">
            <img
              src={heroImg}
              alt="dummy-img"
              className="w-full lg:h-[550px] h-[450px] object-cover"
            />
            <div className="bg-white rounded-lg shadow-md m-3 text-center w-44 p-4 absolute bottom-2 md:bottom-10 lg:bottom-20 left-2 md:left-5">
              <span className="text-3xl font-bold mb-0 text-primary ">
                5,000+
              </span>
              <h6 className="text-md text-slate-400 mt-1">Reviews</h6>
            </div>
            <div className="absolute right-0 top-5 md:top-10 md:right-0 lg:right-10 p-4 w-44 rounded-lg shadow-md bg-white m-3 text-center ">
              <div className="font-semibold text-primary flex justify-center text-[18px] ">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <h6 className="text-sm text-slate-400 mt-1 ">
                Top Rated Service
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

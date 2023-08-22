import { AiFillCheckCircle } from "react-icons/ai";
import { useState } from "react";
import Switch from "@mui/material/Switch";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <>
      <section id="price" className="bg-secondary py-20 mt-10">
        <h2 className="font-bold text-[35px] md:text-[46px] text-gray-800 text-center mb-5">
          Choose The Best Plan For You
        </h2>
        {/* monthly yearly pricing */}
        <div className="flex items-center justify-center mb-5 font-bold">
          <span>Yearly</span>
          <Switch
            checked={isMonthly}
            onChange={() => setIsMonthly(!isMonthly)}
            color="primary"
          />
          <span>Monthly</span>
        </div>
        <div className="max-w-[1400px] w-[89%] m-auto grid lg:grid-cols-4 md:gray-cols-2 grid-cols-1 gap-5 ">
          {/* Dreamer/1st Plan */}
          <div className="rounded-2xl p-[35px] bg-white flex flex-col justify-between border border-gray-400 ">
            {/* 500 profit */}
            {/* class less div */}
            <div>
              <div className="mb-[21px]">
                <span className="text-2xl font-bold text-strong">
                  &#x20B9;{isMonthly ? "1,099" : "13,099"}
                </span>
                <span className="text-sm font-bold text-gray-400">
                  {isMonthly ? "/Month" : "/Year"}
                </span>
              </div>
              <h5 className="text-2xl font-bold mb-[9px]">Dreamer</h5>
              <p className="text-sm font-bold text-gray-400 mb-[43px]">
                Basic plan but has some really good perks
              </p>
              {/* This div is for a line */}
              <div className="w-full bg-gray-400 h-[1px] mb-[21px]"></div>
              <ul className="mb-[21px]">
                <li className="flex items-center gap-[5px] mb-[17px]">
                  <div className="text-primary">
                    <AiFillCheckCircle size={25} />
                  </div>
                  <span className="text-md text-gray-500">
                    Limited Google Ads
                  </span>
                </li>
                <li className="flex items-center gap-[5px] mb-[17px]">
                  <div className="text-primary">
                    <AiFillCheckCircle size={25} />
                  </div>
                  <span className="text-md text-gray-500">1 Email Account</span>
                </li>
                <li className="flex items-center gap-[5px] mb-[17px]">
                  <div className="text-primary">
                    <AiFillCheckCircle size={25} />
                  </div>
                  <span className="text-md text-gray-500">
                    1 Social Media Account
                  </span>
                </li>
              </ul>
              <a
                href="https://api.whatsapp.com/send?phone=8447715941"
                className="py-[11px] px-[22px] rounded-md bg-primary text-white font-bold duration-300 hover:bg-strong"
              >
                Enquire
              </a>
            </div>
          </div>
          {/* Thinker Plan/2nd Plan */}
          <div className="rounded-2xl p-[35px] bg-white flex flex-col justify-between border border-gray-400 ">
            {/* class less div */}
            <div>
              <div className="mb-[21px]">
                <span className="text-2xl font-bold text-strong">
                  {/* 1000 profit INR2499 */}
                  &#x20B9;{isMonthly ? "2,499" : "29,899"}
                </span>
                <span className="text-sm font-bold text-gray-400">
                  {isMonthly ? "/Month" : "/Year"}
                </span>
              </div>
              <h5 className="text-2xl font-bold mb-[9px]">Thinker</h5>
              <p className="text-sm font-bold text-gray-400 mb-[43px]">
                Our Thinker plan is perfect if your'e looking for quick growth
              </p>
              {/* This div is for a line */}
              <div className="w-full bg-gray-400 h-[1px] mb-[21px]"></div>
              <ul className="mb-[21px]">
                <li className="flex items-center gap-[5px] mb-[17px]">
                  <div className="text-primary">
                    <AiFillCheckCircle size={25} />
                  </div>
                  <span className="text-md text-gray-500">
                    Limited Google Ads
                  </span>
                </li>

                <li className="flex items-center gap-[5px] mb-[17px]">
                  <div className="text-primary">
                    <AiFillCheckCircle size={25} />
                  </div>
                  <span className="text-md text-gray-500">3 Email Account</span>
                </li>
                <li className="flex items-center gap-[5px] mb-[17px]">
                  <div className="text-primary">
                    <AiFillCheckCircle size={25} />
                  </div>
                  <span className="text-md text-gray-500">
                    3 Social Media Accounts
                  </span>
                </li>
              </ul>
              <a
                href="https://api.whatsapp.com/send?phone=8447715941"
                className="py-[11px] px-[22px] rounded-md bg-primary text-white font-bold duration-300 hover:bg-strong"
              >
                Enquire
              </a>
            </div>
          </div>
          {/* Thinker Plan/3rd Plan */}
          <div className="rounded-2xl p-[35px] bg-strong flex flex-col justify-between border border-gray-400 relative">
            <span className="absolute right-[-5px] top-[-5px] bg-[#C8FFE0] text-black font-bold px-2 rounded-md uppercase text-sm shadow-xl">
              Best Offer
            </span>
            {/* class less div */}
            <div>
              <div className="mb-[21px]">
                <span className="text-2xl font-bold text-white">
                  {/* 2500 profit INR7499 */}
                  &#x20B9;{isMonthly ? "7,499" : "89,899"}
                </span>
                <span className="text-sm font-bold text-gray-800">
                  {isMonthly ? "/Month" : "/Year"}
                </span>
              </div>
              <h5 className="text-2xl text-white font-bold mb-[9px]">
                Cosmic Cascade
              </h5>
              <p className="text-sm font-bold text-gray-800 mb-[43px]">
                Our most selling plan with the best features and perks
              </p>
              {/* This div is for a line */}
              <div className="w-full bg-gray-900 h-[1px] mb-[21px]"></div>
              <ul className="mb-[21px]">
                <li className="flex items-center gap-[5px] mb-[17px]">
                  <div className="text-[#C8FFE0]">
                    <AiFillCheckCircle size={25} />
                  </div>
                  <span className="text-md text-white font-semibold">
                    Limited Google & Meta Ads
                  </span>
                </li>

                <li className="flex items-center gap-[5px] mb-[17px]">
                  <div className="text-[#C8FFE0]">
                    <AiFillCheckCircle size={25} />
                  </div>
                  <span className="text-md text-white font-semibold">
                    10 Email Accounts
                  </span>
                </li>
                <li className="flex items-center gap-[5px] mb-[17px]">
                  <div className="text-[#C8FFE0]">
                    <AiFillCheckCircle size={25} />
                  </div>
                  <span className="text-md text-white font-semibold">
                    Unlimited Social Media Accounts
                  </span>
                </li>
                <li className="flex items-center gap-[5px] mb-[17px]">
                  <div className="text-[#C8FFE0]">
                    <AiFillCheckCircle size={25} />
                  </div>
                  <span className="text-md text-white font-semibold">
                    Custom Branding
                  </span>
                </li>
              </ul>
              <a
                href="https://api.whatsapp.com/send?phone=9958721272"
                className="py-[11px] px-[22px] rounded-md bg-[#c8ffe0] duration-300 hover:bg-[#3c895d] hover:text-white text-black font-bold"
              >
                Enquire
              </a>
            </div>
          </div>
          {/* EnterPrise Plan / 4th plan */}
          <div className="rounded-2xl p-[35px] bg-white flex flex-col justify-between border border-gray-400 ">
            {/* class less div */}
            <div>
              <div className="mb-[21px]">
                <span className="text-2xl font-bold text-strong">
                  {/* 7000 profit INR19999 */}
                  &#x20B9;{isMonthly ? "19,999" : "2,39,899"}
                </span>
                <span className="text-sm font-bold text-gray-400">
                  {isMonthly ? "/Month" : "/Year"}
                </span>
              </div>
              <h5 className="text-2xl font-bold mb-[9px]">EnterPrise</h5>
              <p className="text-sm font-bold text-gray-400 mb-[43px]">
                Enterprise plan is for small, medium and large companies.
              </p>
              {/* This div is for a line */}
              <div className="w-full bg-gray-400 h-[1px] mb-[21px]"></div>
              <ul className="mb-[21px]">
                <li className="flex items-center gap-[5px] mb-[17px]">
                  <div className="text-primary">
                    <AiFillCheckCircle size={25} />
                  </div>
                  <span className="text-md text-gray-500">
                    Unlimited Google & Meta Ads
                  </span>
                </li>

                <li className="flex items-center gap-[5px] mb-[17px]">
                  <div className="text-primary">
                    <AiFillCheckCircle size={25} />
                  </div>
                  <span className="text-md text-gray-500">
                    Unlimited Email Account
                  </span>
                </li>
                <li className="flex items-center gap-[5px] mb-[17px]">
                  <div className="text-primary">
                    <AiFillCheckCircle size={25} />
                  </div>
                  <span className="text-md text-gray-500">
                    Unlimited Social Media Accounts
                  </span>
                </li>
                <li className="flex items-center gap-[5px] mb-[17px]">
                  <div className="text-primary">
                    <AiFillCheckCircle size={25} />
                  </div>
                  <span className="text-md text-gray-500">Custom Branding</span>
                </li>
              </ul>
              <a
                href="https://api.whatsapp.com/send?phone=9958721272"
                className="py-[11px] px-[22px] rounded-md bg-primary text-white font-bold duration-300 hover:bg-strong"
              >
                Enquire
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;

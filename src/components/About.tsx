import { AiFillCheckCircle } from "react-icons/ai";

const About = () => {
  return (
    <section id="about" className="mt-10">
      <div className="w-[89%] m-auto max-w-[1400px] flex flex-col lg:flex-row gap-8 xl:gap-[180px]">
        {/* left side */}
        <div className="grid grid-cols-1 flex-1 gap-[30px] md:grid-cols-2 xl-:gap-y-[70px]">
          <div>
            <h1 className="font-bold md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-primary ">
              10,000+
            </h1>
            <p className="mb-3 font-bold text-gray-600">Satisfied Clients.</p>
            <p className="text-gray-600 font-semibold">
              "Trailblazing Excellence for Over 8 Years: As a trusted leader in
              the realm of social media, our legacy shines with a proven track
              record and 10,000+ delighted clients. At our agency, we've
              cultivated seasoned expertise, mastering the art of digital
              engagement. With every campaign, we craft not just content, but
              captivating narratives that resonate in the dynamic landscape of
              social media."
            </p>
          </div>
          <div>
            <h1 className="font-bold md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-primary ">
              100+
            </h1>
            <p className="mb-3 font-bold text-gray-600">Skilled Employees</p>
            <p className="text-gray-600 font-semibold">
              "Strength in Numbers: Our agency thrives with a powerhouse team of
              100+ skilled professionals. Each individual's expertise combines
              to craft innovative strategies that drive unparalleled results.
              From creative minds to analytical wizards, we're your trusted
              partners in navigating the dynamic world of digital engagement."
            </p>
          </div>
          <div>
            <h1 className="font-bold md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-primary ">
              3000+
            </h1>
            <p className="mb-3 font-bold text-gray-600">Projects Completed</p>
            <p className="text-gray-600 font-semibold">
              "3000+ Projects, Infinite Impact: Our agency's journey is marked
              by a remarkable achievement – successfully completing over 3000
              projects. With each endeavor, we've honed our expertise,
              diversified our skills, and amplified our clients' success. This
              milestone underscores our commitment to excellence and innovation,
              driving us to forge ahead in shaping impactful narratives and
              delivering results that resonate in the digital landscape."
            </p>
          </div>
          <div>
            <h1 className="font-bold md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-primary ">
              10
            </h1>
            <p className="mb-3 font-bold text-gray-600">Locations World Wide</p>
            <p className="text-gray-600 font-semibold">
              "From India to Worldwide Impact: Rooted in India and reaching
              across 10+ global locations, our agency marries local insights
              with international influence. With a legacy of 3000+ projects,
              we've honed our expertise to craft impactful narratives that
              transcend borders. Beyond being a company, we're a global force,
              dedicated to driving innovation and success across continents and
              industries."
            </p>
          </div>
        </div>
        {/* Righht Side */}
        <div className="flex-1">
          <h1 className="text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] font-extrabold mb-[30px] lg:mb-[53px] text-[#77a5d0] drop-shadow-sm">
            Subscribe to our News Letter and receive special updates.
          </h1>
          <div className="bg-white py-3 px-4 flex items-center justify-between border border-gray-200 rounded-[10px] mb-[30px]">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="outline-none ml-2 w-1/2 "
            />
            <div>
              <button className="py-[17px] px-[26px] rounded-[8px] font-semibold text-md md:text-lg text-white bg-primary hover:bg-[#f88] duration-500 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-[10px]">
              <div className="text-primary">
                <AiFillCheckCircle size={25} />
              </div>
              <span className="text-md text-gray-500">Special Promtions</span>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="text-primary">
                <AiFillCheckCircle size={25} />
              </div>
              <span className="text-md text-gray-500">Recieve Updates</span>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import { AiFillCheckCircle } from "react-icons/ai";

const About = () => {
  return (
    <section id="about" className="mt-10">
      <div className="w-[89%] m-auto max-w-[1400px] flex flex-col lg:flex-row gap-8 xl:gap-[180px]">
        {/* left side */}
        <div className="grid grid-cols-1 flex-1 gap-[30px] md:grid-cols-2 xl-:gap-y-[70px]">
          <div>
            <h1 className="font-bold md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-primary ">
              5+
            </h1>
            <p className="mb-3 font-bold text-gray-600">Satisfied Clients.</p>
            <p className="text-gray-600 font-semibold">
              "Newcomers in the market, we're committed to delivering top-notch
              services and excellence. With 5 completed projects, we craft
              engaging narratives for effective social media outcomes in the
              evolving landscape."
            </p>
          </div>
          <div>
            <h1 className="font-bold md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-primary ">
              3+
            </h1>
            <p className="mb-3 font-bold text-gray-600">Skilled Employees</p>
            <p className="text-gray-600 font-semibold">
              "Thriving with a team of just 3+ members, we're fiercely
              competitive. Our compact yet skilled squad crafts innovative
              strategies for impactful outcomes in digital engagement. Count on
              us for creative and analytical excellence."
            </p>
          </div>
          <div>
            <h1 className="font-bold md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-primary ">
              5+
            </h1>
            <p className="mb-3 font-bold text-gray-600">Projects Completed</p>
            <p className="text-gray-600 font-semibold">
              "5+ Projects, Impressive Impact: Despite a small start, our work
              has garnered attention. Our quality has attracted more clients due
              to impactful services. Companies and individuals are drawn to our
              expertise, fostering interest in our offerings."
            </p>
          </div>
          {/* <div>
            <h1 className="font-bold md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-primary ">
              5+
            </h1>
            <p className="mb-3 font-bold text-gray-600">Locations World Wide</p>
            <p className="text-gray-600 font-semibold">
              "Indian Roots, Emerging Global Reach: Hailing from New Delhi,
              we're poised to extend our impact beyond India. With 5+ projects
              under our belt, we're venturing into international markets,
              marrying local insights with global aspirations."
            </p>
          </div> */}
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

const Contact = () => {
  return (
    <>
      <section id="contact" className="py-20">
        <div className="w-[89%] m-auto max-w-[1400px]">
          <div className="grid grid-cols-1 pb-8 text-center ">
            <h3 className="mb-6 md:text-2xl text-xl font-semibold">
              Get In Touch!
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto text-[15px] ">
              We would love to hear from you! Please allow us 24-48 hours for a
              response.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 mt-8 gap-[80px]">
            {/* form */}
            <div className="lg:col-span-6">
              {/* contact typed */}
              <div className="mb-10">
                <div className="mb-3">
                  <h3 className="mb-2 text-xl font-bold">Email Address</h3>
                  <p className="text-gray-500 text-[17px]">
                    singhaayush2034@gmail.com
                  </p>
                  <p className="text-gray-500 text-[17px]">
                    varunchauhan804@gmail.com
                  </p>
                </div>
                <div className="mb-3">
                  <h3 className="mb-2 text-xl font-bold">Contact</h3>
                  <p className="text-gray-500 text-[17px]">
                    (+91) 84-47-715-941
                  </p>
                  <p className="text-gray-500 text-[17px]">
                    (+91) 99-58-721-272
                  </p>
                </div>
                <div className="mb-3">
                  <h3 className="mb-2 text-xl font-bold">Address</h3>
                  <p className="text-gray-500">
                    New-Delhi, Delhi, India 110003
                  </p>
                </div>
              </div>
              {/* form contact */}
              <form action="https://formspree.io/f/xaygoore" method="POST">
                <div className="grid lg:grid-cols-12 lg:gap-5">
                  <div className="lg:col-span-6 mb-10">
                    <input
                      type="text"
                      name="name"
                      autoComplete="off"
                      placeholder="Your Name!"
                      className="w-full py-2 px-3 border rounded h-10 outline-none bg-transparent focus:border-strong text-[15px]"
                    />
                  </div>
                  <div className="lg:col-span-6 mb-10">
                    <input
                      type="email"
                      name="email"
                      autoComplete="off"
                      placeholder="Your Email!"
                      className="w-full py-2 px-3 border rounded h-10 outline-none bg-transparent focus:border-strong text-[15px]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1">
                  <div className="mb-10">
                    <input
                      type="text"
                      name="subject"
                      autoComplete="off"
                      placeholder="Subject!"
                      className="w-full py-2 px-3 border rounded h-10 outline-none bg-transparent focus:border-strong text-[15px]"
                    />
                  </div>
                  <div className="mb-5">
                    <textarea
                      style={{ resize: "none" }}
                      name="message"
                      autoComplete="off"
                      placeholder="How Can We Help You? In Case it didn't work try to contact us manually."
                      className="w-full py-2 px-3 border rounded h-28 ouline-none bg-transparent focus:border-strong text-[15px] "
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-strong text-white rounded-md py-2 px-5 "
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="lg:col-span-6">
              <div style={{ width: "100%" }}>
                <iframe
                  width="100%"
                  height="600"
                  // frameborder={0}
                  // scrolling="no"
                  // marginheight="0"
                  // marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=F-474,%20Krishna%20Gali,%20Kotla%20Mubarakpur,%20Gurudwara%20Road,%20Central%20Delhi,%20Lodhi-road,%20New%20Delhi-110003,%20Delhi,%20India+(Cascade%20Media)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.maps.ie/population/">
                    Population Estimator map
                  </a>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

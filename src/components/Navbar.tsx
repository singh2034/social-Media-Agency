import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import {
  AiFillInstagram,
  // AiFillFacebook,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  // scroll behaviour for mobiles
  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [openMobileMenu]);

  // scroll behaviour for computers
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // responive navbar
  const handleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  return (
    <>
      <nav
        className={`py-2 w-full ${
          isScrolling ? "fixed top-0 bg-white shadow-lg z-10" : "relative"
        }`}
      >
        <div className="w-[89%] m-auto max-width-[1400px] flex justify-between items-center">
          <a href="/">
            <h1 className="text-2xl font-bold text-primary hover:-translate-y-1 transition duration-200">
              Cosmicade
            </h1>
          </a>

          <ul
            className={`md:flex items-center gap-8 md:static absolute text-gray-600 ${
              openMobileMenu
                ? "top-12 py-4 w-full bg-primary left-0 text-center space-y-10 text-white drop-shadow-lg z-20"
                : "hidden"
            }`}
          >
            <li className="hover:-translate-y-1 transition duration-500">
              <a href="/" onClick={() => setOpenMobileMenu(false)}>
                Home
              </a>
            </li>
            <li className="hover:-translate-y-1 transition duration-500">
              <a href="#about" onClick={() => setOpenMobileMenu(false)}>
                About
              </a>
            </li>
            {/* <li className="hover:-translate-y-1 transition duration-500">
              <a href="#price" onClick={() => setOpenMobileMenu(false)}>
                Pricing
              </a>
            </li> */}
            <li className="hover:-translate-y-1 transition duration-500">
              <a href="#contact" onClick={() => setOpenMobileMenu(false)}>
                Contact
              </a>
            </li>
          </ul>
          <div className="flex gap-2 text-white items-center ml-auto md:ml-0">
            {/* <div className="bg-primary p-1 rounded-full hover:-translate-y-[4px] transition-all cursor-pointer">
              <a href="" target="_blank" rel="noreferrer">
                <AiFillFacebook />
              </a>
            </div> */}
            <div className="bg-primary p-1 rounded-full hover:-translate-y-[4px] transition-all cursor-pointer">
              <a
                href="https://www.instagram.com/cosmicademedia/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram />
              </a>
            </div>
            <div className="bg-primary p-1 rounded-full hover:-translate-y-[4px] transition-all cursor-pointer">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/cosmicade5173"
              >
                <AiOutlineTwitter />
              </a>
            </div>
            <div className="bg-primary p-1 rounded-full hover:-translate-y-[4px] transition-all cursor-pointer">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/cosmiccascade-media-agency/"
              >
                <AiFillLinkedin />
              </a>
            </div>
            <div className="bg-primary p-1 rounded-full hover:-translate-y-[4px] transition-all cursor-pointer">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCU37z9fjHODbpnirjQ_v8cw"
              >
                <AiFillYoutube />
              </a>
            </div>
          </div>
          <div className="md:hidden ml-4" onClick={handleMobileMenu}>
            {!openMobileMenu ? <FiMenu /> : <MdClose />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
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
            <h1 className="text-3xl font-bold text-primary cursor-default">
              Imagine
            </h1>
          </a>

          <ul
            className={`md:flex items-center gap-8 md:static absolute text-gray-600 ${
              openMobileMenu
                ? "top-12 py-4 w-full bg-primary left-0 text-center space-y-10 text-white drop-shadow-lg z-20"
                : "hidden"
            }`}
          >
            <li className="hover:-translate-y-1 transition duration-200">
              <a href="/" onClick={() => setOpenMobileMenu(false)}>
                Home
              </a>
            </li>
            <li className="hover:-translate-y-1 transition duration-200">
              <a href="#about" onClick={() => setOpenMobileMenu(false)}>
                About
              </a>
            </li>
            <li className="hover:-translate-y-1 transition duration-200">
              <a href="#price" onClick={() => setOpenMobileMenu(false)}>
                Pricing
              </a>
            </li>
            <li className="hover:-translate-y-1 transition duration-200">
              <a href="#contact" onClick={() => setOpenMobileMenu(false)}>
                Contact
              </a>
            </li>
          </ul>
          <div className="flex gap-4 text-white items-center ml-auto md:ml-0">
            <div className="bg-primary p-1 rounded-full hover:translate-y-[-2px] transition-all cursor-pointer">
              <AiFillFacebook />
            </div>
            <div className="bg-primary p-1 rounded-full hover:translate-y-[-2px] transition-all cursor-pointer">
              <AiFillInstagram />
            </div>
            <div className="bg-primary p-1 rounded-full hover:translate-y-[-2px] transition-all cursor-pointer">
              <AiOutlineTwitter />
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

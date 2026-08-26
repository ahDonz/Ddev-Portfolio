import { useEffect, useState } from "react";
import { Contact } from "../Contact/Contact";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideNavbar(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full max-w-full bg-white transition-all duration-500 ${
        hideNavbar
          ? "-translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <div className="nav-wrapper flex items-center max-w-full w-full px-5 py-2 ">
   <Link to="/" className="nav-logo text-black p-1.5 font-extrabold tracking-wider " >
          <h2> Don <span className="block">Atillo</span> </h2>
        </Link>

        <div className="nav-list w max-w-[69%] w-full flex justify-between ml-auto">
          <ul className="flex gap-4 text-[16px] font-semibold">

          <li className="relative cursor-pointer before:absolute before:left-0 before:bottom-0 before:h-[1px] before:w-full before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
            <Link to="/work">
              Work
            </Link>
          </li>

          <li className="relative cursor-pointer before:absolute before:left-0 before:bottom-0 before:h-[1px] before:w-full before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
            <Link to="/about">
              About
            </Link>
          </li>

          <li className="relative cursor-pointer before:absolute before:left-0 before:bottom-0 before:h-[1px] before:w-full before:bg-black before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100">
            <Link to="/resume">
              Resume
            </Link>
          </li>

        </ul>

         <Link to="/contact" className="border border-black px-3 py-1" > Contact </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideNavbar(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <header
  className={`
    fixed
    top-0
    left-0
    z-50
    w-full
    max-w-full
    bg-white
    transition-all
    duration-500

   max-[1000px]:static


      
    ${
      hideNavbar
        ? "-translate-y-full opacity-0"
        : "translate-y-0 opacity-100"
    }
  `}
>

      <div className="nav-wrapper flex w-full max-w-full items-center justify-between px-4 py-2">

        {/* Logo */}
        <Link
          to="/"
          className="nav-logo shrink-0 p-1.5 font-extrabold tracking-wider text-black"
        >
          <h2>
            Don <span className="block">Atillo</span>
          </h2>
        </Link>


        {/* Desktop Navigation */}
        <div
          className="
            nav-list
            flex
            w-full
            max-w-[69%]
            justify-between
            max-[1000px]:hidden
          "
        >

          <ul className="flex gap-4 text-[16px] font-semibold">

            <li className="relative cursor-pointer before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 hover:before:scale-x-100">
              <Link to="/work">
                Work
              </Link>
            </li>

            <li className="relative cursor-pointer before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 hover:before:scale-x-100">
              <Link to="/about">
                About
              </Link>
            </li>

            <li className="relative cursor-pointer before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 hover:before:scale-x-100">
              <Link to="/resume">
                Resume
              </Link>
            </li>

          </ul>


          <Link
            to="/contact"
            className="border border-black px-3 py-1"
          >
            Contact
          </Link>

        </div>



        {/* Hamburger */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className={`
            relative
            hidden
            h-5
            w-7
            shrink-0
            cursor-pointer
            max-[1000px]:block

            before:absolute
            before:left-0
            before:top-0
            before:h-[2px]
            before:w-7
            before:bg-black
            before:content-['']

            after:absolute
            after:left-0
            after:bottom-0
            after:h-[2px]
            after:w-7
            after:bg-black
            after:content-['']

            ${
              menuOpen
                ? "before:top-[9px] before:rotate-45 after:bottom-[9px] after:-rotate-45"
                : ""
            }
          `}
        >

          <span
            className={`
              absolute
              left-0
              top-1/2
              h-[2px]
              w-7
              -translate-y-1/2
              bg-black
              transition-all
              ${menuOpen ? "opacity-0" : ""}
            `}
          />

        </div>

      </div>



      {/* Mobile Menu */}
      <div
        className={`
          absolute
          left-0
          top-full
          flex
          w-full
          flex-col
          gap-6
          bg-white
          px-4
          py-8
          shadow-lg
          transition-all
          duration-300
          min-[1001px]:hidden

          ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-5 pointer-events-none opacity-0"
          }
        `}
      >

        <Link to="/work" onClick={() => setMenuOpen(false)}>
          Work
        </Link>

        <Link to="/about" onClick={() => setMenuOpen(false)}>
          About
        </Link>

        <Link to="/resume" onClick={() => setMenuOpen(false)}>
          Resume
        </Link>

        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>

      </div>

    </header>
  );
};

export default Navbar;
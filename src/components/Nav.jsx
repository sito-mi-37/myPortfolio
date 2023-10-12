import { useState } from "react";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import { MAIN_NAV_LINKS } from "../lib/consts/navigation";
import { RiGithubFill, RiLinkedinBoxLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import Social from "./Social";

// redux imports

const Nav = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const location = useLocation();

  return (
    <header className="bg-primary w-full h-[60px] text-white sticky top-0 z-10 bg-violet-800 px-2">
      <section className="max-w-[70rem] mx-auto flex justify-between items-center  p-2">
        <Link to={"/"}>
          <Logo />
        </Link>

        <div className="flex items-center gap-2 sm:gap-[6rem] flex-row-reverse sm:flex-row ">
          <div>
            <button
              id="hamburger-button"
              onClick={handleShow}
              className={`text-3xl md:hidden cursor-pointer relative w-8 h-8  ${
                show ? "toggle-btn" : ""
              }`}
            >
              <div
                className="bg-white  w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:-translate-x-4 before:-translate-y-3
            before:transition-all before:duration-500
            after:content-[''] after:bg-white  after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3
            after:transition-all after:duration-500
            "
              ></div>
            </button>
            <nav
              className="hidden md:block space-x-8 text-2xl font-medium text-white"
              aria-label="main"
            >
              {MAIN_NAV_LINKS.map((nav, index) => (
                <Link
                  className={`text-xl text-slate-200 hover:text-slate-50 transition-colors duration-[.1s] ${location?.pathname === nav.path
                    ? `border-2 px-2 rounded-md`
                    : ""}`}
                  key={nav.key}
                  to={nav.path}
                >
                  {nav.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
        <div className="hidden sm:flex justify-center items-center gap-3 text-secondaryDark text-3xl">
          <Social />
        </div>
      </section>
      <section
        id="mobile-menu"
        onClick={handleShow}
        className={`absolute z-50 top-[60px]  w-full min-h-screen text-2xl flex-col justify-start origin-top animate-open-menu bg-violet-800/20 backdrop-blur-[16px] p-3 ${
          show ? "flex" : "hidden"
        }`}
      >
        <nav className="relative flex flex-col gap-6 py-8" aria-label="mobile">
          {MAIN_NAV_LINKS.map((nav) => (
            <Link
              className={
                location?.pathname === nav.path
                  ? `border-2 px-2 rounded-md`
                  : ""
              }
              key={nav.key}
              to={nav.path}
            >
              {nav.label}
            </Link>
          ))}
          <img
            className="absolute w-[350px] sm:w-[450px]   sm:left-[-4rem] bottom-[-20rem]"
            src="../../points-space.svg"
            alt="image"
          />
        </nav>
        {/* <div className=""> */}
          <div className="flex sm:hidden items-center gap-3 text-secondaryDark">
            <Social />
          </div>
        {/* </div> */}
      </section>
    </header>
  );
};

export default Nav;

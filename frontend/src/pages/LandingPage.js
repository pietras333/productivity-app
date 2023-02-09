import MainPageLanding from "../components/MainPageLanding";
import InfoLanding from "../components/InfoLanding";
import ContactForm from "../components/ContactForm";
import FooterLanding from "../components/FooterLanding";
import DarkMode from "../assets/illustrations/darkmode.png";
import LightMode from "../assets/illustrations/lightmode.png";
import Hamburger from "../assets/illustrations/hamburger.png";
import Arrow from "../assets/illustrations/arrow.png";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [navbarShowState, setNavbarShowState] = useState(false);
  let scrolled = 0;
  const contactref = useRef(null);
  const homeref = useRef(null);

  const handleScroll = (event) => {
    const id = event.target.id;
    switch (id) {
      case "contact":
        contactref.current?.scrollIntoView({ behaviour: "smooth" });
        if (navbarShowState) setNavbarShowState((prev) => !prev);
        break;
      case "home":
        homeref.current?.scrollIntoView({ behaviour: "smooth" });
        if (navbarShowState) setNavbarShowState((prev) => !prev);
        break;
      default:
        homeref.current?.scrollIntoView({ behaviour: "smooth" });
        if (navbarShowState) setNavbarShowState((prev) => !prev);
        break;
    }
  };

  const handleDisplayIconChange = () => {
    return darkMode ? DarkMode : LightMode;
  };
  const handleDisplayChange = () => {
    setDarkMode((prev) => !prev);
  };

  const navbarstyledefault =
    "fixed animate-slidetop w-full max-sm:h-[10%] 2xl:h-[150px] xl:h-[120px] lg:h-[100px] md:h-[80px] sm:h-[60px] transition-all border-b-2 border-b-transparent";
  const navbarstylescrolled =
    "fixed animate-slidetop w-full max-sm:h-[10%] 2xl:h-[150px] xl:h-[120px] lg:h-[100px] md:h-[80px] sm:h-[60px] border-b-2 border-b-[#4FACF7] shadow-2xl shadow-[#4FACF7] bg-[#4fabf7af] transition-all";
  window.onscroll = () => {
    const navbar = document.getElementById("navbar");
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    scrolled = (winScroll / height) * 100;
    document.getElementById("bar").style.width = scrolled + "%";
    if (scrolled > 0) {
      navbar.className = navbarstylescrolled;
    } else {
      navbar.className = navbarstyledefault;
    }
  };

  const handleResponsiveNavbar = () => {
    setNavbarShowState((prev) => !prev);
  };

  return (
    <div className="w-full h-auto">
      <div
        ref={homeref}
        className="bg-lightpgone bg-cover bg-center bg-no-repeat w-full"
      >
        <section className="snap-center w-full h-screen bg-landing bg-contain bg-no-repeat bg-right-bottom md:bg-[length:505px]">
          {navbarShowState ? (
            <nav
              id="navbar"
              className="transition-all fixed animate-slidetop w-full max-lg:h-screen max-lg:z-20 bg-lightmobilemenu bg-cover bg-center bg-no-repeat"
            >
              <ul className="max-lg:flex-col max-lg:items-stretch flex w-full h-full">
                <section className="w-full h-[10%] flex justify-between items-center">
                  <li className="animate-slidetop max-lg:w-[80%] max-lg:animate-slidetop max-lg:ml-[5%] text-[#FFB562] max-lg:text-4xl font-bold tracking-widest">
                    Todooo
                  </li>
                  <li
                    onClick={handleResponsiveNavbar}
                    className="max-lg:w-[20%] max-lg:animate-slidetop transition-all animate-fadein h-full hidden max-lg:flex max-lg:justify-center max-lg:items-center"
                  >
                    <div className="space-y-2">
                      <img
                        src={Arrow}
                        alt="Arrow"
                        className="invert w-[30px]"
                      />
                    </div>
                  </li>
                </section>
                <section className="flex h-[90%] justify-around items-center flex-col ">
                  <section
                    className="flex justify-center items-center flex-col w-full
                  "
                  >
                    <li
                      id="home"
                      onClick={(e) => handleScroll(e)}
                      className="max-lg:mt-2 max-lg:animate-slideleft max-lg:text-xl max-lg:inline inline tracking-tighter  text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all"
                    >
                      Home
                    </li>
                    <li className="max-lg:mt-2 max-lg:animate-slideleft max-lg:text-xl max-lg:inline inline tracking-tighter text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
                      Features
                    </li>
                    <li
                      id="contact"
                      onClick={(e) => handleScroll(e)}
                      className="max-lg:mt-2 max-lg:animate-slideleft max-lg:text-xl max-lg:inline inline tracking-tighter text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all"
                    >
                      Contact
                    </li>
                    <li className="max-lg:mt-2 max-lg:animate-slideleft max-lg:text-xl max-lg:inline inline tracking-tighter text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
                      <Link
                        to="/sign-in"
                        className="max-lg:animate-slideleft max-lg:text-xl max-lg:inline inline tracking-tighter text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all"
                      >
                        Sign In
                      </Link>
                    </li>
                    <li className="max-lg:mt-2 max-lg:animate-slideleft max-lg:text-xl max-lg:inline inline tracking-tighter text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
                      <Link
                        to="/get-started"
                        className="max-lg:animate-slideleft max-lg:text-xl max-lg:inline inline tracking-tighter text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all"
                      >
                        Get Started
                      </Link>
                    </li>
                    <li className="mr-[1%] max-sm:mr-[1%] max-lg:mt-2">
                      <button>
                        <img
                          src={handleDisplayIconChange()}
                          alt="icon of display mode"
                          className="w-[50px] invert animate-fadein inline "
                          onClick={handleDisplayChange}
                        />
                      </button>
                    </li>
                  </section>
                </section>
              </ul>
            </nav>
          ) : (
            <nav
              id="navbar"
              className="fixed animate-slidetop w-full max-sm:h-[10%] 2xl:h-[150px] xl:h-[120px]  " //max-lg:h-screen max-lg:z-20
            >
              <ul
                className="flex w-full h-full justify-between items-center mt-2"
                //max-lg:justify-center max-lg:items-center max-lg:flex-col
              >
                <li
                  className="animate-slidetop text-[#FFB562] max-sm:w-[30%] max-sm:text-4xl 2xl:w-[60%] xl:w-[60%] lg:w-[50%] md:w-[40%] sm:w-[35%] 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-5xl font-bold ml-[5%] tracking-widest"
                  //max-lg:ml-0 max-lg:text-center max-lg:absolute max-lg:top-1
                >
                  Todooo
                </li>
                <li
                  id="home"
                  onClick={(e) => handleScroll(e)}
                  className="max-lg:hidden inline max-sm:text-xs max-sm:mr-[3%] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-sm text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all"
                  // max-lg:hidden (onclick) max-lg:inline
                >
                  Home
                </li>
                <li
                  className="max-lg:hidden inline max-sm:text-xs max-sm:mr-[3%]  tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-sm text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all"
                  // max-lg:hidden (onclick) max-lg:inline
                >
                  Features
                </li>
                <li
                  id="contact"
                  onClick={(e) => handleScroll(e)}
                  className="max-lg:hidden inline max-sm:text-xs  max-sm:mr-[3%] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-sm text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all"
                  // max-lg:hidden (onclick) max-lg:inline
                >
                  Contact
                </li>
                <li className="mr-[1%] max-sm:mr-[4%]">
                  <Link to="/sign-in">
                    <button className="inline max-lg:hidden animate-fadein max-sm:text-xs max-sm:w-[120%] max-sm:h-[30px] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-base text-white bg-[#FFB562]  hover:text-[#FFB562] hover:tracking-widest hover:cursor-pointer transition-all w-[150%] h-[50px] rounded-xl hover:bg-transparent border-[3px] border-transparent hover:border-[#FFB562] ">
                      Sign In
                    </button>
                  </Link>
                </li>
                <li className="mr-[1%] max-sm:mr-[1%]">
                  <button>
                    <img
                      src={handleDisplayIconChange()}
                      alt="icon of display mode"
                      className="w-[50px] invert animate-fadein inline max-lg:hidden"
                      onClick={handleDisplayChange}
                    />
                  </button>
                </li>
                <li
                  onClick={handleResponsiveNavbar}
                  className="transition-all animate-slidetop w-auto h-auto hidden max-lg:flex max-lg:justify-center items-center max-lg:w-[20%]"
                >
                  <div className="space-y-2">
                    <img
                      src={Hamburger}
                      alt="Hamburger"
                      className="invert w-[30px]"
                    />
                  </div>
                </li>
              </ul>
            </nav>
          )}
          <MainPageLanding />
        </section>
      </div>
      <div className="bg-lightpgtwo bg-cover bg-center bg-no-repeat w-full">
        <InfoLanding side="left" />
      </div>
      <div className="bg-lightpgthree bg-cover bg-center bg-no-repeat w-full">
        <InfoLanding side="right" />
      </div>
      <div
        ref={contactref}
        className="bg-lightcontact bg-cover bg-center bg-no-repeat w-full"
      >
        <ContactForm />
      </div>
      <div className="bg-[#0052cc] w-full h-[300px] snap-center flex max-sm:flex-col justify-around">
        <FooterLanding />
      </div>
      <div className="fixed top-0 z-10 w-full">
        <section className="w-full h-[8px]">
          <section className="h-[8px] bg-[#FFB562]" id="bar"></section>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;

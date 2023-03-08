import MainPageLanding from "../components/MainPageLanding";
import InfoLanding from "../components/InfoLanding";
import ContactForm from "../components/ContactForm";
import FooterLanding from "../components/FooterLanding";
import Hamburger from "../assets/illustrations/hamburger.png";
import Arrow from "../assets/illustrations/arrow.png";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import DarkModeHandler from "../components/DarkModeHandler";

const LandingPage = () => {
  const [navbarShowState, setNavbarShowState] = useState(false);
  const [currentMode, setCurrentMode] = useState("");
  let scrolled = 0;
  const contactref = useRef(null);
  const homeref = useRef(null);

  const [data, setData] = useState(null);

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

  const navbarstyledefault =
    "fixed animate-slidetop w-full max-sm:h-[10%] 2xl:h-[150px] xl:h-[120px] lg:h-[100px] md:h-[80px] sm:h-[60px] transition-all border-b-2 border-b-transparent";
  const navbarstylescrolled =
    "dark:bg-[#121212] dark:shadow-transparent dark:border-b-[#7b34c2b6] fixed animate-slidetop w-full max-sm:h-[10%] 2xl:h-[150px] xl:h-[120px] lg:h-[100px] md:h-[80px] sm:h-[60px] border-b-2 border-b-[#4FACF7] shadow-2xl shadow-[#4FACF7] bg-[#4fabf7af] transition-all ";
  window.onscroll = () => {
    scroll();
  };
  const scroll = () => {
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
    scroll();
  };
  const handleModeChange = () => {
    const handler = DarkModeHandler;
    handler.changeMode();
    setCurrentMode(handler.getMode());
  };
  useLayoutEffect(() => {
    const handler = DarkModeHandler;
    setCurrentMode(handler.getMode());
  });

  const handleApiRequest = async () => {
    const res = await fetchData();
    console.log("res ===", { res });
  };
  const fetchData = async () => {
    const res = await fetch("../api");
    const data = await res.json();
    return data;
  };

  return (
    <div
      id="landingpage"
      className={
        currentMode === "dark"
          ? "w-full h-auto transition-mode-change dark bg-[#121212]"
          : "w-full h-auto transition-mode-change bg-[#121212] "
      }
    >
      <div
        ref={homeref}
        className="transition-all bg-lightpgone dark:bg-darkpgone bg-cover bg-center bg-no-repeat w-full"
      >
        <section className="snap-center w-full h-screen bg-landing bg-contain bg-no-repeat bg-right-bottom md:bg-[length:505px]">
          {navbarShowState ? (
            <nav
              id="navbar"
              className="transition-all fixed animate-slidetop w-full max-lg:h-screen max-lg:z-20 dark:bg-darkmobilemenu bg-lightmobilemenu  bg-cover bg-center bg-no-repeat"
            >
              <ul className="max-lg:flex-col max-lg:items-stretch flex w-full h-full">
                <section className="w-full h-[10%] flex justify-between items-center ">
                  <li className="dark:text-[#a76bcf] animate-slidetop max-lg:w-[80%] max-lg:animate-slidetop max-lg:ml-[5%] text-[#FFB562] max-lg:text-4xl font-bold tracking-widest">
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
                        className="invert w-[30px] transition-all"
                      />
                    </div>
                  </li>
                </section>
                <section className="flex h-[90%] justify-around items-center flex-col ">
                  <section className="flex justify-center items-center flex-col w-full">
                    <li
                      id="home"
                      onClick={(e) => handleScroll(e)}
                      className="max-lg:mt-2 max-lg:animate-slideleft max-lg:text-xl max-lg:inline inline tracking-tighter  text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition -all "
                      tabIndex="0"
                    >
                      Home
                    </li>
                    <li
                      tabIndex="0"
                      className="max-lg:mt-2 max-lg:animate-slideleft max-lg:text-xl max-lg:inline inline tracking-tighter text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all"
                    >
                      Features
                    </li>
                    <li
                      id="contact"
                      onClick={(e) => handleScroll(e)}
                      className="max-lg:mt-2 max-lg:animate-slideleft max-lg:text-xl max-lg:inline inline tracking-tighter text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all"
                      tabIndex="0"
                    >
                      Contact
                    </li>
                    <li
                      tabIndex="0"
                      id="mode"
                      onClick={handleModeChange}
                      className="max-lg:mt-2 max-lg:animate-slideleft max-lg:text-xl max-lg:inline inline tracking-tighter text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all"
                    >
                      {currentMode === "dark" ? "Dark" : "Light"}
                    </li>
                    <li
                      className="max-lg:mt-2 max-lg:animate-slideleft max-lg:text-xl max-lg:inline inline tracking-tighter text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all"
                      tabIndex="4"
                    >
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
                  </section>
                </section>
              </ul>
            </nav>
          ) : (
            <nav
              id="navbar"
              className="fixed animate-slidetop w-full max-sm:h-[10%] 2xl:h-[150px] xl:h-[120px]"
            >
              <ul className="flex w-full h-full justify-between items-center mt-2">
                <li className="dark:text-[#a76bcf] pointer-events-none animate-slidetop text-[#FFB562] max-sm:w-[30%] max-sm:text-4xl 2xl:w-[60%] xl:w-[60%] lg:w-[50%] md:w-[40%] sm:w-[35%] 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-5xl font-bold ml-[5%] tracking-widest">
                  Todooo
                </li>
                <li
                  tabIndex="0"
                  id="home"
                  onClick={(e) => handleScroll(e)}
                  className="dark:outline-[#a76bcf] outline-white outline-offset-4 focus:rounded-lg dark:hover:text-[#a76bcf] max-lg:hidden inline max-sm:text-xs max-sm:mr-[3%] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-sm text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all"
                >
                  Home
                </li>
                <li
                  onClick={handleApiRequest}
                  tabIndex="0"
                  className="dark:outline-[#a76bcf] outline-white outline-offset-4 focus:rounded-lg dark:hover:text-[#a76bcf] max-lg:hidden inline max-sm:text-xs max-sm:mr-[3%]  tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-sm text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all"
                >
                  Features
                </li>
                <li
                  tabIndex="0"
                  id="contact"
                  onClick={(e) => handleScroll(e)}
                  className="dark:outline-[#a76bcf] outline-white outline-offset-4 focus:rounded-lg dark:hover:text-[#a76bcf] max-lg:hidden inline max-sm:text-xs  max-sm:mr-[3%] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-sm text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all"
                >
                  Contact
                </li>
                <li
                  tabIndex="0"
                  id="mode"
                  onClick={handleModeChange}
                  className="dark:outline-[#a76bcf] outline-white outline-offset-4 focus:rounded-lg dark:hover:text-[#a76bcf]  max-lg:hidden inline max-sm:text-xs  max-sm:mr-[3%] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-sm text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all"
                >
                  {currentMode === "dark" ? "Dark" : "Light"}
                </li>
                <li className="mr-[10%] max-sm:mr-[4%]">
                  <Link
                    tabIndex="-1"
                    to="/sign-in"
                    className="focus:outline-none"
                  >
                    <button className="dark:outline-[#a76bcf] outline-white outline-offset-4 dark:bg-[#a76bcf] dark:hover:border-[#a76bcf] dark:hover:bg-transparent dark:hover:text-[#a76bcf] inline max-lg:hidden animate-fadein max-sm:text-xs max-sm:w-[120%] max-sm:h-[30px] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-base text-white bg-[#FFB562]  hover:text-[#FFB562] hover:tracking-widest hover:cursor-pointer transition-all w-[150%] h-[50px] rounded-xl hover:bg-transparent border-[3px] border-transparent hover:border-[#FFB562] ">
                      Sign In
                    </button>
                  </Link>
                </li>
                <li
                  onClick={handleResponsiveNavbar}
                  className="transition-all animate-slidetop w-auto h-auto hidden max-lg:flex max-lg:justify-center items-center max-lg:w-[20%]"
                >
                  <div className="space-y-2">
                    <img
                      src={Hamburger}
                      alt="Hamburger"
                      className="invert w-[30px] transition-all"
                    />
                  </div>
                </li>
              </ul>
            </nav>
          )}
          <MainPageLanding />
        </section>
      </div>
      <div
        tabIndex="0"
        className="bg-lightpgtwo outline-white dark:bg-darkpgtwo bg-cover bg-center bg-no-repeat w-full"
      >
        <InfoLanding side="left" />
      </div>
      <div
        tabIndex="0"
        className="bg-lightpgthree outline-white dark:bg-darkpgthree bg-cover bg-center bg-no-repeat w-full"
      >
        <InfoLanding side="right" />
      </div>
      <div
        tabIndex="0"
        ref={contactref}
        className="bg-lightcontact outline-white dark:bg-darkcontact bg-cover bg-center bg-no-repeat w-full"
      >
        <ContactForm />
      </div>
      <div
        tabIndex="0"
        className="bg-[#F7770F] outline-white dark:bg-[#121212]  w-full h-[300px] snap-center flex max-sm:flex-col justify-around"
      >
        <FooterLanding />
      </div>
      <div className="fixed top-0 z-10 w-full">
        <section className="w-full h-[8px]">
          <section
            className="h-[8px] bg-[#FFB562] dark:bg-[#a76bcf] "
            id="bar"
          ></section>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;

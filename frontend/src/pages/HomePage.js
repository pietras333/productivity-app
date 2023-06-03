/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/aria-role */
import { Transition } from "@tailwindui/react";
import { useState, useRef, useEffect, useMemo } from "react";
import wave from "../assets/illustrations/lightMode/wave.svg";
import waveDark from "../assets/illustrations/darkMode/wave.svg";
import alien from "../assets/illustrations/icons/alien.png";
import alien_grey from "../assets/illustrations/icons/alien_grey.png";
import alien_yellow from "../assets/illustrations/icons/alien_yellow.png";
import Register from "../components/Register";
import Login from "../components/Login";
import cancel_icon from "../assets/illustrations/icons/cancel.png";
import eye_icon from "../assets/illustrations/icons/eye.png";
import eye_closed_icon from "../assets/illustrations/icons/eye-closed.png";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isInLogin, setIsInLogin] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [language, setLanguage] = useState("en");
  const [dark, setDark] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const homeRef = useRef();
  const aboutRef = useRef();
  const featuresRef = useRef();
  const exploreRef = useRef();

  const navbarstyledefault =
    "fixed w-full h-[13%] max-md:h-[12%] flex font-bold z-50 border-b-transparent";
  const navbarstylescrolled =
    "fixed w-full h-[13%] max-md:h-[12%] flex font-bold z-50 bg-[#FFFDFA] dark:bg-[#14162E] dark:shadow-xl border-b-zinc-300 shadow-2xl shadow-zinc-300";
  let scrolled = 0;
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
    if (scrolled > 0) {
      navbar.className = navbarstylescrolled;
    } else {
      navbar.className = navbarstyledefault;
    }
  };

  const handleMenuChange = () => {
    setIsOpen((prev) => !prev);
    const m = document.getElementById("menu");
    const l = document.getElementById("list");
    if (!isOpen) {
      m.style.clipPath = "circle(50px at 30px 30px)";
      m.style.top = "-5.25rem";
      m.style.right = "0";
      m.style.left = "2.25rem";
      m.style.position = "fixed";
      m.style.width = "0";
      m.style.height = "0";
      l.style.color = "transparent";
    } else {
      m.style.clipPath = "circle(75%)";
      m.style.width = "100%";
      m.style.height = "100%";
      m.style.top = "0";
      m.style.right = "0";
      m.style.left = "0";
      m.style.position = "fixed";
      m.style.backgroundColor = "black";
      m.style.borderRadius = "0%";
      l.style.color = "white";
    }
  };

  const handleFormChange = (e) => {
    const id = e.target.id;
    if (id === "signIn") {
      return setIsInLogin(true);
    }
    return setIsInLogin(false);
  };

  const handleDropdown = () => {
    return setDropdown((prev) => !prev);
  };

  const loginTransition = useMemo(
    () => (
      <Transition
        appear={true}
        show={isInLogin}
        as="section"
        className="flex justify-center items-center w-full h-full"
        enter="transition-all duration-250 absolute top-0 left-0"
        enterFrom="opacity-0 top-[50%]"
        enterTo="opacity-100 top-0"
        leave="transition-all duration-250 absolute top-0 left-0"
        leaveFrom="opacity-100 top-0"
        leaveTo="opacity-0 top-[50%]"
      >
        <Login />
      </Transition>
    ),
    [isInLogin]
  );

  const registerTransition = useMemo(
    () => (
      <Transition
        appear={true}
        show={!isInLogin}
        as="section"
        className="w-full h-full flex justify-center items-center"
        enter="transition-all duration-250 absolute top-0 left-0"
        enterFrom="opacity-0 top-[-50%]"
        enterTo="opacity-100 top-0"
        leave="transition-all duration-250 absolute top-0 left-0"
        leaveFrom="opacity-100 top-0"
        leaveTo="opacity-0 top-[-50%]"
      >
        <Register />
      </Transition>
    ),
    [isInLogin]
  );

  const handleTheme = (e) => {
    const id = e.target.id;
    if (id === "dark") {
      return setDark(true);
    }
    return setDark(false);
  };

  const handleValueReset = (e) => {
    e.preventDefault();
    const id = e.target.id;
    switch (id) {
      case "first-name-reset":
        return setFirstName("");
      case "last-name-reset":
        return setLastName("");
      case "email-reset-contact":
        return setEmail("");
      default:
        setFirstName("");
        setLastName("");
        return setEmail("");
    }
  };

  return (
    <section className={`${dark ? "dark" : ""}`}>
      <section
        ref={homeRef}
        id="home"
        className={`bg-home bg-white dark:bg-homeDark dark:bg-[#14162E] max-md:bg-3/4 relative bg-center bg-cover bg-no-repeat w-full h-screen flex max-md:flex-col font-Oswald`}
      >
        <nav
          id="navbar"
          className="fixed tranistion-all w-full h-[13%] max-md:h-[12%] flex font-bold z-50 border-b-transparent"
        >
          <ul className="w-7/12 z-50 dark:text-[#FFFDFA] max-md:w-0 h-full max-lg:justify-start justify-around flex tracking-wide items-center max-xl:text-xl text-2xl">
            <li className="xl:hidden 2xl:hidden lg:hidden top-5 max-md:left-5 flex left-24 fixed">
              <nav
                id="menu"
                className="xl:hidden 2xl:hidden lg:hidden top-5 max-md:left-5 fixed menuClip flex justify-center items-center"
              >
                <ul
                  id="list"
                  className="w-full h-1/2 flex flex-col justify-around items-center text-transparent relative"
                >
                  <li className="ml-[5%] currentTabDisplay hover:text-green-500 border-b-2 border-b-transparent hover:border-b-green-500 hover:cursor-pointer">
                    Home
                  </li>

                  <li className="ml-[5%] currentTabDisplay hover:text-green-500 border-b-2 border-b-transparent hover:border-b-green-500 hover:cursor-pointer">
                    About
                  </li>
                  <li className="ml-[5%] currentTabDisplay hover:text-green-500 border-b-2 border-b-transparent hover:border-b-green-500 hover:cursor-pointer">
                    Features
                  </li>
                  <li className="ml-[5%] currentTabDisplay hover:text-green-500 border-b-2 border-b-transparent hover:border-b-green-500 hover:cursor-pointer">
                    Explore
                  </li>
                </ul>
              </nav>

              <button
                onClick={handleMenuChange}
                className="mr-5 flex z-50 justify-center items-center flex-col bg-black w-[50px] h-[50px] p-4 rounded-[40%]"
              >
                <hr className="bg-[#FFFDFA] w-[100%] rounded-xl h-[4px] mb-1" />
                <hr className="bg-[#FFFDFA] w-[90%] rounded-xl h-[4px]" />
              </button>
            </li>
            <li
              id="homeRef"
              className="ml-[5%] hover:text-green-500 max-lg:hidden border-b-2 border-b-transparent hover:border-b-green-500 hover:cursor-pointer"
            >
              Home
            </li>
            <li
              id="aboutRef"
              className="ml-[5%] hover:text-green-500 max-lg:hidden border-b-2 border-b-transparent hover:border-b-green-500 hover:cursor-pointer"
            >
              About
            </li>
            <li
              id="featuresRef"
              className="ml-[5%] hover:text-green-500 max-lg:hidden border-b-2 border-b-transparent hover:border-b-green-500 hover:cursor-pointer"
            >
              Features
            </li>
            <li
              id="exploreRef"
              className="ml-[5%] hover:text-green-500 max-lg:hidden border-b-2 border-b-transparent hover:border-b-green-500 hover:cursor-pointer"
            >
              Explore
            </li>
          </ul>
          <ul className="dark:text-[#FFFDFA] justify-center relative w-5/12 max-lg:w-3/4 max-md:w-full max-md:ml-0 max-md:justify-end h-full flex items-center max-xl:text-lg max-md:text-base text-xl">
            <li className="ml-[5%] flex flex-col justify-center items-center hover:cursor-pointer ">
              <section className="flex">
                <span id="en" onClick={handleDropdown}>
                  Theme
                </span>
                <span className="rotate-90 ml-1 text-indigo-600 dark:text-[#FFFDFA] -z-10">
                  &gt;
                </span>
              </section>
              <Transition
                show={dropdown}
                as="ul"
                className="absolute top-[50%] mt-5 bg-indigo-600 dark:bg-[#03D0B1] p-4 rounded-xl text-white z-50"
                enter="transition-all duration-250"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-all duration-250"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <li
                  id="dark"
                  onClick={(e) => {
                    handleTheme(e);
                  }}
                  className="hover:text-green-500"
                >
                  Dark
                </li>
                <li
                  onClick={(e) => {
                    handleTheme(e);
                  }}
                  id="light"
                  className="hover:text-green-500"
                >
                  Light
                </li>
              </Transition>
            </li>
            {isInLogin ? (
              <li
                id="signIn"
                onClick={(e) => {
                  handleFormChange(e);
                }}
                className="ml-[5%] dark:text-[#03D0B1] dark:border-[#03D0B1] text-indigo-600 border-2 border-indigo-500 p-2 rounded-2xl hover:cursor-pointer"
              >
                Sign In
              </li>
            ) : (
              <li
                id="signIn"
                onClick={(e) => {
                  handleFormChange(e);
                }}
                className="ml-[5%] dark:text-[#03D0B1] dark:hover:border-[#03D0B1] text-indigo-600 border-2 border-transparent hover:border-indigo-500 p-2 rounded-2xl hover:cursor-pointer"
              >
                Sign In
              </li>
            )}

            {!isInLogin ? (
              <li
                id="getStarted"
                onClick={(e) => {
                  handleFormChange(e);
                }}
                className="ml-[5%] dark:text-[#03D0B1] dark:border-[#03D0B1] max-md:mr-5 text-indigo-600 border-2 border-indigo-500 p-2 rounded-2xl hover:cursor-pointer"
              >
                Get Started
              </li>
            ) : (
              <li
                id="getStarted"
                onClick={(e) => {
                  handleFormChange(e);
                }}
                className="ml-[5%] dark:text-[#03D0B1] dark:hover:border-[#03D0B1] max-md:mr-5 text-indigo-600 border-2 border-transparent hover:border-indigo-500 p-2 rounded-2xl hover:cursor-pointer"
              >
                Get Started
              </li>
            )}
          </ul>
        </nav>
        <section className="w-full h-full flex max-md:flex-col max-md:backdrop-blur-md">
          <section className="w-7/12 h-full max-md:h-1/2 max-md:w-full max-md:flex z-40">
            <header className="w-full h-full max-md:flex max-md:justify-center max-md:items-center max-md:flex-col">
              <section className="h-3/5 max-md:h-auto w-3/4 max-md:w-full flex items-center max-md:justify-center max-md:items-end max-md:mt-24">
                <h1 className="dark:text-[#FFFDFA] text-8xl max-xl:text-7xl max-lg:text-6xl max-md:text-6xl font-bold max-md:m-0 mt-24 ml-24 flex flex-col">
                  <span className="w-full">Sign In To</span>
                  <span className="w-full">Direct Space</span>
                </h1>
              </section>
              <section className="max-md:hidden h-2/5 max-md:h-auto w-3/4 max-md:w-full flex max-md:justify-center max-md:items-end">
                <h2 className="dark:text-[#FFFDFA] text-2xl max-md:w-full max-md:text-green-500 max-md:justify-center max-md:items-center max-xl:text-xl max-lg:text-lg max-md:text-lg max-md:m-0 ml-24 flex flex-col">
                  <span className="w-full max-md:w-auto">
                    If you don't have
                  </span>
                  <span className="w-full max-md:w-auto">
                    An account you can
                  </span>
                  <span className="w-full max-md:w-auto dark:text-[#03D0B1] text-indigo-600 font-bold hover:cursor-pointer border-b-2 border-transparent hover:border-b-green-500 hover:text-green-500">
                    Register Here!👋
                  </span>
                </h2>
              </section>
            </header>
          </section>
          <section className="w-5/12 max-xl:w-1/2 max-lg:w-3/4 max-md:w-full max-md:h-1/3 h-full flex justify-center items-center z-40">
            <section className="w-full h-3/4 flex justify-center items-center relative">
              {loginTransition}
              {registerTransition}
            </section>
          </section>
        </section>

        <img
          src={dark ? waveDark : wave}
          alt="wave"
          className="absolute -bottom-px right-0 left-0 z-30"
        />
      </section>
      <section
        ref={aboutRef}
        className="relative w-screen h-screen bg-features dark:bg-featuresDark bg-no-repeat bg-cover bg-center flex"
      >
        <img
          src={dark ? waveDark : wave}
          alt="wave"
          className="absolute -top-px rotate-180 right-0 left-0 z-30"
        />
        <main className="w-1/2 max-xl:w-3/4 h-full pl-24 text-black dark:text-white flex justify-center items-center flex-col">
          <h3 className="text-8xl max-xl:text-8xl max-md:text-5xl w-full font-bold">
            Where Efficiency Takes Flight!
          </h3>
          <p className="text-2xl max-xl:text-xl">
            Streamlined productivity app, simplifying tasks, calendars, and
            communication for optimal efficiency and success.
          </p>
          <span className="w-full z-40 text-2xl max-md:w-auto dark:text-[#03D0B1] text-indigo-600 font-bold hover:cursor-pointer hover:text-green-500">
            Know More
          </span>
        </main>
        <section className="w-1/2 max-xl:w-1/4 h-full flex justify-center items-center">
          <img src={alien_grey} alt="alien_grey" />
        </section>
        <img
          src={dark ? waveDark : wave}
          alt="wave"
          className="absolute -bottom-px right-0 left-0 z-30"
        />
      </section>
      <section
        ref={featuresRef}
        className="w-screen relative h-screen bg-features dark:bg-featuresDark bg-no-repeat bg-cover bg-center flex"
      >
        <img
          src={dark ? waveDark : wave}
          alt="wave"
          className="absolute -bottom-px right-0 left-0 z-30"
        />
        <img
          src={dark ? waveDark : wave}
          alt="wave"
          className="absolute -top-px rotate-180 right-0 left-0 z-30"
        />
        <section className="w-1/2 max-xl:w-1/4 h-full flex justify-center items-center">
          <img src={alien} alt="blue alien" />
        </section>
        <main className="w-1/2 max-xl:w-3/4 h-full pr-24 text-black dark:text-white flex justify-center items-center flex-col">
          <h3 className="text-8xl max-xl:text-8xl max-md:text-5xl w-full font-bold">
            Elevate Your Productivity to Infinity and Beyond!
          </h3>
          <p className="text-2xl max-xl:text-xl ">
            Where productivity soars to new heights, unleashing your full
            potential for boundless success.
          </p>
          <span className="w-full text-2xl z-40 max-md:w-auto dark:text-[#03D0B1] text-indigo-600 font-bold hover:cursor-pointer hover:text-green-500">
            Know More
          </span>
        </main>
      </section>
      <section
        ref={exploreRef}
        className="w-screen h-screen bg-indigo-600 dark:bg-[#14162E] flex relative"
      >
        <main className="w-1/2 max-xl:w-3/4 max-md:w-full h-full flex justify-center items-center">
          <form
            action=""
            className="w-3/4 max-md:w-11/12 h-4/5 bg-white dark:bg-[#03D0B1] rounded-xl"
          >
            <h3 className="w-full h-1/5 max-md:text-3xl text-center text-4xl font-bold tracking-widest mt-5">
              Love to hear from you!👋
            </h3>
            <section className="w-full h-5/6 ">
              <section className="w-full h-1/5 flex justify-center items-center">
                <section className="w-3/4 max-xl:w-11/12 h-full flex max-md:flex-col">
                  <section className="flex w-full h-full">
                    <input
                      name="first-name-contact"
                      type="text"
                      placeholder="First Name👋"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      value={firstName}
                      className="shadow-xl  shadow-zinc-300 focus:shadow-zinc-500 w-11/12 h-14 max-md:h-10 max-xl:text-lg focus:bg-indigo-500 focus:text-white focus:placeholder:text-white bg-[#EAF0F7] rounded-l-xl pl-4 text-xl outline-none"
                    />
                    <button
                      id="first-name-reset"
                      onClick={(e) => {
                        handleValueReset(e);
                      }}
                      className="w-2/12 h-14 max-md:h-10 hover:bg-green-500 bg-[#EAF0F7] rounded-r-xl flex justify-center items-center"
                    >
                      <img src={cancel_icon} alt="cancel" />
                    </button>
                  </section>
                  <section className="flex w-full h-ful">
                    <input
                      name="last-name-contact"
                      type="text"
                      placeholder="Last Name🙌"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      value={lastName}
                      className="shadow-xl shadow-zinc-300 focus:shadow-zinc-500 w-11/12 h-14 ml-1 max-md:h-10 max-xl:text-lg focus:bg-indigo-500 focus:text-white focus:placeholder:text-white bg-[#EAF0F7] rounded-l-xl pl-4 text-xl outline-none"
                    />
                    <button
                      id="first-name-reset"
                      onClick={(e) => {
                        handleValueReset(e);
                      }}
                      className="w-2/12 h-14 max-md:h-10 hover:bg-green-500 bg-[#EAF0F7] rounded-r-xl flex justify-center items-center"
                    >
                      <img src={cancel_icon} alt="cancel" />
                    </button>
                  </section>
                </section>
              </section>
              <section className="w-full max-md:mt-10 h-1/5 flex justify-center items-center">
                <section className="w-3/4 max-xl:w-11/12 h-full flex">
                  <input
                    name="email-contact"
                    type="email"
                    placeholder="Enter Email👀"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    className="shadow-xl shadow-zinc-300 focus:shadow-zinc-500 w-11/12 h-14 max-md:h-10 max-xl:text-lg focus:bg-indigo-500 focus:text-white focus:placeholder:text-white bg-[#EAF0F7] rounded-l-xl pl-4 text-xl outline-none"
                  />
                  <button
                    id="email-reset-contact"
                    onClick={(e) => {
                      handleValueReset(e);
                    }}
                    className="w-2/12 h-14 max-md:h-10 hover:bg-green-500 bg-[#EAF0F7] rounded-r-xl flex justify-center items-center"
                  >
                    <img src={cancel_icon} alt="cancel" />
                  </button>
                </section>
              </section>
              <section className="w-full h-2/5 flex justify-center items-center">
                <section className="w-3/4 max-xl:w-11/12 h-full flex">
                  <input
                    name="message"
                    type="text"
                    placeholder="Enter your message🧠"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    message={firstName}
                    className="shadow-xl focus:shadow-zinc-500 shadow-zinc-300 w-full h-full max-xl:text-lg focus:bg-indigo-500 focus:text-white focus:placeholder:text-white bg-[#EAF0F7] rounded-xl pl-4 text-xl outline-none"
                  />
                </section>
              </section>
            </section>
          </form>
        </main>
        <section className="w-1/2 max-xl:w-1/4 max-md:hidden h-full flex justify-center items-center">
          <img src={alien_yellow} alt="yellow alien" />
        </section>
      </section>
    </section>
  );
};

export default HomePage;

/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/aria-role */
import useIntersection from "../components/useIntersection.js";
import { useState, useEffect, useMemo, useRef } from "react";
import cancel_icon from "../assets/illustrations/icons/cancel.png";
import eye_icon from "../assets/illustrations/icons/eye.png";
import eye_closed_icon from "../assets/illustrations/icons/eye-closed.png";
import apple from "../assets/illustrations/icons/apple.png";
import google from "../assets/illustrations/icons/google.png";
import facebook from "../assets/illustrations/icons/facebook.png";
import wave from "../assets/illustrations/lightMode/wave.svg";
import alien from "../assets/illustrations/icons/alien.png";
import alien_grey from "../assets/illustrations/icons/alien_grey.png";
import alien_yellow from "../assets/illustrations/icons/alien_yellow.png";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const homeRef = useRef();
  const aboutRef = useRef();
  const featuresRef = useRef();
  const exploreRef = useRef();

  const inHome = useIntersection(homeRef, "-200px");

  const inAbout = useIntersection(aboutRef, "-200px");

  const inFeatures = useIntersection(featuresRef, "-200px");

  const inExplore = useIntersection(exploreRef, "-200px");

  // console.log(ref1);
  // const inViewport = useIntersection(ref1, "200px");

  // if (inViewport && ref1) {
  //   ref1.current?.classList.add("load-left");
  //   ref1.current?.classlist.remove("un-load-left");
  // } else {
  //   ref1.current?.classList.add("un-load-left");
  //   ref1.current?.classList.remove("load-left");
  // }

  const navbarstyledefault =
    "fixed w-full h-[13%] max-md:h-[12%] flex font-bold z-50 border-b-transparent";
  const navbarstylescrolled =
    "fixed w-full h-[13%] max-md:h-[12%] flex font-bold z-50 bg-[#FFFDFA] border-b-zinc-300 shadow-2xl shadow-zinc-300";
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

  return (
    <>
      <section
        ref={homeRef}
        id="home"
        className="bg-home only:relative bg-center bg-cover bg-no-repeat w-full h-screen flex max-md:flex-col font-Oswald"
      >
        <nav
          id="navbar"
          className="fixed tranistion-all w-full h-[13%] max-md:h-[12%] flex font-bold z-50  border-b-transparent"
        >
          <ul className="w-7/12 max-md:w-0 h-full max-lg:justify-start justify-around flex tracking-wide items-center max-xl:text-xl text-2xl">
            <li className="xl:hidden 2xl:hidden lg:hidden top-5 max-md:left-5 flex left-24 fixed">
              <nav
                id="menu"
                className="xl:hidden 2xl:hidden lg:hidden top-5 max-md:left-5 z-40 fixed menuClip flex justify-center items-center"
              >
                <ul
                  id="list"
                  className="w-full h-1/2 flex flex-col justify-around items-center text-transparent relative"
                >
                  <li className="ml-[5%] hover:text-green-500 border-b-2 border-b-transparent hover:border-b-green-500 hover:cursor-pointer">
                    Home
                  </li>
                  <li className="ml-[5%] hover:text-green-500 border-b-2 border-b-transparent hover:border-b-green-500 hover:cursor-pointer">
                    About
                  </li>
                  <li className="ml-[5%] hover:text-green-500 border-b-2 border-b-transparent hover:border-b-green-500 hover:cursor-pointer">
                    Features
                  </li>
                  <li className="ml-[5%] hover:text-green-500 border-b-2 border-b-transparent hover:border-b-green-500 hover:cursor-pointer">
                    Explore
                  </li>
                </ul>
              </nav>

              <button
                onClick={handleMenuChange}
                className="mr-5 flex z-40 justify-center items-center flex-col bg-black w-[50px] h-[50px] p-4 rounded-[40%]"
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
          <ul className="justify-center w-5/12 max-lg:w-3/4 max-md:w-full max-md:ml-0 max-md:justify-end h-full flex items-center max-xl:text-lg max-md:text-base text-xl">
            <li className="ml-[5%] flex hover:cursor-pointer">
              <span>English</span>
              <span className="rotate-90 ml-1 text-indigo-600 -z-10">&gt;</span>
            </li>
            <li className="ml-[5%] text-indigo-600 border-2 border-transparent hover:border-indigo-500 p-2 rounded-2xl hover:cursor-pointer">
              Sign In
            </li>
            <li className="ml-[5%] max-md:mr-5 text-indigo-600  border-2 border-transparent hover:border-indigo-500 p-2 rounded-2xl hover:cursor-pointer">
              Get Started
            </li>
          </ul>
        </nav>
        <section className="w-full h-full flex max-md:flex-col max-md:backdrop-blur-md">
          <section className="w-7/12 h-full max-md:h-1/2 max-md:w-full max-md:flex z-40">
            <header className="w-full h-full max-md:flex max-md:justify-center max-md:items-center max-md:flex-col">
              <section className="h-3/5 max-md:h-auto w-3/4 max-md:w-full flex items-center max-md:justify-center max-md:items-end max-md:mt-24">
                <h1 className="text-8xl max-xl:text-7xl max-lg:text-6xl max-md:text-6xl font-bold max-md:m-0 mt-24 ml-24 flex flex-col">
                  <span className="w-full">Sign In To</span>
                  <span className="w-full">Direct Space</span>
                </h1>
              </section>
              <section className="max-md:hidden h-2/5 max-md:h-auto w-3/4 max-md:w-full flex max-md:justify-center max-md:items-end">
                <h2 className="text-2xl max-md:w-full max-md:text-green-500 max-md:justify-center max-md:items-center max-xl:text-xl max-lg:text-lg max-md:text-lg max-md:m-0 ml-24 flex flex-col">
                  <span className="w-full max-md:w-auto">
                    If you don't have
                  </span>
                  <span className="w-full max-md:w-auto">
                    An account you can
                  </span>
                  <span className="w-full max-md:w-auto text-indigo-600 font-bold hover:cursor-pointer border-b-2 border-transparent hover:border-b-green-500 hover:text-green-500">
                    Register Here!👋
                  </span>
                </h2>
              </section>
            </header>
          </section>
          <section className="w-5/12 max-xl:w-1/2 max-lg:w-3/4 max-md:w-full max-md:h-1/3 h-full flex justify-center items-center z-40">
            <section className="w-full h-3/4 flex justify-center items-center">
              <form
                action=""
                className="h-3/4 w-10/12 flex flex-col justify-around items-center"
              >
                <section className="w-3/4 flex flex-col justify-around items-center">
                  <section className="w-full flex">
                    <input
                      type="email"
                      placeholder="Enter Email👈"
                      className="w-11/12 h-14 max-md:h-10 max-md:text-lg focus:bg-indigo-500 focus:text-white focus:placeholder:text-white bg-[#EAF0F7] rounded-l-xl pl-4 text-xl outline-none"
                    />
                    <button className="w-2/12 h-14 max-md:h-10 hover:bg-green-500 bg-[#EAF0F7] rounded-r-xl flex justify-center items-center">
                      <img src={cancel_icon} alt="cancel" />
                    </button>
                  </section>
                  <section className="w-full flex mt-5">
                    <input
                      type="password"
                      placeholder="..."
                      className="w-10/12 h-14 max-md:h-10 max-md:text-lg focus:bg-indigo-500 focus:text-white focus:placeholder:text-white bg-[#EAF0F7] rounded-l-xl pl-4 text-xl outline-none"
                    />
                    <button className="w-2/12 h-14 max-md:h-10 hover:bg-green-500 bg-[#EAF0F7] rounded-r-xl flex justify-center items-center">
                      <img src={eye_closed_icon} alt="password hidden" />
                    </button>
                  </section>
                  <h3 className="w-full text-right max-md:text-base text-indigo-600 font-bold text-lg hover:cursor-pointer hover:text-green-500">
                    Forgot Password?
                  </h3>
                  <section className="mt-10 max-md:m-0 max-md:mt-12  w-full flex justify-center items-center">
                    <button className="w-3/4 h-14 max-md:h-10 max-md:text-xl text-2xl text-white bg-indigo-600 rounded-xl hover:tracking-widest">
                      Sign In
                    </button>
                  </section>
                  <section className="mt-10 max-md:m-0 max-md:mt-12 w-full flex justify-around items-center">
                    <hr className="border-black w-1/4" />
                    <h3 className="w-1/2 text-center text-black ">
                      Or Continue With
                    </h3>
                    <hr className="border-black w-1/4" />
                  </section>
                  <section className="mt-5 max-md:m-0 flex w-3/4 max-lg:w-full justify-around items-center">
                    <button className="w-[70px] max-md:w-[50px] max-md:h-[50px] hover:shadow-green-500 hover:shadow-2xl h-[70px] flex justify-center items-center bg-white shadow-xl shadow-zinc-400 rounded-[50%]">
                      <img src={google} alt="google" className="w-1/2" />
                    </button>
                    <button className="w-[70px] max-md:w-[50px] max-md:h-[50px] hover:shadow-green-500 hover:shadow-2xl h-[70px] flex justify-center items-center bg-white shadow-xl shadow-zinc-400 rounded-[50%]">
                      <img src={apple} alt="apple" className="w-1/2" />
                    </button>
                    <button className="w-[70px] max-md:w-[50px] max-md:h-[50px] hover:shadow-green-500 hover:shadow-2xl h-[70px] flex justify-center items-center bg-white shadow-xl shadow-zinc-400 rounded-[50%]">
                      <img src={facebook} alt="facebook" className="w-1/2" />
                    </button>
                  </section>
                </section>
              </form>
            </section>
          </section>
        </section>

        <img
          src={wave}
          alt="wave"
          className="absolute -bottom-px right-0 left-0 z-30"
        />
      </section>
      <section
        ref={aboutRef}
        className="relative w-screen h-screen bg-features bg-no-repeat bg-cover bg-center flex"
      >
        <img
          src={wave}
          alt="wave"
          className="absolute -top-px rotate-180 right-0 left-0 z-30"
        />
        <main className="w-1/2 max-xl:w-3/4 h-full pl-24 text-black flex justify-center items-center flex-col">
          <h3 className="text-9xl max-xl:text-8xl max-md:text-5xl w-full font-bold">
            Lorem ipsum dolor sit.
          </h3>
          <p className="text-2xl max-xl:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            aliquid ullam cumque hic excepturi cupiditate vel possimus
            voluptatem a accusamus?
          </p>
          <span className="w-full text-2xl max-md:w-auto text-indigo-600 font-bold hover:cursor-pointer border-b-2 border-transparent hover:border-b-green-500 hover:text-green-500">
            Know More
          </span>
        </main>
        <section className="w-1/2 max-xl:w-1/4 h-full flex justify-center items-center">
          <img src={alien_grey} alt="alien_grey" />
        </section>
        <img
          src={wave}
          alt="wave"
          className="absolute -bottom-px right-0 left-0 z-30"
        />
      </section>
      <section
        ref={featuresRef}
        className="w-screen relative h-screen bg-features bg-no-repeat bg-cover bg-center flex"
      >
        <img
          src={wave}
          alt="wave"
          className="absolute -bottom-px right-0 left-0 z-30"
        />
        <img
          src={wave}
          alt="wave"
          className="absolute -top-px rotate-180 right-0 left-0 z-30"
        />
        <section className="w-1/2 max-xl:w-1/4 h-full flex justify-center items-center">
          <img src={alien} alt="blue alien" />
        </section>
        <main className="w-1/2 max-xl:w-3/4 h-full pr-24 text-black flex justify-center items-center flex-col">
          <h3 className="text-9xl max-xl:text-8xl max-md:text-5xl w-full font-bold">
            Lorem ipsum dolor sit.
          </h3>
          <p className="text-2xl max-xl:text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            aliquid ullam cumque hic excepturi cupiditate vel possimus
            voluptatem a accusamus?
          </p>
          <span className="w-full text-2xl max-md:w-auto text-indigo-600 font-bold hover:cursor-pointer border-b-2 border-transparent hover:border-b-green-500 hover:text-green-500">
            Know More
          </span>
        </main>
      </section>
      <section
        ref={exploreRef}
        className="w-screen h-screen bg-indigo-600 flex relative"
      >
        <main className="w-1/2 max-xl:w-3/4 max-md:w-full h-full flex justify-center items-center">
          <form
            action=""
            className="w-3/4 max-md:w-11/12 h-4/5 bg-white rounded-xl"
          >
            <h3 className="w-full h-1/5 max-md:text-3xl text-center text-4xl font-bold tracking-widest mt-5">
              Love to hear from you!👋
            </h3>
            <section className="w-full h-5/6 ">
              <section className="w-full h-1/5 flex justify-center items-center">
                <section className="w-3/4 max-xl:w-11/12 h-full flex max-md:flex-col">
                  <section className="flex w-full h-full">
                    <input
                      type="text"
                      placeholder="First Name👋"
                      className="shadow-xl  shadow-zinc-300 focus:shadow-zinc-500 w-11/12 h-14 max-md:h-10 max-xl:text-lg focus:bg-indigo-500 focus:text-white focus:placeholder:text-white bg-[#EAF0F7] rounded-l-xl pl-4 text-xl outline-none"
                    />
                    <button className="w-2/12 h-14 max-md:h-10 hover:bg-green-500 bg-[#EAF0F7] rounded-r-xl flex justify-center items-center">
                      <img src={cancel_icon} alt="cancel" />
                    </button>
                  </section>
                  <section className="flex w-full h-ful">
                    <input
                      type="text"
                      placeholder="Last Name🙌"
                      className="shadow-xl shadow-zinc-300 focus:shadow-zinc-500 w-11/12 h-14 ml-1 max-md:h-10 max-xl:text-lg focus:bg-indigo-500 focus:text-white focus:placeholder:text-white bg-[#EAF0F7] rounded-l-xl pl-4 text-xl outline-none"
                    />
                    <button className="w-2/12 h-14 max-md:h-10 hover:bg-green-500 bg-[#EAF0F7] rounded-r-xl flex justify-center items-center">
                      <img src={cancel_icon} alt="cancel" />
                    </button>
                  </section>
                </section>
              </section>
              <section className="w-full max-md:mt-10 h-1/5 flex justify-center items-center">
                <section className="w-3/4 max-xl:w-11/12 h-full flex">
                  <input
                    type="email"
                    placeholder="Enter Email👀"
                    className="shadow-xl shadow-zinc-300 focus:shadow-zinc-500 w-11/12 h-14 max-md:h-10 max-xl:text-lg focus:bg-indigo-500 focus:text-white focus:placeholder:text-white bg-[#EAF0F7] rounded-l-xl pl-4 text-xl outline-none"
                  />
                  <button className="w-2/12 h-14 max-md:h-10 hover:bg-green-500 bg-[#EAF0F7] rounded-r-xl flex justify-center items-center">
                    <img src={cancel_icon} alt="cancel" />
                  </button>
                </section>
              </section>
              <section className="w-full h-2/5 flex justify-center items-center">
                <section className="w-3/4 max-xl:w-11/12 h-full flex">
                  <input
                    type="text"
                    placeholder="Enter your message🧠"
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
    </>
  );
};

export default HomePage;

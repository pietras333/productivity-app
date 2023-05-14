/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/aria-role */
import { useState, useEffect, useMemo, useRef } from "react";
import useIntersection from "../components/useIntersection";
import alien from "../assets/illustrations/aliens/alien_yellow.png";
import monster from "../assets/illustrations/aliens/monster.png";
import alien_dumb from "../assets/illustrations/aliens/alien_red_dumb.png";
import alien_hoodie from "../assets/illustrations/aliens/alien_red.png";
import clock from "../assets/illustrations/icons/clock.png";
import mind from "../assets/illustrations/icons/open-mind.png";
import rocket from "../assets/illustrations/icons/rocket.png";
const HomePage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const ref1 = useRef();
  // console.log(ref1);
  // const inViewport = useIntersection(ref1, "200px");

  // if (inViewport && ref1) {
  //   ref1.current?.classList.add("load-left");
  //   ref1.current?.classlist.remove("un-load-left");
  // } else {
  //   ref1.current?.classList.add("un-load-left");
  //   ref1.current?.classList.remove("load-left");
  // }

  const handleMenuChange = () => {
    setIsOpen((prev) => !prev);
    const m = document.getElementById("menu");
    if (!isOpen) {
      m.style.clipPath = "circle(25px at 30px 30px)";
      m.style.top = "-10rem";
      m.style.right = "0";
      m.style.width = "0%";
      m.style.height = "0%";
      m.style.position = "fixed";
    } else {
      m.style.clipPath = "circle(75%)";
      m.style.width = "100%";
      m.style.height = "100%";
      m.style.top = "0";
      m.style.right = "0";
      m.style.position = "fixed";
    }
  };

  const home = document.getElementById("home");
  const forepage = document.getElementById("forepage");
  if (forepage) {
    forepage.addEventListener("mousemove", (e) => {
      const x = (-e.offsetX / window.screen.width) * 200;
      const y = (-e.offsetY / window.screen.height) * 200;
      home.style.backgroundPositionX = x + "px";
      home.style.backgroundPositionY = y + "px";
    });
  }

  return (
    <>
      <section id="home" className="w-full h-screen font-baloobhai bg-home">
        <nav className="fixed w-full h-[140px] top-0 right-0 z-40 load-top">
          <ul className="flex justify-center max-lg:justify-between items-center">
            <li className="z-40 max-md:fixed max-md:left-[1.25rem] max-md:top-0 max-md:w-1/2 flex max-lg:w-1/4 w-1/3 max-2xl:w-1/4 ml-20 max-xl:ml-12 max-lg:ml-5 mt-5 justify-start">
              <img
                src={monster}
                alt="monster"
                className="w-[90px] max-lg:w-[65px] max-lg:h-[65px] max-2xl:w-[60px] max-2xl:h-[60px] max-xl:w-[55px] max-xl:h-[55px]"
              />
              <section className="flex justify-center items-start flex-col">
                <h1 className="max-xl:text-xl max-lg:text-xl text-2xl text-[#FC7F58] font-thin tracking-widest">
                  alien
                </h1>
                <h1 className="max-xl:text-2xl max-lg:text-2xl text-4xl max-2xl:text-3xl text-[#1f1f1f] font-bold">
                  company
                </h1>
              </section>
            </li>
            <section
              id="menu"
              className="max-lg:fixed max-lg:bg-[#FFFDFA] max-lg:top-[-10rem] max-lg:right-[1.25rem] max-lg:menuClip max-lg:w-0 max-lg:h-0 w-1/2 h-full z-30"
            >
              <section
                id="menu-list"
                className="flex w-full max-lg:flex-col max-lg:text-3xl max-lg:bg-home max-lg:w-full max-lg:h-full z-40 justify-center items-center mt-5 text-2xl max-2xl:w-full max-xl:text-xl"
              >
                <li className="flex p-6 max-lg:p-2 z-40">
                  <h2 className="hover:cursor-pointer hover:text-[#FC7F58] border-b-2 border-b-transparent hover:border-[#FC7F58]">
                    Home
                  </h2>
                </li>
                <li className="flex p-6 max-lg:p-2">
                  <h2 className="hover:cursor-pointer hover:text-[#FC7F58] border-b-2 border-b-transparent hover:border-[#FC7F58]">
                    About Us
                  </h2>
                </li>
                <li className="flex p-6 max-lg:p-2">
                  <h2 className="hover:cursor-pointer hover:text-[#FC7F58] border-b-2 border-b-transparent hover:border-[#FC7F58]">
                    Features
                  </h2>
                </li>
                <li className="flex p-6 max-lg:p-2">
                  <h2 className="hover:cursor-pointer hover:text-[#FC7F58] border-b-2 border-b-transparent hover:border-[#FC7F58]">
                    Reviews
                  </h2>
                </li>
              </section>
            </section>
            <section className="z-40 max-lg:fixed max-lg:right-[1.25rem] max-lg:top-0 w-1/6 mr-20 max-xl:mr-12 max-lg:mr-5 max-lg:w-1/4 mt-5 flex justify-end ">
              <button className="max-lg:hidden hover:border-[#FC7F58] hover:text-[#FC7F58] border-[2px] p-2 border-[#1f1f1f] max-2xl:text-2xl max-xl:text-xl text-3xl max-lg:text-lg rounded-3xl">
                Get Started
              </button>
              <button
                onClick={handleMenuChange}
                className="hidden max-lg:flex mr-5 z-10 justify-center items-center flex-col bg-[#FC7F58] w-[50px] h-[50px] p-4 rounded-[40%]"
              >
                <hr className="bg-[#FFFDFA] w-[100%] rounded-xl h-[4px] mb-1" />
                <hr className="bg-[#FFFDFA] w-[90%] rounded-xl h-[4px]" />
              </button>
            </section>
          </ul>
        </nav>
        <section id="forepage" className="flex w-full h-full">
          <section className="load-left w-1/2 h-full flex justify-center items-center">
            <header className="w-full h-1/2">
              <section className="ml-24 max-xl:ml-12 w-full">
                <h3 className="text-[#FC7F58] text-4xl max-xl:text-3xl max-lg:text-2xl ml-2">
                  alien.co
                </h3>
                <h2 className="text-[#FC7F58] text-9xl max-2xl:text-8xl max-xl:text-7xl max-lg:text-6xl">
                  <p className="text-[#1f1f1fbb]">ALIENS MADE ME</p>
                  <p className="font-bold">DO THAT!</p>
                </h2>
              </section>
              <section className="ml-24 max-xl:ml-12 max-xl:w-full">
                <p className="text-[#1f1f1fbb] text-3xl max-2xl:text-2xl max-xl:text-lg max-lg:text-lg ml-2">
                  Help yourself and your team plan your day in more efficient
                  way!
                </p>
                <button className="bg-[#1f1f1f] mt-2 hover:tracking-widest w-[190px] max-xl:text-xl max-xl:w-[150px] max-lg:text-lg text-2xl ml-2 text-white p-4 rounded-3xl">
                  Know More
                </button>
              </section>
            </header>
          </section>
          <section className="load-right w-full h-full flex justify-end items-center">
            <section className="bg-pentagon w-3/4 h-full bg-cover bg-center bg-no-repeat flex justify-center items-center">
              <img src={alien} alt="yellow alien" className="max-2xl:w-3/4" />
            </section>
          </section>
        </section>
      </section>
      <section className="w-full h-screen font-baloobhai bg-white">
        <h2 className="w-full h-1/2 max-lg:h-[150px] text-[#FC7F58] flex">
          <p className="w-[12.5%] h-full break-words flex justify-center items-center text-[22vw]">
            F
          </p>
          <p className="w-[12.5%] h-full break-words flex justify-center items-center text-[22vw]">
            E
          </p>
          <p className="w-[12.5%] h-full break-words flex justify-center items-center text-[22vw]">
            A
          </p>
          <p className="w-[12.5%] h-full break-words flex justify-center items-center text-[22vw]">
            T
          </p>
          <p className="w-[12.5%] h-full break-words flex justify-center items-center text-[22vw]">
            U
          </p>
          <p className="w-[12.5%] h-full break-words flex justify-center items-center text-[22vw]">
            R
          </p>
          <p className="w-[12.5%] h-full break-words flex justify-center items-center text-[22vw]">
            E
          </p>
          <p className="w-[12.5%] h-full break-words flex justify-center items-center text-[22vw]">
            S
          </p>
        </h2>
        <section ref={ref1} className="h-full un-load-left">
          <section className="w-full h-full flex flex-col">
            <section className="w-full h-1/6 flex justify-center items-center flex-col">
              <hr className="bg-[#FC7F58] w-1/6 border-[#FC7F58] border-[4px]" />
              <h2 className="text-6xl font-bold tracking-widest text-[#1f1f1f]">
                Our <span className="text-green-500">Core???</span>
              </h2>
              <h3 className="text-4xl font-bold tracking-widest text-green-500">
                Features
              </h3>
            </section>
            <section className="w-full h-3/4 flex justify-center items-center">
              <section className="w-full h-full flex justify-around items-center max-lg:flex-col">
                <section className="bg-[#FFFDFA] max-lg:mt-5 rounded-2xl shadow-2xl shadow-blue-500 w-1/4 h-3/4 max-lg:w-3/4 max-lg:h-3/4 flex justify-center items-center flex-col">
                  <img src={clock} alt="clock" className="w-2/3 max-lg:w-1/3" />
                  <section className="h-1/3 max-lg:h-2/3">
                    <h2 className="text-4xl max-xl:text-2xl max-lg:text-xl text-center text-[#FC7F58] font-bold">
                      Manage your time how you want to!
                    </h2>
                  </section>
                </section>
                <section className="bg-[#FFFDFA] max-lg:mt-5 rounded-2xl shadow-2xl shadow-purple-500 w-1/4 h-3/4 max-lg:w-3/4 max-lg:h-3/4  flex justify-center items-center flex-col">
                  <img
                    src={mind}
                    alt="open mind"
                    className="w-2/3 max-lg:w-1/3"
                  />
                  <section className="h-1/3">
                    <h2 className="text-4xl max-xl:text-2xl max-lg:text-xl text-center text-[#FC7F58] font-bold">
                      Let your ambition flow through our system!
                    </h2>
                  </section>
                </section>
                <section className="bg-[#FFFDFA] max-lg:mt-5 rounded-2xl shadow-2xl shadow-yellow-500 w-1/4 h-3/4 max-lg:w-3/4 max-lg:h-3/4  flex justify-center items-center flex-col">
                  <img
                    src={rocket}
                    alt="rocket"
                    className="w-2/3 max-lg:w-1/3"
                  />
                  <section className="h-1/3">
                    <h2 className="text-4xl max-xl:text-2xl max-lg:text-xl text-center text-[#FC7F58] font-bold">
                      Don't wait for system analytics which are real time!
                    </h2>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
        <section className="h-full bg-cover bg-center bg-aboutUs">
          <section className="w-full h-1/6 flex justify-center items-center flex-col">
            <hr className="bg-[#FC7F58] w-1/6 border-[#FC7F58] border-[4px]" />
            <h2 className="text-6xl font-bold tracking-widest text-[#1f1f1f]">
              About <span className="text-green-500">Us???</span>
            </h2>
            <h3 className="text-4xl font-bold tracking-widest text-green-500">
              Us???
            </h3>
          </section>
          <section className="h-5/6 flex max-lg:flex-col justify-center items-center">
            <section className="w-1/2 max-lg:w-full h-full flex justify-center items-center flex-col">
              <section className="bg-[#FFFDFA] max-lg:w-11/12 rounded-2xl shadow-2xl shadow-[#FC7F58] w-3/4 h-3/4 max-lg:h-full flex justify-center items-center flex-col">
                <section className="h-full max-lg:w-full">
                  <h2 className="text-4xl max-xl:text-2xl max-lg:text-xl text-center text-green-500 font-bold">
                    Beep Boop Beep
                  </h2>
                  <p className="p-4 text-2xl max-lg:text-base text-[#1f1f1f]">
                    Aliens have been a subject of fascination and speculation
                    for centuries, with people wondering whether life exists
                    beyond our planet. While there is no concrete evidence to
                    prove the existence of extraterrestrial life, many
                    scientists believe that it is likely that other life forms
                    exist in the universe. The search for extraterrestrial life
                    is an ongoing endeavor, with researchers using various
                    methods to try to detect signals from other civilizations.
                    The concept of aliens has also been popularized in popular
                    culture, with countless movies, TV shows, and books
                    depicting encounters with beings from other worlds. Whether
                    aliens exist or not, the idea of life beyond our planet
                    continues to captivate the human imagination.
                  </p>
                </section>
              </section>
            </section>
            <section className="w-1/2 max-lg:w-1/3 h-full flex justify-center items-center">
              <img src={alien_dumb} alt="aliend dumb" />
            </section>
          </section>
        </section>
        <section className="w-full h-1/4 bg-[#FFFDFA] text-[#1f1f1f] flex text-2xl">
          <section className="w-1/2 h-full text-center flex flex-col justify-center items-center">
            <h3>2023</h3>
            <h3>© All Rights Reserved</h3>
            <h3>Figma</h3>
          </section>
          <section className="w-1/2 h-full text-center flex flex-col justify-center items-center">
            <h3>React</h3>
            <h3>Tailwind</h3>
            <h3>Feel free to use</h3>
          </section>
        </section>
      </section>
    </>
  );
};

export default HomePage;

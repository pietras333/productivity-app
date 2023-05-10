/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/aria-role */
import { Transition } from "@tailwindui/react";
import { useState, useLayoutEffect } from "react";
import ImgZone from "../assets/illustrations/img_zone.svg";
import hand_one from "../assets/illustrations/hands/hand_one.webp";
import hand_two from "../assets/illustrations/hands/hand_two.webp";
import hand_three from "../assets/illustrations/hands/hand_three.webp";
import hand_fist from "../assets/illustrations/hands/hand_fist.webp";
import hand_two_fingers from "../assets/illustrations/hands/hand_two_fingers.webp";

const HomePage = () => {
  const [usedHandOne, setUsedHandOne] = useState(true);
  const [usedHandTwo, setUsedHandTwo] = useState(false);
  const [usedHandThree, setUsedHandThree] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const handleMenuChange = () => {
    setIsOpen((prev) => !prev);
    const m = document.getElementById("menu");
    if (!isOpen) {
      m.style.clipPath = "circle(25px at 30px 30px)";
      m.style.top = "3rem";
      m.style.left = "3rem";
      m.style.width = "0%";
      m.style.height = "0%";
      m.style.position = "fixed";
    } else {
      m.style.clipPath = "circle(75%)";
      m.style.width = "100%";
      m.style.height = "100%";
      m.style.top = "0";
      m.style.left = "0";
      m.style.position = "fixed";
    }
  };

  const changeDisplayedHand = (e) => {
    const id = e.target.id;
    switch (id) {
      case "hand_one":
        setUsedHandTwo(false);
        setUsedHandThree(false);
        return setUsedHandOne(true);
      case "hand_two":
        setUsedHandTwo(true);
        setUsedHandThree(false);
        return setUsedHandOne(false);
      case "hand_three":
        setUsedHandTwo(false);
        setUsedHandThree(true);
        return setUsedHandOne(false);
      default:
        setUsedHandTwo(false);
        setUsedHandThree(false);
        return setUsedHandOne(true);
    }
  };

  return (
    <div className="w-full h-screen font-fredoka">
      <section className="absolute bottom-0 right-0 w-full h-[170px]">
        <img src={ImgZone} alt="footer" className="w-full" />
      </section>
      <section className="fixed w-full h-[140px] top-0 right-0 z-40">
        <nav className="w-full h-full">
          <ul className="w-full h-full flex justify-between items-center">
            <li className="ml-10">
              <button
                aria-label="Open/Close menu"
                role="button"
                onClick={handleMenuChange}
                className="focus:outline-8 focus:outline-green-500 hover:cursor-pointer hover:rounded-[40%] w-[71px] flex flex-col justify-center items-center h-[71px] rounded-[50%] bg-[#1f1f1f]"
              >
                <hr className="bg-white w-[38%] rounded-xl h-[4px] mb-1 text-white" />
                <hr className="bg-white w-[38%] rounded-xl h-[4px] text-white" />
              </button>
            </li>
          </ul>
        </nav>
      </section>
      <section
        id="menu"
        className="bg-[#1f1f1f] menuClip text-[#D9D9D9] fixed left-[3rem] top-[3rem] w-0 h-0 z-30 flex justify-center items-center"
      >
        <h2 className="fixed top-0 right-0 mr-10 mt-10 rotate-90">2023</h2>
        <h2 className="fixed bottom-0 left-0 mb-[6rem] rotate-90">
          © All Rights Reserved
        </h2>
        <img
          src={hand_fist}
          alt="hand fist"
          className="w-[400px] h-[800px] fixed circle top-[-8em] left-[-2em] rotate-[135deg]"
        />
        <img
          src={hand_two_fingers}
          alt="hand two fingers"
          className="w-[400px] h-[800px] fixed bottom-[-8em] right-[-2em] -rotate-45"
        />
        <ul className="w-[50%] h-full text-[#D9D9D9] text-3xl flex items-center justify-center flex-col">
          <li
            tabIndex={0}
            aria-label="Navigate to contact"
            role="button"
            className="focus:outline-8 focus:outline-green-500 hover:cursor-pointer hover:tracking-widest bg-[#1f1f1f] p-2 rounded-2xl"
          >
            Contact
          </li>
          <li
            tabIndex={0}
            aria-label="Navigate to features"
            role="button"
            className="focus:outline-8 focus:outline-green-500 hover:cursor-pointer hover:tracking-widest bg-[#1f1f1f] p-2 rounded-2xl"
          >
            Features
          </li>
          <li
            tabIndex={0}
            aria-label="Navigate to FAQ"
            role="button"
            className="focus:outline-8 focus:outline-green-500 hover:cursor-pointer hover:tracking-widest bg-[#1f1f1f] p-2 rounded-2xl"
          >
            FAQ
          </li>
        </ul>
      </section>
      <section className="w-full bg-home bg-center bg-cover bg-no-repeat h-full flex items-center">
        <section className="w-[55%] h-[100%] z-10">
          <p className="text-[#1f1f1f] mt-[15%] ml-[5%] text-6xl font-sourceCodePro font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            delectus unde nesciunt vel aliquid dolorum debitis atque nisi
            ratione quaerat.
          </p>
          <section className="mt-[5%] ml-[5%]">
            <p className="text-[#1f1f1f] w-[50%] text-xl font-sourceCodePro">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
              natus.
            </p>
            <section className="mt-2">
              <button
                aria-label="Create account"
                role="button"
                className="focus:outline-8 focus:outline-green-500 bg-[#1f1f1f] hover:tracking-widest text-white text-xl w-[23%] p-2 rounded-2xl"
              >
                Create Account
              </button>
              <a
                aria-label="Navigate to info"
                role="button"
                href="/home"
                className="focus:outline-8 focus:outline-green-500 text-[#1f1f1f] text-xl ml-4 underline hover:text-green-500"
              >
                Learn More
              </a>
            </section>
          </section>
        </section>
        <section className="w-[45%] h-full z-10 bg-center bg-no-repeat flex justify-end items-center">
          <Transition
            show={usedHandOne}
            enter="duration-1000"
            enterFrom="translate-y-full opacity-0"
            enterTo="translate-0 opacity-1"
            leave="duration-300 absolute"
            leaveFrom="translate-0 opacity-1"
            leaveTo="translate-y-full opacity-0"
          >
            <img id="hand" src={hand_one} alt="img of hand" />;
          </Transition>
          <Transition
            show={usedHandTwo}
            enter="duration-1000"
            enterFrom="translate-y-full opacity-0"
            enterTo="translate-0 opacity-1"
            leave="duration-300 absolute"
            leaveFrom="translate-0 opacity-1"
            leaveTo="translate-y-full opacity-0"
          >
            <img id="hand" src={hand_two} alt="img of hand" />;
          </Transition>
          <Transition
            show={usedHandThree}
            enter="duration-1000"
            enterFrom="translate-y-full opacity-0"
            enterTo="translate-0 opacity-1"
            leave="duration-300 absolute"
            leaveFrom="translate-0 opacity-1"
            leaveTo="translate-y-full opacity-0"
          >
            <img id="hand" src={hand_three} alt="img of hand" />;
          </Transition>
        </section>
        <section className="w-[20px] h-[60%] mr-[15%] flex justify-center items-center flex-col">
          <button
            aria-label="Change image"
            role="button"
            id="hand_one"
            onClick={(e) => changeDisplayedHand(e)}
            className="focus:outline-8 focus:outline-green-500 hover:bg-green-500 w-[5px] h-[50px] bg-white rounded-2xl"
          ></button>
          <button
            aria-label="Change image"
            role="button"
            onClick={(e) => changeDisplayedHand(e)}
            id="hand_two"
            className="focus:outline-8 focus:outline-green-500 hover:bg-green-500 w-[5px] h-[50px] bg-white rounded-2xl mt-2"
          ></button>
          <button
            aria-label="Change image"
            role="button"
            onClick={(e) => changeDisplayedHand(e)}
            id="hand_three"
            className="focus:outline-8 focus:outline-green-500 hover:bg-green-500 w-[5px] h-[50px] bg-white rounded-2xl mt-2"
          ></button>
        </section>
      </section>
    </div>
  );
};

export default HomePage;

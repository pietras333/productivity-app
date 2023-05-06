import { useEffect, useLayoutEffect, useState } from "react";
import DarkModeHandler from "../components/DarkModeHandler";
import Logo from "../assets/illustrations/logo.svg";
import LogoDark from "../assets/illustrations/logoDark.svg";
import { Transition } from "@tailwindui/react";

const HomePage = () => {
  const [currentMode, setCurrentMode] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleModeChange = () => {
    const handler = DarkModeHandler;
    handler.changeMode();
    setCurrentMode(handler.getMode());
  };

  setTimeout(() => {
    window.screen.width < 1024 ? setIsMobile(true) : setIsMobile(false);
  }, 5000);

  useLayoutEffect(() => {
    const handler = DarkModeHandler;
    window.screen.width < 1024 ? setIsMobile(true) : setIsMobile(false);
    setCurrentMode(handler.getMode());
  });

  const handleMenuChange = () => {
    setMobileMenu((prev) => !prev);
  };

  return (
    <>
      <div
        className={
          currentMode === "dark"
            ? "dark bg-cover bg-center bg-fixed bg-no-repeat h-screen w-full bg-homeDark max-lg:bg-homeMobileDark"
            : "bg-cover bg-no-repeat bg-center bg-fixed h-screen w-full bg-home max-lg:bg-homeMobile"
        }
      >
        <nav className="transition-all fixed w-full h-[8%]">
          <ul className="w-full h-full flex text-black font-fredoka items-center justify-between ">
            <li className="ml-2 max hover:cursor-pointer">
              {currentMode === "dark" ? (
                <button onClick={handleModeChange}>
                  <img src={LogoDark} alt="logo" />
                </button>
              ) : (
                <button onClick={handleModeChange}>
                  <img src={Logo} alt="logo" />
                </button>
              )}
            </li>
            {isMobile ? (
              <li className="mr-2">
                <button
                  onClick={handleMenuChange}
                  className="bg-black dark:bg-white dark:text-black text-white text-2xl p-2 rounded-tl-2xl rounded-b-2xl tracking-widest"
                >
                  Menu
                </button>
                <Transition
                  show={mobileMenu}
                  enter="transition-all duration-500"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition-all duration-500"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                  as="section"
                  className="w-[100%] h-full fixed right-0 top-0 bg-[rgba(255,255,255,.15)] dark:bg-[rgba(5,5,5,.15)] backdrop-blur-xl"
                >
                  <nav className="transition-all font-bold max-lg:font-normal h-full text-black dark:text-white flex justify-center items-center">
                    <ul>
                      <li className="hover:cursor-pointer text-3xl hover:tracking-widest">
                        <button onClick={handleMenuChange}>Menu</button>
                      </li>
                      <li className="hover:cursor-pointer text-3xl hover:tracking-widest">
                        <button>Features</button>
                      </li>
                      <li className="hover:cursor-pointer text-3xl hover:tracking-widest">
                        <button>Info</button>
                      </li>
                      <li className="hover:cursor-pointer text-3xl hover:tracking-widest">
                        <button>Contact</button>
                      </li>
                      <li className="hover:cursor-pointer text-3xl hover:tracking-widest">
                        <button>Create Account</button>
                      </li>
                    </ul>
                  </nav>
                </Transition>
              </li>
            ) : (
              <section className="flex justify-around w-full">
                <li className="max-xl:text-xl dark:text-[rgba(255,255,255,.55)] dark:hover:text-white dark:hover:border-b-white text-[rgba(0,0,0,.55)] w-[25%] border-b-2 border-b-transparent  hover:border-b-black  hover:text-black hover:cursor-pointer hover:tracking-widest text-2xl justify-self-end mr-2">
                  Features
                </li>
                <li className="max-xl:text-xl dark:text-[rgba(255,255,255,.55)] dark:hover:text-white dark:hover:border-b-white text-[rgba(0,0,0,.55)] w-[25%] border-b-2 border-b-transparent hover:border-b-black hover:text-black hover:cursor-pointer hover:tracking-widest text-2xl justify-self-end mr-2">
                  Info
                </li>
                <li className="max-xl:text-xl dark:text-[rgba(255,255,255,.55)] dark:hover:text-white dark:hover:border-b-white text-[rgba(0,0,0,.55)] w-[25%] border-b-2 border-b-transparent hover:border-b-black hover:text-black hover:cursor-pointer hover:tracking-widest text-2xl justify-self-end mr-2">
                  Contact
                </li>
                <li className="max-xl:text-xl dark:text-[rgba(255,255,255,.55)] dark:hover:text-white dark:hover:border-b-white text-[rgba(0,0,0,.55)] w-[25%] border-b-2 border-b-transparent hover:border-b-black hover:text-black hover:cursor-pointer hover:tracking-widest text-2xl justify-self-end mr-2">
                  Create Account
                </li>
              </section>
            )}
          </ul>
        </nav>
      </div>
      <div className="w-full bg-features bg-cover h-screen"></div>
    </>
  );
};

export default HomePage;

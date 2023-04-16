import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../assets/illustrations/arrow.png";
import Hamburger from "../assets/illustrations/hamburger.png";
import DarkModeHandler from "../components/DarkModeHandler";
import { Transition } from "@tailwindui/react";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navbarShowState, setNavbarShowState] = useState(false);
  const [currentMode, setCurrentMode] = useState("");
  const [serverData, setServerData] = useState({});
  const [loaderState, setLoaderState] = useState(true);

  const handleResponsiveNavbar = () => {
    setNavbarShowState((prev) => !prev);
  };

  const handleModeChange = () => {
    const handler = DarkModeHandler;
    handler.changeMode();
    setCurrentMode(handler.getMode());
  };

  useLayoutEffect(() => {
    const handler = DarkModeHandler;
    setCurrentMode(handler.getMode());
    handleLoad();
  });

  const handleLoad = async () => {
    await delay(800);
    setLoaderState(false);
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleRegister = async (event) => {
    event.preventDefault();
    await fetch("../api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setServerData({ data });
      });
    await delay(2000);
    setLoaderState(true);
  };

  return (
    <div
      className={
        currentMode === "dark"
          ? "w-full h-auto transition-mode-change dark bg-[#121212]"
          : "w-full h-auto transition-mode-change bg-[#121212]"
      }
    >
      <div className="transition-all max-sm:bg-lightregisterbgmobile max-sm:dark:bg-darkregisterbgmobile dark:bg-darkregisterbg w-screen h-screen bg-lightregisterbg bg-cover bg-no-repeat bg-left-bottom animate-fadeinbg">
        {navbarShowState ? (
          <nav
            id="navbar"
            className="transition-all fixed animate-slidetop w-full max-lg:h-screen max-lg:z-20 bg-lightmobilemenu dark:bg-darkmobilemenu bg-cover bg-center bg-no-repeat"
          >
            <ul className="max-lg:flex-col max-lg:items-stretch flex w-full h-full">
              <section className="w-full h-[10%] flex justify-between items-center">
                <li className="max-lg:w-[80%] max-lg:animate-slidetop max-lg:ml-[5%] max-lg:text-4xl font-bold tracking-widest">
                  <h1 className="dark:text-[#a76bcf] animate-slidetop text-[#FFB562]">
                    Todooo
                  </h1>
                </li>
                <li
                  onClick={handleResponsiveNavbar}
                  className="max-lg:w-[20%] max-lg:animate-slidetop transition-all animate-fadein h-full hidden max-lg:flex max-lg:justify-center max-lg:items-center"
                >
                  <div className="space-y-2">
                    <img src={Arrow} alt="Arrow" className="invert w-[30px]" />
                  </div>
                </li>
              </section>
              <section className="flex h-[90%] justify-around items-center flex-col ">
                <section className="flex justify-center items-center flex-col w-full ">
                  <li id="home">
                    <Link to="../">
                      <h2 className="max-lg:mt-2 max-lg:animate-slideleft max-lg:text-xl max-lg:inline inline tracking-tighter text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
                        Home
                      </h2>
                    </Link>
                  </li>
                  <li tabIndex="0" id="mode" onClick={handleModeChange}>
                    <h2 className="max-lg:mt-2 max-lg:animate-slideleft max-lg:text-xl max-lg:inline inline tracking-tighter text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
                      {currentMode === "dark" ? "Dark" : "Light"}
                    </h2>
                  </li>
                  <li>
                    <Link to="../sign-in">
                      <h2 className="max-lg:mt-2 max-lg:animate-slideleft max-lg:text-xl max-lg:inline inline tracking-tighter text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
                        Sign In
                      </h2>
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
              <li className="max-sm:w-[30%] max-sm:text-4xl 2xl:w-[60%] xl:w-[60%] lg:w-[50%] md:w-[40%] sm:w-[35%] 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-5xl font-bold ml-[5%] tracking-widest">
                <h1 className="dark:text-[#a76bcf] animate-slidetop text-[#FFB562]">
                  Todooo
                </h1>
              </li>
              <Link to="../" tabIndex="-1">
                <li id="home" tabIndex="0">
                  <h2 className="max-lg:hidden inline max-sm:text-xs max-sm:mr-[3%] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-sm text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
                    Home
                  </h2>
                </li>
              </Link>
              <li tabIndex="0" id="mode" onClick={handleModeChange}>
                <h2 className="max-lg:hidden inline max-sm:text-xs max-sm:mr-[3%] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-sm text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
                  {currentMode === "dark" ? "Dark" : "Light"}
                </h2>
              </li>

              <li className="mr-[10%] max-sm:mr-[4%]">
                <Link to="/sign-in" tabIndex="-1">
                  <button
                    tabIndex="0"
                    className="max-lg:hidden dark:bg-[#a76bcf] dark:hover:border-[#a76bcf] dark:hover:bg-transparent dark:hover:text-[#a76bcf] animate-fadein max-sm:text-lg max-sm:w-[150px] max-sm:h-[40px] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-base text-white bg-[#FFB562]  hover:text-[#FFB562] hover:tracking-widest hover:cursor-pointer transition-all w-[180px] h-[50px] rounded-xl hover:bg-transparent border-[3px] border-transparent hover:border-[#FFB562] "
                  >
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
                    className="invert w-[30px]"
                  />
                </div>
              </li>
            </ul>
          </nav>
        )}
        <section className="w-[50%] max-sm:w-full h-full flex justify-center items-center">
          <section className="h-[70%] w-full flex justify-center items-center flex-col">
            {localStorage.getItem("mode") === "dark" ? (
              <h1 className="text-[#7b34c2b6] text-8xl max-sm:text-6xl mt-10 max-sm:mt-2 w-[80%] font-bold">
                Get Started
              </h1>
            ) : (
              <h1 className="text-8xl max-sm:text-6xl mt-10 max-sm:mt-2 w-[80%] orangestroke font-bold">
                Get Started
              </h1>
            )}
            <form
              onSubmit={handleRegister}
              className="w-[80%] max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center"
            >
              <section className="w-[80%] max-sm:w-full max-sm:flex max-sm:justify-center max-sm:flex-col max-sm:items-center">
                <div className="flex w-full justify-between ">
                  <div className="w-full">
                    <h2 className="text-[#FFB562] text-sm dark:text-[#A76BCF] font-bold tracking-widest">
                      First name
                    </h2>
                    <input
                      className="focus:border-[#FFB562] dark:focus:border-[#7b34c2b6] dark:border-b-[#7b34c2b6] dark:text-white bg-transparent text-xl p-1 placeholder:text-[rgba(135,135,135,1)] focus:placeholder:text-transparent rounded-sm focus:rounded-lg border-2 text-[rgba(30,30,30,1)] outline-none border-transparent border-b-2 border-b-[#FFB562] w-[90%] max-sm:w-[95%] transition-all focus:w-[95%] max-sm:focus:w-[90%]"
                      type="text"
                      placeholder="Peter..."
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                    />
                  </div>
                  <div className="w-full">
                    <h2 className="text-[#FFB562] text-sm dark:text-[#A76BCF] font-bold tracking-widest">
                      Last name
                    </h2>
                    <input
                      className="focus:border-[#FFB562] dark:focus:border-[#7b34c2b6] dark:border-b-[#7b34c2b6] dark:text-white bg-transparent text-xl p-1 placeholder:text-[rgba(135,135,135,1)] focus:placeholder:text-transparent rounded-sm focus:rounded-lg border-2 text-[rgba(30,30,30,1)] outline-none border-transparent border-b-2 border-b-[#FFB562] w-[90%] max-sm:w-[95%] transition-all focus:w-[95%] max-sm:focus:w-[90%]"
                      type="text"
                      placeholder="Griffin..."
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                    />
                  </div>
                </div>
                <div className="mt-3 w-full">
                  <h2 className="text-[#FFB562] text-sm dark:text-[#A76BCF] font-bold tracking-widest">
                    Email
                  </h2>
                  <input
                    className="focus:border-[#FFB562] dark:focus:border-[#7b34c2b6] dark:border-b-[#7b34c2b6] dark:text-white bg-transparent text-xl p-1 placeholder:text-[rgba(135,135,135,1)] focus:placeholder:text-transparent rounded-sm focus:rounded-lg border-2 text-[rgba(30,30,30,1)] outline-none border-transparent border-b-2 border-b-[#FFB562] w-[95%] max-sm:w-[95%] transition-all focus:w-[97%] max-sm:focus:w-[90%]"
                    type="text"
                    placeholder="stewie@maguire.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="mt-3 w-full">
                  <h2 className="text-[#FFB562] text-sm dark:text-[#A76BCF] font-bold tracking-widest">
                    Password
                  </h2>
                  <input
                    className="focus:border-[#FFB562] dark:focus:border-[#7b34c2b6] dark:border-b-[#7b34c2b6] dark:text-white bg-transparent text-xl p-1 placeholder:text-[rgba(135,135,135,1)] focus:placeholder:text-transparent rounded-sm focus:rounded-lg border-2 text-[rgba(30,30,30,1)] outline-none border-transparent border-b-2 border-b-[#FFB562] w-[95%] max-sm:w-[95%] transition-all focus:w-[97%] max-sm:focus:w-[90%]"
                    type="password"
                    placeholder="..."
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <button className="dark:bg-[#a76bcf] dark:hover:border-[#a76bcf] dark:hover:bg-transparent dark:hover:text-[#a76bcf] ml-[20%] max-sm:ml-0 mt-10 animate-fadein max-sm:text-lg max-sm:w-[60%] max-sm:h-[50px] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-lg text-white bg-[#FFB562] hover:text-[#FFB562] hover:tracking-widest max-lg:hover:tracking-wide  hover:cursor-pointer transition-all w-[250px] h-[50px] rounded-xl hover:bg-transparent border-[3px] border-transparent hover:border-[#FFB562]">
                  Create account
                </button>
              </section>
            </form>
          </section>
        </section>
      </div>
      <Transition
        show={loaderState}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="w-full h-full bg-white dark:bg-[#121212] flex justify-center items-center z-50 absolute top-0 left-0">
          <div className="spinner dark:bg-[#121212]">
            <div className="circle one"></div>
            <div className="circle two"></div>
            <div className="circle three"></div>
          </div>
        </div>
      </Transition>
    </div>
  );
};
export default RegisterForm;

import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../assets/illustrations/arrow.png";
import Hamburger from "../assets/illustrations/hamburger.png";
import DarkModeHandler from "../components/DarkModeHandler";

const SignInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameCorectness, setUsernameCorectness] = useState(true);
  const [passwordCorectness, setPasswordCorectness] = useState(true);
  const [navbarShowState, setNavbarShowState] = useState(false);
  const [currentMode, setCurrentMode] = useState("");

  const usernameInfo = [
    "Username can't contain special characters",
    "Username already taken",
  ];

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const corectnessCheck = (str) => {
    const special = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return special.test(str);
  };

  const handleResponsiveNavbar = () => {
    setNavbarShowState((prev) => !prev);
  };

  const handleModeChange = () => {
    const handler = DarkModeHandler;
    handler.changeMode();
    setCurrentMode(handler.getMode());
  };

  useEffect(() => {
    setUsernameCorectness(!corectnessCheck(username));
    setPasswordCorectness(corectnessCheck(password));
  });

  useLayoutEffect(() => {
    const handler = DarkModeHandler;
    setCurrentMode(handler.getMode());
  });

  return (
    <div
      className={
        currentMode === "dark"
          ? "w-full h-auto transition-mode-change dark bg-[#121212]"
          : "w-full h-auto transition-mode-change bg-[#121212]"
      }
    >
      <div className="transition-all max-sm:bg-lightsigninbgmobile max-sm:dark:bg-darksigninbgmobile dark:bg-darksigninbg w-screen h-screen bg-lightsigninbg bg-cover bg-no-repeat bg-left-bottom animate-fadeinbg">
        {navbarShowState ? (
          <nav
            id="navbar"
            className="transition-all fixed animate-slidetop w-full max-lg:h-screen max-lg:z-20 bg-lightsignmobilemenu dark:bg-darksigninmobilemenu bg-cover bg-center bg-no-repeat"
          >
            <ul className="max-lg:flex-col max-lg:items-stretch flex w-full h-full">
              <section className="w-full h-[10%] flex justify-between items-center">
                <li className="max-lg:w-[80%] max-lg:animate-slidetop max-lg:ml-[5%] max-lg:text-4xl font-bold tracking-widest">
                  <h1 className="dark:text-[#019473] animate-slidetop text-[#FCAF3C]">
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
                <section
                  className="flex justify-center items-center flex-col w-full
                  "
                >
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
                    <Link to="../get-started">
                      <h2 className="max-lg:mt-2 max-lg:animate-slideleft max-lg:text-xl max-lg:inline inline tracking-tighter text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
                        Get Started
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
                <h1 className="dark:text-[#019473] animate-slidetop text-[#019473]">
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
                <Link to="/get-started" tabIndex="-1">
                  <button
                    tabIndex="0"
                    className="max-lg:hidden dark:bg-[#019473] dark:hover:border-[#019473] dark:hover:bg-transparent dark:hover:text-[#019473] animate-fadein max-sm:text-lg max-sm:w-[150px] max-sm:h-[40px] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-base text-white bg-[#019473]  hover:text-[#019473] hover:tracking-widest hover:cursor-pointer transition-all w-[180px] h-[50px] rounded-xl hover:bg-transparent border-[3px] border-transparent hover:border-[#019473]"
                  >
                    Get Started
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
              <h1 className="text-[#005744] text-8xl max-sm:text-6xl mt-10 max-sm:mt-2 w-[80%] font-bold">
                Welcome back
              </h1>
            ) : (
              <h1 className="text-8xl max-sm:text-6xl mt-10 max-sm:mt-2 w-[80%] text-[#FCAF3C] font-bold">
                Welcome back
              </h1>
            )}
            <form className="w-[80%] max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
              <div className="mt-10 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
                <h2 className="text-[#FCAF3C] dark:text-[#9CAF3D] font-bold tracking-widest text-2xl max-sm:text-xl">
                  Pass your username
                </h2>
                <input
                  className="focus:border-[#449F62] dark:focus:border-[#9CAF3D] dark:border-b-[#9CAF3D] dark:text-white bg-transparent text-xl p-1 placeholder:text-[rgba(135,135,135,1)] focus:placeholder:text-transparent rounded-sm focus:rounded-lg border-2 text-[rgba(30,30,30,1)] outline-none border-transparent border-b-2 border-b-[#449F62] w-[50%] max-sm:w-[80%] transition-all focus:w-[65%] max-sm:focus:w-[90%]"
                  type="text"
                  placeholder="Username..."
                  onChange={(e) => handleUsernameChange(e)}
                  value={username}
                />
                {usernameCorectness ? (
                  <h3 className="text-transparent text-xs tracking-widest max-sm:text-center">
                    {usernameInfo}
                  </h3>
                ) : (
                  <h3 className="text-[#F87474] text-xs tracking-widest animate-slideleft max-sm:text-center">
                    {usernameInfo}
                  </h3>
                )}
              </div>
              <div className="mt-10 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
                <h2 className="text-[#FCAF3C] dark:text-[#9CAF3D] font-bold tracking-widest text-2xl max-sm:text-xl">
                  Pass your password
                </h2>
                <input
                  className="focus:border-[#449F62] dark:focus:border-[#9CAF3D] dark:border-b-[#9CAF3D] dark:text-white bg-transparent text-xl p-1 placeholder:text-[rgba(135,135,135,1)] focus:placeholder:text-transparent rounded-sm focus:rounded-lg border-2 text-[rgba(30,30,30,1)] outline-none border-transparent border-b-2 border-b-[#449F62] w-[50%] max-sm:w-[80%] transition-all focus:w-[65%] max-sm:focus:w-[90%]"
                  type="password"
                  placeholder="Psst..."
                  onChange={(e) => handlePasswordChange(e)}
                  value={password}
                />
                {passwordCorectness ? (
                  <h3 className="text-transparent text-xs tracking-widest max-sm:text-center">
                    Password must contain special characters
                  </h3>
                ) : (
                  <h3 className="text-[#F87474] text-xs tracking-widest animate-slideleft max-sm:text-center">
                    Password must contain at least one special character
                  </h3>
                )}
              </div>
              <button className="dark:bg-[#9CAF3D] dark:hover:border-[#9CAF3D] dark:hover:bg-transparent dark:hover:text-[#9CAF3D] ml-[20%] max-sm:ml-0 mt-10 animate-fadein max-sm:text-lg max-sm:w-[50%] max-sm:h-[50px] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-lg text-white bg-[#449F62] hover:text-[#449F62] hover:tracking-widest max-lg:hover:tracking-wide  hover:cursor-pointer transition-all w-[250px] h-[50px] rounded-xl hover:bg-transparent border-[3px] border-transparent hover:border-[#449F62]">
                Sign In
              </button>
            </form>
          </section>
        </section>
      </div>
    </div>
  );
};
export default SignInPage;
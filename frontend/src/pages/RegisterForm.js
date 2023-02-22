import { useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBarLanding from "../components/NavBarLanding";
import DarkMode from "../assets/illustrations/darkmode.png";
import LightMode from "../assets/illustrations/lightmode.png";
import Arrow from "../assets/illustrations/arrow.png";
import Hamburger from "../assets/illustrations/hamburger.png";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameCorectness, setUsernameCorectness] = useState(true);
  const [passwordCorectness, setPasswordCorectness] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  // CHECK IF USERNAME IS ALREADY IN DATABASE(BACKEND)
  // IF IT EXISTS THEN SHOW usernameInfo[1]
  // ELSE IF USERNAME DIDNT PASS CORECTNESSCHECK THEN SHOW usernameInfo[0]
  // ELSE CREATE USER
  const usernameInfo = [
    "Username can't contain special characters",
    "Username already taken",
  ];
  // Something like that ->
  // const  handleUsernameInfo = async (event) => {
  //   // const data = await server.checkUsername(event);
  //   // return data.user.exists ? usernameInfo[1] : usernameInfo[0]
  // }

  const handleDisplayIconChange = () => {
    return darkMode ? DarkMode : LightMode;
  };
  const handleDisplayChange = () => {
    const theme = localStorage.getItem("mode");
    if (theme === "dark") {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", "light");
      document.querySelector("html").classList.contains("dark");
    } else {
      localStorage.removeItem("mode");
      localStorage.setItem("mode", "dark");
      document.querySelector("html").classList.add("dark");
    }
    setDarkMode((prev) => !prev);
  };

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

  const [navbarShowState, setNavbarShowState] = useState(false);
  const handleResponsiveNavbar = () => {
    setNavbarShowState((prev) => !prev);
  };

  useEffect(() => {
    setUsernameCorectness(!corectnessCheck(username));
    setPasswordCorectness(corectnessCheck(password));
  });
  useLayoutEffect(() => {
    const theme = localStorage.getItem("mode");
    console.log("theme ===", theme);
    if (theme === "dark") {
      return document.documentElement.classList.add("dark");
    }
    return document.documentElement.classList.remove("dark");
  }, []);

  //w-full h-full bg-white
  //{{ error ? 'text-red-600' : 'text-green-600' }}
  console.log("darkMode ===", darkMode);
  return (
    <div
      className={
        darkMode ? "dark w-full h-full bg-white" : "w-full h-full bg-white"
      }
    >
      <div className="transition-all max-sm:bg-lightregisterbgmobile dark:bg-darkregisterbg max-sm:dark:bg-darkregisterbgmobile w-screen h-screen bg-lightregisterbg bg-cover bg-no-repeat bg-left-bottom animate-fadeinbg">
        {navbarShowState ? (
          <nav
            id="navbar"
            className="transition-all fixed animate-slidetop w-full max-lg:h-screen max-lg:z-20 bg-lightmobilemenu dark:bg-darkmobilemenu bg-cover bg-center bg-no-repeat"
          >
            <ul className="max-lg:flex-col max-lg:items-stretch flex w-full h-full">
              <section className="w-full h-[10%] flex justify-between items-center">
                <li className="animate-slidetop max-lg:w-[80%] dark:text-[#ff5722] max-lg:animate-slidetop max-lg:ml-[5%] text-[#FFB562] max-lg:text-4xl font-bold tracking-widest">
                  Todooo
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
                  <li
                    id="home"
                    className="max-lg:mt-2 max-lg:animate-slideleft max-lg:text-xl max-lg:inline inline tracking-tighter  text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all"
                  >
                    <Link
                      className="max-lg:animate-slideleft max-lg:text-xl max-lg:inline inline tracking-tighter text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all"
                      to="../"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="max-lg:mt-2 max-lg:animate-slideleft max-lg:text-xl max-lg:inline inline tracking-tighter text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
                    <Link
                      to="../sign-in"
                      className="max-lg:animate-slideleft max-lg:text-xl max-lg:inline inline tracking-tighter text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all"
                    >
                      Sign In
                    </Link>
                  </li>
                  <li className="max-lg:mt-2">
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
            className="fixed animate-slidetop w-full max-sm:h-[10%] 2xl:h-[150px] xl:h-[120px]" //max-lg:h-screen max-lg:z-20
          >
            <ul
              className="flex w-full h-full justify-between items-center mt-2"
              //max-lg:justify-center max-lg:items-center max-lg:flex-col
            >
              <li
                className="animate-slidetop dark:text-[#ff5722] text-[#FFB562] max-sm:w-[30%] max-sm:text-4xl 2xl:w-[60%] xl:w-[60%] lg:w-[50%] md:w-[40%] sm:w-[35%] 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-5xl font-bold ml-[5%] tracking-widest"
                //max-lg:ml-0 max-lg:text-center max-lg:absolute max-lg:top-1
              >
                Todooo
              </li>
              <Link to="../">
                <li
                  id="home"
                  className="max-lg:hidden inline max-sm:text-xs max-sm:mr-[3%] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-sm text-[rgba(255,255,255,.75)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all"
                  // max-lg:hidden (onclick) max-lg:inline
                >
                  Home
                </li>
              </Link>

              <li className="mr-[1%] max-sm:mr-[4%]">
                <Link to="/sign-in">
                  <button className="inline max-lg:hidden animate-fadein max-sm:text-xs max-sm:w-[120%] max-sm:h-[30px] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-base text-white bg-[#FFB562] dark:bg-[#ff5722] dark:hover:text-[#ff5722]  hover:text-[#FFB562] hover:tracking-widest hover:cursor-pointer transition-all w-[150%] h-[50px] rounded-xl hover:bg-transparent border-[3px] border-transparent hover:border-[#FFB562] dark:hover:border-[#ff5722] ">
                    Sign In
                  </button>
                </Link>
              </li>
              <li className="mr-[3%]">
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
        <section className="w-[50%] max-sm:w-full h-full flex justify-center items-center">
          <section className="h-[70%] w-full flex justify-center items-center flex-col">
            <h1 className=" text-8xl max-sm:text-6xl mt-10 max-sm:mt-2 w-[80%] orangestroke font-bold">
              Get Started
            </h1>
            <form className="w-[80%] max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
              <div className="mt-10 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
                <h2 className="text-[#FFB562] dark:text-[#ff5722] font-bold tracking-widest text-2xl max-sm:text-xl">
                  Pass your username
                </h2>
                <input
                  className="focus:border-[#FFB562] dark:focus:border-[#ff5722] bg-transparent text-xl p-1 placeholder:text-[rgba(135,135,135,1)] focus:placeholder:text-transparent rounded-sm focus:rounded-lg border-2 text-[rgba(30,30,30,1)] dark:text-white outline-none border-transparent border-b-2 border-b-[#FFB562] dark:border-b-[#ff5722] w-[50%] max-sm:w-[80%] transition-all focus:w-[65%] max-sm:focus:w-[90%]"
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
                <h2 className="text-[#FFB562] dark:text-[#ff5722] font-bold tracking-widest text-2xl max-sm:text-xl">
                  Set your password
                </h2>
                <input
                  className="focus:border-[#FFB562] dark:focus:border-[#ff5722] bg-transparent text-xl p-1 placeholder:text-[rgba(135,135,135,1)] focus:placeholder:text-transparent rounded-sm focus:rounded-lg border-2 text-[rgba(30,30,30,1)] outline-none border-transparent border-b-2 border-b-[#FFB562] dark:border-b-[#ff5722] dark:text-white w-[50%] max-sm:w-[80%] transition-all focus:w-[65%] max-sm:focus:w-[90%]"
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
              <button className="ml-[20%] max-sm:ml-0 mt-10 animate-fadein max-sm:text-lg max-sm:w-[50%] max-sm:h-[50px] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-lg text-white bg-[#FFB562] dark:bg-[#ff5722]  hover:text-[#FFB562] dark:hover:text-[#ff5722]  hover:tracking-widest max-lg:hover:tracking-wide  hover:cursor-pointer transition-all w-[250px] h-[50px] rounded-xl hover:bg-transparent border-[3px] border-transparent hover:border-[#FFB562] dark:hover:border-[#ff5722] ">
                Create account
              </button>
            </form>
          </section>
        </section>
      </div>
    </div>
  );
};
export default RegisterForm;

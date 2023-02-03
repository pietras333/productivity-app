import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBarLanding from "../components/NavBarLanding";
import DarkMode from "../assets/illustrations/darkmode.png";
import LightMode from "../assets/illustrations/lightmode.png";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernamePropriety, setUsernamePropriety] = useState(true);
  const [passwordPropriety, setPasswordPropriety] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const handleDisplayIconChange = () => {
    return darkMode ? DarkMode : LightMode;
  };
  const handleDisplayChange = () => {
    setDarkMode((prev) => !prev);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const proprietyCheck = (str) => {
    const special = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return special.test(str);
  };

  useEffect(() => {
    setUsernamePropriety(!proprietyCheck(username));
    setPasswordPropriety(proprietyCheck(password));
  });

  return (
    <div className="w-full h-full bg-white ">
      <div className="max-sm:bg-lightregisterbgmobile w-screen h-screen bg-lightregisterbg bg-cover bg-no-repeat bg-left-bottom animate-fadeinbg">
        <nav className="fixed animate-slidetop z-10 w-full max-sm:h-[60px] 2xl:h-[150px] xl:h-[120px] lg:h-[100px] md:h-[80px] sm:h-[60px]">
          <ul className="flex justify-around items-center w-full h-full">
            <NavBarLanding PageState="getstarted" />
            <li className="mr-[1%] max-sm:mr-[1%]">
              <button className="flex justify-center items-center">
                <img
                  src={handleDisplayIconChange()}
                  alt="icon of display mode"
                  className="w-[50px] max-sm:w-[20px] invert animate-fadein"
                  onClick={handleDisplayChange}
                />
              </button>
            </li>
          </ul>
        </nav>
        <section className="w-[50%] max-sm:w-full h-full flex justify-center items-center">
          <section className="h-[70%] w-full flex justify-center items-center flex-col">
            <h1 className="text-8xl max-sm:text-6xl mt-10 max-sm:mt-2 w-[80%] orangestroke font-bold">
              Get Started
            </h1>
            <form className="w-[80%] max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
              <div className="mt-10 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
                <h2 className="text-[#FFB562] font-bold tracking-widest text-2xl max-sm:text-xl">
                  Pass your username
                </h2>
                <input
                  className="focus:border-[#FFB562] bg-transparent text-xl p-1 placeholder:text-[rgba(135,135,135,1)] focus:placeholder:text-transparent rounded-sm focus:rounded-lg border-2 text-[rgba(30,30,30,1)] outline-none border-transparent border-b-2 border-b-[#FFB562] w-[50%] max-sm:w-[80%] transition-all focus:w-[65%] max-sm:focus:w-[90%]"
                  type="text"
                  placeholder="Username..."
                  onChange={(e) => handleUsernameChange(e)}
                  value={username}
                />
                {usernamePropriety ? (
                  <h3 className="text-transparent text-xs tracking-widest max-sm:text-center">
                    Username can't contain special characters
                  </h3>
                ) : (
                  <h3 className="text-[#F87474] text-xs tracking-widest animate-slideleft max-sm:text-center">
                    Username can't contain special characters
                  </h3>
                )}
              </div>
              <div className="mt-10 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
                <h2 className="text-[#FFB562] font-bold tracking-widest text-2xl max-sm:text-xl">
                  Set your password
                </h2>
                <input
                  className="focus:border-[#FFB562] bg-transparent text-xl p-1 placeholder:text-[rgba(135,135,135,1)] focus:placeholder:text-transparent rounded-sm focus:rounded-lg border-2 text-[rgba(30,30,30,1)] outline-none border-transparent border-b-2 border-b-[#FFB562] w-[50%] max-sm:w-[80%] transition-all focus:w-[65%] max-sm:focus:w-[90%]"
                  type="password"
                  placeholder="Psst..."
                  onChange={(e) => handlePasswordChange(e)}
                  value={password}
                />
                {passwordPropriety ? (
                  <h3 className="text-transparent text-xs tracking-widest max-sm:text-center">
                    Password must contain special characters
                  </h3>
                ) : (
                  <h3 className="text-[#F87474] text-xs tracking-widest animate-slideleft max-sm:text-center">
                    Password must contain at least one special character
                  </h3>
                )}
              </div>
              <button className="ml-[20%] max-sm:ml-0 mt-10 animate-fadein max-sm:text-xs max-sm:w-[50%] max-sm:h-[50px] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-lg text-white bg-[#FFB562]  hover:text-[#FFB562] hover:tracking-widest hover:cursor-pointer transition-all w-[250px] h-[50px] rounded-xl hover:bg-transparent border-[3px] border-transparent hover:border-[#FFB562] ">
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

import { useState } from "react";
import { Transition } from "@tailwindui/react";
import login from "../assets/illustrations/icons/login.png";

const Login = () => {
  const [showResponse, setShowResponse] = useState(false);
  const [response, setResponse] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const sendRequest = async (e) => {
    e.preventDefault();
    setShowResponse(true);
    const response = await fetch("../api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    setResponse(response.status);
    const data = await response.json();
    window.localStorage.setItem(
      "authorizationToken",
      data.Headers.Authorization
    );
  };

  const closeResponse = (e) => {
    e.preventDefault();
    setShowResponse(false);
  };

  const handleForgotPassword = () => {};

  return (
    <section className="w-screen bg-green-400 h-screen font-Manrope flex max-md:flex-col">
      <aside className="animate-slide-in-l w-7/12 max-md:w-full max-sm:h-1/3 h-full greengradient flex justify-start items-center flex-col max-xl:justify-center relative">
        <img src={login} alt="" className="w-2/3" />
        <h2 className="text-lg max-md:hidden text-white opacity-50 max-lg:text-base max-md:text-xs flex flex-col justify-start items-center">
          <span>Sign in.</span>
          <span>And continue your journey into new productivity verse.</span>
        </h2>
        <h3 className="text-base text-white max-md:text-xs opacity-50 ml-auto mr-auto left-0 right-0 bottom-5 absolute w-1/2 max-lg:w-3/4 text-center">
          Focusio 2023, All Rights Reserved
        </h3>
      </aside>
      <main className="w-5/12 max-md:w-full max-md:h-2/3 h-full bg-[#121313] flex flex-col items-center justify-start relative">
        <header className="w-full flex items-center justify-around flex-col">
          <h1 className="flex w-full justify-start items-center p-8 pl-36 max-xl:pl-12 max-md:p-4 max-md:pl-12">
            <p className="greengradient w-10 h-10 max-md:w-7 max-md:h-7 rounded-full"></p>
            <span className="text-white font-semibold max-md:text-xl text-3xl ml-1">
              Focusio
            </span>
          </h1>
          <h2 className="text-5xl max-md:mt-2 max-md:text-3xl text-white w-11/12 mt-10 flex flex-col items-center justify-center font-bold">
            <span className="text-center text-4xl max-xl:text-2xl max-md:text-xl">
              You and only you in new productivity universe.
            </span>
            <span className="text-xl max-md:text-xs max-xl:text-base max-lg:text-xs opacity-50 text-center">
              continue your journey into new universe of productivity.
            </span>
          </h2>
        </header>
        <form className="w-11/12 animate-fade-in max-xl:w-full h-1/2 mt-[15%] max-md:mt-5 flex justify-start flex-col items-center relative">
          <Transition
            show={showResponse}
            as="section"
            className="absolute w-full h-full flex justify-center items-center"
            enter="transition-all duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-all duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {response === 404 || response === 401 ? (
              <section className="w-1/2 h-1/2 bg-[#121313] outline outline-red-500 rounded-xl flex justify-center flex-col items-center">
                <h1 className="text-xl text-red-500 text-center max-lg:text-lg max-md:text-base">
                  {response === 404
                    ? "Email not found."
                    : "Wrong email or password."}
                </h1>
                <button
                  onClick={closeResponse}
                  className="bluegradient border border-white hover:tracking-wide text-white max-[2559px]:text-xl max-[2559px]:w-[250px] w-[300px] text-3xl max-2xl:text-xl max-2xl:w-[200px] max-lg:text-lg max-lg:w-[130px] pt-3 pb-3 pl-5 pr-5  max-md:text-lg max-md:pt-2 max-md:pb-2 max-md:pl-3 max-md:pr-3 rounded-full mt-12 max-md:mt-4 shadow-blue-500 shadow-2xl"
                >
                  Close
                </button>
              </section>
            ) : (
              <section className="w-1/2 h-1/2 bg-[#121313] outline outline-green-500 rounded-xl flex justify-center flex-col items-center">
                <h1 className="text-xl text-green-500 text-center max-lg:text-lg max-md:text-base">
                  Succesfully logged in.
                </h1>
                <button
                  onClick={closeResponse}
                  className="bluegradient border border-white hover:tracking-wide text-white max-[2559px]:text-xl max-[2559px]:w-[250px] w-[300px] text-3xl max-2xl:text-xl max-2xl:w-[200px] max-lg:text-lg max-lg:w-[130px] pt-3 pb-3 pl-5 pr-5  max-md:text-lg max-md:pt-2 max-md:pb-2 max-md:pl-3 max-md:pr-3 rounded-full mt-12 max-md:mt-4 shadow-blue-500 shadow-2xl"
                >
                  Close
                </button>
              </section>
            )}
          </Transition>
          <main className="w-3/4 flex flex-col items-center">
            <input
              onChange={handleEmail}
              value={email}
              type="email"
              placeholder="Email."
              className="w-11/12 mt-3 text-xl p-2 pl-3 max-md:text-base text-white bg-transparent border border-green-400 rounded-2xl focus:border-white"
            />
            <input
              onChange={handlePassword}
              value={password}
              type="password"
              placeholder="Password."
              className="w-11/12 mt-3 text-xl p-2 pl-3 max-md:text-base text-white bg-transparent border border-green-400 rounded-2xl focus:border-white"
            />
            <h2
              onClick={handleForgotPassword}
              className="w-11/12 pl-3 text-red-500 mt-2 text-sm font-light border-b border-transparent hover:cursor-pointer hover:tracking-widest"
            >
              Forgot password?
            </h2>
            <button
              onClick={sendRequest}
              className="greengradient border  border-white hover:tracking-wide text-white max-[2559px]:text-xl max-[2559px]:w-[250px] w-[400px] text-3xl max-2xl:text-xl max-2xl:w-[200px] max-lg:text-lg max-lg:w-[180px] pt-3 pb-3 pl-5 pr-5 rounded-full mt-12 max-md:mt-4 max-md:text-lg max-md:pt-2 max-md:pb-2 max-md:pl-3 max-md:pr-3 shadow-blue-500 greenshadow"
            >
              Sign In
            </button>
          </main>
          <footer className="absolute ml-auto mr-auto left-0 right-0 bottom-5 w-1/2 max-lg:w-full text-center flex justify-around text-white text-base">
            <h3 className="opacity-50 text-center hover:opacity-100 hover:cursor-pointer">
              <a href="../get-started">Get Started</a>
            </h3>
            <h3 className="opacity-50 text-center hover:opacity-100 hover:cursor-pointer">
              <a href="../home">Home</a>
            </h3>
            <h3 className="opacity-50 text-center hover:opacity-100 hover:cursor-pointer">
              <a href="../sign-in">Sign In</a>
            </h3>
          </footer>
        </form>
      </main>
    </section>
  );
};

export default Login;

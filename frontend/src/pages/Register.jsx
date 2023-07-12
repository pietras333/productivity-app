import { useState } from "react";
import register from "../assets/illustrations/icons/register.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSurname = (e) => {
    setSurname(e.target.value);
  };

  const sendRequest = (e) => {
    e.preventDefault();
  };

  return (
    <section className="w-screen bg-blue-400 h-screen font-Manrope flex max-md:flex-col">
      <aside className="w-7/12 max-md:w-full max-md:h-1/3 h-full bluegradient flex justify-start items-center flex-col max-xl:justify-center relative">
        <img src={register} alt="" className="w-2/3" />
        <h2 className="text-lg max-md:hidden text-white opacity-50 max-lg:text-base flex flex-col justify-start items-center">
          <span>Create account.</span>
          <span>And start your journey into new productivity verse.</span>
        </h2>
        <h3 className="text-base text-white opacity-50 ml-auto mr-auto left-0 right-0 bottom-5 absolute w-1/2 max-lg:w-3/4 text-center">
          Focusio 2023, All Rights Reserved
        </h3>
      </aside>
      <main className="w-5/12 max-md:w-full h-full bg-[#121313] flex flex-col items-center justify-start relative">
        <header className="w-full flex items-center justify-around flex-col">
          <h1 className="flex w-full justify-start items-center p-8 pl-36 max-xl:pl-12 max-md:p-4 max-md:pl-12">
            <p className="bluegradient w-10 h-10 max-md:w-7 max-md:h-7 rounded-full"></p>
            <span className="text-white font-semibold text-3xl max-md:text-xl ml-1">
              Focusio
            </span>
          </h1>
          <h2 className="text-5xl text-white w-11/12 mt-10 max-md:mt-2 flex flex-col items-center justify-center font-bold">
            <span className="text-center text-4xl max-xl:text-2xl">
              Prepare, create and start.
            </span>
            <span className="text-xl max-xl:text-base max-lg:text-xs opacity-50 text-center">
              your own journey into new universe of productivity.
            </span>
          </h2>
        </header>
        <form className="w-11/12 max-xl:w-full h-1/2 mt-[15%] max-md:mt-4 flex justify-start flex-col items-center">
          <section className="w-3/4 flex justify-around max-xl:flex-col max-xl:items-center">
            <input
              value={name}
              onChange={handleName}
              type="text"
              placeholder="First name."
              className="w-5/12 max-xl:w-11/12 max-xl:mt-2 text-xl max-md:text-base p-2 pl-3 text-white bg-transparent border border-blue-400 rounded-2xl focus:border-white"
            />
            <input
              value={surname}
              onChange={handleSurname}
              type="text"
              placeholder="Last name."
              className="w-5/12 max-xl:w-11/12 max-xl:mt-2 text-xl max-md:text-base p-2 pl-3 text-white bg-transparent border border-blue-400 rounded-2xl focus:border-white"
            />
          </section>
          <main className="w-3/4 flex flex-col items-center">
            <input
              value={email}
              onChange={handleEmail}
              type="email"
              placeholder="Email."
              className="w-11/12 mt-3 text-xl p-2 pl-3 text-white max-md:text-base bg-transparent border border-blue-400 rounded-2xl focus:border-white"
            />
            <input
              value={password}
              onChange={handlePassword}
              type="password"
              placeholder="Password."
              className="w-11/12 mt-3 text-xl p-2 pl-3 text-white max-md:text-base bg-transparent border border-blue-400 rounded-2xl focus:border-white"
            />
            <button
              onClick={sendRequest}
              className="bluegradient border border-white hover:tracking-wide text-white max-[2559px]:text-xl max-[2559px]:w-[250px] w-[400px] text-3xl max-2xl:text-xl max-2xl:w-[200px] max-lg:text-lg max-lg:w-[180px] pt-3 pb-3 pl-5 pr-5 max-md:text-lg max-md:pt-2 max-md:pb-2 max-md:pl-3 max-md:pr-3 rounded-full mt-12 max-md:mt-4 shadow-blue-500 blueshadow"
            >
              Create account
            </button>
          </main>
          <footer className="absolute ml-auto mr-auto left-0 right-0 bottom-5 w-1/2 max-lg:w-full text-center flex justify-around text-white text-base">
            <h3 className="opacity-50 hover:opacity-100 hover:cursor-pointer">
              <a href="../get-started">Get Started</a>
            </h3>
            <h3 className="opacity-50 hover:opacity-100 hover:cursor-pointer">
              <a href="../home">Home</a>
            </h3>
            <h3 className="opacity-50 hover:opacity-100 hover:cursor-pointer">
              <a href="../sign-in">Sign In</a>
            </h3>
          </footer>
        </form>
      </main>
    </section>
  );
};

export default Register;

import { useState } from "react";
import cancel_icon from "../assets/illustrations/icons/cancel.png";
import eye_icon from "../assets/illustrations/icons/eye.png";
import eye_closed_icon from "../assets/illustrations/icons/eye-closed.png";
import ContinueWith from "./ContinueWith";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [serverData, setServerData] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const handleLogin = async (event) => {
    event.preventDefault();
    await fetch("../api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        window.localStorage.setItem(
          "authorizationToken",
          data.Headers["Authorization"]
        );
        // window.location.href = "../main";
      });
  };

  return (
    <form
      onSubmit={(e) => handleLogin(e)}
      className="h-3/4 w-10/12 flex flex-col justify-around items-center "
    >
      <section className="w-3/4 flex flex-col justify-around items-center top-0 bottom-0 right-0 left-0">
        <section className="w-full flex">
          <input
            name="email-login"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
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
            name="password-login"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            placeholder="..."
            className="w-10/12 h-14 max-md:h-10 max-md:text-lg focus:bg-indigo-500 focus:text-white focus:placeholder:text-white bg-[#EAF0F7] rounded-l-xl pl-4 text-xl outline-none"
          />
          <button className="w-2/12 h-14 max-md:h-10 hover:bg-green-500 bg-[#EAF0F7] rounded-r-xl flex justify-center items-center">
            <img src={eye_closed_icon} alt="password hidden" />
          </button>
        </section>
        <h3 className="w-full text-right max-md:text-base dark:text-[#03D0B1] text-indigo-600 font-bold text-lg hover:cursor-pointer hover:text-green-500">
          Forgot Password?
        </h3>
        <section className="mt-10 max-md:m-0 max-md:mt-12  w-full flex justify-center items-center">
          <button
            type="submit"
            className="w-3/4 h-14 max-md:h-10 max-md:text-xl text-2xl text-white bg-indigo-600 dark:bg-[#03D0B1] rounded-xl hover:tracking-widest"
          >
            Sign In
          </button>
        </section>
        <ContinueWith />
      </section>
    </form>
  );
};

export default Login;

import { useState, useMemo, useEffect } from "react";
import { Transition } from "@tailwindui/react";
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
  const [feedback, setFeedback] = useState(false);
  const [hidden, setHidden] = useState(true);

  const handleLogin = async (event) => {
    event.preventDefault();
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
    const statusCode = response.status;
    setFeedback(statusCode === 401 ? true : false);
    const data = await response.json();
    setServerData({ data });
    window.localStorage.setItem(
      "authorizationToken",
      data.Headers.Authorization
    );
  };

  const feedbackTransition = useMemo(
    () => (
      <>
        <Transition
          appear={true}
          show={feedback}
          className="w-full flex justify-end items-center text-red-500 absolute top-0 right-0"
          enter="transition-all duration-250"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-all duration-250"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          Wrong email or password
        </Transition>
        <Transition
          appear={true}
          show={!feedback}
          className="w-full flex justify-end items-center text-green-500 absolute top-0 right-0"
          enter="transition-all duration-250"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-all duration-250"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          Succesfully logged in
        </Transition>
      </>
    ),
    [feedback]
  );

  const handleValueReset = (e) => {
    e.preventDefault();
    const id = e.target.id;
    switch (id) {
      case "email-reset":
        return setEmail("");
      default:
        return setEmail("");
    }
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
            className="no-autofill dark:focus:bg-[#03D0B1] w-11/12 h-14 max-md:h-10 max-md:text-lg focus:bg-indigo-500 focus:text-white focus:placeholder:text-white bg-[#EAF0F7] rounded-l-xl pl-4 text-xl outline-none"
          />
          <button
            id="email-reset"
            onClick={(e) => {
              handleValueReset(e);
            }}
            className="w-2/12 h-14 max-md:h-10 hover:bg-green-500 bg-[#EAF0F7] rounded-r-xl flex justify-center items-center"
          >
            <img src={cancel_icon} alt="cancel" />
          </button>
        </section>
        <h2 className="w-full flex h-6 justify-end items-center relative">
          {feedbackTransition}
        </h2>
        <section className="w-full flex">
          <input
            name="password-login"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type={hidden ? "password" : "text"}
            placeholder="..."
            className="no-autofill dark:focus:bg-[#03D0B1] w-10/12 h-14 max-md:h-10 max-md:text-lg focus:bg-indigo-500 focus:text-white focus:placeholder:text-white bg-[#EAF0F7] rounded-l-xl pl-4 text-xl outline-none"
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              return setHidden((prev) => !prev);
            }}
            className="w-2/12 h-14 max-md:h-10 hover:bg-green-500 bg-[#EAF0F7] rounded-r-xl flex justify-center items-center"
          >
            <img
              src={hidden ? eye_closed_icon : eye_icon}
              alt="password hidden"
            />
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

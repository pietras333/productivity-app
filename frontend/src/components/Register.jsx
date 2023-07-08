import { useMemo, useState } from "react";
import { Transition } from "@tailwindui/react";
import cancel_icon from "../assets/illustrations/icons/cancel.png";
import eye_icon from "../assets/illustrations/icons/eye.png";
import eye_closed_icon from "../assets/illustrations/icons/eye-closed.png";
import ContinueWith from "./ContinueWith";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [serverData, setServerData] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [feedback, setFeedback] = useState(false);
  const [hidden, setHidden] = useState(true);

  const handleRegister = async (event) => {
    event.preventDefault();
    const response = await fetch("../api/register", {
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
    });
    const statusCode = response.status;
    setFeedback(statusCode === 403 ? true : false);
    const data = await response.json();
    setServerData({ data });
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
          Email is already used
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
          Account succesfully created
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
      case "first-name-reset":
        return setFirstName("");
      case "last-name-reset":
        return setLastName("");
      default:
        setFirstName("");
        setLastName("");
        return setEmail("");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        handleRegister(e);
      }}
      className="h-3/4 w-10/12 flex flex-col justify-around items-center"
    >
      <section className="w-3/4 flex flex-col justify-around items-center">
        <section className="w-full flex">
          <input
            id="first-name"
            name="first-name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstName}
            type="text"
            placeholder="Enter First Name👈"
            className="no-autofill w-11/12 h-14 max-md:h-10 max-md:text-lg dark:focus:bg-[#03D0B1] focus:bg-indigo-500 focus:text-white focus:placeholder:text-white bg-[#EAF0F7] rounded-l-xl pl-4 text-xl outline-none"
          />
          <button
            id="first-name-reset"
            onClick={(e) => {
              handleValueReset(e);
            }}
            className="no-autofill w-2/12 h-14 max-md:h-10 hover:bg-green-500 bg-[#EAF0F7] rounded-r-xl flex justify-center items-center"
          >
            <img src={cancel_icon} alt="cancel" />
          </button>
        </section>
        <section className="w-full flex mt-5">
          <input
            id="last-name"
            name="last-name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
            type="text"
            placeholder="Enter Last Name👈"
            className="no-autofill w-11/12 h-14 max-md:h-10 max-md:text-lg dark:focus:bg-[#03D0B1] focus:bg-indigo-500 focus:text-white focus:placeholder:text-white bg-[#EAF0F7] rounded-l-xl pl-4 text-xl outline-none"
          />
          <button
            id="last-name-reset"
            onClick={(e) => {
              handleValueReset(e);
            }}
            className="w-2/12 h-14 max-md:h-10 hover:bg-green-500 bg-[#EAF0F7] rounded-r-xl flex justify-center items-center"
          >
            <img src={cancel_icon} alt="cancel" />
          </button>
        </section>
        <section className="w-full flex mt-5">
          <input
            id="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            placeholder="Enter Email👈"
            className="no-autofill w-11/12 h-14 max-md:h-10 max-md:text-lg dark:focus:bg-[#03D0B1] focus:bg-indigo-500 focus:text-white focus:placeholder:text-white bg-[#EAF0F7] rounded-l-xl pl-4 text-xl outline-none"
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
        <Transition show={feedback} enter=""></Transition>
        <section className="w-full flex">
          <input
            id="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type={hidden ? "password" : "text"}
            placeholder="..."
            className="no-autofill w-10/12 h-14 max-md:h-10 max-md:text-lg dark:focus:bg-[#03D0B1] focus:bg-indigo-500 focus:text-white focus:placeholder:text-white bg-[#EAF0F7] rounded-l-xl pl-4 text-xl outline-none"
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
        <section className="mt-10 max-md:m-0 max-md:mt-12  w-full flex justify-center items-center">
          <button className="w-3/4 h-14 max-md:h-10 max-md:text-xl text-2xl dark:bg-[#03D0B1] text-white bg-indigo-600 rounded-xl hover:tracking-widest">
            Create Account
          </button>
        </section>
        <ContinueWith />
      </section>
    </form>
  );
};

export default Register;

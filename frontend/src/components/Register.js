import { useState } from "react";
import cancel_icon from "../assets/illustrations/icons/cancel.png";
import eye_icon from "../assets/illustrations/icons/eye.png";
import eye_closed_icon from "../assets/illustrations/icons/eye-closed.png";
import ContinueWith from "./ContinueWith";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [serverData, setServerData] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

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
        window.localStorage.setItem("authorizationToken", data.result.token);
      });
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
            name="first-name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstName}
            type="text"
            placeholder="Enter First Name👈"
            className="w-11/12 h-14 max-md:h-10 max-md:text-lg dark:focus:bg-[#03D0B1] focus:bg-indigo-500 focus:text-white focus:placeholder:text-white bg-[#EAF0F7] rounded-l-xl pl-4 text-xl outline-none"
          />
          <button className="w-2/12 h-14 max-md:h-10 hover:bg-green-500 bg-[#EAF0F7] rounded-r-xl flex justify-center items-center">
            <img src={cancel_icon} alt="cancel" />
          </button>
        </section>
        <section className="w-full flex mt-5">
          <input
            name="last-name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
            type="text"
            placeholder="Enter Last Name👈"
            className="w-11/12 h-14 max-md:h-10 max-md:text-lg dark:focus:bg-[#03D0B1] focus:bg-indigo-500 focus:text-white focus:placeholder:text-white bg-[#EAF0F7] rounded-l-xl pl-4 text-xl outline-none"
          />
          <button className="w-2/12 h-14 max-md:h-10 hover:bg-green-500 bg-[#EAF0F7] rounded-r-xl flex justify-center items-center">
            <img src={cancel_icon} alt="cancel" />
          </button>
        </section>
        <section className="w-full flex mt-5">
          <input
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            placeholder="Enter Email👈"
            className="w-11/12 h-14 max-md:h-10 max-md:text-lg dark:focus:bg-[#03D0B1] focus:bg-indigo-500 focus:text-white focus:placeholder:text-white bg-[#EAF0F7] rounded-l-xl pl-4 text-xl outline-none"
          />
          <button className="w-2/12 h-14 max-md:h-10 hover:bg-green-500 bg-[#EAF0F7] rounded-r-xl flex justify-center items-center">
            <img src={cancel_icon} alt="cancel" />
          </button>
        </section>
        <section className="w-full flex mt-5">
          <input
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            placeholder="..."
            className="w-10/12 h-14 max-md:h-10 max-md:text-lg dark:focus:bg-[#03D0B1] focus:bg-indigo-500 focus:text-white focus:placeholder:text-white bg-[#EAF0F7] rounded-l-xl pl-4 text-xl outline-none"
          />
          <button className="w-2/12 h-14 max-md:h-10 hover:bg-green-500 bg-[#EAF0F7] rounded-r-xl flex justify-center items-center">
            <img src={eye_closed_icon} alt="password hidden" />
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

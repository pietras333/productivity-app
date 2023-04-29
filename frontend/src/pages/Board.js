import { Transition } from "@tailwindui/react";
import { useLayoutEffect, useState } from "react";
import Avatar from "../assets/illustrations/avatar.png";
import BlobBlue from "../assets/illustrations/blobblue.png";
import BlobRed from "../assets/illustrations/blobred.png";
import BlobViolet from "../assets/illustrations/blobviolet.png";
import BlobPink from "../assets/illustrations/blobpink.png";

const Board = () => {
  const [loaderState, setLoaderState] = useState(true);
  const [currentLocalColor, setCurrentLocalColor] = useState("");
  const handleLoad = async () => {
    await delay(800);
    setLoaderState(false);
  };
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useLayoutEffect(() => {
    handleLoad();
  });

  const changeLocalMode = (e) => {
    const id = e.target.id;
    switch (id) {
      case "blue":
        localStorage.setItem("localMode", "#0066FF");
        return setCurrentLocalColor(localStorage.getItem("localMode"));
      case "pink":
        localStorage.setItem("localMode", "#D23C69");
        return setCurrentLocalColor(localStorage.getItem("localMode"));
      case "violet":
        localStorage.setItem("localMode", "#DB63FF");
        return setCurrentLocalColor(localStorage.getItem("localMode"));
      case "red":
        localStorage.setItem("localMode", "#FF4C4C");
        return setCurrentLocalColor(localStorage.getItem("localMode"));
      default:
        localStorage.setItem("localMode", "#0066FF");
        return setCurrentLocalColor(localStorage.getItem("localMode"));
    }
  };

  return (
    <div id="board" className="w-full h-full flex ">
      <section className="w-[20%] h-full ">
        <section className="h-[18%] w-full flex justify-center items-center">
          <section className="flex items-center justify-center w-full">
            <img
              id="avatar"
              src={Avatar}
              alt="avatar"
              className="w-[100px] rounded-[50%] border-4 border-[#0066FF]"
            />
            <h2 id="name" className="text-xl ml-4 text-[#0066FF]">
              Peter Griffin
            </h2>
          </section>
        </section>
        <section className="w-full h-[8%] flex items-center justify-center">
          <hr id="line-top" className="w-[66%] h-1 text-center bg-[#0066FF]" />
        </section>
        <nav className="w-full h-[62%]">
          <ul className="w-full">
            <li className=" flex justify-center items-center">
              <img className="w-[15%] m-4" src={BlobBlue} alt="Tasks" />
              <p
                id="blue"
                className="hover:font-semibold transition-all hover:cursor-pointer  hover:tracking-widest hover:text-[#0066FF] text-xl w-[60%] ml-[6%] text-[rgba(25,25,25,1)]"
                onClick={(e) => {
                  changeLocalMode(e);
                }}
              >
                Today Tasks
              </p>
            </li>
            <li className=" flex justify-center items-center">
              <img className="w-[15%] m-4" src={BlobPink} alt="Dashboard" />
              <p
                id="pink"
                className="hover:font-semibold transition-all hover:cursor-pointer  hover:tracking-widest hover:text-[rgb(211,60,105)] text-xl w-[60%] ml-[6%] text-[rgba(25,25,25,1)]"
                onClick={(e) => {
                  changeLocalMode(e);
                }}
              >
                Projected Tasks
              </p>
            </li>

            <li className=" flex justify-center items-center">
              <img className="w-[15%] m-4" src={BlobRed} alt="Dashboard" />
              <p
                id="red"
                className="hover:font-semibold transition-all hover:cursor-pointer hover:tracking-widest hover:text-[#FF4C4C] text-xl w-[60%] ml-[6%] text-[rgba(25,25,25,1)]"
                onClick={(e) => {
                  changeLocalMode(e);
                }}
              >
                Dashboard
              </p>
            </li>
            <li className=" flex justify-center items-center">
              <img className="w-[15%] m-4" src={BlobViolet} alt="Dashboard" />
              <p
                id="violet"
                className="hover:font-semibold transition-all hover:cursor-pointer  hover:tracking-widest hover:text-[#DB63FF] text-xl w-[60%] ml-[6%] text-[rgba(25,25,25,1)]"
                onClick={(e) => {
                  changeLocalMode(e);
                }}
              >
                Settings
              </p>
            </li>
            <li className=" flex justify-center items-center">
              <p className=" text-[rgba(25,25,25,.6)] text-center hover:cursor-pointer hover:text-red-500 transition-all hover:tracking-widest">
                Log out
              </p>
            </li>
          </ul>
        </nav>
        <section className="w-full h-[8%] flex items-center justify-center">
          <hr
            id="line-bottom"
            className="w-[46%] h-1 text-center bg-[#0066FF]"
          />
        </section>
        <h3 className="text-[rgba(25,25,25,.5)] text-center">Todooo 2023</h3>
      </section>
      <section
        id="dashboard"
        className="w-[80%] h-full bg-[#0066FF] rounded-l-3xl"
      ></section>
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

export default Board;

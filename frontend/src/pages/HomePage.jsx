import wallet from "../assets/illustrations/icons/wallet.png";
import security from "../assets/illustrations/icons/security.png";
import profile from "../assets/illustrations/icons/profile.png";
import landing from "../assets/illustrations/icons/landing.png";
import web from "../assets/illustrations/icons/web.png";
import data from "../assets/illustrations/icons/data.png";
import { useState } from "react";
import { Transition } from "@tailwindui/react";

const HomePage = () => {
  const [openMobile, setOpenMobile] = useState(false);

  const send = () => {
    fetch("../api/tasks/subtasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Action: "Addition",
        Authorization:
          "Bearer " + window.localStorage.getItem("authorizationToken"),
      },
      body: JSON.stringify({
        category: "Skincare",
        subtasks: {
          name: "gowno",
          new: {
            name: "gowno",
            date: "Dzisiaj",
            completed: false,
          },
        },
      }),
    });
  };

  const handleMobileMenu = () => {
    return setOpenMobile((prev) => !prev);
  };

  return (
    <main className="w-full bg-blue-400 h-full bg-home bg-cover bg-no-repeat font-Manrope flex flex-col">
      <nav
        className={`w-full max-lg:flex h-[80px] fixed z-20 ${
          openMobile
            ? "bg-opacity-100 bg-[#121313]"
            : "bg-opacity-50 bg-[#1E1E20]"
        } top-0 right-0 hidden justify-between items-center pr-6 pl-6`}
      >
        <h1 className="text-3xl text-blue-400 font-semibold flex items-center">
          <p className="bluegradient w-6 h-6 rounded-full"></p>
          <span className="ml-1">Focusio</span>
        </h1>
        <section className="container">
          <section
            id="hamburger"
            className={openMobile ? "open" : ""}
            onClick={handleMobileMenu}
          >
            <svg width="100" height="100" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </section>
        </section>
      </nav>
      <Transition
        show={openMobile}
        as="nav"
        className="fixed top-0 right-0 w-full h-screen bg-[#121313] z-10 flex justify-center items-center"
        enter="transition-all duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-all duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ul className="w-11/12 h-3/4 flex flex-col justify-around items-center text-xl font-semibold text-white">
          <li className="opacity-50 hover:opacity-100 hover:cursor-pointer text-center">
            Products
          </li>
          <li className="opacity-50 hover:opacity-100 hover:cursor-pointer text-center">
            Pricing
          </li>
          <li className="opacity-50 hover:opacity-100 hover:cursor-pointer text-center">
            Patch Release
          </li>
          <li className="ml-36 max-lg:ml-14 max-md:ml-0 flex justify-center items-center">
            <button className="outline-white hover:opacity-100 max-lg:text-sm opacity-50 text-opacity-30 flex justify-center items-center outline-1 outline-none pt-3 pb-3 pl-5 pr-5 rounded-full">
              <a href="../get-started">Create Account</a>
            </button>
          </li>
        </ul>
      </Transition>
      <header className="w-full flex flex-col justify-center">
        <nav className="w-full  h-[135px] flex justify-center max-lg:hidden">
          <ul className="w-4/6 h-full text-3xl max-[2559px]:text-xl max-2xl:text-lg max-xl:text-base max-lg:text-sm max-xl:w-full max-2xl:w-4/5 pl-12 pr-12font-medium text-white flex items-center justify-around">
            <li className="text-5xl max-[2559px]:text-3xl max-2xl:text-2xl max-xl:text-xl max-lg:text-base text-white font-semibold flex items-center">
              <p className="bluegradient w-6 h-6 max-xl:w-5 max-xl:h-5 max-lg:h-4 max-lg:w-4 rounded-full"></p>
              <span className="ml-1">Focusio</span>
            </li>
            <li className="opacity-50 hover:opacity-100 hover:cursor-pointer">
              Products
            </li>
            <li className="opacity-50 hover:opacity-100 hover:cursor-pointer">
              Pricing
            </li>
            <li className="opacity-50 mr-36 hover:opacity-100 hover:cursor-pointer">
              Patch Release
            </li>
            <li className="ml-36 max-lg:ml-14 max-md:ml-0">
              <button className="outline-white hover:opacity-100 max-lg:text-sm opacity-50 text-opacity-30 flex justify-center items-center outline-1 outline-none pt-3 pb-3 pl-5 pr-5 rounded-full">
                <a href="../get-started">Create Account</a>
              </button>
            </li>
          </ul>
        </nav>
        <section className="w-full h-[110vh] max-md:h-[90vh] max-md:flex max-md:flex-col max-md:items-center">
          <h1 className="text-[10rem] max-[2559px]:text-8xl max-2xl:text-7xl max-md:text-5xl mt-24 font-bold text-white flex flex-col items-center max-md:justify-center">
            <span>Connect with</span>
            <span className="mt-1">your mind</span>
          </h1>
          <p className="flex text-center max-[2559px]:text-lg text-2xl max-2xl:text-base max-md:text-xs max-md:w-3/4 flex-col items-center text-white text-opacity-40 font-medium mt-12">
            <span>Elevate your focus. Maximize productivity.</span>
            <span>
              Accomplish tasks effortlessly. Unleash your full potential.
            </span>
          </p>
          <section className="flex justify-center items-center">
            <button className="bluegradient border border-white hover:tracking-wide text-white max-[2559px]:text-xl max-[2559px]:w-[250px] w-[400px] text-3xl max-2xl:text-xl max-2xl:w-[200px] max-md:w-[150px] max-md:text-sm pt-3 pb-3 pl-5 pr-5 rounded-full mt-12 shadow-blue-500 blueshadow">
              <a href="../sign-in">Returning User</a>
            </button>
          </section>
        </section>
      </header>

      <section className="w-full h-[130vh] max-md:h-[120vh] bg-white flex justify-center items-end relative">
        <article className="bluegradient w-3/4 max-xl:w-11/12 h-2/3 max-md:h-2/3 rounded-3xl absolute -top-[30%] max-md:-top-[25%] ml-auto mr-auto left-0 right-0">
          <header className="w-full h-1/3 flex flex-col justify-center items-center text-white">
            <h2 className="text-9xl max-[2559px]:text-7xl max-2xl:text-5xl max-xl:text-5xl max-md:text-2xl max-md:text-center font-bold mt-24 max-md:mt-2">
              Choose us, choose wisely.
            </h2>
            <p className="w-1/2 max-md:w-3/4 max-[2559px]:text-lg text-xl max-2xl:text-base max-xl:text-sm max-md:text-xs font-medium opacity-50 text-center mt-12 max-md:mt-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo molestias deserunt nulla, eligendi fuga magni ipsum,
              quaerat obcaecati voluptate corrupti voluptatibus facilis
              accusantium eaque voluptas nemo, voluptates reiciendis? Vitae,
              velit!
            </p>
          </header>
          <main className="w-full h-2/3 max-md:mt-4">
            <ul className="w-full h-full max-md:snap-y max-md:snap-mandatory max-md:h-3/4 flex max-md:flex-col max-md:overflow-scroll max-md:justify-start justify-around items-center">
              <li className="bg-white max-md:snap-center rounded-3xl h-2/3 w-1/4 max-md:w-3/4 max-md:mt-12 p-4 max-md:p-2 max-md:pl-4 pl-6">
                <h3 className="text-2xl max-[2559px]:text-xl max-2xl:text-lg max-xl:text-base max-lg:text-sm text-blue-500 font-medium">
                  1.
                </h3>
                <h2 className="text-4xl max-[2559px]:text-2xl max-2xl:text-xl max-xl:text-lg max-lg:text-base text-black font-semibold mt-1">
                  Created in 2023.
                </h2>
                <p className="opacity-50 max-[2559px]:text-base mt-4 max-md:mt-2 text-3xl max-2xl:text-base max-xl:text-sm max-lg:text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates enim, magnam alias modi ad dolores cumque officia
                  sunt nemo iste.
                </p>
              </li>
              <li className="bg-white max-md:snap-center rounded-3xl h-2/3 w-1/4 max-md:w-3/4 max-md:mt-12 p-4 max-md:p-2 max-md:pl-4 pl-6">
                <h3 className="text-2xl max-[2559px]:text-xl max-2xl:text-lg max-xl:text-base max-lg:text-sm text-blue-500 font-medium">
                  2.
                </h3>
                <h2 className="text-4xl max-[2559px]:text-2xl max-2xl:text-xl max-xl:text-lg max-lg:text-base text-black font-semibold mt-1">
                  Made in California.
                </h2>
                <p className="opacity-50 max-[2559px]:text-base mt-4 max-md:mt-2 text-3xl max-2xl:text-base max-xl:text-sm max-lg:text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates enim, magnam alias modi ad dolores cumque officia
                  sunt nemo iste.
                </p>
              </li>
              <li className="bg-white max-md:snap-center rounded-3xl h-2/3 w-1/4 max-md:w-3/4 max-md:mt-12 max-md:mb-12 p-4 max-md:p-2 max-md:pl-4 pl-6">
                <h3 className="text-2xl max-[2559px]:text-xl max-2xl:text-lg max-xl:text-base max-lg:text-sm text-blue-500 font-medium">
                  3.
                </h3>
                <h2 className="text-4xl max-[2559px]:text-2xl max-2xl:text-xl max-xl:text-lg max-lg:text-base text-black font-semibold mt-1">
                  Within small business.
                </h2>
                <p className="opacity-50 max-[2559px]:text-base mt-4 max-md:mt-2 text-3xl max-2xl:text-base max-xl:text-sm max-lg:text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates enim, magnam alias modi ad dolores cumque officia
                  sunt nemo iste.
                </p>
              </li>
            </ul>
          </main>
        </article>
        <section className="w-full h-2/3 flex flex-col justify-center items-center">
          <header className="w-2/3 flex justify-center">
            <h3 className="text-2xl max-[2559px]:text-base max-2xl:text-base max-xl:text-sm max-lg:text-xs max-md:mt-6 text-black text-opacity-30 font-semibold">
              Change the way you work.
            </h3>
          </header>
          <main className="w-2/3 max-md:w-full flex flex-col justify-center items-center">
            <h2 className="text-[#1E1E20] max-[2559px]:text-4xl flex flex-col justify-center items-center text-8xl max-2xl:text-2xl max-[2559px]:mt-5 max-xl:text-xl max-xl:mt-5 max-lg:mt-2 max-lg:text-lg font-bold mt-20">
              <span className="mb-4 max-2xl:mb-2">Some of our features </span>
              <span>that will help you</span>
            </h2>
            <p className="max-[2559px]:text-base text-xl max-2xl:text-base max-xl:text-sm max-lg:text-xs w-1/2 text-center mt-12 max-md:mt-2 text-black text-opacity-30 font-semibold flex flex-col justify-center items-center">
              <span>
                With cube, you can build your app or website faster than before.
                Featured with an
              </span>
              <span className="mt-2">
                awesome things inside that will help you in your design process
              </span>
            </p>
          </main>
          <ul className="w-7/12 max-lg:w-9/12 max-md:w-11/12 flex justify-between items-center mt-16 max-md:mt-4">
            <li>
              <img
                src={security}
                alt="Shield Icon"
                className="w-[220px] max-2xl:w-[80px] max-[2559px]:w-[100px] max-md:w-[60px]"
              />
              <h2 className="text-5xl max-[2559px]:text-2xl max-2xl:text-2xl max-lg:text-xl max-md:text-base font-bold ml-6 text-opacity-70 text-[#1E1E20]">
                High security.
              </h2>
              <p className="text-2xl max-[2559px]:text-base max-2xl:text-base max-lg:text-sm ml-6 mt-4 max-md:text-xs text-opacity-30 text-[#1E1E20]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque expedita sint repudiandae repellendus similique
                tempore libero corporis maxime eius repellat.
              </p>
            </li>
            <li>
              <img
                src={wallet}
                alt="Wallet Icon"
                className="w-[220px] max-2xl:w-[80px] max-[2559px]:w-[100px] max-md:w-[60px]"
              />
              <h2 className="text-5xl max-[2559px]:text-2xl max-2xl:text-2xl max-lg:text-xl max-md:text-base font-bold ml-6 text-opacity-70 text-[#1E1E20]">
                Tottally free.
              </h2>
              <p className="text-2xl max-[2559px]:text-base max-2xl:text-base max-lg:text-sm ml-6 mt-4 max-md:text-xs text-opacity-30 text-[#1E1E20]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque expedita sint repudiandae repellendus similique
                tempore libero corporis maxime eius repellat.
              </p>
            </li>
            <li>
              <img
                src={profile}
                alt="Profile Icon"
                className="w-[220px] max-2xl:w-[80px] max-[2559px]:w-[100px] max-md:w-[60px]"
              />
              <h2 className="text-5xl max-[2559px]:text-2xl max-2xl:text-2xl max-lg:text-xl max-md:text-base font-bold ml-6 text-opacity-70 text-[#1E1E20]">
                Easy access.
              </h2>
              <p className="text-2xl max-[2559px]:text-base max-2xl:text-base max-lg:text-sm ml-6 mt-4 max-md:text-xs text-opacity-30 text-[#1E1E20]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque expedita sint repudiandae repellendus similique
                tempore libero corporis maxime eius repellat.
              </p>
            </li>
          </ul>
        </section>
      </section>

      <section className="w-full h-[200vh] bg-[#121313] flex flex-col  justify-center items-start relative">
        <section className="w-full h-1/2 flex max-md:flex-col text-white max-md:items-center">
          <aside className="w-1/2 max-md:w-full h-full flex justify-center ">
            <img
              src={web}
              alt="Web Isometric"
              className="w-4/5 max-xl:w-full"
            />
          </aside>
          <main className="w-2/5 max-md:w-full h-full flex justify-center">
            <section className="w-2/3 h-full flex flex-col justify-center items-start max-md:items-center max-md:text-center">
              <h2 className="text-9xl max-[2559px]:text-5xl max-2xl:text-5xl max-xl:text-3xl max-lg:text-2xl font-bold">
                Easy and effortless way to express your ideas
              </h2>
              <p className="text-2xl max-[2559px]:text-lg max-2xl:text-lg max-xl:text-base max-lg:text-sm opacity-30 mt-6 tracking-wide">
                With Focusio, you can easily connect with your mind in different
                fields. You can create, manage, and edit whatever you want
                inside the to-do lists. Create as many as you want.
              </p>
              <button className="outline-white max-[2559px]:text-xl max-[2559px]:w-[300px] hover:opacity-100 text-3xl font-semibold mt-6 w-[450px] max-2xl:w-[300px] max-2xl:text-lg max-xl:text-base max-xl:w-[250px] max-lg:text-sm max-lg:w-[220px] opacity-50 text-opacity-30 flex justify-center items-center outline-1 outline-none pt-3 pb-3 pl-5 pr-5 rounded-full">
                Learn more about Focusio
              </button>
            </section>
          </main>
        </section>
        <section className="w-full h-1/2 flex max-md:flex-col-reverse text-white justify-end">
          <main className="w-2/5 max-md:w-full h-full flex justify-center items-start">
            <section className="w-2/3 h-full flex flex-col justify-start max-md:items-center max-md:text-center">
              <h2 className="text-9xl max-[2559px]:text-5xl max-2xl:text-5xl max-xl:text-3xl max-lg:text-2xl font-bold">
                Tons of spaces for your mind to discover
              </h2>
              <p className="text-2xl max-[2559px]:text-lg max-2xl:text-lg max-xl:text-base max-lg:text-sm opacity-30 mt-6 tracking-wide">
                Search, create, and edit any idea you want. Save them in your
                mind as well as in our cloud. Help your mind with the newest
                technology and stay productive.
              </p>
              <button className="outline-white hover:opacity-100 max-[2559px]:text-xl max-[2559px]:w-[300px] text-3xl font-semibold mt-6 w-[450px] max-2xl:w-[300px] max-2xl:text-lg max-xl:text-base max-xl:w-[250px] max-lg:text-sm max-lg:w-[220px] opacity-50 text-opacity-30 flex justify-center items-center outline-1 outline-none pt-3 pb-3 pl-5 pr-5 rounded-full">
                Explore the opportunities
              </button>
            </section>
          </main>
          <aside className="w-1/2 max-md:w-full h-full relative">
            <img
              src={data}
              alt="Data Processing Isometric"
              className="w-4/5 -top-[20%] max-xl:top-0 max-xl:w-full absolute"
            />
          </aside>
        </section>
      </section>

      <section className="w-full h-[75vh] bg-white flex flex-col justify-center items-start relative">
        <section className="w-3/5 max-md:w-11/12 max-md:h-2/5 max-md:-top-[15%] h-3/5 bluegradient absolute -top-[35%] left-0 right-0 ml-auto mr-auto rounded-3xl flex justify-center flex-col items-center">
          <h2 className="flex max-[2559px]:text-4xl flex-col items-center text-7xl max-2xl:text-4xl max-md:text-xl max-xl:text-3xl font-extrabold text-white">
            <span>Join thousands</span>
            <span>creative minds on Focusio</span>
          </h2>
          <p className="text-center max-[2559px]:text-lg max-md:mt-4 max-md:text-xs text-white mt-12 opacity-30 text-2xl max-2xl:text-lg max-xl:text-base font-medium w-1/2">
            With Focusio, you can get your tasks done faster and better.
            Featuring many ways to help you maximize your productivity.
          </p>
          <button className="bg-white hover:tracking-wide max-md:w-[150px] max-md:mt-4 max-[2559px]:text-xl max-[2559px]:w-[200px] text-black text-3xl max-2xl:text-xl max-2xl:w-[200px] max-xl:text-base max-xl:w-[150px] font-normal mt-12 w-[350px] flex justify-center items-center pt-3 pb-3 pl-5 pr-5 rounded-full">
            <a href="../get-started">Get started</a>
          </button>
        </section>
        <section className="h-3/5 w-full flex justify-center absolute bottom-0 border border-transparent border-t-black border-opacity-30">
          <section className="w-2/3 max-lg:w-3/4 max-md:w-full h-full flex">
            <section className="w-1/3 max-xl:w-1/2 h-full pl-8 relative flex justify-start flex-col items-start">
              <section className="w-full h-full mt-24 ml-8">
                <h2 className="flex items-center">
                  <p className="bluegradient w-16 h-16 max-[2559px]:w-7 max-[2559px]:h-7 max-2xl:w-7 max-2xl:h-7 max-xl:w-5 max-xl:h-5 rounded-full"></p>
                  <span className="text-4xl max-[2559px]:text-xl max-2xl:text-xl max-xl:text-lg ml-1 font-bold tracking-tighter">
                    Focusio
                  </span>
                </h2>
                <p className="w-2/3 text-xl max-[2559px]:text-base max-2xl:text-base max-xl:text-sm text-black opacity-30 font-semibold mt-4">
                  A project management and productivity app, just for you.
                </p>
              </section>
              <h3 className="absolute max-[2559px]:text-base text-xl max-2xl:text-base max-xl:text-sm bottom-8 text-black opacity-30">
                2023 Focusio. Copyright and All rights reserved.
              </h3>
            </section>
            <section className="w-2/3 max-xl:w-1/2 h-full">
              <ul className="h-full w-full flex text-left justify-center items-center flex-col text-black text-3xl max-[2559px]:text-lg max-2xl:text-lg max-xl:text-base">
                <section className="flex flex-col">
                  <li className="hover:opacity-100 opacity-50 hover:cursor-pointer mt-2">
                    Contact
                  </li>
                  <li className="hover:opacity-100 opacity-50 hover:cursor-pointer mt-2">
                    About
                  </li>
                  <li className="hover:opacity-100 opacity-50 hover:cursor-pointer mt-2">
                    <a href="../get-started">Get Started</a>
                  </li>
                  <li className="hover:opacity-100 opacity-50 hover:cursor-pointer mt-2">
                    <a href="../sign-in">Sign In</a>
                  </li>
                  <li className="hover:opacity-100 opacity-50 hover:cursor-pointer mt-2">
                    Powered by Icons8
                  </li>
                </section>
              </ul>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
};

export default HomePage;

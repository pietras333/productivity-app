import wallet from "../assets/illustrations/icons/wallet.png";
import security from "../assets/illustrations/icons/security.png";
import profile from "../assets/illustrations/icons/profile.png";
import landing from "../assets/illustrations/icons/landing.png";
import web from "../assets/illustrations/icons/web.png";
import data from "../assets/illustrations/icons/data.png";

const HomePage = () => {
  return (
    <main className="w-full bg-blue-400 h-full bg-home bg-cover bg-no-repeat font-Manrope flex items-center flex-col">
      <header className="w-full flex flex-col justify-center">
        <nav className="w-full h-[135px] flex justify-center">
          <ul className="w-4/6 h-full text-3xl max-[2559px]:text-xl max-2xl:text-lg max-xl:text-base max-lg:text-sm max-lg:w-full pl-12 pr-12 font-medium text-white flex items-center justify-around">
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
            <li className="ml-36 max-lg:ml-14">
              <button className="outline-white hover:opacity-100 opacity-50 text-opacity-30 flex justify-center items-center outline-1 outline-none pt-3 pb-3 pl-5 pr-5 rounded-full">
                Create Account
              </button>
            </li>
          </ul>
        </nav>
        <section className="w-full h-[110vh]">
          <h1 className="text-[10rem] max-[2559px]:text-8xl max-2xl:text-7xl mt-24 font-bold text-white flex flex-col items-center">
            <span>Connect with</span>
            <span className="mt-1">your mind</span>
          </h1>
          <p className="flex max-[2559px]:text-lg text-2xl max-2xl:text-base flex-col items-center text-white text-opacity-40 font-medium mt-12">
            <span>Elevate your focus. Maximize productivity.</span>
            <span>
              Accomplish tasks effortlessly. Unleash your full potential.
            </span>
          </p>
          <section className="flex justify-center items-center">
            <button className="bluegradient border border-white hover:tracking-wide text-white max-[2559px]:text-xl max-[2559px]:w-[250px] w-[400px] text-3xl max-2xl:text-xl max-2xl:w-[200px] pt-3 pb-3 pl-5 pr-5 rounded-full mt-12 shadow-blue-500 blueshadow">
              Returning user
            </button>
          </section>
        </section>
      </header>

      <section className="w-full h-[130vh] bg-white flex justify-center items-end relative">
        <article className="bluegradient w-3/4 max-xl:w-11/12 h-2/3 rounded-3xl absolute -top-[30%] ml-auto mr-auto left-0 right-0">
          <header className="w-full h-1/3 flex flex-col justify-center items-center text-white">
            <h2 className="text-9xl max-[2559px]:text-7xl max-2xl:text-5xl max-xl:text-5xl font-bold mt-24">
              Choose us, choose wisely.
            </h2>
            <p className="w-1/2 max-[2559px]:text-lg text-xl max-2xl:text-base max-xl:text-sm font-medium opacity-50 text-center mt-12">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo molestias deserunt nulla, eligendi fuga magni ipsum,
              quaerat obcaecati voluptate corrupti voluptatibus facilis
              accusantium eaque voluptas nemo, voluptates reiciendis? Vitae,
              velit!
            </p>
          </header>
          <main className="w-full h-2/3">
            <ul className="w-full h-full flex justify-around items-center">
              <li className="bg-white rounded-3xl h-1/2 w-1/4 p-4 pl-6">
                <h3 className="text-2xl max-[2559px]:text-xl max-2xl:text-lg max-xl:text-base max-lg:text-sm text-blue-500 font-medium">
                  1
                </h3>
                <h2 className="text-4xl max-[2559px]:text-2xl max-2xl:text-xl max-xl:text-lg max-lg:text-base text-black font-semibold mt-1">
                  Created in 2023.
                </h2>
                <p className="opacity-50 max-[2559px]:text-base mt-4 text-3xl max-2xl:text-base max-xl:text-sm max-lg:text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates enim, magnam alias modi ad dolores cumque officia
                  sunt nemo iste.
                </p>
              </li>
              <li className="bg-white rounded-3xl h-1/2 w-1/4 p-4 pl-6">
                <h3 className="text-2xl max-[2559px]:text-xl max-2xl:text-lg max-xl:text-base max-lg:text-sm text-blue-500 font-medium">
                  1
                </h3>
                <h2 className="text-4xl max-[2559px]:text-2xl max-2xl:text-xl max-xl:text-lg max-lg:text-base text-black font-semibold mt-1">
                  Created in 2023.
                </h2>
                <p className="opacity-50 max-[2559px]:text-base mt-4 text-3xl max-2xl:text-base max-xl:text-sm max-lg:text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates enim, magnam alias modi ad dolores cumque officia
                  sunt nemo iste.
                </p>
              </li>
              <li className="bg-white rounded-3xl h-1/2 w-1/4 p-4 pl-6">
                <h3 className="text-2xl max-[2559px]:text-xl max-2xl:text-lg max-xl:text-base max-lg:text-sm text-blue-500 font-medium">
                  1
                </h3>
                <h2 className="text-4xl max-[2559px]:text-2xl max-2xl:text-xl max-xl:text-lg max-lg:text-base text-black font-semibold mt-1">
                  Created in 2023.
                </h2>
                <p className="opacity-50 max-[2559px]:text-base mt-4 text-3xl max-2xl:text-base max-xl:text-sm max-lg:text-xs">
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
            <h3 className="text-2xl max-[2559px]:text-base max-2xl:text-base max-xl:text-sm max-lg:text-xs text-black text-opacity-30 font-semibold">
              Change the way you work.
            </h3>
          </header>
          <main className="w-2/3 flex flex-col justify-center items-center">
            <h2 className="text-[#1E1E20] max-[2559px]:text-4xl flex flex-col justify-center items-center text-8xl max-2xl:text-2xl max-[2559px]:mt-5 max-xl:text-xl max-xl:mt-5 max-lg:mt-2 max-lg:text-lg font-bold mt-20">
              <span className="mb-4 max-2xl:mb-2">Some of our features </span>
              <span>that will help you</span>
            </h2>
            <p className="max-[2559px]:text-base text-xl max-2xl:text-base max-xl:text-sm max-lg:text-xs w-1/2 text-center mt-12 text-black text-opacity-30 font-semibold flex flex-col justify-center items-center">
              <span>
                With cube, you can build your app or website faster than before.
                Featured with an
              </span>
              <span className="mt-2">
                awesome things inside that will help you in your design process
              </span>
            </p>
          </main>
          <ul className="w-7/12 max-lg:w-9/12 flex justify-between items-center mt-16">
            <li>
              <img
                src={security}
                alt="Shield Icon"
                className="w-[220px] max-2xl:w-[80px] max-[2559px]:w-[100px]"
              />
              <h2 className="text-5xl max-[2559px]:text-2xl max-2xl:text-2xl max-lg:text-xl font-bold ml-6 text-opacity-70 text-[#1E1E20]">
                High security.
              </h2>
              <p className="text-2xl max-[2559px]:text-base max-2xl:text-base max-lg:text-sm ml-6 mt-4 text-opacity-30 text-[#1E1E20]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque expedita sint repudiandae repellendus similique
                tempore libero corporis maxime eius repellat.
              </p>
            </li>
            <li>
              <img
                src={wallet}
                alt="Wallet Icon"
                className="w-[220px] max-2xl:w-[80px] max-[2559px]:w-[100px]"
              />
              <h2 className="text-5xl max-[2559px]:text-2xl max-2xl:text-2xl max-lg:text-xl font-bold ml-6 text-opacity-70 text-[#1E1E20]">
                Tottally free.
              </h2>
              <p className="text-2xl max-[2559px]:text-base max-2xl:text-base max-lg:text-sm ml-6 mt-4 text-opacity-30 text-[#1E1E20]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque expedita sint repudiandae repellendus similique
                tempore libero corporis maxime eius repellat.
              </p>
            </li>
            <li>
              <img
                src={profile}
                alt="Profile Icon"
                className="w-[220px] max-2xl:w-[80px] max-[2559px]:w-[100px]"
              />
              <h2 className="text-5xl max-[2559px]:text-2xl max-2xl:text-2xl max-lg:text-xl font-bold ml-6 text-opacity-70 text-[#1E1E20]">
                Easy access.
              </h2>
              <p className="text-2xl max-[2559px]:text-base max-2xl:text-base max-lg:text-sm ml-6 mt-4 text-opacity-30 text-[#1E1E20]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque expedita sint repudiandae repellendus similique
                tempore libero corporis maxime eius repellat.
              </p>
            </li>
          </ul>
        </section>
      </section>

      <section className="w-full h-[200vh] bg-[#121313] flex flex-col justify-center items-start relative">
        <section className="w-full h-1/2 flex text-white">
          <aside className="w-1/2 h-full flex justify-center items-center">
            <img
              src={web}
              alt="Web Isometric"
              className="w-4/5 max-xl:w-full"
            />
          </aside>
          <main className="w-2/5 h-full flex justify-center">
            <section className="w-2/3 h-full flex flex-col justify-center items-start">
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
        <section className="w-full h-1/2 flex text-white justify-end">
          <main className="w-2/5 h-full flex justify-center items-start">
            <section className="w-2/3 h-full flex flex-col justify-start">
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
          <aside className="w-1/2 h-full relative">
            <img
              src={data}
              alt="Data Processing Isometric"
              className="w-4/5 -top-[20%] max-xl:top-0 max-xl:w-full absolute"
            />
          </aside>
        </section>
      </section>

      <section className="w-full h-[75vh] bg-white flex flex-col justify-center items-start relative">
        <section className="w-3/5 h-3/5 bluegradient absolute -top-[35%] left-0 right-0 ml-auto mr-auto rounded-3xl flex justify-center flex-col items-center">
          <h2 className="flex max-[2559px]:text-4xl flex-col items-center text-7xl max-2xl:text-4xl max-xl:text-3xl font-extrabold text-white">
            <span>Join thousands</span>
            <span>creative minds on Focusio</span>
          </h2>
          <p className="text-center max-[2559px]:text-lg text-white mt-12 opacity-30 text-2xl max-2xl:text-lg max-xl:text-base font-medium w-1/2">
            With Focusio, you can get your tasks done faster and better.
            Featuring many ways to help you maximize your productivity.
          </p>
          <button className="bg-white hover:tracking-wide max-[2559px]:text-xl max-[2559px]:w-[200px] text-black text-3xl max-2xl:text-xl max-2xl:w-[200px] max-xl:text-base max-xl:w-[150px] font-normal mt-12 w-[350px] flex justify-center items-center pt-3 pb-3 pl-5 pr-5 rounded-full">
            Get started
          </button>
        </section>
        <section className="h-3/5 w-full flex justify-center absolute bottom-0 border border-transparent border-t-black border-opacity-30">
          <section className="w-2/3 max-lg:w-3/4 h-full flex">
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
                    Get started
                  </li>
                  <li className="hover:opacity-100 opacity-50 hover:cursor-pointer mt-2">
                    Sign in
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

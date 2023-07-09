import wallet from "../assets/illustrations/icons/wallet.png";
import security from "../assets/illustrations/icons/security.png";
import profile from "../assets/illustrations/icons/profile.png";
import landing from "../assets/illustrations/icons/landing.png";
import web from "../assets/illustrations/icons/web.png";
import data from "../assets/illustrations/icons/data.png";

const HomePage = () => {
  return (
    <section className="w-full bg-blue-400 h-full bg-home bg-cover bg-no-repeat font-Manrope flex items-center flex-col">
      <nav className="w-full h-[135px] flex justify-center">
        <ul className="w-4/6 h-full text-lg font-medium text-white flex items-center justify-around">
          <li className="text-2xl text-white font-semibold flex items-center">
            <p className="bluegradient w-6 h-6 rounded-full"></p>
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
          <li className="ml-36">
            <button className="outline-white hover:opacity-100 opacity-50 text-opacity-30 flex justify-center items-center outline-1 outline-none pt-3 pb-3 pl-5 pr-5 rounded-full">
              Create Account
            </button>
          </li>
        </ul>
      </nav>
      <main className="w-2/3 h-[110vh]">
        <header className="w-full mt-24">
          <h1 className="text-8xl font-bold text-white flex flex-col items-center">
            <span>Connect with</span>
            <span className="mt-1">your mind</span>
          </h1>
          <p className="flex text-xl flex-col items-center text-white text-opacity-40 font-medium mt-12">
            <span>Elevate your focus. Maximize productivity.</span>
            <span>
              Accomplish tasks effortlessly. Unleash your full potential.
            </span>
          </p>
        </header>
        <main className="flex justify-center items-center">
          <button className="bluegradient border border-white hover:tracking-wide text-white w-1/6 text-xl pt-3 pb-3 pl-5 pr-5 rounded-full mt-12 shadow-blue-500 blueshadow">
            Get Started
          </button>
        </main>
      </main>
      <section className="w-full h-[130vh] bg-white flex justify-center items-end relative">
        <section className="bluegradient w-3/4 h-2/3 rounded-3xl absolute -top-[30%] ml-auto mr-auto left-0 right-0">
          <header className="w-full h-1/3 flex flex-col justify-center items-center text-white">
            <h2 className="text-6xl font-bold mt-24">
              Choose us, choose wisely.
            </h2>
            <p className="w-1/2 text-base font-medium opacity-50 text-center mt-8">
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
                <h3 className="text-lg text-blue-500 font-medium">1</h3>
                <h2 className="text-xl text-black font-semibold mt-1">
                  Created in 2023.
                </h2>
                <p className="opacity-50 mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates enim, magnam alias modi ad dolores cumque officia
                  sunt nemo iste.
                </p>
              </li>
              <li className="bg-white rounded-3xl h-1/2 w-1/4 p-4 pl-6">
                <h3 className="text-lg text-blue-500 font-medium">1</h3>
                <h2 className="text-xl text-black font-semibold mt-1">
                  Trusted by many.
                </h2>
                <p className="opacity-50 mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates enim, magnam alias modi ad dolores cumque officia
                  sunt nemo iste.
                </p>
              </li>
              <li className="bg-white rounded-3xl h-1/2 w-1/4 p-4 pl-6">
                <h3 className="text-lg text-blue-500 font-medium">1</h3>
                <h2 className="text-xl text-black font-semibold mt-1">
                  Produced in <span className="text-red-500">Poland</span>.
                </h2>
                <p className="opacity-50 mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates enim, magnam alias modi ad dolores cumque officia
                  sunt nemo iste.
                </p>
              </li>
            </ul>
          </main>
        </section>
        <main className="w-full h-2/3 flex flex-col justify-center items-center">
          <header className="w-2/3 flex justify-center">
            <h3 className="text-xl text-black text-opacity-30 font-semibold">
              Change the way you work.
            </h3>
          </header>
          <main className="w-2/3 flex flex-col justify-center items-center">
            <h2 className="text-[#1E1E20] flex flex-col justify-center items-center text-6xl font-bold mt-20">
              <span className="mb-4">Some of our features </span>
              <span>that will help you</span>
            </h2>
            <p className="text-base w-1/2 text-center mt-12 text-black text-opacity-30 font-semibold flex flex-col justify-center items-center">
              <span>
                With cube, you can build your app or website faster than before.
                Featured with an
              </span>
              <span className="mt-2">
                awesome things inside that will help you in your design process
              </span>
            </p>
          </main>
          <ul className="w-7/12 flex justify-between items-center mt-16">
            <li>
              <img src={security} alt="shield" className="w-[120px]" />
              <h2 className="text-2xl font-bold ml-6 text-opacity-70 text-[#1E1E20]">
                High security.
              </h2>
              <p className="text-base ml-6 mt-4 text-opacity-30 text-[#1E1E20]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque expedita sint repudiandae repellendus similique
                tempore libero corporis maxime eius repellat.
              </p>
            </li>
            <li>
              <img src={wallet} alt="wallet" className="w-[120px]" />
              <h2 className="text-2xl font-bold ml-6 text-opacity-70 text-[#1E1E20]">
                Tottally free.
              </h2>
              <p className="text-base ml-6 mt-4 text-opacity-30 text-[#1E1E20]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque expedita sint repudiandae repellendus similique
                tempore libero corporis maxime eius repellat.
              </p>
            </li>
            <li>
              <img src={profile} alt="profile" className="w-[120px]" />
              <h2 className="text-2xl font-bold ml-6 text-opacity-70 text-[#1E1E20]">
                Easy access.
              </h2>
              <p className="text-base ml-6 mt-4 text-opacity-30 text-[#1E1E20]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque expedita sint repudiandae repellendus similique
                tempore libero corporis maxime eius repellat.
              </p>
            </li>
          </ul>
        </main>
      </section>
      <section className="w-full h-[200vh] bg-[#121313] flex flex-col justify-center items-start">
        <section className="w-full h-1/2 flex text-white ">
          <aside className="w-1/2 h-full flex justify-center items-center">
            <img src={web} alt="web isometric" className="w-4/5" />
          </aside>
          <main className="w-2/5 h-full flex justify-center">
            <section className="w-2/3 h-full flex flex-col justify-center items-start">
              <h2 className="text-7xl font-bold">
                Easy and effortless way to express your ideas
              </h2>
              <p className="text-base opacity-30 mt-6 tracking-wide">
                With focusio you can easliy connect with your min in a different
                fields, you can create, manage, and edit what ever you want
                inside the to do lists. Create as many as you want
              </p>
              <button className="outline-white hover:opacity-100 text-lg font-semibold mt-6 w-[300px] opacity-50 text-opacity-30 flex justify-center items-center outline-1 outline-none pt-3 pb-3 pl-5 pr-5 rounded-full">
                Learn more about focusio
              </button>
            </section>
          </main>
        </section>
        <section className="w-full h-1/2 flex text-white justify-end">
          <main className="w-2/5 h-full flex justify-center items-start">
            <section className="w-2/3 h-full flex flex-col justify-start">
              <h2 className="text-7xl font-bold">
                Tons spaces of mind you can discover
              </h2>
              <p className="text-base opacity-30 mt-6 tracking-wide">
                Search, create and edit any idea you want. Save them in your
                mind as well as in our cloud. Help your mind with newest
                technology and stay productive.
              </p>
              <button className="outline-white hover:opacity-100 text-lg font-semibold mt-6 w-[300px] opacity-50 text-opacity-30 flex justify-center items-center outline-1 outline-none pt-3 pb-3 pl-5 pr-5 rounded-full">
                Explore the opportunities
              </button>
            </section>
          </main>
          <aside className="w-1/2 h-full relative">
            <img
              src={data}
              alt="data processing isometric"
              className="w-4/5 -top-[20%] absolute"
            />
          </aside>
        </section>
      </section>
      <section className="w-full h-[75vh] bg-white flex flex-col justify-center items-start relative">
        <section className="w-3/5 h-3/5 bluegradient absolute -top-[35%] left-0 right-0 ml-auto mr-auto rounded-3xl flex justify-center flex-col items-center">
          <h2 className="flex flex-col items-center text-6xl font-extrabold text-white">
            <span>Join housands</span>
            <span>creative minds on Focusio</span>
          </h2>
          <p className="text-center text-white mt-12 opacity-30 text-base font-medium w-1/2">
            With focusio, you can get your tasks done faster and better.
            Featuring many ways to help you maximize your productivity
          </p>
          <button className="bg-white hover:tracking-wide text-black text-lg font-normal mt-12 w-[250px] flex justify-center items-center pt-3 pb-3 pl-5 pr-5 rounded-full">
            Get started
          </button>
        </section>
        <section className="h-3/5 w-full flex justify-center absolute bottom-0 border border-transparent border-t-black border-opacity-30">
          <section className="w-2/3 h-full flex">
            <section className="w-1/3 h-full pl-8 relative flex justify-start flex-col items-start">
              <section className="w-full h-full mt-24 ml-8">
                <h2 className="flex items-center">
                  <p className="bluegradient w-7 h-7 rounded-full"></p>
                  <span className="text-2xl ml-1 font-bold tracking-tighter">
                    Focusio
                  </span>
                </h2>
                <p className="w-2/3 text-black opacity-30 font-semibold mt-4">
                  A project managment and productivity app, just for you.
                </p>
              </section>
              <h3 className="absolute text-base bottom-8 text-black opacity-30">
                2023 Focusio. Copyright and All rights reserved.
              </h3>
            </section>
            <section className="w-2/3 h-full ">
              <ul className="h-full w-full flex text-left justify-center items-center flex-col text-black text-lg">
                <section className="flex flex-col">
                  <li className="hover:opacity-100 opacity-50 hover:cursor-pointer">
                    Contact
                  </li>
                  <li className="hover:opacity-100 opacity-50 hover:cursor-pointer">
                    About
                  </li>
                  <li className="hover:opacity-100 opacity-50 hover:cursor-pointer">
                    Get started
                  </li>
                  <li className="hover:opacity-100 opacity-50 hover:cursor-pointer">
                    Sign in
                  </li>
                  <li className="hover:opacity-100 opacity-50 hover:cursor-pointer">
                    powered by Icons8
                  </li>
                </section>
              </ul>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default HomePage;

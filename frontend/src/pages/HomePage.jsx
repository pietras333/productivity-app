import wallet from "../assets/illustrations/icons/wallet.png";
import security from "../assets/illustrations/icons/security.png";
import profile from "../assets/illustrations/icons/profile.png";

const HomePage = () => {
  return (
    <section className="w-full h-full bg-home bg-cover bg-no-repeat font-Manrope flex items-center flex-col">
      <nav className="w-full h-[135px] flex justify-center">
        <ul className="w-4/6 h-full text-lg font-medium text-white flex items-center justify-around">
          <li className="text-2xl text-white font-semibold flex items-center">
            <p className="bluegradient w-6 h-6 rounded-full"></p>
            <span className="ml-1">Focusio</span>
          </li>
          <li className="opacity-50 ">Products</li>
          <li className="opacity-50">Pricing</li>
          <li className="opacity-50 mr-36">Patch Release</li>
          <li className="ml-36">
            <button className="outline-white opacity-50 text-opacity-30 flex justify-center items-center outline-1 outline-none pt-3 pb-3 pl-5 pr-5 rounded-full">
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
          <button className="bluegradient border border-white text-white w-1/6 text-xl pt-3 pb-3 pl-5 pr-5 rounded-full mt-12 shadow-blue-500 blueshadow">
            Get Started
          </button>
        </main>
      </main>
      <section className="w-full h-[130vh] bg-white flex justify-center items-end">
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
      <section className="w-full h-[130vh] bg-[#121313] flex justify-center items-end"></section>
    </section>
  );
};

export default HomePage;

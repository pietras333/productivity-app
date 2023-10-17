import avatar from "../assets/illustrations/icons/avatar.png";
import dashboard from "../assets/illustrations/icons/dashboard.png";
import projects from "../assets/illustrations/icons/projects.png";
import settings from "../assets/illustrations/icons/settings.png";
import logOut from "../assets/illustrations/icons/log-out.png";

const BoardNav = () => {
  return (
    <aside className="w-1/6 h-[98%] ml-3 bg-[#171818] rounded-3xl flex flex-col items-center justify-center max-xl:hidden">
      <header className="w-full h-1/3 flex flex-col justify-center items-center">
        <img src={avatar} alt="avatar" className="" />
        <h1 className="text-3xl mt-2 text-blue-400 font-semibold flex items-center">
          <p className="bluegradient w-6 h-6 rounded-full"></p>
          <span className="ml-1">Peter Griffin</span>
        </h1>
      </header>
      <nav className="w-full h-2/3 bluegradient rounded-3xl flex flex-col items-center justify-center">
        <ul className="w-5/6 h-5/6 flex flex-col items-start justify-start text-xl text-white font-normal">
          <li className="flex justify-around items-center mt-4">
            <img src={dashboard} alt="dashboard" className="w-[40px] invert" />
            <span className="ml-2 hover:tracking-wide hover:cursor-pointer border-b border-transparent">
              Dashboard
            </span>
          </li>
          <li className="flex justify-around items-center mt-2">
            <img src={projects} alt="projects" className="w-[40px] invert" />
            <span className="ml-2 hover:tracking-wide hover:cursor-pointer border-b border-transparent">
              Projects
            </span>
          </li>
          <li className="flex justify-around items-center mt-2">
            <img src={settings} alt="settings" className="w-[40px] invert" />
            <span className="ml-2 hover:tracking-wide hover:cursor-pointer border-b border-transparent">
              Settings
            </span>
          </li>
          <li className="flex justify-around items-center mt-2">
            <img src={logOut} alt="log-out" className="w-[40px] invert" />
            <span className="ml-2 hover:tracking-wide hover:cursor-pointer border-b border-transparent">
              Log Out
            </span>
          </li>
        </ul>
        <section className="w-11/12 h-1/6 bg-[#121313] mb-4 rounded-3xl flex-col flex items-center justify-center text-white text-opacity-50">
          <span className="text-lg text-white">Need help?</span>
          <span className="border-b border-b-transparent hover:text-green-500 hover:border-white hover:cursor-pointer">
            Contact us
          </span>
        </section>
      </nav>
    </aside>
  );
};

export default BoardNav;

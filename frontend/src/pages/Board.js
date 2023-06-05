import dashboard from "../assets/illustrations/icons/dashboard.png";
import settings from "../assets/illustrations/icons/settings.png";
import activities from "../assets/illustrations/icons/activities.png";
import avatar from "../assets/illustrations/icons/planet-purple.webp";
import box from "../assets/illustrations/icons/box.png";
import handshake from "../assets/illustrations/icons/handshake.png";
import checkmark from "../assets/illustrations/icons/checkmark.png";
import brain from "../assets/illustrations/icons/brain.png";
import calendar from "../assets/illustrations/icons/calendar.png";
import folder from "../assets/illustrations/icons/folder.png";
import more from "../assets/illustrations/icons/more.png";
import clock from "../assets/illustrations/icons/clock.png";

const Board = () => {
  return (
    <section className="w-screen h-screen flex font-Oswald">
      <section className="w-2/12 h-full bg-[#EFF0F1]">
        <section className="w-full h-2/6 ">
          <nav className="w-full h-full flex justify-center items-center">
            <ul className="w-5/6 h-5/6 flex flex-col justify-around items-center">
              <li className="flex justify-between items-center bg-white rounded-xl p-4">
                <img src={avatar} alt="user avatar" className="w-1/6" />
                <h2 className="w-5/6 text-2xl ml-5">Digital Space</h2>
              </li>
              <li className="flex justify-between items-center ml-5 opacity-30 hover:cursor-pointer hover:opacity-100">
                <img src={dashboard} alt="dashboard" className="w-1/6" />
                <h2 className="w-5/6 text-xl ml-5">Dashboard</h2>
              </li>
              <li className="flex justify-between items-center ml-5 opacity-30 hover:cursor-pointer hover:opacity-100">
                <img src={settings} alt="settings" className="w-1/6" />
                <h2 className="w-5/6 text-xl ml-5">Settings</h2>
              </li>
              <li className="flex justify-between items-center ml-5 opacity-30 hover:cursor-pointer hover:opacity-100">
                <img src={activities} alt="activities" className="w-1/6" />
                <h2 className="w-5/6 text-xl ml-5">All activities</h2>
              </li>
            </ul>
          </nav>
        </section>
        <section className="w-full h-3/6 flex justify-center items-center">
          <ul className="w-5/6 h-full text-lg tracking-wide flex flex-col justify-around items-center">
            <li className="flex justify-between items-center ml-5 hover:cursor-pointer bg-white p-4 rounded-2xl">
              <img src={checkmark} alt="checkmark" className="w-1/6" />
              <h2 className="w-5/6 ml-5">Daily Task</h2>
            </li>
            <li className="flex justify-between items-center ml-5 hover:cursor-pointer bg-transparent p-4 rounded-2xl">
              <img src={handshake} alt="handshake" className="w-1/6" />
              <h2 className="w-5/6 ml-5">Meetings Summary</h2>
            </li>
            <li className="flex justify-between items-center ml-5 hover:cursor-pointer bg-transparent p-4 rounded-2xl">
              <img src={calendar} alt="calendar" className="w-1/6" />
              <h2 className="w-5/6 ml-5">Availability</h2>
            </li>
            <li className="flex justify-between items-center ml-5 hover:cursor-pointer bg-transparent p-4 rounded-2xl">
              <img src={box} alt="box" className="w-1/6" />
              <h2 className="w-5/6 ml-5">All Projects</h2>
            </li>
            <li className="flex justify-between items-center ml-5 hover:cursor-pointer bg-transparent p-4 rounded-2xl">
              <img src={folder} alt="folder" className="w-1/6" />
              <h2 className="w-5/6 ml-5">Archive</h2>
            </li>
            <li className="flex justify-between items-center ml-5 hover:cursor-pointer bg-transparent p-4 rounded-2xl">
              <img src={brain} alt="brain" className="w-1/6" />
              <h2 className="w-5/6 ml-5">Brainstroaming</h2>
            </li>
          </ul>
        </section>
        <section className="w-full h-1/6 flex justify-center items-center">
          <button className="text-3xl bg-blue-600 p-4 rounded-2xl w-3/4 text-white tracking-widest">
            + New Project
          </button>
        </section>
      </section>
      <section className="w-8/12 h-full border-r-2 border-dashed border-r-zinc-400">
        <header className="w-full h-1/4 flex justify-center items-center">
          <section className="w-10/12 h-full flex justify-start items-start flex-col">
            <section className="w-full h-4/6 flex justify-start items-center">
              <img src={checkmark} alt="checkmark" className="w-1/12" />
              <h2 className="text-4xl font-bold tracking-wide">Daily Task</h2>
            </section>
            <section className="w-full h-2/6 text-xl opacity-30 tracking-wide">
              <p>
                Click <span></span> To create new list and wait for project
                manager card.
              </p>
              <p>
                Don't Create a card by yourself to manage a good colaboration.
              </p>
            </section>
          </section>
        </header>
        <main className="w-full h-3/4 flex justify-center items-center flex-col">
          <header className="w-11/12 h-[8%]">
            <ul className="w-full h-full flex justify-around items-center">
              <li className="bg-[#EFF0F1] w-1/4 flex p-2 justify-between rounded-lg shadow-xl">
                Next Up
                <span className="w-6 bg-black rounded-md text-white flex justify-center items-center text-sm">
                  3
                </span>
              </li>
              <li className="bg-[#EFF0F1] w-1/4 flex p-2 justify-between rounded-lg shadow-xl">
                In Progress
                <span className="w-6 bg-black rounded-md text-white flex justify-center items-center text-sm">
                  2
                </span>
              </li>
              <li className="bg-[#EFF0F1] w-1/4 flex p-2 justify-between rounded-lg shadow-xl">
                Complete
                <span className="w-6 bg-black rounded-md text-white flex justify-center items-center text-sm">
                  2
                </span>
              </li>
            </ul>
          </header>
          <section className="w-11/12 h-5/6 flex justify-around items-center">
            <ul className="w-1/4 h-full flex flex-col justify-around items-stretch">
              <li className="w-full h-[30%]">
                <section className="w-full h-full bg-white p-2 shadow-xl rounded-xl shadow-zinc-300">
                  <header className="w-full h-1/4 flex justify-between items-center">
                    <img
                      src={checkmark}
                      alt="brain"
                      className="w-2/12 p-1 bg-[#EFF0F1] rounded-2xl"
                    />
                    <img
                      src={more}
                      alt="brain"
                      className="w-1/12 p-1 bg-[#EFF0F1] rounded-2xl"
                    />
                  </header>
                  <main className="w-full h-2/4 text-black text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus, architecto.
                  </main>
                  <section className="w-full h-1/4">
                    <section className="bg-green-500 text-white text-sm p-1 flex w-3/12 rounded-lg">
                      <img src={clock} alt="clock" className="w-4/12 invert" />
                      <h2 className="ml-1">3 May</h2>
                    </section>
                  </section>
                </section>
              </li>
              <li className="w-full h-[30%]">
                <section className="w-full h-full bg-white p-2 shadow-xl rounded-xl shadow-zinc-300">
                  <header className="w-full h-1/4 flex justify-between items-center">
                    <img
                      src={avatar}
                      alt="brain"
                      className="w-2/12 p-1 bg-[#EFF0F1] rounded-2xl"
                    />
                    <img
                      src={more}
                      alt="brain"
                      className="w-1/12 p-1 bg-[#EFF0F1] rounded-2xl"
                    />
                  </header>
                  <main className="w-full h-2/4 text-black text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus, architecto.
                  </main>
                  <section className="bg-orange-500 text-white text-sm p-1 flex w-3/12 rounded-lg">
                    <img src={clock} alt="clock" className="w-4/12 invert" />
                    <h2 className="ml-1">3 May</h2>
                  </section>
                </section>
              </li>
              <li className="w-full h-[30%] ">
                <section className="w-full h-full bg-white p-2 shadow-xl rounded-xl shadow-zinc-300">
                  <header className="w-full h-1/4 flex justify-between items-center">
                    <img
                      src={folder}
                      alt="brain"
                      className="w-2/12 p-1 bg-[#EFF0F1] rounded-2xl"
                    />
                    <img
                      src={more}
                      alt="brain"
                      className="w-1/12 p-1 bg-[#EFF0F1] rounded-2xl"
                    />
                  </header>
                  <main className="w-full h-2/4 text-black text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus, architecto.
                  </main>
                  <section className="bg-orange-500 text-white text-sm p-1 flex w-3/12 rounded-lg">
                    <img src={clock} alt="clock" className="w-4/12 invert" />
                    <h2 className="ml-1">3 May</h2>
                  </section>
                </section>
              </li>
            </ul>
            <ul className="w-1/4 h-full flex flex-col justify-around items-stretch">
              <li className="w-full h-[30%] ">
                <section className="w-full h-full bg-white p-2 shadow-xl rounded-xl shadow-zinc-300">
                  <header className="w-full h-1/4 flex justify-between items-center">
                    <img
                      src={brain}
                      alt="brain"
                      className="w-2/12 p-1 bg-[#EFF0F1] rounded-2xl"
                    />
                    <img
                      src={more}
                      alt="brain"
                      className="w-1/12 p-1 bg-[#EFF0F1] rounded-2xl"
                    />
                  </header>
                  <main className="w-full h-2/4 text-black text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus, architecto.
                  </main>
                  <section className="bg-red-500 text-white text-sm p-1 flex w-3/12 rounded-lg">
                    <img src={clock} alt="clock" className="w-4/12 invert" />
                    <h2 className="ml-1">3 May</h2>
                  </section>
                </section>
              </li>
              <li className="w-full h-[30%] ">
                <section className="w-full h-full bg-white p-2 shadow-xl rounded-xl shadow-zinc-300">
                  <header className="w-full h-1/4 flex justify-between items-center">
                    <img
                      src={dashboard}
                      alt="brain"
                      className="w-2/12 p-1 bg-[#EFF0F1] rounded-2xl"
                    />
                    <img
                      src={more}
                      alt="brain"
                      className="w-1/12 p-1 bg-[#EFF0F1] rounded-2xl"
                    />
                  </header>
                  <main className="w-full h-2/4 text-black text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus, architecto.
                  </main>
                  <section className="bg-orange-500 text-white text-sm p-1 flex w-3/12 rounded-lg">
                    <img src={clock} alt="clock" className="w-4/12 invert" />
                    <h2 className="ml-1">3 May</h2>
                  </section>
                </section>
              </li>
              <li className="w-full h-[30%] border-dashed border-2 border-zinc-400 rounded-xl"></li>
            </ul>
            <ul className="w-1/4 h-full flex flex-col justify-around items-stretch">
              <li className="w-full h-[30%] ">
                <section className="w-full h-full bg-white p-2 shadow-xl rounded-xl shadow-zinc-300">
                  <header className="w-full h-1/4 flex justify-between items-center">
                    <img
                      src={handshake}
                      alt="brain"
                      className="w-2/12 p-1 bg-[#EFF0F1] rounded-2xl"
                    />
                    <img
                      src={more}
                      alt="brain"
                      className="w-1/12 p-1 bg-[#EFF0F1] rounded-2xl"
                    />
                  </header>
                  <main className="w-full h-2/4 text-black text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus, architecto.
                  </main>
                  <section className="bg-yellow-500 text-white text-sm p-1 flex w-3/12 rounded-lg">
                    <img src={clock} alt="clock" className="w-4/12 invert" />
                    <h2 className="ml-1">3 May</h2>
                  </section>
                </section>
              </li>
              <li className="w-full h-[30%] ">
                <section className="w-full h-full bg-white p-2 shadow-xl rounded-xl shadow-zinc-300">
                  <header className="w-full h-1/4 flex justify-between items-center">
                    <img
                      src={box}
                      alt="brain"
                      className="w-2/12 p-1 bg-[#EFF0F1] rounded-2xl"
                    />
                    <img
                      src={more}
                      alt="brain"
                      className="w-1/12 p-1 bg-[#EFF0F1] rounded-2xl"
                    />
                  </header>
                  <main className="w-full h-2/4 text-black text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus, architecto.
                  </main>
                  <section className="bg-green-500 text-white text-sm p-1 flex w-3/12 rounded-lg">
                    <img src={clock} alt="clock" className="w-4/12 invert" />
                    <h2 className="ml-1">3 May</h2>
                  </section>
                </section>
              </li>
              <li className="w-full h-[30%] border-dashed border-2 border-zinc-400 rounded-xl"></li>
            </ul>
          </section>
          <section className="w-11/12 h-1/6">
            <ul className="w-full h-full flex justify-around items-center">
              <li className="w-1/4 h-5/6 border-dashed border-2 border-zinc-400 rounded-xl flex justify-center items-center">
                <h2 className="opacity-30 text-8xl">+</h2>
              </li>
              <li className="w-1/4 h-5/6 border-dashed border-2 border-zinc-400 rounded-xl flex justify-center items-center">
                <h2 className="opacity-30 text-8xl">+</h2>
              </li>
              <li className="w-1/4 h-5/6 border-dashed border-2 border-zinc-400 rounded-xl flex justify-center items-center">
                <h2 className="opacity-30 text-8xl">+</h2>
              </li>
            </ul>
          </section>
        </main>
      </section>
      <section className="w-2/12 h-full"></section>
    </section>
  );
};
export default Board;

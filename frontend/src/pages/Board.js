import settings from "../assets/illustrations/icons/settings.png";
import dashboard from "../assets/illustrations/icons/dashboard.png";
import calendar from "../assets/illustrations/icons/calendar.png";
import main from "../assets/illustrations/icons/board.png";
import logo from "../assets/illustrations/icons/planet-purple.webp";
import inbox from "../assets/illustrations/icons/inbox.png";
import today from "../assets/illustrations/icons/today.png";
import upcoming from "../assets/illustrations/icons/upcoming.png";
import somedays from "../assets/illustrations/icons/somedays.png";
import trash from "../assets/illustrations/icons/trash.png";
import arrow from "../assets/illustrations/icons/arrow.png";
import search from "../assets/illustrations/icons/search.png";
import sunglasses from "../assets/illustrations/icons/sunglasses.png";
import explosion from "../assets/illustrations/icons/explosion.png";
import graduation from "../assets/illustrations/icons/graduation.png";
import plus from "../assets/illustrations/icons/plus.png";
import more from "../assets/illustrations/icons/more.png";
import move from "../assets/illustrations/icons/move.png";
import help from "../assets/illustrations/icons/help.png";

const board = () => {
  return (
    <section className="w-screen h-screen flex">
      <aside className="w-1/6 h-full bg-[#F9F9F9] border-r-2 border-[#EBEBEB]">
        <nav className="h-2/5 w-full border-b-2 border-[#EBEBEB]">
          <section className="h-1/6 w-full flex justify-center items-center">
            <header className="w-10/12 flex text-xl mt-10 items-center">
              <span className="bg-[#2C2C2E] pl-2 pr-2 rounded-lg text-[#EBEBEB]">
                A
              </span>
              <h2 className="font-semibold ml-2">&nbsp;Arbaham Accardo</h2>
            </header>
          </section>
          <section className="h-2/6 w-full flex flex-col justify-center items-center">
            <section className="w-10/12 flex mb-1 items-center">
              <img src={search} alt="search" className="w-[30px]" />
              <input
                type="text"
                className="ml-3 text-xl font-medium tracking-tight placeholder:text-[#2C2C2E] bg-transparent"
                placeholder="Quick find"
              />
            </section>
            <button className="w-10/12 flex items-center">
              <img
                src={inbox}
                alt="empty folder"
                className="w-[30px] h-[30px]"
              />
              <h2 className="ml-3 text-xl font-medium tracking-tight">Inbox</h2>
            </button>
          </section>
          <section className="h-2/6 w-full flex justify-center items-center flex-col">
            <button className="w-10/12 flex items-center">
              <img
                src={today}
                alt="calendar checked"
                className="w-[30px] h-[30px] mb-1"
              />
              <h2 className="ml-3 text-xl font-medium tracking-tight">Today</h2>
            </button>
            <button className="w-10/12 flex items-center">
              <img
                src={upcoming}
                alt="calendar"
                className="w-[30px] h-[30px] mb-1"
              />
              <h2 className="ml-3 text-xl font-medium tracking-tight">
                Upcoming
              </h2>
            </button>
            <button className="w-10/12 flex items-center">
              <img src={somedays} alt="box" className="w-[30px] h-[30px]" />
              <h2 className="ml-3 text-xl font-medium tracking-tight">
                Somedays
              </h2>
            </button>
          </section>
          <section className="h-1/6 w-full flex justify-center items-center">
            <button className="w-10/12 flex items-center">
              <img
                src={trash}
                alt="trash"
                className="w-[30px] h-[30px] opacity-70"
              />
              <h2 className="ml-3 text-xl font-medium tracking-tight">Trash</h2>
            </button>
          </section>
        </nav>
        <section className="w-full h-3/5 flex flex-col justify-start items-center text-[#2C2C2E] overflow-y-auto overflow-x-hidden">
          <section className="w-10/12">
            <button className="w-full flex flex-col mt-5 items-center hover:bg-[#EBEBEB] p-1 rounded-xl">
              <section className="w-full flex items-center">
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-[25px] h-[25px] rotate-90"
                />
                <h2 className="ml-3 text-xl font-medium tracking-tight">
                  List
                </h2>
              </section>
            </button>
            <ul className="w-full h-auto">
              <li className="w-full mt-2 bg-[#EBEBEB] flex p-2 rounded-xl items-center relative hover:border-[#EBEBEB] border-2 border-transparent">
                <img
                  src={sunglasses}
                  alt="smiling face with sunglasses"
                  className="w-[25px] h-[25px] ml-6"
                />
                <h3 className="text-xl font-medium ml-3">Personal</h3>
                <span className="absolute right-3 text-lg opacity-25">7</span>
              </li>
              <li className="w-full mt-2 flex p-2 rounded-xl items-center relative hover:border-[#EBEBEB] border-2 border-transparent">
                <img
                  src={explosion}
                  alt="exploding emoji"
                  className="w-[25px] h-[25px] ml-6"
                />
                <h3 className="text-xl font-medium ml-3">Work</h3>
                <span className="absolute right-3 text-lg opacity-25">4</span>
              </li>
              <li className="w-full mt-2 flex p-2 rounded-xl items-center relative hover:border-[#EBEBEB] border-2 border-transparent">
                <img
                  src={graduation}
                  alt="graduation cap"
                  className="w-[25px] h-[25px] ml-6"
                />
                <h3 className="text-xl font-medium ml-3">Lecture</h3>
                <span className="absolute right-3 text-lg opacity-25">3</span>
              </li>
              <li className="w-full mt-2 flex p-2 rounded-xl items-center hover:border-blue-400 border-2 border-transparent">
                <img
                  src={plus}
                  alt="graduation cap"
                  className="w-[25px] h-[25px] ml-6"
                />
                <h3 className="text-xl font-medium ml-3">New list</h3>
              </li>
            </ul>
          </section>
          <section className="w-10/12">
            <button className="w-full flex flex-col mt-5 items-center hover:bg-[#EBEBEB] p-1 rounded-xl">
              <section className="w-full flex items-center">
                <img src={arrow} alt="arrow" className="w-[25px] h-[25px]" />
                <h2 className="ml-3 text-xl font-medium tracking-tight">
                  Label
                </h2>
              </section>
            </button>
            <ul className="w-full h-auto hidden">
              <li className="w-full mt-2 bg-[#EBEBEB] flex p-2 rounded-xl items-center relative hover:border-[#EBEBEB] border-2 border-transparent">
                <img
                  src={sunglasses}
                  alt="smiling face with sunglasses"
                  className="w-[25px] h-[25px] ml-6"
                />
                <h3 className="text-xl font-medium ml-3">Personal</h3>
                <span className="absolute right-3 text-lg opacity-25">7</span>
              </li>
              <li className="w-full mt-2 flex p-2 rounded-xl items-center relative hover:border-[#EBEBEB] border-2 border-transparent">
                <img
                  src={explosion}
                  alt="exploding emoji"
                  className="w-[25px] h-[25px] ml-6"
                />
                <h3 className="text-xl font-medium ml-3">Work</h3>
                <span className="absolute right-3 text-lg opacity-25">4</span>
              </li>
              <li className="w-full mt-2 flex p-2 rounded-xl items-center relative hover:border-[#EBEBEB] border-2 border-transparent">
                <img
                  src={graduation}
                  alt="graduation cap"
                  className="w-[25px] h-[25px] ml-6"
                />
                <h3 className="text-xl font-medium ml-3">Lecture</h3>
                <span className="absolute right-3 text-lg opacity-25">3</span>
              </li>
              <li className="w-full mt-2 flex p-2 rounded-xl items-center hover:border-blue-400 border-2 border-transparent hover:cursor-pointer">
                <img
                  src={plus}
                  alt="graduation cap"
                  className="w-[25px] h-[25px] ml-6"
                />
                <h3 className="text-xl font-medium ml-3">New list</h3>
              </li>
            </ul>
          </section>
        </section>
      </aside>
      <main className="w-5/6 h-full bg-white overflow-y-auto overflow-x-hidden relative">
        <section className="absolute right-5 top-2 flex p-2">
          <img
            src={settings}
            alt="settings"
            className="w-[30px] h-[30px] mr-2 opacity-75"
          />
          <img src={help} alt="help" className="w-[30px] h-[30px] opacity-75" />
        </section>
        <header className="w-full h-1/3 flex justify-center items-center">
          <section className="w-4/5 h-2/3 pl-10">
            <img
              src={sunglasses}
              alt="smiling face with sunglasses"
              className="w-[90px] h-[90px]"
            />
            <section className="w-full flex justify-between">
              <h1 className="text-6xl font-bold">Personal</h1>
              <img
                src={more}
                alt="three dots"
                className="w-[25px] h-[25px] opacity-75 hover:cursor-pointer hover:opacity-100"
              />
            </section>
            <button className="flex mt-12 items-center border-2 border-transparent hover:border-blue-400 hover:cursor-pointer rounded-xl p-2">
              <img
                src={plus}
                alt="graduation cap"
                className="w-[25px] h-[25px]"
              />
              <h3 className="text-xl font-medium ml-3">New list</h3>
            </button>
          </section>
        </header>
        <section className="w-full h-full flex flex-col justify-start items-center mt-10">
          <section className="w-4/5 flex flex-col items-center justify-between">
            <section className="flex justify-between w-full border-b-2 border-[#EBEBEB] pb-3">
              <section className="flex items-center">
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-[15px] h-[15px] rotate-90"
                />
                <h2 className="ml-3 text-3xl font-semibold tracking-tight">
                  Skincare
                </h2>
                <span className="text-lg opacity-70 ml-2">2</span>
              </section>
              <img
                src={more}
                alt="three dots"
                className="w-[25px] h-[25px] opacity-75 hover:cursor-pointer hover:opacity-100"
              />
            </section>
            <ul className="w-full mt-5">
              <li className="ml-5 flex w-full p-2 rounded-lg items-center border-2 border-transparent hover:bg-[#F9F9F9] hover:border-[#EBEBEB] hover:cursor-pointer">
                <img src={move} alt="six dots" className="w-[25px] h-[25px]" />
                <button className="w-[30px] h-[30px] border-2 border-[#EBEBEB] rounded-lg ml-2"></button>
                <h3 className="font-semibold text-xl ml-2">Daily Routine</h3>
                <section className="flex justify-center items-center">
                  <span className="bg-green-500 bg-opacity-40 text-green-600 p-1 rounded-xl ml-2">
                    Today
                  </span>
                </section>
              </li>
            </ul>
          </section>
          <section className="w-4/5 flex flex-col items-center justify-between mt-10">
            <section className="flex justify-between w-full border-b-2 border-[#EBEBEB] pb-3">
              <section className="flex items-center">
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-[15px] h-[15px] rotate-90"
                />
                <h2 className="ml-3 text-3xl font-semibold tracking-tight">
                  Housework
                </h2>
                <span className="text-lg opacity-70 ml-2">10</span>
              </section>
              <img
                src={more}
                alt="three dots"
                className="w-[25px] h-[25px] opacity-75 hover:cursor-pointer hover:opacity-100"
              />
            </section>
            <ul className="w-full mt-5">
              <li className="ml-5 flex w-full p-2 rounded-lg items-center border-2 border-transparent hover:bg-[#F9F9F9] hover:border-[#EBEBEB] hover:cursor-pointer">
                <img src={move} alt="six dots" className="w-[25px] h-[25px]" />
                <button className="w-[30px] h-[30px] border-2 border-[#EBEBEB] rounded-lg ml-2"></button>
                <h3 className="font-semibold text-xl ml-2">Daily Routine</h3>
                <section className="flex justify-center items-center">
                  <span className="bg-green-500 bg-opacity-40 text-green-600 p-1 rounded-xl ml-2">
                    Today
                  </span>
                </section>
              </li>
              <li className="ml-5 flex w-full p-2 rounded-lg items-center border-2 border-transparent hover:bg-[#F9F9F9] hover:border-[#EBEBEB] hover:cursor-pointer">
                <img src={move} alt="six dots" className="w-[25px] h-[25px]" />
                <button className="w-[30px] h-[30px] border-2 border-[#EBEBEB] rounded-lg ml-2"></button>
                <h3 className="font-semibold text-xl ml-2">Daily Routine</h3>
                <section className="flex justify-center items-center">
                  <span className="bg-green-500 bg-opacity-40 text-green-600 p-1 rounded-xl ml-2">
                    Today
                  </span>
                </section>
              </li>
              <li className="ml-5 flex w-full p-2 rounded-lg items-center border-2 border-transparent hover:bg-[#F9F9F9] hover:border-[#EBEBEB] hover:cursor-pointer">
                <img src={move} alt="six dots" className="w-[25px] h-[25px]" />
                <button className="w-[30px] h-[30px] border-2 border-[#EBEBEB] rounded-lg ml-2"></button>
                <h3 className="font-semibold text-xl ml-2">Daily Routine</h3>
                <section className="flex justify-center items-center">
                  <span className="bg-green-500 bg-opacity-40 text-green-600 p-1 rounded-xl ml-2">
                    Today
                  </span>
                </section>
              </li>
              <li className="ml-5 flex w-full p-2 rounded-lg items-center border-2 border-transparent hover:bg-[#F9F9F9] hover:border-[#EBEBEB] hover:cursor-pointer">
                <img src={move} alt="six dots" className="w-[25px] h-[25px]" />
                <button className="w-[30px] h-[30px] border-2 border-[#EBEBEB] rounded-lg ml-2"></button>
                <h3 className="font-semibold text-xl ml-2">Daily Routine</h3>
                <section className="flex justify-center items-center">
                  <span className="bg-green-500 bg-opacity-40 text-green-600 p-1 rounded-xl ml-2">
                    Today
                  </span>
                </section>
              </li>
              <li className="ml-5 flex w-full p-2 rounded-lg items-center border-2 border-transparent hover:bg-[#F9F9F9] hover:border-[#EBEBEB] hover:cursor-pointer">
                <img src={move} alt="six dots" className="w-[25px] h-[25px]" />
                <button className="w-[30px] h-[30px] border-2 border-[#EBEBEB] rounded-lg ml-2"></button>
                <h3 className="font-semibold text-xl ml-2">Daily Routine</h3>
                <section className="flex justify-center items-center">
                  <span className="bg-green-500 bg-opacity-40 text-green-600 p-1 rounded-xl ml-2">
                    Today
                  </span>
                </section>
              </li>
              <li className="ml-5 mt-3 flex w-full p-2 rounded-lg items-center border-2 border-transparent hover:bg-[#F9F9F9] hover:border-[#EBEBEB] hover:cursor-pointer">
                <img src={move} alt="six dots" className="w-[25px] h-[25px]" />
                <button className="w-[30px] h-[30px] border-2 border-[#EBEBEB] rounded-lg ml-2"></button>
                <h3 className="font-semibold text-xl ml-2">Daily Routine</h3>
                <section className="flex justify-center items-center">
                  <span className="bg-green-500 bg-opacity-40 text-green-600 p-1 rounded-xl ml-2">
                    Today
                  </span>
                </section>
              </li>
              <li className="ml-5 mt-3 flex w-full p-2 rounded-lg items-center border-2 border-transparent hover:bg-[#F9F9F9] hover:border-[#EBEBEB] hover:cursor-pointer">
                <img src={move} alt="six dots" className="w-[25px] h-[25px]" />
                <button className="w-[30px] h-[30px] border-2 border-[#EBEBEB] rounded-lg ml-2"></button>
                <h3 className="font-semibold text-xl ml-2">Daily Routine</h3>
                <section className="flex justify-center items-center">
                  <span className="bg-green-500 bg-opacity-40 text-green-600 p-1 rounded-xl ml-2">
                    Today
                  </span>
                </section>
              </li>
              <li className="ml-5 mt-3 flex w-full p-2 rounded-lg items-center border-2 border-transparent hover:bg-[#F9F9F9] hover:border-[#EBEBEB] hover:cursor-pointer">
                <img src={move} alt="six dots" className="w-[25px] h-[25px]" />
                <button className="w-[30px] h-[30px] border-2 border-[#EBEBEB] rounded-lg ml-2"></button>
                <h3 className="font-semibold text-xl ml-2">Daily Routine</h3>
                <section className="flex justify-center items-center">
                  <span className="bg-green-500 bg-opacity-40 text-green-600 p-1 rounded-xl ml-2">
                    Today
                  </span>
                </section>
              </li>
              <li className="ml-5 mt-3 flex w-full p-2 rounded-lg items-center border-2 border-transparent hover:bg-[#F9F9F9] hover:border-[#EBEBEB] hover:cursor-pointer">
                <img src={move} alt="six dots" className="w-[25px] h-[25px]" />
                <button className="w-[30px] h-[30px] border-2 border-[#EBEBEB] rounded-lg ml-2"></button>
                <h3 className="font-semibold text-xl ml-2">Daily Routine</h3>
                <section className="flex justify-center items-center">
                  <span className="bg-green-500 bg-opacity-40 text-green-600 p-1 rounded-xl ml-2">
                    Today
                  </span>
                </section>
              </li>
              <li className="ml-5 mt-3 flex w-full p-2 rounded-lg items-center border-2 border-transparent hover:bg-[#F9F9F9] hover:border-[#EBEBEB] hover:cursor-pointer">
                <img src={move} alt="six dots" className="w-[25px] h-[25px]" />
                <button className="w-[30px] h-[30px] border-2 border-[#EBEBEB] rounded-lg ml-2"></button>
                <h3 className="font-semibold text-xl ml-2">Daily Routine</h3>
                <section className="flex justify-center items-center">
                  <span className="bg-green-500 bg-opacity-40 text-green-600 p-1 rounded-xl ml-2">
                    Today
                  </span>
                </section>
              </li>
              <li className="ml-5 mt-3 flex w-full p-2 rounded-lg items-center border-2 border-transparent hover:bg-[#F9F9F9] hover:border-[#EBEBEB] hover:cursor-pointer">
                <img src={move} alt="six dots" className="w-[25px] h-[25px]" />
                <button className="w-[30px] h-[30px] border-2 border-[#EBEBEB] rounded-lg ml-2"></button>
                <h3 className="font-semibold text-xl ml-2">Daily Routine</h3>
                <section className="flex justify-center items-center">
                  <span className="bg-green-500 bg-opacity-40 text-green-600 p-1 rounded-xl ml-2">
                    Today
                  </span>
                </section>
              </li>
              <li className="ml-5 mt-3 flex w-full p-2 rounded-lg items-center border-2 border-transparent hover:bg-[#F9F9F9] hover:border-[#EBEBEB] hover:cursor-pointer">
                <img src={move} alt="six dots" className="w-[25px] h-[25px]" />
                <button className="w-[30px] h-[30px] border-2 border-[#EBEBEB] rounded-lg ml-2"></button>
                <h3 className="font-semibold text-xl ml-2">Daily Routine</h3>
                <section className="flex justify-center items-center">
                  <span className="bg-green-500 bg-opacity-40 text-green-600 p-1 rounded-xl ml-2">
                    Today
                  </span>
                </section>
              </li>
              <li className="ml-5 mt-3 flex w-full p-2 rounded-lg items-center border-2 border-transparent hover:bg-[#F9F9F9] hover:border-[#EBEBEB] hover:cursor-pointer">
                <img src={move} alt="six dots" className="w-[25px] h-[25px]" />
                <button className="w-[30px] h-[30px] border-2 border-[#EBEBEB] rounded-lg ml-2"></button>
                <h3 className="font-semibold text-xl ml-2">Daily Routine</h3>
                <section className="flex justify-center items-center">
                  <span className="bg-green-500 bg-opacity-40 text-green-600 p-1 rounded-xl ml-2">
                    Today
                  </span>
                </section>
              </li>
              <li className="ml-5 mt-3 flex w-full p-2 rounded-lg items-center border-2 border-transparent hover:bg-[#F9F9F9] hover:border-[#EBEBEB] hover:cursor-pointer">
                <img src={move} alt="six dots" className="w-[25px] h-[25px]" />
                <button className="w-[30px] h-[30px] border-2 border-[#EBEBEB] rounded-lg ml-2"></button>
                <h3 className="font-semibold text-xl ml-2">Daily Routine</h3>
                <section className="flex justify-center items-center">
                  <span className="bg-green-500 bg-opacity-40 text-green-600 p-1 rounded-xl ml-2">
                    Today
                  </span>
                </section>
              </li>
              <li className="ml-5 mt-3 flex w-full p-2 rounded-lg items-center border-2 border-transparent hover:bg-[#F9F9F9] hover:border-[#EBEBEB] hover:cursor-pointer">
                <img src={move} alt="six dots" className="w-[25px] h-[25px]" />
                <button className="w-[30px] h-[30px] border-2 border-[#EBEBEB] rounded-lg ml-2"></button>
                <h3 className="font-semibold text-xl ml-2">Daily Routine</h3>
                <section className="flex justify-center items-center">
                  <span className="bg-green-500 bg-opacity-40 text-green-600 p-1 rounded-xl ml-2">
                    Today
                  </span>
                </section>
              </li>
            </ul>
          </section>
        </section>
      </main>
    </section>
  );
};

export default board;

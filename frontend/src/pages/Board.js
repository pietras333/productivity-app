import Todo from "../components/Todo";

const board = () => {
  return (
    <section className="w-screen h-screen flex">
      <section className="h-full w-2/12">
        <header className="h-1/3 p-4 text-[#00216A] font-bold flex flex-col justify-center items-start">
          <section className="text-5xl flex justify-between items-center w-full">
            <h1 className="ml-5">Inbox </h1>
            <h1 className="mr-5 text-[rgba(0,0,0,.3)]">+</h1>
          </section>
          <h2 className="text-xl ml-5 mt-5 text-[rgba(0,0,0,.3)]">7h</h2>
        </header>
        <nav className="h-2/3 flex justify-center items-center">
          <ul className="w-11/12 h-full flex justify-start items-center flex-col p-2">
            <li className="border-[rgba(0,0,0,.3)] mt-5 text-xl border-2 rounded-xl p-2 w-full flex justify-between items-center">
              <h3 className="font-bold text-[rgba(0,34,106,0.75)]">
                Research Sourdough
              </h3>
              <span className="font-bold text-[rgba(0,0,0,.3)]">1h</span>
            </li>
            <li className="border-[rgba(0,0,0,.3)] mt-5  text-xl border-2 rounded-xl p-2 w-full flex justify-between items-center">
              <h3 className="font-bold text-[rgba(0,34,106,0.75)]">Taxes</h3>
              <span className="font-bold text-[rgba(0,0,0,.3)]">3h</span>
            </li>
            <li className="border-[rgba(0,0,0,.3)] mt-5  text-xl border-2 rounded-xl p-2 w-full flex justify-between items-center">
              <h3 className="font-bold text-[rgba(0,34,106,0.75)]">
                Write color blog post
              </h3>
              <span className="font-bold text-[rgba(0,0,0,.3)]">2h</span>
            </li>
            <li className="border-[rgba(0,0,0,.3)] mt-5 text-xl border-2 rounded-xl p-2 w-full flex justify-between items-center">
              <h3 className="font-bold text-[rgba(0,34,106,0.75)]">
                Calc. cost of living in HI
              </h3>
              <span className="font-bold text-[rgba(0,0,0,.3)]">1h</span>
            </li>
          </ul>
        </nav>
      </section>
      <section className="bg-[#F5F6FD] h-full w-7/12 max-w-[58%] overflow-x-scroll">
        <section className="w-screen h-full flex justify-between items-center">
          <ul className="w-1/3 h-full ml-1 mr-1 flex flex-col justify-center items-center">
            <header className="w-10/12 h-1/6 flex text-4xl font-bold justify-start items-center">
              <h2 className="text-[rgba(0,34,106)]">Today</h2>
              <span className="text-[rgba(0,0,0,.3)] text-3xl mt-1 ml-5">
                7h 30m
              </span>
            </header>
            <main className="w-10/12 h-5/6">
              <ul className="w-full h-full flex flex-col justify-start items-center">
                <Todo />
                <Todo />
                <Todo />
              </ul>
            </main>
          </ul>
          <ul className="w-1/3 h-full ml-1 mr-1 flex flex-col justify-center items-center">
            <header className="w-10/12 h-1/6 flex text-4xl font-bold justify-start items-center">
              <h2 className="text-[rgba(0,34,106)]">Mon</h2>
              <span className="text-[rgba(0,0,0,.3)] text-3xl mt-1 ml-5">
                7h 30m
              </span>
            </header>
            <main className="w-10/12 h-5/6">
              <ul className="w-full h-full flex flex-col justify-start items-center">
                <Todo />
                <Todo />
                <Todo />
              </ul>
            </main>
          </ul>
          <ul className="w-1/3 h-full ml-1 mr-1 flex flex-col justify-center items-center">
            <header className="w-10/12 h-1/6 flex text-4xl font-bold justify-start items-center">
              <h2 className="text-[rgba(0,34,106)]">Tue</h2>
              <span className="text-[rgba(0,0,0,.3)] text-3xl mt-1 ml-5">
                3h
              </span>
            </header>
            <main className="w-10/12 h-5/6">
              <ul className="w-full h-full flex flex-col justify-start items-center">
                <Todo />
                <Todo />
                <Todo />
              </ul>
            </main>
          </ul>
          <ul className="w-1/3 h-full ml-1 mr-1 flex flex-col justify-center items-center">
            <header className="w-10/12 h-1/6 flex text-4xl font-bold justify-start items-center">
              <h2 className="text-[rgba(0,34,106)]">Wed</h2>
              <span className="text-[rgba(0,0,0,.3)] text-3xl mt-1 ml-5">
                1h
              </span>
            </header>
            <main className="w-10/12 h-5/6">
              <ul className="w-full h-full flex flex-col justify-start items-center">
                <Todo />
                <Todo />
                <Todo />
              </ul>
            </main>
          </ul>
          <ul className="w-1/3 h-full ml-1 mr-1 flex flex-col justify-center items-center">
            <header className="w-10/12 h-1/6 flex text-4xl font-bold justify-start items-center">
              <h2 className="text-[rgba(0,34,106)]">Thu</h2>
              <span className="text-[rgba(0,0,0,.3)] text-3xl mt-1 ml-5">
                30m
              </span>
            </header>
            <main className="w-10/12 h-5/6">
              <ul className="w-full h-full flex flex-col justify-start items-center">
                <Todo />
                <Todo />
                <Todo />
              </ul>
            </main>
          </ul>
        </section>
      </section>
      <section className="h-full w-3/12 p-4 flex flex-col justify-center items-center">
        <header className="w-11/12 h-1/3 flex flex-col justify-center items-start">
          <h3 className="text-[rgba(0,0,0,.3)] text-xl font-bold">TASK</h3>
          <h2 className="text-[rgb(0,34,106)] text-5xl font-bold mt-8">
            Complete Task & Focus App Design
          </h2>
        </header>
        <section className="h-2/3 w-11/12">
          <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            className="w-full bg-[#F5F6FD] rounded-xl border-2-[#F5F6FD] p-4 text-lg font-bold resize-none"
            placeholder="Type some details about your task"
          />
          <h3 className="font-bold mt-5 text-xl text-[rgba(0,0,0,.3)]">
            TIME ESTIMATE
          </h3>
          <button className="w-full">
            <section className="bg-[#F5F6FD] mt-10 rounded-3xl flex justify-between items-center p-4 text-xl font-bold text-[rgb(0,34,106)]">
              <p>3 hours 30 minutes</p>
              <span className="rotate-90">&gt;</span>
            </section>
          </button>
          <h3 className="font-bold mt-5 text-xl text-[rgba(0,0,0,.3)]">
            Project
          </h3>
          <ul className="w-full flex justify-around items-center mt-5">
            <li className="w-[50px] h-[50px] rounded-[50%] shadow-xl flex justify-center items-center">
              <span className="bg-blue-500 w-[30px] h-[30px] rounded-2xl"></span>
            </li>
            <li className="w-[50px] h-[50px] rounded-[50%] shadow-xl flex justify-center items-center">
              <span className="bg-green-500 w-[30px] h-[30px] rounded-2xl"></span>
            </li>
            <li className="w-[50px] h-[50px] rounded-[50%] shadow-xl flex justify-center items-center">
              <span className="bg-violet-500 w-[30px] h-[30px] rounded-2xl"></span>
            </li>
            <li className="w-[50px] h-[50px] rounded-[50%] shadow-xl flex justify-center items-center">
              <span className="bg-orange-500 w-[30px] h-[30px] rounded-2xl"></span>
            </li>
            <li className="w-[50px] h-[50px] rounded-[50%] shadow-xl flex justify-center items-center">
              <span className="bg-red-500 w-[30px] h-[30px] rounded-2xl"></span>
            </li>
          </ul>
          <button className=" w-full p-4 rounded-2xl text-white font-bold text-2xl mt-5 bg-[rgb(0,34,106)]">
            Create Task
          </button>
        </section>
      </section>
    </section>
  );
};

export default board;

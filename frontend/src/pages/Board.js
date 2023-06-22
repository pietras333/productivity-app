import settings from "../assets/illustrations/icons/settings.png";
import inbox from "../assets/illustrations/icons/inbox.png";
import today from "../assets/illustrations/icons/today.png";
import upcoming from "../assets/illustrations/icons/upcoming.png";
import somedays from "../assets/illustrations/icons/somedays.png";
import trash from "../assets/illustrations/icons/trash.png";
import arrow from "../assets/illustrations/icons/arrow.png";
import search from "../assets/illustrations/icons/search.png";
import sunglasses from "../assets/illustrations/icons/sunglasses.png";
import explosion from "../assets/illustrations/icons/explosion.png";
import plus from "../assets/illustrations/icons/plus.png";
import more from "../assets/illustrations/icons/more.png";
import help from "../assets/illustrations/icons/help.png";
import ListItem from "../components/ListItem";
import NewList from "../components/NewList.jsx";
import NewTask from "../components/NewTask";
import Task from "../components/Task";
import { useState, useMemo } from "react";
import { Transition } from "@tailwindui/react";

const Board = () => {
  const [newListOpen, setNewListOpen] = useState(false);
  const [newTaskOpen, setNewTaskOpen] = useState(false);
  const [list, setList] = useState([
    "List",
    ["Piniata", 5],
    ["Work", 2],
    ["Lecture", 5],
  ]);
  const [tasks, setTasks] = useState([
    {
      author: "wendtpiotr333@gmail.com",
      category: "Skincare",
      subtasks: [
        { name: "Daily Routine", date: "Today", completed: false },
        { name: "Skincare", date: "Everyday", completed: false },
      ],
    },
    {
      author: "wendtpiotr333@gmail.com",
      category: "Housework",
      subtasks: [
        { name: "Daily Routine", date: "Tommorow", completed: false },
        { name: "Chop wood", date: "3rd May", completed: false },
      ],
    },
  ]);

  const handleDataPassage = (data) => {
    setNewListOpen(data);
  };

  const handleListAdd = (data) => {
    setList((prev) => [...prev, [data, 1]]);
  };

  const handleTaskAdd = (data) => {
    const updated = [...tasks];
    updated.push({
      category: data.name,
      subtasks: [{ name: "Hello World", date: "Today", completed: false }],
    });
    setTasks(updated);
  };

  const handleNewTaskVisibility = (data) => {
    setNewTaskOpen(data);
  };

  const handleSubTaskAdd = (data) => {
    const updated = [...tasks];
    const categoryIndex = tasks.findIndex(
      (task) => task.category === data.category
    );
    if (categoryIndex === -1) {
      return setTasks(updated);
    }
    updated[categoryIndex].subtasks.push({
      name: data.name,
      date: data.date,
      completed: false,
    });
    setTasks(updated);
  };

  const handleSubTaskEdit = (data) => {
    const updated = [...tasks];
    const categoryIndex = tasks.findIndex(
      (task) => task.category === data.category
    );
    if (categoryIndex === -1) {
      return setTasks(updated);
    }
    updated[categoryIndex].subtasks[
      updated[categoryIndex].subtasks.indexOf(data.oldname)
    ] = {
      name: data.name,
      date: data.date,
      completed: false,
    };
    setTasks(updated);
  };

  const newListTransition = useMemo(
    (e) => (
      <Transition
        show={newListOpen}
        as="section"
        className="w-full h-full z-20 absolute top-0 left-0"
        enter="transition-all duration-250"
        enterFrom="opacity-0 top-[-50%]"
        enterTo="opacity-100 top-0"
        leave="transition-all duration-250"
        leaveFrom="opacity-100 top-0"
        leaveTo="opacity-0 top-[-50%]"
      >
        <section className="relative h-full w-full flex justify-center items-center">
          <NewList setShowState={handleDataPassage} addList={handleListAdd} />
        </section>
      </Transition>
    ),
    [newListOpen]
  );

  const newTaskTransition = useMemo(
    (e) => (
      <Transition
        show={newTaskOpen}
        as="section"
        className="w-full h-full z-20 absolute top-0 left-0"
        enter="transition-all duration-250"
        enterFrom="opacity-0 top-[-50%]"
        enterTo="opacity-100 top-0"
        leave="transition-all duration-250"
        leaveFrom="opacity-100 top-0"
        leaveTo="opacity-0 top-[-50%]"
      >
        <NewTask
          setShowState={handleNewTaskVisibility}
          addTask={handleTaskAdd}
        />
      </Transition>
    ),
    [newTaskOpen]
  );

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
                  {list[0]}
                </h2>
              </section>
            </button>
            <ul className="w-full h-auto">
              {list.map((el, index) => {
                if (index === 0) {
                }
                if (list.length === index + 1) {
                  return (
                    <>
                      <ListItem
                        key={index}
                        img={explosion}
                        name={el[0]}
                        count={el[1]}
                      />
                      <li
                        onClick={() => {
                          window.localStorage.setItem(
                            "newListOpen",
                            newListOpen
                          );
                          setNewListOpen((prev) => !prev);
                        }}
                        className="w-full mt-2 flex p-2 rounded-xl items-center hover:border-blue-400 border-2 border-transparent hover:cursor-pointer"
                      >
                        <img
                          src={plus}
                          alt="graduation cap"
                          className="w-[25px] h-[25px] ml-6"
                        />
                        <h3 className="text-xl font-medium ml-3">New list</h3>
                      </li>
                    </>
                  );
                }
                return <ListItem img={explosion} name={el[0]} count={el[1]} />;
              })}
            </ul>
          </section>
        </section>
      </aside>
      <main className="w-5/6 h-full bg-white overflow-y-auto overflow-x-hidden relative">
        {newListTransition}
        {newTaskTransition}
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
            <button
              onClick={() => {
                setNewTaskOpen((prev) => !prev);
              }}
              className="flex mt-12 items-center border-2 border-transparent hover:border-blue-400 hover:cursor-pointer rounded-xl p-2"
            >
              <img
                src={plus}
                alt="graduation cap"
                className="w-[25px] h-[25px]"
              />
              <h3 className="text-xl font-medium ml-3">New Task</h3>
            </button>
          </section>
        </header>
        <section className="w-full h-full flex flex-col justify-start items-center mt-10">
          {tasks.map((tasks, index) => (
            <Task
              addTaskToTask={handleSubTaskAdd}
              key={index}
              taskName={tasks.category}
              subTasks={tasks.subtasks}
              editSubTask={handleSubTaskEdit}
            />
          ))}
        </section>
      </main>
    </section>
  );
};

export default Board;

import SubTask from "./SubTask";
import DateChange from "./DateChange";
import SelectDate from "./SelectDate";
import ApproveButton from "./ApproveButton";
import { useRef, useState } from "react";
import { Transition } from "@tailwindui/react";
import more from "../assets/illustrations/icons/more.png";
import move from "../assets/illustrations/icons/move.png";
import arrow from "../assets/illustrations/icons/arrow.png";

const Task = ({ addTaskToTask, taskName, subTasks, editSubTask }) => {
  const [showEditable, setShowEditable] = useState(false);
  const [newTaskDate, setNewTaskDate] = useState("Today");
  const [newTaskDateColor, setNewTaskDateColor] = useState("green-500");
  const [showDateSelection, setShowDateSeleciton] = useState(false);
  const [newTaskName, setNewTaskName] = useState("...");
  const taskRef = useRef(null);
  const arrowRef = useRef(null);

  const handleDropDown = () => {
    taskRef.current.classList.toggle("hidden");
    arrowRef.current.classList.toggle("rotate-90");
  };

  const handleDateChange = (data) => {
    setNewTaskDate(data.date);
    setNewTaskDateColor(data.color);
  };

  const handleDateSelectionDisplay = (data) => {
    setShowDateSeleciton(data);
  };

  const addSubTask = () => {
    addTaskToTask({
      category: taskName,
      name: newTaskName,
      date: newTaskDate,
      completed: false,
    });
    setShowEditable(false);
  };

  const handleSubTaskEdit = (data) => {
    editSubTask({
      category: taskName,
      name: data.name,
      date: data.date,
      completed: false,
      oldname: data.oldname,
    });
  };

  const handleShowEditable = () => {
    setShowEditable((prev) => !prev);
  };

  return (
    <section className="w-4/5 flex flex-col items-center justify-between mt-10">
      <section className="flex justify-between w-full border-b-2 border-[#EBEBEB] pb-3 relative">
        <section className="flex items-center ">
          <img
            ref={arrowRef}
            onClick={handleDropDown}
            src={arrow}
            alt="arrow"
            className="w-[25px] h-[25px] rotate-90 hover:cursor-pointer"
          />
          <h2 className="ml-3 text-3xl font-semibold tracking-tight">
            {taskName}
          </h2>
          <span className="text-lg opacity-70 ml-2">{}</span>
        </section>
        <img
          onClick={() => {
            setShowEditable((prev) => !prev);
          }}
          src={more}
          alt="three dots"
          className={`w-[25px] h-[25px] opacity-75 hover:cursor-pointer hover:opacity-100 border-2 ${
            showEditable ? "border-[#2C2C2E] rounded-xl" : "border-transparent"
          }`}
        />
      </section>
      <ul ref={taskRef} className="w-full mt-5">
        {subTasks.map((subtask, index) => (
          <SubTask
            handleShowEditable={handleShowEditable}
            editTask={handleSubTaskEdit}
            showEditable={showEditable}
            key={index + 1}
            subTaskName={subtask.name}
            date={subtask.date}
          />
        ))}
        <Transition
          show={showEditable}
          as="li"
          className="ml-5 mt-1 relative flex w-full p-2 rounded-lg items-center border-2 bg-[#F9F9F9] border-[#2C2C2E] border-opacity-50 border-dashed hover:cursor-pointer"
          enter="transition-all duration-250"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-all duration-250"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <img
            src={move}
            alt="six dots"
            className="w-[25px] h-[25px] opacity-50"
          />
          <input
            type="text"
            value={newTaskName}
            onChange={(e) => {
              setNewTaskName(e.target.value);
            }}
            placeholder="Name"
            className="focus:outline-none focus:border-[#2C2C2E] rounded-lg border-2 border-transparent font-semibold text-xl ml-2 w-1/6 pl-1 border-b-2 border-b-[#2C2C2E] border-dashed border-opacity-50"
          />
          <section className="flex justify-center items-center relative">
            <Transition
              show={newTaskDate !== " "}
              enter="transition-all duration-250"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-all duration-250"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <DateChange
                showSelection={handleDateSelectionDisplay}
                color={newTaskDateColor}
                date={newTaskDate}
              />
            </Transition>
            <Transition
              show={showDateSelection}
              enter="transition-all duration-250"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-all duration-250"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <SelectDate selectDate={handleDateChange} />
            </Transition>
          </section>
          <ApproveButton addSubTask={addSubTask} />
        </Transition>
      </ul>
    </section>
  );
};
export default Task;

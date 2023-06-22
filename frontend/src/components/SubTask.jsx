import { useRef, useState, useMemo } from "react";
import { Transition } from "@tailwindui/react";
import move from "../assets/illustrations/icons/move.png";
import done from "../assets/illustrations/icons/done.png";
import approve from "../assets/illustrations/icons/approve.png";
import deny from "../assets/illustrations/icons/deny.png";
import notDone from "../assets/illustrations/icons/notDone.png";
import DateChange from "./DateChange";
import SelectDate from "./SelectDate";

const SubTask = ({ subTaskName, date, showEditable, editTask }) => {
  const doneRef = useRef(null);
  const [doneState, setDoneState] = useState(false);
  const [newTaskDate, setNewTaskDate] = useState("Today");
  const [newTaskDateColor, setNewTaskDateColor] = useState("green-500");
  const [newName, setNewName] = useState(subTaskName);
  const [showDateSelection, setShowDateSeleciton] = useState(false);
  const [newTaskName, setNewTaskName] = useState("...");

  const handleDateSelectionDisplay = () => {
    setShowDateSeleciton((prev) => !prev);
  };

  const handleDone = () => {
    setDoneState((prev) => !prev);
  };

  const handleDateChange = (data) => {
    setNewTaskDate(data.date);
    setNewTaskDateColor(data.color);
  };

  const handleEdit = () => {
    editTask({
      name: newTaskName,
      date: newTaskDate,
      oldname: subTaskName,
      completed: false,
    });
  };

  const editSubTaskTransition = useMemo(
    (e) => (
      <Transition
        show={showEditable}
        as="section"
        className="w-[100px] h-[30px] flex justify-center items-center absolute right-0"
        enter="transition-all duration-250"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-all duration-250"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <button
          onClick={handleEdit}
          className="w-[30px] h-[30px] border-2 border-[#EBEBEB] rounded-lg ml-2"
        >
          <img
            src={approve}
            alt="done"
            className="w-full h-full rounded-md transition-all"
          />
        </button>
        <button className="w-[30px] h-[30px] border-2 border-[#EBEBEB] rounded-lg ml-2">
          <img
            src={deny}
            alt="done"
            className="w-full h-full rounded-md transition-all"
          />
        </button>
      </Transition>
    ),
    [showEditable]
  );

  return (
    <li className="ml-5 relative flex w-full p-2 rounded-lg items-center border-2 border-transparent hover:bg-[#F9F9F9] hover:border-[#EBEBEB] hover:cursor-pointer">
      <img src={move} alt="six dots" className="w-[25px] h-[25px]" />
      <button
        ref={doneRef}
        onClick={handleDone}
        className="w-[30px] h-[30px] border-2 border-[#EBEBEB] rounded-lg ml-2"
      >
        <img
          src={doneState ? done : notDone}
          alt="done"
          className="w-full h-full rounded-md transition-all"
        />
      </button>
      {showEditable ? (
        <input
          type="text"
          value={newName}
          onChange={(e) => {
            setNewName(e.target.value);
          }}
          placeholder="Name"
          className="focus:outline-none focus:border-[#2C2C2E] rounded-lg border-2 border-transparent font-semibold text-xl ml-2 w-1/6 pl-1 border-b-2 border-b-[#2C2C2E] border-dashed border-opacity-50"
        />
      ) : (
        <h3 className="font-semibold text-xl ml-2">{subTaskName}</h3>
      )}
      {showEditable ? (
        <section
          onClick={handleDateSelectionDisplay}
          className="flex justify-center items-center"
        >
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
        </section>
      ) : (
        <span
          onClick={handleDateSelectionDisplay}
          className="bg-green-500 bg-opacity-40 text-green-600 p-1 rounded-xl ml-2"
        >
          {date}
        </span>
      )}
      {editSubTaskTransition}
    </li>
  );
};
export default SubTask;

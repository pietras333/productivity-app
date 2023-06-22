import { useState } from "react";
import plus from "../assets/illustrations/icons/plus.png";
import close from "../assets/illustrations/icons/close.png";
import sunglasses from "../assets/illustrations/icons/sunglasses.png";
import arrow from "../assets/illustrations/icons/arrow.png";

const NewTask = ({ setShowState, addTask }) => {
  const [newTask, SetNewTask] = useState("...");

  const handleClose = () => {
    setShowState(false);
  };

  const handlePassage = () => {
    addTask({ name: newTask });
    handleClose();
  };

  return (
    <section className="w-full h-full absolute top-0 right-0 z-20 flex justify-center items-center">
      <section className="w-1/4 h-1/2 rounded-xl bg-white border-2 shadow-xl shadow-zinc-400 border-[#EBEBEB]">
        <header className="w-full h-2/6 flex items-center justify-start pl-5 border-b-2 border-[#EBEBEB]">
          <h2 className="text-3xl font-semibold text-[#2C2C2E] ml-5">
            {newTask}
          </h2>
          <img src={sunglasses} alt="" className="w-[50px] h-[50px] ml-5" />
        </header>
        <main className="w-full h-5/6">
          <section className="w-full flex justify-center items-center relative h-1/4">
            <img src={arrow} alt="quote left" className="w-[35px] h-[35px]" />
            <input
              value={newTask}
              onChange={(e) => {
                SetNewTask(e.target.value);
              }}
              type="text"
              className="text-xl p-1 font-medium tracking-tight placeholder:text-[#2C2C2E] bg-transparent"
              placeholder="Task Name"
            />
          </section>

          <section className="w-full flex justify-around items-center h-3/5">
            <button
              onClick={handleClose}
              className="border-2 rounded-xl border-red-500 flex justify-start items-center p-2"
            >
              <img src={close} alt="close sign" className="w-[35px] h-[35px]" />
              <span className="text-xl text-red-500 ml-1">Close</span>
            </button>
            <button
              onClick={handlePassage}
              className="border-2 rounded-xl border-blue-500 flex justify-start items-center p-2"
            >
              <img src={plus} alt="plus sign" className="w-[35px] h-[35px]" />
              <span className="text-xl text-blue-500 ml-1">Add</span>
            </button>
          </section>
        </main>
      </section>
    </section>
  );
};
export default NewTask;

import move from "../assets/illustrations/icons/move.png";
import arrow from "../assets/illustrations/icons/arrow.png";
import cancel from "../assets/illustrations/icons/cancel.png";
import checkmark from "../assets/illustrations/icons/checkmark.png";
import SubTasksDisplay from "./SubTasksDisplay";
import { useInView } from "react-intersection-observer";
import { Transition } from "@tailwindui/react";
import { useState } from "react";
const Task = (props) => {
  const { editState } = props;
  const [showSubtasks, setShowSubstasks] = useState(true);

  const handleSubstasksShow = () => {
    return setShowSubstasks((prev) => !prev);
  };

  const { ref, inView } = useInView({
    threshold: 0.45,
  });
  return (
    <li ref={ref} className="w-full h-auto mt-3">
      <section className="w-full h-full flex flex-col items-center justify-start">
        <section className="w-full h-[50px] flex justify-between items-center">
          <section className="w-3/4 flex justify-start items-center">
            <img
              src={move}
              alt="move"
              className="w-[30px] max-md:w-[20px] max-md:h-[20px] opacity-50 hover:cursor-pointer hover:opacity-100"
            />
            <span className="text-lg text-white font-thin ml-2">List 1.</span>
            <img
              onClick={handleSubstasksShow}
              src={arrow}
              alt="arrow"
              className={`w-[30px] invert ${
                showSubtasks ? "rotate-90" : "rotate-0"
              } opacity-50 hover:cursor-pointer hover:opacity-100`}
            />
          </section>

          <Transition
            show={editState}
            as="section"
            className="w-1/4 h-full flex justify-end items-center"
            enter="transition-all duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-all duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <img
              src={checkmark}
              alt="checkmark"
              className="w-[30px] invert opacity-50 hover:cursor-pointer hover:opacity-100 hover:invert-0"
            />
            <img
              src={cancel}
              alt="cancel"
              className="w-[30px] invert opacity-50 hover:cursor-pointer hover:opacity-100"
            />
          </Transition>
        </section>
        <Transition
          show={showSubtasks}
          as="ul"
          className="w-5/6 text-white"
          enter="transition-all duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-all duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <SubTasksDisplay />
        </Transition>
      </section>
    </li>
  );
};

export default Task;

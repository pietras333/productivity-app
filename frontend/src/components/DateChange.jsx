import { useRef, useState } from "react";
import arrow from "../assets/illustrations/icons/arrow.png";

const DateChange = ({ showSelection, color, date }) => {
  const spanRef = useRef(null);
  const [show, setShow] = useState(true);

  const handleSelectionDisplay = () => {
    showSelection(show);
    setShow((prev) => !prev);
  };

  return (
    <span
      onClick={handleSelectionDisplay}
      ref={spanRef}
      className={`flex border-2 border-transparent items-center justify-between bg-opacity-40 p-1 rounded-xl ml-2 bg-${color} text-${color}`}
    >
      <img
        src={arrow}
        alt="arrow"
        className={show ? "w-[15px] h-[15px]" : "w-[15px] h-[15px] rotate-90"}
      />
      {date}
    </span>
  );
};
export default DateChange;

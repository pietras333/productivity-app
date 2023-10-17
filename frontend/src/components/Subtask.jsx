import move from "../assets/illustrations/icons/move.png";
import cancel from "../assets/illustrations/icons/cancel.png";
import checkmark from "../assets/illustrations/icons/checkmark.png";

const SubTask = () => {
  return (
    <li className="w-full h-[50px] mt-3 p-2 rounded-xl bg-opacity-50 bg-[#1f1f1f] flex justify-center items-center">
      <section className="w-full h-[50px] flex justify-between items-center">
        <section className="w-3/4 flex justify-start items-center">
          <img
            src={move}
            alt="move"
            className="w-[30px] max-md:w-[20px] max-md:h-[20px] opacity-50 hover:cursor-pointer hover:opacity-100"
          />
          <span className="text-lg text-white font-thin ml-2">Item 1.</span>
        </section>
        <section className="w-1/4 h-full flex justify-end items-center">
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
        </section>
      </section>
    </li>
  );
};

export default SubTask;

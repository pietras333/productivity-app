import { useState } from "react";
import plus from "../assets/illustrations/icons/plus.png";
import quote from "../assets/illustrations/icons/quote.png";
import notes from "../assets/illustrations/icons/notes.png";
import close from "../assets/illustrations/icons/close.png";
import sunglasses from "../assets/illustrations/icons/sunglasses.png";

const NewList = ({ setShowState, addList }) => {
  const [newList, setNewList] = useState("...");

  const handleClose = () => {
    setShowState(false);
  };
  const handlePassage = () => {
    addList(newList);
    handleClose();
  };

  return (
    <section className="w-1/4 h-1/4 rounded-xl bg-white border-2 shadow-xl shadow-zinc-400 border-[#EBEBEB]">
      <header className="w-full h-2/6 flex items-center justify-start pl-5 border-b-2 border-[#EBEBEB]">
        <h2 className="text-3xl font-semibold text-[#2C2C2E] ml-5">
          {newList}
        </h2>
        <img src={sunglasses} alt="" className="w-[50px] h-[50px] ml-5" />
      </header>
      <main className="w-full h-5/6">
        <section className="w-full flex justify-center items-center">
          <img src={quote} alt="quote left" className="w-[35px] h-[35px]" />
          <input
            value={newList}
            onChange={(e) => {
              setNewList(e.target.value);
            }}
            type="text"
            className="text-xl p-1 font-medium tracking-tight placeholder:text-[#2C2C2E] bg-transparent"
            placeholder="List name"
          />
        </section>
        <section className="w-full flex justify-around items-center h-1/2">
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
  );
};
export default NewList;

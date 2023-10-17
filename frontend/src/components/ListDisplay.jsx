import Task from "./Task";
import editIcon from "../assets/illustrations/icons/edit.png";
import { useState } from "react";

const ListDisplay = () => {
  const [edit, setEdit] = useState(false);

  const handleEditState = () => {
    setEdit((prev) => !prev);
  };

  return (
    <section className="h-full w-5/6 max-xl:w-full flex flex-col justify-center items-center">
      <main className="w-11/12 h-5/6 flex flex-col justify-start items-center">
        <header className="w-11/12 h-1/6">
          <h2 className="text-5xl font-semibold text-white">Current list.</h2>
          <p className="text-white opacity-50 text-lg">List description.</p>
        </header>
        <main className="w-full h-5/6 flex justify-center items-center flex-col">
          <ul className="w-5/6 max-md:w-11/12 h-full scroll">
            <Task editState={edit} />
            <Task editState={edit} />
            <Task editState={edit} />
          </ul>
          <section className="w-full flex justify-end items-center">
            <img
              onClick={handleEditState}
              src={editIcon}
              alt="edit"
              className="w-[30px] invert opacity-50 hover:cursor-pointer hover:opacity-100"
            />
          </section>
        </main>
      </main>
      <h1 className="text-3xl text-blue-400 font-semibold flex items-center opacity-30 mt-10">
        <p className="bluegradient w-6 h-6 rounded-full"></p>
        <span className="ml-1">Focusio</span>
      </h1>
    </section>
  );
};
export default ListDisplay;

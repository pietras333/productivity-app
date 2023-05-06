import { Transition } from "@tailwindui/react";
import { useLayoutEffect, useState } from "react";

const Board = () => {
  const [loaderState, setLoaderState] = useState(true);
  const handleLoad = async () => {
    await delay(800);
    setLoaderState(false);
  };
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useLayoutEffect(() => {
    handleLoad();
  });

  return (
    <div id="board" className="w-full h-full flex transition-all">
      <nav>
        <ul>
          <li></li>
        </ul>
      </nav>

      <Transition
        show={loaderState}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="w-full h-full bg-white dark:bg-[#121212] flex justify-center items-center z-50 absolute top-0 left-0">
          <div className="spinner dark:bg-[#121212]">
            <div className="circle one"></div>
            <div className="circle two"></div>
            <div className="circle three"></div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Board;

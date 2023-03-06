import { Link } from "react-router-dom";

const MainPageLanding = () => {
  return (
    <>
      <section className="max-sm:w-[90%] max-sm:h-[50%] w-[70%] h-[75%] flex flex-col justify-center max-sm:justify-start max-sm:mt-[0%]">
        <h1 className="flex flex-col ml-[10%] max-sm:mt-[50%] ">
          <span className="dark:text-[#7b34c2b6] animate-fadein text-white max-sm:text-4xl 2xl:text-8xl xl:text-7xl lg:text-7xl md:text-6xl sm:text-5xl tracking-tighter">
            Solve your problem with
          </span>
          {localStorage.getItem("mode") === "dark" ? (
            <span className="text-[#a76bcf] animate-slideleft max-sm:text-6xl 2xl:text-9xl xl:text-8xl lg:text-8xl md:text-8xl sm:text-7xl font-bold tracking-widest">
              Todooo
            </span>
          ) : (
            <span className="animate-slideleft gradienttext max-sm:text-6xl 2xl:text-9xl xl:text-8xl lg:text-8xl md:text-8xl sm:text-7xl font-bold tracking-widest">
              Todooo
            </span>
          )}
        </h1>
      </section>
      <section>
        <Link
          to="/get-started"
          className="w-full h-full flex justify-center items-center"
        >
          <button className="dark:bg-[#a76bcf] dark:hover:border-[#a76bcf] dark:hover:bg-transparent dark:hover:text-[#a76bcf] animate-fadein max-sm:text-lg max-sm:w-[150px] max-sm:h-[40px] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-base text-white bg-[#FFB562]  hover:text-[#FFB562] hover:tracking-widest hover:cursor-pointer transition-all w-[180px] h-[50px] rounded-xl hover:bg-transparent border-[3px] border-transparent hover:border-[#FFB562] ">
            Get Started
          </button>
        </Link>
      </section>
    </>
  );
};
export default MainPageLanding;

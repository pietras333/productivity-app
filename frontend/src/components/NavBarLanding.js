import { Link } from "react-router-dom";

const NavBarLanding = (props) => {
  const pagestate = props.PageState;

  return (
    <>
      {pagestate === "getstarted" ? (
        <li className="text-[#FFB562] max-sm:w-[30%] max-sm:text-1xl 2xl:w-[60%] xl:w-[60%] lg:w-[50%] md:w-[40%] sm:w-[35%] 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-5xl font-bold ml-[5%] tracking-widest">
          Todooo
        </li>
      ) : (
        <li className="max-sm:w-[30%] max-sm:text-1xl 2xl:w-[60%] xl:w-[60%] lg:w-[50%] md:w-[40%] sm:w-[35%] 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-5xl font-bold ml-[5%] tracking-widest">
          Todooo
        </li>
      )}
      <Link to="../">
        <li className="text-[#FFB562] max-sm:text-xs max-sm:mr-[3%] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-sm text-[rgba(245,245,245,.85)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
          Home
        </li>
      </Link>
      {pagestate === "getstarted" ? (
        ""
      ) : (
        <>
          <li className="max-sm:text-xs max-sm:mr-[3%]  tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-sm text-[rgba(245,245,245,.85)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
            Features
          </li>
          <li className="max-sm:text-xs  max-sm:mr-[3%] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-sm text-[rgba(245,245,245,.85)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
            Contact
          </li>
        </>
      )}
      <li className="mr-[1%] max-sm:mr-[1%]">
        <Link to="../sign-in">
          {pagestate === "getstarted" ? (
            <button className="animate-fadein max-sm:text-xs max-sm:w-[120%] max-sm:h-[30px] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-base text-white bg-[#FFB562]  hover:text-[#FFB562] hover:tracking-widest hover:cursor-pointer transition-all w-[150%] h-[50px] rounded-xl hover:bg-transparent border-[3px] border-transparent hover:border-[#FFB562] ">
              Sign In
            </button>
          ) : (
            <button className="animate-fadein max-sm:text-xs max-sm:w-[120%] max-sm:h-[30px] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-base text-[#5352ed] bg-[rgba(245,245,245,.85)]  hover:text-white hover:tracking-widest hover:cursor-pointer transition-all w-[150%] h-[50px] rounded-xl hover:bg-transparent border-[3px] border-transparent hover:border-[rgba(245,245,245,.85)] ">
              Sign In
            </button>
          )}
        </Link>
      </li>
    </>
  );
};
export default NavBarLanding;

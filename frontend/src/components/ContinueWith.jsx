import apple from "../assets/illustrations/icons/apple.png";
import google from "../assets/illustrations/icons/google.png";
import facebook from "../assets/illustrations/icons/facebook.png";

const ContinueWith = () => {
  return (
    <>
      <section className="mt-10 max-md:m-0 max-md:mt-12 w-full flex justify-around items-center">
        <hr className="border-black dark:border-[#FFFDFA] w-1/4" />
        <h3 className="w-1/2 text-center text-black dark:text-[#FFFDFA] ">
          Or Get Started With
        </h3>
        <hr className="border-black dark:border-[#FFFDFA] w-1/4" />
      </section>
      <section className="mt-5 max-md:m-0 flex w-3/4 max-lg:w-full justify-around items-center">
        <button className="w-[70px] max-md:w-[50px] max-md:h-[50px] hover:shadow-green-500 hover:shadow-2xl h-[70px] flex justify-center items-center bg-white shadow-xl shadow-zinc-400 rounded-[50%]">
          <img src={google} alt="google" className="w-1/2" />
        </button>
        <button className="w-[70px] max-md:w-[50px] max-md:h-[50px] hover:shadow-green-500 hover:shadow-2xl h-[70px] flex justify-center items-center bg-white shadow-xl shadow-zinc-400 rounded-[50%]">
          <img src={apple} alt="apple" className="w-1/2" />
        </button>
        <button className="w-[70px] max-md:w-[50px] max-md:h-[50px] hover:shadow-green-500 hover:shadow-2xl h-[70px] flex justify-center items-center bg-white shadow-xl shadow-zinc-400 rounded-[50%]">
          <img src={facebook} alt="facebook" className="w-1/2" />
        </button>
      </section>
    </>
  );
};
export default ContinueWith;

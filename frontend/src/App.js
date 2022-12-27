const LandingPage = () => {
  return (
    <div className="gradientbg w-[100%] h-auto">
      <section className="snap-center w-[100%] h-[100vh] bg-landing bg-contain bg-no-repeat bg-right-bottom md:bg-[length:505px]">
        <nav className="w-[100%] max-sm:h-[60px] 2xl:h-[150px] xl:h-[120px] lg:h-[100px] md:h-[80px] sm:h-[60px]">
          <ul className="flex justify-around items-center w-[100%] h-[100%]">
            <li className="max-sm:w-[40%] max-sm:text-2xl 2xl:w-[60%] xl:w-[60%] lg:w-[50%] md:w-[40%] sm:w-[35%] 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-5xl font-bold ml-[5%] tracking-widest">
              Todooo
            </li>
            <li className="max-sm:text-xs max-sm:mr-[3%] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-base text-[rgba(245,245,245,.85)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
              Home
            </li>
            <li className="max-sm:text-xs max-sm:mr-[3%]  tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-base text-[rgba(245,245,245,.85)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
              Features
            </li>
            <li className="max-sm:text-xs  max-sm:mr-[3%] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-base text-[rgba(245,245,245,.85)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
              Contact
            </li>
            <li className="mr-[5%] ">
              <button className="max-sm:text-xs max-sm:w-[120%] max-sm:h-[30px] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-base text-[#5352ed] bg-[rgba(245,245,245,.85)]  hover:text-white hover:tracking-widest hover:cursor-pointer transition-all w-[150%] h-[50px] rounded-xl hover:bg-transparent border-[3px] border-transparent hover:border-[rgba(245,245,245,.85)] ">
                Sign In
              </button>
            </li>
          </ul>
        </nav>
        <section className="max-sm:w-[90%] w-[70%] h-[75%] flex flex-col justify-center max-sm:justify-start max-sm:mt-[15%]">
          <h1 className="flex flex-col ml-[10%]">
            <span className="max-sm:text-4xl 2xl:text-8xl xl:text-7xl lg:text-7xl md:text-6xl sm:text-5xl tracking-tighter">
              Solve your problem with
            </span>
            <span className="gradienttext max-sm:text-6xl 2xl:text-9xl xl:text-8xl lg:text-8xl md:text-8xl sm:text-7xl font-bold tracking-widest">
              Todooo
            </span>
          </h1>
        </section>
      </section>
      <section className="snap-center h-[100vh] w-[100%] bg-beingproductive bg-[length:50%] bg-no-repeat bg-left-bottom"></section>
      <section className="snap-center w-[100%] h-[100vh] bg-relax bg-[length:50%] bg-no-repeat bg-right-bottom"></section>
    </div>
  );
};

export default LandingPage;

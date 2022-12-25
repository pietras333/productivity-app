const LandingPage = () => {
  return (
    <div className="h-[100vh] bg-[#5352ed]">
      <section className="w-[100%] h-[100%] bg-landing bg-contain bg-no-repeat bg-right">
        <nav className="w-[100%] h-[150px]">
          <ul className="flex justify-around items-center w-[100%] h-[100%]">
            <li className="w-[60%] text-6xl font-bold ml-[5%] tracking-widest">
              Todooo
            </li>
            <li className="tracking-tighter text-xl text-[rgba(245,245,245,.85)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
              Home
            </li>
            <li className="tracking-tighter text-xl text-[rgba(245,245,245,.85)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
              Features
            </li>
            <li className="tracking-tighter text-xl text-[rgba(245,245,245,.85)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
              Contact
            </li>
            <li className="mr-[5%] ">
              <button className="tracking-tighter text-xl text-[#5352ed] bg-[rgba(245,245,245,.85)]  hover:text-white hover:tracking-widest hover:cursor-pointer transition-all w-[150%] h-[50px] rounded-xl hover:bg-transparent border-[3px] border-transparent hover:border-[rgba(245,245,245,.85)] ">
                Sign In
              </button>
            </li>
          </ul>
        </nav>
        <section className="w-[50%] h-[75%] flex flex-col justify-center">
          <h1 className="flex flex-col ml-[10%]">
            <span className="text-8xl tracking-tighter">
              Solve your problem with
            </span>
            <span className="gradienttext text-9xl font-bold tracking-widest">
              Todooo
            </span>
          </h1>
        </section>
      </section>
    </div>
  );
};

export default LandingPage;

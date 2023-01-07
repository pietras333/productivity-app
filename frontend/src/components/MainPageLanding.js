const MainPageLanding = ()=> {
    return(
        <>
        <section className="max-sm:w-[90%] max-sm:h-[50%] w-[70%] h-[75%] flex flex-col justify-center max-sm:justify-start max-sm:mt-[0%]">
          <h1 className="flex flex-col ml-[10%] max-sm:mt-[50%]">
            <span className="animate-fadein text-[rgba(245,245,245,.85)] max-sm:text-4xl 2xl:text-8xl xl:text-7xl lg:text-7xl md:text-6xl sm:text-5xl tracking-tighter">
              Solve your problem with
            </span>
            <span className="animate-slideleft gradienttext max-sm:text-6xl 2xl:text-9xl xl:text-8xl lg:text-8xl md:text-8xl sm:text-7xl font-bold tracking-widest">
              Todooo
            </span>
          </h1>
        </section>
        <section className='flex justify-center'>
          <button className="animate-fadein max-sm:text-xs max-sm:w-[100px] max-sm:h-[40px] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-base text-[#5352ed] bg-[rgba(245,245,245,.85)]  hover:text-white hover:tracking-widest hover:cursor-pointer transition-all w-[200px] h-[50px] rounded-xl hover:bg-transparent border-[3px] border-transparent hover:border-[rgba(245,245,245,.85)] ">
            Get Started
          </button>
        </section>
        </>
    )
}
export default MainPageLanding;
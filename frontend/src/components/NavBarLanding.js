

const NavBarLanding = () => {

  return (
    
        <nav className="fixed animate-slidetop z-10 w-full max-sm:h-[60px] 2xl:h-[150px] xl:h-[120px] lg:h-[100px] md:h-[80px] sm:h-[60px]">
          <ul className="flex justify-around items-center w-full h-full">
            <li className="max-sm:w-[30%] max-sm:text-1xl 2xl:w-[60%] xl:w-[60%] lg:w-[50%] md:w-[40%] sm:w-[35%] 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-5xl font-bold ml-[5%] tracking-widest">
              Todooo
            </li>
            <li className="max-sm:text-xs max-sm:mr-[3%] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-sm text-[rgba(245,245,245,.85)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
              Home
            </li>
            <li className="max-sm:text-xs max-sm:mr-[3%]  tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-sm text-[rgba(245,245,245,.85)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
              Features
            </li>
              <li className="max-sm:text-xs  max-sm:mr-[3%] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-sm text-[rgba(245,245,245,.85)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
                Contact
              </li>
            <li className="mr-[5%] max-sm:mr-[4%]">
              <button className="animate-fadein max-sm:text-xs max-sm:w-[120%] max-sm:h-[30px] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-base text-[#5352ed] bg-[rgba(245,245,245,.85)]  hover:text-white hover:tracking-widest hover:cursor-pointer transition-all w-[150%] h-[50px] rounded-xl hover:bg-transparent border-[3px] border-transparent hover:border-[rgba(245,245,245,.85)] ">
                Sign In
              </button>
            </li>
          </ul>
          
        </nav>
    )
}
export default NavBarLanding;
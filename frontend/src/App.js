import NavBarLanding from "./components/NavBarLanding"
import MainPageLanding from "./components/MainPageLanding"
import InfoLanding from "./components/InfoLanding";
import ContactForm from "./components/ContactForm"
import FooterLanding from "./components/FooterLanding";
import { useRef } from "react";

const LandingPage = () => {
  const contactref = useRef(null)
  const homeref = useRef(null)

  const handleScroll = (event) => {
    const id = event.target.id;
    switch(id)
    {
      case "contact":
        contactref.current?.scrollIntoView({"behaviour":"smooth"})
        break;
      case "home":
        homeref.current?.scrollIntoView({"behaviour":"smooth"})
        break;
      default:
        homeref.current?.scrollIntoView({"behaviour":"smooth"})
        break;
      }
  }

  window.onscroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("bar").style.width = scrolled + "%";
  };

  return (
    <div className="w-full h-auto">
      <div ref={homeref} className="bg-pgone bg-cover bg-center bg-no-repeat w-full">
        <section className="snap-center w-full h-screen bg-landing bg-contain bg-no-repeat bg-right-bottom md:bg-[length:505px]">
        <nav className="fixed animate-slidetop w-full max-sm:h-[60px] 2xl:h-[150px] xl:h-[120px] lg:h-[100px] md:h-[80px] sm:h-[60px]">
          <ul className="flex justify-around items-center w-full h-full">
            <li className="max-sm:w-[30%] max-sm:text-1xl 2xl:w-[60%] xl:w-[60%] lg:w-[50%] md:w-[40%] sm:w-[35%] 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-5xl sm:text-5xl font-bold ml-[5%] tracking-widest">
              Todooo
            </li>
            <li id="home" onClick={e => handleScroll(e)} className="max-sm:text-xs max-sm:mr-[3%] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-sm text-[rgba(245,245,245,.85)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
              Home
            </li>
            <li className="max-sm:text-xs max-sm:mr-[3%]  tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-sm text-[rgba(245,245,245,.85)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
              Features
            </li>
              <li id="contact" onClick={e => handleScroll(e)} className="max-sm:text-xs  max-sm:mr-[3%] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-sm text-[rgba(245,245,245,.85)] hover:text-white hover:tracking-widest hover:cursor-pointer transition-all">
                Contact
              </li>
            <li className="mr-[5%] max-sm:mr-[4%]">
              <button className="animate-fadein max-sm:text-xs max-sm:w-[120%] max-sm:h-[30px] tracking-tighter 2xl:text-xl xl:text-xl lg:text-lg md:text-lg sm:text-base text-[#5352ed] bg-[rgba(245,245,245,.85)]  hover:text-white hover:tracking-widest hover:cursor-pointer transition-all w-[150%] h-[50px] rounded-xl hover:bg-transparent border-[3px] border-transparent hover:border-[rgba(245,245,245,.85)] ">
                Sign In
              </button>
            </li>
          </ul>
        </nav>
          <MainPageLanding/>
        </section>
      </div>
      <div className="bg-pgtwo bg-cover bg-center bg-no-repeat w-full">
        <InfoLanding side="left" />  
      </div>
      <div className="bg-pgthree bg-cover bg-center bg-no-repeat w-full">
        <InfoLanding side="right"/>
      </div>
      <div ref={contactref} className="bg-contact bg-cover bg-center bg-no-repeat w-full">
        <ContactForm/>
      </div>
      <div className="bg-[#0052cc] w-full h-[300px] snap-center flex max-sm:flex-col justify-around">
        <FooterLanding/>
      </div>
      <div className="fixed top-0 z-10 w-full">
        <section className="w-full h-[8px]">
          <section className="h-[8px] bg-white rounded-lg" id="bar"></section>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;

import NavBarLanding from "./components/NavBarLanding"
import MainPageLanding from "./components/MainPageLanding"
import InfoLanding from "./components/InfoLanding";
import ContactForm from "./components/ContactForm"

const LandingPage = () => {
  return (
    <div className="w-full h-auto">
      <div className="bg-pgone bg-cover bg-center bg-no-repeat w-full">
        <section className="snap-center w-full h-screen bg-landing bg-contain bg-no-repeat bg-right-bottom md:bg-[length:505px]">
          <NavBarLanding/>
          <MainPageLanding/>
        </section>
      </div>
      <div className="bg-pgtwo bg-cover bg-center bg-no-repeat w-full">
        <InfoLanding side="left" />  
      </div>
      <div className="bg-pgthree bg-cover bg-center bg-no-repeat w-full">
        <InfoLanding side="right"/>
      </div>
      <div className="bg-contact bg-cover bg-center bg-no-repeat w-full">
        <ContactForm/>
      </div>
      <div className="bg-[#0052cc] w-full h-[300px] snap-center flex max-sm:flex-col justify-around">
        <section className="w-[40%] max-sm:w-full h-full max-sm:h-[50%] flex flex-col justify-around items-center">
          <h3><span className="text-xl text-[rgba(245,245,245,.75)]">Mentions</span></h3>
          <h3><span className="text-sm text-[rgba(245,245,245,.55)]">powered by</span> <span className="text-xl max-sm:text-base text-[rgba(245,245,245,.95)]">Mongo Database</span></h3>
          <h3><span className="text-sm text-[rgba(245,245,245,.55)]">powered by</span> <span className="text-xl max-sm:text-base text-[rgba(245,245,245,.95)]">Haikei</span></h3>
          <h3><span className="text-sm text-[rgba(245,245,245,.55)]">powered by</span> <span className="text-xl max-sm:text-base text-[rgba(245,245,245,.95)]">Figma</span></h3>
        </section>
        <section className="w-[40%] max-sm:w-full h-full max-sm:h-[50%] flex flex-col justify-around items-center">
          <h3><span className="text-xl text-[rgba(245,245,245,.75)]">Production</span></h3>
          <h3><span className="text-sm text-[rgba(245,245,245,.55)]">created by</span> <span className="text-xl max-sm:text-base text-[rgba(245,245,245,.95)]">Piotr Wendt</span></h3>
          <h3><span className="text-sm text-[rgba(245,245,245,.55)]">created in</span> <span className="text-xl max-sm:text-base text-[rgba(245,245,245,.95)]">2023</span></h3>
          <h3><span className="text-sm text-[rgba(245,245,245,.55)]">based on</span> <span className="text-xl max-sm:text-base text-[rgba(245,245,245,.95)]">NodeJS & ReactJS</span></h3>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;

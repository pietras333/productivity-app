import NavBarLanding from "./components/NavBarLanding"
import MainPageLanding from "./components/MainPageLanding"
import InfoLanding from "./components/InfoLanding";
import ContactForm from "./components/ContactForm"
import FooterLanding from "./components/FooterLanding";

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
        <FooterLanding/>
      </div>
    </div>
  );
};

export default LandingPage;

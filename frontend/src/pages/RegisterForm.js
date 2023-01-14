import { useState } from "react";
import NavBarLanding from "../components/NavBarLanding";

const RegisterForm = () => {
  const [formState, changeFormState] = useState(false);

  const handleFormState = () => {
    changeFormState((prev) => !prev);
  };

  return (
    <div className="w-full h-auto bg-[#050522]">
      {formState ? (
        <section className="w-full h-screen bg-register bg-[length:500px] bg-top bg-no-repeat flex flex-col justify-center items-center">
          <section className="w-[60%] h-[90%] absolute mt-auto mb-auto bg-red-500 animate-slidetop"></section>
        </section>
      ) : (
        <>
          <NavBarLanding PageState="getstarted" />
          <section className="w-full h-screen bg-register bg-[length:500px] bg-top bg-no-repeat flex flex-col justify-center items-center">
            <section className="w-[90%] h-[70%] flex justify-center items-end">
              <h1 className="text-9xl text-[#FFDE69] mb-10 tracking-widest">
                Welcome
              </h1>
            </section>
            <section className="w-[60%] h-[30%] flex justify-center items-center">
              <button
                onClick={handleFormState}
                className="bg-[#CA6035] border-transparent hover:bg-transparent  w-[300px] h-[70px] border-[4px] text-3xl tracking-tighter hover:tracking-widest hover:w-[320px] transition-all text-white rounded-xl hover:border-[#CA6035] hover:text-[#CA6035]"
              >
                Get Started
              </button>
            </section>
          </section>
        </>
      )}
    </div>
  );
};
export default RegisterForm;

const ContactForm = () => {
    return(
        <section className="snap-center w-full h-screen">
          <main className="w-[70%] max-lg:w-[100%]  h-full flex flex-col items-center justify-center">
            <h2 className="2xl:text-7xl mb-2 xl:text-6xl lg:text-5xl md:text-4xl max-sm:text-4xl">Contact Us!</h2>
            <section className="max-xl:w-[65%] max-sm:w-[76%] w-[52%] h-[80px] flex justify-between items-center">
              <input type="text" placeholder="First name" className="outline-none placeholder:pl-1 focus:pl-1 placeholder:text-[rgba(245,245,245,.95)] placeholder:tracking-widest focus:tracking-normal focus:text-[rgba(255,255,255,.95)] placeholder:text-xl transition-all 2xl:w-[320px] 2xl:h-[60px] 2xl:text-2xl 2xl:placeholder:text-2xl xl:w-[250px] xl:h-[50px] xl:text-2xl xl:placeholder:text-2xl lg:w-[210px] lg:h-[50px] lg:text-xl lg:placeholder:text-xl md:w-[195px] md:h-[50px] md:text-xl md:placeholder:text-xl max-sm:w-[120px] max-sm:h-[40px] max-sm:text-xs max-sm:placeholder:text-xs border-white border-[5px] bg-[rgba(245,245,245,.25)] rounded-lg" />
              <input type="text" placeholder="Last name" className="outline-none placeholder:pl-1 focus:pl-1 placeholder:text-[rgba(245,245,245,.95)] placeholder:tracking-widest focus:tracking-normal focus:text-[rgba(255,255,255,.95)] placeholder:text-xl transition-all 2xl:w-[320px] 2xl:h-[60px] 2xl:text-2xl 2xl:placeholder:text-2xl xl:w-[250px] xl:h-[50px] xl:text-2xl xl:placeholder:text-2xl lg:w-[210px] lg:h-[50px] lg:text-xl lg:placeholder:text-xl md:w-[195px] md:h-[50px] md:text-xl md:placeholder:text-xl max-sm:w-[120px] max-sm:h-[40px] max-sm:text-xs max-sm:placeholder:text-xs border-white border-[5px] bg-[rgba(245,245,245,.25)] rounded-lg" />
            </section>
            <section className="max-xl:w-[65%] max-sm:w-[76%] w-[52%] h-[80px] flex justify-between items-center">
              <input type="text" placeholder="Email" className="outline-none placeholder:pl-1 focus:pl-1 placeholder:text-[rgba(245,245,245,.95)] placeholder:tracking-widest focus:tracking-normal focus:text-[rgba(255,255,255,.95)] placeholder:text-xl transition-all 2xl:w-[320px] 2xl:h-[60px] 2xl:text-2xl 2xl:placeholder:text-2xl xl:w-[250px] xl:h-[50px] xl:text-2xl xl:placeholder:text-2xl lg:w-[210px] lg:h-[50px] lg:text-xl lg:placeholder:text-xl md:w-[195px] md:h-[50px] md:text-xl md:placeholder:text-xl max-sm:w-[120px] max-sm:h-[40px] max-sm:text-xs max-sm:placeholder:text-xs border-white border-[5px] bg-[rgba(245,245,245,.25)] rounded-lg" />
              <input type="text" placeholder="Phone" className="outline-none placeholder:pl-1 focus:pl-1 placeholder:text-[rgba(245,245,245,.95)] placeholder:tracking-widest focus:tracking-normal focus:text-[rgba(255,255,255,.95)] placeholder:text-xl transition-all 2xl:w-[320px] 2xl:h-[60px] 2xl:text-2xl 2xl:placeholder:text-2xl xl:w-[250px] xl:h-[50px] xl:text-2xl xl:placeholder:text-2xl lg:w-[210px] lg:h-[50px] lg:text-xl lg:placeholder:text-xl md:w-[195px] md:h-[50px] md:text-xl md:placeholder:text-xl max-sm:w-[120px] max-sm:h-[40px] max-sm:text-xs max-sm:placeholder:text-xs border-white border-[5px] bg-[rgba(245,245,245,.25)] rounded-lg" />
            </section>
            <section className="max-xl:w-[65%] max-sm:w-[76%] w-[52%] h-[20%] flex justify-between items-center">
              <input type="text" placeholder="Message" className="outline-none placeholder:pl-1 focus:pl-1 placeholder:text-[rgba(245,245,245,.95)] placeholder:tracking-widest focus:tracking-normal focus:text-[rgba(255,255,255,.95)] placeholder:text-xl transition-all w-full h-full border-white border-[5px] bg-[rgba(245,245,245,.25)] rounded-lg max-2xl:text-xl max-2xl:placeholder:text-xl xl:text-2xl xl:placeholder:text-2xl lg:text-xl lg:placeholder:text-xl max-sm:text-sm max-sm:placeholder:text-sm " />
            </section>
          </main>
        </section>
    )
}
export default ContactForm;
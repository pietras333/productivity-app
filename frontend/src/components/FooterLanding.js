const FooterLanding =()=> {
    return(
        <>
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
        </>
    )
}
export default FooterLanding;
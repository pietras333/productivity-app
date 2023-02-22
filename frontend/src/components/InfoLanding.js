const InfoLanding = (props) => {
  const side = props.side;
  return (
    <>
      {side === "left" && (
        <section className="flex max-sm:flex-col justify-end snap-center h-screen w-full bg-beingproductive bg-[length:50%] max-sm:bg-[length:100%] bg-no-repeat bg-left-bottom">
          <section className="w-[50%] max-sm:w-full h-full max-sm:flex max-sm:justify-center max-sm:items-center">
            <main className="w-[90%] h-[90%] flex flex-col justify-center">
              <h2 className=" max-sm:text-4xl 2xl:text-7xl xl:text-6xl lg:text-6xl md:text-4xl sm:text-5xl font-bold tracking-widest gradienttext">
                Let your creativity spread!
              </h2>
              <p className="text-white max-sm:text-xl max-sm:mr-[3%] tracking-tighter 2xl:text-2xl xl:text-2xl lg:text-xl md:text-base sm:text-base">
                Know how important it is to have space that your creativity can
                fill in!
              </p>
            </main>
          </section>
        </section>
      )}
      {side === "right" && (
        <section className="flex max-sm:flex-col justify-start snap-center h-screen w-full bg-relax bg-[length:50%] max-sm:bg-[length:100%] bg-no-repeat bg-right-bottom">
          <section className="w-[50%] max-sm:w-full h-full max-sm:flex max-sm:justify-center max-sm:items-center">
            <main className="w-[90%] 2xl:ml-[10%] xl:ml-[10%] lg:ml-[10%] md:ml-[10%] h-[90%] flex flex-col justify-center">
              <h2 className="dark:text-[black] gradienttext max-sm:text-4xl 2xl:text-7xl xl:text-6xl lg:text-6xl md:text-4xl sm:text-5xl font-bold tracking-widest">
                Do your job with relaxation!
              </h2>
              <p className="text-white max-sm:text-xl max-sm:mr-[3%] tracking-tighter 2xl:text-2xl xl:text-2xl lg:text-xl  md:text-base sm:text-base">
                Work without the stress of deadline and any other factors that
                can make you stressed!
              </p>
            </main>
          </section>
        </section>
      )}
    </>
  );
};
export default InfoLanding;

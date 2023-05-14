<section
  id="menu"
  className="bg-[#1f1f1f] menuClip text-[#D9D9D9] fixed right-[3rem] top-[3rem] w-0 h-0 z-30 flex justify-center items-center"
>
  <ul className="w-[50%] h-full text-[#D9D9D9] text-3xl flex items-center justify-center flex-col">
    <li
      tabIndex={0}
      aria-label="Navigate to contact"
      role="button"
      className="focus:outline-8 focus:outline-green-500 hover:cursor-pointer hover:tracking-widest bg-[#1f1f1f] p-2 rounded-2xl"
    >
      Contact
    </li>
    <li
      tabIndex={0}
      aria-label="Navigate to features"
      role="button"
      className="focus:outline-8 focus:outline-green-500 hover:cursor-pointer hover:tracking-widest bg-[#1f1f1f] p-2 rounded-2xl"
    >
      Features
    </li>
    <li
      tabIndex={0}
      aria-label="Navigate to FAQ"
      role="button"
      className="focus:outline-8 focus:outline-green-500 hover:cursor-pointer hover:tracking-widest bg-[#1f1f1f] p-2 rounded-2xl"
    >
      FAQ
    </li>
  </ul>
  {/* asdasd */}
  <nav className="w-full h-full">
    <ul className="w-full h-full flex justify-between items-center">
      <li className="ml-10">
        <h1 className="text-8xl font-baloobhai text-[#FFD36C]">alien.co</h1>
      </li>
      <li className="mr-10">
        <button
          aria-label="Open/Close menu"
          role="button"
          onClick={handleMenuChange}
          className="focus:outline-8 focus:outline-green-500 hover:cursor-pointer hover:rounded-[40%] w-[71px] flex flex-col justify-center items-center h-[71px] rounded-[50%] bg-[#FFD36C]"
        >
          <hr className="bg-[#FFFDFA] w-[38%] rounded-xl h-[4px] mb-1" />
          <hr className="bg-[#FFFDFA] w-[38%] rounded-xl h-[4px]" />
        </button>
      </li>
    </ul>
  </nav>
</section>;



<section className="flex justify-end items-center">
              <button
                onClick={handleMenuChange}
                className="mr-5 z-10 flex justify-center items-center flex-col bg-[#FC7F58] w-[50px] h-[50px] p-4 rounded-[40%]"
              >
                <hr className="bg-[#FFFDFA] w-[100%] rounded-xl h-[4px] mb-1" />
                <hr className="bg-[#FFFDFA] w-[90%] rounded-xl h-[4px]" />
              </button>
            </section>
            <nav
              id="menu"
              className="bg-[#FFFDFA] max-lg:hidden w-0 h-0 top-[3rem] right-[-3rem] fixed menuClip"
            >
              <ul className="text-2xl w-full h-full bg-home flex flex-col justify-center items-center">
                <li className="flex p-6 max-lg:p-2">
                  <h2 className="hover:cursor-pointer hover:text-[#FC7F58] border-b-2 border-b-transparent hover:border-[#FC7F58]">
                    Home
                  </h2>
                </li>
                <li className="flex p-6 max-lg:p-2">
                  <h2 className="hover:cursor-pointer hover:text-[#FC7F58] border-b-2 border-b-transparent hover:border-[#FC7F58]">
                    About Us
                  </h2>
                </li>
                <li className="flex p-6 max-lg:p-2">
                  <h2 className="hover:cursor-pointer hover:text-[#FC7F58] border-b-2 border-b-transparent hover:border-[#FC7F58]">
                    Features
                  </h2>
                </li>
                <li className="flex p-6 max-lg:p-2">
                  <h2 className="hover:cursor-pointer hover:text-[#FC7F58] border-b-2 border-b-transparent hover:border-[#FC7F58]">
                    Review
                  </h2>
                </li>
              </ul>
            </nav>
          </section>

          <section className="flex justify-end items-center">
              <button
                onClick={handleMenuChange}
                className="mr-5 z-10 flex justify-center items-center flex-col bg-[#FC7F58] w-[50px] h-[50px] p-4 rounded-[40%]"
              >
                <hr className="bg-[#FFFDFA] w-[100%] rounded-xl h-[4px] mb-1" />
                <hr className="bg-[#FFFDFA] w-[90%] rounded-xl h-[4px]" />
              </button>
            </section>
            <nav id="menu" className="bg-[#FFFDFA] max-md:visible">
              <ul className="text-2xl w-full h-full bg-home flex flex-col justify-center items-center">
                <li className="flex p-6 max-lg:p-2">
                  <h2 className="hover:cursor-pointer hover:text-[#FC7F58] border-b-2 border-b-transparent hover:border-[#FC7F58]">
                    Home
                  </h2>
                </li>
                <li className="flex p-6 max-lg:p-2">
                  <h2 className="hover:cursor-pointer hover:text-[#FC7F58] border-b-2 border-b-transparent hover:border-[#FC7F58]">
                    About Us
                  </h2>
                </li>
                <li className="flex p-6 max-lg:p-2">
                  <h2 className="hover:cursor-pointer hover:text-[#FC7F58] border-b-2 border-b-transparent hover:border-[#FC7F58]">
                    Features
                  </h2>
                </li>
                <li className="flex p-6 max-lg:p-2">
                  <h2 className="hover:cursor-pointer hover:text-[#FC7F58] border-b-2 border-b-transparent hover:border-[#FC7F58]">
                    Review
                  </h2>
                </li>
              </ul>
            </nav>
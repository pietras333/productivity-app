import Humanphone from "./assets/illustrations/humanonphone.png";
import Robot from "./assets/illustrations/fallingrobot.png";

const LandingPage = () => {
  return (
    <>
      <div className="max-h-[200vh]">
        <div className="h-[225vh] bg-landingpage bg-cover bg-no-repeat">
          <nav className="w-[100%] h-[7%]">
            <ul className=" w-[100%] h-[100%] flex justify-around items-center p-12 text-[rgba(35,35,35,.5)]">
              <li className="flex justify-start items-center w-[70%] ">
                <h1 className="text-7xl text-[rgba(255,255,255,.75)] animate-pulse">
                  Todoo
                </h1>
              </li>
              <li className="text-xl hover:cursor-pointer tracking-tighter hover:tracking-widest hover:text-black transition-all">
                Features
              </li>
              <li className="text-xl hover:cursor-pointer tracking-tighter hover:tracking-widest hover:text-black transition-all">
                Docs
              </li>
              <li className="text-xl hover:cursor-pointer tracking-tighter hover:tracking-widest hover:text-black transition-all">
                About Us
              </li>
              <li className="text-xl hover:cursor-pointer tracking-tighter hover:tracking-widest hover:text-black transition-all">
                Contact
              </li>
            </ul>
          </nav>
          <main className="h-[50%] flex items-center">
            <div className="h-[100%] w-[60%] flex items-center justify-center">
              <h2 className="text-9xl tracking-widest text-[rgba(35,35,35,.75)] ml-10 ">
                Lets get it done
              </h2>
            </div>
            <div className="h-[100%] w-[40%] flex items-center justify-center">
              <img
                src={Humanphone}
                alt="humand on phone illustration"
                className="w-[600px]"
              />
            </div>
          </main>
          <section className="h-[43%] flex justify-around items-center">
            <img
              src={Robot}
              alt="falling robot with a laptop"
              className="w-[900px] inline-block ml-10"
            />
            <section className="p-10">
              <h3 className="text-[rgba(35,35,35,.75)] text-6xl">
                What we offer?
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                enim quo velit consectetur autem expedita dolores explicabo at
                dolor, doloribus et minus totam pariatur recusandae voluptas
                libero alias impedit rem quidem, molestias odio amet, suscipit
                nisi aliquid! Dolore officia atque non maiores voluptatibus
                facere eveniet nihil, debitis corporis tempore molestias,
                quaerat sint voluptatem mollitia magni illo, vel hic itaque
                nulla ducimus fugiat veniam distinctio eius soluta? Unde cumque
                autem dolorum nesciunt tempora ipsam. Ad vero laudantium
                officiis distinctio non debitis iusto minus quaerat eaque
                aperiam neque nulla accusamus vitae a quia, officia recusandae
                sint labore consectetur modi, at explicabo velit. Aspernatur
                accusamus earum magni. Possimus aspernatur repellat ut explicabo
                hic quaerat id est nisi nostrum dolorum, consectetur ullam
                provident magni accusantium aliquam enim alias corrupti quasi
                culpa veniam officia autem, voluptatibus incidunt? Nostrum
                expedita dolorem deserunt cum accusantium vitae iusto eum
                placeat dolor soluta? Maxime quis tempora, eligendi laborum illo
                magnam voluptate dolorem molestiae expedita quasi consectetur ut
                dolor consequatur, quo doloremque perspiciatis eius ullam odio
                nostrum in earum labore qui nulla natus! Cupiditate nemo,
                perferendis magnam nobis voluptates et eos dolore exercitationem
                quo aliquam perspiciatis corrupti reiciendis obcaecati provident
                iusto quia delectus doloremque repudiandae ipsa! Ex laborum nisi
                voluptatum.
              </p>
            </section>
          </section>
        </div>
      </div>
    </>
  );
};

export default LandingPage;

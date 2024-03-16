import Image from "next/image";
import Navbar from "../components/Navbar";
import lanpage from "@/public/image/lanpage.jpg";
import Buttons from "../components/Buttons/Buttons";
import Drawyer from "../components/Drawyer/Drawyer";
export default function Home() {
  return (
    <main className="flex  flex-col  overflow-x-hidden">
      {/* <Navbar /> */}
      <section className="bg-red-300 h-full mx-[3%] relative">
        <Image
          src={lanpage}
          alt="landpage"
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 bottom-0 left-0 m-auto flex items-center mx-[9%] ">
          <div>
            <h1 className="text-white text-[69px] font-semibold leading-[70px]">
              Love the Planet <br /> we walk on
            </h1>
            <p className="text-white w-[65%] my-7">
              Bibendum fermentum, aenean donec pretium aliquam blandit tempor
              imperdiet arcu arcu ut nunc in dictum mauris at ut.
            </p>
            <div className="flex ">
              <Buttons value={"SHOP MEN"} />
              <div className="ml-5">
                <Buttons value={"SHOP WOMEN"} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Drawyer />
    </main>
  );
}

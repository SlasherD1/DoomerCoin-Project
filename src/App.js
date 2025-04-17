import React from "react";
import { useState } from "react";
import "./App.css"; // gunakan untuk CSS tambahan jika perlu
import "./assets/fonts/Boldoa-Mat.ttf";
import Gambar1 from "./assets/images/Gambar-1.png";
import bgAlter1 from "./assets/images/Gambar-2.png";
import decorative1 from "./assets/images/decorative-1.png";
import decorative2 from "./assets/images/decorative-2.png";
import Background1 from "./assets/images/Background-1.png";
import bg2 from "./assets/images/bg_2.png";
import bg3 from "./assets/images/Background-2.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <section
        id="hero"
        className="rajdhani relative bg-cover bg-center bg-no-repeat h-[700px] w-full text-white flex flex-col lg:flex-row items-center justify-center px-6 md:px-16 lg:px-32 py-20 gap-10 text-center lg:text-left overflow-hidden"
      >
        <img
          src={Background1}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        {/* <p className="text-md md:text-3xl bg-yellow-500 text-center rounded-xl font-bold text-black mt-[800px] xl:py-2 xl:px-4">
          CA : BA4wE7o1RRboQDqNDUpy77QgJjrk9DvAEb7kYpw5pvpn
        </p> */}
      </section>

      <div className="relative z-10 -mt-[80px] mb-[-40px] w-full text-center">
        <h2 className="font-boldoa3 text-white text-5xl md:text-6xl xl:text-8xl font-extrabold drop-shadow-xl inline-block px-6 py-3 rounded-xl">
          WELCOME DOOMERS
        </h2>
      </div>

      <section className="rajdhani text-white px-6 md:px-16 lg:px-32 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 justify-center mb-10 text-center lg:text-left">
          <div className="w-full lg:w-1/2">
            <div className="w-full h-full">
              <img
                src={Gambar1}
                alt="Logo"
                width={700}
                height={500}
                className="drop-shadow-2xl rounded-sm w-full h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4 max-w-xl">
            <h1 className="font-bold text-[36px] md:text-[50px] leading-tight font-boldoa3">
              WTF IS A DOOMER COIN?
            </h1>
            <h1 className="text-base md:text-lg container font-semibold">
              Doomer Coin is not just a token. It's a lifestyle choice. It's the
              digital equivalent of sighing at your reflection at 3 AM while
              chain-smoking and wondering where it all went wrong. Forget Lambos
              and moon missions — here, we just vibe, cope, and scroll
              endlessly.
            </h1>
          </div>
        </div>
      </section>

      <section
        className="rajdhani text-white px-6 md:px-16 lg:px-32 py-20"
        style={{
          backgroundImage: `url(${bg3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-10 justify-center text-center lg:text-left">
          <div className="flex flex-col gap-4 max-w-xl">
            <h1 className="font-bold text-[36px] md:text-[50px] leading-tight font-boldoa3">
              JOIN THE DOOMER COMMUNITY
            </h1>
            <p className="text-base md:text-lg font-semibold">
              Tired of fake positivity? Good. Here, we embrace existential dread
              like an old friend. Link up with other caffeine-addicted,
              nihilistic masterminds who know that life peaked at whatever year
              you personally romanticize. Share your coping playlists, bad
              decisions, and questionable memes. No ambitions. No expectations.
              Just vibes... and maybe a few regrets.
            </p>
            <br></br>
            <p className="text-base md:text-lg font-semibold">
              Powered by ADHD, regret, and way too much instant ramen.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={bgAlter1}
                alt="Logo"
                className="object-contain max-w-full max-h-full drop-shadow-2xl rounded-sm"
              />
            </div>
          </div>
        </div>

        <img
          src={decorative2}
          alt="Decorative Left"
          className="absolute xl:bottom-90 xl:left-80 md:bottom-90 md:left-20 left-20 md:mt-[10px] mt-[40px] w-[80px] md:w-[150px]"
        />

        {/* Decorative Bottom Right (Daun) */}
        <img
          src={decorative1}
          alt="Decorative Right"
          className="absolute xl:bottom-90 xl:right-80 md:bottom-90 md:right-20 right-20 md:mt-[10px] mt-[40px] w-[80px] md:w-[150px]"
        />
      </section>
      <br></br>
      <Footer />
    </>
  );
};

export default App;

import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="w-full mt- mt-24 max-[800px] mx-auto text-center text-white text-xl">
      <h2 className="text-xl uppercase text-[#00df9a] font-bold">
        Growing with data analytics.
      </h2>
      <h1 className="uppercase text-2xl font-bold ">grow with data </h1>
      <p className="text-white font-bold">
        First,flexible financing for{" "}
        <span>
          <Typewriter
            words={["Eat", "Sleep", "Code", "Repeat!"]}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>{" "}
      </p>
    </div>
  );
};

export default Hero;

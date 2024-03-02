import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import SpaceManCanvas from "./canvas/SpaceManOrbit";
import { useState } from "react";
import { accelerate } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto cursor-pointer`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className="text-[#915EFF]">Felipe</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I specialize in designing user interfaces
            <br className="sm:block hidden" />
            web applications and hybrid applications.
          </p>
        </motion.div>
      </div>

      {/* <ComputersCanvas /> */}
      <SpaceManCanvas />

      <ButtonSpace />
    </section>
  );
};

const ButtonSpace = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="absolute xs:bottom-20 bottom-32 w-full flex justify-center items-center">
      <motion.div
        animate={{
          y: [0, 40, 0],
        }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <a
          href="#about"
          className="relative h-12 w-40 inline-block font-bold uppercase rounded-md px-4 transition-all duration-300 py-2 bg-[#915EFF] text-white overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span
            className={` absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center transition-opacity ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          >
            Let's go
          </span>
          <span
            className={`absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center transition-opacity ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={accelerate} alt="Accelerate" width={60} height={40} />
          </span>
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;

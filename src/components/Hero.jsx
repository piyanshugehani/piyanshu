import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import './Shimmer.css';

const heroTexts = [
  "Full Stack Web Developer",
  500,
  "Mobile App Developer",
  500,
  "Software Engineer",
  500,
  "Python Developer",
  500,
  "AI & ML Developer",
  500,
];

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[180px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-white' />
          <div className='w-1 sm:h-80 h-96 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-white'>Piyanshu</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          <TypeAnimation
              sequence={heroTexts}
              // preRenderFirstString={true}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </p>
          <p className="my-2 text-gray-400">
          Software Engineer based in India, specializing in technical education throught hands-on learning and building applications.
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-52 bottom-40 w-full flex flex-col justify-center items-center gap-1'>
        
        {/* Explore My Work Button */}
        <a href='#about' className="relative group">
          <div className="shimmer-btn flex items-center gap-3 px-4 md:px-10 py-3 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm text-md md:text-xl">
            Explore My Work
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform duration-700">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </a>
        
        {/* Scroll Text */}
        <p className="text-gray-500 mt-2 text-sm">Scroll down to discover more</p>
      </div>
    </section>
  );
};

export default Hero;

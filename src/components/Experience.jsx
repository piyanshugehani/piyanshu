import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import experiences array and add new freelance experience
import { experiences } from "../constants";

const updatedExperiences = [
  {
    title: "React Developer (Freelance)",
    company_name: "Dazzle Consultancy",
    date: "Jan 2025 - April 2025",
    points: [
      "Delivered a modern consultancy website with engaging Framer Motion and GSAP animations",
      "Built with Next.js and integrated SMTP email functionality",
      "Implemented responsive design and cross-browser compatibility", 
      "Managed entire project lifecycle from requirements and designing to deployment, and collaborated closely with founder to understand product ecosystem and align website with business goals",
    ]
  },
  ...experiences
];

gsap.registerPlugin(ScrollTrigger);

const ExperienceCard = ({ experience, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    // Scroll-triggered parallax and fade-in animation
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50, rotateY: index % 2 === 0 ? 10 : -10, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    // Mouse hover 3D depth effect
    const card = cardRef.current;
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const xPercent = (x / rect.width) * 2 - 1;
      const yPercent = (y / rect.height) * 2 - 1;

      gsap.to(card, {
        rotateX: yPercent * 15,
        rotateY: -xPercent * 15,
        duration: 0.3,
        transformPerspective: 1000,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5 });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="relative bg-[#1b1919] p-4 rounded-2xl shadow-2xl mb-16 border border-gray-700 
                 hover:shadow-blue-500/20 transition-all duration-300
                 sm:p-10 md:p-12 lg:w-[100%] lg:mx-auto
                 xl:w-[100%] 2xl:w-[100%]" 
      id="work"
    >
      <div className="flex flex-col gap-2 sm:gap-3">
        <h3 className="text-white text-xl font-bold sm:text-2xl">{experience.title}</h3>
        <p className="text-secondary text-md sm:text-lg">{experience.company_name}</p>
        <p className="text-white text-sm sm:text-base">{experience.date}</p>
      </div>
      <ul className="mt-6 space-y-3 pl-5 list-disc text-white sm:mt-8">
        {experience.points.map((point, index) => (
          <li key={index} className="text-sm tracking-wide sm:text-base">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const lineRef = useRef(null);

  useEffect(() => {
    // Persistent glowing effect on the vertical line
    const glowTimeline = gsap.timeline({
      defaults: { duration: 1.5, ease: "power2.inOut", repeat: -1, yoyo: true },
    });
    glowTimeline
      .to(lineRef.current, { boxShadow: "0 0 20px rgba(80, 200, 255, 0.7)" })
      .to(lineRef.current, { boxShadow: "0 0 40px rgba(80, 200, 255, 1)" });

    // Scroll-reactive growth
    gsap.fromTo(
      lineRef.current,
      { height: "0%" },
      {
        height: "90%",
        scrollTrigger: {
          trigger: lineRef.current.parentElement,
          start: "top 20%",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="relative overflow-hidden py-20 sm:py-32 md:py-24">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      </div>

      {/* Glowing Vertical Line */}
      <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-1 h-[80%]">
        <div
          ref={lineRef}
          className="w-full h-0 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full shadow-lg"
        />
      </div>

      {/* Section Title */}
      <div className="text-center mb-16 sm:mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Work Experience</h2>
        <p className="text-secondary text-base sm:text-lg mt-2">What I have done so far</p>
      </div>

      {/* Timeline Content */}
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        {[...updatedExperiences].map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;

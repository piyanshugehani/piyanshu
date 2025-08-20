import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const AchievementCard = ({ icon, title, description, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="w-full bg-gradient-to-r from-tertiary/30 to-tertiary/70 p-6 rounded-2xl shadow-xl border border-white/10 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 mr-4">
          {React.cloneElement(icon, { className: "h-6 w-6 text-white" })}
        </div>
        <h3 className="text-white text-xl font-bold">{title}</h3>
      </div>
      <p className="text-secondary text-[16px] leading-[24px]">{description}</p>
    </motion.div>
  );
};

const Achievements = () => {
  const achievements = [
    {
      title: "Hackathon Champion",
      description: "Multiple wins including 2nd runner-up at UBS India Hackathon'25, 1st place at CraftNCode'24 (IIIT Bhubaneshwar), SYNOPSIUM'25 winner, and PanIIT PIWOT'25 champions among 15000+ teams",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: "Competitive Programming",
      description: "Achieved 1820+ rating on LeetCode, ranking in the top 6.86% globally. Profile: piyanshu",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: "Academic Excellence",
      description: "Secured 90.17% in HSC boards and achieved 99.28%tile in MH-CET examination",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
    },
    {
      title: "Educator & Mentor",
      description: "Teaching experience at Mayank tutorials for 10-12th std students and volunteer mentor at NGO-abhyudaya",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Community Service",
      description: "Served as a General Body Member at Rotaract Club of Airoli (RID-3142) for the year 2022-23",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full" id="achievements">
      <motion.div variants={textVariant()}>
        <h5 className={styles.sectionHeadText}>Achievements & Extracurriculars</h5>
        <p className={styles.sectionSubText}>Milestones and contributions </p>

      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <AchievementCard key={`achievement-${index}`} index={index} {...achievement} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Achievements, "achievements");
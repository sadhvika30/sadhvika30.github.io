import React, { useContext } from "react";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import cloud from "../assets/cloudBg.png";
import cloudDark from "../assets/cloudDark.png";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { FaCode, FaDatabase, FaTools, FaCloud, FaCubes, FaChartBar, FaBriefcase, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // Replace this URL with the actual iCloud share link of your resume
  const resumeUrl =
    "https://drive.google.com/file/d/11UbgNfBTfNeIj0K_oRyW6SiBFYWu2EcO/view?usp=drive_link";

  // Sample tags for Status Tags feature
  const tags = [
    { text: "Open to Work", icon: <FaBriefcase className="mr-2" />, color: "bg-green-300" },
    { text: "New Grad (May'25)", icon: <FaGraduationCap className="mr-2" />, color: "bg-blue-300" }
  ];
  
  return (
    <>
      <div
        style={
          darkMode
            ? { backgroundImage: `url('${cloud}')`, backgroundSize: "cover" }
            : { backgroundImage: `url('${cloudDark}')`, backgroundSize: "cover" }
        }
        className="h-screen flex items-center justify-center px-4 sm:px-8" // Added padding for mobile view
      >
        <main className="flex flex-col items-center text-center">
          <h1 className="text-4xl tracking-tight sm:text-5xl md:text-6xl mb-8 font-sans">
            <motion.span
              className={`block ${darkMode ? "text-black" : "text-white"} mb-4`}
              style={{ 
                fontFamily: "'Poppins', sans-serif", 
                fontWeight: 400, 
                color: '#6082B6' 
              }}
            >
              Hi, I am Sadhvika
            </motion.span>
            <span className="block text-[#a6d5cf] text-xxl font-sans">
              <Typical
                steps={[
                  "A Data Analyst",
                  1000,
                  "A PowerBI Developer",
                  1000,
                  "An Automation specialist",
                  1000,
                  "A Programmer",
                  1000,
                  "A Designer",
                  1000,
                  "An Idea Builder",
                  1000,
                  "A Problem Solver",
                  1000,
                  "A Curious Technologist",
                  1000,
                  "A Tech Enthusiast",
                  1000,
                  "A Lifelong Learner",
                  1000,
                ]}
                loop={Infinity}
                style={{ fontFamily: "'Roboto', sans-serif", fontWeight: 300 }} // Lighter weight for the roles
              />
            </span>
          </h1>

          <div className="flex justify-center mb-8">
            {contactLinks.map((el) => (
              <a
                href={el.link}
                className="mr-5 cursor-pointer hover:scale-125"
                key={el.name}
              >
                <img alt={el.name} src={el.url} />
                {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
              </a>
            ))}
          </div>

          <div className="mt-5">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-md text-white bg-pink-200 hover:bg-pink-100 md:py-4 md:text-lg md:px-10"
            >
              Resume
            </a>
          </div>

          {/* Status Tags */}
          <div className="flex flex-wrap gap-3 mt-10">
            {tags.map((tag, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`${tag.color} text-white px-4 py-2 rounded-full flex items-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                {tag.icon}
                <span className="font-semibold ml-2">{tag.text}</span>
              </motion.div>
            ))}
          </div>

        </main>
        
      </div>
    </>
  );
};

export default Home;

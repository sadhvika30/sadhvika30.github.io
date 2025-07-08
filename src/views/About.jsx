import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaTools, FaCloud, FaCubes, FaChartBar, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
import sadhvikaImage from "../assets/sadhvika.jpg"





function About() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const tags = [
    { text: "New Grad (May'25)", icon: <FaGraduationCap className="mr-2" />, color: "bg-blue-500" },
    { text: "Co-op (Spring'25)", icon: <FaCalendarAlt className="mr-2" />, color: "bg-purple-500" }
  ];

  const legend = {
    language: { color: "bg-blue-100", label: "Programming Languages", icon: <FaCode /> },
    database: { color: "bg-green-100", label: "Databases", icon: <FaDatabase /> },
    tool_or_framework: { color: "bg-yellow-100", label: "Tools & Frameworks", icon: <FaTools /> },
    cloud: { color: "bg-pink-100", label: "Cloud Platforms", icon: <FaCloud /> },
    library: { color: "bg-teal-100", label: "Libraries", icon: <FaCubes /> },
    visualization: { color: "bg-orange-100", label: "Visualization Tools", icon: <FaChartBar /> },
  };

  const getTypeClass = (type) => legend[type]?.color || "bg-gray-200";

  const textClass = darkMode ? "text-gray-500" : "text-white";
  const headingClass = darkMode
    ? "text-5xl font-bold px-4 md:px-0 text-center"
    : "text-5xl font-bold px-4 md:px-0 text-center text-white";

  return (
    <div id="about" className={darkMode ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h2 className={headingClass}>About Me</h2>

        <div className="flex flex-col md:flex-row items-start mt-8 gap-6">
          {/* Bio Section */}
          <div className="flex-1 md:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-3xl font-semibold text-blue-500">Bio</h4>
              <div className={`mt-4 text-xl text-justify ${textClass}`}>
                <p className="mb-4">
                  An Engineer with a passion for storytelling. I love diving into complex challenges and finding elegant, efficient solutions.
                </p>
                <p className="mb-4">
                 A recent Graduate from Texas tech university with Masters in Computer science and currently working with STEM CORE department as a Data Analyst Intern, I've had the opportunity to work on a range of projects that include database systems, distributed systems, machine learning, IoT, and Android app development.
                </p>
                <p className="mb-4">
                  When I'm not deep in debugging, you might find me cycling through scenic trails, hiking new paths, or catching up on the latest TV shows and movies. I also have a hobby of pretending to be a high-end photographer, capturing the beauty of sunsets and striking skies with my phone. Whether it's solving complex problems or enjoying some downtime, I'm always up for a new adventure.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            className="md:flex-1 w-full md:w-1/3 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={sadhvikaImage}
              alt="Sadhvika"
              className="w-64 md:w-80 h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" />
          </motion.div>
        </div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h4 className="mt-12 text-3xl font-semibold text-blue-500">
            Technologies and Tools
          </h4>

          {/* Legend */}
          <div className="mt-8">
            <div className="flex flex-wrap gap-4">
              {Object.entries(legend).map(([key, { color, label, icon }]) => (
                <motion.div
                  key={key}
                  className="flex items-center bg-opacity-20 rounded-lg px-3 py-2 shadow-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className={`w-3 h-3 ${color} rounded-full mr-2`}></span>
                  <span className="mr-2 text-blue-500">{icon}</span>
                  <span className={textClass}>{label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tech Stack Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                }}
                whileHover={{ scale: 1.05 }}
                className={`${getTypeClass(tech.type)} p-4 rounded-lg flex items-center shadow-md hover:shadow-lg transition-all duration-300`}
              >
                <img alt={tech.name} src={tech.link} className="w-12 h-12 object-contain" />
                <h4 className="text-md ml-4 font-medium">{tech.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;

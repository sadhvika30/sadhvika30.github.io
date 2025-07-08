import React, { useContext } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="contact"
      className={
        darkMode
          ? "bg-gray-100 pt-12" // Reduced top padding
          : "bg-black pt-12 text-white" // Reduced top padding
      }
    >
      {/* <div className="text-left mb-8 pl-4 sm:pl-6 lg:pl-8">
          <h2 className="text-4xl font-bold text-black mb-4">Contact me!</h2>
        </div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> {/* Adjusted padding */}
        <div className="text-center mb-20"> {/* Reduced bottom margin */}
          <h4 className="mt-4 text-3xl font-semibold text-blue-500"> {/* Reduced top margin */}
            Let's connect!
          </h4>
          <p className="text-gray-500 text-xl mt-2">
            Want to chat about my work, or just say hi? Drop me a line. I'm all ears (and fingers on a keyboard).
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <div className="w-full flex flex-col items-center mt-8 md:mt-6"> {/* Reduced top margin */}
            <h1 className="text-3xl font-bold">Email</h1>
            <a
              href="mailto:nelavellisadhvika@gmail.com"
              className="mb-8 mt-4 font-semibold text-blue-700 block uppercase"
            >
              nelavellisadhvika@gmail.com
            </a>
            <h1 className="text-3xl font-bold">Social</h1>
            <div className="flex flex-wrap justify-center mt-4">
              {contactLinks.map((el) => (
                <a
                  href={el.link}
                  className="mx-4 cursor-pointer hover:scale-125"
                  key={el.name}
                >
                  <img alt={el.name} src={el.url} className="w-10 h-10" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          darkMode
            ? "w-full bg-white text-black text-lg py-3 flex justify-center"
            : "w-full bg-gray-900 text-white text-lg py-3 flex justify-center"
        }
      >
        Made with
        <div className="text-red-500 px-2 text-2xl">&#10084;</div>
        by sadhvika 
      </div>
    </div>
  );
};

export default Contact;
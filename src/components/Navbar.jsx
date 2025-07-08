import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../themeProvider";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const darkMode = theme.state.darkMode;
  const links = [
    // {
    //   name: "Home",
    //   route: "/",
    // },
    {
      name: "About",
      route: "about",
    },
    {
      name: "Domains",
      route: "services",
    },
    {
      name: "Experience",
      route: "careers",
    },
    {
      name: "Projects",
      route: "projects",
    },
    // {
    //   name: "Publications",
    //   route: "publications",
    // },
    {
      name: "Contact",
      route: "contact",
    },
  ];

  useEffect(() => {
    const name = "Sadhvika Nelavelli";
    let index = 0;

    const interval = setInterval(() => {
      if (index < name.length) {
        setDisplayName((prev) => prev + name[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 200); // Adjust speed here
    return () => clearInterval(interval);
  }, []);

  function toggleTheme() {
    if (darkMode === true) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  }

  return (
    <>
      <nav
        className={
          darkMode
            ? "bg-white border-gray-200 z-50 shadow-lg md:px-8 px-1 fixed w-full top-0"
            : "bg-gray-700 border-gray-200 z-50 shadow-lg md:px-8 px-1 fixed w-full top-0"
        }
      >
        <div className="flex justify-between items-center py-2 md:py-4 md:px-2 pl-2 mx-auto">
          <div className="flex items-center cursor-pointer">
            <a
              href="/"
              className={
                darkMode
                  ? "text-xl font-medium text-decoration-none whitespace-nowrap text-black"
                  : "text-xl font-medium text-decoration-none whitespace-nowrap text-white"
              }
            >
              {`<`}
              <span>{displayName}</span>
              {`/>`}
            </a>
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto">
            <ul
              className={
                "flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium"
              }
            >
              {links.map((el) => (
                <li key={el.name} className="cursor-pointer">
                  <Link
                    to={el.route}
                    activeClass={"text-white bg-orange-200"}
                    spy={true}
                    smooth={true}
                    className={
                      darkMode
                        ? "block py-2 px-3 text-black hover:bg-orange-200 hover:text-white rounded-md"
                        : "block py-2 px-3 text-white hover:bg-orange-200 hover:text-black rounded-md"
                    }
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex md:hidden items-center">
            <Hamburger
              toggled={toggle}
              size={22}
              duration={0.8}
              distance={"lg"}
              toggle={setToggle}
              color={darkMode ? "#000000" : "#ffffff"}
            />
          </div>
        </div>
        {/* Mobile view nav bar */}
      </nav>
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0, transition: { type: "spring" } }}
            exit={{ x: 200, transition: { type: "spring" } }}
            className={
              darkMode
                ? "bg-white py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
                : "bg-black py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
            }
          >
            <ul className="md:hidden md:flex-row md:space-y-8 md:mt-0 md:text-md md:font-medium">
              {links.map((el) => (
                <Link
                  key={el.name}
                  to={el.route}
                  activeClass={"text-white bg-orange-200"}
                  className={
                    darkMode
                      ? "hover:bg-orange-200 text-black block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white"
                      : "hover:bg-orange-200 text-white block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white"
                  }
                  spy={true}
                  smooth={true}
                  onClick={() => setToggle(false)}
                >
                  <li>{el.name}</li>
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

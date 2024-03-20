/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import logo from "../../assets/image/logo.png";
import { FaListAlt } from "react-icons/fa";

import { ImHome } from "react-icons/im";
import { useNavigate } from "react-router-dom";
// import { IoIosMoon } from "react-icons/io";

import "./index.css";

const MenuBar = ({ children, isActive }) => {
  const navigate = useNavigate();

  const handleUrl = (link, name) => {
    navigate(link);
  };

  const [isOpenSlide, setIsOpenSlide] = useState(false);
  const [DarkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className="fixed top-2 z-50  left-2  ">
        <button
          onClick={() => {
            const newIsOpenSlide = !isOpenSlide;
            setIsOpenSlide(newIsOpenSlide);
            localStorage.setItem("isOpen", newIsOpenSlide.toString());
          }}
          className=" "
        >
            <img src={logo} width={45} />
        </button>
      </div>
      <aside
        id="logo-sidebar"
        className={`fixed shadow-xl shadow-gray-900 border-r-4 border-teal-200  bg-teal-950 top-0 left-0 z-40 w-60 h-screen pt-20 
        ${
          isOpenSlide
            ? "transition-transform -translate-x-full md:translate-x-0 sm:translate-x-0 "
            : " hidden  sm:translate-x-0 md:translate-x-0 "
        }  border-r   translate-x-0`}
        aria-label="Sidebar"
      >
        <div
          className={`h-full px-3 grid gap-4 content-between border-t-4 border-t-teal-700  ${
            DarkMode
              ? "dark:text-white dark:bg-black bg-black text-white"
              : "text-white bg-teal-950"
          } pb-4 overflow-y-auto  `}
        >
          <ul className="space-y-2 font-medium  ">
            <li
              onClick={() => handleUrl("/", "home")}
              className={`${
                isActive === "home"
                  ? DarkMode
                    ? "activeMenuDark "
                    : "activeMenuLight "
                  : `${
                      DarkMode
                        ? "  hover:text-white hover:bg-gray-800  text-white"
                        : " text-white hover:bg-gray-100"
                    }`
              } cursor-pointer `}
            >
              <button
                className={`flex ${
                  DarkMode ? "dark:text-white  text-white " : " "
                }  items-center p-2  rounded-lg group`}
              >
                <ImHome
                  className={`text-2xl ${
                    DarkMode ? " text-white" : "text-white"
                  } `}
                />
                <span
                  className={`  ${
                    DarkMode ? "text-white" : "text-white"
                  }  pr-2 flex-1 ms-3 whitespace-nowrap `}
                >
                  Màn hình chính
                </span>
              </button>
            </li>
            <li
              onClick={() => handleUrl("/detail", "detail")}
              className={`${
                isActive === "detail"
                  ? DarkMode
                    ? "activeMenuDark "
                    : "activeMenuLight "
                  : `${
                      DarkMode
                        ? "  hover:text-white hover:bg-gray-800  "
                        : " text-white hover:bg-gray-100"
                    }`
              } cursor-pointer `}
            >
              <button className=" flex items-center p-2 rounded-lg  group">
                <FaListAlt
                  className={`text-2xl ${
                    DarkMode ? "dark:text-white text-white" : "text-white"
                  } `}
                />
                <span
                  className={`  ${
                    DarkMode ? "text-white" : "text-white"
                  }  pr-2 flex-1 ms-3 whitespace-nowrap `}
                >
                  Sắp xếp
                </span>
              </button>
            </li>

            {/* <li className={`${DarkMode ? "hover:bg-gray-800  text-white" : "hover:bg-gray-200  text-white"} cursor-pointer  `} >
              <button

                className={` flex items-center py-2 px-1.5
                 rounded-lg    group`}
              >
                <MdLanguage className={`text-3xl ${DarkMode ? "dark:text-white text-white" : "text-white"} `} />
                <span className={`  ${DarkMode ? "dark:text-white text-white" : "text-white"} group-hover:text-gray-900 pr-2 flex-1 ms-3 whitespace-nowrap `}>
                  ngon
                </span>
              </button>
            </li> */}
          </ul>
        </div>
      </aside>

      <div
        className={`      ${
          DarkMode ? "dark:bg-slate-800 bg-slate-800" : "bg-gray-200"
        } `}
      >
        {/* <div className={` ${DarkMode ? "dark:bg-black bg-black" : "bg-white "}  p-4 border    border-gray-200   min-h-screen border-dashed rounded-lg  mt-14 pt-1 pb-12`}> */}
        {children}
        {/* </div> */}
        {/* <p className={` ${DarkMode ? "text-teal-200" : "text-teal-900"} mt-2`}> Copyright 2023 &copy; IT-SW LHG Huii & Shan</p> */}
      </div>
    </>
  );
};

export default MenuBar;

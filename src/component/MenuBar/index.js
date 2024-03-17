/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, useState } from "react";
// import logo from "../../../public/img/logo.png";
import { MdLanguage } from "react-icons/md";
import { IoSunny } from "react-icons/io5";
import { FaListAlt } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { ImHome } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { IoIosMoon } from "react-icons/io";

import './index.css'



const MenuBar = ({ children }) => {



  const navigate = useNavigate();
  const isActive = 'home';
  const handleUrl = (link, name) => {
    // if (name !== isActive) {

    navigate(link);
    // }
  };


  const [isOpenSlide, setIsOpenSlide] = useState(false);
  const [DarkMode, setDarkMode] = useState(false);

  return (
    <>

     <div class="fixed top-4 z-50  left-0  ">
        <button onClick={() => {
          const newIsOpenSlide = !isOpenSlide;
          setIsOpenSlide(newIsOpenSlide);
          localStorage.setItem('isOpen', newIsOpenSlide.toString());
        }} class="bg-blue-500 hover:bg-blue-600 hover:w-24 rounded-full text-white font-bold py-2 py-5 px-2 shadow-lg">
              X
        </button>
      </div>
      <aside
        id="logo-sidebar"
        className={`fixed shadow-xl ${DarkMode ? "dark:shadow-gray-900  dark:border-slate-900  dark:bg-black shadow-gray-900 border-slate-900 bg-black" : "bg-white"} top-0 left-0 z-40 w-60 h-screen pt-20 
        ${isOpenSlide ? "transition-transform -translate-x-full md:translate-x-0 sm:translate-x-0 "
            : " hidden  sm:translate-x-0 md:translate-x-0 "
          }  border-r   translate-x-0`}
        aria-label="Sidebar"
      >
        <div className={`h-full px-3 grid gap-4 content-between  ${DarkMode ? "dark:text-white dark:bg-black bg-black text-white" : "text-gray-900 bg-white"} pb-4 overflow-y-auto  `} >
          <ul className="space-y-2 font-medium  ">
            <li onClick={() => handleUrl("/", "home")} className={`${isActive === 'home' ? (DarkMode ? 'activeMenuDark ' : 'activeMenuLight ') :
              `${DarkMode ? '  hover:text-white hover:bg-gray-800  text-white' : ' text-gray-900 hover:bg-gray-100'}`} cursor-pointer `}>
              <button

                className={`flex ${DarkMode ? "dark:text-white  text-white " : " "}  items-center p-2  rounded-lg group`}>
                <ImHome className={`text-2xl ${DarkMode ? " text-white" : "text-gray-900"} `} />
                <span className={`  ${DarkMode ? "text-white" : "text-gray-900"}  pr-2 flex-1 ms-3 whitespace-nowrap `}>
                  Home
                </span>
              </button>
            </li>
            <li onClick={() => handleUrl("/list", 'list')} className={`${isActive === 'list' ? (DarkMode ? 'activeMenuDark ' : 'activeMenuLight ') :
              `${DarkMode ? '  hover:text-gray-900 hover:bg-gray-800  ' : ' text-gray-900 hover:bg-gray-100'}`} cursor-pointer `}>
              <button className=" flex items-center p-2 rounded-lg  group">
                <FaListAlt className={`text-2xl ${DarkMode ? "dark:text-white text-white" : "text-gray-900"} `} />
                <span className={`  ${DarkMode ? "text-white" : "text-gray-900"}  pr-2 flex-1 ms-3 whitespace-nowrap `}>
                  css
                </span>
              </button>
            </li>


            <li className={`${DarkMode ? "hover:bg-gray-800  text-white" : "hover:bg-gray-200  text-gray-900"} cursor-pointer  `} >
              <button

                className={` flex items-center py-2 px-1.5
                 rounded-lg    group`}
              >
                <MdLanguage className={`text-3xl ${DarkMode ? "dark:text-white text-white" : "text-gray-900"} `} />
                <span className={`  ${DarkMode ? "dark:text-white text-white" : "text-gray-900"} group-hover:text-gray-900 pr-2 flex-1 ms-3 whitespace-nowrap `}>
                  ngon
                </span>
              </button>
            </li>

            <li className={`${DarkMode ? "hover:bg-gray-800  text-white" : "hover:bg-gray-200  text-gray-900"} cursor-pointer `} onClick={() => { localStorage.removeItem("User"); handleUrl("/login", 'login') }}>
              <button

                className="flex items-center py-2 px-1.5   text-gray-900 rounded-lg    group"
              >
                <IoLogOutOutline className={`text-3xl ${DarkMode ? "dark:text-white text-white" : "text-gray-900"} `} />
                <span className={`  ${DarkMode ? "dark:text-white text-white" : "text-gray-900"} group-hover:text-gray-900 pr-2 flex-1 ms-3 whitespace-nowrap `}>
                  da
                </span>
              </button>
            </li>

          </ul>
     
        </div>
      </aside>

      <div className={`      ${DarkMode ? "dark:bg-slate-800 bg-slate-800" : "bg-gray-200"} `}>
        {/* <div className={` ${DarkMode ? "dark:bg-black bg-black" : "bg-white "}  p-4 border    border-gray-200   min-h-screen border-dashed rounded-lg  mt-14 pt-1 pb-12`}> */}
        {children}
        {/* </div> */}
        {/* <p className={` ${DarkMode ? "text-teal-200" : "text-teal-900"} mt-2`}> Copyright 2023 &copy; IT-SW LHG Huii & Shan</p> */}
      </div>
    </>
  );
};

export default MenuBar;

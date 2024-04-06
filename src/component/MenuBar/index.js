/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import logo from "../../assets/image/logo.png";
import { FaListAlt } from "react-icons/fa";
import { LuMonitorDot } from "react-icons/lu";
import { ImHome } from "react-icons/im";
import { useNavigate } from "react-router-dom";
// import { IoIosMoon } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { PiMonitor } from "react-icons/pi";
import "./index.css";

const MenuBar = ({ children, isActive }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isActive.includes("Screen")) {
      setIsOpenScreen(true);
    }
  }, [isActive]);
  const handleUrl = (link, name) => {
    navigate(link);
  };

  const [isOpenSlide, setIsOpenSlide] = useState(false);
  const [isOpenScreen, setIsOpenScreen] = useState(false);


  const screens = [];
  for (let i = 1; i <= 16; i++) {
    screens.push(
      <li
        key={i}
        onClick={() => handleUrl('/screen/'+i)}
        className={`${
          isActive === "Screen"+i? 'activeMenuDark' :"  hover:text-white hover:bg-gray-800  "}   flex cursor-pointer hover:bg-gray-700 p-3`}
      >
        <PiMonitor className="text-2xl" />
        <span className={`${i >= 10 ? '-ml-4' : '-ml-3.5'}  text-[8px] mt-1`}>{i}</span>
        &emsp;&emsp; Màn hình {i}
      </li>
    );
  }


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
          <img src={logo} width={45} style={{ opacity: "0.25" }} />
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
          className={`h-full px-3 grid gap-4 content-between   text-white bg-teal-950 pb-4 overflow-y-auto  `}
        >
          <ul className="space-y-2 font-medium  ">
            <li
              onClick={() => handleUrl("/", "home")}
              className={`${
                isActive === "home"
                  ? "activeMenuDark "
                    
                  : "  hover:text-white hover:bg-gray-800  text-white"} cursor-pointer `}
            >
              <button
                className={`flex text-white  items-center p-2  rounded-lg group`}
              >
                <ImHome
                  className={`text-2xl text-white`}
                />
                <span
                  className={`  text-white pr-2 flex-1 ms-3 whitespace-nowrap `}
                >
                  Màn hình chính
                </span>
              </button>
            </li>
            <li
              onClick={() => handleUrl("/menu", "menu")}
              className={`${
                isActive === "menu"? 'activeMenuDark' :"  hover:text-white hover:bg-gray-800  "} cursor-pointer `}
            >
              <button className=" flex items-center p-2 rounded-lg  group">
                <FaListAlt
                  className={`text-2xl text-white `}
                />
                <span
                  className={` text-white  pr-2 flex-1 ms-3 whitespace-nowrap `}
                >
                  Sắp xếp
                </span>
              </button>
            </li>

            <li
              className={`${
                isActive.includes("Screen")
                  ? "activeMenuDark "
                  : "  hover:text-white hover:bg-gray-800  "
              } cursor-pointer `}
            >
              <button
                onClick={() => setIsOpenScreen(!isOpenScreen)}
                className="  w-full flex items-center p-2 rounded-lg  group"
              >
                <LuMonitorDot
                  className={`text-2xl text-white`}
                />

                <span
                  className={`   text-white w-full pr-2 flex justify-between ms-3 whitespace-nowrap `}
                >
                  <span className=" ">Màn hình</span>
                  {isOpenScreen ? (
                    <IoIosArrowUp className="text-2xl" />
                  ) : (
                    <IoIosArrowDown className="text-2xl" />
                  )}
                </span>
              </button>
              <div
                className={`transition ease-in-out delay-150 bg-gray-950 ${
                   isOpenScreen ? "" : "hidden" 
                } `}
              >
                <ul className="ml-4 py-3 gap-3 flex flex-col h-72 overflow-auto">

                   
                {screens}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <div className={`  bg-black h-screen w-screen    `}>
       
        {children}
        
       
      </div>
    </>
  );
};

export default MenuBar;

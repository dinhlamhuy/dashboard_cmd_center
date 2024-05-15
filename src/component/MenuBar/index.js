/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
// import logo from "../../assets/image/logo.png";
import logo from "../../assets/image/LY_logo.png";
import { PiSwapFill  } from "react-icons/pi";
import { LuMonitorDot } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
// import { IoIosMoon } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { PiMonitor } from "react-icons/pi";
import "./index.css";
import { useTranslation } from "react-i18next";
import { LuLanguages } from "react-icons/lu";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
// import { changeLanguage } from "i18next";
const MenuBar = ({ children, isActive }) => {
  const { i18n } = useTranslation();
  const DefautLng = localStorage.getItem("languages");
  const [lng, setLng] = useState(DefautLng === null ? "EN" : DefautLng);
  const onChangeLanguage = (lng) => {
    // const newLanguage = lng === "TW" ? "EN" : "TW";
    i18n.changeLanguage(lng);
    setLng(lng);
    localStorage.setItem("Lng", lng);
  };
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
  const [isOpenlng, setIsOpenlng] = useState(false);

  const screens = [];
  for (let i = 1; i <= 16; i++) {
    screens.push(
      <li
        key={i}
        onClick={() => handleUrl("/screen/" + i)}
        className={`${
          isActive === "Screen" + i
            ? "activeMenuDark"
            : "  hover:text-white hover:bg-gray-800  "
        }   flex cursor-pointer hover:bg-gray-700 p-3`}
      >
        <PiMonitor className="text-2xl" />
        <span className={`${i >= 10 ? "-ml-4" : "-ml-3.5"}  text-[8px] mt-1`}>
          {i}
        </span>
        &emsp;&emsp; Screen {i}
      </li>
    );
  }

  return (
    <>
      <div className="fixed top-2 z-[120]  left-2  ">
        <button
          onClick={() => {
            const newIsOpenSlide = !isOpenSlide;
            setIsOpenSlide(newIsOpenSlide);
            localStorage.setItem("isOpen", newIsOpenSlide.toString());
          }}
          className=" pl-3 pt-2"
        >
          <img src={logo} width={100} style={{ opacity: "1" }} />
        </button>
      </div>
      <aside
        id="logo-sidebar"
        className={`fixed shadow-xl z-[100] shadow-gray-900   bg-teal-950 top-0 left-0  w-60 h-screen pt-20 
        ${
          isOpenSlide
            ? "transition-transform -translate-x-full md:translate-x-0 sm:translate-x-0 "
            : " hidden  sm:translate-x-0 md:translate-x-0 "
        }  border-r   translate-x-0`}
        aria-label="Sidebar"
      >
        <div
          className={`h-screen px-3 grid gap-4 content-between z-[100]  text-white bg-teal-950 pb-4 overflow-y-auto  `}
        >
          <ul className="space-y-2 font-medium  h-full">
            <li
              onClick={() => handleUrl("/", "home")}
              className={`${
                isActive === "home"
                  ? "activeMenuDark "
                  : "  hover:text-white hover:bg-gray-800  text-white"
              } cursor-pointer `}
            >
              <button
                className={`flex text-white  items-center p-2  rounded-lg group`}
              >
                <IoHomeOutline  className={`text-2xl text-white`} />
                <span
                  className={`  text-white pr-2 flex-1 ms-3 whitespace-nowrap `}
                >
                  Home
                </span>
              </button>
            </li>
            <li
              onClick={() => handleUrl("/menu", "menu")}
              className={`${
                isActive === "menu"
                  ? "activeMenuDark"
                  : "  hover:text-white hover:bg-gray-800  "
              } cursor-pointer `}
            >
              <button className=" flex items-center p-2 rounded-lg  group">
                <PiSwapFill    className={`text-2xl text-white font-bold `} />
                <span
                  className={` text-white  pr-2 flex-1 ms-3 whitespace-nowrap `}
                >
                  Screen Menu 3x3
                </span>
              </button>
            </li>
            <li
              onClick={() => handleUrl("/4x4", "s4x4")}
              className={`${
                isActive === "s4x4"
                  ? "activeMenuDark"
                  : "  hover:text-white hover:bg-gray-800  "
              } cursor-pointer `}
            >
              <button className=" flex items-center p-2 rounded-lg  group">
                <TfiLayoutGrid4Alt className={`text-2xl text-white font-bold `} />
                <span
                  className={` text-white  pr-2 flex-1 ms-3 whitespace-nowrap `}
                >
                  Dashboard 4x4
                </span>
              </button>
            </li>
            <li
              onClick={() => handleUrl("/menu4x4", "m4x4")}
              className={`${
                isActive === "m4x4"
                  ? "activeMenuDark"
                  : "  hover:text-white hover:bg-gray-800  "
              } cursor-pointer `}
            >
              <button className=" flex items-center p-2 rounded-lg  group">
                <PiSwapFill    className={`text-2xl text-white font-bold `} />
                <span
                  className={` text-white  pr-2 flex-1 ms-3 whitespace-nowrap `}
                >
                  Screen Menu 4x4
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
                <LuMonitorDot className={`text-2xl text-white`} />

                <span
                  className={`   text-white w-full pr-2 flex justify-between ms-3 whitespace-nowrap `}
                >
                  <span className=" ">Screens</span>
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
            <li
              className={`${
                isActive.includes("Lang")
                  ? "activeMenuDark "
                  : "  hover:text-white hover:bg-gray-800  "
              } cursor-pointer `}
            >
              <button
                onClick={() => setIsOpenlng(!isOpenlng)}
                className="  w-full flex items-center p-2 rounded-lg  group"
              >
                <LuLanguages className={`text-2xl text-white`} />

                <span
                  className={`   text-white w-full pr-2 flex justify-between ms-3 whitespace-nowrap `}
                >
                  <span className=" ">Language</span>
                  {isOpenlng ? (
                    <IoIosArrowUp className="text-2xl" />
                  ) : (
                    <IoIosArrowDown className="text-2xl" />
                  )}
                </span>
              </button>
              <div
                className={`transition ease-in-out delay-150 bg-gray-950 ${
                  isOpenlng ? "" : "hidden"
                } `}
              >
                <ul className="ml-4 py-3 gap-3 flex flex-col h-auto overflow-auto">
                  <li
                    key={"en"}
                    onClick={() => onChangeLanguage("EN")}
                    className={`${
                      isActive === "Lng"
                        ? "activeMenuDark"
                        : "  hover:text-white hover:bg-gray-800  "
                    }   flex cursor-pointer hover:bg-gray-700 p-3`}
                  >
                    &emsp;&emsp; English
                  </li>
                  <li
                    key={"tw"}
                    onClick={() => onChangeLanguage("TW")}
                    className={`${
                      isActive === "Lng"
                        ? "activeMenuDark"
                        : "  hover:text-white hover:bg-gray-800  "
                    }   flex cursor-pointer hover:bg-gray-700 p-3`}
                  >
                    &emsp;&emsp; Taiwan
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <div className={`  bg-black h-screen w-screen    `}>{children}</div>
    </>
  );
};

export default MenuBar;

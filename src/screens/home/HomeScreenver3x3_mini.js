/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import socketIOClient from "socket.io-client";
import MenuBar from "../../component/MenuBar";
import { BaseAPIScreen, HostSocket } from "../../utils/baseApi";
import { DB_Route } from "../../utils/DB_Route";

import bgImg from "../../assets/image/background.jpg";

const HomeScreen = () => {
  const navigate = useNavigate();
  const [socket, setSocket] = useState(null);
  const [ClickScreen, setClickScreen] = useState("");
  const socketRef = useRef();
  const navigateToDetail = (link) => {
    if (ClickScreen === "") {
      setClickScreen(link);
    } else if (ClickScreen === link) {
      setClickScreen("");

      console.log(link);
      navigate("/" + link);
    } else {
      setClickScreen(link);
    }
  };

  const [list, setList] = useState([
    {
      DB_id: "3",
      DB_url: "Trial_Schedule_Season",
      DB_name: "TRIAL SCHEDULE SEASON",
      Screen_id: "1",
      Screen_position: "1",
    },
    {
      DB_id: "4",
      DB_url: "Data_KPI_Total",
      DB_name: "QUALITY KPI TOTAL",
      Screen_id: "2",
      Screen_position: "2",
    },
    {
      DB_id: "7",
      DB_url: "AssemblyQuality",
      DB_name: "ASSEMBLY QUALITY",
      Screen_id: "3",
      Screen_position: "3",
    },
    {
      DB_id: "5",
      DB_url: "Availability_KPI",
      DB_name: "AVAILABILITY KPI",
      Screen_id: "4",
      Screen_position: "4",
    },
    {
      DB_id: "12",
      DB_url: "StockFittingQuality_VerEn",
      DB_name: "STOCK FITTING QUALITY EN",
      Screen_id: "5",
      Screen_position: "5",
    },
    {
      DB_id: "6",
      DB_url: "Shipping_Shedule",
      DB_name: "SHIPPING SCHEDULE",
      Screen_id: "6",
      Screen_position: "6",
    },
    {
      DB_id: "15",
      DB_url: "HourlyOutPutByFloor",
      DB_name: "HOURLY OUTPUT BY FLOOR",
      Screen_id: "7",
      Screen_position: "7",
    },
    {
      DB_id: "11",
      DB_url: "HourlyOutPutByModel",
      DB_name: "HOURLY OUTPUT BY MODEL",
      Screen_id: "8",
      Screen_position: "8",
    },
    {
      DB_id: "17",
      DB_url: "HR",
      DB_name: "HR",
      Screen_id: "9",
      Screen_position: "9",
    },
    {
      DB_id: null,
      DB_url: null,
      DB_name: null,
      Screen_id: "10",
      Screen_position: "10",
    },
    {
      DB_id: null,
      DB_url: null,
      DB_name: null,
      Screen_id: "11",
      Screen_position: "11",
    },
    {
      DB_id: null,
      DB_url: null,
      DB_name: null,
      Screen_id: "12",
      Screen_position: "12",
    },
    {
      DB_id: null,
      DB_url: null,
      DB_name: null,
      Screen_id: "13",
      Screen_position: "13",
    },
    {
      DB_id: null,
      DB_url: null,
      DB_name: null,
      Screen_id: "14",
      Screen_position: "14",
    },
    {
      DB_id: null,
      DB_url: null,
      DB_name: null,
      Screen_id: "15",
      Screen_position: "15",
    },
    {
      DB_id: null,
      DB_url: null,
      DB_name: null,
      Screen_id: "16",
      Screen_position: "16",
    },
  ]);

  useEffect(() => {
    const getAPIcheck = async () => {
      await axios
        .post(BaseAPIScreen + "/dashboard/getlistscreen")
        .then((response) => {
          setList(response.data.data.data);
        })
        .catch(() => {});
    };
    getAPIcheck();
    socketRef.current = socketIOClient.connect(HostSocket);
    socketRef.current.on("message", (data) => {
      console.log(data);
    });
    socketRef.current.on("54314", (data) => {
      console.log("data", data);
      setSocket(data);
    });
    return () => {
      socketRef.current.disconnect();
    };
  }, [socket]);

  return (
    <>
      <MenuBar isActive={"home"}>
        <div className="w-screen h-screen   px-1 pb-22 overflow-hidden bg-gray-400 ">
          <div className="w-full text-center pb-1 py-8">
            <div className="pt-6">
              {/* <img src={LY_logo} className=" h-[30px] " /> */}
            </div>
            <div className="absolute top-0 left-2 w-full ">
              <h1 className="text-black font-bold tracking-[1.1em]  text-[40px]">
                戰情中心
              </h1>
            </div>
          </div>
          <div className="w-[100%] h-[91.2%] bg-gray-900 grid p-0 m-0 grid-cols-4 gap-1 relative   ">
            {list &&
              list.slice(0, 9).map((item, index) => {
                const Component = DB_Route[item.DB_url];
                const url = item.DB_url;
                // let so=0;
                const rowIndex = Math.floor(index / 3) + 1;
                const colIndex = index % 3;

                if (!Component) {
                  if (index === 1) {
                    return (
                      <div
                        key={"screen" + index}
                        style={{
                          left: `calc(${colIndex} / 3 * 100%)`,
                          top: `calc(${rowIndex - 1} / 3 * 100%)`,
                        }}
                        className={`h-1/3 absolute w-1/3   text-yellow-800 font-bold justify-center items-center bg-gray-800 flex`}
                      >
                        {/* {item.DB_name} */}

                        <iframe
                          src="http://192.168.30.100:5173/eip/manager"
                          width="100%"
                          height="100%"
                          title="W3Schools Free Online Web Tutorials"
                        ></iframe>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={"screen" + index}
                        style={{
                          left: `calc(${colIndex} / 3 * 100%)`,
                          top: `calc(${rowIndex - 1} / 3 * 100%)`,
                        }}
                        className={`h-1/3 absolute w-1/3  text-yellow-800 font-bold justify-center items-center bg-gray-800 flex`}
                      >
                        {/* {item.DB_name} */}

                        <iframe
                          src="http://192.168.32.96:8196"
                          width="300%"
                          height="100%"
                          title="sd"
                        ></iframe>
                      </div>
                    );
                  }
                }

                return (
                  <div
                    key={"screen" + index}
                    style={{
                      left: `calc(${colIndex} / 3 * 100%)`,
                      top: `calc(${rowIndex - 1} / 3 * 100%)`,
                      background: `url(${bgImg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100%",
                    }}
                    className={`  border-2 border-gray-400 h-1/3 w-1/3  absolute px-0  overflow-hidden`}
                  >
                    <button
                      onClick={() =>
                        navigateToDetail("screen/" + Number(index + 1))
                      }
                      className={`  overflow-hidden h-full w-full font-bold rounded-lg`}
                      key={"frame" + index}
                    >
                      <div
                        style={{
                          transform:
                            "scale(0.2)" /* Thu nhỏ trang web xuống 75% */,
                          transformOrigin: "0 0",
                          width: "165vw",
                          height: "150vh",
                        }}
                        className={`   overflow-hidden
              text-xl select-none text-ellipsis   w-full h-full flex justify-center  p-0 pt-4 mt-0 `}
                      >
                        <Component />
                      </div>
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </MenuBar>
    </>
  );
};

export default HomeScreen;

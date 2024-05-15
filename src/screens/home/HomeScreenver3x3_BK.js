/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import socketIOClient from "socket.io-client";
import MenuBar from "../../component/MenuBar";
import ModalScreens from "../../component/ModalScreens";
import { BaseAPIScreen, HostSocket } from "../../utils/baseApi";
import { DB_Route } from "../../utils/DB_Route";
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
        "DB_id": null,
        "DB_url": null,
        "DB_name": null,
        "Screen_id": "1",
        "Screen_position": "1"
    },
    {
        "DB_id": "14",
        "DB_url": "StockFittingQuality",
        "DB_name": "STOCK FITTING QUALITY",
        "Screen_id": "2",
        "Screen_position": "2"
    },
    {
        "DB_id": null,
        "DB_url": null,
        "DB_name": null,
        "Screen_id": "3",
        "Screen_position": "3"
    },
    {
        "DB_id": null,
        "DB_url": null,
        "DB_name": null,
        "Screen_id": "4",
        "Screen_position": "4"
    },
    {
        "DB_id": "7",
        "DB_url": "AssemblyQuality",
        "DB_name": "ASSEMBLY QUALITY",
        "Screen_id": "5",
        "Screen_position": "5"
    },
    {
        "DB_id": null,
        "DB_url": null,
        "DB_name": null,
        "Screen_id": "6",
        "Screen_position": "6"
    },
    {
        "DB_id": "15",
        "DB_url": "HourlyOutPutByFloor",
        "DB_name": "HOURLY OUTPUT BY FLOOR",
        "Screen_id": "7",
        "Screen_position": "7"
    },
    {
        "DB_id": null,
        "DB_url": null,
        "DB_name": null,
        "Screen_id": "8",
        "Screen_position": "8"
    },
    {
        "DB_id": null,
        "DB_url": null,
        "DB_name": null,
        "Screen_id": "9",
        "Screen_position": "9"
    },
    {
        "DB_id": "17",
        "DB_url": "HR",
        "DB_name": "HR",
        "Screen_id": "10",
        "Screen_position": "10"
    },
    {
        "DB_id": null,
        "DB_url": null,
        "DB_name": null,
        "Screen_id": "11",
        "Screen_position": "11"
    },
    {
        "DB_id": "3",
        "DB_url": "CS3_Trial_Schedule",
        "DB_name": "CS3 TRIAL SCHEDULE",
        "Screen_id": "12",
        "Screen_position": "12"
    },
    {
        "DB_id": null,
        "DB_url": null,
        "DB_name": null,
        "Screen_id": "13",
        "Screen_position": "13"
    },
    {
        "DB_id": null,
        "DB_url": null,
        "DB_name": null,
        "Screen_id": "14",
        "Screen_position": "14"
    },
    {
        "DB_id": "4",
        "DB_url": "Data_KPI_Total",
        "DB_name": "QUALITY KPI TOTAL",
        "Screen_id": "15",
        "Screen_position": "15"
    },
    {
        "DB_id": null,
        "DB_url": null,
        "DB_name": null,
        "Screen_id": "16",
        "Screen_position": "16"
    }
]);

  useEffect(() => {
    const getAPIcheck = async () => {
      await axios
        .post(BaseAPIScreen + "/dashboard/getlistscreen")
        .then((response) => {
          // console.log(response.data.data);
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
        <div className="w-screen h-screen  bg-gray-900 grid p-0 m-0 grid-cols-4 gap-1 relative   ">
          {list &&
            list.slice(0,9).map((item, index) => {
              const Component = DB_Route[item.DB_url];
              const url = item.DB_url;
              // let so=0;
              const rowIndex = Math.floor(index / 3) + 1;
              const colIndex = index % 3;

              if (!Component) {
                // Xử lý trường hợp nếu không tìm thấy component

                return (
                  <div key={'screen'+index}
                    style={{
                      left: `calc(${colIndex} / 3 * 100%)`,
                      top: `calc(${rowIndex - 1} / 3 * 100%)`,
                    }}
                  
                    className={`h-1/3 absolute w-1/3   text-yellow-800 font-bold justify-center items-center bg-gray-800 flex`}
                  >
                    {/* {item.DB_name} */}

                    <iframe src="http://192.168.32.96:8196/" width="100%" height="100%" title="W3Schools Free Online Web Tutorials">
</iframe>

                  </div>
                );
              }

              return (
                <div key={'screen'+index}
                  style={{
                    left: `calc(${colIndex} / 3 * 100%)`,
                    top: `calc(${rowIndex - 1} / 3 * 100%)`,
                  }}
                  className={` border border-2 border-black h-1/3 w-1/3 bg-gray-950 absolute px-0  overflow-hidden`}
                >
                  <button
                    onClick={() => navigateToDetail(url)}
                    className={`  overflow-auto  font-bold rounded-lg`}
                    key={"frame" + index}
                  >
                    <div
                      className={` bg-gray-950   
              text-xl select-none text-ellipsis   w-full h-full flex justify-center items-center p-0 m-0 `}
                    >
                      <Component />
                    </div>
                  </button>
                </div>
              );
            })}
        </div>
      </MenuBar>
    </>
  );
};

export default HomeScreen;

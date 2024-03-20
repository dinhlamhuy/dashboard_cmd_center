/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import socketIOClient from "socket.io-client";
import MenuBar from "../../component/MenuBar";
import ModalScreens from "../../component/ModalScreens";
import { BaseAPI, HostSocket } from "../../utils/baseApi";
import {DB_Route} from "../../utils/DB_Route";
const HomeScreen = () => {
  const navigate = useNavigate();
  const [socket, setSocket] = useState(null);
  const socketRef = useRef();
  const navigateToDetail = (link) => {
    console.log(link)
    navigate('/'+link); 
  };



  const [list, setList] = useState([]);

  useEffect(() => {
    const getAPIcheck = async () => {
      await axios
        .post(BaseAPI + "/dashboard/getlistscreen")
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
        <div className="w-full h-screen bg-gray-900 grid p-0 m-0 grid-cols-4 gap-1 ">
          {list &&
            list.map((item, index) => {
              const Component = DB_Route[item.DB_url];
              const url=item.DB_url;
              if (!Component) {
                // Xử lý trường hợp nếu không tìm thấy component
                return (
                  <div
                    key={index}
                    className="text-yellow-800 font-bold justify-center items-center bg-gray-800 flex"
                  >
                    {" "}
                    {item.DB_name}
                  </div>
                );
              }

              return (
                <button
                  onClick={() => navigateToDetail(url)}
                  className={` h-full w-full   font-bold rounded-lg`}
                  key={"frame" + index}
                >
                  <div
                    className={`backdrop-blur-md bg-gray-950 text-yellow-400 
              text-xl select-none text-ellipsis overflow-hidden  w-full h-full flex justify-center items-center p-0 m-0 text-black`}
                  >
                    {/* {item.DB_name} */}
                    <Component />
                  </div>
                </button>
              );
            })}
        </div>
      </MenuBar>
    </>
  );
};

export default HomeScreen;

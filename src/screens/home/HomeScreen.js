/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import socketIOClient from "socket.io-client";
import MenuBar from "../../component/MenuBar";
import ModalScreens from "../../component/ModalScreens";
import { BaseAPI, HostSocket } from "../../utils/baseApi";
import { DB_Route } from "../../utils/DB_Route";
const HomeScreen = () => {
  const navigate = useNavigate();
  const [socket, setSocket] = useState(null);
  const [ClickScreen, setClickScreen] = useState('');
  const socketRef = useRef();
  const navigateToDetail = (link) => {
    if(ClickScreen ===''){
      setClickScreen(link)
    }else if(ClickScreen===link){
      setClickScreen('')

      console.log(link);
      navigate("/" + link);
    }else{
      setClickScreen(link)

    }

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
        <div className="w-screen h-screen  bg-gray-900 grid p-0 m-0 grid-cols-4 gap-1 relative   ">
          {list &&
            list.map((item, index) => {
              const Component = DB_Route[item.DB_url];
              const url = item.DB_url;
              // let so=0;
              const rowIndex = Math.floor(index / 4) +1;
              const colIndex = (index % 4);
              if (!Component) {
                // Xử lý trường hợp nếu không tìm thấy component
              
                return (
                  <div
                    key={index}
                    className={`h-1/4 left-${colIndex}/4  top-${rowIndex-1}/4 absolute w-1/4   text-yellow-800 font-bold justify-center items-center bg-gray-800 flex`}
                  >
                  
                    {item.DB_name}
                  </div>
                );
              }

              return (
                <div className={` h-1/4 w-1/4 absolute  left-${colIndex}/4   top-${rowIndex-1}/4 overflow-hidden`}>
                  <button
                    onClick={() => navigateToDetail(url)}
                    className={`  overflow-auto  font-bold rounded-lg`}
                    key={"frame" + index}
                  >
                    <div
                      className={` bg-gray-950  
              text-xl select-none text-ellipsis   w-full h-full flex justify-center items-center p-0 m-0 `}
                    >
                      {/* {item.DB_name} */}
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

import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import MenuBar from "../../component/MenuBar";
import { useParams } from "react-router-dom";
import { BaseAPI, HostSocket } from "../../utils/baseApi";
import { DB_Route } from "../../utils/DB_Route";
import socketIOClient from "socket.io-client";
const OneScreen = () => {
  const { id } = useParams();
  // if(id > 16 && id > )
//   console.log(id);
  //   getdetailscreen
  const [socket, setSocket] = useState(null);
  const socketRef = useRef();
  const [screenComponent, setScreenComponent] = useState(null);
  useEffect(() => {
    const getAPIcheck = async () => {
      try {
        const response = await axios.post(BaseAPI + "/dashboard/getdetailscreen", { id_screen: id });
       console.log(response.data.data.data)
        setScreenComponent(response.data.data.data);

      } catch (error) {
        console.error("Error fetching screen component:", error);
      }
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
  }, [id, socket]);
  let Component =null;
  if(screenComponent){
    Component = DB_Route[screenComponent.DB_url];

  }
console.log(Component)
  return (
    <>
      <MenuBar isActive={"Screen_" + id}>
        <div className="bg-black box-border flex-none  h-screen w-screen">
         {
            Component && ( <Component />)
         }
        </div>
      </MenuBar>
    </>
  );
};
export default OneScreen;


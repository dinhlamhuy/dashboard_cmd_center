/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import socketIOClient from "socket.io-client";
import MenuBar from "../../component/MenuBar";
import ModalScreens from "../../component/ModalScreens";
import { BaseAPI, HostSocket } from "../../utils/baseApi";
const DetailScreen = () => {
  const navigate = useNavigate();
  const [socket, setSocket] = useState(null);
  const socketRef = useRef();
  
  const navigateToDetail = (link) => {
    navigate(link); // Navigate to the "/detail" route
  };

  const [screenFrom, setScreenFrom] = useState(-1);
  const [screenTo, setScreenTo] = useState(-1);
  const [openModal, setOpenModal] = useState(false);
  const [itemScreen, setItemScreen] = useState({});
  const [listComponent, setListComponent] = useState([]);
  const [chooseScreen, setChooseScreen] = useState();
  const [chooseComponentValue, setChooseComponentValue] = useState("");

  const [list, setList] = useState([]);
  const getComponent = async (idScreen) => {
    await axios
      .post(BaseAPI+"/dashboard/getlistcomponent", {
        id_screen: idScreen + 1,
      })
      .then((response) => {
        console.log(response.data.data);
        setListComponent(response.data.data.data);
      })
      .catch(() => {});
  };

  const addCompontAtScreen = async (option) => {
    let data;
    if (option === "choose") {
      data = {
        id_screen: chooseScreen,
        DB_id: chooseComponentValue,
      };
    } else {
      data = {
        id_screen: chooseScreen,
        DB_id: "",
      };
    }
    await axios
      .post(BaseAPI+"/dashboard/insertcomponentscreen", data)
      .then((response) => {
        setChooseComponentValue('');
        setChooseScreen('')
        getAPI();
        setOpenModal(false);
      })
      .catch(() => {});
  };
  const swapScreen = async (id_screen1, id_screen2) => {
    const data = {
      id_screen1: id_screen1,
      id_screen2: id_screen2,
    };

    await axios
      .post(BaseAPI+"/dashboard/swapscreen", data)
      .then((response) => {
        // console.log(response.data.data);
        getAPI();
        // setOpenModal(false);
      })
      .catch(() => {});
  };
  const getAPI = async () => {
    await axios
      .post(BaseAPI+"/dashboard/getlistscreen")
      .then((response) => {
        // console.log(response.data.data);
        setList(response.data.data.data);
      })
      .catch(() => {});
  };
  useEffect(() => {
    const getAPIcheck = async () => {
      await axios
        .post(BaseAPI+"/dashboard/getlistscreen")
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
    socketRef.current.on('54314', (data) => {
      console.log('data', data)
      setSocket(data);
    });
    return () => {
      socketRef.current.disconnect();
    };
  }, [socket]);

  const openModalScreen = (id, item) => {
    setItemScreen(item);
    setChooseScreen(id + 1);
    getComponent(id);
    setOpenModal(true);
  };
  const closeModalScreen = () => {
    setItemScreen({});
    setChooseComponentValue('');
    setChooseScreen('');
    getComponent('');
    setOpenModal(false);
  };
  const handleChooseComponentChange = (event) => {
    setChooseComponentValue(event.target.value);
  };
  const swapdrop = (idscreenTo) => {
    const copyListItems = [...list];
    const temp = copyListItems[screenFrom];
    copyListItems[screenFrom] = copyListItems[idscreenTo];
    copyListItems[idscreenTo] = temp;
    swapScreen(screenFrom + 1, idscreenTo + 1);
    setScreenFrom(-1);
    setScreenTo(-1);

    setList(copyListItems);
  };
  const ChooseScreen = (index, item) => {
    if (screenFrom === -1) {
      if (item.DB_name === "" && item.DB_name === null) {
        openModalScreen(index, item);
        return;
      } else {
        setScreenFrom(index);
        setScreenTo(-1);
      }
    } else if (index === screenFrom) {
      openModalScreen(index, item);

      setScreenFrom(-1);
      setScreenTo(-1);
    } else {
      setScreenTo(index);

      swapdrop(index);
    }
  };

  return (
    <>
      <MenuBar isActive={'detail'}>
        <div className="w-full h-screen bg-gray-900 grid p-0 m-0 grid-cols-4 gap-3 ">
          {list &&
            list.map((item, index) => {
              return (
                <button
                  onClick={() => ChooseScreen(index, item)}
                  className={` h-full w-full   font-bold rounded-lg`}
                  key={"frame" + index}
                >
                  <div
                    className={`${
                      screenFrom === index
                        ? "ring-4 ring-fuchsia-950 shadow-2xl-ring-offset-4 bg-red-800 text-white"
                        : " backdrop-blur-md bg-gray-950 text-yellow-400 "
                    } 
              text-xl select-none text-ellipsis overflow-hidden rounded-lg border-dashed  border-2 border-orange-400 drag w-full h-full flex justify-center items-center p-0 m-0 text-black`}
                  >
                    {item.DB_name}
                  </div>
                </button>
              );
            })}
        </div>
      </MenuBar>
      <ModalScreens isOpen={openModal}>
        <div className="flex justify-end p-2">
          <button
            className="text-2xl rounded-full bg-gray-200 px-2.5 "
            onClick={closeModalScreen}
          >
            X
          </button>
        </div>
        <div className="flex -mt-5 justify-center items-center text-white text-3xl font-bold">
          Màn hình số {chooseScreen}
        </div>
        <div className="    px-2 h-80">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 relative h-96 pb-14 overflow-y-auto">
            {listComponent &&
              listComponent.map((item, index) => {
                if (item.Screen_id !== null) {
                  return (
                    <div className=" " key={index}>
                      <input
                        type="radio"
                        id={"component" + index}
                        value={item.DB_name}
                        className="hidden peer"
                        required
                        
                      />
                      <label
                        htmlFor={"component" + index}
                        className="flex items-center justify-center p-2 text-gray-500 
                          bg-white border-2 border-gray-200 rounded-lg cursor-pointer
                          peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 
                          hover:bg-gray-100 "
                      >
                        <div className="block">
                          <div className="w-full text-lg font-semibold">
                            {item.DB_name}
                          </div>
                        </div>
                      </label>

                      <hr className="mt-2" />
                    </div>
                  );
                } else {
                  return (
                    <div className=" " key={index}>
                      <input
                        type="radio"
                        id={"component" + index}
                        name="ChooseComponent"
                        value={item.DB_id}
                        className="hidden peer"
                        onChange={handleChooseComponentChange}
                        required
                      />
                      <label
                        htmlFor={"component" + index}
                        className="flex items-center justify-center p-2 text-white 
                              bg-gray-600 border-2 border-gray-200 rounded-lg cursor-pointer
                              peer-checked:bg-yellow-500 peer-checked:border-yellow-500 peer-checked:text-white hover:text-gray-600 
                              hover:bg-gray-100 "
                      >
                        <div className="block">
                          <div className="w-full text-lg font-semibold">
                            {item.DB_name}
                          </div>
                          {/* <div className="w-full">Good for small websites</div> */}
                        </div>
                      </label>
                    </div>
                  );
                }
              })}
          </div>
        </div>
        <div className=" absolute w-full bg-black bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center p-3 ">
          <button
            onClick={() => addCompontAtScreen("choose")}
            className="bg-blue-600 mx-2 px-4 py-2 rounded-xl text-lg font-bold text-white"
          >
            Chọn
          </button>
          {itemScreen.DB_name !== null && (
            <button
              onClick={() => addCompontAtScreen("delete")}
              className="bg-red-600 mx-2 px-4 py-2 rounded-xl text-lg font-bold text-white"
            >
              Xóa
            </button>
          )}
          <button
            onClick={closeModalScreen}
            className="bg-gray-400 mx-2 px-4 py-2 rounded-xl text-lg font-bold text-white"
          >
            Hủy
          </button>
        </div>
      </ModalScreens>
    </>
  );
};

export default DetailScreen;

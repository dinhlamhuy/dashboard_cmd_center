import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import socketIOClient from "socket.io-client";
import MenuBar from "../../component/MenuBar";
const HomeScreen = () => {
  const navigate = useNavigate();
  const [socket, setSocket] = useState(null);
  const socketRef = useRef();
  const navigateToDetail = (link) => {
    navigate(link); // Navigate to the "/detail" route
  };
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [screenFrom, setScreenFrom] = useState(-1);
  const [screenTo, setScreenTo] = useState(-1);

  const data = [
    { id_screen: '1', label: 'DDM', descriptionL: '' },
    { id_screen: '2', label: 'STOPLINE', descriptionL: '' },
    { id_screen: '3', label: 'WAREHOUSE', descriptionL: '' },
    { id_screen: '4', label: 'EIP', descriptionL: '' },
    { id_screen: '5', label: 'ADON', descriptionL: '' },
    { id_screen: '6', label: 'iPARKING', descriptionL: '' },
    { id_screen: '7', label: 'SENT KEYS', descriptionL: '' },
    { id_screen: '8', label: 'SHOES', descriptionL: '' },
    { id_screen: '9', label: 'DMS', descriptionL: '' },
    { id_screen: '10', label: 'AUTO MAIL', descriptionL: '' },
    { id_screen: '11', label: 'HR DEC', descriptionL: '' },
    { id_screen: '12', label: 'TRACKING', descriptionL: '' },
    { id_screen: '13', label: 'FLOOR', descriptionL: '' },
    { id_screen: '14', label: 'TRUE LOVE', descriptionL: '' },
    { id_screen: '15', label: 'FREE', descriptionL: '' },
    { id_screen: '16', label: '', descriptionL: '' }
  ]

  const [list, setList] = useState(data)
  useEffect(() => {

    const getAPI = async () => {
      await axios.post('http://localhost:8083/dashboard/getlistscreen', { list: list }).then(response => {
        // console.log(response.data.data)
        setList(response.data.data.data)
      }).catch(() => {

      })
    }


    // getAPI()

    socketRef.current = socketIOClient.connect('http://192.168.1.13:8083');
    socketRef.current.on("message", (data) => {
      console.log(data);
    });
    socketRef.current.on(`54314`, (data) => {
      console.log('data', data)
      setSocket(data);
    });
    return () => {
      socketRef.current.disconnect();
    };
  }, [socket])


  const swapdrop = (idscreenTo) => {
    const copyListItems = [...list];
    const temp = copyListItems[screenFrom];
    copyListItems[screenFrom] = copyListItems[idscreenTo];
    copyListItems[idscreenTo] = temp;
    setScreenFrom(-1)
    setScreenTo(-1)
    // getAPI(copyListItems);

    setList(copyListItems);
  };
  function ChooseScreen(index) {

    if (screenFrom === -1) {
      setScreenFrom(index)
      setScreenTo(-1);
    } else if (index === screenFrom) {
      setScreenFrom(-1);
      setScreenTo(-1);
    } else {
      setScreenTo(index);

      swapdrop(index);
    }

  }

  return (
    <>
      <MenuBar>


      
        <div className="w-full h-screen bg-gray-900 grid p-0 m-0 grid-cols-4 gap-3 ">
          {list.map((item, index) => {
            return (
              <button onClick={() => ChooseScreen(index)} className={` h-full w-full   font-bold rounded-lg`} key={'frame' + index}>
                <div
                  className={`${screenFrom == index ? 'ring-4 ring-fuchsia-950 shadow-2xl-ring-offset-4 bg-red-800 text-white' : ' backdrop-blur-md bg-gray-950 text-yellow-400 '} 
              text-xl select-none text-ellipsis overflow-hidden rounded-lg border-dashed  border-2 border-orange-400 drag w-full h-full flex justify-center items-center p-0 m-0 text-black`}>
                  {item.label}

                </div>
              </button>

            )
          })}

        </div>
      </MenuBar>
    </>
  );
};

export default HomeScreen;
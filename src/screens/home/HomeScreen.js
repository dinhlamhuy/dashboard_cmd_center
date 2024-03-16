import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();

  const navigateToDetail = (link) => {
    navigate(link); // Navigate to the "/detail" route
  };
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [screenFrom, setScreenFrom] = useState(-1);
  const [screenTo, setScreenTo] = useState(-1);

  const data = [
    { id_screen: '1', label: '1', descriptionL: '' },
    { id_screen: '2', label: '2', descriptionL: '' },
    { id_screen: '3', label: '3', descriptionL: '' },
    { id_screen: '4', label: '4', descriptionL: '' },
    { id_screen: '5', label: '5', descriptionL: '' },
    { id_screen: '6', label: '6', descriptionL: '' },
    { id_screen: '7', label: '7', descriptionL: '' },
    { id_screen: '8', label: '8', descriptionL: '' },
    { id_screen: '9', label: '9', descriptionL: '' },
    { id_screen: '10', label: '10', descriptionL: '' },
    { id_screen: '11', label: '11', descriptionL: '' },
    { id_screen: '12', label: '12', descriptionL: '' },
    { id_screen: '13', label: '13', descriptionL: '' },
    { id_screen: '14', label: '14', descriptionL: '' },
    { id_screen: '15', label: '15', descriptionL: '' },
    { id_screen: '16', label: '16', descriptionL: '' }



  ]
  const [list, setList] = useState(data)
  const swapdrop = (idscreenTo) => {
    const copyListItems = [...list];
    const temp = copyListItems[screenFrom];
    copyListItems[screenFrom] = copyListItems[idscreenTo];
    copyListItems[idscreenTo] = temp;
    setScreenFrom(-1)
    setScreenTo(-1)
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
    <div className="w-screen h-screen bg-blue-400 grid grid-cols-4 gap-1 ">
      {list.map((item, index) => {
        return (
          <button onClick={() => ChooseScreen(index)} className={`border h-full w-full   text-3xl font-bold `} key={'frame' + index}>
            <div
              className={`${screenFrom == index ? 'ring ring-pink-500 -ring-offset-4 bg-gray-200' : ''}   drag bg-white w-full h-full flex justify-center items-center text-black`}>
              {item.label}

            </div>
          </button>

        )
      })}

    </div>
  );
};

export default HomeScreen;
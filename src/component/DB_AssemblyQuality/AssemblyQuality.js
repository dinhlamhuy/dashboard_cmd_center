/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import { BaseAPI } from "../../utils/baseApi";
import axios from "axios";
// import bgImg from "../../assets/image/background.jpg";
const AssemblyQuality = () => {
  const [listData, setListData] = useState([
    {
      Article: "",
      ShoeName: "LIGRA 7 M",
      Line: "A_G01",
      Operator: 47,
      TimeCount: 8,
      DepID: "1072",
      Actual_Output: 1583,
      PPH: 4.21,
      RFT: 87,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "CRAZYFLIGHT",
      Line: "A_G02",
      Operator: 47,
      TimeCount: 8,
      DepID: "1073",
      Actual_Output: 1360,
      PPH: 3.62,
      RFT: 86,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "COURT 24",
      Line: "A_G03",
      Operator: 35,
      TimeCount: 8,
      DepID: "1074",
      Actual_Output: 1640,
      PPH: 5.86,
      RFT: 88,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "D.O.N.",
      Line: "A_G04",
      Operator: 48,
      TimeCount: 8,
      DepID: "1075",
      Actual_Output: 1350,
      PPH: 3.52,
      RFT: 87,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "GRAND",
      Line: "A_G05",
      Operator: 48,
      TimeCount: 8,
      DepID: "1076",
      Actual_Output: 2135,
      PPH: 5.56,
      RFT: 94,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "GRAND",
      Line: "A_G06",
      Operator: 42,
      TimeCount: 8,
      DepID: "1077",
      Actual_Output: 1390,
      PPH: 4.14,
      RFT: 86,
      Count_Add: 0,
      Count_Complete: 1,
    },
    {
      Article: "",
      ShoeName: null,
      Line: "A_G07",
      Operator: 18,
      TimeCount: 8,
      DepID: "1078",
      Actual_Output: 5605,
      PPH: 38.92,
      RFT: 100,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "COURT 24",
      Line: "A_G08",
      Operator: 31,
      TimeCount: 8,
      DepID: "1089",
      Actual_Output: 1332,
      PPH: 5.37,
      RFT: 86,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "CAMPUS 00S W",
      Line: "A_G09",
      Operator: 18,
      TimeCount: 8,
      DepID: "1177",
      Actual_Output: 5010,
      PPH: 34.79,
      RFT: 96,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "GRAND",
      Line: "A_C10",
      Operator: 19,
      TimeCount: 8,
      DepID: "1175",
      Actual_Output: 1537,
      PPH: 10.11,
      RFT: 91,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: null,
      Line: "A_G24",
      Operator: 20,
      TimeCount: 8,
      DepID: "1652",
      Actual_Output: 6006,
      PPH: 37.54,
      RFT: 100,
      Count_Add: 0,
      Count_Complete: 0,
    },

    {
      Article: "",
      ShoeName: "CAMPUS ADV",
      Line: "A_G20",
      Operator: 31,
      TimeCount: 8,
      DepID: "1499",
      Actual_Output: 3121,
      PPH: 12.58,
      RFT: 97,
      Count_Add: 0,
      Count_Complete: 0,
    },

    {
      Article: "",
      ShoeName: null,
      Line: "A_G23",
      Operator: 26,
      TimeCount: 8,
      DepID: "1502",
      Actual_Output: 4855,
      PPH: 23.34,
      RFT: 100,
      Count_Add: 0,
      Count_Complete: 0,
    },

    {
      Article: "",
      ShoeName: null,
      Line: "A_G22",
      Operator: 23,
      TimeCount: 8,
      DepID: "1501",
      Actual_Output: 4601,
      PPH: 25.01,
      RFT: 100,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: null,
      Line: "A_G21",
      Operator: 20,
      TimeCount: 8,
      DepID: "1500",
      Actual_Output: 4343,
      PPH: 27.14,
      RFT: 100,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "LIGRA 7 M",
      Line: "A1_G01",
      Operator: 47,
      TimeCount: 8,
      DepID: "1072",
      Actual_Output: 1583,
      PPH: 4.21,
      RFT: 87,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "CRAZYFLIGHT",
      Line: "A1_G02",
      Operator: 47,
      TimeCount: 8,
      DepID: "1073",
      Actual_Output: 1360,
      PPH: 3.62,
      RFT: 86,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "COURT B 24",
      Line: "A1_G03",
      Operator: 35,
      TimeCount: 8,
      DepID: "1074",
      Actual_Output: 1640,
      PPH: 5.86,
      RFT: 88,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "D.O.N.",
      Line: "A1_G04",
      Operator: 48,
      TimeCount: 8,
      DepID: "1075",
      Actual_Output: 1350,
      PPH: 3.52,
      RFT: 87,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "GRAND",
      Line: "A1_G05",
      Operator: 48,
      TimeCount: 8,
      DepID: "1076",
      Actual_Output: 2135,
      PPH: 5.56,
      RFT: 94,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "GRAND",
      Line: "A1_G06",
      Operator: 42,
      TimeCount: 8,
      DepID: "1077",
      Actual_Output: 1390,
      PPH: 4.14,
      RFT: 86,
      Count_Add: 0,
      Count_Complete: 1,
    },
    {
      Article: "",
      ShoeName: null,
      Line: "A1_G07",
      Operator: 18,
      TimeCount: 8,
      DepID: "1078",
      Actual_Output: 5605,
      PPH: 38.92,
      RFT: 100,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "COURT 24",
      Line: "A1_G08",
      Operator: 31,
      TimeCount: 8,
      DepID: "1089",
      Actual_Output: 1332,
      PPH: 5.37,
      RFT: 86,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "CAMPUS 00S W",
      Line: "A1_G09",
      Operator: 18,
      TimeCount: 8,
      DepID: "1172",
      Actual_Output: 5210,
      PPH: 39.79,
      RFT: 96,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "GRAND",
      Line: "A1_C10",
      Operator: 19,
      TimeCount: 8,
      DepID: "1172",
      Actual_Output: 1537,
      PPH: 10.11,
      RFT: 91,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: null,
      Line: "A1_G24",
      Operator: 20,
      TimeCount: 8,
      DepID: "1650",
      Actual_Output: 6006,
      PPH: 37.54,
      RFT: 100,
      Count_Add: 0,
      Count_Complete: 0,
    },

    {
      Article: "",
      ShoeName: "CAMPUS ADV",
      Line: "A1_G20",
      Operator: 31,
      TimeCount: 8,
      DepID: "1495",
      Actual_Output: 3121,
      PPH: 12.58,
      RFT: 97,
      Count_Add: 0,
      Count_Complete: 0,
    },

    {
      Article: "",
      ShoeName: null,
      Line: "A1_G23",
      Operator: 26,
      TimeCount: 8,
      DepID: "1512",
      Actual_Output: 4855,
      PPH: 23.34,
      RFT: 100,
      Count_Add: 0,
      Count_Complete: 0,
    },

    {
      Article: "",
      ShoeName: null,
      Line: "A1_G22",
      Operator: 23,
      TimeCount: 8,
      DepID: "1531",
      Actual_Output: 4601,
      PPH: 25.01,
      RFT: 100,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: null,
      Line: "A1_G21",
      Operator: 20,
      TimeCount: 8,
      DepID: "1510",
      Actual_Output: 4342,
      PPH: 27.14,
      RFT: 100,
      Count_Add: 0,
      Count_Complete: 0,
    },
  ]);
  const [totalMP, setTotalMP] = useState(0);
  const [totalActualOutput, setTotalActualOutput] = useState(0);
  const [totalPPH, setTotalPPH] = useState(0);
  const [totalRFT, setTotalRFT] = useState(0);

  useEffect(() => {
    // const data = listData.sort((a, b) => {
    //         // Use localeCompare for string comparison to ensure correct sorting order
    //         return a.Line.localeCompare(b.Line);
    //       });
    const data = listData;
    const totalActualOutput = data.reduce((total, currentItem) => {
      return total + currentItem.Actual_Output;
    }, 0);
    const totalPPH = data.reduce((total, currentItem) => {
      return total + currentItem.PPH;
    }, 0);
    const totalRFT = data.reduce((total, currentItem) => {
      return total + currentItem.RFT;
    }, 0);
    const totalMP = data.reduce((total, currentItem) => {
      return total + currentItem.Operator;
    }, 0);
    setTotalActualOutput(totalActualOutput);
    setTotalMP(totalMP);
    setTotalPPH(totalPPH / data.length || 0);
    setTotalRFT(totalRFT / data.length || 0);
    //   setListData(data);
  }, [listData]);

  useEffect(() => {
    const rotateList = () => {
      setListData((prevList) => {
        const newList = [...prevList];
        const first15 = newList.splice(0, 1); // Extracting the first 15 objects
        newList.push(...first15); // Appending the extracted objects to the end
        return newList;
      });
    };

    const interval = setInterval(() => {
      rotateList();
    }, 2000); // 15 seconds in milliseconds

    return () => clearInterval(interval); // Cleanup function to clear interval when component unmounts
  }, []);

  return (
    <div className=" overflow-hidden  px-2 pt-3">
      <div className="text-white text-4xl text-center font-bold pb-5">
        Assembly Quality
      </div>
      <div className="grid grid-cols-2">
        <div>
          <table className="table w-full  pl-3 pr-6 text-white border-separate border-spacing-y-1 ">
            <thead>
              <tr className="backdrop-brightness-125 bg-blue-950/40  ">
                <th className="text-blue-400 w-32 text-lg text-center">Lean</th>
                <th className="text-blue-400 w-12 text-lg text-center">MP</th>
                <th className="text-blue-400 w-24 text-lg text-center">
                  Actual Output
                </th>
                <th className="text-blue-400 w-18 text-lg text-center">PPH</th>
                <th className="text-blue-400 w-24 text-lg text-center">RFT</th>
                <th className="text-blue-400 w-32 text-lg text-center">
                  Shoe Name
                </th>
                <th className="text-blue-400 w-64 text-lg text-center">
                  Stop Line
                </th>
              </tr>
            </thead>
            <tbody>
              {listData &&
                listData.map((item, index) => {
                  return (
                    <tr
                      key={`list` + index}
                      className="backdrop-brightness-125 bg-blue-950/60 "
                    >
                      <td className="text-base text-center text-blue-300">
                        {item.Line}
                      </td>
                      <td className="text-base text-center text-yellow-400">
                        {item.Operator}
                      </td>
                      <td className="text-base text-center text-yellow-400">
                        {item.Actual_Output}
                      </td>
                      <td className="text-base text-center text-yellow-400">
                        {item.PPH}
                      </td>
                      <td className="text-base text-center text-yellow-400">
                        {item.RFT}%
                      </td>
                      <td className="text-base text-yellow-400">
                        {item.ShoeName}
                      </td>
                      <td className="text-base text-center"></td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        <div className=" mt-1 text-white h-96 px-3 mx-5">
          <table className="table w-full border-separate border-spacing-y-1">
            <thead>
              <tr className="backdrop-brightness-125 bg-blue-950/40  ">
                <th className="text-center w-24">Total</th>
                <th className="text-center w-12">MP</th>
                <th className="text-center w-32">Actual Output</th>
                <th className="text-center w-12">PPH</th>
                <th className="text-center w-24">RFT</th>
              </tr>
            </thead>
            <tbody>
              <tr className="backdrop-brightness-125 bg-blue-950/60 ">
                <td className="text-center text-yellow-400"></td>
                <td className="text-center text-yellow-400">{totalMP}</td>
                <td className="text-center text-yellow-400">
                  {totalActualOutput}
                </td>
                <td className="text-center text-yellow-400">
                  {parseFloat(totalPPH).toFixed(2)}
                </td>
                <td className="text-center text-yellow-400">
                  {parseFloat(totalRFT).toFixed(2)}%
                </td>
              </tr>
              <tr className="backdrop-brightness-125 bg-blue-950/60  h-96 ">
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AssemblyQuality;

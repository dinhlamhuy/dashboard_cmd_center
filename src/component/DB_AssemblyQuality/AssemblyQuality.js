/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import { BaseAPI } from "../../utils/baseApi";
import axios from "axios";
import { useTranslation } from "react-i18next";
// import bgImg from "../../assets/image/background.jpg";
import { FaStar } from "react-icons/fa6";
const AssemblyQuality = () => {
  const [listData, setListData] = useState([]);
  const [totalMP, setTotalMP] = useState(0);
  const [totalActualOutput, setTotalActualOutput] = useState(0);
  const [totalPPH, setTotalPPH] = useState(0);
  const [totalRFT, setTotalRFT] = useState(0);
  const [length, setLength] = useState(0);
  const [count, setCount] = useState(0);
  const { t } = useTranslation();
  const getAPIcheck = async () => {
    await axios
      .get(BaseAPI + "/Get_Data_Assembly_Output")
      .then((response) => {
        setLength(response.data.assembly_output.length);
        setListData(response.data.assembly_output);
      })
      .catch(() => {});
  };

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
  }, [listData]);

  // useEffect(() => {
  //   const rotateList = () => {
  //     setListData((prevList) => {
  //       const newList = [...prevList];
  //       const first15 = newList.splice(0, 1); // Extracting the first 15 objects
  //       newList.push(...first15); // Appending the extracted objects to the end
  //       return newList;
  //     });
  //   };

  //   const interval = setInterval(() => {
  //     rotateList();
  //   }, 1500); // 15 seconds in milliseconds

  //   return () => clearInterval(interval); // Cleanup function to clear interval when component unmounts
  // }, []);

  useEffect(() => {
    getAPIcheck();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (length < 20) {
        getAPIcheck();
      }
    }, 4 * 60 * 1000); // 4 phút trong milliseconds

    return () => clearInterval(intervalId); // Cleanup function to clear interval when component unmounts
  }, [length]); // Dependency là length

  useEffect(() => {
    const rotateList = () => {
      setCount(count + 1);
      setListData((prevList) => {
        const newList = [...prevList];
        const first15 = newList.splice(0, 1); // Extracting the first 15 objects
        newList.push(...first15); // Appending the extracted objects to the end
        return newList;
      });
    };

    const intervalId = setInterval(() => {
      rotateList();
    }, 1500); // 15 seconds in milliseconds

    // Kiểm tra nếu count bằng length thì gọi lại API
    if (count === length - 5) {
      getAPIcheck();
      setCount(0); // Reset count
    }

    return () => clearInterval(intervalId); // Cleanup function to clear interval when component unmounts
  }, [listData, count, length]); // Dependency là listHourlyOutput, count và length

  return (
    <div className="  w-full h-full relative  overflow-hidden px-2 ">
      <div className="w-full h-full  ">
        <div className="text-white w-full text-[48px] text-center font-bold py-5">
          {t("assembly_quality.title")}
        </div>
        <div className="grid grid-cols-5 w-full h-full relative">
          <div className="w-full h-full relative  col-span-3">
            <table className="table w-full h-[40%] relative pl-2  text-white border-separate border-spacing-y-1 ">
              <thead>
                <tr className="backdrop-brightness-125 bg-blue-950/40 text-2xl ">
                  <th className="text-blue-400 w-32 text-center">
                    {t("assembly_quality.Lean")}
                  </th>
                  <th className="text-blue-400 w-12 text-center">
                    {t("assembly_quality.MP")}
                  </th>
                  <th className="text-blue-400 w-12 text-center">
                    {t("assembly_quality.Actual")}
                    <br />
                    {t("assembly_quality.Output")}
                  </th>
                  <th className="text-blue-400 w-12 text-center">
                    {t("assembly_quality.PPH")}
                  </th>
                  <th className="text-blue-400 w-12 text-center">
                    {t("assembly_quality.RFT")}
                  </th>
                  <th className="text-blue-400 w-48 text-center">
                    {t("assembly_quality.Shoe_Name")}
                  </th>
                  <th className="text-blue-400 w-72 text-center">
                    {t("assembly_quality.Stop_Line")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {listData &&
                  listData.map((item, index) => {
                    return (
                      <tr
                        key={`list` + index}
                        className="backdrop-brightness-125 bg-blue-950/60 text-2xl"
                      >
                        <td className=" text-center text-blue-300">
                          {item.Line}
                        </td>
                        <td className=" text-center text-yellow-400">
                          {item.Operator}
                        </td>
                        <td className=" text-center text-yellow-400">
                          {item.Actual_Output}
                        </td>
                        <td className=" text-center text-yellow-400">
                          {item.PPH}
                        </td>
                        <td className={`text-center ${item.RFT >= 80 ? 'text-green-500': 'text-orange-500'} `} >
                          {item.RFT}%
                        </td>
                        <td className=" text-yellow-400">{item.ShoeName}</td>
                        <td className="text-left  text-yellow-400">
                          &ensp;
                          {Array.from(
                            {
                              length:
                                item.Count_Complete <= 12
                                  ? item.Count_Complete
                                  : 12,
                            },
                            (_, index) => (
                              <span
                                key={index}
                                className="text-green-300 text-2xl inline-block"
                              >
                                <FaStar />
                              </span>
                            )
                          )}
                          {item.Count_Add === 1 ? (
                            <span
                              key={index}
                              className="text-red-300 text-2xl inline-block"
                            >
                              <FaStar />
                            </span>
                          ) : (
                            ""
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>

          <div className="  text-white h-96 pr-1 pl-3 mx-1 col-span-2">
            <table className="table w-full border-separate border-spacing-y-1">
              <thead>
                <tr className="backdrop-brightness-125 bg-blue-950/40 text-blue-400  text-2xl">
                  <th className="text-center  w-24">
                    {t("assembly_quality.Total")}
                  </th>
                  <th className="text-center w-12">
                    {t("assembly_quality.MP")}
                  </th>
                  <th className="text-center w-32">
                    {t("assembly_quality.Actual")}
                    <br />
                    {t("assembly_quality.Output")}
                  </th>
                  <th className="text-center w-12">
                    {t("assembly_quality.PPH")}
                  </th>
                  <th className="text-center w-24">
                    {t("assembly_quality.RFT")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="backdrop-brightness-125 bg-blue-950/60 text-3xl">
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
                <tr className="backdrop-brightness-125 bg-blue-950/60  h-[10000px]  ">
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
    </div>
  );
};
export default AssemblyQuality;

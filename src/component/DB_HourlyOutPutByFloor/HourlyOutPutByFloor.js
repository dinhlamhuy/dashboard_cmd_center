/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import { BaseAPI } from "../../utils/baseApi";
import axios from "axios";
import { Data } from "./data";
import { currentDate } from "../../utils/time";
import { useTranslation } from "react-i18next";

function HourlyOutPutByFloor() {
  const { t } = useTranslation();
  const [listHourlyOutput, setListHourlyOutput] = useState(Data);
  const [length, setLength] = useState(0);
  const [count, setCount] = useState(0);
  const getAPIcheck = async () => {
    try {
      const response = await axios.get(BaseAPI + "/Get_Data_Hourly_Output_By_Floor");
      const listHourlyOutput = [
        ...response.data.Hourly_Output_By_Floor1,
        ...response.data.Hourly_Output_By_Floor2,
      ];
      // setLength(listHourlyOutput.length);
      // setListHourlyOutput(listHourlyOutput);
    } catch (error) {
      console.error("Error fetching API:", error);
    }
  };
  // useEffect(()=>{ getAPIcheck();},[])
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (length < 30) {
  //       getAPIcheck();
  //     }
  //   }, 4 * 60 * 1000); // 4 phút trong milliseconds
  
  //   return () => clearInterval(intervalId); // Cleanup function to clear interval when component unmounts
  // }, [length]); // Dependency là length
  
  useEffect(() => {
    const rotateList = () => {
      if (listHourlyOutput.length >= 30) {
        setCount(count + 1);
        setListHourlyOutput((prevList) => {
          const newList = [...prevList];
          const first15 = newList.splice(0, 1); // Extracting the first 15 objects
          newList.push(...first15); // Appending the extracted objects to the end
          return newList;
        });
      }
    };
  
    const intervalId = setInterval(() => {
      rotateList();
    }, 1500); // 15 seconds in milliseconds
  
    // Kiểm tra nếu count bằng length thì gọi lại API
    if (count === (length-20)) {
      // getAPIcheck();
      setCount(0); // Reset count
    }
  
    return () => clearInterval(intervalId); // Cleanup function to clear interval when component unmounts
  }, [listHourlyOutput, count, length]); // Dependency là listHourlyOutput, count và length
  
  return (
    <>
      <div className=" relative  w-full h-full overflow-hidden ">
        <p className="text-center text-white text-[48px] font-bold pt-6 tracking-[.09em]">
          {t("hourlyoutputbyfloor.title")} ( {currentDate} ){" "}
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-1 h-full w-full mt-7">
          <div className="flex justify-center pr-2 pl-2">
            <table className="table table-fixed flex justify-start border w-full">
              <thead>
                <tr className="text-2xl">
                  <th className=" bg-blue-800/20 text-blue-300 w-12 ">
                    {t("hourlyoutputbyfloor.Line")}
                  </th>
                  <th className=" bg-blue-800/20 text-blue-300 w-12 ">
                    {t("hourlyoutputbyfloor.Total_Member")}
                  </th>
                  <th className=" bg-blue-800/20 text-blue-300 w-12 ">
                    {t("hourlyoutputbyfloor.In_Direct")}
                  </th>
                  <th className=" bg-blue-800/20 text-blue-300 w-12 ">
                    {t("hourlyoutputbyfloor.Today_Absent")}
                  </th>
                  <th className=" bg-blue-800/20 text-blue-300 w-12 ">
                    {t("hourlyoutputbyfloor.Today")}
                    <br />
                    {t("hourlyoutputbyfloor.Member")}
                  </th>
                  <th className=" bg-blue-800/20 text-blue-300 w-12 ">
                    {t("hourlyoutputbyfloor.Capacity")}
                  </th>
                  <th className=" bg-blue-800/20 text-blue-300 w-12 ">
                    {t("hourlyoutputbyfloor.Target")}
                    <br />
                    {t("hourlyoutputbyfloor.output")}
                  </th>
                  <th className=" bg-blue-800/20 text-blue-300 w-12 ">
                    07:30-
                    <br />
                    08:30
                  </th>
                  <th className=" bg-blue-800/20 text-blue-300 w-12 ">
                    08:30-
                    <br />
                    09:30
                  </th>
                  <th className=" bg-blue-800/20 text-blue-300 w-12 ">
                    09:30-
                    <br />
                    10:30
                  </th>
                  <th className=" bg-blue-800/20 text-blue-300 w-12 ">
                    10:30-
                    <br />
                    11:30
                  </th>
                  <th className=" bg-blue-800/20 text-blue-300 w-12 ">
                    11:30-
                    <br />
                    12:30
                  </th>
                  <th className=" bg-blue-800/20 text-blue-300 w-12 ">
                    12:30-
                    <br />
                    13:30
                  </th>
                  <th className=" bg-blue-800/20 text-blue-300 w-12 ">
                    13:30-
                    <br />
                    14:30
                  </th>
                  <th className=" bg-blue-800/20 text-blue-300 w-12 ">
                    14:30-
                    <br />
                    15:30
                  </th>
                  <th className=" bg-blue-800/20 text-blue-300 w-12 ">
                    15:30-
                    <br />
                    16:30
                  </th>
                </tr>
              </thead>
              <tbody>
                {listHourlyOutput &&
                  listHourlyOutput
                    // .slice(0, 40)
                    .map((item, index) => {
                      const colortr =
                        item.Line === "Total" ? "bg-gray-800" : "";
                      return (
                        <tr key={"sl" + index} className={`text-2xl ${colortr} `}>
                          <td
                            className={`  py-0.5  ${
                              item.Line === "Total"
                                ? " text-teal-200 "
                                : " text-yellow-400 "
                            } font-bold `}
                          >
                            {item.Line}
                          </td>
                          <td className="  py-0.5  text-yellow-400 font-bold text-center ">
                            {item.Total_Member}
                          </td>
                          <td className="  py-0.5  text-blue-200 font-bold text-center">
                            {item.Today_Absent}
                          </td>
                          <td className="  py-0.5  text-white font-bold text-center">
                            {item.InDirect}
                          </td>
                          <td className="  py-0.5  text-yellow-300 font-bold text-center">
                            {item.Today_member}
                          </td>
                          <td className="  py-0.5  text-blue-300 font-bold text-center">
                            {item.CAPACITY}
                          </td>
                          <td className="  py-0.5  text-green-300 font-bold text-center">
                            {item.TARGET}
                          </td>
                          <td className={`  py-0.5   font-bold text-center  ${ Number(item.TARGET) > Number(item.Hour_8 )? 'text-orange-500':'text-green-500'}`}>
                            {item.Hour_8 != "0" ? item.Hour_8 : ""}
                          </td>
                          <td className={`  py-0.5   font-bold text-center  ${ Number(item.TARGET) > Number(item.Hour_9 )? 'text-orange-500':'text-green-500'}`}>
                            {item.Hour_9 != "0" ? item.Hour_9 : ""}
                          </td>
                          <td className={`  py-0.5   font-bold text-center  ${ Number(item.TARGET) > Number(item.Hour_10) ? 'text-orange-500':'text-green-500'}`}>
                            {item.Hour_10 != "0" ? item.Hour_10 : ""}
                          </td>
                          <td className={`  py-0.5   font-bold text-center  ${ Number(item.TARGET) > Number(item.Hour_11) ? 'text-orange-500':'text-green-500'}`}>
                            {item.Hour_11 != "0" ? item.Hour_11 : ""}
                          </td>
                          <td className={`  py-0.5   font-bold text-center  ${ Number(item.TARGET) > Number(item.Hour_12) ? 'text-orange-500':'text-green-500'}`}>
                            {item.Hour_12 != "0" ? item.Hour_12 : ""}
                          </td>
                          <td className={`  py-0.5   font-bold text-center  ${ Number(item.TARGET) > Number(item.Hour_13) ? 'text-orange-500':'text-green-500'}`}>
                            {item.Hour_13 != "0" ? item.Hour_13 : ""}
                          </td>
                          <td className={`  py-0.5   font-bold text-center  ${ Number(item.TARGET) > Number(item.Hour_14) ? 'text-orange-500':'text-green-500'}`}>
                            {item.Hour_14 != "0" ? item.Hour_14 : ""}
                          </td>
                          <td className={`  py-0.5  font-bold text-center  ${ Number(item.TARGET) > Number(item.Hour_15) ? 'text-orange-500':'text-green-500'}`}>
                            {item.Hour_15 != "0" ? item.Hour_15 : ""}
                          </td>
                          <td className={`  py-0.5  font-bold text-center  ${ Number(item.TARGET) > Number(item.Hour_16) ? 'text-orange-500':'text-green-500'}`}>
                            {item.Hour_16 != "0" ? item.Hour_16 : ""}
                          </td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
          </div>

          {/* <div className="flex justify-center  pl-2 pr-3">
            <table className="table table-fixed flex justify-start border w-full">
              <thead>
                <tr>
                <th className="text-sm text-blue-300 w-12 ">{t('hourlyoutputbyfloor.Line')}</th>
                  <th className="text-sm text-blue-300 w-12 ">{t('hourlyoutputbyfloor.Total_Member')}</th>
                  <th className="text-sm text-blue-300 w-12 ">{t('hourlyoutputbyfloor.In_Direct')}</th>
                  <th className="text-sm text-blue-300 w-12 ">{t('hourlyoutputbyfloor.Today_Absent')}</th>
                  <th className="text-sm text-blue-300 w-12 ">{t('hourlyoutputbyfloor.Today')}<br />{t('hourlyoutputbyfloor.Member')}</th>
                  <th className="text-sm text-blue-300 w-12 ">{t('hourlyoutputbyfloor.Capacity')}</th>
                  <th className="text-sm text-blue-300 w-12 ">{t('hourlyoutputbyfloor.Target')}<br />{t('hourlyoutputbyfloor.output')}</th>
                  <th className="text-sm text-blue-300 w-12 ">07:30-08:30</th>
                  <th className="text-sm text-blue-300 w-12 ">08:30-09:30</th>
                  <th className="text-sm text-blue-300 w-12 ">09:30-10:30</th>
                  <th className="text-sm text-blue-300 w-12 ">10:30-11:30</th>
                  <th className="text-sm text-blue-300 w-12 ">11:30-12:30</th>
                  <th className="text-sm text-blue-300 w-12 ">12:30-13:30</th>
                  <th className="text-sm text-blue-300 w-12 ">13:30-14:30</th>
                  <th className="text-sm text-blue-300 w-12 ">14:30-15:30</th>
                  <th className="text-sm text-blue-300 w-12 ">15:30-16:30</th>
                </tr>
              </thead>
              <tbody>
                {listHourlyOutput &&
                  listHourlyOutput
                  .slice(40, 44+41)
                    .map((item, index) => {
                      const colortr =
                        item.Line === "Total" ? "bg-gray-800" : "";
                      return (
                        <tr key={"sl" + index} className={`${colortr}`}>
                          <td className={` text-sm ${ item.Line === "Total" ? ' text-teal-200 ':' text-yellow-400 '} font-bold `}>
                          {item.Line}
                          </td>
                          <td className=" text-sm text-yellow-400 font-bold text-center ">
                            {item.Total_Member}
                          </td>
                          <td className=" text-sm text-blue-200 font-bold text-center">
                            {item.Today_Absent}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.InDirect}
                          </td>
                          <td className=" text-sm text-yellow-300 font-bold text-center">
                            {item.Today_member}
                          </td>
                          <td className=" text-sm text-blue-300 font-bold text-center">
                            {item.CAPACITY}
                          </td>
                          <td className=" text-sm text-green-400 font-bold text-center">
                            {item.TARGET}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_8 != "0" ? item.Hour_8 : ""}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_9 != "0" ? item.Hour_9 : ""}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_10 != "0" ? item.Hour_10 : ""}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_11 != "0" ? item.Hour_11 : ""}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_12 != "0" ? item.Hour_12 : ""}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_13 != "0" ? item.Hour_13 : ""}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_14 != "0" ? item.Hour_14 : ""}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_15 != "0" ? item.Hour_15 : ""}
                          </td>
                          <td className=" text-sm text-white font-bold text-center">
                            {item.Hour_16 != "0" ? item.Hour_16 : ""}
                          </td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
          </div> */}
        </div>
      </div>
    </>
  );
}
export default HourlyOutPutByFloor;

/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import { BaseAPI } from "../../utils/baseApi";
import axios from "axios";
import { Data } from "./data";
import { currentDate } from "../../utils/time";

function HourlyOutPutByFloor() {

  const [listHourlyOutput, setListHourlyOutput] = useState(Data);
  const getAPIcheck = async () => {
    await axios
      .get(BaseAPI + "/bcsl/sanluongline")
      .then((response) => {
        // console.table(response.data.data);
        setListHourlyOutput(response.data.data);
      })
      .catch(() => {});
  };
  useEffect(() => {
    getAPIcheck();
    

  }, []);
  // useEffect(() => {
  //   const rotateList = () => {
  //       setListHourlyOutput(prevList => {
  //           const newList = [...prevList];
  //           const first15 = newList.splice(0, 15); // Extracting the first 15 objects
  //           newList.push(...first15); // Appending the extracted objects to the end
  //           return newList;
  //       });
  //   };

  //   const interval = setInterval(() => {
  //       rotateList();
  //   }, 15000); // 15 seconds in milliseconds

//     return () => clearInterval(interval); // Cleanup function to clear interval when component unmounts
// }, []);
  return (
    <>
      <div className="   overflow-hidden" >
        <p className="text-center text-white text-4xl font-bold py-4">HOURLY OUT PUT - BY FLOOR {currentDate}</p>
        <div className="grid grid-cols-1 xl:grid-cols-2 h-full w-full ">
          <div className="flex justify-center ">
            <table className="table table-fixed flex justify-start border w-full">
              <thead>
                <tr>
                  <th className="text-sm text-blue-300 w-12 ">Line</th>
                  <th className="text-sm text-blue-300 w-12 ">Total Member</th>
                  <th className="text-sm text-blue-300 w-12 ">In Direct</th>
                  <th className="text-sm text-blue-300 w-12 ">Today Absent</th>
                  <th className="text-sm text-blue-300 w-12 ">Today Member</th>
                  <th className="text-sm text-blue-300 w-12 ">Capacity</th>
                  <th className="text-sm text-blue-300 w-12 ">Target</th>
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
                    .slice(0, Math.ceil(listHourlyOutput.length / 2))
                    .map((item, index) => {
                      const colortr =
                        item.line === "Total" ? "bg-gray-400" : "";
                      return (
                        <tr key={"sl" + index} className={`${colortr}`}>
                        <td className={` text-sm ${ item.line === "Total" ? ' text-teal-400 ':' text-yellow-400 '} font-bold `}>
                            {item.line}
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
          </div>

          <div className="flex justify-center px-3">
            <table className="table table-fixed flex justify-start border w-full">
              <thead>
                <tr>
                  <th className="text-sm text-blue-300 w-12 ">Line</th>
                  <th className="text-sm text-blue-300 w-12 ">Total Member</th>
                  <th className="text-sm text-blue-300 w-12 ">In Direct</th>
                  <th className="text-sm text-blue-300 w-12 ">Today Absent</th>
                  <th className="text-sm text-blue-300 w-12 ">Today Member</th>
                  <th className="text-sm text-blue-300 w-12 ">Capacity</th>
                  <th className="text-sm text-blue-300 w-12 ">Target</th>
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
                  .slice(Math.ceil(listHourlyOutput.length / 2))
                    .map((item, index) => {
                      const colortr =
                        item.line === "Total" ? "bg-gray-400" : "";
                      return (
                        <tr key={"sl" + index} className={`${colortr}`}>
                          <td className={` text-sm ${ item.line === "Total" ? ' text-teal-400 ':' text-yellow-400 '} font-bold `}>
                          {item.line}
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
          </div>
        </div>
      </div>
    </>
  );
}
export default HourlyOutPutByFloor;

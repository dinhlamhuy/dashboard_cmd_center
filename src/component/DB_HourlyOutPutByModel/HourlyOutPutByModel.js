/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import { BaseAPI } from "../../utils/baseApi";
import axios from "axios";
import { Data } from "./data";
import { currentDate } from "../../utils/time";
import { useTranslation } from "react-i18next";
function HourlyOutPutByModel() {
  const { t } = useTranslation();

  const [length, setLength] = useState(0);
  const [count, setCount] = useState(0);
  const [listHourlyOutput, setListHourlyOutput] = useState(Data);
  // console.table(Data)
  const getAPIcheck = async () => {
    await axios
      .get(BaseAPI + "/Get_Data_Model_Stitching_Hour")
      .then((response) => {
        // console.table(response.data.data);
        const listHourlyOutput = [
          ...response.data.Data_Model_Stitching_Hour1,
          ...response.data.Data_Model_Stitching_Hour2,
        ];
        setLength(listHourlyOutput.length);

        setListHourlyOutput(listHourlyOutput);
      })
      .catch(() => {});
  };

  useEffect(() => {
    // getAPIcheck();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (length < 30) {
        // getAPIcheck();
      }
    }, 4 * 60 * 1000); // 4 phút trong milliseconds

    return () => clearInterval(intervalId); // Cleanup function to clear interval when component unmounts
  }, [length]); // Dependency là length

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
    if (count === length - 20) {
      // getAPIcheck();
      setCount(0); // Reset count
    }

    return () => clearInterval(intervalId); // Cleanup function to clear interval when component unmounts
  }, [listHourlyOutput, count, length]); // Dependency là listHourlyOutput, count và length

  return (
    <>
      <div className=" relative  w-full h-full overflow-hidden">
        <p className="text-center text-white text-[48px] font-bold pt-6 tracking-[.09em]">
          {t("hourlyoutputbymodel.title")} ( {currentDate} )
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-1 h-full w-full mt-7">
          <div className="flex justify-center ">
            <table className="table table-fixed flex justify-start border w-full text-2xl">
              <thead>
                <tr>
                  <th className=" bg-blue-800/20  text-blue-300 w-36 text-left pl-3">
                    {t("hourlyoutputbymodel.shoeModel")}
                  </th>
                  <th className=" bg-blue-800/20 text-blue-300 w-12 text-left pl-2">
                    {t("hourlyoutputbymodel.Line")}
                  </th>
                  <th className=" bg-blue-800/20 text-blue-300 w-12 ">
                    {t("hourlyoutputbymodel.target")} <br />{" "}
                    {t("hourlyoutputbymodel.output")}
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
                    // .slice(0, 42)
                    .map((item, index) => {
                      const colortr =
                        item.Line === "Total" ? "bg-gray-400" : "";
                      return (
                        <tr
                          key={"sl" + index}
                          className={` text-2xl ${colortr}`}
                        >
                          <td className="   py-0.5 text-yellow-400 font-bold text-left pl-2 ">
                            {item.Model}
                          </td>
                          <td
                            className={`  py-0.5  ${
                              item.Line === "Total"
                                ? " text-teal-400 "
                                : " text-yellow-400 "
                            } font-bold `}
                          >
                            {item.Line}
                          </td>
                          <td className="  py-0.5  text-blue-200 font-bold text-center">
                            {item.TARGET}
                          </td>
                          <td
                            className={`  py-0.5   font-bold text-center ${
                              Number(item.TARGET) > Number(item.Hour_8)
                                ? "text-orange-500"
                                : "text-green-500"
                            }`}
                          >
                            {item.Hour_8 != "0" ? item.Hour_8 : ""}
                          </td>
                          <td
                            className={`  py-0.5   font-bold text-center ${
                              Number(item.TARGET) > Number(item.Hour_9)
                                ? "text-orange-500"
                                : "text-green-500"
                            }`}
                          >
                            {item.Hour_9 != "0" ? item.Hour_9 : ""}
                          </td>
                          <td
                            className={`  py-0.5   font-bold text-center ${
                              Number(item.TARGET) > Number(item.Hour_10)
                                ? "text-orange-500"
                                : "text-green-500"
                            }`}
                          >
                            {item.Hour_10 != "0" ? item.Hour_10 : ""}
                          </td>
                          <td
                            className={`  py-0.5   font-bold text-center ${
                              Number(item.TARGET) > Number(item.Hour_11)
                                ? "text-orange-500"
                                : "text-green-500"
                            }`}
                          >
                            {item.Hour_11 != "0" ? item.Hour_11 : ""}
                          </td>
                          <td
                            className={`  py-0.5   font-bold text-center ${
                              Number(item.TARGET) > Number(item.Hour_12)
                                ? "text-orange-500"
                                : "text-green-500"
                            }`}
                          >
                            {item.Hour_12 != "0" ? item.Hour_12 : ""}
                          </td>
                          <td
                            className={`  py-0.5   font-bold text-center ${
                              Number(item.TARGET) > Number(item.Hour_13)
                                ? "text-orange-500"
                                : "text-green-500"
                            }`}
                          >
                            {item.Hour_13 != "0" ? item.Hour_13 : ""}
                          </td>
                          <td
                            className={`  py-0.5   font-bold text-center ${
                              Number(item.TARGET) > Number(item.Hour_14)
                                ? "text-orange-500"
                                : "text-green-500"
                            }`}
                          >
                            {item.Hour_14 != "0" ? item.Hour_14 : ""}
                          </td>
                          <td
                            className={`  py-0.5   font-bold text-center ${
                              Number(item.TARGET) > Number(item.Hour_15)
                                ? "text-orange-500"
                                : "text-green-500"
                            }`}
                          >
                            {item.Hour_15 != "0" ? item.Hour_15 : ""}
                          </td>
                          <td
                            className={`  py-0.5   font-bold text-center ${
                              Number(item.TARGET) > Number(item.Hour_16)
                                ? "text-orange-500"
                                : "text-green-500"
                            }`}
                          >
                            {item.Hour_16 != "0" ? item.Hour_16 : ""}
                          </td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
          </div>

          {/* <div className="flex justify-center px-3">
            <table className="table table-fixed flex justify-start border w-full">
              <thead>
                <tr>
                <th className="text-xl py-0.5   text-blue-300 w-36 text-left pl-3">{t('hourlyoutputbymodel.shoeModel')}</th>
                  <th className="text-xl text-blue-300 w-12 text-left pl-2">{t('hourlyoutputbymodel.Line')}</th>
                  <th className="text-xl text-blue-300 w-12 ">
                    {t('hourlyoutputbymodel.target')} <br />  {t('hourlyoutputbymodel.output')}
                  </th>
                  <th className="text-xl text-blue-300 w-12 ">07:30-08:30</th>
                  <th className="text-xl text-blue-300 w-12 ">08:30-09:30</th>
                  <th className="text-xl text-blue-300 w-12 ">09:30-10:30</th>
                  <th className="text-xl text-blue-300 w-12 ">10:30-11:30</th>
                  <th className="text-xl text-blue-300 w-12 ">11:30-12:30</th>
                  <th className="text-xl text-blue-300 w-12 ">12:30-13:30</th>
                  <th className="text-xl text-blue-300 w-12 ">13:30-14:30</th>
                  <th className="text-xl text-blue-300 w-12 ">14:30-15:30</th>
                  <th className="text-xl text-blue-300 w-12 ">15:30-16:30</th>
                </tr>
              </thead>
              <tbody>
                {listHourlyOutput &&
                  listHourlyOutput.slice(42, 44 + 41).map((item, index) => {
                    const colortr = item.Line === "Total" ? "bg-gray-400" : "";
                    return (
                      <tr key={"sl" + index} className={`${colortr}`}>
                        <td className=" text-xl text-yellow-400 font-bold text-left pl-2">
                          {item.Model}
                        </td>
                        <td
                          className={` text-xl ${
                            item.Line === "Total"
                              ? " text-teal-400 "
                              : " text-yellow-400 "
                          } font-bold `}
                        >
                          {item.Line}
                        </td>
                        <td className=" text-xl text-blue-200 font-bold text-center">
                          {item.TARGET}
                        </td>
                        <td className=" text-xl text-white font-bold text-center">
                          {item.Hour_8 != "0" ? item.Hour_8 : ""}
                        </td>
                        <td className=" text-xl text-white font-bold text-center">
                          {item.Hour_9 != "0" ? item.Hour_9 : ""}
                        </td>
                        <td className=" text-xl text-white font-bold text-center">
                          {item.Hour_10 != "0" ? item.Hour_10 : ""}
                        </td>
                        <td className=" text-xl text-white font-bold text-center">
                          {item.Hour_11 != "0" ? item.Hour_11 : ""}
                        </td>
                        <td className=" text-xl text-white font-bold text-center">
                          {item.Hour_12 != "0" ? item.Hour_12 : ""}
                        </td>
                        <td className=" text-xl text-white font-bold text-center">
                          {item.Hour_13 != "0" ? item.Hour_13 : ""}
                        </td>
                        <td className=" text-xl text-white font-bold text-center">
                          {item.Hour_14 != "0" ? item.Hour_14 : ""}
                        </td>
                        <td className=" text-xl text-white font-bold text-center">
                          {item.Hour_15 != "0" ? item.Hour_15 : ""}
                        </td>
                        <td className=" text-xl text-white font-bold text-center">
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
export default HourlyOutPutByModel;

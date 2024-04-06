/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import { BaseAPI } from "../../utils/baseApi";
import axios from "axios";
import { currentDate } from "../../utils/time";
import { Data } from "./data";
const Stock_Fitting = () => {
  const [listData, setListData] = useState(Data);
  const getAPIcheck = async () => {
    await axios
      .get(BaseAPI + "/sf/get_data_stock_fitting")
      .then((response) => {
        // console.log(response.data.data);
        setListData(response.data.data);
      })
      .catch(() => {});
  };
  useEffect(() => {
    getAPIcheck();
  }, []);
  return (
    <>
      <div className="h-screen">
      <p className="text-center text-white text-5xl font-bold py-4">Stock Fitting  {currentDate}</p>
      <div className="px-3 mt-2">
        <table className="table table-fixed flex justify-start  w-full border-separate border-spacing-y-1">
          <thead>
            <tr className="backdrop-brightness-125 bg-blue-950/20">
              <th className="text-sm text-blue-300 w-8 ">Line</th>
              <th className="text-sm text-blue-300 w-12 ">Số người<br />MAN</th>
              <th className="text-sm text-blue-300 w-12 ">Article</th>
              <th className="text-sm text-blue-300 w-24  ">Dạng Giày<br />MODEL</th>
              <th className="text-sm text-blue-300 w-12 ">Mục tiêu<br />Target</th>
              <th className="text-sm text-blue-300 w-8 ">Số Giờ<br />Hours</th>
              <th className="text-sm text-blue-300 w-8 ">08:30-<br/>09:30</th>
              <th className="text-sm text-blue-300 w-8 ">09:30-<br/>10:30</th>
              <th className="text-sm text-blue-300 w-8 ">10:30-<br/>11:30</th>
              <th className="text-sm text-blue-300 w-8 ">11:30-<br/>12:30</th>
              <th className="text-sm text-blue-300 w-8 ">12:30-<br/>13:30</th>
              <th className="text-sm text-blue-300 w-8 ">13:30-<br/>14:30</th>
              <th className="text-sm text-blue-300 w-8 ">14:30-<br/>15:30</th>
              <th className="text-sm text-blue-300 w-8 ">15:30-<br/>16:30</th>
              <th className="text-sm text-blue-300 w-8 ">Tổng<br />Total</th>
              <th className="text-sm text-blue-300 w-16 ">Phần trăm (Đạt)<br />Percent</th>
              <th className="text-sm text-blue-300 w-8 ">PPH</th>
              <th className="text-sm text-blue-300 w-8 ">PFT%</th>
            </tr>
          </thead>
          <tbody>
            {listData &&
              listData
                // .slice(0, Math.ceil(listData.length / 2))
                .map((item, index) => {
                  if ((item.Model_Name !== '' && item.Article !== '') || item.Line === 'Total') {
                  return (
                    <tr key={"sl" + index} className="backdrop-brightness-125 bg-gray-900/40">
                      <td
                        className={` text-sm text-center ${
                          item.Line === "Total"
                            ? " text-teal-400 "
                            : " text-teal-400 "
                        }  `}
                      >
                        {item.Line}
                      </td>
                      <td className=" text-sm text-yellow-300 text-center ">
                        {item.Total_Member}
                      </td>
                      <td className=" text-sm text-blue-200  text-center">
                        {item.Article}
                      </td>
                      <td className=" text-sm text-yellow-400  text-left">
                        {item.Model_Name}
                      </td>
                      <td className=" text-sm text-yellow-200  text-center">
                        {item.Target}
                      </td>
                      <td className=" text-sm text-blue-200  text-center">
                        {item.Value_Hour}
                      </td>
                  
                      <td className=" text-sm text-yellow-300  text-center">
                        {item.Hour_8 != "0" ? item.Hour_8 : ""}
                      </td>
                      <td className=" text-sm text-yellow-300  text-center">
                        {item.Hour_9 != "0" ? item.Hour_9 : ""}
                      </td>
                      <td className=" text-sm text-yellow-300  text-center">
                        {item.Hour_10 != "0" ? item.Hour_10 : ""}
                      </td>
                      <td className=" text-sm text-yellow-300  text-center">
                        {item.Hour_11 != "0" ? item.Hour_11 : ""}
                      </td>
                      <td className=" text-sm text-yellow-300  text-center">
                        {item.Hour_12 != "0" ? item.Hour_12 : ""}
                      </td>
                      <td className=" text-sm text-yellow-300  text-center">
                        {item.Hour_13 != "0" ? item.Hour_13 : ""}
                      </td>
                      <td className=" text-sm text-yellow-300  text-center">
                        {item.Hour_14 != "0" ? item.Hour_14 : ""}
                      </td>
                      <td className=" text-sm text-yellow-300  text-center">
                        {item.Hour_15 != "0" ? item.Hour_15 : ""}
                      </td>
                      <td className={` text-sm text-orange-600  text-center`}>
                        {item.Total != "0" ? item.Total : ""}
                      </td>
                      <td className=" text-sm text-orange-400  text-right pr-2">
                        {item.Percent != "" ? parseFloat(item.Percent).toFixed(2)+' %' : ""}
                      </td>
                      <td className=" text-sm text-white  text-right pr-2">
                        {item.PPH != "0" ? parseFloat(item.PPH).toFixed(2) : ""}
                      </td>
                      <td className=" text-sm text-white  text-right pr-2">
                        {item.RFT != "0" ? parseFloat(item.RFT).toFixed(2) : ""}
                      </td>
                    </tr>
                  );}
                  return null;
                })}
          </tbody>
        </table>

      </div>
      </div>
    </>
  );
};


export default Stock_Fitting;


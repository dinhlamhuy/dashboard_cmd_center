import { useEffect, useState } from "react";
import { BaseAPI } from "../../utils/baseApi";
import axios from "axios";
// import {Data} from './data'
const Data_Quality = () => {
  const [listData, setListData] = useState([]);
  const getAPIcheck = async () => {
    await axios.get(BaseAPI + "/quanlity/get_data_quality").then((response) => {
      setListData(response.data.data);
    });
  };
  useEffect(() => {
    // console.log('check ban đầu')
    getAPIcheck();
  }, []);
  return (
    <div clasName="relative h-screen bg-black px-2  ">
      <div className="text-white text-6xl text-center font-bold  ">
        DATA QUANLITY 2024
      </div>
      <div className="px-24 mt-10 flex justify-center items-center">
        <table className="table table-fixed w-[90%]  border-separate border-spacing-1">
          <thead>
            <tr className="backdrop-brightness-125 bg-teal-900/40 ">
              <td className="py-3 px-2  text-lg w-48  text-blue-300 text-left ">
                Item
                <br />
                Months
              </td>
              <td className=" text-lg text-center  text-blue-300">Jan</td>
              <td className=" text-lg text-center  text-blue-300">Feb</td>
              <td className=" text-lg text-center  text-blue-300">Mar</td>
              <td className=" text-lg text-center  text-blue-300">Apr</td>
              <td className=" text-lg text-center  text-blue-300">May</td>
              <td className=" text-lg text-center  text-blue-300">Jun</td>
              <td className=" text-lg text-center  text-blue-300">Jul</td>
              <td className=" text-lg text-center  text-blue-300">Aug</td>
              <td className=" text-lg text-center  text-blue-300">Sep</td>
              <td className=" text-lg text-center  text-blue-300">Oct</td>
              <td className=" text-lg text-center  text-blue-300">Nov</td>
              <td className=" text-lg text-center  text-blue-300">Dec</td>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <th className="py-3 backdrop-brightness-125 bg-teal-900/40 px-2 font-bold text-lg text-left text-blue-300">
                RFT (%)
              </th>
              {listData &&
                listData.map((item) => {
                  return (
                    <td className="backdrop-brightness-125 bg-blue-950/40 text-lg  p-2.5 text-center text-yellow-400 ">
                      {item.RFT}
                    </td>
                  );
                })}
            </tr>
            <tr className="">
              <th className="py-3 backdrop-brightness-125 bg-teal-900/40 px-2 font-bold text-lg text-left text-blue-300">
                Repacking rate (%)
              </th>
              {listData &&
                listData.map((item) => {
                  return (
                    <td className="backdrop-brightness-125 bg-blue-950/40 text-lg  p-2.5 text-center text-yellow-400 ">
                      {item.Repacking_rate}
                    </td>
                  );
                })}
            </tr>
            <tr className="">
              <th className="py-3 backdrop-brightness-125 bg-teal-900/40 px-2 font-bold text-lg text-left text-blue-300">
                B Grade (prs)
              </th>
              {listData &&
                listData.map((item) => {
                  return (
                    <td className="backdrop-brightness-125 bg-blue-950/40 text-lg  p-2.5 text-center text-yellow-400 ">
                      {item.B_grade}
                    </td>
                  );
                })}
            </tr>
            <tr className="">
              <th className="py-3 backdrop-brightness-125 bg-teal-900/40 px-2 font-bold text-lg text-left text-blue-300">
                C Grade (prs)
              </th>
              {listData &&
                listData.map((item) => {
                  return (
                    <td className="backdrop-brightness-125 bg-blue-950/40 text-lg  p-2.5 text-center text-yellow-400 ">
                      {item.C_grade}
                    </td>
                  );
                })}
            </tr>
            <tr className="">
              <th className="py-3 backdrop-brightness-125 bg-teal-900/40 px-2 font-bold text-lg text-left text-blue-300">
                WHC (300$/1M)
              </th>
              {listData &&
                listData.map((item) => {
                  return (
                    <td className="backdrop-brightness-125 bg-blue-950/40 text-lg  p-2.5 text-center text-yellow-400 ">
                      {item.WHC}
                    </td>
                  );
                })}
            </tr>
            <tr className="">
              <th className="py-3 backdrop-brightness-125 bg-teal-900/40 px-2 font-bold text-lg text-left text-blue-300">
                DR (YTD DR/1M PV)
              </th>
              {listData &&
                listData.map((item) => {
                  return (
                    <td className="backdrop-brightness-125 bg-blue-950/40 text-lg  p-2.5 text-center text-yellow-400 ">
                      {item.DR}
                    </td>
                  );
                })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Data_Quality;

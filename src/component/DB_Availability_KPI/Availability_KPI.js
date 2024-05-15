import { useEffect, useState } from "react";
import { BaseAPI } from "../../utils/baseApi";
import axios from "axios";
import { Data } from "./data";
import { useTranslation } from "react-i18next";
const Availability_KPI = () => {
  const { t } = useTranslation();
  const [listData, setListData] = useState(Data);
  const [length, setLength] = useState(0);
  const getAPIcheck = async () => {
    await axios.get(BaseAPI + "/Get_Data_Availability_KPI").then((response) => {
      setListData(response.data.Availability_2024);
    });
  };


useEffect(() => {
      getAPIcheck();
    const intervalId = setInterval(() => {
      getAPIcheck();
    }, 15 * 60 * 1000); // 4 phút trong milliseconds

    return () => clearInterval(intervalId); // Cleanup function to clear interval when component unmounts
  }, []);
  return (
    <div className="relative h-screen px-2 pt-3 ">
      <div className="text-white text-[48px] text-center font-bold uppercase tracking-[0.09em] mt-4">
        {t("availability_KPI.title")} 2024
      </div>
      <div className="px-8  flex justify-center items-center mt-10">
        <table className="mt-5 table table-fixed w-full">
          <thead>
            <tr>
              <th className="border font-bold text-[2rem] leading-7 line border-1 bg-blue-800/20  border-black text-blue-300 ">
                {t("availability_KPI.Month")}
              </th>
              <th className="border font-bold text-[2rem] leading-7 line border-1 bg-blue-800/20  border-black text-blue-300">
                SDP <br /> {t("availability_KPI.Total_Qty")}
              </th>
              <th className="border font-bold text-[2rem] leading-7 line border-1 bg-blue-800/20  border-black text-blue-300">
                CRD <br /> {t("availability_KPI.Total_Qty")}
              </th>
              <th className="border font-bold text-[2rem] leading-7 line border-1 bg-blue-800/20  border-black text-blue-300">
                SDP <br /> {t("availability_KPI.Achieved")} %
              </th>
              <th className="border font-bold text-[2rem] leading-7 line border-1 bg-blue-800/20  border-black text-blue-300">
                MDP <br /> {t("availability_KPI.Achieved")} %
              </th>
              <th className="border font-bold text-[2rem] leading-7 line border-1 bg-blue-800/20  border-black text-blue-300">
                {t("availability_KPI.Efficiency_Target1")} <br />{" "}
                {t("availability_KPI.Efficiency_Target2")} %
              </th>
              <th className="border font-bold text-[2rem] leading-7 line border-1 bg-blue-800/20  border-black text-blue-300">
                {t("availability_KPI.Efficiency_Actual1")} <br />{" "}
                {t("availability_KPI.Efficiency_Actual2")} %
              </th>
            </tr>
          </thead>
          <tbody>
            {listData &&
              listData.map((item, index) => {
                return (
                  <tr key={index} className=" ">
                    <th className="border  font-bold text-[2.3rem] leading-10 border-1 bg-blue-400/20  border-black px-2.5 py-2.5  text-center text-blue-300 ">
                      {item.Names}
                    </th>
                    <td className="border  font-bold text-[2.3rem] leading-10 border-1 bg-blue-400/20  border-black px-2.5 py-2.5 pr-24 text-right text-yellow-400">
                      {item.SDPQtyTotal.toLocaleString("en-US")}
                    </td>
                    <td className="border  font-bold text-[2.3rem] leading-10 border-1 bg-blue-400/20  border-black px-2.5 py-2.5 pr-24 text-right text-yellow-400">
                      {item.CRDQtyTotal.toLocaleString("en-US")}
                    </td>
                    <td className="border  font-bold text-[2.3rem] leading-10 border-1 bg-blue-400/20  border-black px-2.5 py-2.5 text-center text-yellow-400">
                      {item.SDP}
                    </td>
                    <td className="border  font-bold text-[2.3rem] leading-10 border-1 bg-blue-400/20  border-black px-2.5 py-2.5 text-center text-yellow-400">
                      {item.MDP}
                    </td>
                    <td className="border  font-bold text-[2.3rem] leading-10 border-1 bg-blue-400/20  border-black px-2.5 py-2.5  text-center text-yellow-400">
                      {item.Efficiency_Target}
                    </td>
                    <td className="border  font-bold text-[2.3rem] leading-10 border-1 bg-blue-400/20  border-black px-2.5 py-2.5  text-center text-yellow-400">
                      {item.Efficiency_Actual}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Availability_KPI;

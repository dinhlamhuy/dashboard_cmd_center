import "./Trial_Schedule_Season.css";
import No_Picture from "../../assets/image/No_Picture.bmp";
import { useEffect, useState } from "react";
import { BaseAPI } from "../../utils/baseApi";
import axios from "axios";
import { Data } from "./data";
const CS3_Trial_Schedule = () => {
  const [data, setData] = useState(Data);
  const getAPIcheck = async () => {
    await axios
      .get(BaseAPI + "/tss/get_data_trial_schedule_season")
      .then((response) => {
        setData(response.data.data);
      })
      .catch(() => {});
  };
  useEffect(() => {
    getAPIcheck();
  }, []);

  return (
    <div className="w-full absolute top-0 left-0 h-full m-0 p-0   ">
      <div  className="w-full text-green-300 font-bold flex justify-center">
        <p className="text-[25px]">CS3 TRIAL SCHEDULE</p>
      </div>
      <div
       
        className="w-full text-green-300 text-base m-0 p-0 flex justify-center gap-x-5"
      >
        <span className="text-xs">
          Season Start: {data && data[0] && data[0].season_start}
        </span>{" "}
        &emsp;
        <span className="text-xs">
          Year Start: {data && data[0] && data[0].year_start}
        </span>{" "}
        &emsp;
        <span className="text-xs">
          Season End: {data && data[0] && data[0].season_end}
        </span>{" "}
        &emsp;
        <span className="text-xs">
          Year End: {data && data[0] && data[0].year_end}
        </span>{" "}
        &emsp;
      </div>

      <div className="w-full text-white justify-center h-[80%] flex">
        <table border="1" id="table" className="w-[90%] ">
          <thead>
            <tr className="title-table">
              <th className="w-6 text-xs">Num<br />数字</th>
              <th className="w-6 text-xs" style={{ background: "rgb(0, 211, 96, 0.6)" }}>Art<br />艺术</th>
              <th className="w-24 text-xs" style={{ background: "rgb(0, 211, 96, 0.6)" }}>Model<br />模型</th>
              <th className="w-8 text-xs">CWA</th>
              <th className="w-12 text-xs">Pro.Month</th>
              <th className="w-12 text-xs" style={{ background: "rgb(0, 211, 96, 0.6)" }}>LINE</th>
              <th className="w-12 text-xs">Pro.Start Date</th>
              <th className="w-12 text-xs" style={{ background: "rgb(0, 211, 96, 0.6)" }}>Stage</th>
              <th className="w-12 text-xs">Vật Tư Gia Công</th>
              <th className="w-12 text-xs">Chặt</th>
              <th className="w-12 text-xs">MCT</th>
              <th className="w-12 text-xs">MAY</th>
              <th className="w-12 text-xs">GÒ</th>
              <th className="w-12 text-xs">HỌP</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => {
                return (
                  <tr className="content-table" key={"ids" + index}>
                    <td className="text-xs text-center">{item.Num}</td>
                    <td className="text-xs">{item.Art}</td>
                    <td className="text-xs td-image"><img src={No_Picture} alt="" /><p>{item.Model}</p></td>
                    <td className="text-xs text-center">{item.CWA}</td>
                    <td className="text-xs">{item.Pro_Month}</td>
                    <td className="text-xs">{item.LINE}</td>
                    <td className="text-xs">{item.Pro_Month}</td>
                    <td className="text-xs">{item.STAGE}</td>
                    <td className="text-xs">{item.mcs}</td>
                    <td className="text-xs">{item.cutting}</td>
                    <td className="text-xs">{item.mct}</td>
                    <td className="text-xs">{item.stitching_v}</td>
                    <td className="text-xs">{item.assembly_v}</td>
                    <td className="text-xs">{item.meeting}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CS3_Trial_Schedule;

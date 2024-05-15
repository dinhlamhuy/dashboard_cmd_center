import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import No_Picture from "../../assets/image/No_Picture.bmp";
import axios from "axios";
import { useState } from "react";
import "./TrialSchedule.css";
import { useTranslation } from "react-i18next";
import { BaseAPI } from "../../utils/baseApi";

const CS3_Trial_Schedule = () => {
  const { t } = useTranslation();
  // const dataTrialSchedule = [
  //   {
  //     Num: "1",
  //     Art: "JH7927",
  //     ImageUrl: "data:image/bmp;base64," + No_Picture,
  //     Model: "SUBZONE J",
  //     CWA: "2024/03/25",
  //     Pro_Month: "5-8",
  //     LINE: "D1-6",
  //     PRO_START_DATE: "05/28",
  //     STAGE: "CS3 FW24",
  //     Material_GC: "OK",
  //     CHAT: "04/08",
  //     MCT: "04/11",
  //     MAY: "04/13",
  //     GO: "04/15",
  //     HOP: "",
  //     SHOW: null,
  //     Season_Start: "FW",
  //     Season_End: "SS",
  //     Year_Start: "2023",
  //     Year_End: "2024",
  //   },
  //   {
  //     Num: "2",
  //     Art: "JH7927",
  //     ImageUrl: "data:image/bmp;base64," + No_Picture,
  //     Model: "SUBZONE J",
  //     CWA: "2024/03/25",
  //     Pro_Month: "5-8",
  //     LINE: "D1-6",
  //     PRO_START_DATE: "05/28",
  //     STAGE: "CS3 FW24",
  //     Material_GC: "OK",
  //     CHAT: "04/08",
  //     MCT: "04/11",
  //     MAY: "04/13",
  //     GO: "04/15",
  //     HOP: "",
  //     SHOW: null,
  //     Season_Start: "FW",
  //     Season_End: "SS",
  //     Year_Start: "2023",
  //     Year_End: "2024",
  //   },
  //   {
  //     Num: "3",
  //     Art: "JH7927",
  //     ImageUrl: "data:image/bmp;base64," + No_Picture,
  //     Model: "SUBZONE J",
  //     CWA: "2024/03/25",
  //     Pro_Month: "5-8",
  //     LINE: "D1-6",
  //     PRO_START_DATE: "05/28",
  //     STAGE: "CS3 FW24",
  //     Material_GC: "OK",
  //     CHAT: "04/08",
  //     MCT: "04/11",
  //     MAY: "04/13",
  //     GO: "04/15",
  //     HOP: "",
  //     SHOW: null,
  //     Season_Start: "FW",
  //     Season_End: "SS",
  //     Year_Start: "2023",
  //     Year_End: "2024",
  //   },
  //   {
  //     Num: "4",
  //     Art: "JH7927",
  //     ImageUrl: "data:image/bmp;base64," + No_Picture,
  //     Model: "SUBZONE J",
  //     CWA: "2024/03/25",
  //     Pro_Month: "5-8",
  //     LINE: "D1-6",
  //     PRO_START_DATE: "05/28",
  //     STAGE: "CS3 FW24",
  //     Material_GC: "OK",
  //     CHAT: "04/08",
  //     MCT: "04/11",
  //     MAY: "04/13",
  //     GO: "04/15",
  //     HOP: "",
  //     SHOW: null,
  //     Season_Start: "FW",
  //     Season_End: "SS",
  //     Year_Start: "2023",
  //     Year_End: "2024",
  //   },
  //   {
  //     Num: "5",
  //     Art: "JH7927",
  //     ImageUrl: "data:image/bmp;base64," + No_Picture,
  //     Model: "SUBZONE J",
  //     CWA: "2024/03/25",
  //     Pro_Month: "5-8",
  //     LINE: "D1-6",
  //     PRO_START_DATE: "05/28",
  //     STAGE: "CS3 FW24",
  //     Material_GC: "OK",
  //     CHAT: "04/08",
  //     MCT: "04/11",
  //     MAY: "04/13",
  //     GO: "04/15",
  //     HOP: "",
  //     SHOW: null,
  //     Season_Start: "FW",
  //     Season_End: "SS",
  //     Year_Start: "2023",
  //     Year_End: "2024",
  //   },
  //   {
  //     Num: "6",
  //     Art: "JH7927",
  //     ImageUrl: "data:image/bmp;base64," + No_Picture,
  //     Model: "SUBZONE J",
  //     CWA: "2024/03/25",
  //     Pro_Month: "5-8",
  //     LINE: "D1-6",
  //     PRO_START_DATE: "05/28",
  //     STAGE: "CS3 FW24",
  //     Material_GC: "OK",
  //     CHAT: "04/08",
  //     MCT: "04/11",
  //     MAY: "04/13",
  //     GO: "04/15",
  //     HOP: "",
  //     SHOW: null,
  //     Season_Start: "FW",
  //     Season_End: "SS",
  //     Year_Start: "2023",
  //     Year_End: "2024",
  //   },
  // ];
  const [DataTrialSchedule, setDataTrialSchedule] = useState();

  const getAPI = () => {
    try {
      axios
        .get(BaseAPI + "/Get_Data_Trial_Schedule_Season")
        .then(function (response) {
          // handle success
          setDataTrialSchedule(response.data.Trial_Schedule_Season);
          // console.log(response);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAPI();
    const intervalId = setInterval(() => {
      getAPI();
    }, 5 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div id="container-trial-schedule" className="">
      <div id="title-trial-schedule" className="m-0">
        <p className="text-[48px] py-5 tracking-[.09em] font-bold">
          {t("CS3_TRIAL_SCHEDULE.title")}
        </p>
        <ul id="content-under-title-trial-schedule">
          <li className="text-[32px] px-5 tracking-[.095em] ">
            {t("CS3_TRIAL_SCHEDULE.Season_Start")}:
            {DataTrialSchedule ? DataTrialSchedule[0]?.Season_Start : ""}
          </li>
          <li className="text-[32px] px-5 tracking-[.095em] ">
            {t("CS3_TRIAL_SCHEDULE.Year_Start")}:
            {DataTrialSchedule ? DataTrialSchedule[0]?.Year_Start : ""}
          </li>
          <li className="text-[32px] px-5 tracking-[.095em] ">
            {t("CS3_TRIAL_SCHEDULE.Season_End")}:
            {DataTrialSchedule ? DataTrialSchedule[0]?.Season_End : ""}
          </li>
          <li className="text-[32px] px-5 tracking-[.095em] ">
            {t("CS3_TRIAL_SCHEDULE.Year_End")}:
            {DataTrialSchedule ? DataTrialSchedule[0]?.Year_End : ""}
          </li>
        </ul>
      </div>
      <div id="body-content-trial-schedule">
        <div id="table-trial-schedule">
          <table className="Sontable ">
            <thead>
              <tr className="title-table-trial-schedule text-[1.5rem]">
                <th className=" blue-text-trial-schedule w-12   border-x border-x-3 border-black">
                  Num
                  <br />
                  序號
                </th>
                <th className=" green-text-trial-schedule w-20 border-x border-x-3 border-black">
                  Art
                  <br />
                  艺术
                </th>
                <th className=" green-text-trial-schedule w-48 border-x border-x-3 border-black">
                  Model
                  <br />
                  鞋型
                </th>
                <th className=" blue-text-trial-schedule w-24 border-x border-x-3 border-black">
                  CWA
                </th>
                <th className=" blue-text-trial-schedule w-24 border-x border-x-3 border-black">
                  Pro.Month
                  <br />
                  生產月份
                </th>
                <th className=" green-text-trial-schedule w-16 border-x border-x-3 border-black">
                  LINE
                  <br />
                  線別
                </th>
                <th className=" blue-text-trial-schedule w-44 border-x border-x-3 border-black">
                  Pro.Start Date
                  <br />
                  量產起始日
                </th>
                <th className=" green-text-trial-schedule w-32 border-x border-x-3 border-black">
                  Stage <br />
                  階段
                </th>
                <th className=" blue-text-trial-schedule w-28 border-x border-x-3 border-black">
                  Vật Tư Gia Công
                  <br />
                  加工來料
                </th>
                <th className=" blue-text-trial-schedule w-24 border-x border-x-3 border-black">
                  Chặt
                  <br />
                  裁斷
                </th>
                <th className=" blue-text-trial-schedule w-24 border-x border-x-3 border-black">
                  MCT
                  <br />
                  電腦
                  <br />
                  針車
                </th>
                <th className=" blue-text-trial-schedule w-24 border-x border-x-3 border-black">
                  MAY
                  <br />
                  針車
                </th>
                <th className=" blue-text-trial-schedule w-24 border-x border-x-3 border-black">
                  GÒ
                  <br />
                  成型
                </th>
                <th className=" blue-text-trial-schedule w-24 border-x border-x-3 border-black">
                  HỌP
                  <br />
                  會議
                </th>
              </tr>
            </thead>
            <tbody>
              {DataTrialSchedule &&
                DataTrialSchedule.map((item, index) => {
                  return (
                    <tr 
                      className="content-table-trial-schedule font-bold text-[1.7rem]" 
                      key={index}
                    >
                      <td className="border-y border-y-4 border-black td-text-trial-schedule">
                        {index + 1}
                      </td>
                      <td className="border-y border-y-4 border-black text-green-400">
                        {item.Art}
                      </td>
                      <td className="border-y border-y-4 border-black td-image-trial-schedule text-center">
                        <div className="flex  justify-center">
                          <img
                            className="flip-image"
                            src={"data:image/bmp;base64," + item.ImageUrl}
                            alt=""
                          />
                        </div>

                        <p className="text-[10px]">{item.Model}</p>
                      </td>
                      <td className="border-y border-y-4 border-black td-text-trial-schedule">
                        {item.CWA}
                      </td>
                      <td className="border-y border-y-4 border-black td-text-trial-schedule">
                        {item.Pro_Month}
                      </td>
                      <td className="border-y border-y-4 border-black text-green-400">
                        {item.LINE}
                      </td>
                      <td className="border-y border-y-4 border-black text-xl td-text-trial-schedule">
                        {item.PRO_START_DATE}
                      </td>
                      <td className="border-y border-y-4 border-black text-green-400">
                        {item.STAGE}
                      </td>
                      <td className="border-y border-y-4 border-black td-text-trial-schedule">
                        {item.Material_GC}
                      </td>
                      <td className="border-y border-y-4 border-black td-text-trial-schedule">
                        {item.CHAT}
                      </td>
                      <td className="border-y border-y-4 border-black td-text-trial-schedule">
                        {item.MCT}
                      </td>
                      <td className="border-y border-y-4 border-black td-text-trial-schedule">
                        {item.MAY}
                      </td>
                      <td className="border-y border-y-4 border-black td-text-trial-schedule">
                        {item.GO}
                      </td>
                      <td className="border-y border-y-4 border-black text-hop-column-trial-schedule">
                        {item.HOP}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default CS3_Trial_Schedule;

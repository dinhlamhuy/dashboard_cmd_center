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
    <>
      <div id="container">
        <div id="title" className="pb-10">
          <p>CS3 TRIAL SCHEDULE</p>
          <ul id="content-under-title">
            <li>Season Start: {data && data[0] && data[0].season_start}</li>
            <li>Year Start: {data && data[0] && data[0].year_start}</li>
            <li>Season End: {data && data[0] && data[0].season_end}</li>
            <li>Year End: {data && data[0] && data[0].year_end}</li>
          </ul>
        </div>
        <div id="body-content" className="px-5">
          <div id="table-trial-schedule" className="w-dvw" >
            <table border="1" id="table">
              <thead>
                <tr className="title-table">
                  <th>
                    Num
                    <br />
                    数字
                  </th>
                  <th style={{ background: "rgb(0, 211, 96, 0.6)" }}>
                    Art
                    <br />
                    艺术
                  </th>
                  <th style={{ background: "rgb(0, 211, 96, 0.6)" }}>
                    Model
                    <br />
                    模型
                  </th>
                  <th>CWA</th>
                  <th>Pro.Month</th>
                  <th style={{ background: "rgb(0, 211, 96, 0.6)" }}>LINE</th>
                  <th>Pro.Start Date</th>
                  <th style={{ background: "rgb(0, 211, 96, 0.6)" }}>Stage</th>
                  <th>Vật Tư Gia Công</th>
                  <th>Chặt</th>
                  <th>MCT</th>
                  <th>MAY</th>
                  <th>GÒ</th>
                  <th>HỌP</th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((item, index) => {
                    return (
                      <tr className="content-table" key={"ids"+index}>
                        <td>{item.Num}</td>
                        <td>{item.Art}</td>
                        <td className="td-image">
                          <img src={No_Picture} alt="" />
                          <p>{item.Model}</p>
                        </td>
                        <td>{item.CWA}</td>
                        <td>{item.Pro_Month}</td>
                        <td>{item.LINE}</td>
                        <td>{item.Pro_Month}</td>
                        <td>{item.STAGE}</td>
                        <td>{item.mcs}</td>
                        <td>{item.cutting}</td>
                        <td>{item.mct}</td>
                        <td>{item.stitching_v}</td>
                        <td>{item.assembly_v}</td>
                        <td className="text-hop-column">{item.meeting}</td>
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
};

export default CS3_Trial_Schedule;

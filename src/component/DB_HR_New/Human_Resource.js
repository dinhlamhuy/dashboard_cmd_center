import { React, useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,

} from "recharts";
import './Human_Resource.css'
import { BaseAPI } from "../../utils/baseApi";
const Human_Resource = () => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const dataHRDetail1 = [
    {
      ExpectedAttendence: 0,
      ActualAttendence: 0,
      LeaveFactory: 0,
      Absence: 0,
      MaternityLeave: 0,
      Accident_Month: 0,
      AccidentYear: 0,
    },
  ];
  const [dataHR, setDataHR] = useState([]);
  const [dataHRDetail, setDataHRDetail] = useState([dataHRDetail1]);

  const getAPI_Buidling = () => {
    try {
      axios
        .get(BaseAPI+"/Get_Data_HR")
        .then(function (response) {
          // handle success
          const data_building = [
            response.data.ManBuildingA,
            response.data.ManBuildingB,
            response.data.ManBuildingC,
            response.data.ManBuildingD,
            response.data.ManBuildingR1,
            response.data.ManBuildingR2,
          ];
          const data_detail = [response.data.ManpowerTotal];
          console.log(data_building);
          setDataHR(data_building);
          setDataHRDetail(data_detail);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAPI_Buidling();
  }, []);

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <div id="container-HR">
      <div id="title">
        <p>人力資源</p>
      </div>
      <div className="info-building">
        <div className="building">
          <div className="border-bar">
            {/* <div className="bar"> */}
            <p>應到人數</p>
            <BarChart
              width={500}
              height={240}
              data={dataHR}
              margin={{
                top: 40,
                right: 30,
                left: 20,
                bottom: 25,
              }}
            >
              {/* <CartesianGrid /> */}
              <XAxis tick={{ fill: "white" }} dataKey="Name" fill="#ffffff" />
              <YAxis className="truc-y" label={{}} />
              <Bar
                dataKey="ExpectedAttendence"
                fill="#ffffff"
                shape={<TriangleBar />}
                label={{ position: "top", fill: "#fff" }}
                // barSize={1}
              >
                {dataHR &&
                  dataHR.map((item, index) => (
                    <Cell key={item.Name} fill={colors[index % 20]} />
                  ))}
              </Bar>
              {/* <Tooltip content={<CustomTooltip />} /> */}
            </BarChart>
            {/* </div> */}
          </div>
        </div>
        <div className="building">
          <div className="border-bar">
            <p>離職人數</p>
            <BarChart
              width={500}
              height={240}
              data={dataHR}
              margin={{
                top: 40,
                right: 30,
                left: 20,
                bottom: 25,
              }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis tick={{ fill: "white" }} dataKey="Name" />
              <YAxis className="truc-y" />
              <Bar
                dataKey="LeaveFactory"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top", fill: "#fff" }}
                // barSize={1}
              >
                {dataHR &&
                  dataHR.map((item, index) => (
                    <Cell key={item.Name} fill={colors[index % 20]} />
                  ))}
              </Bar>
            </BarChart>
          </div>
        </div>
        <div className="building">
          <div className="border-bar">
            <p>缺席人數</p>
            <BarChart
              width={500}
              height={240}
              data={dataHR}
              margin={{
                top: 40,
                right: 30,
                left: 20,
                bottom: 25,
              }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis tick={{ fill: "white" }} dataKey="Name" />
              <YAxis className="truc-y" />
              <Bar
                dataKey="Absence"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top", fill: "#fff" }}
                // barSize={1}
              >
                {dataHR &&
                  dataHR.map((item, index) => (
                    <Cell key={item.Name} fill={colors[index % 20]} />
                  ))}
              </Bar>
            </BarChart>
          </div>
        </div>
        <div className="building">
          <div className="border-bar">
            <p>產假人數</p>
            <BarChart
              width={500}
              height={240}
              data={dataHR}
              margin={{
                top: 40,
                right: 30,
                left: 20,
                bottom: 25,
              }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis tick={{ fill: "white" }} dataKey="Name" />
              <YAxis className="truc-y" />
              <Bar
                dataKey="MaternityLeave"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top", fill: "#ffffff" }}
                // barSize={10}
              >
                {dataHR &&
                  dataHR.map((item, index) => (
                    <Cell key={item.Name} fill={colors[index % 20]} />
                  ))}
              </Bar>
            </BarChart>
          </div>
        </div>
        <div className="building">
          <div className="border-bar">
            <p>工傷人數</p>
            <BarChart
              width={500}
              height={240}
              data={dataHR}
              margin={{
                top: 40,
                right: 30,
                left: 20,
                bottom: 25,
              }}
            >
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis tick={{ fill: "white" }} dataKey="Name" />
              <YAxis className="truc-y" />
              <Bar
                dataKey="Accident"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top", fill: "#ffffff" }}
                // barSize={10}
              >
                {dataHR &&
                  dataHR.map((item, index) => (
                    <Cell key={item.Name} fill={colors[index % 20]} />
                  ))}
              </Bar>
            </BarChart>
          </div>
        </div>
      </div>
      <div className="buiding-detail">
        <table className="content-HR-left">
          {dataHRDetail &&
            dataHRDetail.map((item, index) => (
              <tbody key={index}>
                <tr>
                  <td className="detail-hr-title">應到人數</td>
                  <td className="detail-hr-value">{item.ExpectedAttendence}</td>
                  <td className="hrnen">
                    <span>
                      {(
                        (item.ExpectedAttendence / item.ExpectedAttendence) *
                        100
                      ).toFixed(2) + "%"}
                    </span>
                    <p
                      className="detail-hr-percent2"
                      style={{
                        width: `${
                          (
                            (item.ExpectedAttendence /
                              item.ExpectedAttendence) *
                            100
                          ).toFixed(2) + "%"
                        }`,
                        height: "100%",
                      }}
                    >
                      <span></span>
                    </p>
                    <span></span>
                  </td>
                </tr>
                <tr>
                  <td className="detail-hr-title">出席人數</td>
                  <td className="detail-hr-value">{item.ActualAttendence}</td>
                  <td className="hrnen">
                    <span>
                      {(
                        (item.ActualAttendence / item.ExpectedAttendence) *
                        100
                      ).toFixed(2) + "%"}
                    </span>
                    <p
                      className="detail-hr-percent2"
                      style={{
                        width: `${
                          (
                            (item.ActualAttendence / item.ExpectedAttendence) *
                            100
                          ).toFixed(2) + "%"
                        }`,
                        height: "100%",
                      }}
                    >
                      <span></span>
                    </p>
                    <span></span>
                  </td>
                </tr>
                <tr>
                  <td className="detail-hr-title">離職人數</td>
                  <td className="detail-hr-value">{item.LeaveFactory}</td>
                  <td className="hrnen">
                    <span>
                      {(
                        (item.LeaveFactory / item.ExpectedAttendence) *
                        100
                      ).toFixed(2) + "%"}
                    </span>
                    <p
                      className="detail-hr-percent2"
                      style={{
                        width: `${
                          (
                            (item.LeaveFactory / item.ExpectedAttendence) *
                            100
                          ).toFixed(2) + "%"
                        }`,
                        height: "100%",
                      }}
                    >
                      <span></span>
                    </p>
                    <span></span>
                  </td>
                </tr>
                <tr>
                  <td className="detail-hr-title">缺席人數</td>
                  <td className="detail-hr-value">{item.Absence}</td>
                  <td className="hrnen">
                    <span>
                      {((item.Absence / item.ExpectedAttendence) * 100).toFixed(
                        2
                      ) + "%"}
                    </span>
                    <p
                      className="detail-hr-percent2"
                      style={{
                        width: `${
                          (
                            (item.Absence / item.ExpectedAttendence) *
                            100
                          ).toFixed(2) + "%"
                        }`,
                        height: "100%",
                      }}
                    >
                      <span></span>
                    </p>
                    <span></span>
                  </td>
                </tr>
                <tr>
                  <td className="detail-hr-title">產假人數</td>
                  <td className="detail-hr-value">{item.MaternityLeave}</td>
                  <td className="hrnen">
                    <span>
                      {(
                        (item.MaternityLeave / item.ExpectedAttendence) *
                        100
                      ).toFixed(2) + "%"}
                    </span>
                    <p
                      className="detail-hr-percent2"
                      style={{
                        width: `${
                          (
                            (item.MaternityLeave / item.ExpectedAttendence) *
                            100
                          ).toFixed(2) + "%"
                        }`,
                        height: "100%",
                      }}
                    >
                      <span></span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="detail-hr-title">本月工傷數</td>
                  <td className="detail-hr-value">{item.Accident_Month}</td>
                  <td className="hrnen">
                    <span>
                      {(
                        (item.Accident_Month / item.ExpectedAttendence) *
                        100
                      ).toFixed(2) + "%"}
                    </span>
                    <p
                      className="detail-hr-percent2"
                      style={{
                        width: `${
                          (
                            (item.Accident_Month / item.ExpectedAttendence) *
                            100
                          ).toFixed(2) + "%"
                        }`,
                        height: "100%",
                      }}
                    >
                      <span></span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="detail-hr-title">今年工傷數</td>
                  <td className="detail-hr-value">{item.AccidentYear}</td>
                  <td className="hrnen">
                    <span>
                      {(
                        (item.AccidentYear / item.ExpectedAttendence) *
                        100
                      ).toFixed(2) + "%"}
                    </span>
                    <p
                      className="detail-hr-percent2"
                      style={{
                        width: `${
                          (
                            (item.AccidentYear / item.ExpectedAttendence) *
                            100
                          ).toFixed(2) + "%"
                        }`,
                        height: "100%",
                      }}
                    >
                      {" "}
                      <span></span>
                    </p>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </div>
  );
};
export default Human_Resource;

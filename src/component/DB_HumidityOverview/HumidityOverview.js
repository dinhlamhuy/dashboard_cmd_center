import { React, useState, useEffect } from "react";
import { FiDroplet } from "react-icons/fi";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import axios from "axios";
import './HumidityOverview.css'
import { BaseAPI } from "../../utils/baseApi";
const HumidityOverview = () => {
  const dataDefault = [
    {
      Device_IP: null,
      Device_Name: "CATTD-1",
      Device_Location: "Auto Cutting Area",
      Device_Status: "ON",
      Humidity: 100,
      Tempure: 29.1,
      Time_Send_Data: "5/10/2024 12:00:00 AM",
    },
    {
      Device_IP: null,
      Device_Name: "EPCT-1",
      Device_Location: "High-Rise Pressing Area",
      Device_Status: "ON",
      Humidity: 100,
      Tempure: 29.4,
      Time_Send_Data: "5/10/2024 12:00:00 AM",
    },
    {
      Device_IP: null,
      Device_Name: "EPNO-1",
      Device_Location: "Hot Pressing Area",
      Device_Status: "ON",
      Humidity: 100,
      Tempure: 33.8,
      Time_Send_Data: "5/10/2024 12:00:00 AM",
    },
    {
      Device_IP: null,
      Device_Name: "INLUA-1",
      Device_Location: "Silk Printing",
      Device_Status: "ON",
      Humidity: 100,
      Tempure: 29.4,
      Time_Send_Data: "5/10/2024 12:00:00 AM",
    },
    {
      Device_IP: null,
      Device_Name: "KHDE-1",
      Device_Location: "Sole Warehouse",
      Device_Status: "ON",
      Humidity: 100,
      Tempure: 31.3,
      Time_Send_Data: "5/10/2024 12:00:00 AM",
    },
    {
      Device_IP: null,
      Device_Name: "KSXA4-1",
      Device_Location: "Production Area",
      Device_Status: "ON",
      Humidity: 100,
      Tempure: 31.3,
      Time_Send_Data: "5/10/2024 12:00:00 AM",
    },
    {
      Device_IP: null,
      Device_Name: "KSXB2-1",
      Device_Location: "Production Area",
      Device_Status: "ON",
      Humidity: 100,
      Tempure: 33.2,
      Time_Send_Data: "5/10/2024 12:00:00 AM",
    },
    {
      Device_IP: null,
      Device_Name: "KSXD1-1",
      Device_Location: "Production Area",
      Device_Status: "ON",
      Humidity: 65,
      Tempure: 32.8,
      Time_Send_Data: "5/10/2024 12:00:00 AM",
    },
    {
      Device_IP: null,
      Device_Name: "KSXD3-1",
      Device_Location: "Production Area",
      Device_Status: "ON",
      Humidity: 65,
      Tempure: 31.3,
      Time_Send_Data: "5/10/2024 12:00:00 AM",
    },
    {
      Device_IP: null,
      Device_Name: "KTPA-03",
      Device_Location: "Prod.Warehouse A-03",
      Device_Status: "ON",
      Humidity: 65,
      Tempure: 34,
      Time_Send_Data: "5/10/2024 12:00:00 AM",
    },
    {
      Device_IP: null,
      Device_Name: "KTPD-01",
      Device_Location: "Prod.Warehouse D-01",
      Device_Status: "ON",
      Humidity: 65,
      Tempure: 32.1,
      Time_Send_Data: "5/10/2024 12:00:00 AM",
    },
    {
      Device_IP: null,
      Device_Name: "KTPD-02",
      Device_Location: "Prod.Warehouse D-02",
      Device_Status: "ON",
      Humidity: 65,
      Tempure: 32.1,
      Time_Send_Data: "5/10/2024 12:00:00 AM",
    },
    {
      Device_IP: null,
      Device_Name: "KTPD-03",
      Device_Location: "Prod.Warehouse D-03",
      Device_Status: "ON",
      Humidity: 65,
      Tempure: 32.1,
      Time_Send_Data: "5/10/2024 12:00:00 AM",
    },
    {
      Device_IP: null,
      Device_Name: "KTPE-03",
      Device_Location: "Prod.Warehouse E-03",
      Device_Status: "ON",
      Humidity: 65,
      Tempure: 31.6,
      Time_Send_Data: "5/10/2024 12:00:00 AM",
    },
    {
      Device_IP: null,
      Device_Name: "KTPG-01",
      Device_Location: "Prod.Warehouse G-01",
      Device_Status: "OFF",
      Humidity: 50,
      Tempure: 0,
      Time_Send_Data: "",
    },
    {
      Device_IP: null,
      Device_Name: "KTPG-02",
      Device_Location: "Prod.Warehouse G-02",
      Device_Status: "OFF",
      Humidity: 50,
      Tempure: 0,
      Time_Send_Data: "",
    },
    {
      Device_IP: null,
      Device_Name: "KTPG-03",
      Device_Location: "Prod.Warehouse G-03",
      Device_Status: "OFF",
      Humidity: 50,
      Tempure: 0,
      Time_Send_Data: "",
    },
    {
      Device_IP: null,
      Device_Name: "KVTF-03",
      Device_Location: "Warehouse F-03",
      Device_Status: "ON",
      Humidity: 50,
      Tempure: 31.8,
      Time_Send_Data: "5/10/2024 12:00:00 AM",
    },
    {
      Device_IP: null,
      Device_Name: "KVTG-03",
      Device_Location: "Warehouse G-03",
      Device_Status: "ON",
      Humidity: 50,
      Tempure: 31.6,
      Time_Send_Data: "5/10/2024 12:00:00 AM",
    },
    {
      Device_IP: null,
      Device_Name: "TTMC-1",
      Device_Location: "Cutting Area",
      Device_Status: "ON",
      Humidity: 50,
      Tempure: 32.3,
      Time_Send_Data: "5/10/2024 12:00:00 AM",
    },
    {
      Device_IP: null,
      Device_Name: "TTMC-2",
      Device_Location: "Cutting Area",
      Device_Status: "ON",
      Humidity: 50,
      Tempure: 32.3,
      Time_Send_Data: "5/10/2024 12:00:00 AM",
    },
  ];
  const [dataHumidity, setDataHumidity] = useState(dataDefault);
  const getAPI = () => {
    try {
      axios
        .get(BaseAPI+"/Get_Data_Humidity_Overview")
        .then(function (response) {
          // handle success
          setDataHumidity(response.data.HumidityOverview);
          console.log(response.data.HumidityOverview);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAPI();
    const intervalId = setInterval(() => {
      getAPI();
    }, 1 * 60 * 1000); // 4 phút trong milliseconds

    return () => clearInterval(intervalId);
  }, []);
  // useEffect(() => {
  //   getAPIcheck();
  //     const intervalId = setInterval(() => {

  //         getAPIcheck();

  //     }, 4 * 60 * 1000); // 4 phút trong milliseconds

  //     return () => clearInterval(intervalId);
  //   }, []);

  return (
    <div id="containerHO">
      <div id="titleHO">
        <span>HUMIDITY OVERVIEW</span>
      </div>
      <div className="HOicon">
        {dataHumidity &&
          dataHumidity.map((item, index) => {let status = "";
            let classTempure = "";
            let Humid = 0.0;
            let wave = "";
            let colorDroplet = "";
            let colorTemp = "";
            let persent = -(
              50 +
              (parseFloat(item.Humidity) / 100) * (200 - 50)
            );
           
            if (item.Humidity === 0) {
            } else if (item.Humidity >= 65 && item.Humidity <= 70) {
              wave = "wave-normal";
              colorDroplet = "iconDroplet-normal";
              colorTemp = "iconTemperature-normal";
            } else if (item.Humidity < 65) {
              wave = "wave-safe";
              colorDroplet = "iconDroplet-safe";
              colorTemp = "iconTemperature-safe";
            } else if (item.Humidity > 70) {
              wave = "wave-high";
              colorDroplet = "iconDroplet-high";
              colorTemp = "iconTemperature-high";
            }
            if (item.Device_Status === "ON") {
              status = (
                <div className={`wave ${wave}`}>
                  <div
                    className="wave1"
                    style={{
                      top: persent + "px",
                      // top: "-180px",
                    }}
                  ></div>
                  <div
                    className="wave2"
                    style={{
                      top: persent + "px",
                      // top: "-180px",
                    }}
                  ></div>
                </div>
              );
              classTempure = "tempure-value-on";
              Humid = item.Humidity;
            } else {
              classTempure = "tempure-value-off";
              Humid = 0.0;
            }

            return (
              <div className="ItemHO " key={index}>
                <div className="ComponentHO" >
                  <FiDroplet className={` iconDroplet ${colorDroplet} `} />
                  <FaTemperatureThreeQuarters
                    className={`iconTemperature ${colorTemp}`}
                  />
                  <span className={classTempure}>{item.Tempure}&ordm;C</span>
                  <span className="percentHO">
                    {Humid === 0 ? "" : Humid.toFixed(1) + "%"}
                  </span>
                  <div className="circlewhite"></div>
                  <div className="bieudo">
                    <div className="khung">{status}</div>
                  </div>
                </div>

                <div className="content-detail-HO pb-5">
                  {/* <p>IP: {item.Device_IP}</p> */}
                  {/* <p>IP: 192.168.XX.XX</p> */}
                  <p>
                    Name: <span>{item.Device_Name}</span>
                  </p>
                  <p>
                    Pos:{" "}
                    <i>
                      <strong className="pos-humidity">
                        {item.Device_Location}
                      </strong>
                    </i>
                  </p>
                  {/* <p>Dehumidifier Status: {item.Device_Status}</p> */}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default HumidityOverview;

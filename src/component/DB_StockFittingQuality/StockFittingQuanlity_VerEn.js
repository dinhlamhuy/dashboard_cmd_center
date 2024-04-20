/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import { BaseAPI } from "../../utils/baseApi";
import axios from "axios";
import { PieChart, Pie, Cell } from "recharts";

const RADIAN = Math.PI / 180;
const data = [
  { name: "A", label: "0", value: -1, color: "transparent" },
  { name: "A", label: "", value: 20, color: "#ffba08" },
  { name: "A", label: "20", value: -1, color: "#000000" },
  { name: "A", label: "", value: 20, color: "#faa307" },
  { name: "A", label: "40", value: -1, color: "#000000" },
  { name: "A", label: "", value: 20, color: "#f48c06" },
  { name: "A", label: "60", value: -1, color: "#000000" },
  { name: "A", label: "", value: 20, color: "#e85d04" },
  { name: "A", label: "80", value: -1, color: "#000000" },
  { name: "A", label: "", value: 20, color: "#dc2f02" },
  { name: "A", label: "100", value: 0, color: "transparent" },
];
const cx = 150;
const cy = 150;
const iR = 50;
const oR = 100;

const needle = (value, cx, cy, iR, oR, color) => {
  const ang = 180 - 180 * (value / 100);
  const length = (iR + 2 * oR) / 2.1;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 7;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
    <path
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="#none"
      fill={color}
    />,
  ];
};
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  label,
  index,
}) => {
  const radius = (innerRadius + (outerRadius - innerRadius)) * 0.57;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

  return (
    <text
      fontSize={"20px"}
      fontWeight={"bold"}
      x={x - 2}
      y={y - 2}
      fill="white"
      textAnchor="middle"
      dominantBaseline="middle"  style={{outline: 'none'}} 
    >
      {`${label}`}
    </text>
  );
};

const StockFittingQuality_VerEn = () => {
  const [listData, setListData] = useState([
    {
      Article: "",
      ShoeName: "CAMPUS 00S W",
      Line: "GCD_C09",
      Operator: 18,
      TimeCount: 8,
      DepID: "1177",
      Actual_Output: 5010,
      PPH: 34.79,
      RFT: 96,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "COURT 24",
      Line: "GCD_C08",
      Operator: 31,
      TimeCount: 8,
      DepID: "1089",
      Actual_Output: 1332,
      PPH: 5.37,
      RFT: 86,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "LIGRA 7 M",
      Line: "GCD_C01",
      Operator: 47,
      TimeCount: 8,
      DepID: "1072",
      Actual_Output: 1583,
      PPH: 4.21,
      RFT: 87,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "D.O.N.",
      Line: "GCD_C04",
      Operator: 48,
      TimeCount: 8,
      DepID: "1075",
      Actual_Output: 1350,
      PPH: 3.52,
      RFT: 87,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "GRAND",
      Line: "GCD_C10",
      Operator: 19,
      TimeCount: 8,
      DepID: "1175",
      Actual_Output: 1537,
      PPH: 10.11,
      RFT: 91,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: null,
      Line: "GCD_C24",
      Operator: 20,
      TimeCount: 8,
      DepID: "1652",
      Actual_Output: 6006,
      PPH: 37.54,
      RFT: 100,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "CRAZYFLIGHT",
      Line: "GCD_C02",
      Operator: 47,
      TimeCount: 8,
      DepID: "1073",
      Actual_Output: 1360,
      PPH: 3.62,
      RFT: 86,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: null,
      Line: "GCD_C07",
      Operator: 18,
      TimeCount: 8,
      DepID: "1078",
      Actual_Output: 5605,
      PPH: 38.92,
      RFT: 100,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "GRAND",
      Line: "GCD_C06",
      Operator: 42,
      TimeCount: 8,
      DepID: "1077",
      Actual_Output: 1390,
      PPH: 4.14,
      RFT: 86,
      Count_Add: 0,
      Count_Complete: 1,
    },
    {
      Article: "",
      ShoeName: "CAMPUS ADV",
      Line: "GCD_C20",
      Operator: 31,
      TimeCount: 8,
      DepID: "1499",
      Actual_Output: 3121,
      PPH: 12.58,
      RFT: 97,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "GRAND",
      Line: "GCD_C05",
      Operator: 48,
      TimeCount: 8,
      DepID: "1076",
      Actual_Output: 2135,
      PPH: 5.56,
      RFT: 94,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: null,
      Line: "GCD_C23",
      Operator: 26,
      TimeCount: 8,
      DepID: "1502",
      Actual_Output: 4855,
      PPH: 23.34,
      RFT: 100,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: "COURT 24",
      Line: "GCD_C03",
      Operator: 35,
      TimeCount: 8,
      DepID: "1074",
      Actual_Output: 1640,
      PPH: 5.86,
      RFT: 88,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: null,
      Line: "GCD_C22",
      Operator: 23,
      TimeCount: 8,
      DepID: "1501",
      Actual_Output: 4601,
      PPH: 25.01,
      RFT: 100,
      Count_Add: 0,
      Count_Complete: 0,
    },
    {
      Article: "",
      ShoeName: null,
      Line: "GCD_C21",
      Operator: 20,
      TimeCount: 8,
      DepID: "1500",
      Actual_Output: 4343,
      PPH: 27.14,
      RFT: 100,
      Count_Add: 0,
      Count_Complete: 0,
    },
  ]);
//   const [totalMP, setTotalMP] = useState(0);
//   const [totalActualOutput, setTotalActualOutput] = useState(0);
//   const [totalPPH, setTotalPPH] = useState(0);
//   const [totalRFT, setTotalRFT] = useState(0);
  const getAPIcheck = async () => {
    await axios
      .get(BaseAPI + "/sfq/data_pph_all")
      .then((response) => {
        console.table(response.data.data)
        const data = response.data.data.sort((a, b) => {
          // Use localeCompare for string comparison to ensure correct sorting order
          return a.Line.localeCompare(b.Line);
        });
        // const totalActualOutput = data.reduce((total, currentItem) => {
        //   return total + currentItem.Actual_Output;
        // }, 0);
        // const totalPPH = data.reduce((total, currentItem) => {
        //   return total + currentItem.PPH;
        // }, 0);
        // const totalRFT = data.reduce((total, currentItem) => {
        //   return total + currentItem.RFT;
        // }, 0);
        // const totalMP = data.reduce((total, currentItem) => {
        //   return total + currentItem.Operator;
        // }, 0);
        // setTotalActualOutput(totalActualOutput);
        // setTotalMP(totalMP);
        // setTotalPPH(totalPPH / data.length || 0);
        // setTotalRFT(totalRFT / data.length || 0);
        setListData(data);
      })
      .catch(() => {});
  };
  useEffect(() => {
    // console.log('check ban đầu')
    getAPIcheck();
  }, []);
  useEffect(() => {
    const data = listData.sort((a, b) => {
      return a.Line.localeCompare(b.Line);
    });
    setListData(data);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("check 2");
      getAPIcheck();
    }, 120000); // 2 phút là 120000 miligiây

    // Cleanup function to clear the interval when the component unmounts or the effect is re-run
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="   relative h-screen px-2 pt-3 pt-10 overflow-auto">
      <div className="text-white text-4xl md:text-5xl lg:text-6xl text-center font-bold pb-3 select-none">Stock Fitting Quality</div>
      <div className="flex justify-center items-center mt-6">
      <div className=" w-[100%] relative grid grid-cols-2 base:grid-cols-3 sm:grid-cols-4  md:grid-cols-5 lg:grid-cols-8  xl:grid-cols-8 gap-4 mt-7 ">
        {listData
          .sort((a, b) => a.Line - b.Line)
          .map((item, index) => {
            return (
              <div key={index}
                className={`select-none base:h-[200px] be:h-[190px]  sm:h-[175px] md:h-[179px] lg:h-[140px] xl:h-[160px] xl:h-[170px] 2xl:h-[200px] max-w-xs pie-chart-container mt-3  ${
                  item.Count_Add > 0
                    ? "border-red-400 bg-red-950/90"
                    : "border-blue-900 bg-blue-950/30 "
                }  backdrop-brightness-125 border rounded-xl relative px-0  mx-0 flex justify-center items-center`}
              >
                {/* <ResponsiveContainer> */}
                  <PieChart  key={'ds'+index}
                    width={300}
                    height={195} 
                    className="select-none rounded-xl absolute  mx-0 ms:mx-2 md:mx-2 lg:mx-1 xl:mx-2  2xl:mx-6 "
                  >
                       <text
                      fontSize={"30px"}
                      fontWeight={"bold"}
                      fill="white"
                      x={cx+10}
                      y={cy -190 }
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      {item.RFT ? item.RFT +'%':  '0%'}
                    </text>
                    <Pie
                      label={renderCustomizedLabel}
                      dataKey="value"
                      startAngle={180}
                      endAngle={0}
                      data={data}
                      cx={cx-5}
                      // label={{position:'top'}} 
                      
                      labelLine={false}
                      cy={cy-15}
                      paddingAngle={2}
                      innerRadius={105}
                      outerRadius={150}
                      fill="#8884d8"
                      stroke="none"
                      labelPosition="bottom" // Màu sắc của điểm kết thúc của đường line
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                          style={{ outline: "none" }}
                        />
                      ))}
                    </Pie>
                    {needle(item.RFT, cx-5, cy-15, iR, oR, "#74eb34")}
                    <text
                      fontSize={"20px"}
                      fontWeight={"bold"}
                      fill="white"
                      x={cx-150}
                      y={cy+40}
                      textAnchor="start"
                      dominantBaseline="middle"
                    >
                      Lean: 
                    </text>
                    <text
                      fontSize={"30px"}
                      fontWeight={"bold"}
                      fill="white"
                      x={cx-60}
                      y={cy+40}
                      textAnchor="start"
                      dominantBaseline="middle"
                    >
                      {item.Line}
                    </text>
                    <text
                      fontSize={"20px"}
                      fontWeight={"bold"}
                      fill="yellow"
                      x={cx-150 }
                      y={cy + 75}
                      textAnchor="start"
                      dominantBaseline="middle"
                    >
                     ShoeName:
                    </text>
                    <text
                      fontSize={"21px"}
                      fontWeight={"bold"}
                      fill="yellow"
                      x={cx -30}
                      y={cy + 75}
                      textAnchor="start"
                      dominantBaseline="middle"
                    >
                    {item.ShoeName}
                    </text>
                    <text
                      fontSize={"20px"}
                      fontWeight={"bold"}
                      fill="#dc2f02"
                      x={cx-150}
                      y={cy + 105}
                      textAnchor="start"
                      dominantBaseline="middle"
                    >
                     StopLine:
                    </text>
                    <text
                      fontSize={"23px"}
                      fontWeight={"bold"}
                      fill="#dc2f02"
                      x={cx -60}
                      y={cy + 105}
                      textAnchor="start"
                      dominantBaseline="middle"
                    >
                    {item.Count_Add !== 0 ? item.Count_Add : ''}
                    </text>
                  </PieChart>
                {/* </ResponsiveContainer> */}
              </div>
            );
          })}
      </div>

      </div>
      {/* <div className="  pl-4 pr-6  h-1/3 w-full">
        <div className="text-white text-center font-bold text-6xl pb-6">
          Stock Fitting Quality
        </div>
        <table className=" text-xl table table-fixed  w-full text-white border-separate border-spacing-y-1">
          <thead>
            <tr
              key={"sfqlean"}
              className="backdrop-brightness-125 bg-blue-950/40  "
            >
              <th className="text-left text-blue-400">Lean</th>
              {listData &&
                listData.map((item, index) => {
                  return <th className="text-blue-300">{item.Line}</th>;
                })}
              <th className="text-yellow-400 backdrop-brightness-125 bg-blue-950/20">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              key={"sfqmp"}
              className="backdrop-brightness-125  bg-blue-950/60 "
            >
              <th className="text-left text-blue-400">MP</th>
              {listData &&
                listData.map((item) => {
                  return <th className="text-[#4169E1]">{item.Operator}</th>;
                })}
              <th className="text-yellow-400 backdrop-brightness-125 bg-blue-950/20">
                {totalMP}
              </th>
            </tr>
            <tr
              key={"sfqaq"}
              className="backdrop-brightness-125 bg-blue-950/60 "
            >
              <th className="text-left text-blue-400">Actual Output</th>
              {listData &&
                listData.map((item) => {
                  return (
                    <th className="text-[#ffffff]">{item.Actual_Output}</th>
                  );
                })}
              <th className="text-yellow-400 backdrop-brightness-125 bg-blue-950/20">
                {totalActualOutput}
              </th>
            </tr>
            <tr
              key={"sfqpph"}
              className="backdrop-brightness-125 bg-blue-950/60 "
            >
              <th className="text-left text-blue-400">PPH</th>
              {listData &&
                listData.map((item) => {
                  return <th className="text-[#FF0000]">{item.PPH}</th>;
                })}
              <th className="text-yellow-400 backdrop-brightness-125 bg-blue-950/20">
                {parseFloat(totalPPH).toFixed(2)}
              </th>
            </tr>
            <tr
              key={"sfqrft"}
              className="backdrop-brightness-125 bg-blue-950/60 "
            >
              <th className="text-left text-blue-400">RFT</th>
              {listData &&
                listData.map((item) => {
                  return (
                    <th className="text-[#FFD700]">
                      {item.RFT && item.RFT !== 0 ? item.RFT + "%" : ""}
                    </th>
                  );
                })}
              <th className="text-yellow-400 backdrop-brightness-125 bg-blue-950/20">
                {" "}
                {totalRFT && totalRFT != 0
                  ? parseFloat(totalRFT).toFixed(2) + "%"
                  : ""}
              </th>
            </tr>
            <tr
              key={"sfqshoes"}
              className="backdrop-brightness-125 bg-blue-950/40  "
            >
              <th className="text-left text-blue-400">Shoe Name</th>
              {listData &&
                listData.map((item, index) => {
                  return (
                    <td className="text-yellow-700 text-center">
                      {item.ShoeName}
                    </td>
                  );
                })}
              <th></th>
            </tr>
            <tr
              key={"sfqstopline"}
              className="backdrop-brightness-125 bg-blue-950/60 "
            >
              <th className="text-left text-blue-400">Stop Line</th>
              {listData &&
                listData.map((item) => {
                  return (
                    <th>
                      {item.Count_Add === 0 ? "" : item.Count_Add}
                    </th>
                  );
                })}
              <th></th>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  );
};
export default StockFittingQuality_VerEn;

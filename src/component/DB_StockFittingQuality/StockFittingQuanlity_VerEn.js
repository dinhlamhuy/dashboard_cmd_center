/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import { BaseAPI } from "../../utils/baseApi";
import axios from "axios";
import { PieChart, Pie, Cell } from "recharts";
import { fakedata } from "./data";
import { useTranslation } from "react-i18next";

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
    <circle key={"dsdsa"+value} cx={x0} cy={y0} r={r} fill={color} stroke="none" 
    style={{
      transition: 'all 6s ease', // thêm transition vào đây
      transformOrigin: `${x0}px ${y0}px`, // Đặt trục xoay ở trung tâm của kim
     // Xoay kim chỉ
    }}
    />,
    <path key={'dsdas'+value}
      d={`M${xba} ${yba} L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke="#none"
      fill={color}  

      
      style={{
        transition: 'all 6s ease-out allow-discrete', // thêm transition vào đây
        transformOrigin: `${x0}px ${y0}px`, // Đặt trục xoay ở trung tâm của kim
       // Xoay kim chỉ
      }}
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
      dominantBaseline="middle"
      style={{ outline: "none" }}
    >
      {`${label}`}
    </text>
  );
};

const StockFittingQuality_VerEn = () => {
  const { t } = useTranslation();
  const [listData, setListData] = useState(fakedata);
  const getAPIcheck = async () => {
    await axios
      .get(BaseAPI + "/Get_Data_PPH_All")
      .then((response) => {
        // console.table(response.data.Stock_Fiting_Quality);
        const data = response.data.Stock_Fiting_Quality.sort((a, b) => {
          return a.Line.localeCompare(b.Line);
        });
        setListData(data);
      })
      .catch(() => {});
  };
  // useEffect(() => {
  //   getAPIcheck();
  // }, []);
  useEffect(() => {
    const data = listData.sort((a, b) => {
      return a.Line.localeCompare(b.Line);
    });
    setListData(data);
  }, []);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // console.log("check 2");
  //     getAPIcheck();
  //   }, 120000); // 2 phút là 120000 miligiây
  //   return () => clearInterval(interval);
  // }, []);




  const [count, setCount] = useState(0);
  const [direction, setDirection] = useState(10);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((prevCount) => {
  //       const nextCount = prevCount + direction;
  //       if (nextCount < 0 || nextCount > 104) {
  //         setDirection((prevDirection) => -prevDirection);
  //         return prevCount; // Giữ nguyên giá trị khi vượt quá giới hạn
  //       }
  //       return nextCount;
  //     });
  //   }, 10);

  //   return () => clearInterval(interval);
  // }, [direction]); 

  return (
    <div className="   relative h-full px-2 pt-3 pt-10 overflow-auto">
      {/* // md:text-5xl lg:text-6xl  */}
      <div className="text-white text-[64px] 
      text-center font-bold pb-3 select-none tracking-[.2em] pt-5">
      {t("StockFittingQuality.title")}
      </div>
      <div className="flex justify-center items-center mt-9">
        <div className=" w-full relative grid grid-cols-2 base:grid-cols-3 sm:grid-cols-4  md:grid-cols-5 lg:grid-cols-5  xl:grid-cols-5 gap-9  ">
          {listData
            .sort((a, b) => a.Line - b.Line)
            .map((item, index) => {
              return (
                <div
                  key={index}
                  className={`select-none   h-fit flex max-w-xs pie-chart-container p-0 ${
                    item.Count_Add > 0
                      ? "border-red-400 bg-red-950/90"
                      : "border-blue-900 bg-blue-950/30 "
                  }  backdrop-brightness-125 border rounded-xl relative px-0  pb-0 mx-0 flex justify-center items-center`}
                >
                  <PieChart
                    key={"ds" + index}
                    width={300}
                    height={270}
                    className="select-none rounded-xl absolute mx-0 ms:mx-2 md:mx-2 mt-3 -mb-6 lg:mx-1 xl:mx-14 2xl:mx-6 "
                  >
                    <text
                      fontSize={"50px"}
                      fontWeight={"bold"}
                      fill="white"
                      x={cx + 10}
                      y={cy - 170}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      {item.RFT ? item.RFT + "%" : "0%"}
                    </text>
                    <Pie 
                      label={renderCustomizedLabel}
                      dataKey="value"
                      startAngle={180}
                      endAngle={0}
                      data={data}
                      cx={cx - 5}
                      // label={{position:'top'}}
                     
                      labelLine={false}
                      cy={cy +8}
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
                    {needle(item.RFT, cx - 5, cy +8, iR, oR, "#74eb34")}
                    <text
                      fontSize={"22px"}
                      fontWeight={"bold"}
                      fill="white"
                      x={cx - 150}
                      y={cy + 60}
                      textAnchor="start"
                      dominantBaseline="middle"
                    >
                      {t("StockFittingQuality.Lean")}:
                    </text>
                    <text
                      fontSize={"30px"}
                      fontWeight={"bold"}
                      fill="white"
                      x={cx - 60}
                      y={cy + 60}
                      textAnchor="start"
                      dominantBaseline="middle"
                    >
                      {item.Line}
                    </text>
                    <text
                      fontSize={"22px"}
                      fontWeight={"bold"}
                      fill="yellow"
                      x={cx - 150}
                      y={cy + 90}
                      textAnchor="start"
                      dominantBaseline="middle"
                    >
                      {t("StockFittingQuality.ShoeName")}:
                    </text>
                    <text
                      fontSize={"21px"}
                      fontWeight={"bold"}
                      fill="yellow"
                      x={cx - 30}
                      y={cy + 90}
                      textAnchor="start"
                      dominantBaseline="middle"
                    >
                      {item.ShoeName}
                    </text>
                    <text
                      fontSize={"22px"}
                      fontWeight={"bold"}
                      fill="#dc2f02"
                      x={cx - 150}
                      y={cy + 120}
                      textAnchor="start"
                      dominantBaseline="middle"
                    >
                      {t("StockFittingQuality.StopLine")}:
                    </text>
                    <text
                      fontSize={"23px"}
                      fontWeight={"bold"}
                      fill="#dc2f02"
                      x={cx - 60}
                      y={cy + 120}
                      textAnchor="start"
                      dominantBaseline="middle"
                    >
                      {item.Count_Add !== 0 ? item.Count_Add : ""}
                    </text>
                  </PieChart>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default StockFittingQuality_VerEn;

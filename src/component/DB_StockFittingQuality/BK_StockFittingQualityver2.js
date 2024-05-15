/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import { BaseAPI } from "../../utils/baseApi";
import axios from "axios";
import {
  Bar,
  XAxis,Line,
  YAxis ,
  CartesianGrid,ComposedChart,
  Tooltip,
  Legend,
  BarChart, Rectangle,
  ResponsiveContainer,
} from 'recharts';
const StockFittingQuality = () => {
  // const [listData, setListData] = useState([
  //   {
  //     "Article": "",
  //     "ShoeName": "CAMPUS 00S W",
  //     "Line": "GCD_C09",
  //     "Operator": 18,
  //     "TimeCount": 8,
  //     "DepID": "1177",
  //     "Actual_Output": 5010,
  //     "PPH": 34.79,
  //     "RFT": 96,
  //     "Count_Add": 0,
  //     "Count_Complete": 0
  //   },
  //   {
  //     "Article": "",
  //     "ShoeName": "COURT 24",
  //     "Line": "GCD_C08",
  //     "Operator": 31,
  //     "TimeCount": 8,
  //     "DepID": "1089",
  //     "Actual_Output": 1332,
  //     "PPH": 5.37,
  //     "RFT": 86,
  //     "Count_Add": 0,
  //     "Count_Complete": 0
  //   },
  //   {
  //     "Article": "",
  //     "ShoeName": "LIGRA 7 M",
  //     "Line": "GCD_C01",
  //     "Operator": 47,
  //     "TimeCount": 8,
  //     "DepID": "1072",
  //     "Actual_Output": 1583,
  //     "PPH": 4.21,
  //     "RFT": 87,
  //     "Count_Add": 0,
  //     "Count_Complete": 0
  //   },
  //   {
  //     "Article": "",
  //     "ShoeName": "D.O.N.",
  //     "Line": "GCD_C04",
  //     "Operator": 48,
  //     "TimeCount": 8,
  //     "DepID": "1075",
  //     "Actual_Output": 1350,
  //     "PPH": 3.52,
  //     "RFT": 87,
  //     "Count_Add": 0,
  //     "Count_Complete": 0
  //   },
  //   {
  //     "Article": "",
  //     "ShoeName": "GRAND",
  //     "Line": "GCD_C10",
  //     "Operator": 19,
  //     "TimeCount": 8,
  //     "DepID": "1175",
  //     "Actual_Output": 1537,
  //     "PPH": 10.11,
  //     "RFT": 91,
  //     "Count_Add": 0,
  //     "Count_Complete": 0
  //   },
  //   {
  //     "Article": "",
  //     "ShoeName": null,
  //     "Line": "GCD_C24",
  //     "Operator": 20,
  //     "TimeCount": 8,
  //     "DepID": "1652",
  //     "Actual_Output": 6006,
  //     "PPH": 37.54,
  //     "RFT": 100,
  //     "Count_Add": 0,
  //     "Count_Complete": 0
  //   },
  //   {
  //     "Article": "",
  //     "ShoeName": "CRAZYFLIGHT",
  //     "Line": "GCD_C02",
  //     "Operator": 47,
  //     "TimeCount": 8,
  //     "DepID": "1073",
  //     "Actual_Output": 1360,
  //     "PPH": 3.62,
  //     "RFT": 86,
  //     "Count_Add": 0,
  //     "Count_Complete": 0
  //   },
  //   {
  //     "Article": "",
  //     "ShoeName": null,
  //     "Line": "GCD_C07",
  //     "Operator": 18,
  //     "TimeCount": 8,
  //     "DepID": "1078",
  //     "Actual_Output": 5605,
  //     "PPH": 38.92,
  //     "RFT": 100,
  //     "Count_Add": 0,
  //     "Count_Complete": 0
  //   },
  //   {
  //     "Article": "",
  //     "ShoeName": "GRAND",
  //     "Line": "GCD_C06",
  //     "Operator": 42,
  //     "TimeCount": 8,
  //     "DepID": "1077",
  //     "Actual_Output": 1390,
  //     "PPH": 4.14,
  //     "RFT": 86,
  //     "Count_Add": 0,
  //     "Count_Complete": 1
  //   },
  //   {
  //     "Article": "",
  //     "ShoeName": "CAMPUS ADV",
  //     "Line": "GCD_C20",
  //     "Operator": 31,
  //     "TimeCount": 8,
  //     "DepID": "1499",
  //     "Actual_Output": 3121,
  //     "PPH": 12.58,
  //     "RFT": 97,
  //     "Count_Add": 0,
  //     "Count_Complete": 0
  //   },
  //   {
  //     "Article": "",
  //     "ShoeName": "GRAND",
  //     "Line": "GCD_C05",
  //     "Operator": 48,
  //     "TimeCount": 8,
  //     "DepID": "1076",
  //     "Actual_Output": 2135,
  //     "PPH": 5.56,
  //     "RFT": 94,
  //     "Count_Add": 0,
  //     "Count_Complete": 0
  //   },
  //   {
  //     "Article": "",
  //     "ShoeName": null,
  //     "Line": "GCD_C23",
  //     "Operator": 26,
  //     "TimeCount": 8,
  //     "DepID": "1502",
  //     "Actual_Output": 4855,
  //     "PPH": 23.34,
  //     "RFT": 100,
  //     "Count_Add": 0,
  //     "Count_Complete": 0
  //   },
  //   {
  //     "Article": "",
  //     "ShoeName": "COURT 24",
  //     "Line": "GCD_C03",
  //     "Operator": 35,
  //     "TimeCount": 8,
  //     "DepID": "1074",
  //     "Actual_Output": 1640,
  //     "PPH": 5.86,
  //     "RFT": 88,
  //     "Count_Add": 0,
  //     "Count_Complete": 0
  //   },
  //   {
  //     "Article": "",
  //     "ShoeName": null,
  //     "Line": "GCD_C22",
  //     "Operator": 23,
  //     "TimeCount": 8,
  //     "DepID": "1501",
  //     "Actual_Output": 4601,
  //     "PPH": 25.01,
  //     "RFT": 100,
  //     "Count_Add": 0,
  //     "Count_Complete": 0
  //   },
  //   {
  //     "Article": "",
  //     "ShoeName": null,
  //     "Line": "GCD_C21",
  //     "Operator": 20,
  //     "TimeCount": 8,
  //     "DepID": "1500",
  //     "Actual_Output": 4343,
  //     "PPH": 27.14,
  //     "RFT": 100,
  //     "Count_Add": 0,
  //     "Count_Complete": 0
  //   }
  // ]);
    
  const [listData, setListData] = useState([
    {
      "Article": "",
      "ShoeName": "CAMPUS 00S W",
      "Line": "GCD_C09",
      "Operator": 0,
      "TimeCount": 8,
      "DepID": "1177",
      "Actual_Output": 0,
      "PPH": 0,
      "RFT": 0,
      "Count_Add": 0,
      "Count_Complete": 0
    },
    {
      "Article": "",
      "ShoeName": "COURT 24",
      "Line": "GCD_C08",
      "Operator": 0,
      "TimeCount": 8,
      "DepID": "1089",
      "Actual_Output": 0,
      "PPH": 0,
      "RFT": 0,
      "Count_Add": 0,
      "Count_Complete": 0
    },
    {
      "Article": "",
      "ShoeName": "LIGRA 7 M",
      "Line": "GCD_C01",
      "Operator": 0,
      "TimeCount": 8,
      "DepID": "1072",
      "Actual_Output": 0,
      "PPH": 0,
      "RFT": 0,
      "Count_Add": 0,
      "Count_Complete": 0
    },
    {
      "Article": "",
      "ShoeName": "D.O.N.",
      "Line": "GCD_C04",
      "Operator": 0,
      "TimeCount": 8,
      "DepID": "1075",
      "Actual_Output": 0,
      "PPH": 0,
      "RFT": 0,
      "Count_Add": 0,
      "Count_Complete": 0
    },
    {
      "Article": "",
      "ShoeName": "GRAND",
      "Line": "GCD_C10",
      "Operator": 0,
      "TimeCount": 8,
      "DepID": "1175",
      "Actual_Output": 0,
      "PPH": 0,
      "RFT": 0,
      "Count_Add": 0,
      "Count_Complete": 0
    },
    {
      "Article": "",
      "ShoeName": null,
      "Line": "GCD_C24",
      "Operator": 0,
      "TimeCount": 8,
      "DepID": "1652",
      "Actual_Output": 0,
      "PPH": 0,
      "RFT": 0,
      "Count_Add": 0,
      "Count_Complete": 0
    },
    {
      "Article": "",
      "ShoeName": "CRAZYFLIGHT",
      "Line": "GCD_C02",
      "Operator": 0,
      "TimeCount": 8,
      "DepID": "1073",
      "Actual_Output": 0,
      "PPH": 0,
      "RFT": 0,
      "Count_Add": 0,
      "Count_Complete": 0
    },
    {
      "Article": "",
      "ShoeName": null,
      "Line": "GCD_C07",
      "Operator": 0,
      "TimeCount": 8,
      "DepID": "1078",
      "Actual_Output": 0,
      "PPH": 0,
      "RFT": 0,
      "Count_Add": 0,
      "Count_Complete": 0
    },
    {
      "Article": "",
      "ShoeName": "GRAND",
      "Line": "GCD_C06",
      "Operator": 0,
      "TimeCount": 8,
      "DepID": "1077",
      "Actual_Output": 0,
      "PPH": 0,
      "RFT": 0,
      "Count_Add": 0,
      "Count_Complete": 0
    },
    {
      "Article": "",
      "ShoeName": "CAMPUS ADV",
      "Line": "GCD_C20",
      "Operator": 0,
      "TimeCount": 8,
      "DepID": "1499",
      "Actual_Output": 0,
      "PPH": 0,
      "RFT": 0,
      "Count_Add": 0,
      "Count_Complete": 0
    },
    {
      "Article": "",
      "ShoeName": "GRAND",
      "Line": "GCD_C05",
      "Operator": 0,
      "TimeCount": 8,
      "DepID": "1076",
      "Actual_Output": 0,
      "PPH": 0,
      "RFT": 0,
      "Count_Add": 0,
      "Count_Complete": 0
    },
    {
      "Article": "",
      "ShoeName": null,
      "Line": "GCD_C23",
      "Operator": 0,      "TimeCount": 8,
      "DepID": "1502",
      "Actual_Output": 0,
      "PPH": 0,
      "RFT": 0,
      "Count_Add": 0,
      "Count_Complete": 0
    },
    {
      "Article": "",
      "ShoeName": "COURT 24",
      "Line": "GCD_C03",
      "Operator": 0,      "TimeCount": 8,
      "DepID": "1074",
      "Actual_Output": 0,
      "PPH": 0,
      "RFT": 0,
      "Count_Add": 0,
      "Count_Complete": 0
    },
    {
      "Article": "",
      "ShoeName": null,
      "Line": "GCD_C22",
      "Operator": 0,      "TimeCount": 8,
      "DepID": "1501",
      "Actual_Output": 0,
      "PPH": 0,
      "RFT": 0,
      "Count_Add": 0,
      "Count_Complete": 0
    },
    {
      "Article": "",
      "ShoeName": null,
      "Line": "GCD_C21",
      "Operator": 0,      "TimeCount": 8,
      "DepID": "1500",
      "Actual_Output": 0,
      "PPH": 0,
      "RFT": 0,
      "Count_Add": 0,
      "Count_Complete": 0
    }
  ]);
    
  
    const [totalMP, setTotalMP] = useState(0);
  const [totalActualOutput, setTotalActualOutput] = useState(0);
  const [totalPPH, setTotalPPH] = useState(0);
  const [totalRFT, setTotalRFT] = useState(0);
  const getAPIcheck = async () => {
    await axios
      .get(BaseAPI + "/sfq/data_pph_all")
      .then((response) => {
        const data = response.data.data.sort((a, b) => {
          // Use localeCompare for string comparison to ensure correct sorting order
          return a.Line.localeCompare(b.Line);
        });
        const totalActualOutput = data.reduce((total, currentItem) => {
          return total + currentItem.Actual_Output;
        }, 0);
        const totalPPH = data.reduce((total, currentItem) => {
          return total + currentItem.PPH;
        }, 0);
        const totalRFT = data.reduce((total, currentItem) => {
          return total + currentItem.RFT;
        }, 0);
        const totalMP = data.reduce((total, currentItem) => {
          return total + currentItem.Operator;
        }, 0);
        setTotalActualOutput(totalActualOutput);
        setTotalMP(totalMP);
        setTotalPPH(totalPPH / data.length || 0);
        setTotalRFT(totalRFT / data.length || 0);
        setListData(data);
      })
      .catch(() => { });
  };
  useEffect(() => {
    // console.log('check ban đầu')
    // getAPIcheck();

    // const data = listData.sort((a, b) => {
    //   // Use localeCompare for string comparison to ensure correct sorting order
    //   return a.Line.localeCompare(b.Line);
    // });
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
    //   setListData(data);
  }, []);
  useEffect(() => {
    
    const interval = setInterval(() => {
      console.log('check 2')
      getAPIcheck();
    }, 120000); // 2 phút là 120000 miligiây

    // Cleanup function to clear the interval when the component unmounts or the effect is re-run
    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" overflow-hidden relative h-screen px-2 pt-3">
      <div className="text-white text-6xl text-center font-bold pb-5">
        Stock Fitting Quality
      </div>
      <div className="absolute w-[100%] mt-5 h-3/5  m-0 grid grid-cols-1  ">
        <div className="grid-cols-1">
          {/* <table className="table w-full  pl-3 pr-6 text-white border-separate border-spacing-y-1 ">
            <thead>
              <tr className="backdrop-brightness-125 bg-blue-950/40  ">
                <th className="text-blue-400 w-32 text-lg text-center">Lean</th>
                <th className="text-blue-400 w-12 text-lg text-center">MP</th>
                <th className="text-blue-400 w-24 text-lg text-center">
                  Actual Output
                </th>
                <th className="text-blue-400 w-18 text-lg text-center">PPH</th>
                <th className="text-blue-400 w-24 text-lg text-center">RFT</th>
                <th className="text-blue-400 w-32 text-lg text-center">
                  Shoe Name
                </th>
                <th className="text-blue-400 w-64 text-lg text-center">
                  Stop Line
                </th>
              </tr>
            </thead>
            <tbody>
              {listData &&
                listData.map((item, index) => {
                  return (
                    <tr
                      key={`list` + index}
                      className="backdrop-brightness-125 bg-blue-950/60 "
                    >
                      <td className="text-base text-center text-blue-300">
                        {item.Line}
                      </td>
                      <td className="text-base text-center text-yellow-400">
                        {item.Operator}
                      </td>
                      <td className="text-base text-center text-yellow-400">
                        {item.Actual_Output}
                      </td>
                      <td className="text-base text-center text-yellow-400">
                        {item.PPH}
                      </td>
                      <td className="text-base text-center text-yellow-400">
                        {item.RFT}%
                      </td>
                      <td className="text-base text-yellow-400">
                        {item.ShoeName}
                      </td>
                      <td className="text-base text-center"></td>
                    </tr>
                  );
                })}
            </tbody>
          </table> */}
        </div>
        <div className="col-span-2  m-0 ">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500} 
            height={300}
            data={listData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {/* <CartesianGrid stroke="#f5f5f5" /> */}
            <XAxis dataKey="Line"  />
            <YAxis  yAxisId="left"  type="number" domain={[0, 120]}  />
            <Tooltip />
            <YAxis   yAxisId="right"  dataKey="Actual_Output" orientation="right" allowDataOverflow={false} />
            <Bar yAxisId="left"   label={{position:'top', fill:'#ffffff',  fontSize:'20px'}} dataKey="Operator" fill="#0000FF" activeBar={<Rectangle fill="#0000FF" stroke="blue" />} />
            <Bar yAxisId="left"   label={{position:'top', fill:'#ffffff',  fontSize:'20px'}} dataKey="PPH" fill="#FF0000" activeBar={<Rectangle fill="#FF0000" stroke="purple" />} />
            <Bar yAxisId="left"   label={{position:'top', fill:'#ffffff',  fontSize:'20px'}} dataKey="RFT" fill="#FFD700" activeBar={<Rectangle fill="#FFD700" stroke="purple" />} />
            <Line yAxisId="right" label={{position:'top', fill:'#ffffff',  fontSize:'20px'}} type="monotone" dataKey="Actual_Output" stroke="#ffffff" />
            <Legend />
          
          </ComposedChart>
        </ResponsiveContainer>

        </div>

      </div>
      <div className=" px-6 absolute bottom-2 h-1/4 w-full">
        <table className=" text-xl table  w-full text-white border-separate border-spacing-y-1">
          <thead>
            <tr key={'sfqlean'} className="backdrop-brightness-125 bg-blue-950/40  ">
              <th className="text-left text-blue-400">Lean</th>
              {listData &&
                listData.map((item, index) => {
                  return (
                    <th className="text-blue-300">{item.Line}</th>
                  )
                })}
              <th className="text-yellow-400 backdrop-brightness-125 bg-blue-950/20">Total</th>
            </tr>

          </thead>
          <tbody>
            <tr key={'sfqmp'} className="backdrop-brightness-125  bg-blue-950/60 ">
              <th className="text-left text-blue-400">MP</th>
              {listData &&
                listData.map((item) => {
                  return (
                    <th className="text-[#4169E1]">{item.Operator}</th>
                  )
                })}
              <th className="text-yellow-400 backdrop-brightness-125 bg-blue-950/20">{totalMP}</th>
            </tr>
            <tr key={'sfqaq'} className="backdrop-brightness-125 bg-blue-950/60 ">
              <th className="text-left text-blue-400">Actual Output</th>
              {listData &&
                listData.map((item) => {
                  return (
                    <th className="text-[#ffffff]">{item.Actual_Output}</th>
                  )
                })}
              <th className="text-yellow-400 backdrop-brightness-125 bg-blue-950/20">{totalActualOutput}</th>

            </tr>
            <tr key={'sfqpph'} className="backdrop-brightness-125 bg-blue-950/60 ">
              <th className="text-left text-blue-400">PPH</th>
              {listData &&
                listData.map((item) => {
                  return (
                    <th className="text-[#FF0000]">{item.PPH}</th>
                  )
                })}
              <th className="text-yellow-400 backdrop-brightness-125 bg-blue-950/20">{parseFloat(totalPPH).toFixed(2)}</th>

            </tr>
            <tr key={'sfqrft'} className="backdrop-brightness-125 bg-blue-950/60 ">
              <th className="text-left text-blue-400">RFT</th>
              {listData &&
                listData.map((item) => {
                  return (
                    <th className="text-[#FFD700]">{item.RFT && item.RFT !==0 ? item.RFT +'%' : ''}</th>
                  )
                })}
              <th className="text-yellow-400 backdrop-brightness-125 bg-blue-950/20"> {totalRFT && totalRFT != 0 ? parseFloat(totalRFT).toFixed(2) +'%': ''}</th>

            </tr>
            <tr key={'sfqshoes'} className="backdrop-brightness-125 bg-blue-950/40  ">
              <th className="text-left text-blue-400">Shoe Name</th>
              {listData &&
                listData.map((item, index) => {
                  return (
                    <td className="text-yellow-700 text-center">{item.ShoeName}</td>
                  )
                })}
              <th ></th>

            </tr>
            <tr key={'sfqstopline'} className="backdrop-brightness-125 bg-blue-950/60 ">
              <th className="text-left text-blue-400">Stop Line</th>
              {listData &&
                listData.map((item) => {
                  return (
                    <th >{item.Count_Complete === 0 ? '' : item.Count_Complete}</th>
                  )
                })}
              <th ></th>

            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
};
export default StockFittingQuality;

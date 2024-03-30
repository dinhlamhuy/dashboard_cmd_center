import { useEffect, useState } from "react";
import { BaseAPI } from "../../utils/baseApi";
import axios from "axios";
import {Data} from './data'
const Availability_KPI = () => {
    const [listData, setListData] = useState(Data)
    const getAPIcheck = async () => {
        await axios
          .get(BaseAPI + "/akpi/get_data_availabitykpi")
          .then((response) => {
            setListData(response.data.data)
          })}
          useEffect(() => {
            // console.log('check ban đầu')
            getAPIcheck();
          }, []);
  return (
    
      <div clasName="relative h-screen px-2 pt-3 pt-10">
       <div className="text-white text-6xl text-center font-bold my-12  pb-3">AVAILABILITY KPI 2024</div>
        <div className="px-24 mt-10 flex justify-center items-center ">
            <table className="table table-fixed w-[80%]">
                <thead>
                    <tr>
                        <th className="border font-bold text-lg border-2 text-white">Month</th>
                        <th className="border font-bold text-lg border-2 text-white">SDP <br /> Total Qty</th>
                        <th className="border font-bold text-lg border-2 text-white">CRD <br /> Total Qty</th>
                        <th className="border font-bold text-lg border-2 text-white">SDP <br /> Achieved</th>
                        <th className="border font-bold text-lg border-2 text-white">MDP <br /> Achieved</th>
                        <th className="border font-bold text-lg border-2 text-white">Efficiency <br /> Target %</th>
                        <th className="border font-bold text-lg border-2 text-white">Efficiency <br /> Actual %</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {listData && listData.map((item)=>{
                        return (
                            <tr>
                        
                            <th className="border text-lg border-2 p-2.5 text-center text-white ">{item.Names}</th>
                            <td className="border text-lg border-2 p-2.5 text-right text-yellow-400">{item.SDPQtyTotal.toLocaleString('en-US')}</td>
                            <td className="border text-lg border-2 p-2.5 text-right text-yellow-400">{item.CRDQtyTotal.toLocaleString('en-US')}</td>
                            <td className="border text-lg border-2 p-2.5 text-right text-yellow-400">{item.SDP}</td>
                            <td className="border text-lg border-2 p-2.5 text-right text-yellow-400">{item.MDP}</td>
                            <td className="border text-lg border-2 p-2.5 text-right text-yellow-400">{item.Efficiency_Target}</td>
                            <td className="border text-lg border-2 p-2.5 text-right text-yellow-400">{item.Efficiency_Actual}</td>
                  
                            
                        </tr>
                        )
                    })}
                
                </tbody>
            </table>

        </div>
      </div>
    
  );
};
export default Availability_KPI;

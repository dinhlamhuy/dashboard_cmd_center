import { useEffect, useState } from "react";
import { BaseAPI } from "../../utils/baseApi";
import axios from "axios";
import {Data} from './data'
import { useTranslation } from "react-i18next";
const Availability_KPI = () => {
    const {t}= useTranslation();
    const [listData, setListData] = useState(Data)
    const getAPIcheck = async () => {
        await axios
          .get(BaseAPI + "/Get_Data_Availability_KPI")
          .then((response) => {
            setListData(response.data.Availability_2024)
          })}
          useEffect(() => {
            // console.log('check ban đầu')
            getAPIcheck();
          }, []);
  return (
    
      <div className="relative h-screen px-2 pt-3 pt-10">
       <div className="text-white text-[48px] text-center font-bold uppercase  mt-4">{t('availability_KPI.title')} 2024</div>
        <div className="px-24  flex justify-center items-center mt-10">
            <table className="mt-5 table table-fixed w-[80%]">
                <thead>
                    <tr>
                        <th className="border font-bold text-lg border-2 text-white">{t('availability_KPI.Month')}</th>
                        <th className="border font-bold text-lg border-2 text-white">SDP <br /> {t('availability_KPI.Total_Qty')}</th>
                        <th className="border font-bold text-lg border-2 text-white">CRD <br /> {t('availability_KPI.Total_Qty')}</th>
                        <th className="border font-bold text-lg border-2 text-white">SDP <br /> {t('availability_KPI.Achieved')} %</th>
                        <th className="border font-bold text-lg border-2 text-white">MDP <br /> {t('availability_KPI.Achieved')} %</th>
                        <th className="border font-bold text-lg border-2 text-white">{t('availability_KPI.Efficiency_Target1')} <br /> {t('availability_KPI.Efficiency_Target2')} %</th>
                        <th className="border font-bold text-lg border-2 text-white">{t('availability_KPI.Efficiency_Actual1')} <br /> {t('availability_KPI.Efficiency_Actual2')} %</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {listData && listData.map((item,index)=>{
                        return (
                            <tr key={index}>
                        
                            <th className="border font-bold text-lg border-2 px-2.5 py-0.5 text-center text-white ">{item.Names}</th>
                            <td className="border font-bold text-lg border-2 px-2.5 py-0.5 text-right text-yellow-400">{item.SDPQtyTotal.toLocaleString('en-US')}</td>
                            <td className="border font-bold text-lg border-2 px-2.5 py-0.5 text-right text-yellow-400">{item.CRDQtyTotal.toLocaleString('en-US')}</td>
                            <td className="border font-bold text-lg border-2 px-2.5 py-0.5 text-right text-yellow-400">{item.SDP}</td>
                            <td className="border font-bold text-lg border-2 px-2.5 py-0.5 text-right text-yellow-400">{item.MDP}</td>
                            <td className="border font-bold text-lg border-2 px-2.5 py-0.5 text-right text-yellow-400">{item.Efficiency_Target}</td>
                            <td className="border font-bold text-lg border-2 px-2.5 py-0.5 text-right text-yellow-400">{item.Efficiency_Actual}</td>
                  
                            
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

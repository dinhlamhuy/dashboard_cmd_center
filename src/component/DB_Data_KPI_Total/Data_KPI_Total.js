import './Data_KPI_Total.css'
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid,   ResponsiveContainer } from 'recharts';
import { dataKIP } from './Data';
import { useEffect, useState } from "react";
import { BaseAPI } from "../../utils/baseApi";
import axios from "axios";
import { useTranslation } from 'react-i18next';

const Data_KPI_Total = () => {

    const {t}= useTranslation();

    const [data, setData] = useState(dataKIP)
    const getAPIcheck = async () => {
        await axios
          .get(BaseAPI + "/Get_Data_KPI_Detail")
          .then((response) => {
            console.log(response.data.KD);
         if(response.data.KD[0] !== null &&  response.data.KD[0] !== undefined){

             setData(response.data.KD);
         }
          })
          .catch(() => {});
      };
      useEffect(() => {
        getAPIcheck();
      const intervalId = setInterval(() => {
        getAPIcheck();
      }, 60 * 60 * 1000); // 4 phút trong milliseconds

      return () => clearInterval(intervalId); // Cleanup function to clear interval when component unmounts
    }, []);


    return (
        <div className=" w-full h-full px-2">
            <div className="Quality_Data_KPI_Total_container pt-6">
                <div className='Quality_Data_KPI_Total_header mb-10'>
                    <span className='title   uppercase font-bold  tracking-[.09em] '>{t('quality_kpi_total.title')}</span>
                </div>
                <div className='Quality_Data_KPI_Total_main'>
                    <table className='Data_KPI_Total_table table-fixed'>
                        <thead>
                            <tr className='text-[2rem] leading-10'>
                                {/* <th className='table-header font-bold  w-16' style={{ background: 'rgb(0,168,236)' }}>{t('quality_kpi_total.Year')}</th>
                                <th className='table-header font-bold  w-16' style={{ background: 'rgb(0,168,236)' }}>{t('quality_kpi_total.Factory')}</th> */}
                                <th className='table-header  text-orange-500 font-bold w-32' style={{ background: 'rgb(255,255,0)' }}>{t('quality_kpi_total.KPIName')}</th>
                                <th className='table-header  text-white font-bold w-14'>{t('quality_kpi_total.Jan')}</th>
                                <th className='table-header  text-white font-bold w-14'>{t('quality_kpi_total.Feb')}</th>
                                <th className='table-header  text-white font-bold w-14'>{t('quality_kpi_total.Mar')}</th>
                                <th className='table-header  text-white font-bold w-14'>{t('quality_kpi_total.Apr')}</th>
                                 { data && data[0].May !==0 && (<th className='table-header text-white font-bold w-14'>{t('quality_kpi_total.May')}</th>)}
                                 { data && data[0].Jun !==0 && (<th className='table-header text-white font-bold w-14'>{t('quality_kpi_total.Jun')}</th>)}
                                 { data && data[0].Jul !==0 && (<th className='table-header text-white font-bold w-14'>{t('quality_kpi_total.Jul')}</th>)}
                                 { data && data[0].Aug !==0 && (<th className='table-header text-white font-bold w-14'>{t('quality_kpi_total.Aug')}</th>)}
                                 { data && data[0].Sep !==0 && (<th className='table-header text-white font-bold w-14'>{t('quality_kpi_total.Sep')}</th>)}
                                 { data && data[0].Oct !==0 && (<th className='table-header text-white font-bold w-14'>{t('quality_kpi_total.Oct')}</th>)}
                                 { data && data[0].Nov !==0 && (<th className='table-header text-white font-bold w-14'>{t('quality_kpi_total.Nov')}</th>)}
                                 { data && data[0].Dec !==0 && (<th className='table-header text-white font-bold w-14'>{t('quality_kpi_total.Dec')}</th>)}
                                <th className='table-header  text-white font-bold w-14'>{t('quality_kpi_total.Total')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item, index) => (
                                <tr className='hang text-[2rem] leading-8 border' key={index}>
                                    {/* <td className='p-1.5 text-green-400 w-12'>{item.Year}</td>
                                    <td className='p-1.5 text-blue-100 w-12'>{item.Factory}</td> */}
                                    <td className='px-1.5 py-2.5 text-left font-bold yellow   w-64 '>{item.KPI_Name}</td>
                                    <td className='px-1.5 py-2.5 text-center font-bold text-blue-200 '>{item.Jan.toLocaleString('vi-VN')}</td>
                                    <td className='px-1.5 py-2.5 text-center font-bold text-blue-200 '>{item.Feb.toLocaleString('vi-VN')}</td>
                                    <td className='px-1.5 py-2.5 text-center font-bold text-blue-200 '>{item.Mar.toLocaleString('vi-VN')}</td>
                                    <td className='px-1.5 py-2.5 text-center font-bold text-blue-200 '>{item.Apr.toLocaleString('vi-VN')}</td>
                                    { data[0].May !==0 && (<td className='px-1.5 py-2.5 text-center font-bold text-blue-200 '>{item.May.toLocaleString('vi-VN')}</td>)}
                                    { data[0].Jun !==0 && (<td className='px-1.5 py-2.5 text-center font-bold text-blue-200 '>{item.Jun.toLocaleString('vi-VN')}</td>)}
                                    { data[0].Jul !==0 && (<td className='px-1.5 py-2.5 text-center font-bold text-blue-200 '>{item.Jul.toLocaleString('vi-VN')}</td>)}
                                    { data[0].Aug !==0 && (<td className='px-1.5 py-2.5 text-center font-bold text-blue-200 '>{item.Aug.toLocaleString('vi-VN')}</td>)}
                                    { data[0].Sep !==0 && (<td className='px-1.5 py-2.5 text-center font-bold text-blue-200 '>{item.Sep.toLocaleString('vi-VN')}</td>)}
                                    { data[0].Oct !==0 && (<td className='px-1.5 py-2.5 text-center font-bold text-blue-200 '>{item.Oct.toLocaleString('vi-VN')}</td>)}
                                    { data[0].Nov !==0 && (<td className='px-1.5 py-2.5 text-center font-bold text-blue-200 '>{item.Nov.toLocaleString('vi-VN')}</td>)}
                                    { data[0].Dec !==0 && (<td className='px-1.5 py-2.5 text-center font-bold text-blue-200 '>{item.Dec.toLocaleString('vi-VN')}</td>)}
                                    <td className='px-1.5 py-2.5 text-center font-bold text-blue-200 '>{item.Total.toLocaleString('vi-VN')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <div className="Quality_Data_KPI_Total_Chart_container">
                <div className='Quality_Data_KPI_Total_header'>
                    <span className='title'>QUALITY KPI TOTAL CHART</span>
                </div>
                <div className='Quality_Data_KPI_Total_main'>
                    <ResponsiveContainer width="100%" height="100%" >
                        <BarChart data={data}>
                            <XAxis
                                dataKey="ID_QKPI"
                                tick={{ fill: '#21A8EC' }}
                            />
                            <YAxis
                                domain={[0, 25000000]}
                                tickCount={6}
                                tick={{ fill: '#21A8EC' }}
                                tickFormatter={(value) => value.toLocaleString('vi-VN')}
                            />
                            <CartesianGrid stroke="#ccc" strokeDasharray="0" vertical={false} />
                            <Bar
                                dataKey="Total"
                                fill="rgb(238,126,52)"
                                barSize={50}
                                label={{
                                    position: 'top',
                                    formatter: (value) => value.toLocaleString('vi-VN'),
                                    fill: 'white'
                                }} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div> */}
        </div>
    )
}


export default Data_KPI_Total
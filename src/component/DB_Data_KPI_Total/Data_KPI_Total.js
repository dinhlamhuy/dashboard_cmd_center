import './Data_KPI_Total.css'
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid,   ResponsiveContainer } from 'recharts';
import { dataKIP } from './Data';
import { useEffect, useState } from "react";
import { BaseAPI } from "../../utils/baseApi";
import axios from "axios";

const Data_KPI_Total = () => {


    const [data, setData] = useState(dataKIP)
    const getAPIcheck = async () => {
        await axios
          .get(BaseAPI + "/datakpi/get_data_kpi")
          .then((response) => {
            // console.log(response.data.data);
            setData(response.data.data);
          })
          .catch(() => {});
      };
  useEffect(() => {
    getAPIcheck();
  }, []);
 

    return (
        <div className="Data_KPI_Total_container">
            <div className="Quality_Data_KPI_Total_container">
                <div className='Quality_Data_KPI_Total_header'>
                    <span className='title'>QUALITY KPI TOTAL 2024</span>
                </div>
                <div className='Quality_Data_KPI_Total_main'>
                    <table className='Data_KPI_Total_table table-fixed'>
                        <thead>
                            <tr>
                                <th className='table-header' style={{ background: 'rgb(0,168,236)' }}>ID</th>
                                <th className='table-header' style={{ background: 'rgb(255,255,0)', color: 'red' }}>KPI Name</th>
                                <th className='table-header'>Jan</th>
                                <th className='table-header'>Feb</th>
                                <th className='table-header'>Mar</th>
                                <th className='table-header'>Apr</th>
                                <th className='table-header'>May</th>
                                <th className='table-header'>Jun</th>
                                <th className='table-header'>Jul</th>
                                <th className='table-header'>Aug</th>
                                <th className='table-header'>Sep</th>
                                <th className='table-header'>Oct</th>
                                <th className='table-header'>Nov</th>
                                <th className='table-header'>Dec</th>
                                <th className='table-header'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item, index) => (
                                <tr className='hang' key={index}>
                                    <td className='blue'>{item.ID_QKPI}</td>
                                    <td className='yellow text-left pl-10 pr-0 w-64 '>{item.KPI}</td>
                                    <td className='text-blue-200 '>{item.Jan.toLocaleString('vi-VN')}</td>
                                    <td className='text-blue-200 '>{item.Feb.toLocaleString('vi-VN')}</td>
                                    <td className='text-blue-200 '>{item.Mar.toLocaleString('vi-VN')}</td>
                                    <td className='text-blue-200 '>{item.Apr.toLocaleString('vi-VN')}</td>
                                    <td className='text-blue-200 '>{item.May.toLocaleString('vi-VN')}</td>
                                    <td className='text-blue-200 '>{item.Jun.toLocaleString('vi-VN')}</td>
                                    <td className='text-blue-200 '>{item.Jul.toLocaleString('vi-VN')}</td>
                                    <td className='text-blue-200 '>{item.Aug.toLocaleString('vi-VN')}</td>
                                    <td className='text-blue-200 '>{item.Sep.toLocaleString('vi-VN')}</td>
                                    <td className='text-blue-200 '>{item.Oct.toLocaleString('vi-VN')}</td>
                                    <td className='text-blue-200 '>{item.Nov.toLocaleString('vi-VN')}</td>
                                    <td className='text-blue-200 '>{item.Dec.toLocaleString('vi-VN')}</td>
                                    <td className='text-blue-200 '>{item.Total.toLocaleString('vi-VN')}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="Quality_Data_KPI_Total_Chart_container">
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
                            {/* <Tooltip
                                contentStyle={{ color: 'red' }}
                            /> */}
                            <Bar
                                dataKey="Total"
                                fill="rgb(238,126,52)"
                                barSize={50}
                                label={{
                                    position: 'top',
                                    formatter: (value) => value.toLocaleString('vi-VN'),
                                    fill: 'white' // Đổi màu chữ thành trắng
                                }} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}


export default Data_KPI_Total
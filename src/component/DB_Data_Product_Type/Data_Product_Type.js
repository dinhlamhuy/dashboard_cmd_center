/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import { BaseAPI } from "../../utils/baseApi";
import axios from "axios";
import { currentDate } from "../../utils/time";
// import { Data } from "./data";
const Data_Product_Type = () => {
  const [listData, setListData] = useState([]);
  const getAPIcheck = async () => {
    await axios
      .get(BaseAPI + "/dpt/get_data_product_type")
      .then((response) => {
        // console.log(response.data.data);
        setListData(response.data.data);
      })
      .catch(() => {});
  };
  useEffect(() => {
    getAPIcheck();
  }, []);
  return (
    <>
      <div className="">
        <p className="text-center text-white text-3xl font-bold ">
          {currentDate}
        </p>
        <p className="text-center text-white text-3xl font-bold ">
          BÁO CÁO SẢN LƯỢNG NGÀY {currentDate} (TỪ 7h00---&gt;16H00)
        </p>
        <div className="px-6 mt-2">
          <table className="table table-fixed flex justify-start  w-full border-separate border-spacing-y-1">
            <thead>
              <tr className="backdrop-brightness-125 bg-blue-700">
                <th className="text-sm text-white w-8 ">序號 STT</th>
                <th className="text-sm text-white w-20 ">型体 MODEL NAME</th>
                <th className="text-sm text-white w-12 ">底模 TOOL</th>
                <th className="text-sm text-white w-12  ">
                  收到底厂的数量 <br /> SẢN LƯỢNG ĐẾ <br />XƯỞNG NHẬP KHO
                </th>
                <th className="text-sm text-white w-16  ">倉庫發料<br />SẢN LƯỢNG PHÁT HÀNG<br />KHO ĐẾ LỚN
                </th>
                <th className="text-sm text-white w-12 ">底加工入庫數量<br />SẢN LƯỢNG<br />GCD GIAO
                </th>
                <th className="text-sm text-white w-12 ">
                  成型領料
                  <br />
                  SẢN LƯỢNG
                  <br />
                  PHÁT GÒ
                </th>
              </tr>
            </thead>
            <tbody>
              {listData &&
                listData.map((item, index) => {
                  return (
                    <tr
                      key={"sl" + index}
                      className="backdrop-brightness-125 bg-blue-950/40"
                    >
                      <td className={` text-sm text-center text-blue-300 `}>
                        {item.Num}
                      </td>
                      <td className=" text-sm text-blue-300 text-left ">
                        {item.Model_Name}
                      </td>
                      <td className=" text-sm text-yellow-300  text-center">
                        {item.Tool}
                      </td>
                      <td className=" text-sm text-yellow-300  text-center">
                        {item.Qty_Sole}
                      </td>
                      <td className=" text-sm text-yellow-300  text-center">
                        {item.Qty_KDL}
                      </td>
                      <td className=" text-sm text-yellow-300  text-center">
                        {item.Qty_GCD}
                      </td>

                      <td className=" text-sm text-yellow-300  text-center">
                        {item.Qty_GO}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Data_Product_Type;

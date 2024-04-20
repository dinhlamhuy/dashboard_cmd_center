/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import { BaseAPI } from "../../utils/baseApi";
import axios from "axios";
import moment from "moment";

const Shipping_Shedule = () => {
  const [getShippingMain, setGetShippingMain] = useState([]);
  const [getShippingDetail, setGetShippingDetail] = useState([]);
  const [totalShippingMain, setTotalShippingMain] = useState({});
  const [totalShippingDetail, setTotalShippingDetail] = useState({});
  const getAPIcheck = async () => {
    await axios
      .get(BaseAPI + "/shipping/getshippingschedule")
      .then((response) => {
        let totalMainPO=0;
        let totalMainQty=0;
        let totalMainUnScanQty=0;
        let totalMainInspect=0;

        let totalDetailQty=0;
        let totalDetailUnScan=0;
        let totalDetailScanQty=0;
        // console.table(response.data.data);
        setGetShippingMain(response.data.data.Get_Shipping_Main);
        response.data.data && response.data.data.Get_Shipping_Main.map((item) => {
          totalMainPO+=Number(item.PO)
          totalMainQty+=Number(item.Qty)
          totalMainUnScanQty+=Number(item.UnPack)
          totalMainInspect+=Number(item.WaitInspect)

        });
        setTotalShippingMain({
          totalMainPO:totalMainPO,
          totalMainQty:totalMainQty,
          totalMainUnScanQty:totalMainUnScanQty,
          totalMainInspect:totalMainInspect,

        })
    
        setGetShippingDetail(response.data.data.Get_Shipping_Detail);

        response.data.data && response.data.data.Get_Shipping_Detail.map((item, index) => {
          totalDetailQty+=Number(item.Qty)
          totalDetailUnScan+=Number(item.UnPack)
          totalDetailScanQty+=Number(item.FQty)
        });
        setTotalShippingDetail({
          totalDetailQty:totalDetailQty,
          totalDetailUnScan:totalDetailUnScan,
          totalDetailScanQty:totalDetailScanQty
        })


      })
      .catch(() => {});
  };
  useEffect(() => {
    getAPIcheck();
  }, []);

  return (
    <div className="w-full h-screen px-4 ">
      <div className="w-full flex justify-center">
        <p className="text-4xl text-white text-center font-bold ">
          Shipping Shedule
        </p>
      </div>
      <div className="grid grid-cols-3 text-white  h-[90%] gap-x-3">
        <div className="bg-teal-950  h-[100%]  text-white relative  my-3 w-full">
          <table className="table table-fixed w-full text-xs">
            <thead className="h-12 bg-gray-950">
              <tr>
                <th className="text-blue-400">ShipDate</th>
                <th className="text-blue-400">PO</th>
                <th className="text-blue-400">Ship Qty</th>
                <th className="text-blue-400">UnScan Qty</th>
                <th className="text-blue-400">Wait Inspect</th>
              </tr>
            </thead>
            <tbody>
              {getShippingMain && getShippingMain.map((item, index) =>{
                return (
              <tr>
                <td className="text-center text-green-400">{moment(item.ShipDate, "YYYY-MM-DD").format(
                          "YYYY/MM/DD"
                        )}</td>
                <td className="text-center text-blue-300">{item.PO}</td>
                <td className="text-center text-blue-300">{item.Qty}</td>
                <td className="text-center text-orange-500">{item.UnPack}</td>
                <td className="text-center text-yellow-300">{item.WaitInspect}</td>
              </tr>

                )
              })}
            </tbody>
            <tfoot className="absolute h-12 table-fixed bottom-0 w-full  table bg-gray-700  ">
              <tr>
                <td className="text-center text-green-400">Total</td>
                <td className="text-center text-blue-300">{totalShippingMain ? totalShippingMain.totalMainPO : 0}</td>
                <td className="text-center text-blue-300">{totalShippingMain ? totalShippingMain.totalMainQty :0}</td>
                <td className="text-center text-orange-500">{totalShippingMain ? totalShippingMain.totalMainUnScanQty :0}</td>
                <td className="text-center text-yellow-300">{totalShippingMain ? totalShippingMain.totalMainInspect :0}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="col-span-2 h-[100%] relative bg-teal-950 text-white   my-3 w-full">
          <table className="table  table-fixed w-full text-xs">
            <thead className="h-12 bg-gray-950">
              <tr>
                <th className=" w-12 text-blue-400">ShipDate</th>
                <th className=" w-12 text-blue-400">RY</th>
                <th className=" w-6 text-blue-400">Qty</th>
                <th className=" w-6 text-blue-400">Scan Qty</th>
                <th className=" w-6 text-blue-400">UnScan</th>
                <th className=" w-8 text-blue-400">Article</th>
                <th className=" w-16 text-blue-400">Shoe Name</th>
                <th className=" w-8 text-blue-400">Lean</th>
                <th className=" w-12 text-blue-400">CRD</th>
                <th className=" w-12 text-blue-400">SDD</th>
                <th className=" w-12 text-blue-400">Country</th>
              </tr>
            </thead>
            <tbody>
              {getShippingDetail &&
                getShippingDetail.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="px-1 text-yellow-400  text-center">
                        {moment(item.ShipDate, "YYYY-MM-DD").format(
                          "YYYY/MM/DD"
                        )}
                      </td>
                      <td className="px-1 text-blue-300 text-center">
                        {item.RY}
                      </td>
                      <td className="px-1 text-blue-300 text-right">
                        {item.Qty}
                      </td>
                      <td className="px-1 text-blue-300 text-right">
                        {item.FQty}
                      </td>
                      <td className="px-1 text-orange-400 text-right">
                        {item.UnPack}
                      </td>
                      <td className="px-1 text-blue-300 text-right">
                        {item.Article}
                      </td>
                      <td className="px-2 text-blue-300">{item.XieMing.substring(0,12)}</td>
                      <td className="px-1 text-blue-300 text-center ">
                        {item.LEAN_A}
                      </td>
                      <td className="px-1 text-yellow-400 text-right">
                        {item.CRD
                          ? moment(item.CRD, "YYYY-MM-DD").format("YYYY/MM/DD")
                          : ""}
                      </td>
                      <td className="px-1 text-yellow-400 text-right">
                        {item.SDD
                          ? moment(item.SDD, "YYYY-MM-DD").format("YYYY/MM/DD")
                          : ""}
                      </td>
                      <td className="px-1 text-blue-400 text-right">{item.COUNTRYEN}</td>
                    </tr>
                  );
                })}
            </tbody>
            <tfoot className="absolute h-12 table-fixed bottom-0 w-full  table bg-gray-700  ">
              <tr>
                <td className="w-12 text-center text-base text-blue-300">Total</td>
                <td className="w-12 text-right"></td>
                <td className="w-6 text-blue-300 text-right">{totalShippingDetail.totalDetailQty}</td>
                <td className="w-6 text-blue-300 text-right">{totalShippingDetail.totalDetailScanQty}</td>
                <td className="w-6 text-orange-400 text-right">{totalShippingDetail.totalDetailUnScan}</td>
                <td className="w-8 "></td>
                <td className="w-16 "></td>
                <td className="w-8 "></td>
                <td className="w-8 "></td>
                <td className="w-12 "></td>
                <td className="w-12 "></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Shipping_Shedule;

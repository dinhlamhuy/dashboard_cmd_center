/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import { BaseAPI, BaseAPIScreen } from "../../utils/baseApi";
import axios from "axios";
import moment from "moment";
import { useTranslation } from "react-i18next";
const Shipping_Shedule = () => {
  const [getShippingMain, setGetShippingMain] = useState([]);
  const [getShippingDetail, setGetShippingDetail] = useState([]);
  const [totalShippingMain, setTotalShippingMain] = useState({});
  const [totalShippingDetail, setTotalShippingDetail] = useState({});
  const [length, setLength] = useState(0);
  const [count, setCount] = useState(0);

  const { t } = useTranslation();

  const getAPIcheck = async () => {
    await axios
      .get(BaseAPI + "/Get_Data_Prepare_Shipping")
      .then((response) => {
        let totalMainPO = 0;
        let totalMainQty = 0;
        let totalMainUnScanQty = 0;
        let totalMainInspect = 0;

        let totalDetailQty = 0;
        let totalDetailUnScan = 0;
        let totalDetailScanQty = 0;
        // console.table(response.data);
        setGetShippingMain(response.data.shipping_main);
        response.data &&
          response.data.shipping_main.map((item) => {
            totalMainPO += Number(item.PO);
            totalMainQty += Number(item.Ship_Qty);
            totalMainUnScanQty += Number(item.UnScan_Qty);
            totalMainInspect += Number(item.Wait_Inspect_PO);
          });
        setTotalShippingMain({
          totalMainPO: totalMainPO,
          totalMainQty: totalMainQty,
          totalMainUnScanQty: totalMainUnScanQty,
          totalMainInspect: totalMainInspect,
        });

        setGetShippingDetail(response.data.shipping_detail);
        setLength(response.data.shipping_detail.length);

        response.data &&
          response.data.shipping_detail.map((item, index) => {
            totalDetailQty += Number(item.Qty);
            totalDetailUnScan += Number(item.Scan_Qty);
            totalDetailScanQty += Number(item.UnScan_Qty);
          });
        setTotalShippingDetail({
          totalDetailQty: totalDetailQty,
          totalDetailUnScan: totalDetailUnScan,
          totalDetailScanQty: totalDetailScanQty,
        });
      })
      .catch(() => {});
  };
  useEffect(() => {
    getAPIcheck();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (length < 20) {
        getAPIcheck();
      }
    }, 4 * 60 * 1000); // 4 phút trong milliseconds

    return () => clearInterval(intervalId); // Cleanup function to clear interval when component unmounts
  }, [length]); 
  useEffect(() => {
    const rotateList = () => {
      // if (getShippingDetail.length >= 20) {
        setCount(count + 1);
        setGetShippingDetail((prevList) => {
          const newList = [...prevList];
          const first15 = newList.splice(0, 1); // Extracting the first 15 objects
          newList.push(...first15); // Appending the extracted objects to the end
          return newList;
        });
     
    };

    const interval = setInterval(() => {
      rotateList();
      // getAPIcheck();
    }, 1100); // 15 seconds in milliseconds
    if (count === length - 10) {
      getAPIcheck();
      setCount(0); // Reset count
    }
    return () => clearInterval(interval); // Cleanup function to clear interval when component unmounts
  }, [getShippingDetail,count, length]);



  return (
    <div className="w-full h-screen px-4  ">
      <div className="w-full flex justify-center pt-3">
        <p className="text-[48px] text-white text-center font-bold  pb-2">
          {t("ShippingShedule.title")}
        </p>
      </div>
      <div className="grid grid-cols-3   text-white  h-fit gap-x-6">
        <div className=" text-white bg-blue-950/50   relative  mt-3 w-full">
          <table className="table table-fixed w-full ">
            <thead className="h-12 bg-gray-950">
              <tr className=" text-lg font-bold">
                <th
                  className="text-blue-400"
                  dangerouslySetInnerHTML={{
                    __html: t("ShippingShedule.ShipDate"),
                  }}
                ></th>
                <th
                  className="text-blue-400"
                  dangerouslySetInnerHTML={{ __html: t("ShippingShedule.PO") }}
                ></th>
                <th
                  className="text-blue-400"
                  dangerouslySetInnerHTML={{
                    __html: t("ShippingShedule.Ship_Qty"),
                  }}
                ></th>
                <th
                  className="text-blue-400"
                  dangerouslySetInnerHTML={{
                    __html: t("ShippingShedule.UnScan_Qty"),
                  }}
                ></th>
                <th
                  className="text-blue-400"
                  dangerouslySetInnerHTML={{
                    __html: t("ShippingShedule.Wait_Inspect"),
                  }}
                ></th>
              </tr>
            </thead>
            <tbody className=" ">
              {getShippingMain &&
                getShippingMain.slice(0, 21).map((item, index) => {
                  return (
                    <tr key={"ae" + index} className="text-2xl font-bold ">
                      <td className="px-1 py-1 text-center text-green-400">
                        {moment(item.ShipDate, "YYYY-MM-DD").format(
                          "YYYY/MM/DD"
                        )}
                      </td>
                      <td className="px-1 py-1 text-right pr-8 text-blue-300">
                        {item.PO}
                      </td>
                      <td className="px-1 py-1 text-right pr-8 text-blue-300">
                        {item.Ship_Qty}
                      </td>
                      <td className="px-1 py-1 text-right pr-8 text-orange-500">
                        {item.UnScan_Qty}
                      </td>
                      <td className="px-1 py-1 text-right pr-8 text-yellow-300">
                        {item.Wait_Inspect_PO}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <table className="table bg-gray-800 table-fixed absolute  bottom-0  w-full ">
            <tbody className=" h-12 table-fixed  w-full  table  ">
              <tr className="font-bold text-2xl">
                <td className="text-center text-green-400">
                  {t("ShippingShedule.Total")}
                </td>
                <td className="text-center text-blue-300">
                  {totalShippingMain ? totalShippingMain.totalMainPO : 0}
                </td>
                <td className="text-center text-blue-300">
                  {totalShippingMain ? totalShippingMain.totalMainQty : 0}
                </td>
                <td className="text-center text-orange-500">
                  {totalShippingMain ? totalShippingMain.totalMainUnScanQty : 0}
                </td>
                <td className="text-center text-yellow-300">
                  {totalShippingMain ? totalShippingMain.totalMainInspect : 0}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-span-2  h-fit  relative text-white   py-3 w-full">
          <table className="table  table-fixed relative w-full ">
            <thead className="h-12 bg-gray-950 text-2xl">
              <tr>
                <th
                  className=" w-12 text-blue-400"
                  dangerouslySetInnerHTML={{
                    __html: t("ShippingShedule.ShipDate"),
                  }}
                ></th>
                <th
                  className=" w-16 text-blue-400"
                  dangerouslySetInnerHTML={{ __html: t("ShippingShedule.RY") }}
                ></th>
                <th
                  className=" w-6 text-blue-400"
                  dangerouslySetInnerHTML={{ __html: t("ShippingShedule.Qty") }}
                ></th>
                <th
                  className=" w-6 text-blue-400 "
                  dangerouslySetInnerHTML={{
                    __html: t("ShippingShedule.Scan_Qty"),
                  }}
                ></th>
                <th
                  className=" w-8 text-blue-400 "
                  dangerouslySetInnerHTML={{
                    __html: t("ShippingShedule.UnScan"),
                  }}
                ></th>
                <th className=" w-8 text-blue-400">
                  {t("ShippingShedule.Article")}
                </th>
                <th className=" w-16  text-blue-400">
                  {t("ShippingShedule.Shoe_Name")}
                </th>
                <th className=" w-12 text-blue-400">
                  {t("ShippingShedule.Lean")}
                </th>
                <th
                  className=" w-12 text-blue-400"
                  dangerouslySetInnerHTML={{ __html: t("ShippingShedule.CRD") }}
                ></th>
                <th
                  className=" w-10 text-blue-400"
                  dangerouslySetInnerHTML={{ __html: t("ShippingShedule.SDD") }}
                ></th>
                <th className=" w-12 text-blue-400">
                  {t("ShippingShedule.Country")}
                </th>
              </tr>
            </thead>
            <tbody className=" bg-blue-950/50">
              {getShippingDetail &&
                getShippingDetail.slice(0, 21).map((item, index) => {
                  return (
                    <tr key={"as" + index} className="text-2xl font-bold">
                      <td className="pl-2 pr-1 text-xl py-1 text-yellow-400   ">
                        {moment(item.ShipDate, "YYYY-MM-DD").format(
                          "YYYY/MM/DD"
                        )}
                      </td>
                      <td className=" py-1 text-blue-300 text-xl text-left pl-4">
                        {item.RY}
                      </td>
                      <td className="px-1 py-1 text-blue-300 text-right">
                        {item.Qty}
                      </td>
                      <td className="px-1 py-1 text-blue-300 text-right">
                        {item.Scan_Qty}
                      </td>
                      <td className="px-1 py-1 text-orange-400 text-center">
                        {item.UnScan_Qty}
                      </td>
                      <td className="px-1 py-1 text-blue-300 text-right pr-4">
                        {item.Article}
                      </td>
                      <td className="pl-3 py-1 text-xl text-blue-300 text-left">
                        {item.ShoeName.substring(0, 12)}
                      </td>
                      <td className=" text-blue-300 text-center ">
                        {item.LEAN_A}
                      </td>
                      <td className="px-1 py-1 text-yellow-400 text-xl  text-center">
                        {item.CRD && item.CRD != '0001-01-01T00:00:00'
                          ? moment(item.CRD, "YYYY-MM-DD").format("YYYY/MM/DD")
                          : ""}
                      </td>
                      <td className="px-1 py-1 text-yellow-400 text-xl  text-center">
                        {item.SDD
                          ? moment(item.SDD, "YYYY-MM-DD").format("YYYY/MM/DD")
                          : ""}
                      </td>
                      <td className="pr-2 pl-1 py-1 text-blue-400 text-lg text-right">
                        {item.COUNTRY}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <table className="table bg-gray-800  table-fixed absolute bottom-0 w-full ">
            <tbody className=" h-12 table-fixed  w-full  table   ">
              <tr className="text-2xl font-bold">
                <td className="w-12 text-center text-blue-300">
                  {t("ShippingShedule.Total")}
                </td>
                <td className="w-14 text-right"></td>
                <td className="w-6 pr-4 text-blue-300 text-right">
                  {totalShippingDetail.totalDetailQty}
                </td>
                <td className="w-6 pl-2 text-blue-300 text-right">
                  {totalShippingDetail.totalDetailScanQty}
                </td>
                <td className="w-6 pl-5 text-orange-400 text-right">
                  {totalShippingDetail.totalDetailUnScan}
                </td>
                <td className="w-8 "></td>
                <td className="w-16 "></td>
                <td className="w-12 "></td>
                <td className="w-12"></td>
                <td className="w-10 "></td>
                <td className="w-12 "></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Shipping_Shedule;
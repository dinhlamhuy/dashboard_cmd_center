/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import { useEffect, useState } from "react";
import { BaseAPI } from "../../utils/baseApi";
import axios from "axios";
import { useTranslation } from "react-i18next";
// import bgImg from "../../assets/image/background.jpg";
const AssemblyQuality = () => {
  const [listData, setListData] = useState([]);
  const [totalMP, setTotalMP] = useState(0);
  const [totalActualOutput, setTotalActualOutput] = useState(0);
  const [totalPPH, setTotalPPH] = useState(0);
  const [totalRFT, setTotalRFT] = useState(0);
const {t}=useTranslation();
  const getAPIcheck = async () => {
    await axios
      .get(BaseAPI + "/aq/data_assembly_quality")
      .then((response) => {
        setListData(response.data.data);
      })
      .catch(() => {});
  };
  useEffect(() => {
    getAPIcheck();
  }, []);

  useEffect(() => {
    // const data = listData.sort((a, b) => {
    //         // Use localeCompare for string comparison to ensure correct sorting order
    //         return a.Line.localeCompare(b.Line);
    //       });
    const data = listData;
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
    //   setListData(data);
  }, [listData]);

  useEffect(() => {
    const rotateList = () => {
      setListData((prevList) => {
        const newList = [...prevList];
        const first15 = newList.splice(0, 1); // Extracting the first 15 objects
        newList.push(...first15); // Appending the extracted objects to the end
        return newList;
      });
    };

    const interval = setInterval(() => {
      rotateList();
    }, 2000); // 15 seconds in milliseconds

    return () => clearInterval(interval); // Cleanup function to clear interval when component unmounts
  }, []);

  return (
    <div className=" overflow-hidden h-screen w-full px-2 pt-3">
      <div className="w-full h-full">

      <div className="text-white w-full text-4xl text-center font-bold pb-5">
        {t('assembly_quality.title')}
      </div>
      <div className="grid grid-cols-2 w-full">
        <div>
          <table className="table w-full  pl-3 pr-6 text-white border-separate border-spacing-y-1 ">
            <thead>
              <tr className="backdrop-brightness-125 bg-blue-950/40  ">
                <th className="text-blue-400 w-32 text-lg text-center">{t('assembly_quality.Lean')}</th>
                <th className="text-blue-400 w-12 text-lg text-center">{t('assembly_quality.MP')}</th>
                <th className="text-blue-400 w-24 text-md text-center">
                          {t('assembly_quality.Actual')}<br />{t('assembly_quality.Output')}

                </th>
                <th className="text-blue-400 w-18 text-lg text-center">{t('assembly_quality.PPH')}</th>
                <th className="text-blue-400 w-24 text-lg text-center">{t('assembly_quality.RFT')}</th>
                <th className="text-blue-400 w-32 text-lg text-center">
                  {t('assembly_quality.Shoe_Name')}
                </th>
                <th className="text-blue-400 w-64 text-lg text-center">
                {t('assembly_quality.Stop_Line')}
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
          </table>
        </div>

        <div className="  text-white h-96 px-3 mx-5">
          <table className="table w-full border-separate border-spacing-y-1">
            <thead>
              <tr className="backdrop-brightness-125 bg-blue-950/40  ">
                <th className="text-center text-lg w-24">
                  {t('assembly_quality.Total')}</th>
                <th className="text-center w-12 text-lg">{t('assembly_quality.MP')}</th>
                <th className="text-center w-32 text-md">{t('assembly_quality.Actual')}<br />{t('assembly_quality.Output')}</th>
                <th className="text-center w-12 text-lg">{t('assembly_quality.PPH')}</th>
                <th className="text-center w-24 text-lg" >{t('assembly_quality.RFT')}</th>
              </tr>
            </thead>
            <tbody>
              <tr className="backdrop-brightness-125 bg-blue-950/60 ">
                <td className="text-center text-yellow-400"></td>
                <td className="text-center text-yellow-400">{totalMP}</td>
                <td className="text-center text-yellow-400">
                  {totalActualOutput}
                </td>
                <td className="text-center text-yellow-400">
                  {parseFloat(totalPPH).toFixed(2)}
                </td>
                <td className="text-center text-yellow-400">
                  {parseFloat(totalRFT).toFixed(2)}%
                </td>
              </tr>
              <tr className="backdrop-brightness-125 bg-blue-950/60  h-96 ">
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  );
};
export default AssemblyQuality;

import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { LuChevronsUp, LuChevronsDown } from "react-icons/lu";
import FinancialTable from "../components/FinancialTable";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaInfo } from "react-icons/fa6";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";

const Donasi = () => {
  const [isDescend, setisDescend] = useState(true);

  const [activeElement, setActiveElement] = useState("");

  const [financials, setFinancials] = useState([
    { date: "", title: "", status: "", value: "" },
  ]);

  const [financialState, setFinancialState] = useState(financials);

  const handleDescend = () => {
    const reversedFinancial = [...financialState];
    reversedFinancial.reverse();
    setFinancialState(reversedFinancial);
    setisDescend(!isDescend);
  };

  useEffect(() => {
    axios.get("http://localhost:3000/donation").then((res) => {
      const reversedNews = res.data.reverse();
      setFinancialState(reversedNews);
    });
  }, []);

  return (
    <section className="w-full lg:pl-[288px] overflow-hidden bg-gray-100 ">
      <div className="w-full p-6 flex flex-col gap-6">
        <div className="search bg-white flex px-4 py-3.5 rounded-md shadow-md justify-between items-center">
          <div className="flex gap-3 items-center">
            <FiSearch className="text-2xl" />
            <input type="text" placeholder="Cari Data..." />
          </div>
          <div className="">
            <Link
              to={"/tambah-donasi"}
              className="py-0.5 px-3 bg-primary text-white rounded-md flex items-center gap-2"
            >
              Tambah Data
              <span className="text-2xl">
                <AiOutlinePlusCircle />
              </span>
            </Link>
          </div>
        </div>

        <div className="table">
          <div className="py-2 flex flex-col mb-2">
            <div className="w-full flex gap-4">
              <button
                onClick={() => handleDescend()}
                className="px-1.5 bg-blue-400 text-white rounded-lg text-lg shadow-md active:translate-y-0.5 hover:bg-blue-600 duration-150 transition-all"
              >
                {isDescend ? <LuChevronsDown /> : <LuChevronsUp />}
              </button>
            </div>
          </div>
          <div className="bg-white px-3 py-4 rounded-lg shadow-xl">
            <table className="w-full">
              <tbody>
                <tr className="border-b-2 border-slate-300 w-full font-semibold">
                  <td className="pl-2 w-[15%] text-center">TANGGAL</td>
                  <td className="px-1 w-[50%] ">PERIHAL</td>
                  <td className="px-1 w-[15%] text-center">STATUS</td>
                  <td className="px-1 w-[20%] text-center">AKSI</td>
                </tr>
                {financialState.map((financial, index) => {
                  return (
                    <tr key={index} className={`w-full text-base border-b `}>
                      <td className="pl-2 py-4 w-[15%] text-center">
                        {financial.date}
                      </td>
                      <td className=" py-4 w-[50%]">{financial.title}</td>
                      <td
                        className={`py-4 w-[15%] text-green-500 font-semibold text-xl leading-6 ${
                          financial.status === "Donatur"
                            ? "text-primary"
                            : "text-secondary-light"
                        } text-center`}
                      >
                        {financial.status}
                      </td>
                      <td className="pl-2 py-3 w-[20%] ">
                        <div className="flex items-center gap-2 text-xl justify-center">
                          <div className="bg-blue-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100">
                            <FaInfo />
                          </div>
                          <div className="bg-yellow-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100">
                            <MdOutlineModeEditOutline />
                          </div>
                          <div className="bg-red-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100">
                            <RiDeleteBin2Line />
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donasi;

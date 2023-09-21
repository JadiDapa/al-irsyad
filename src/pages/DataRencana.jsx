import { FiSearch } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaInfo } from "react-icons/fa6";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { BsCheckSquareFill, BsXSquareFill } from "react-icons/bs";

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DataRencana = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [plan, setPlan] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/plans").then((res) => {
      const reversedPlan = res.data.reverse();
      setPlan(reversedPlan);
    });
  }, []);
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="w-full lg:pl-[288px] overflow-hidden bg-gray-100 ">
      <div className="w-full p-6 flex flex-col gap-6">
        <div className="search bg-white flex px-4 py-3.5 rounded-md shadow-md justify-between items-center">
          <div className="flex gap-3 items-center">
            <FiSearch className="text-2xl" />
            <input type="text" placeholder="Cari rencana & jadwal" />
          </div>
          <div className="">
            <div className="py-0.5 px-3 bg-primary text-white rounded-md flex items-center gap-2">
              Tambah Rencana{" "}
              <span className="text-2xl">
                <AiOutlinePlusCircle />
              </span>
            </div>
          </div>
        </div>
        <div className="my-3 flex justify-between">
          <div className="flex gap-x-3  ">
            <div
              className={`px-4 shadow-md rounded-full ${
                isActive ? "bg-primary text-white" : "bg-white"
              }`}
            >
              Semua Data
            </div>
            <div
              className={`px-4 shadow-md rounded-full ${
                isActive ? "bg-primary text-white" : "bg-white"
              }`}
            >
              Terencana
            </div>
            <div
              className={`px-4 shadow-md rounded-full ${
                isActive ? "bg-primary text-white" : "bg-white"
              }`}
            >
              Terpenuhi
            </div>
          </div>
          <div
            className={`px-4 shadow-md rounded-full bg-blue-400 text-white `}
          >
            Ubah Urutan
          </div>
        </div>
        <div className="table bg-white p-3">
          <table className="w-full lg:min-h-[428px]">
            <tbody>
              <tr className="border-b-[2px] border-slate-300 w-full font-semibold">
                <td className="pl-2 w-[7%] text-center">SELESAI</td>
                <td className="pl-2 w-[43%] text-center">RENCANA</td>
                <td className="px-1 w-[15%] text-center">DITAMBAHKAN</td>
                <td className="px-1 w-[15%] text-center">ESTIMASI</td>
                <td className="px-1 w-[20%] text-center">AKSI</td>
              </tr>
              {plan.map((plan, index) => {
                return (
                  <>
                    <tr key={index} className="w-full text-base border-b ">
                      <td
                        className={`pl-2 py-3 w-[7%] text-2xl ${
                          plan.completed ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {plan.completed ? (
                          <BsCheckSquareFill className="mx-auto" />
                        ) : (
                          <BsXSquareFill className="mx-auto" />
                        )}
                      </td>
                      <td className="pl-2 py-3 w-[43%]">
                        <div className="line-clamp-3">{plan.plan}</div>
                      </td>
                      <td className="pl-2 py-3 w-[20%] text-center">
                        {plan.added}
                      </td>
                      <td className="pl-2 py-3 w-[20%] text-center">
                        {plan.estimated}
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
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DataRencana;

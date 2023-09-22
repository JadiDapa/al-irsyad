import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { LuChevronsUp, LuChevronsDown } from "react-icons/lu";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaInfo } from "react-icons/fa6";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";

const DataFinancial = () => {
  const [isDescend, setisDescend] = useState(true);

  const [activeElement, setActiveElement] = useState("");

  const [financials, setFinancials] = useState([]);

  const [previousFinancials, setPreviousFinancials] = useState([]);

  const formattedValue = (value) => {
    const splittedMoney = value.toString().split(".");
    splittedMoney[0] = splittedMoney[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return splittedMoney.join(".");
  };

  const calculateTotalMoney = useCallback(() => {
    let moneys = 0;
    if (previousFinancials.length > 0) {
      previousFinancials.forEach((financial) => {
        financial.status
          ? (moneys += Number(financial.value))
          : (moneys -= Number(financial.value));
      });
      return formattedValue(moneys);
    } else {
      financials.forEach((financial) => {
        financial.status
          ? (moneys += Number(financial.value))
          : (moneys -= Number(financial.value));
      });
      return formattedValue(moneys);
    }
  }, [previousFinancials, financials]);

  const [money, setMoney] = useState(calculateTotalMoney());

  const handleDescend = () => {
    const reversedFinancial = [...financials];
    reversedFinancial.reverse();
    setFinancials(reversedFinancial);
    setisDescend(!isDescend);
  };

  const allData = (item) => {
    setActiveElement(item);
    if (previousFinancials.length > 0) {
      setFinancials(previousFinancials);
    } else {
      setPreviousFinancials(financials);
      setFinancials(financials);
    }
  };
  const uangMasuk = (item) => {
    setActiveElement(item);
    if (previousFinancials.length > 0) {
      const filteredFinancials = previousFinancials.filter(
        (item) => item.status === true
      );
      setFinancials(filteredFinancials);
    } else {
      setPreviousFinancials(financials);
      const filteredFinancials = financials.filter(
        (item) => item.status === true
      );
      setFinancials(filteredFinancials);
    }
  };
  const uangKeluar = (item) => {
    setActiveElement(item);
    if (previousFinancials.length > 0) {
      const filteredFinancials = previousFinancials.filter(
        (item) => item.status === false
      );
      setFinancials(filteredFinancials);
    } else {
      setPreviousFinancials(financials);
      const filteredFinancials = financials.filter(
        (item) => item.status === false
      );
      setFinancials(filteredFinancials);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:3000/financial").then((res) => {
      const reversedNews = res.data.reverse();
      setFinancials(reversedNews);
    });
  }, []);

  useEffect(() => {
    setMoney(calculateTotalMoney());
  }, [calculateTotalMoney]);

  return (
    <section className="w-full lg:pl-[288px] overflow-hidden bg-gray-100 ">
      <div className="w-full p-6 flex flex-col gap-6">
        <div className="search bg-white flex px-4 py-3.5 rounded-md shadow-md justify-between items-center">
          <div className="flex gap-3 items-center">
            <FiSearch className="text-2xl" />
            <input type="text" placeholder="Cari berita..." />
          </div>
          <div className="">
            <Link
              to={"/tambah-finansial"}
              className="py-0.5 px-3 bg-primary text-white rounded-md flex items-center gap-2"
            >
              Tambah Data
              <span className="text-2xl">
                <AiOutlinePlusCircle />
              </span>
            </Link>
          </div>
        </div>
        <div className="total rounded-lg px-4 ">
          <h2 className="text-3xl text-slate-700 font-semibold ">
            Total Dana :{" "}
            <span className="text-4xl text-primary font-bold mb-4">
              Rp {money}
            </span>
          </h2>
        </div>
        <div className="table">
          <div className="py-2 flex flex-col mb-2">
            <div className="w-full flex gap-4">
              <div
                onClick={() => allData("Semua Data")}
                className={`px-4 shadow-md rounded-full ${
                  activeElement === "Semua Data"
                    ? "bg-primary text-white"
                    : "bg-white"
                } cursor-pointer`}
              >
                Semua Data
              </div>
              <div
                onClick={() => uangMasuk("Uang Masuk")}
                className={`px-4 shadow-md rounded-full ${
                  activeElement === "Uang Masuk"
                    ? "bg-primary text-white"
                    : "bg-white"
                } cursor-pointer`}
              >
                Uang Masuk
              </div>
              <div
                onClick={() => uangKeluar("Uang Keluar")}
                className={`px-4 shadow-md rounded-full ${
                  activeElement === "Uang Keluar"
                    ? "bg-primary text-white"
                    : "bg-white"
                } cursor-pointer`}
              >
                Uang Keluar
              </div>

              <button
                onClick={() => handleDescend()}
                className="px-1.5 bg-blue-400 text-white rounded-lg text-lg shadow-md active:translate-y-0.5 hover:bg-blue-600 duration-150 transition-all"
              >
                {isDescend ? <LuChevronsDown /> : <LuChevronsUp />}
              </button>
            </div>
          </div>
          <div className="bg-white px-3 py-4 rounded-lg shadow-xl">
            {financials.length > 0 && (
              <table className="w-full">
                <tbody>
                  <tr className="border-b-2 border-slate-300 w-full font-semibold">
                    <td className="pl-2 w-[15%] text-center">TANGGAL</td>
                    <td className="px-1 w-[35%] ">PERIHAL</td>
                    <td className="px-1 w-[11%] text-center">STATUS</td>
                    <td className="px-[10px] w-[17%] ">NILAI</td>
                    <td className="px-1 w-[20%] text-center">AKSI</td>
                  </tr>
                  {financials.map((financial, index) => {
                    return (
                      <tr key={index} className={`w-full text-base border-b `}>
                        <td className="pl-2 py-4 w-[12%] text-center">
                          {financial.date}
                        </td>
                        <td className=" py-4 w-[40%]">{financial.title}</td>
                        <td
                          className={`py-4 w-[18%] text-green-500 font-bold text-xl leading-6 ${
                            financial.status ? "text-primary" : "text-red-500"
                          } text-center`}
                        >
                          {financial.status ? (
                            <BiSolidUpArrow className="mx-auto" />
                          ) : (
                            <BiSolidDownArrow className="mx-auto" />
                          )}
                        </td>
                        <td
                          className={`pl-[10px] py-2 w-[25%] text-xl leading-6 ${
                            financial.status ? "text-primary" : "text-red-500"
                          }`}
                        >
                          {financial.status
                            ? `+Rp ${formattedValue(financial.value)}`
                            : `-Rp ${formattedValue(financial.value)}`}
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
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataFinancial;

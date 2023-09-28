import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Link, useOutletContext } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import Pagination from "../components/Pagination";
import { FaInfo } from "react-icons/fa";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";
import { LuChevronsUp, LuChevronsDown } from "react-icons/lu";

const DataFinancial = () => {
  const [financials, setFinancials] = useState([]);
  const [isDescend, setisDescend] = useState(false);
  const [isActive] = useState(false);
  const [isOpen] = useOutletContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFinancial, setFilteredFinancial] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const planPerPage = 8;
  const [openDetail, setOpenDetail] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [modalId, setModalId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [activeElement, setActiveElement] = useState("");
  const [previousFinancials, setPreviousFinancials] = useState([]);

  const formattedValue = (value) => {
    const splittedMoney = value.toString().split(".");
    splittedMoney[0] = splittedMoney[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return splittedMoney.join(".");
  };

  const calculateTotalMoney = useCallback(() => {
    let totalMoney = 0;

    if (previousFinancials.length > 0) {
      previousFinancials.forEach((financial) => {
        if (financial.status === "masuk") {
          totalMoney += Number(financial.value);
        } else if (financial.status === "keluar") {
          totalMoney -= Number(financial.value);
        }
      });
    } else {
      financials.forEach((financial) => {
        if (financial.status === "masuk") {
          totalMoney += Number(financial.value);
        } else if (financial.status === "keluar") {
          totalMoney -= Number(financial.value);
        }
      });
    }

    return formattedValue(totalMoney);
  }, [previousFinancials, financials]);

  useEffect(() => {
    axios.get("http://localhost:3001/financial").then((res) => {
      const reversedNews = res.data.reverse();
      setFinancials(reversedNews);
    });
  }, []);

  const [money, setMoney] = useState(calculateTotalMoney());

  useEffect(() => {
    setMoney(calculateTotalMoney());
  }, [calculateTotalMoney]);

  useEffect(() => {
    const filtered = financials.filter((financial) => {
      return financial.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    setFilteredFinancial(filtered);
  }, [searchQuery, financials, selectedStatus]);

  function handleDelete(id, e) {
    e.preventDefault();
    axios
      .delete("http://localhost:3001/financial/" + id)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  const startIndex = (currentPage - 1) * planPerPage;
  const endIndex = startIndex + planPerPage;

  const displayFinancial = searchQuery
    ? filteredFinancial.slice(startIndex, endIndex)
    : financials.slice(startIndex, endIndex);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleDescend = () => {
    setisDescend(!isDescend);
    setFinancials([...financials].reverse());
  };

  function handleClose(index = null) {
    setModalActive(!modalActive);
    setModalId(index);
  }

  const allData = () => {
    setActiveElement("Semua Data");
    if (previousFinancials.length > 0) {
      setFinancials(previousFinancials);
    } else {
      setPreviousFinancials(financials);
    }
  };

  const uangMasuk = () => {
    setActiveElement("Uang Masuk");
    if (previousFinancials.length > 0) {
      const filteredFinancials = previousFinancials.filter(
        (item) => item.status === "masuk"
      );
      setFinancials(filteredFinancials);
    } else {
      setPreviousFinancials(financials);
      const filteredFinancials = financials.filter(
        (item) => item.status === "masuk"
      );
      setFinancials(filteredFinancials);
    }
  };

  const uangKeluar = () => {
    setActiveElement("Uang Keluar");
    if (previousFinancials.length > 0) {
      const filteredFinancials = previousFinancials.filter(
        (item) => item.status === "keluar"
      );
      setFinancials(filteredFinancials);
    } else {
      setPreviousFinancials(financials);
      const filteredFinancials = financials.filter(
        (item) => item.status === "keluar"
      );
      setFinancials(filteredFinancials);
    }
  };

  return (
    <section
      className={`w-full ${
        isOpen ? "md:pl-[288px]" : "md:translate-x-0"
      } transition-all duration-300 overflow-hidden bg-gray-100`}
    >
      <div className="w-full p-6 flex flex-col gap-6">
        <div className="search bg-white flex px-4 py-3.5 rounded-md shadow-md justify-between items-center">
          <div className="flex gap-3 items-center">
            <FiSearch className="text-2xl" />
            <input
              type="text"
              placeholder="Cari Daftar Finansial..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>
          <div className="">
            <Link
              to={"/tambah-finansial"}
              className="py-0.5 px-3 bg-primary text-white rounded-md flex items-center gap-2"
            >
              Tambah Data
              <span className="text-2xl max-md:hidden">
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
            <div className="w-full flex gap-4 flex-wrap">
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
                className="max-md:mx-auto max-md:text-2xl px-1.5 bg-blue-400 text-white rounded-lg text-lg shadow-md active:translate-y-0.5 hover:bg-blue-600 duration-150 transition-all"
              >
                {isDescend ? <LuChevronsDown /> : <LuChevronsUp />}
              </button>
            </div>
          </div>
          <div className="hidden md:block bg-white px-3 py-4 rounded-lg shadow-xl">
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
                  {displayFinancial.map((financial, index) => {
                    return (
                      <tr key={index} className={`w-full text-base border-b `}>
                        <td className="pl-2 py-4 w-[12%] text-center">
                          {financial.date}
                        </td>
                        <td className=" py-4 w-[40%]">{financial.title}</td>
                        <td
                          className={`py-4 w-[18%] text-green-500 font-bold text-xl leading-6 ${
                            financial.status === "masuk"
                              ? "text-primary"
                              : "text-red-500"
                          } text-center`}
                        >
                          {financial.status === "masuk" ? (
                            <BiSolidUpArrow className="mx-auto" />
                          ) : (
                            <BiSolidDownArrow className="mx-auto" />
                          )}
                        </td>
                        <td
                          className={`pl-[10px] py-2 w-[25%] text-xl leading-6 ${
                            financial.status === "masuk"
                              ? "text-primary"
                              : "text-red-500"
                          }`}
                        >
                          {financial.status === "masuk"
                            ? `+Rp ${formattedValue(financial.value)}`
                            : `-Rp ${formattedValue(financial.value)}`}
                        </td>
                        <td className="pl-2 py-3 w-[20%] ">
                          <div className="flex items-center gap-2 text-xl justify-center">
                            <div
                              onClick={() => handleClose(index)}
                              className="bg-blue-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100"
                            >
                              <FaInfo />
                            </div>
                            <Link
                              to={`/edit-rencana/${financial._id}`}
                              className="bg-yellow-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100"
                            >
                              <MdOutlineModeEditOutline />
                            </Link>
                            <div
                              onClick={(e) => handleDelete(financial._id, e)}
                              className="bg-red-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100"
                            >
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
          <div className="md:hidden">
            {displayFinancial.map((financial, index) => {
              if (index < 7) {
                return (
                  <div
                    key={index}
                    className="bg-white mb-1 px-2 py-2 rounded-md shadow-sm flex justify-between"
                  >
                    <div className="flex flex-col justify-between">
                      <div className="text-sm font-light">{financial.date}</div>
                      <div
                        className={`text-xl ${
                          financial.status ? "text-primary" : "text-red-500"
                        }`}
                      >
                        {financial.status
                          ? `+Rp ${formattedValue(financial.value)}`
                          : `-Rp ${formattedValue(financial.value)}`}
                      </div>
                      <div className="">{financial.title}</div>
                    </div>
                    <div className="flex flex-col gap-y-0.5">
                      <div
                        onClick={() => handleClose(index)}
                        className="bg-blue-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100"
                      >
                        <FaInfo />
                      </div>
                      <Link
                        to={`/edit-rencana/${financial._id}`}
                        className="bg-yellow-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100"
                      >
                        <MdOutlineModeEditOutline />
                      </Link>
                      <div
                        onClick={(e) => handleDelete(financial._id, e)}
                        className="bg-red-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100"
                      >
                        <RiDeleteBin2Line />
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="mb-8 mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(
            searchQuery
              ? filteredFinancial.length / planPerPage
              : financials.length / planPerPage
          )}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default DataFinancial;

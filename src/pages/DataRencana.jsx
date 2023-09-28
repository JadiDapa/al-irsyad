import { FiSearch } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaInfo } from "react-icons/fa6";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { BsCheckSquareFill, BsXSquareFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useOutletContext } from "react-router-dom";
import Pagination from "../components/Pagination";
import Modals from "../components/Modals";

const DataRencana = () => {
  const [plan, setPlan] = useState([]);
  const [isDescend, setisDescend] = useState(false);
  const [isActive] = useState(false);
  const [isOpen] = useOutletContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPlan, setFilteredPlan] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const planPerPage = 8;
  const [openDetail, setOpenDetail] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [modalId, setModalId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/plan").then((res) => {
      const reversedNews = res.data.reverse();
      setPlan(reversedNews);
    });
  }, []);

  useEffect(() => {
    const filtered = plan.filter((newsItem) => {
      return newsItem.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    setFilteredPlan(filtered);
  }, [searchQuery, plan, selectedStatus]);

  function handleDelete(id, e) {
    e.preventDefault();
    axios
      .delete("http:///localhost:3001/plan/" + id)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  const startIndex = (currentPage - 1) * planPerPage;
  const endIndex = startIndex + planPerPage;

  const displayedPlan = searchQuery
    ? filteredPlan.slice(startIndex, endIndex)
    : plan.slice(startIndex, endIndex);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleDescend = () => {
    setisDescend(!isDescend);
    setPlan([...plan].reverse());
  };

  function handleClose(index = null) {
    setModalActive(!modalActive);
    setModalId(index);
  }

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
              placeholder="Cari Daftar Rencana..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>
          <div className="">
            <Link
              to={"/tambah-rencana"}
              className="py-0.5 px-3 bg-primary text-white rounded-md flex items-center gap-2"
            >
              Tambah Data{" "}
              <span className="text-2xl max-md:hidden">
                <AiOutlinePlusCircle />
              </span>
            </Link>
          </div>
        </div>
        <div className="my-3 flex justify-between flex-wrap gap-y-3">
          <div className="flex gap-x-3">
            <div
              onClick={() => setSelectedStatus(null)}
              className={`px-4 shadow-md rounded-full ${
                selectedStatus === null ? "bg-primary text-white" : "bg-white"
              }`}
            >
              Semua Data
            </div>
            <div
              onClick={() => handleTerencana()}
              className={`px-4 shadow-md rounded-full cursor-pointer ${
                selectedStatus === "terencana"
                  ? "bg-primary text-white"
                  : "bg-white"
              }`}
            >
              Terencana
            </div>
            <div
              onClick={() => setSelectedStatus("Terpenuhi")}
              className={`px-4 shadow-md rounded-full ${
                selectedStatus === "terpenuhi"
                  ? "bg-primary text-white"
                  : "bg-white"
              }`}
            >
              Terpenuhi
            </div>
          </div>
          <div
            onClick={handleDescend}
            className={`px-4 shadow-md rounded-full bg-blue-400 text-white `}
          >
            Ubah Urutan
          </div>
        </div>
        <div className="md:table hidden bg-white p-3">
          <table className="w-full lg:min-h-[428px]">
            <tbody>
              <tr className="border-b-[2px] border-slate-300 w-full font-semibold">
                <td className="pl-2 w-[10%] text-center">STATUS</td>
                <td className="pl-2 w-[40%] text-center">RENCANA</td>
                <td className="px-1 w-[15%] text-center">DITAMBAHKAN</td>
                <td className="px-1 w-[15%] text-center">ESTIMASI</td>
                <td className="px-1 w-[20%] text-center">AKSI</td>
              </tr>
              {displayedPlan.map((plan, index) => {
                return (
                  <>
                    {modalActive && (
                      <Modals
                        modalActive
                        handleClose={handleClose}
                        plan={plan}
                        index={index}
                        modalId={modalId}
                      />
                    )}
                    <tr key={index} className="w-full text-base border-b">
                      <td
                        className={`pl-2 py-3 w-[7%] text-2xl ${
                          plan.status === "terpenuhi"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {plan.status === "terencana" ? (
                          <BsXSquareFill className="mx-auto" />
                        ) : (
                          <BsCheckSquareFill className="mx-auto" />
                        )}
                      </td>
                      <td className="pl-2 py-3 w-[43%]">
                        <div className="line-clamp-3">{plan.title}</div>
                      </td>
                      <td className="pl-2 py-3 w-[20%] text-center">
                        {plan.date}
                      </td>
                      <td className="pl-2 py-3 w-[20%] text-center">
                        {plan.estimated}
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
                            to={`/edit-rencana/${plan._id}`}
                            className="bg-yellow-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100"
                          >
                            <MdOutlineModeEditOutline />
                          </Link>
                          <div
                            onClick={(e) => handleDelete(plan._id, e)}
                            className="bg-red-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100"
                          >
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
        <div className="md:hidden">
          {plan.map((plan, index) => {
            if (index < 7) {
              return (
                <div
                  key={index}
                  className="bg-white mb-1 px-2 py-2 rounded-md shadow-sm flex justify-between items-center"
                >
                  {modalActive && (
                    <Modals
                      modalActive
                      handleClose={handleClose}
                      plan={plan}
                      index={index}
                      modalId={modalId}
                    />
                  )}
                  <div className="w-[92%] flex flex-col gap-y-1">
                    <div className="text-sm font-light text-secondary">
                      Ditambahkan : {plan.date}
                    </div>
                    <div
                      className={`${
                        plan.completed && "line-through"
                      } leading-6 line-clamp-3`}
                    >
                      {plan.title}
                    </div>
                    <div className="text-sm text-primary">
                      Estimasi : {plan.estimated}
                    </div>
                  </div>
                  <div className="">
                    <div className="flex flex-col gap-y-1">
                      <div
                        onClick={() => handleClose(index)}
                        className="bg-blue-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100"
                      >
                        <FaInfo />
                      </div>
                      <Link
                        to={`/edit-rencana/${plan._id}`}
                        className="bg-yellow-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100"
                      >
                        <MdOutlineModeEditOutline />
                      </Link>
                      <div
                        onClick={(e) => handleDelete(plan._id, e)}
                        className="bg-red-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100"
                      >
                        <RiDeleteBin2Line />
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="mb-8 mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(
            searchQuery
              ? filteredPlan.length / planPerPage
              : plan.length / planPerPage
          )}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default DataRencana;

import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { LuChevronsUp, LuChevronsDown } from "react-icons/lu";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useOutletContext } from "react-router-dom";
import { FaInfo } from "react-icons/fa6";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";
import Pagination from "../components/Pagination";
import { ModalsDonation } from "../components/Modals";

const Donasi = () => {
  const [donation, setDonation] = useState([]);
  const [isDescend, setisDescend] = useState(false);
  const [isActive] = useState(false);
  const [isOpen] = useOutletContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDonation, setFilteredDonation] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const planPerPage = 8;
  const [openDetail, setOpenDetail] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [modalId, setModalId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const [activeElement, setActiveElement] = useState("");

  useEffect(() => {
    axios.get("https://al-irysad-backend-api.vercel.app/donation").then((res) => {
      const reversedNews = res.data.reverse();
      setDonation(reversedNews);
    });
  }, []);

  useEffect(() => {
    const filtered = donation.filter((donationItem) => {
      return donationItem.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    });

    setFilteredDonation(filtered);
  }, [searchQuery, donation, selectedStatus]);

  function handleDelete(id, e) {
    e.preventDefault();
    axios
      .delete("https://al-irysad-backend-api.vercel.app/donation/" + id)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  const startIndex = (currentPage - 1) * planPerPage;
  const endIndex = startIndex + planPerPage;

  const displayerDonation = searchQuery
    ? filteredDonation.slice(startIndex, endIndex)
    : donation.slice(startIndex, endIndex);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleDescend = () => {
    setisDescend(!isDescend);
    setDonation([...donation].reverse());
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
              placeholder="Cari Daftar Donasi..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>
          <div className="">
            <Link
              to={"/tambah-donasi"}
              className="py-0.5 px-3 bg-primary text-white rounded-md flex items-center gap-2"
            >
              Tambah Data
              <span className="text-2xl max-md:hidden">
                <AiOutlinePlusCircle />
              </span>
            </Link>
          </div>
        </div>
        <div className="py-2 flex flex-col">
          <div className="w-full flex gap-4">
            <button
              onClick={() => handleDescend()}
              className="px-3 bg-blue-400 text-white rounded-lg text-lg shadow-md active:translate-y-0.5 hover:bg-blue-600 duration-150 transition-all"
            >
              Ubah Urutan
            </button>
          </div>
        </div>
        <div className="md:table hidden">
          <div className="bg-white px-3 py-4 rounded-lg shadow-xl">
            <table className="w-full">
              <tbody>
                <tr className="border-b-2 border-slate-300 w-full font-semibold">
                  <td className="pl-2 w-[15%] text-center">TANGGAL</td>
                  <td className="px-1 w-[50%] ">PERIHAL</td>
                  <td className="px-1 w-[15%] text-center">STATUS</td>
                  <td className="px-1 w-[20%] text-center">AKSI</td>
                </tr>
                {displayerDonation.map((donasi, index) => {
                  return (
                    <>
                      {modalActive && (
                        <ModalsDonation
                          modalActive
                          handleClose={handleClose}
                          donasi={donasi}
                          index={index}
                          modalId={modalId}
                        />
                      )}
                      <tr key={index} className={`w-full text-base border-b `}>
                        <td className="pl-2 py-4 w-[15%] text-center">
                          {donasi.date}
                        </td>
                        <td className=" py-4 w-[50%]">{donasi.title}</td>
                        <td
                          className={`py-4 w-[15%] text-green-500 font-semibold text-xl leading-6 ${
                            donasi.status === "donatur"
                              ? "text-primary"
                              : "text-secondary-light"
                          } text-center uppercase`}
                        >
                          {donasi.status}
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
                              to={`/edit-rencana/${donasi._id}`}
                              className="bg-yellow-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100"
                            >
                              <MdOutlineModeEditOutline />
                            </Link>
                            <div
                              onClick={(e) => handleDelete(donasi._id, e)}
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
        </div>
        <div className="md:hidden">
          {displayerDonation.map((donasi, index) => {
            return (
              <>
                {modalActive && (
                  <ModalsDonation
                    modalActive
                    handleClose={handleClose}
                    donasi={donasi}
                    index={index}
                    modalId={modalId}
                  />
                )}
                <div
                  key={index}
                  className="bg-white mb-2 px-2 py-2 rounded-md shadow-md flex"
                >
                  <div className="w-[92%] flex flex-col justify-between">
                    <div className="text-sm font-light">{donasi.date}</div>
                    <div className="text-lg max-w-xs line-clamp-2">
                      {donasi.title}
                    </div>

                    <div
                      className={`leading-5 py-2 text-green-500 ${
                        donasi.status === "donatur"
                          ? "text-primary"
                          : "text-secondary-dark"
                      }`}
                    >
                      {donasi.status}
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-0.5">
                    <div
                      onClick={() => handleClose(index)}
                      className="bg-blue-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100"
                    >
                      <FaInfo />
                    </div>
                    <Link
                      to={`/edit-rencana/${donasi._id}`}
                      className="bg-yellow-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100"
                    >
                      <MdOutlineModeEditOutline />
                    </Link>
                    <div
                      onClick={(e) => handleDelete(donasi._id, e)}
                      className="bg-red-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100"
                    >
                      <RiDeleteBin2Line />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="mb-8 mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(
            searchQuery
              ? filteredDonation.length / planPerPage
              : donation.length / planPerPage
          )}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default Donasi;

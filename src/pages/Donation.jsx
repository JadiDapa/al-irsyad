import { useEffect, useState } from "react";
import { LuChevronsUp, LuChevronsDown } from "react-icons/lu";
import { BreadCrumb } from "../components";
import Pagination from "../components/Pagination";
import axios from "axios";
import { Link } from "react-router-dom";
import { ModalsDonation } from "../components/Modals";
import { FaInfo } from "react-icons/fa6";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin2Line } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";

const Donation = () => {
  const links = [
    { link: "/ekonomi", text: "Ekonomi" },
    { link: "/ekonomi/donasi", text: "Donasi" },
  ];

  const [isDescend, setisDescend] = useState(true);
  const [donation, setDonation] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDonation, setFilteredDonation] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalActive, setModalActive] = useState(false);
  const [modalId, setModalId] = useState(null);
  const planPerPage = 8;

  useEffect(() => {
    axios.get("https://api.masjidal-irsyad.com/api/donations").then((res) => {
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
  }, [searchQuery, donation]);

  function handleDelete(slug, e) {
    e.preventDefault();
    axios
      .delete("https://api.masjidal-irsyad.com/api/donations/" + slug)
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
    <section className="mt-12 mb-12 lg:px-12">
      <BreadCrumb links={links} />
      <div className="flex flex-col items-center my-8">
        <h2 className="text-3xl font-semibold text-text2  mt-8 tracking-wide font-play mb-2">
          Infak & Donasi Masjid{" "}
          <span className="font-arab tracking-wider text-primary font-bold">
            Al-IRSYAD
          </span>
        </h2>
        <p className="lg:text-lg text-base max-lg:mt-2 capitalize">
          Daftar Infak dan Donasi Masjid baik sebagai penerima atau pemberi
        </p>
        <div className="relative flex gap-x-[10px] items-center my-4">
          <input
            className="outline-none w-[200px] focus:w-[400px] focus:border-b-2 focus:border-primary text-primary placeholder:italic placeholder:text-base transition-all duration-200"
            placeholder="Cari Data Donasi..."
            type="text"
            value={searchQuery}
            id="searchNews"
            onChange={handleSearchInputChange}
          />
          <span className="text-primary">
            <BiSearch />
          </span>
        </div>
      </div>
      <div className="container mx-auto md:grid  gap-x-24 gap-y-8 relative pt-8 mt-8 w-full">
        <div className="table w-full">
          <div className="bg-white px-3 py-2 rounded-lg flex flex-col mb-2 shadow-lg w-full">
            <div className="w-full flex md:gap-14 max-md:justify-between">
              <button
                onClick={() => handleDescend()}
                className="px-1.5 bg-blue-400 text-white rounded-lg text-lg shadow-md active:translate-y-0.5 hover:bg-blue-600 duration-150 transition-all"
              >
                {isDescend ? <LuChevronsDown /> : <LuChevronsUp />}
              </button>
            </div>
          </div>
          <div className="md:bg-white md:px-3 md:py-4 md:rounded-lg md:shadow-xl">
            <table className="w-full lg:min-h-[428px] max-md:hidden">
              <tbody>
                <tr className="border-b-2 border-slate-300 w-full font-semibold">
                  <td className="pl-2 w-2/12 text-center">TANGGAL</td>
                  <td className="px-1 w-6/12 ">PERIHAL</td>
                  <td className="px-1 w-2/12 text-center">STATUS</td>
                  <td className="px-1 w-3/12 text-center">AKSI</td>
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
                              to={`/edit-rencana/${donasi.slug}`}
                              className="bg-yellow-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100"
                            >
                              <MdOutlineModeEditOutline />
                            </Link>
                            <div
                              onClick={(e) => handleDelete(donasi.slug, e)}
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
                        to={`/edit-rencana/${donasi.slug}`}
                        className="bg-yellow-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100"
                      >
                        <MdOutlineModeEditOutline />
                      </Link>
                      <div
                        onClick={(e) => handleDelete(donasi.slug, e)}
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
      </div>
      <div className="mb-8 mt-4">
        <Pagination />
      </div>
    </section>
  );
};

export default Donation;

import { FiSearch } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaInfo } from "react-icons/fa6";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useOutletContext } from "react-router-dom";
import { LuChevronsDown, LuChevronsUp } from "react-icons/lu";
import Pagination from "../components/Pagination";

const DataBerita = () => {
  const [news, setNews] = useState([]);
  const [isDescend, setisDescend] = useState(false);
  const [isActive] = useState(false);
  const [isOpen] = useOutletContext();
  const [activeDiv, setActiveDiv] = useState(-1);
  const [isClickArray, setIsClickArray] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNews, setFilteredNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 8;

  useEffect(() => {
    axios.get("https://api.masjidal-irsyad.com/api/news").then((res) => {
      const reversedNews = res.data.reverse();
      setNews(reversedNews);
    });
  }, []);

  useEffect(() => {
    const filtered = news.filter((newsItem) =>
      newsItem.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredNews(filtered);
  }, [searchQuery, news]);

  function handleDelete(slug, e) {
    e.preventDefault();
    axios
      .delete("https://api.masjidal-irsyad.com/api/news/" + slug)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  function handleClick(index) {
    const updatedIsClickArray = [...isClickArray];
    if (updatedIsClickArray[index]) {
      updatedIsClickArray[index] = false;
      setActiveDiv(-1);
    } else {
      updatedIsClickArray[index] = true;
      if (activeDiv !== -1) {
        updatedIsClickArray[activeDiv] = false;
      }
      setActiveDiv(index);
    }
    setIsClickArray(updatedIsClickArray);
  }

  const startIndex = (currentPage - 1) * newsPerPage;
  const endIndex = startIndex + newsPerPage;

  const displayedNews = searchQuery
    ? filteredNews.slice(startIndex, endIndex)
    : news.slice(startIndex, endIndex);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleDescend = () => {
    setisDescend(!isDescend);
    setNews([...news].reverse());
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
              placeholder="Cari berita..."
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>
          <div className="">
            <Link
              to="/admin/tambah-berita"
              className="py-0.5 px-3 bg-primary text-white rounded-md flex items-center gap-2"
            >
              Tambah Data{" "}
              <span className="text-2xl max-md:hidden">
                <AiOutlinePlusCircle />
              </span>
            </Link>
          </div>
        </div>
        <div className="my-3 flex items-center justify-between">
          <div className="flex gap-3  flex-wrap">
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
              Uang Masuk
            </div>
            <div
              className={`px-4 shadow-md rounded-full ${
                isActive ? "bg-primary text-white" : "bg-white"
              }`}
            >
              Uang Keluar
            </div>
          </div>
          <div
            onClick={handleDescend}
            className={`px-4 max-md:py-4 shadow-md rounded-full bg-blue-400 text-white `}
          >
            {isDescend ? <LuChevronsDown /> : <LuChevronsUp />}
          </div>
        </div>
        <div className="bg-white p-3 hidden md:block">
          <table className="w-full lg:min-h-[428px]">
            <tbody>
              <tr className="border-b-[2px] border-slate-300 w-full font-semibold">
                <td className="pl-2 w-[12%] text-center">TANGGAL</td>
                <td className="px-1 w-[17%] text-center">SAMPUL</td>
                <td className="px-1 w-[30%] text-center">JUDUL</td>
                <td className="px-1 w-[10%] text-center">KATEGORI</td>
                <td className="px-1 w-2/12 text-center">AKSI</td>
              </tr>
              {displayedNews.map((news, index) => {
                return (
                  <>
                    <tr key={index} className="w-full text-base border-b ">
                      <td className="pl-2 py-3 w-[12%] text-center">
                        {news.date}
                      </td>
                      <td className="py-3 w-[17%] overflow-hidden">
                        <img
                          src={`https://api.masjidal-irsyad.com/image/${news.image}`}
                          alt=""
                          className="mx-auto w-10/12 aspect-video bg-white rounded-sm m-1"
                        />
                      </td>
                      <td className="pl-2 py-3 w-[30%] ">
                        <div className="line-clamp-3">{news.title}</div>
                      </td>
                      <td
                        className={`py-3 w-[10%] text-xl leading-6 text-center uppercase`}
                      >
                        {news.category}
                      </td>
                      <td className="pl-2 py-3 w-2/12 ">
                        <div className="flex items-center gap-2 text-xl justify-center">
                          <Link
                            to={`/kegiatan/berita/${news.slug}`}
                            className="bg-blue-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100"
                          >
                            <FaInfo />
                          </Link>
                          <Link
                            to={`/admin/edit-berita/${news.slug}`}
                            className="bg-yellow-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100"
                          >
                            <MdOutlineModeEditOutline />
                          </Link>
                          <div
                            onClick={(e) => handleDelete(news.slug, e)}
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
        <div className="md:hidden sm:grid-cols-3 grid-cols-2 grid gap-3">
          {displayedNews.map((news, index) => {
            return (
              <div
                key={index}
                className="bg-white p-2 rounded-md w-full"
                onClick={() => handleClick(index)}
              >
                <div className="w-full aspect-video overflow-hidden relative">
                  <img
                    src={`https://api.masjidal-irsyad.com/image/${news.image}`}
                    alt=""
                    className="object-center mx-auto"
                  />
                  <div
                    className={`flex items-center gap-2 text-xl justify-center absolute top-0 left-0 bg-black/20 w-full h-full transition-all duration-300 ${
                      isClickArray[index]
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <Link
                      to={`/kegiatan/berita/${news.slug}`}
                      className="bg-blue-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100"
                    >
                      <FaInfo />
                    </Link>
                    <Link
                      to={`/admin/edit-berita/${news.slug}`}
                      className="bg-yellow-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100"
                    >
                      <MdOutlineModeEditOutline />
                    </Link>
                    <div
                      onClick={(e) => handleDelete(news.slug, e)}
                      className="bg-red-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100"
                    >
                      <RiDeleteBin2Line />
                    </div>
                  </div>
                  <div className="overflow-hidden"></div>
                </div>
                <div className="h-12 leading-4 text-slate-700 line-clamp-3 text-sm mt-1">
                  {news.title}
                </div>
                <div className="flex items-center w-full justify-between">
                  <div className="uppercase text-primary leading-7 text-sm">
                    {news.category}
                  </div>
                  <div className="text-[12px] font-light">{news.date}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mb-8 mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(
            searchQuery
              ? filteredNews.length / newsPerPage
              : news.length / newsPerPage
          )}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default DataBerita;

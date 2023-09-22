import { FiSearch } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaInfo } from "react-icons/fa6";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdOutlineModeEditOutline } from "react-icons/md";

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DataBerita = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/news").then((res) => {
      const reversedNews = res.data.reverse();
      setNews(reversedNews);
    });
  }, []);
  const [isActive, setIsActive] = useState(false);
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
              to="/tambah-berita"
              className="py-0.5 px-3 bg-primary text-white rounded-md flex items-center gap-2"
            >
              Tambah Data{" "}
              <span className="text-2xl">
                <AiOutlinePlusCircle />
              </span>
            </Link>
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
            className={`px-4 shadow-md rounded-full bg-blue-400 text-white `}
          >
            Ubah Urutan
          </div>
        </div>
        <div className="table bg-white p-3">
          <table className="w-full lg:min-h-[428px]">
            <tbody>
              <tr className="border-b-[2px] border-slate-300 w-full font-semibold">
                <td className="pl-2 w-[12%] text-center">TANGGAL</td>
                <td className="px-1 w-[17%] text-center">SAMPUL</td>
                <td className="px-1 w-[30%] text-center">JUDUL</td>
                <td className="px-1 w-[10%] text-center">KATEGORI</td>
                <td className="px-1 w-2/12 text-center">AKSI</td>
              </tr>
              {news.map((news, index) => {
                return (
                  <>
                    <tr key={index} className="w-full text-base border-b ">
                      <td className="pl-2 py-3 w-[12%] text-center">
                        {news.date}
                      </td>
                      <td className="py-3 w-[17%] overflow-hidden">
                        <img
                          src={news.image}
                          alt=""
                          className="mx-auto w-10/12 aspect-video bg-white rounded-sm m-1"
                        />
                      </td>
                      <td className="pl-2 py-3 w-[30%] ">
                        <div className="line-clamp-3">{news.title}</div>
                      </td>
                      <td
                        className={`py-3 w-[10%] text-xl leading-6 text-center`}
                      >
                        {news.status ? "Donatur" : "Penerima"}
                      </td>
                      <td className="pl-2 py-3 w-2/12 ">
                        <div className="flex items-center gap-2 text-xl justify-center">
                          <Link
                            to={`/kegiatan/berita/${news.title}`}
                            className="bg-blue-300 p-2 cursor-pointer hover:brightness-105 rounded-full text-gray-100"
                          >
                            <FaInfo />
                          </Link>
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

export default DataBerita;

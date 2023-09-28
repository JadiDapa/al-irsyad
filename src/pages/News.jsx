import { BreadCrumb } from "../components";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination";
import { BiSearch } from "react-icons/bi";

const News = () => {
  const links = [
    { link: "/kegiatan", text: "Kegiatan" },
    { link: "/berita", text: "Berita" },
  ];

  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNews, setFilteredNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const newsPerPage = 8;

  useEffect(() => {
    axios.get("http://localhost:3001/news").then((res) => {
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

  return (
    <section className="py-12 lg:pt-12 lg:px-8 px-2 overflow-hidden">
      <BreadCrumb links={links} />
      <div className="flex flex-col items-center my-6 mx-4">
        <h2 className="text-3xl font-semibold text-text2  mt-8 tracking-wide font-play mb-2">
          Berita Masjid{" "}
          <span className="text-primary font-arab">AL-IRSYAD</span>
        </h2>
        <p className="lg:text-lg text-base max-lg:mt-2">
          Daftar lengkap berita dan informasi yang terjadi di Masjid Al-Irsyad
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
        </div>
      </div>
      {displayedNews.length !== 0 && (
        <>
          <div
            className="container lg:grid mx-auto justify-between 
          hidden gap-x-3 mb-2"
          >
            {/* <Link
              to={`/kegiatan/berita/${news[0].title}`}
              className="big p-2 shadow-lg rounded-md hover:-translate-y-1 duration-150 cursor-pointer"
            >
              <div className="mb-2">
                <img
                  src={`http://localhost:3001/images/${news[0].image}`}
                  alt=""
                />
              </div>
              <div className="flex justify-between flex-col h-28">
                <div className="text-xl text-text2 line-clamp-2 leading-9">
                  {news[0].title}
                </div>
                <div className="flex justify-between items-center">
                  <div className="mr-4 uppercase text-sm  text-primary-light font-semibold tracking-wide">
                    {news[0].category}
                  </div>
                  <div className="text-red-600 font-semibold">25-11-2023</div>
                </div>
              </div>
            </Link> */}
            <div className="smalls w-full grid lg:grid-cols-4 grid-cols-1  gap-x-3 gap-r-3">
              {displayedNews.map((news, index) => {
                return (
                  <div
                    key={index}
                    className={`containersm  p-2 shadow-lg rounded-md hover:-translate-y-1 duration-150 cursor-pointer ${
                      index === 3 ? "max-lg:hidden" : ""
                    } `}
                  >
                    <Link to={`/kegiatan/berita/${news.title}`}>
                      <img
                        src={`http://localhost:3001/images/${news.image}`}
                        alt=""
                        className="w-full aspect-video"
                      />
                      <div className="flex justify-between flex-col h-[70px]">
                        <div className="line-clamp-2 text-lg text-text2 leading-5 mt-1">
                          {news.title}
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="mr-4 uppercase text-sm  text-primary-light font-semibold tracking-wide">
                            {news.category}
                          </div>
                          <div className="text-sm text-red-600 font-semibold">
                            {news.date}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" lg:hidden container mx-auto ">
            <div className="w-full mt-12">
              {displayedNews.map((news, index) => {
                return (
                  <Link
                    to={`/kegiatan/berita/${news.title}`}
                    key={index}
                    className="w-full flex gap-x-4 mb-4 leading-6 text-text2"
                  >
                    <div className="w-[30%] aspect-square overflow-hidden rounded-md">
                      <img
                        src={`http://localhost:3001/images/${news.image}`}
                        alt=""
                        className="object-cover h-full mx-auto"
                      />
                    </div>
                    <div className="w-[70%]">
                      <div className="line-clamp-3  md:text-lg font-[500] leading-6">
                        {news.title}
                      </div>
                      <div className="text-primary uppercase text-sm">
                        {news.category}
                      </div>
                      <div className="text-sm text-slate-500">{news.date}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      )}
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

export default News;

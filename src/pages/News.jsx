import { BiRightArrow } from "react-icons/bi";
import { BreadCrumb } from "../components";
import { news1, news2, news3, news4, news5 } from "../assets";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const News = () => {
  const links = [
    { link: "/kegiatan", text: "Kegiatan" },
    { link: "/berita", text: "Berita" },
  ];

  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/news").then((res) => {
      const reversedNews = res.data.reverse();
      setNews(reversedNews);
    });
  }, []);

  return (
    <section className=" pt-12 lg:pt-12 lg:px-10 overflow-hidden">
      <BreadCrumb links={links} />
      <div className="text text-center mb-6">
        <h2 className="h2 font-play">
          Berita Masjid{" "}
          <span className="text-primary font-arab">AL-IRSYAD</span>
        </h2>
        <p className="text-lg">
          Daftar lengkap berita dan informasi yang terjadi di Masjid Al-Irsyad
        </p>
      </div>
      {news.length !== 0 && (
        <>
          <div className="container grid mx-auto justify-between lg:grid-cols-half grid-cols-1 gap-x-3 mb-2">
            <Link
              to={`/kegiatan/berita/${news[0].title}`}
              className="big p-2 shadow-lg rounded-md hover:-translate-y-1 duration-150 cursor-pointer"
            >
              <div className="mb-2">
                <img src={news[0].image} alt="" />
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
            </Link>
            <div className="smalls w-full grid lg:grid-cols-half grid-cols-1  gap-x-3 gap-r-3">
              {news.map((news, index) => {
                if (index !== 0 && index <= 4) {
                  return (
                    <div
                      key={index}
                      className={`containersm  p-2 shadow-lg rounded-md hover:-translate-y-1 duration-150 cursor-pointer ${
                        index === 3 ? "max-lg:hidden" : ""
                      } `}
                    >
                      <Link to={`/kegiatan/berita/${news.title}`}>
                        <img
                          src={news.image}
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
                }
              })}
            </div>
          </div>
          <div className="w-full gap-x-4 gap-y-4 container grid grid-cols-4 mx-auto">
            {news.map((news, index) => {
              if (index > 4) {
                return (
                  <Link
                    to={`/kegiatan/berita/${news.title}`}
                    key={index}
                    className={`containersm  p-2 shadow-lg rounded-md hover:-translate-y-1 duration-150 cursor-pointer ${
                      index === 3 ? "max-lg:hidden" : ""
                    } `}
                  >
                    <div className="">
                      <img
                        src={news.image}
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
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default News;

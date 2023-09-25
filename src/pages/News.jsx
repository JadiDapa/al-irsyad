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
          <span className="text-primary font-arab max-md:block">AL-IRSYAD</span>
        </h2>
        <p className="md:text-lg max-md:leading-6">
          Daftar lengkap berita dan informasi yang terjadi di Masjid Al-Irsyad
        </p>
      </div>
      {news.length !== 0 && (
        <>
          <div className="container lg:grid mx-auto justify-between grid-cols-half hidden gap-x-3 mb-2">
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
          <div className=" lg:hidden container mx-auto ">
            <div className="w-full mt-12">
              {news.map((news, index) => {
                return (
                  <Link
                    to={`/kegiatan/berita/${news.title}`}
                    key={index}
                    className="w-full flex gap-x-4 mb-4 leading-6 text-text2"
                  >
                    <div className="w-[30%] aspect-square overflow-hidden rounded-md">
                      <img
                        src={news.image}
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
              <div className="sm:w-9/12 w-full  mx-auto block lg:hidden mt-8 ">
                <Link
                  to={`/kegiatan/berita`}
                  className="text-center flex justify-center items-center gap-2 bg-secondary text-xl  p-2 rounded-full text-white drop-shadow-md hover:bg-secondary-light transition duration-300"
                >
                  Baca Berita Lainnya <BiRightArrow />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default News;

import { Link } from "react-router-dom";
import { BiRightArrow } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/news").then((res) => {
      const reversedNews = res.data.reverse();
      setNews(reversedNews);
    });
  }, []);
  if (news.length > 0) {
    return (
      <section className="my-12" id="berita">
        <div className="text text-center mb-6">
          <h2 className="h2 font-play">Berita & Informasi</h2>
          <p className="text-lg">Berita terbaru dari Masjid Al-Irsyad</p>
        </div>
        <div className="md:flex container hidden mx-auto justify-between gap-3 flex-row">
          <Link
            to={`/kegiatan/berita/${news[0].title}`}
            className="big md:w-1/2 w-full p-2 shadow-lg rounded-md hover:-translate-y-1 duration-150 cursor-pointer"
          >
            <div className="mb-2">
              <img src={news[0].image} alt="" />
            </div>
            <div className="">
              <div className="text-xl text-text2 line-clamp-2 leading-9">
                {news[0].title}
              </div>
              <div className="flex justify-between items-center">
                <div className="mr-2 uppercase text-primary font-semibold">
                  {news[0].category}
                </div>
                <div className="text-red-600 font-semibold">25-11-2023</div>
              </div>
            </div>
          </Link>
          <div className="w-full flex flex-wrap md:w-1/2 gap-x-3 gap-y-2">
            {news.map((news, index) => {
              if (index !== 0 && index <= 3) {
                return (
                  <div
                    key={index}
                    className={`containersm md:w-[48%] w-full p-2 shadow-lg rounded-md hover:-translate-y-1 duration-150 cursor-pointer `}
                  >
                    <Link to={`/kegiatan/berita/${news.title}`} className="">
                      <img
                        src={news.image}
                        alt=""
                        className="w-full aspect-video"
                      />
                      <div className="">
                        <div className="line-clamp-2 text-lg text-text2 leading-8">
                          {news.title}
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="">
                            <div className="mr-2 uppercase text-primary font-semibold">
                              {news.category}
                            </div>
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
            <Link
              to={`/kegiatan/berita`}
              className="containersm w-[48%] p-2 rounded-md hidden md:flex justify-center items-center flex-col gap-4 hover:-translate-y-1 duration-150 group"
            >
              <div className="text-2xl text-secondary drop-shadow-lg font-semibold text-center">
                Baca Berita Lainnya
              </div>
              <div className="text-4xl bg-secondary p-4 rounded-full text-white drop-shadow-md group-hover:-translate-y-1 transition-all duration-150 group-hover:bg-secondary-light">
                <BiRightArrow />
              </div>
            </Link>
          </div>
        </div>
        <div className=" md:hidden container mx-auto ">
          <div className="w-full mt-12">
            {news.map((news, index) => {
              if (index < 5) {
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
                      <div className="line-clamp-3 text-lg font-[500]">
                        {news.title}
                      </div>
                      <div className="text-primary uppercase">
                        {news.category}
                      </div>
                      <div className="text-sm text-slate-500">{news.date}</div>
                    </div>
                  </Link>
                );
              }
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
      </section>
    );
  }
};

export default News;

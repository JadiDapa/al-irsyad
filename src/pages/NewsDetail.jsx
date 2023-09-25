import { Link, useParams } from "react-router-dom";
import { BreadCrumb } from "../components";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import axios from "axios";

const NewsDetail = () => {
  const { title } = useParams();
  const links = [
    { link: "/kegiatan", text: "Kegiatan" },
    { link: "/kegiatan/berita", text: "Berita" },
    { link: "#", text: title },
  ];

  const [newsDetail, setNewsDetail] = useState({
    image: "",
    imageCaption: "",
    title: "",
    date: "",
    category: "",
    content: "",
  });

  const [recentNews, setRecentNews] = useState([
    {
      image: "",
      imageCaption: "",
      title: "",
      date: "",
      category: "",
      content: "",
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:3000/news").then((res) => {
      const fetchedNewsDetail = res.data;
      setNewsDetail(fetchedNewsDetail.find((news) => news.title === title));
      setRecentNews(fetchedNewsDetail.splice(-5).reverse());
    });
  }, [recentNews, title]);

  return (
    <section className="pt-12 lg:pt-12 lg:px-10 overflow-hidden mb-16">
      <BreadCrumb links={links} />
      <div className="flex gap-12">
        <div className="text mb-6 px-10 w-8/12 border-r">
          <h2 className="text-slate-800 text-4xl font-semibold mb-1">
            {newsDetail.title}
          </h2>
          <div className="text-primary">Berita Masjid AL-ISYAD</div>
          <div className="mb-4">Minggu, {newsDetail.date}</div>
          <div className="flex items-center gap-4 mb-8">
            <div className="text-sm">Bagikan : </div>
            <BsFacebook className="text-2xl text-blue-500" />
            <FaXTwitter className="text-2xl text-slate-700" />
          </div>
          <div className="w-full aspect-video overflow-hiiden">
            <img src={newsDetail.image} alt="" className="" />
          </div>
          <div className="text-sm  text-justify mb-8">
            {newsDetail.imageCaption}
          </div>
          <div className="text-slate-700 leading-6 flex flex-col gap-4">
            <p>
              <b className="font-bold">Palembang, Masjid AL-ISYAD</b> -- Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
              deleniti nesciunt illo atque hic ut quae voluptas necessitatibus
              perspiciatis impedit commodi aperiam assumenda quidem alias totam
              inventore delectus vero voluptatum, et ab quas aliquam amet natus.
              Quos aut ratione nihil distinctio. Itaque sunt ratione veniam
              dicta consequuntur nesciunt qui ipsum?
            </p>
            <p>{newsDetail.content}</p>
          </div>
          <div className="flex items-center gap-4 mt-8">
            <div className="text-sm">Bagikan : </div>
            <BsFacebook className="text-2xl text-blue-500" />
            <FaXTwitter className="text-2xl text-slate-700" />
          </div>
        </div>
        <div className="w-3/12 text-slate-700">
          <div className="pt-[170px]">
            <div className="uppercase font-semibold">Berita Terbaru</div>
            <div className="w-14 h-1  mb-3 bg-red-600"></div>
            {recentNews[0].title !== newsDetail.title && (
              <Link
                to={`/kegiatan/berita/${recentNews[0].title}`}
                className="mb-5"
              >
                <div className="w-11/12 overflow-hidden aspect-video mb-1">
                  <img src={recentNews[0].image} alt="" />
                </div>
                <div className=" leading-5 text-[15px] font-[500]">
                  {recentNews[0].title}
                </div>
                <div className="text-red-500 uppercase text-sm mb-5">
                  {recentNews[0].category}{" "}
                  <span className="text-slate-500">| {recentNews[0].date}</span>
                </div>
              </Link>
            )}
            <div className="flex flex-col leading-6">
              {recentNews.map((news, index) => {
                if (index > 0 && news.title !== newsDetail.title) {
                  return (
                    <Link
                      to={`/kegiatan/berita/${news.title}`}
                      key={index}
                      className="flex gap-3 content-start"
                    >
                      <div className="w-2/5 overflow-hidden aspect-[6/5]">
                        <img src={news.image} alt="" className="object-cover" />
                      </div>
                      <div className="w-3/5">
                        <div className="leading-5 text-[15px] font-[500] mb-2">
                          {news.title}
                        </div>
                        <div className="text-red-500 uppercase text-sm">
                          {news.category}{" "}
                          <span className="text-slate-500">| {news.date}</span>
                        </div>
                      </div>
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetail;

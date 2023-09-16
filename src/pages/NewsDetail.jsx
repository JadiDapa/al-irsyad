import { useParams } from "react-router-dom";
import { BreadCrumb } from "../components";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { news2, news3 } from "../assets";
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

  const [recentNews, setRecentNews] = useState({
    image: "",
    imageCaption: "",
    title: "",
    date: "",
    category: "",
    content: "",
  });

  useEffect(() => {
    axios.get("http://localhost:3000/news").then((res) => {
      const fetchedNewsDetail = res.data.find((news) => news.title === title);
      setNewsDetail(fetchedNewsDetail);
    });

    axios.get("http://localhost:3000/news").then((res) => {
      const fetchedNewsDetail = res.data.splice(-3);
      setRecentNews(fetchedNewsDetail);
    });
  }, [title]);

  return (
    <section className="pt-12 lg:pt-12 lg:px-10 overflow-hidden mb-16">
      <BreadCrumb links={links} />
      <div className="flex gap-12">
        <div className="text mb-6 px-10 w-8/12 border-r">
          <h2 className="text-slate-800 text-4xl font-semibold mb-1">
            {newsDetail.title}
          </h2>
          <div className="text-primary">Berita Masjid AL-ISYAD</div>
          <div className="mb-4">Minggu, {newsDetail.ddate}</div>
          <div className="flex items-center gap-4 mb-8">
            <div className="text-sm">Bagikan : </div>
            <BsFacebook className="text-2xl text-blue-500" />
            <FaXTwitter className="text-2xl text-slate-700" />
          </div>
          <div className=" aspect-video overflow-hiiden">
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
          <div className="">
            <div className="pt-40">Berita Terbaru</div>
            <div className="mb-3">
              <div className="w-11/12 overflow-hidden aspect-video ">
                <img src={news3} alt="" />
              </div>
              <div className="w-4/5 text-justify leading-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
            <div className="flex flex-col gap-6 leading-6">
              <div className="flex gap-3">
                <div className="w-2/5 overflow-hidden aspect-video ">
                  <img src={news3} alt="" />
                </div>
                <div className="w-3/5">
                  <div className="">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2/5 overflow-hidden aspect-video ">
                  <img src={news3} alt="" />
                </div>
                <div className="w-3/5">
                  <div className="">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2/5 overflow-hidden aspect-video ">
                  <img src={news3} alt="" />
                </div>
                <div className="w-3/5">
                  <div className="">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetail;

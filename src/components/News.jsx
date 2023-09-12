import { news1, news2, news3, news4, news5 } from "../assets";
import { BiRightArrow } from "react-icons/bi";

const News = () => {
  let news = [
    {
      image: news1,
      title: " Judul Berita Paling Terbaru",
      date: "25-11-2023",
      category: ["tausyiah", "eid"],
    },
    {
      image: news2,
      title: " Judul Berita Ke-2",
      date: "25-11-2023",
      category: ["tausyiah", "eid"],
    },
    {
      image: news3,
      title: " Judul Berita Ke-3",
      date: "25-11-2023",
      category: ["tausyiah", "eid"],
    },
    {
      image: news4,
      title: " Judul Berita Ke-4",
      date: "25-11-2023",
      category: ["tausyiah", "eid"],
    },
    {
      image: news5,
      title: " Judul Berita Ke-5",
      date: "25-11-2023",
      category: ["tausyiah", "eid"],
    },
  ];
  return (
    <section className="my-12">
      <div className="text text-center mb-6">
        <h2 className="h2 font-play">Berita & Informasi</h2>
        <p className="text-lg">Berita terbaru dari Masjid Al-Irsyad</p>
      </div>
      <div className="container flex mx-auto justify-between gap-3 lg:flex-row flex-col">
        <div className="big lg:w-1/2 w-full p-2 shadow-lg rounded-md hover:-translate-y-1 duration-150 cursor-pointer">
          <div className="mb-2">
            <img src={news[0].image} alt="" />
          </div>
          <div className="">
            <div className="text-xl text-text2 line-clamp-2 leading-9">
              {news[0].title}
            </div>
            <div className="flex justify-between items-center">
              <div className="">
                {news[0].category.map((category) => (
                  <span
                    key={category}
                    className="mr-2 uppercase text-primary font-semibold"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <div className="text-red-600 font-semibold">25-11-2023</div>
            </div>
          </div>
        </div>
        <div className=" smalls w-full flex flex-wrap lg:w-1/2 gap-x-3 gap-y-2">
          {news.map((news, index) => {
            if (index !== 0 && index <= 3) {
              return (
                <div
                  key={index}
                  className={`containersm lg:w-[48%] w-full p-2 shadow-lg rounded-md hover:-translate-y-1 duration-150 cursor-pointer ${
                    index === 3 ? "max-lg:hidden" : ""
                  } `}
                >
                  <div className="">
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
                          {news.category.map((category) => (
                            <span
                              key={category}
                              className="mr-4 uppercase text-sm  text-primary-light font-semibold tracking-wide"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                        <div className="text-sm text-red-600 font-semibold">
                          {news.date}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
          <div className="containersm w-[49%] p-2 rounded-md hidden lg:flex justify-center items-center flex-col gap-4 hover:-translate-y-1 duration-150 group">
            <div className="text-2xl text-secondary drop-shadow-lg font-semibold text-center">
              Baca Berita Lainnya
            </div>
            <div className="text-4xl bg-secondary p-4 rounded-full text-white drop-shadow-md group-hover:-translate-y-1 transition-all duration-150 group-hover:bg-secondary-light">
              <BiRightArrow />
            </div>
          </div>
          <div className="w-full block lg:hidden mt-4 ">
            <div className="text-center flex justify-center items-center gap-2 bg-secondary text-xl  p-2 rounded-full text-white drop-shadow-md hover:bg-secondary-light transition duration-300">
              Baca Berita Lainnya <BiRightArrow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;

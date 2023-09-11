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
      <div className="container flex mx-auto justify-between gap-2 ">
        {/* <div className="big-news  max-w-[50%] lg:">
          <div className="w-full  bg-white rounded-md border w- ">
            <img src={news[0].image} alt="" className="w-full aspect-video" />
            <div className="w-full px-2">
              <div className="text-2xl  my-2">{news[0].title}</div>
              <div className="flex justify-between">
                <div className="">
                  {news[0].category.map((category) => (
                    <span
                      key={category}
                      className="mr-4 uppercase text-primary-light font-semibold tracking-wide"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <div className="">{news[0].date}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="small-news flex w-6/12 flex-wrap gap-2">
          {news.map((news, index) => {
            if (index !== 0) {
              return (
                // <div key={index} className= w-1/2 aspect-video"></div>
                <div
                  key={index}
                  className="w-[49%] aspect-video bg-white rounded-md relative overflow-hidden"
                >
                  <img
                    src={news.image}
                    alt=""
                    className="object-scale-down object-center"
                  />
                  <div className="absolute bottom-0 w-full px-2">
                    <div className="absolute inset-0 bg-black opacity-20 w-full" />
                    <div className="text-xl text-white">{news.title}</div>
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
                      <div className="text-white text-sm">{news.date}</div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div> */}
      </div>

      <div className="container flex mx-auto justify-between gap-3">
        <div className="big w-1/2 p-2 shadow-lg rounded-md hover:-translate-y-1 duration-150 cursor-pointer">
          <div className="mb-2">
            <img src={news[0].image} alt="" />
          </div>
          <div className="">
            <div className="text-xl text-text2 line-clamp-2">
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
        <div className="smalls flex flex-wrap w-1/2 gap-x-3 gap-y-2">
          {news.map((news, index) => {
            if (index !== 0 && index <= 3) {
              return (
                <div
                  key={index}
                  className="containersm w-[49%] p-2 shadow-lg rounded-md hover:-translate-y-1 duration-150 cursor-pointer"
                >
                  <div className="">
                    <img
                      src={news.image}
                      alt=""
                      className="w-full aspect-video"
                    />
                    <div className="">
                      <div className="line-clamp-1 text-lg text-text2">
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
          <div className="containersm w-[49%] p-2 shadow-lg rounded-md flex justify-center items-center flex-col gap-4 hover:-translate-y-1 duration-150 ">
            <div className="text-2xl text-secondary drop-shadow-lg font-semibold">
              Baca Selengkapnya
            </div>
            <div className="text-4xl bg-secondary p-4 rounded-full text-white drop-shadow-md hover:-translate-y-1 transition-all duration-150 hover:bg-secondary-light">
              <BiRightArrow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;

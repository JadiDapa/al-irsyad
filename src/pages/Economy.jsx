import { BreadCrumb } from "../components";
import { Link } from "react-router-dom";
import DotBg from "../assets/DotBg";
import { BsArrowRightCircle } from "react-icons/bs";
import { news1, news2, news3, news4 } from "../assets";

const Economy = () => {
  const links = [{ link: "/ekonomi", text: "Ekonomi" }];
  return (
    <section id="home" className="py-12 lg:pt-12 lg:px-8 px-2 overflow-hidden">
      <BreadCrumb links={links} />
      <div className="container mx-auto lg:px-5 ">
        <div className="text-center mt-8 mb-12">
          <h1 className="text-4xl text-text2 font-semibold font-play ">
            Ekonomi Masjid{" "}
            <span className="max-lg:block font-arab tracking-wider text-primary font-bold">
              AL-IRSYAD
            </span>
          </h1>
          <div className="lg:text-lg text-base max-lg:mt-2">
            Aspek Ekonomi Masjid Al-Irsyad mencakup Finansial, Sumbangan, dan
            lainnya
          </div>
        </div>
        <div className="lg:flex flex-wrap  justify-between relative">
          <div className="absolute opacity-[15%] top-12 left-10 grid grid-cols-2 -z-50">
            <DotBg />
            <DotBg />
            <DotBg />
            <DotBg />
          </div>

          <div className="lg:w-1/2">
            <p className="md:w-[85%] w-full lg:text-base leading-[29px]">
              Masjid Al-Irsyad akan menerima berbagai bentuk sumbangan untuk di
              gunakan dalam perkembangan masjid. Kami juga akan menyumbangkan
              harisl Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              exercitationem laboriosam amet minus dolorum, saepe id animi
              magnam fugiat provident, quod voluptatum itaque iusto unde quaerat
              ipsum quasi. Tempore, unde.
            </p>

            <h2 className="text-3xl font-semibold text-primary mb-4 mt-8">
              Finansial Masjid Al-Irsyad
            </h2>
            <p className="md:w-[85%] w-full lg:text-base leading-[29px]">
              Masjid Al-Irysad akan merekam setiap pengerluaran untuk yang di
              butuhkan atau untuk pengembangan masjid. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Eaque fugiat illo
              necessitatibus ducimus similique dicta quos, velit delectus
              repellat quasi.
            </p>
            <div className="mb-4"></div>
            <Link to="/ekonomi/finansial" className="">
              <button className="flex justify-center items-center gap-2 bg-secondary text-white px-6 py-1 rounded-full uppercase max-lg:mb-12 hover:bg-secondary-dark transition-all duration-300">
                Detail Finansial{" "}
                <span className="text-xl">
                  <BsArrowRightCircle />
                </span>
              </button>
            </Link>

            <h2 className="text-3xl font-semibold text-primary mb-4 mt-8">
              Infak & Donasi Masjid Al-Irsyad
            </h2>
            <p className="md:w-[85%] w-full lg:text-base leading-[29px]">
              Masjid Al-Irysad akan menyusun rangkaian kegiatan yang akan segera
              di laksanakan kedepannya. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Perspiciatis aspernatur quam ipsam quia, aliquid
              explicabo tenetur ab blanditiis vitae ea accusamus error ratione
              debitis rerum labore nesciunt quaerat. Explicabo, fuga!
            </p>
            <div className="mb-4"></div>
            <Link to="/ekonomi/donasi" className="">
              <button className="flex justify-center items-center gap-2 bg-secondary text-white px-6 py-1 rounded-full uppercase max-lg:mb-12 hover:bg-secondary-dark transition-all duration-300">
                DETAIL DONASI{" "}
                <span className="text-xl">
                  <BsArrowRightCircle />
                </span>
              </button>
            </Link>
          </div>
          <div className="lg:w-5/12">
            <div className="w-full mb-16">
              <div className="w-full mb-16">
                <div className="justify-end flex">
                  <div className="p-2 rounded-md shadow-xl lg:w-5/12 ">
                    <img
                      src={news1}
                      alt=""
                      className="rounded-md w-full aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full mb-16">
                <div className="">
                  <div className=" p-2 rounded-md shadow-xl lg:w-5/12 ">
                    <img
                      src={news2}
                      alt=""
                      className="rounded-md w-full aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:flex hidden w-full mb-16">
                <div className="justify-end flex">
                  <div className=" p-2 rounded-md shadow-xl w-5/12 ">
                    <img
                      src={news3}
                      alt=""
                      className="rounded-md w-full aspect-[4/3]"
                    />
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

export default Economy;

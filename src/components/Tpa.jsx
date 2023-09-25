import { Link } from "react-router-dom";
import { tpa1, news1 } from "../assets";
import { BsArrowRightCircle } from "react-icons/bs";

const Tpa = () => {
  return (
    <section className="mb-12 pb-12" id="tpa">
      <div className="text text-center mb-12 px-2">
        <h2 className="md:text-4xl text-2xl font-semibold font-play">
          Lembaga Masjid Al-Irsyad
        </h2>
        <p className="md:text-lg text-base">
          Lembaga-lembaga formal & non-formal yang terdapat di masjid Al-Irsyad
        </p>
      </div>
      <div className="container mx-auto grid lg:grid-cols-2 gap-x-10 mb-8 lg:mb-20">
        <div className="">
          <div className=" overflow-hidden md:p-4 p-2 rounded-md bg-white shadow-xl">
            <div className="overflow-hidden">
              <img
                src={tpa1}
                alt=""
                className="object-left-top object-scale-down aspect-video"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto max-lg:mt-2">
          <div className="md:text-3xl text-xl font-semibold text-text2">
            Taman Pendidikan Al-Qur&apos;an (TPA)
          </div>
          <div className="lg:mt-3 text-justify md:leading-7 md:text-base leading-6 text-sm">
            TPA (Taman Pendidikan Al-Qur'an) Al-Irsyad merupakan salah satu
            lembaga non formal yang membina anak didiknya dengan membaca al
            Qur'an atau mengkaji serta mendalami materi TPA yang bertujuan
            membentuk sikap kepercayaan diri santri berakhlak mulia sesuai
            tutunan al Qur'an dan hadis.
          </div>
          <Link to={"/lembaga/tpa"}>
            <button className="flex gap-2 px-4 md:py-1.5 py-[1px] items-center bg-secondary text-white rounded-full md:text-lg mt-2 hover:bg-secondary-dark active:translate-y-1.5 transition-all duration-150">
              Info Selengkapnya <BsArrowRightCircle />
            </button>
          </Link>
        </div>
      </div>
      <div className="container mx-auto grid lg:grid-cols-2 gap-x-10 mb-8 lg:mb-20">
        <div className="lg:order-2">
          <div className="w-full overflow-hidden md:p-4 p-2 rounded-md bg-white shadow-xl">
            <div className="overflow-hidden aspect-video w-full">
              <img src={news1} alt="" className="w-full object-center" />
            </div>
          </div>
        </div>
        <div className="mx-auto max-lg:mt-2 lg:order-1">
          <div className="md:text-3xl text-xl font-semibold text-text2">
            Masjelis Pengajian Al-Irsyad
          </div>
          <div className="lg:mt-3 text-justify md:leading-7 md:text-base leading-6 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            officia tenetur assumenda porro aliquam maiores reprehenderit nihil
            doloremque. Reiciendis eveniet id odio enim quas nobis commodi ex?
            Fugiat corrupti repellendus architecto necessitatibus ab laborum
            nesciunt cumque ratione id? Deserunt, velit.
          </div>
          <Link to={"/lembaga/majelis"}>
            <button className="flex gap-2 px-4 md:py-1.5 py-[1px] items-center bg-secondary text-white rounded-full md:text-lg mt-2 hover:bg-secondary-dark active:translate-y-1.5 transition-all duration-150">
              {" "}
              Info Selengkapnya <BsArrowRightCircle />
            </button>
          </Link>
        </div>
      </div>
      <div className="container mx-auto grid lg:grid-cols-2 gap-x-10">
        <div className="w-full">
          <div className="w-full md:p-4 p-2 rounded-md bg-white shadow-xl">
            <img src={tpa1} alt="" className="object-cover w-full" />
          </div>
        </div>
        <div className="mx-auto max-lg:mt-2">
          <div className="md:text-3xl text-xl font-semibold text-text2">
            FAKM
          </div>
          <div className="lg:mt-3 text-justify md:leading-7 md:text-base leading-6 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            accusamus veniam error, consequatur animi illum provident delectus,
            velit asperiores atque sequi harum quasi, non dolore tempore rem.
            Rem qui iusto quam enim neque consequuntur odio veniam, voluptatum
            deserunt incidunt saepe!
          </div>
          <Link to={"/lembaga/lupa"}>
            <button className="flex gap-2 px-4 md:py-1.5 py-[1px] items-center bg-secondary text-white rounded-full md:text-lg mt-2 hover:bg-secondary-dark active:translate-y-1.5 transition-all duration-150">
              Info Selengkapnya <BsArrowRightCircle />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Tpa;

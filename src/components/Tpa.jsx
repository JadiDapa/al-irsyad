import { tpa1, news1 } from "../assets";
import { BsArrowRightCircle } from "react-icons/bs";

const Tpa = () => {
  return (
    <section className="mb-12 pb-12">
      <div className="text text-center mb-12">
        <h2 className="h2 font-play">Lembaga Masjid Al-Irsyad</h2>
        <p className="text-lg">
          Lembaga-lembaga formal & non-formal yang terdapat di masjid Al-Irsyad
        </p>
      </div>
      <div className="container mx-auto grid lg:grid-cols-2 gap-x-10">
        <div className="">
          <div className=" overflow-hidden p-4 rounded-md bg-white shadow-xl">
            <div className="overflow-hidden">
              <img
                src={tpa1}
                alt=""
                className="object-left-top object-scale-down aspect-video"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto max-lg:mt-6">
          <div className="text-3xl font-semibold text-text2">
            Taman Pendidikan Al-Qur&apos;an (TPA)
          </div>
          <div className="text-justify">
            TPA (Taman Pendidikan Al-Qur'an) Al-Irsyad merupakan salah satu
            lembaga non formal yang membina anak didiknya dengan membaca al
            Qur'an atau mengkaji serta mendalami materi TPA yang bertujuan
            membentuk sikap kepercayaan diri santri berakhlak mulia sesuai
            tutunan al Qur'an dan hadis.
          </div>
          <button className="flex gap-2 px-4 py-1.5 items-center bg-secondary text-white rounded-full text-lg mt-2 hover:bg-secondary-dark active:translate-y-1.5 transition-all duration-150">
            Info Selengkapnya <BsArrowRightCircle />
          </button>
        </div>
      </div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-x-10 lg:mt-24 mt-12">
        <div className="lg:order-2 order-1">
          <div className=" overflow-hidden p-4 rounded-md bg-white shadow-xl ">
            <div className="overflow-hidden aspect-video">
              <img
                src={news1}
                alt=""
                className="object-left-top object-scale-down"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto max-lg:mt-6  lg:order-1 order-2">
          <div className="text-3xl font-semibold text-text2 ">
            Lembaga Masjid Lainnya
          </div>
          <div className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur ex, magni harum nostrum voluptate laudantium obcaecati
            sequi iure. Ea, earum id! Earum dignissimos voluptas eum. Tempora
            vel iste recusandae mollitia impedit deserunt aliquam officiis
            voluptatibus debitis, expedita quam eius soluta!
          </div>
          <button className="flex gap-2 px-4 py-1.5 items-center bg-secondary text-white rounded-full text-lg mt-2 hover:bg-secondary-dark active:translate-y-1.5 transition-all duration-150">
            Info Selengkapnya <BsArrowRightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tpa;

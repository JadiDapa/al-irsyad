import { useEffect, useState } from "react";
import { gallery1, gallery2, gallery3 } from "../assets";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Welcome = () => {
  const galleryImages = [gallery1, gallery2, gallery3];
  const [imageIndex, setImageIndex] = useState(0);
  const [fade, setFade] = useState(true); // State to control fading effect

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        const nextIndex = (imageIndex + 1) % galleryImages.length;
        setImageIndex(nextIndex);
        setFade(true);
      }, 1000);
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [imageIndex, galleryImages.length]);

  return (
    <section className="bg-grey" id="sambutan">
      <div className="container flex-col md:flex-row mx-auto py-12 flex gap-x-12 items-center ">
        <div className="text px-1 md:w-7/12 flex-1 justify-between ">
          <h2 className="md:text-4xl text-2xl font-light text-center xl:text-left mb-6 leading-[3rem]">
            Selamat Datang
            <span className="block text-[42px] text-secondary font-semibold">
              {" "}
              Di Masjid{" "}
              <span className="block md:inline text-primary font-bold font-arab">
                AL-IRSYAD
              </span>
            </span>
          </h2>
          <h3 className="md:text-2xl text-xl font-semibold font-arab text-center xl:text-left mb-4 tracking-wider">
            Ayo Shalat di Masjid!
          </h3>
          <p className="md:text-[18px] mb-2 font-semibold italic text-slate-700">
            Assalamualaikum warahmatullahi wabarakatuh
          </p>
          <div className="md:text-base md:leading-7 leading-6 text-[15px] text-slate-600 mb-4 text-justify">
            <p className="mb-2">
              Segala puji hanya milik Allah yang Maha Pengasih lagi Maha
              Penyayang. Sholawat serta salam kepada Nabi Muhammad SAW dan para
              keluarganya, sahabat, tabiin. Semoga kita menjadi umatnya yang
              senantiasa istiqomah di jalan yang lurus hingga yaumil qiyamah.
              Amin
            </p>
            <p>
              Selamat datang di website resmi Masjid Al-Irsyad. Semoga hadirnya
              website ini menjadi wasilah silaturahim kita semua untuk bisa
              lebih mengenal Masjid Al-Irsyad. Semoga website ini bermanfaat,
              dan diharapkan dapat menyebarkan infromasi agar lebih mudah di
              jangkau. terima kasih.
            </p>
          </div>
          <Link to="/profil">
            <button className="flex justify-center items-center gap-2 bg-secondary text-white md:px-6 px-3  md:py-2 py-1 text-[15px] md:text-base rounded-full uppercase max-md:mb-3 hover:bg-secondary-dark transition-all duration-300">
              Profil Lengkap{" "}
              <span className="text-xl">
                <BsArrowRightCircle />
              </span>
            </button>
          </Link>
        </div>
        <div className="image w-10/12 md:w-5/12 relative md:mt-6 flex md:justify-end mt-10 ">
          <div className="w-full xl:w-[500px] xl:aspect-square md:aspect-[3/5]  aspect-square border-[16px] border-gray-50 rounded-lg overflow-hidden relative bottom-[20px] left-[25px] shadow-2xl bg-gray-50"></div>
          <div className="w-full xl:w-[500px]  xl:aspect-square  md:aspect-[3/5] aspect-square rounded-lg border-white border-[16px] overflow-hidden absolute top-0 shadow-2xl bg-white flex justify-center items-center">
            <img
              src={galleryImages[imageIndex]}
              alt=""
              className={`rounded-lg w-full ease-in-out transition-all duration-1000  ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

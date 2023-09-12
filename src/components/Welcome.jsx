import { useEffect, useState } from "react";
import { gallery1, gallery2, gallery3 } from "../assets";
import { BsArrowRightCircle } from "react-icons/bs";

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
    <section className="bg-grey">
      <div className="container flex-col lg:flex-row mx-auto py-12 flex gap-x-12">
        <div className="text px-1 lg:w-6/12 flex-1 justify-between">
          <h2 className="text-4xl font-light text-center xl:text-left mb-6 leading-[3rem]">
            Selamat Datang
            <span className="block text-[42px] text-secondary font-semibold">
              {" "}
              Di Masjid{" "}
              <span className="text-primary font-bold font-arab">
                AL-IRSYAD
              </span>
            </span>
          </h2>
          <h3 className="text-2xl font-semibold font-arab text-center xl:text-left mb-4 tracking-wider">
            Ayo Shalat di Masjid!
          </h3>
          <p className="text-[20px] mb-2 font-semibold italic text-slate-700">
            Assalamualaikum warahmatullahi wabarakatuh
          </p>
          <div className="paragraphs text-slate-600 mb-4 text-justify">
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
          <button className="flex justify-center items-center gap-2 bg-secondary text-white px-6 py-2 rounded-full uppercase max-lg:mb-12 hover:bg-secondary-dark transition-all duration-300">
            Profil Lengkap{" "}
            <span className="text-xl">
              <BsArrowRightCircle />
            </span>
          </button>
        </div>
        <div className="image flex-1 h-[520px] relative mt-6  flex justify-end px-12">
          <div className="w-full lg:w-[500px] h-[500px] border-[16px] border-gray-50 rounded-lg overflow-hidden relative bottom-[20px] left-[25px] shadow-2xl bg-gray-50"></div>
          <div className="w-10/12 lg:w-[500px] h-[500px] border-[16px] border-white rounded-lg overflow-hidden absolute top-0 shadow-2xl bg-white flex justify-center items-center">
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

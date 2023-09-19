import { BreadCrumb } from "../components";
import { Link } from "react-router-dom";
import { main } from "../assets";
import DotBg from "../assets/DotBg";

const links = [{ link: "/profile", text: "Profil" }];
const Profile = () => {
  return (
    <section id="home" className=" py-12 lg:px-12 overflow-hidden">
      <BreadCrumb links={links} />
      <div className="container mx-auto lg:px-5 ">
        <div className="text-center mt-8">
          <h1 className="text-4xl text-text2 font-semibold font-play ">
            Profile Masjid{" "}
            <span className="font-arab tracking-wider text-primary font-bold">
              AL-IRSYAD
            </span>
          </h1>
          <div className="text-lg">
            Profile dan Tentang Masjid Al-Irsyad Bukit Hijau, Palembang
          </div>
        </div>
        <div className="flex flex-wrap  justify-between relative">
          <div className="absolute opacity-[15%] top-12 left-10 grid grid-cols-2 -z-50">
            <DotBg />
            <DotBg />
            <DotBg />
            <DotBg />
          </div>

          <div className=" w-1/2">
            <h2 className="text-3xl font-semibold text-primary mb-4 mt-12">
              Masjid Al-Irsyad ?
            </h2>
            <p className="text-justify">
              Masjid AL-IRSYAD adalah masjid yang terletak di Bukit Hijau
              Palembang, Jalan bla bla bla. Masjid Ini dapat dikenali dengan bla
              bla bla Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quia necessitatibus veritatis et perspiciatis! Voluptates numquam
              sed molestiae assumenda sit quis?
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur molestiae quisquam quae, earum quas et, atque, natus
              minima impedit ad a velit facilis quibusdam iste ab ipsum
              voluptatibus libero sit?
            </p>

            <h2 className="text-3xl font-semibold text-primary mb-4 mt-8">
              Ada Apa di Masjid Al-Irsyad
            </h2>
            <p className="text-justify">
              Masjid AL-IRSYAD adalah masjid yang terletak di Bukit Hijau
              Palembang, Jalan bla bla bla. Masjid Ini dapat dikenali dengan bla
              bla bla Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quia necessitatibus veritatis et perspiciatis! Voluptates numquam
              sed molestiae assumenda sit quis?
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur molestiae quisquam quae, earum quas et, atque, natus
              minima impedit ad a velit facilis quibusdam iste ab ipsum
              voluptatibus libero sit?
            </p>
          </div>
          <div
            className="w-5/12 
          "
          >
            <div className="mt-8">
              <img src={main} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-secondary lg:px-4 mt-8 flex items-center gap-6">
        <div className="text-lg font-semibold">Selanjutnya : </div>
        <div className="rounded-md px-2 py-1 shadow-lg bg-white">
          <Link to="/profil/sejarah">Sejarah</Link>
        </div>
        <div className="rounded-md px-2 py-1 shadow-lg bg-white">
          <Link to="/profil/visi-misi">Visi & Misi</Link>
        </div>
      </div>
    </section>
  );
};

export default Profile;

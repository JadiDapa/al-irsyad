import { BreadCrumb } from "../components";
import { profile } from "../assets";
import { Link } from "react-router-dom";
import { dot, main } from "../assets";

const links = [{ link: "/profile", text: "Profil" }];
const Profile = () => {
  return (
    <section id="home" className=" pt-12 lg:pt-12 lg:px-10 overflow-hidden">
      <BreadCrumb links={links} />
      <div className="container mx-auto lg:px-5 ">
        <div className="text-center mb-8">
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
          <div className="absolute opacity-25 -top-4 -left-4">
            <img src={dot} alt="" className="w-[500px]   flex" />
          </div>

          <div className=" w-1/2">
            <h2 className="text-3xl font-semibold text-primary mb-4">
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
          </div>
          <div
            className="w-5/12 
          "
          >
            <div className="">
              <img src={main} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-secondary lg:px-10 mt-8 flex items-center gap-6">
        <div className="text-lg font-semibold">Baca : </div>
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

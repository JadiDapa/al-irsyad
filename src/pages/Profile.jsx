import { BreadCrumb } from "../components";
import { profile } from "../assets";
import { Link } from "react-router-dom";

const links = [{ link: "/profile", text: "Profil" }];
const Profile = () => {
  return (
    <section id="home" className=" pt-12 lg:pt-12 lg:px-10 overflow-hidden">
      <BreadCrumb links={links} />
      <div className="container mx-auto lg:px-5"></div>
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

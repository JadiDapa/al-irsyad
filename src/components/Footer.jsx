import logo from "../assets/logo.png";
import { FaMapMarkerAlt, FaMailBulk } from "react-icons/fa";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoYoutube,
  BiLogoTwitter,
} from "react-icons/bi";
import { BsFillTelephoneFill, BsEnvelopeAtFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer pt-12 lg:pt-[76px] bg-grey">
      <div className="container mx-auto pb-12 lg:pb-[100px]">
        <div className="flex flex-col lg:flex-row gap-x-5 gap-y-10">
          <div className="flex-1 ">
            <a href="#" className="flex justify-center items-center">
              <img src={logo} alt="" className="w-16 mb-[30px]" />
              <div className="font-arab text-3xl text-emerald-600 font-semibold">
                AL-IRSYAD
              </div>
            </a>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Pariatur, beatae.
            </p>
            <div className="flex flex-col gap-y-3 mb-10">
              <div className="flex items-center gap-x-[6px]">
                <FaMapMarkerAlt className="text-2xl text-accent" />
                <div className="">Bukit Hijau, Palembang</div>
              </div>
              <div className="flex items-center gap-x-[6px]">
                <BsEnvelopeAtFill className="text-2xl text-accent" />
                <div className="">alirsyadPlg@gmail.com</div>
              </div>{" "}
              <div className="flex items-center gap-x-[6px]">
                <BsFillTelephoneFill className="text-2xl text-accent" />
                <div className="">(+62)123 1234 5678</div>
              </div>{" "}
            </div>
            <div className=" flex gap-[14px] text-[30px]">
              <div className="p-[10px] rounded-[10px] shadow-md text-emerald-400 hover:text-accent cursor-pointer transition-all">
                <BiLogoFacebookCircle />
              </div>
              <div className="p-[10px] rounded-[10px] shadow-md text-emerald-400 hover:text-accent cursor-pointer transition-all">
                <BiLogoInstagram />
              </div>
              <div className="p-[10px] rounded-[10px] shadow-md text-emerald-400 hover:text-accent cursor-pointer transition-all">
                <BiLogoYoutube />
              </div>
              <div className="p-[10px] rounded-[10px] shadow-md text-emerald-400 hover:text-accent cursor-pointer transition-all">
                <BiLogoTwitter />
              </div>
            </div>
          </div>
          <div className="flex-1 lg:mt-8">
            <h4 className="h4 mb-5">Quick Links</h4>
            <div className="flex gap-x-5">
              <ul className="flex-1 flex-col flex gap-y-5">
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Profil
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Organisasi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Kegiatan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Kontak
                  </a>
                </li>
              </ul>
              <ul className="flex-1 flex-col flex gap-y-5">
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Profil
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Organisasi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Kegiatan
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-all">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 ">
            <h4 className="h4 mb-5 lg:mt-8">Jam Operasional</h4>
            <div className="">
              <div className="flex-1">
                <div className="flex justify-between items-center border-b pb-[10px]">
                  <div className="">Senin - Jum&lsquo;at</div>
                  <div className="text-accent">03.30 - 22.00</div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center border-b pb-[10px]">
                  <div className="">Sabtu - Minggu</div>
                  <div className="text-accent">03.00 - 21.00</div>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center border-b pb-[10px]">
                  <div className="">Shalat Jum&lsquo;at</div>
                  <div className="text-accent">11.00 - 13.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[20px] border-t">
        <div className="container mx-auto text-center">
          <div className="">
            Dewan Operasional Masjid AL-IRSYAD <br /> 2023
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

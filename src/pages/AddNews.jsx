import { useState } from "react";
import { main } from "../assets";
import { logo } from "../assets";
import TextEditor from "../components/TextEditor";
import { Link } from "react-router-dom";

const AddNews = () => {
  const [sampul, setSampul] = useState("");
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Read the selected file as a data URL
      const reader = new FileReader();
      reader.onload = (event) => {
        setSampul(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <main className="py-[120px] px-[105px] bg-grey">
      <div className="mx-auto container bg-white px-[107px] py-8">
        <div className="flex justify-center gap-8 items-center py-8 border-b border-slate-400">
          <img src={logo} alt="" className="w-[130px] aspect-square" />
          <div className="">
            <h1 className="text-primary uppercase text-3xl font-bold mb-5">
              Form Tambah Berita
            </h1>
            <div className="text-xl font-[400]">
              Isilah dengan ketentuan yang di sediakan
            </div>
          </div>
        </div>
        <div className="border-b  border-slate-400 flex gap-x-8 py-10">
          <div className="w-[27%]">
            <h3 className="indent-3 text-xl font-semibold">Identitas Berita</h3>
            <div className="leading-6 text-justify">
              Bagian yang memberikan identitas dan keterangan berita secara
              umum. Bagian ini akan menjadi yang paling menonjol pada laman
              berita yang ditampilkan
            </div>
          </div>
          <div className="w-[73%]">
            <div className="flex flex-col gap-y-4">
              <div className="w-full">
                <label htmlFor="" className="text-lg text-slate-700">
                  Judul Berita
                </label>
                <input
                  type="text"
                  className="border rounded-[7px] px-3 block w-full border-slate-400 focus:outline-primary focus:ring-primary"
                />
              </div>
              <div className="w-full grid grid-cols-2 gap-x-5">
                <div className="">
                  <label htmlFor="" className="text-lg text-slate-700">
                    Kategori
                  </label>
                  <select
                    name=""
                    id=""
                    className=" block w-full py-[5px] border rounded-[6px] border-slate-400 focus:outline-primary focus:ring-primary"
                  >
                    <option value="">TAUSYIAH</option>
                    <option value="">CERAMAH</option>
                    <option value="">PENGAJIAN</option>
                  </select>
                </div>
                <div className="">
                  <label htmlFor="" className="text-lg text-slate-700">
                    Penulis
                  </label>
                  <input
                    type="text"
                    className="block border rounded-[7px] px-3 border-slate-400 focus:outline-primary focus:ring-primary w-full"
                  />
                </div>
              </div>
              <div className="w-full flex gap-x-5">
                <div className="w-[50%]">
                  <div className="w-full mb-3">
                    <label htmlFor="" className="text-lg  text-slate-700 mr-6">
                      Sampul Berita
                    </label>
                    <input
                      type="file"
                      className="block w-full text-sm text-gray-900 border border-slate-400  cursor-pointer p-1 rounded-[5px] focus:outline-none"
                      onChange={(e) => handleImageChange(e)}
                    />
                    <p
                      className="mt-1 text-sm text-gray-500 "
                      id="file_input_help"
                    >
                      SVG, PNG, JPG or GIF (MAX. 800x400px).
                    </p>
                  </div>
                  <div className="">
                    <label htmlFor="" className="text-lg  text-slate-700">
                      Keterangan Sampul
                    </label>
                    <input
                      type="text"
                      className="block border rounded-[7px] px-3 border-slate-400 focus:outline-primary focus:ring-primary w-full"
                    />
                  </div>
                </div>
                <div className="w-[50%] mt-5">
                  <div className="w-full p-3 border-white shadow-lg rounded-lg">
                    {sampul ? (
                      <img
                        src={sampul}
                        alt=""
                        className="w-full aspect-video object-contain border rounded-lg"
                      />
                    ) : (
                      <div className="w-full aspect-video object-contain border rounded-lg flex justify-center items-center font-semibold text-2xl">
                        NO IMAGE
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b  border-slate-400 flex gap-x-8 py-10">
          <div className="w-full">
            <div className="text-center text-2xl font-semibold mb-4">
              Isi Berita
            </div>
            <div className="flex justify-center">
              <div className="w-11/12">
                <TextEditor placeholder={"Masukkan Isi Berita"} />
              </div>
            </div>
            <button>Lihat Preview Berita</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddNews;

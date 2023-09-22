import { useState } from "react";
import { main } from "../assets";
import { logo } from "../assets";
import TextEditor from "../components/TextEditor";
import { Link } from "react-router-dom";

const AddFinancial = () => {
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
              Form Tambah Finansial
            </h1>
            <div className="text-xl font-[400]">
              Isilah dengan ketentuan yang di sediakan
            </div>
          </div>
        </div>
        <div className="border-b  border-slate-400 flex gap-x-8 py-10">
          <div className="flex flex-col gap-y-4 w-full">
            <div className="w-full">
              <label htmlFor="" className="text-lg text-slate-700">
                Perihal Keuangan
              </label>
              <input
                type="text"
                className="border rounded-[7px] px-3 block w-full border-slate-400 focus:outline-primary focus:ring-primary"
              />
            </div>
            <div className="w-full grid grid-cols-2 gap-x-5">
              <div className="">
                <label htmlFor="" className="text-lg text-slate-700">
                  Nilai Tunai (Rp)
                </label>
                <input
                  type="text"
                  className="block border rounded-[7px] px-3 border-slate-400 focus:outline-primary focus:ring-primary w-full"
                />
              </div>
              <div className="flex items-end pb-2 justify-between px-10">
                <div className="flex items-center">
                  <input
                    id="default-radio-1"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ml-2  font-medium text-xl text-primary "
                  >
                    Uang Masuk
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="default-radio-2"
                    type="radio"
                    value=""
                    name="default-radio"
                    className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
                  />
                  <label
                    htmlFor="default-radio-2"
                    className="ml-2  font-medium text-xl text-red-500"
                  >
                    Uang Keluar
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b  border-slate-400 flex gap-x-8 py-10">
          <div className="w-full">
            <div className="text-center text-2xl font-semibold mb-4">
              DETAIL
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

export default AddFinancial;

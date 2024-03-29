import { useState } from "react";
import { logo } from "../assets";
import TextEditor from "../components/TextEditor";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

const AddDonation = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("Donatur");
  const [status, setStatus] = useState("");
  const [content, setContent] = useState("");
  const [titleVd, setTitleVd] = useState("Judul harus di isi");
  const [valueVd, setValueVd] = useState("Pilih status");
  const [statusVd, setStatusVd] = useState("Masukkan Nilai Barang");
  const [contentVd, setContentVd] = useState("Konten Berita harus di isi");
  const [titleError, setTitleError] = useState("");

  const everything = titleVd || statusVd || valueVd || statusVd || contentVd;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateToFormat = new Date();
    const date = format(dateToFormat, "MMMM d, yyyy");
    const datas = {
      title,
      status,
      value,
      content,
      date,
    };
    axios
      .post("https://api.masjidal-irsyad.com/api/donations", datas)
      .then((res) => {
        navigate("/admin/donasi");
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.error) {
          setTitleError(err.response.data.error);
        } else {
          console.log(err);
        }
      });
  };

  const handleTitle = (e) => {
    const titleValue = e.target.value;
    setTitle(titleValue);
    if (titleValue.length < 10) {
      setTitleVd("Minimal 10 Karakter");
    } else if (titleValue.length > 100) {
      setTitleVd("Judul tidak boleh lebih dari 50 Karakter");
    } else if (titleValue.length === 0) {
      setTitleVd("Judul harus di Isi");
    } else {
      setTitleVd(null);
    }
  };

  const handleStatus = (e) => {
    const value = e.target.value;
    setStatus(value);
    if (value.length === 0) {
      setStatusVd("Pilih Status");
    } else {
      setStatusVd(null);
    }
  };

  const handleValue = (e) => {
    const value = e.target.value;
    setValue(value);
    if (value.length === 0) {
      setValueVd("Masukkan Nilai Barang");
    } else {
      setValueVd(null);
    }
  };

  const handleContent = (e) => {
    const value = e;
    setContent(value);
    if (value.length < 50) {
      setContentVd("Minimal 50 Karakter");
    } else if (value.length === 0) {
      setContent("Judul harus di Isi");
    } else {
      setContentVd(null);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:py-[120px] md:px-[105px] bg-grey"
    >
      <div className="mx-auto container bg-white md:px-[107px] py-8">
        <div className="flex justify-center gap-8 items-center py-8 border-b border-slate-400">
          <img src={logo} alt="" className="w-[130px] aspect-square" />
          <div className="">
            <h1 className="text-primary uppercase text-3xl font-bold mb-5">
              Form Tambah Donasi
            </h1>
            <div className="text-xl font-[400] max-md:hidden">
              Isilah dengan ketentuan yang di sediakan
            </div>
          </div>
        </div>
        <div className="border-b  border-slate-400 flex gap-x-8 py-10">
          <div className="flex flex-col gap-y-4 w-full">
            <div className="w-full">
              <label htmlFor="title" className="text-lg text-slate-700">
                Perihal Donasi
              </label>
              <input
                onChange={(e) => handleTitle(e)}
                type="text"
                id="title"
                className={`border rounded-[7px] px-3 block w-full border-slate-400 focus:outline-primary focus:ring-primary ${
                  titleError && "border-red-600"
                }`}
              />
              {titleVd && <small>{titleVd}</small>}
              {titleError && (
                <small className="text-red-500">{titleError}</small>
              )}
            </div>
            <div className="w-full md:grid grid-cols-2 gap-x-5">
              <div className="mb-4">
                <label htmlFor="value" className="text-lg text-slate-700">
                  Nilai Barang
                </label>
                <input
                  onChange={(e) => handleValue(e)}
                  id="value"
                  type="text"
                  className="block border rounded-[7px] px-3 border-slate-400 focus:outline-primary focus:ring-primary w-full"
                />
                {valueVd && <small>{valueVd}</small>}
              </div>
              <div className="flex items-center  self-center gap-x-8 w-full">
                <div className="flex items-center">
                  <input
                    id="donatur"
                    type="radio"
                    value="donatur"
                    name="default-radio"
                    onChange={(e) => handleStatus(e)}
                    className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
                  />
                  <label
                    htmlFor="donatur"
                    className="ml-2  font-medium text-xl text-primary "
                  >
                    Donatur
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="penerima"
                    type="radio"
                    value="penerima"
                    name="default-radio"
                    onChange={(e) => handleStatus(e)}
                    className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
                  />
                  <label
                    htmlFor="penerima"
                    className="ml-2  font-medium text-xl text-yellow-500"
                  >
                    Penerima
                  </label>
                </div>
                {statusVd && <small>{statusVd}</small>}
              </div>
            </div>
          </div>
        </div>
        <div className="border-b  border-slate-400 flex gap-x-8 py-10">
          <div className="w-full flex flex-col items-center gap-y-4">
            <div className="text-center text-2xl font-semibold ">DETAIL</div>
            <div className="flex justify-center">
              <div className="md:w-11/12 w-full">
                <TextEditor
                  placeholder={"Masukkan Isi Berita"}
                  handleContent={handleContent}
                  content={content}
                />
                {contentVd && <small>{contentVd}</small>}
              </div>
            </div>
            <button
              type={everything ? "button" : "submit"}
              className="px-5 py-0.5 bg-secondary text-white rounded-xl"
            >
              Submit Data
            </button>
            {everything && (
              <small className="text-red-500">
                Harap isi semua input sesuai ketentuannya
              </small>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddDonation;

import { useState } from "react";
import { logo } from "../assets";
import TextEditor from "../components/TextEditor";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

const AddPlan = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(null);
  const [estimated, setEstimated] = useState("");
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [content, setContent] = useState("");
  const [titleVd, setTitleVd] = useState("Judul harus di isi");
  const [statusVd, setStatusVd] = useState("Pilih Status");
  const [estimatedVd, setEstimatedVd] = useState(
    "Tanggal Estimasi harus di isi"
  );
  const [captionVd, setCaptionVd] = useState("Keterangan Gambar harus di isi");
  const [contentVd, setContentVd] = useState("Konten Berita harus di isi");
  const [imageVd, setImageVd] = useState("sampul berita harus di ada");
  const [titleError, setTitleError] = useState("");

  const everything =
    titleVd || statusVd || estimatedVd || imageVd || contentVd || captionVd;

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const dateToFormat = new Date();
    const date = format(dateToFormat, "MMMM d, yyyy");

    formData.append("title", title);
    formData.append("status", status);
    formData.append("estimated", estimated);
    formData.append("caption", caption);
    formData.append("content", content);
    formData.append("image", image);
    formData.append("date", date);

    axios
      .post("https://al-irysad-backend-api.vercel.app/plan", formData)
      .then(() => {
        navigate("/admin/rencana");
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

  const handleEstimated = (e) => {
    const value = e.target.value;
    setEstimated(value);
    if (value.length === 0) {
      setEstimated("Tanggal Estimasi harus di isi");
    } else {
      setEstimatedVd(null);
    }
  };

  const handleCaption = (e) => {
    const value = e.target.value;
    setCaption(value);
    if (value.length < 5) {
      setCaptionVd("Minimal 5 Karakter");
    } else if (value.length > 50) {
      setCaptionVd("Tidak boleh lebih dari 50 Karakter");
    } else if (value.length === 0) {
      setCaption("Keterangan gambar harus di Isi");
    } else {
      setCaptionVd(null);
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

  const [sampulTampil, setSampulTampil] = useState("");
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      // Read the selected file as a data URL
      const reader = new FileReader();
      reader.onload = (event) => {
        setSampulTampil(event.target.result);
        setImageVd(null);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:py-[120px] md:px-[105px] bg-grey"
    >
      <div className="mx-auto container bg-white md:px-[107px] py-8">
        <div className="flex justify-center gap-8 items-center py-8 border-b border-slate-400">
          <img src={logo} alt="" className="md:w-[130px] w-28 aspect-square" />
          <div className="">
            <h1 className="text-primary uppercase text-2xl md:text-3xl font-bold mb-5">
              Form Tambah Rencana
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
                Perihal Rencana
              </label>
              <input
                type="text"
                id="title"
                className={`border rounded-[7px] px-3 block w-full border-slate-400 focus:outline-primary focus:ring-primary ${
                  titleError && "border-red-600"
                }`}
                onChange={(e) => handleTitle(e)}
              />
              {titleVd && <small>{titleVd}</small>}
              {titleError && (
                <small className="text-red-500">{titleError}</small>
              )}
            </div>
            <div className="w-full md:grid grid-cols-2 gap-x-5">
              <div className="flex items-end  self-center gap-x-12">
                <div className="flex items-center">
                  <input
                    id="terencana"
                    type="radio"
                    value="terencana"
                    name="default-radio"
                    onChange={(e) => handleStatus(e)}
                    className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
                  />
                  <label
                    htmlFor="terencana"
                    className="ml-2  font-medium text-xl text-yellow-500 "
                  >
                    Terencana
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="terpenuhi"
                    type="radio"
                    value="terpenuhi"
                    name="default-radio"
                    onChange={(e) => handleStatus(e)}
                    className="w-4 h-4  text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
                  />
                  <label
                    htmlFor="tepenuhi"
                    className="ml-2  font-medium text-xl text-primary"
                  >
                    Terpenuhi
                  </label>
                </div>
                {statusVd && <small className="">{statusVd}</small>}
              </div>
              <div className="">
                <label htmlFor="estimated" className="text-lg text-slate-700">
                  Estimasi
                </label>
                <input
                  onChange={(e) => handleEstimated(e)}
                  type="date"
                  id="estimated"
                  className="block border rounded-[7px] px-3 border-slate-400 focus:outline-primary focus:ring-primary w-full"
                />
                {estimatedVd && <small>{estimatedVd}</small>}
              </div>
            </div>
            <div className="w-full md:flex gap-x-5">
              <div className="md:w-[50%]">
                <div className="w-full mb-3">
                  <label
                    htmlFor="image"
                    className="text-lg  text-slate-700 mr-6"
                  >
                    Sampul Recana
                  </label>
                  <input
                    id="image"
                    type="file"
                    className="block w-full text-sm text-gray-900 border border-slate-400  cursor-pointer p-1 rounded-[5px] focus:outline-none"
                    onChange={(e) => handleImageChange(e)}
                  />
                  <p className="mt-1 text-sm text-gray-500 ">
                    SVG, PNG, JPG or GIF
                  </p>
                </div>
                <div className="">
                  <label htmlFor="caption" className="text-lg  text-slate-700">
                    Keterangan Sampul
                  </label>
                  <input
                    onChange={(e) => handleCaption(e)}
                    type="text"
                    id="caption"
                    className="block border rounded-[7px] px-3 border-slate-400 focus:outline-primary focus:ring-primary w-full"
                  />
                </div>
                {captionVd && <small>{captionVd}</small>}
              </div>
              <div className="md:w-[50%] mt-5">
                <div className="w-full p-3 border-white shadow-lg rounded-lg">
                  {sampulTampil ? (
                    <img
                      src={sampulTampil}
                      alt={sampulTampil}
                      className="w-full aspect-video object-contain border rounded-lg"
                    />
                  ) : (
                    <div className="w-full aspect-video object-contain border rounded-lg flex justify-center items-center font-semibold text-2xl">
                      NO IMAGE
                    </div>
                  )}
                </div>
                {imageVd && <small>{imageVd}</small>}
              </div>
            </div>
          </div>
        </div>
        <div className="border-b  border-slate-400 flex gap-x-8 py-10">
          <div className="w-full flex flex-col items-center gap-y-4">
            <div className="text-center text-2xl font-semibold ">
              DETAIL RENCANA
            </div>
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

export default AddPlan;

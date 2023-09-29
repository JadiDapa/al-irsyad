import { useState } from "react";
import { logo } from "../assets";
import TextEditor from "../components/TextEditor";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

const AddNews = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("TAUSYIAH");
  const [writer, setWriter] = useState("");
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [content, setContent] = useState("");
  const [titleVd, setTitleVd] = useState("Judul harus di Isi");
  const [writerVd, setWriterVd] = useState("Penulis harus di Isi");
  const [captionVd, setCaptionVd] = useState("Keterangan Gambar harus di isi");
  const [contentVd, setContentVd] = useState("Konten Berita harus di isi");
  const [imageVd, setImageVd] = useState("sampul berita harus di ada");
  const [titleError, setTitleError] = useState("");

  axios.defaults.withCredentials = true;

  const everything = titleVd || writerVd || imageVd || contentVd || captionVd;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const dateToFormat = new Date();
    const date = format(dateToFormat, "MMMM d, yyyy");

    formData.append("title", title);
    formData.append("category", category);
    formData.append("writer", writer);
    formData.append("caption", caption);
    formData.append("content", content);
    formData.append("image", image);
    formData.append("date", date);

    axios
      .post("https://al-irysad-backend-api.vercel.app/news", formData)
      .then((result) => {
        navigate("/admin/berita");
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

  const handleCategory = (e) => {
    const value = e.target.value;
    setCategory(value);
  };

  const handleWriter = (e) => {
    const value = e.target.value;
    setWriter(value);
    if (value.length < 2) {
      setWriterVd("Minimal 2 Karakter");
    } else if (value.length > 50) {
      setWriterVd("Judul tidak boleh lebih dari 50 Karakter");
    } else if (value.length === 0) {
      setWriterVd("Penulis harus di Isi");
    } else {
      setWriterVd(null);
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
              Form Tambah Berita
            </h1>
            <div className="text-xl font-[400] max-md:hidden">
              Isilah dengan ketentuan yang di sediakan
            </div>
          </div>
        </div>
        <div className="border-b  border-slate-400 flex gap-x-8 py-10">
          <div className="max-md:hidden w-[27%]">
            <h3 className="indent-3 text-xl font-semibold">Identitas Berita</h3>
            <div className="leading-6 text-justify">
              Bagian yang memberikan identitas dan keterangan berita secara
              umum. Bagian ini akan menjadi yang paling menonjol pada laman
              berita yang ditampilkan
            </div>
          </div>
          <div className="md:w-[73%] w-full">
            <div className="flex flex-col gap-y-4">
              <div className="w-full">
                <label htmlFor="title" className="text-lg text-slate-700">
                  Judul Berita
                </label>
                <input
                  type="text"
                  className={`border rounded-[7px] px-3 block w-full border-slate-400 focus:outline-primary focus:ring-primary ${
                    titleError && "border-red-600"
                  }`}
                  id="title"
                  onChange={(e) => handleTitle(e)}
                />
                {titleVd && <small>{titleVd}</small>}
                {titleError && (
                  <small className="text-red-500">{titleError}</small>
                )}
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
                    onChange={(e) => handleCategory(e)}
                  >
                    <option value="tausyiah">TAUSYIAH</option>
                    <option value="ceramah">CERAMAH</option>
                    <option value="pengajian">PENGAJIAN</option>
                  </select>
                </div>
                <div className="">
                  <label htmlFor="" className="text-lg text-slate-700">
                    Penulis
                  </label>
                  <input
                    type="text"
                    onChange={(e) => handleWriter(e)}
                    className="block border rounded-[7px] px-3 border-slate-400 focus:outline-primary focus:ring-primary w-full"
                  />
                  {writerVd && <small>{writerVd}</small>}
                </div>
              </div>
              <div className="w-full md:flex gap-x-5">
                <div className="md:w-[50%]">
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
                      onChange={(e) => handleCaption(e)}
                      className="block border rounded-[7px] px-3 border-slate-400 focus:outline-primary focus:ring-primary w-full"
                    />
                    {captionVd && <small>{captionVd}</small>}
                  </div>
                </div>
                <div className="md:w-[50%] mt-5">
                  <div className="w-full p-3 border-white shadow-lg rounded-lg">
                    {sampulTampil ? (
                      <img
                        src={sampulTampil}
                        alt=""
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
        </div>
        <div className="border-b  border-slate-400 flex gap-x-8 py-10">
          <div className="w-full flex flex-col items-center gap-y-4">
            <div className="text-center text-2xl font-semibold">Isi Berita</div>
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
                Terdapat kesalahan pada data
              </small>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddNews;

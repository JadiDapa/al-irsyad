import { ModalsDonation } from "./Modals";
import { useEffect, useState } from "react";
import axios from "axios";

const DonationTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalId, setModalId] = useState(null);
  function handleClose(index = null) {
    setIsOpen(!isOpen);
    setModalId(index);
  }

  const [donation, setDonation] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/donation").then((res) => {
      const reversedNews = res.data.reverse();
      setDonation(reversedNews);
    });
  }, []);

  return (
    <>
      <div className="md:bg-white md:px-3 md:py-4 md:rounded-lg md:shadow-xl">
        <table className="w-full lg:min-h-[428px] max-md:hidden">
          <tbody>
            <tr className="border-b-2 border-slate-300 w-full font-semibold">
              <td className="pl-2 w-2/12">TANGGAL</td>
              <td className="px-1 w-6/12">PERIHAL</td>
              <td className="px-1 w-2/12">STATUS</td>
              <td className="px-[10px] w-3/12">AKSI</td>
            </tr>
            {donation.map((donasi, index) => {
              if (index < 9) {
                return (
                  <>
                    {isOpen && (
                      <ModalsDonation
                        isOpen
                        handleClose={handleClose}
                        financial={donasi}
                        index={index}
                        modalId={modalId}
                      />
                    )}
                    <tr
                      key={index}
                      className={`w-full text-base ${
                        index % 2 == 0 ? "bg-gray-100" : "bg-white"
                      } `}
                    >
                      <td className="pl-2 py-2 w-2/12">{donasi.date}</td>
                      <td className=" py-2 w-6/12">{donasi.title}</td>
                      <td
                        className={`py-2 w-2/12 text-green-500  text-xl leading-6 ${
                          donasi.status === "Donatur"
                            ? "text-primary"
                            : "text-secondary-dark"
                        }`}
                      >
                        {donasi.status}
                      </td>
                      <td
                        onClick={() => handleClose(index)}
                        className={`pl-[10px] py-2 w-3/12 text-lg leading-6 text-primary underline cursor-pointer hover:text-primary-light`}
                      >
                        Detail
                      </td>
                    </tr>
                  </>
                );
              }
            })}
          </tbody>
        </table>
      </div>
      <div className="md:hidden">
        {donation.map((donasi, index) => {
          return (
            <div
              key={index}
              className="bg-white mb-2 px-2 py-2 rounded-md shadow-md"
            >
              <div className="flex justify-between items-center">
                <div className="text-lg max-w-xs line-clamp-2">
                  {donasi.title}
                </div>
                <div className="text-sm font-light">{donasi.date}</div>
              </div>
              <div
                className={`py-2 text-green-500 leading-6 ${
                  donasi.status === "Donatur"
                    ? "text-primary"
                    : "text-secondary-dark"
                }`}
              >
                {donasi.status}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DonationTable;

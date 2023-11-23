import { useCallback, useEffect, useState } from "react";
import { LuChevronsUp, LuChevronsDown } from "react-icons/lu";
import FinancialTable from "./FinancialTable";
import axios from "axios";

const Financial = () => {
  const [financials, setFinancials] = useState([]);
  const [isDescend, setisDescend] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFinancial, setFilteredFinancial] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [activeElement, setActiveElement] = useState("");
  const [previousFinancials, setPreviousFinancials] = useState([]);

  const formattedValue = (value) => {
    const splittedMoney = value.toString().split(".");
    splittedMoney[0] = splittedMoney[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return splittedMoney.join(".");
  };

  const calculateTotalMoney = useCallback(() => {
    let totalMoney = 0;

    if (previousFinancials.length > 0) {
      previousFinancials.forEach((financial) => {
        if (financial.status === "masuk") {
          totalMoney += Number(financial.value);
        } else if (financial.status === "keluar") {
          totalMoney -= Number(financial.value);
        }
      });
    } else {
      financials.forEach((financial) => {
        if (financial.status === "masuk") {
          totalMoney += Number(financial.value);
        } else if (financial.status === "keluar") {
          totalMoney -= Number(financial.value);
        }
      });
    }

    return formattedValue(totalMoney);
  }, [previousFinancials, financials]);

  useEffect(() => {
    axios.get("http://localhost:3001/financial").then((res) => {
      const reversedNews = res.data.reverse();
      setFinancials(reversedNews);
    });
  }, []);

  const [money, setMoney] = useState(calculateTotalMoney());

  useEffect(() => {
    setMoney(calculateTotalMoney());
  }, [calculateTotalMoney]);

  useEffect(() => {
    const filtered = financials.filter((financial) => {
      return financial.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    setFilteredFinancial(filtered);
  }, [searchQuery, financials, selectedStatus]);

  const handleDescend = () => {
    setisDescend(!isDescend);
    setFinancials([...financials].reverse());
  };

  const allData = () => {
    setActiveElement("Semua Data");
    if (previousFinancials.length > 0) {
      setFinancials(previousFinancials);
    } else {
      setPreviousFinancials(financials);
    }
  };

  const uangMasuk = () => {
    setActiveElement("Uang Masuk");
    if (previousFinancials.length > 0) {
      const filteredFinancials = previousFinancials.filter(
        (item) => item.status === "masuk"
      );
      setFinancials(filteredFinancials);
    } else {
      setPreviousFinancials(financials);
      const filteredFinancials = financials.filter(
        (item) => item.status === "masuk"
      );
      setFinancials(filteredFinancials);
    }
  };

  const uangKeluar = () => {
    setActiveElement("Uang Keluar");
    if (previousFinancials.length > 0) {
      const filteredFinancials = previousFinancials.filter(
        (item) => item.status === "keluar"
      );
      setFinancials(filteredFinancials);
    } else {
      setPreviousFinancials(financials);
      const filteredFinancials = financials.filter(
        (item) => item.status === "keluar"
      );
      setFinancials(filteredFinancials);
    }
  };

  return (
    <section className="mb-12 py-12 bg-grey" id="keuangan">
      <div className="text text-center mb-12">
        <h2 className="h2 font-play">Pemasukan & Pengeluaran Keuangan</h2>
        <p className="text-lg">
          Daftar uang masuk dan keluar dari keuangan Masjid Al-Irsyad
        </p>
      </div>
      <div className="container w-full mx-auto grid lg:grid-cols-[minmax(0,40%)_minmax(0,_60%)] gap-x-6 overflow-hidden">
        <div className="total md:px-4 w-full">
          <h2 className="md:text-3xl text-xl text-slate-700 font-semibold ">
            Total Dana Masjid Al-Irsyad
          </h2>
          <div className="mb-2 md:text-2xl text-lg font-semibold text-secondary">
            Agustus 2023
          </div>
          <div className="text-4xl text-primary font-bold mb-4">Rp {money}</div>
          <div className="sm:w-full ">
            <div className="md:text-lg text-base">
              Berikut adalah daftar yang menyangkut ke seluruh pengelolaan dana,
              seperti uang infak, donasi, dan lainnya.
            </div>
            <a
              href=""
              className="text-secondary mt-4 underline cursor-pointer hover:text-secondary-light"
            >
              Lihat pemasukan dan pengeluaran bulan sebelumnya &raquo;
            </a>
          </div>
        </div>

        <div className="table">
          <div className="bg-white px-3 py-2 rounded-lg flex flex-col mb-2 shadow-lg">
            <div className="w-full flex gap-4 max-md:justify-between">
              <div className="max-md:hidden ">Filter Berdasarkan :</div>
              <div className=" flex flex-col ">
                <div className="w-full flex gap-4 flex-wrap">
                  <div
                    onClick={() => allData("Semua Data")}
                    className={`px-4 shadow-md rounded-full ${
                      activeElement === "Semua Data"
                        ? "bg-primary text-white"
                        : "bg-white"
                    } cursor-pointer`}
                  >
                    Semua Data
                  </div>
                  <div
                    onClick={() => uangMasuk("Uang Masuk")}
                    className={`px-4 shadow-md rounded-full ${
                      activeElement === "Uang Masuk"
                        ? "bg-primary text-white"
                        : "bg-white"
                    } cursor-pointer`}
                  >
                    Uang Masuk
                  </div>
                  <div
                    onClick={() => uangKeluar("Uang Keluar")}
                    className={`px-4 shadow-md rounded-full ${
                      activeElement === "Uang Keluar"
                        ? "bg-primary text-white"
                        : "bg-white"
                    } cursor-pointer`}
                  >
                    Uang Keluar
                  </div>

                  <button
                    onClick={() => handleDescend()}
                    className="max-md:mx-auto max-md:text-2xl px-1.5 bg-blue-400 text-white rounded-lg text-lg shadow-md active:translate-y-0.5 hover:bg-blue-600 duration-150 transition-all"
                  >
                    {isDescend ? <LuChevronsDown /> : <LuChevronsUp />}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <FinancialTable
            financials={financials.reverse()}
            formattedValue={formattedValue}
          />
        </div>
      </div>
    </section>
  );
};

export default Financial;

import { useCallback, useEffect, useState } from "react";
import { LuChevronsUp, LuChevronsDown } from "react-icons/lu";
import FinancialTable from "../components/FinancialTable";
import { BreadCrumb } from "../components";
import Pagination from "../components/Pagination";

const Finance = () => {
  const [isDescend, setisDescend] = useState(true);

  const [financials, setFinancials] = useState([
    {
      date: "1/09/2023",
      title: "Infak pesantren JadiDapa",
      status: true,
      value: "1000000",
    },
    {
      date: "3/09/2023",
      title: "Infak pesantren JadiDapa",
      status: false,
      value: "200000",
    },
    {
      date: "4/09/2023",
      title: "Infak pesantren JadiDapa",
      status: false,
      value: "400000",
    },
    {
      date: "7/09/2023",
      title: "Infak pesantren JadiDapa",
      status: true,
      value: "5000000",
    },
    {
      date: "8/09/2023",
      title: "Infak pesantren JadiDapa",
      status: true,
      value: "100000",
    },
    {
      date: "10/09/2023",
      title: "Infak pesantren JadiDapa",
      status: false,
      value: "100000",
    },
    {
      date: "12/09/2023",
      title: "Infak pesantren JadiDapa",
      status: true,
      value: "400000",
    },
    {
      date: "12/09/2023",
      title: "Infak pesantren JadiDapa",
      status: false,
      value: "5000000",
    },
    {
      date: "15/09/2023",
      title: "Infak pesantren JadiDapa",
      status: true,
      value: "700000",
    },
    {
      date: "19/09/2023",
      title: "Infak pesantren JadiDapa",
      status: false,
      value: "1000000",
    },
    {
      date: "21/09/2023",
      title: "Infak pesantren JadiDapa",
      status: true,
      value: "100000",
    },
  ]);

  const [financialState, setFinancialState] = useState(financials);

  const formattedValue = (value) => {
    const splittedMoney = value.toString().split(".");
    splittedMoney[0] = splittedMoney[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return splittedMoney.join(".");
  };

  const calculateTotalMoney = useCallback(() => {
    let moneys = 0;
    financials.forEach((financial) => {
      financial.status
        ? (moneys += Number(financial.value))
        : (moneys -= Number(financial.value));
    });
    return formattedValue(moneys);
  }, [financials]);

  const [money, setMoney] = useState(calculateTotalMoney());

  const handleDescend = () => {
    const reversedFinancial = [...financialState];
    reversedFinancial.reverse();
    setFinancialState(reversedFinancial);
    setisDescend(!isDescend);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    console.log(value);
    if (value === "Uang-masuk") {
      const filteredFinancials = financials.filter(
        (item) => item.status === true
      );
      setFinancialState(filteredFinancials);
    } else if (value === "Uang-keluar") {
      const filteredFinancials = financials.filter(
        (item) => item.status === false
      );
      setFinancialState(filteredFinancials);
    } else {
      // Reset to the original financials
      setFinancialState(financials);
    }
  };

  useEffect(() => {
    setMoney(calculateTotalMoney());
  }, [calculateTotalMoney]);

  const links = [
    { link: "/ekonomi", text: "Ekonomi" },
    { link: "/ekonomi/finansial", text: "Finansial" },
  ];

  return (
    <section className="py-12 lg:pt-12 lg:px-8 px-2 overflow-hidden">
      <BreadCrumb links={links} />
      <div className="text text-center my-6 mx-4">
        <h2 className="text-3xl font-semibold text-text2  mt-8 tracking-wide font-play mb-2">
          Pemasukan & Pengeluaran Keuangan Masjid{" "}
          <span className="font-arab tracking-wider text-primary font-bold">
            Al-IRSYAD
          </span>
        </h2>
        <p className="lg:text-lg text-base max-lg:mt-2">
          Daftar uang masuk dan keluar dari keuangan Masjid Al-Irsyad
        </p>
      </div>
      <div className="container mx-auto md:grid  gap-x-24 gap-y-8 relative pt-8 mt-8">
        <div className="total borderrounded-lg px-4 ">
          <h2 className="text-3xl text-slate-700 font-semibold ">
            Total Dana Masjid Al-Irsyad
          </h2>
          <div className="mb-2 text-2xl font-semibold text-secondary">
            Agustus 2023
          </div>
          <div className="text-4xl text-primary font-bold mb-4">Rp {money}</div>
        </div>

        <div className="table">
          <div className="bg-white px-3 py-2 rounded-lg flex flex-col mb-2 shadow-lg">
            <div className="w-full flex gap-4">
              <div className="">Filter Berdasarkan :</div>
              <select
                className="transition-all duration-500 border-b-2"
                onChange={(e) => handleChange(e)}
              >
                <option className="outline-none mb-1 hover:bg-grey">
                  --pilih tampilan--
                </option>
                <option
                  className="outline-none mb-1 hover:bg-grey"
                  value="Uang-masuk-keluar"
                >
                  Uang masuk-keluar
                </option>
                <option
                  className="outline-none mb-1 hover:bg-grey"
                  value="Uang-masuk"
                >
                  Uang masuk
                </option>
                <option
                  className="outline-none mb-1 hover:bg-grey"
                  value="Uang-keluar"
                >
                  Uang keluar
                </option>
              </select>
              <button
                onClick={() => handleDescend()}
                className="px-1.5 bg-blue-400 text-white rounded-lg text-lg shadow-md active:translate-y-0.5 hover:bg-blue-600 duration-150 transition-all"
              >
                {isDescend ? <LuChevronsDown /> : <LuChevronsUp />}
              </button>
            </div>
          </div>

          <FinancialTable
            financials={financialState.reverse()}
            formattedValue={formattedValue}
          />
        </div>

        <div className="mb-8 mt-4">
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default Finance;

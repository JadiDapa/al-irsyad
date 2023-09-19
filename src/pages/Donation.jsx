import { useCallback, useEffect, useState } from "react";
import { LuChevronsUp, LuChevronsDown } from "react-icons/lu";
import FinancialTable from "../components/FinancialTable";
import { BreadCrumb } from "../components";
import DonationTable from "../components/DonationTable";

const Donation = () => {
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
    if (value === "donatur") {
      const filteredFinancials = financials.filter(
        (item) => item.status === true
      );
      setFinancialState(filteredFinancials);
    } else if (value === "penerima") {
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
    { link: "/ekonomi/donasi", text: "Donasi" },
  ];

  return (
    <section className="mt-12 mb-12 lg:px-12">
      <BreadCrumb links={links} />
      <div className="text text-center my-8">
        <h2 className="text-4xl text-text2 font-semibold font-play">
          Infak & Donasis Masjid{" "}
          <span className="font-arab tracking-wider text-primary font-bold">
            Al-IRSYAD
          </span>
        </h2>
        <p className="text-lg capitalize">
          Daftar Infak dan Donasi Masjid baik sebagai penerima atau pemberi
        </p>
      </div>
      <div className="container mx-auto hidden md:grid  gap-x-24 gap-y-8 relative pt-8 mt-8">
        <div className="table">
          <div className="bg-white px-3 py-2 rounded-lg flex flex-col mb-2 shadow-lg">
            <div className="w-full flex gap-14">
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
                  value="semua-donasi"
                >
                  Semua Donasi
                </option>
                <option
                  className="outline-none mb-1 hover:bg-grey"
                  value="donatur"
                >
                  Donatur
                </option>
                <option
                  className="outline-none mb-1 hover:bg-grey"
                  value="penerima"
                >
                  Penerima
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
          <div className="bg-white px-3 py-4 rounded-lg shadow-xl">
            <DonationTable
              financials={financialState.reverse()}
              formattedValue={formattedValue}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;

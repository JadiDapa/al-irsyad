import { useCallback, useEffect, useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { LuChevronsUp, LuChevronsDown } from "react-icons/lu";
import FinancialTable from "./FinancialTable";
import Select from "./Select";

const Financial = () => {
  const [isDescend, setisDescend] = useState(true);
  const [change, setChange] = useState(true);

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
    const reversedFinancial = [...financials];
    reversedFinancial.reverse();
    setFinancials(reversedFinancial);
    setisDescend(!isDescend);
  };

  const handleChange = (e) => {
    switch (e.target.value) {
      case "Uang-masuk":
        
        break;
      case "Uang-keluar":
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    setMoney(calculateTotalMoney());
  }, [calculateTotalMoney]);

  return (
    <section className="mb-12 py-12 bg-grey">
      <div className="text text-center mb-12">
        <h2 className="h2 font-play">Pemasukan & Pengeluaran Keuangan</h2>
        <p className="text-lg">
          Daftar uang masuk dan keluar dari keuangan Masjid Al-Irsyad
        </p>
      </div>
      <div className="container mx-auto grid lg:grid-cols-[minmax(0,40%)_minmax(0,_60%)] gap-x-6">
        <div className="total borderrounded-lg px-4 ">
          <h2 className="text-3xl text-slate-700 font-semibold ">
            Total Dana Masjid Al-Irsyad
          </h2>
          <div className="mb-2 text-2xl font-semibold text-secondary">
            Agustus 2023
          </div>
          <div className="text-4xl text-primary font-bold mb-4">Rp {money}</div>
          <div className="">
            <div className="text-lg">
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
            <div className="w-full flex gap-4">
              <div className="">Filter Berdasarkan :</div>
              <select className="transition-all duration-500 border-b-2">
                <option className="outline-none mb-1 hover:bg-grey">
                  --pilih tampilan--
                </option>
                <option
                  className="outline-none mb-1 hover:bg-grey"
                  value="Uang-masuk-keluar"
                  onChange={(e) => handleChange(e)}
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
          <div className="bg-white px-3 py-4 rounded-lg shadow-xl">
            <FinancialTable
              financials={financials.reverse()}
              formattedValue={formattedValue}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Financial;

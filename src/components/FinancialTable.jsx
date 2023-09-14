import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

const FinancialTable = ({ financials, formattedValue }) => {
  return (
    <table className="w-full lg:min-h-[428px]">
      <tbody>
        <tr className="border-b-2 border-slate-300 w-full font-semibold">
          <td className="pl-2 w-2/12">TANGGAL</td>
          <td className="px-1 w-6/12">PERIHAL</td>
          <td className="px-1 w-1/12">STATUS</td>
          <td className="px-[10px] w-3/12">NILAI</td>
        </tr>
        {financials.map((financial, index) => {
          if (index < 9) {
            return (
              <tr
                key={index}
                className={`w-full text-base ${
                  index % 2 == 0 ? "bg-gray-100" : "bg-white"
                } `}
              >
                <td className="pl-2 py-2 w-2/12">{financial.date}</td>
                <td className=" py-2 w-6/12">{financial.title}</td>
                <td
                  className={`py-2 w-1/12 text-green-500 font-bold text-xl leading-6 ${
                    financial.status ? "text-primary" : "text-red-500"
                  }`}
                >
                  {financial.status ? (
                    <BiSolidUpArrow className="mx-auto" />
                  ) : (
                    <BiSolidDownArrow className="mx-auto" />
                  )}
                </td>
                <td
                  className={`pl-[10px] py-2 w-3/12 text-xl leading-6 ${
                    financial.status ? "text-primary" : "text-red-500"
                  }`}
                >
                  {financial.status
                    ? `+Rp ${formattedValue(financial.value)}`
                    : `-Rp ${formattedValue(financial.value)}`}
                </td>
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};

export default FinancialTable;

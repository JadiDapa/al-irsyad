import { useState } from "react";
import Modals from "../components/Modals";
import { BreadCrumb } from "../components";
import DotBg from "../assets/DotBg";

const Plan = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalId, setModalId] = useState(null);
  const links = [
    { link: "/kegiatan", text: "Kegiatan" },
    { link: "/kegiatan/rencana", text: "Rencana" },
  ];
  const plans = [
    {
      text: "Infak ke pesantren bla bla bla berupa bahan makanan dan uang tunai pada tangga 20 Oktober, 2023",
      date: "12 September, 2023",
      detail:
        "Nomor 1 asd asd asd sad as ads   sa as as as  sa asdads asda dsaddd asdasdadsas asdasdsadsad asdsadsad adsad a d ad sada d sadsadsadsa sadsadsad asdsads asdsa das dasdsad sad sad asd as d as asd asdbasdasghgx t rtyry y jkh h jh bg j,n d nhg fj hgj nnfhn byuuunoik yiyj hb oiyni iuu 69 ",
    },
    {
      text: "Infak ke pesantren bla bla bla berupa bahan makanan dan uang tunai pada tangga 20 Oktober, 2023",
      date: "12 September, 2023",
      detail:
        "Nomor 2 asd asd asd sad as ads   sa as as as  sa asdads asda dsaddd asdasdadsas asdasdsadsad asdsadsad adsad a d ad sada d sadsadsadsa sadsadsad asdsads asdsa das dasdsad sad sad asd as d as asd asdbasdasghgx t rtyry y jkh h jh bg j,n d nhg fj hgj nnfhn byuuunoik yiyj hb oiyni iuu 69 ",
    },
    {
      text: "Infak ke pesantren bla bla bla berupa bahan makanan dan uang tunai pada tangga 20 Oktober, 2023",
      date: "12 September, 2023",
      detail:
        "Nomor 3 asd asd asd sad as ads   sa as as as  sa asdads asda dsaddd asdasdadsas asdasdsadsad asdsadsad adsad a d ad sada d sadsadsadsa sadsadsad asdsads asdsa das dasdsad sad sad asd as d as asd asdbasdasghgx t rtyry y jkh h jh bg j,n d nhg fj hgj nnfhn byuuunoik yiyj hb oiyni iuu 69 ",
    },
    {
      text: "Infak ke pesantren bla bla bla berupa bahan makanan dan uang tunai pada tangga 20 Oktober, 2023",
      date: "12 September, 2023",
      detail:
        "Nomor 4 asd asd asd sad as ads   sa as as as  sa asdads asda dsaddd asdasdadsas asdasdsadsad asdsadsad adsad a d ad sada d sadsadsadsa sadsadsad asdsads asdsa das dasdsad sad sad asd as d as asd asdbasdasghgx t rtyry y jkh h jh bg j,n d nhg fj hgj nnfhn byuuunoik yiyj hb oiyni iuu 69 ",
    },
    {
      text: "Infak ke pesantren bla bla bla berupa bahan makanan dan uang tunai pada tangga 20 Oktober, 2023",
      date: "12 September, 2023",
      detail:
        "Nomor 5 asd asd asd sad as ads   sa as as as  sa asdads asda dsaddd asdasdadsas asdasdsadsad asdsadsad adsad a d ad sada d sadsadsadsa sadsadsad asdsads asdsa das dasdsad sad sad asd as d as asd asdbasdasghgx t rtyry y jkh h jh bg j,n d nhg fj hgj nnfhn byuuunoik yiyj hb oiyni iuu 69 ",
    },
    {
      text: "Infak ke pesantren bla bla bla berupa bahan makanan dan uang tunai pada tangga 20 Oktober, 2023",
      date: "12 September, 2023",
      detail:
        "Nomor 6 asd asd asd sad as ads   sa as as as  sa asdads asda dsaddd asdasdadsas asdasdsadsad asdsadsad adsad a d ad sada d sadsadsadsa sadsadsad asdsads asdsa das dasdsad sad sad asd as d as asd asdbasdasghgx t rtyry y jkh h jh bg j,n d nhg fj hgj nnfhn byuuunoik yiyj hb oiyni iuu 69 ",
    },
  ];

  function handleClose(index = null) {
    setIsOpen(!isOpen);
    setModalId(index);
  }

  return (
    <section className="mt-12 mb-12 lg:px-12">
      <BreadCrumb links={links} />
      <div className="text text-center my-8">
        <h2 className="text-4xl text-text2 font-semibold font-play">
          Rencana Acara & Kegiatan Masjid{" "}
          <span className="font-arab tracking-wider text-primary font-bold">
            AL-IRSYAD
          </span>
        </h2>
        <p className="text-lg">
          Rencana kegiatan di Masjid Al-Irsyad kedepannya
        </p>
      </div>
      <div className="container mx-auto hidden md:grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-8 relative py-8">
        <div className="absolute opacity-[15%] top-12 left-10 grid grid-cols-2 -z-50">
          <DotBg />
          <DotBg />
          <DotBg />
          <DotBg />
        </div>
        {plans.map((plan, index) => (
          <div
            key={index}
            className="rencana px-4 relative group rounded-lg hover:shadow-sm"
            onClick={() => handleClose(index)}
          >
            {isOpen && (
              <Modals
                isOpen
                handleClose={handleClose}
                plan={plan}
                index={index}
                modalId={modalId}
              />
            )}
            <div className="absolute left-0 -top-[32%] text-sm opacity-0 group-hover:opacity-100 px-2 py-1 bg-secondary text-white duration-150 rounded-t-lg ">
              SELENGKAPNYA
            </div>
            <div className="flex gap-3 border-b-2">
              <div className="text-red-400 text-2xl font-semibold">
                0{index + 1}.
              </div>
              <div className="leading-6 text-justify">{plan.text}</div>
            </div>

            <div className="flex justify-between">
              <div className="">Ditambahkan pada:</div>
              <div className="font-semibold">{plan.date}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Mobile */}
      <div className="container mx-auto md:hidden block">
        {plans.map((plan, index) => (
          <>
            {isOpen && (
              <Modals
                isOpen
                handleClose={handleClose}
                plan={plan}
                index={index}
              />
            )}
            <div
              key={index}
              className="rencana px-4 mb-5 relative group overflow-hidden rounded-lg hover:shadow-sm"
            >
              <div className="flex gap-3 ">
                <div className="text-red-400 text-2xl font-semibold">
                  0{index + 1}.
                </div>
                <div className="text-justify overflow-hidden">
                  <div
                    className="border-b-2 text-sm  leading-[14px] pb-[1.5px] "
                    onClick={() => handleClose()}
                  >
                    {plan.text}
                  </div>
                  <div className="flex text-xs justify-between mt-px">
                    <div className="">Ditambahkan :</div>
                    <div className="font-semibold">{plan.date}</div>
                  </div>
                  <div className="absolute left-0 bottom-0 text-xs opacity-0 group-hover:opacity-100 px-2 py-1 bg-secondary text-white duration-150 rounded-tr-lg text">
                    SELENGKAPNYA
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Plan;
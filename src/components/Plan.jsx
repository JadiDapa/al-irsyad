const Plan = () => {
  const plans = [
    {
      text: "Infak ke pesantren bla bla bla berupa bahan makanan dan uang tunai pada tangga 20 Oktober, 2023",
      date: "12 September, 2023",
    },
    {
      text: "Infak ke pesantren bla bla bla berupa bahan makanan dan uang tunai pada tangga 20 Oktober, 2023",
      date: "12 September, 2023",
    },
    {
      text: "Infak ke pesantren bla bla bla berupa bahan makanan dan uang tunai pada tangga 20 Oktober, 2023",
      date: "12 September, 2023",
    },
    {
      text: "Infak ke pesantren bla bla bla berupa bahan makanan dan uang tunai pada tangga 20 Oktober, 2023",
      date: "12 September, 2023",
    },
    {
      text: "Infak ke pesantren bla bla bla berupa bahan makanan dan uang tunai pada tangga 20 Oktober, 2023",
      date: "12 September, 2023",
    },
    {
      text: "Infak ke pesantren bla bla bla berupa bahan makanan dan uang tunai pada tangga 20 Oktober, 2023",
      date: "12 September, 2023",
    },
  ];
  return (
    <section className="mt-20 mb-12">
      <div className="text text-center mb-12">
        <h2 className="h2 font-play">Rencana Acara & Kegiatan</h2>
        <p className="text-lg">
          Rencana kegiatan di Masjid Al-Irsyad kedepannya
        </p>
      </div>
      <div className="container mx-auto hidden md:grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 lg:px-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="rencana px-4 relative group rounded-lg hover:shadow-sm"
          >
            <div className="flex gap-3 border-b-2">
              <div className="text-red-400 text-2xl font-semibold">
                0{index + 1}.
              </div>
              <div className="line-clamp-3 leading-6 text-justify">
                {plan.text}
              </div>
            </div>

            <div className="flex justify-between">
              <div className="">Ditambahkan pada: </div>
              <div className="font-semibold">{plan.date}</div>
            </div>
            <div className="absolute left-0 -top-1/4 text-sm opacity-0 group-hover:opacity-100 px-2 py-1 bg-secondary text-white duration-150 rounded-t-lg ">
              SELENGKAPNYA
            </div>
          </div>
        ))}
      </div>
      {/* Mobile */}
      <div className="container mx-auto md:hidden block">
        {plans.map((plan, index) => {
          if (index <= 3) {
            return (
              <div
                key={index}
                className="rencana px-4 mb-5 relative group overflow-hidden rounded-lg hover:shadow-sm"
              >
                <div className="flex gap-3 ">
                  <div className="text-red-400 text-2xl font-semibold">
                    0{index + 1}.
                  </div>
                  <div className="text-justify overflow-hidden">
                    <div className="border-b-2 line-clamp-3 text-sm  leading-[14px] pb-[1.5px] ">
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
            );
          }
        })}
      </div>
      <div className="text-center mt-6 text-xl text-secondary underline cursor-pointer hover:text-secondary-dark">
        <a href="#">Lihat agenda acara & kegiatan yang lainnya &raquo;</a>
      </div>
    </section>
  );
};

export default Plan;

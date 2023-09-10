import { LuMoonStar, LuSun, LuSunrise, LuSunset } from "react-icons/lu";
import { MdSunny } from "react-icons/md";

const Schedule = () => {
  let schedule = [
    { jadwal: "Shubuh", waktu: "04.39", icon: <LuSunrise /> },
    { jadwal: "Zuhur", waktu: "05.56", icon: <LuSun /> },
    { jadwal: "Ashar", waktu: "05.56", icon: <MdSunny /> },
    { jadwal: "Maghrib", waktu: "18.00", icon: <LuSunset /> },
    { jadwal: "Isya'", waktu: "19.09", icon: <LuMoonStar /> },
  ];
  return (
    <section id="schedule" className="mt-14 lg:px-10">
      <div className="bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 lg:mx-auto rounded-[20px] lg:pt-[70px] px-2 lg:px-10 relative lg:h-[300px] max-lg:p-8 flex items-center lg:items-start -z-10 bg-accent">
        <div className="lg:container mx-auto">
          <div className="services-top flex items-center flex-col lg:flex-row lg:mb-[60px]">
            <h2 className="h2 text-white flex-1 mb-4 lg:mb-0 text-center lg:text-left">
              Jadwal Shalat <br />
              Kota <span className="text-lime-300">Palembang</span>
            </h2>
            <p className="text-white flex-1 lg:text-left max-w-2xl lg:max-w-none">
              Sekarang: Waktu{" "}
              <span className="text-accent-secondary font-bold">Maghrib</span>
              <br />
              <span className="text-white flex-1 lg:text-left max-w-2xl lg:max-w-none">
                Akan Datang: Waktu{" "}
                <span className="text-accent-secondary font-bold">Isya</span>{" "}
                (00 jam, 20 Menit lagi)
              </span>
            </p>
          </div>
          <div className="lg:hidden flex-col flex rounded-lg bg-white px-4">
            {schedule.map((schedule, index) => {
              return (
                <div
                  key={schedule.jadwal}
                  className={`${
                    index === 4 ? "border-none" : "border-b"
                  } py-2 flex flex-row items-center gap-4 justify-between`}
                >
                  <div className="text-3xl max-[310px]:hidden text-accent">
                    {schedule.icon}
                  </div>
                  <h3 className="h3 ">{schedule.jadwal}</h3>
                  <p className="font-semibold leading-normal text-lg justify-self-end">
                    {schedule.waktu}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container mx-auto lg:-mt-[85px] mt-6">
        <div className="lg:grid lg:grid-cols-5 gap-5 px-8 lg:px-0 hidden">
          {schedule.map((schedule) => {
            return (
              <div
                key={schedule.jadwal}
                className="bg-white p-[30px] rounded-[10px] shadow-md flex flex-col items-center text-center"
              >
                <div className="mb-4 text-4xl text-accent">{schedule.icon}</div>
                <h3 className="h3 mb-[10px]">{schedule.jadwal}</h3>
                <p className="font-semibold leading-normal text-lg max-w-[360px]">
                  {schedule.waktu}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Schedule;

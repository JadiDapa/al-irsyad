import { useEffect, useState } from "react";
import { LuMoonStar, LuSun, LuSunrise, LuSunset } from "react-icons/lu";
import { MdSunny } from "react-icons/md";
import axios from "axios";

const Schedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [date, setDate] = useState("");

  function currentTime() {
    const currentDate = new Date();
    const options = {
      timeZone: "Asia/Jakarta",
      hour: "2-digit",
      minute: "2-digit",
    };
    return currentDate.toLocaleTimeString("id-ID", options).replace(".", ":");
  }

  function toSecond(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 3600 + minutes * 60;
  }

  function getNextPrayerTime(currentTime, schedules) {
    const currentTimeInSeconds = toSecond(currentTime);

    // Iterate through the schedules to find the next prayer time
    for (let i = 0; i < schedules.length; i++) {
      const schedule = schedules[i];
      const scheduleTimeInSeconds = toSecond(schedule.waktu);

      if (currentTimeInSeconds < scheduleTimeInSeconds) {
        return `${schedule.jadwal} `;
      }
    }

    // If there is no upcoming prayer, return a message
    return "Shubuh";
  }

  function getTimeUntilNextPrayer(currentTime, schedules) {
    const currentTimeInSeconds = toSecond(currentTime);

    // Iterate through the schedules to find the next prayer time
    for (let i = 0; i < schedules.length; i++) {
      const schedule = schedules[i];
      const scheduleTimeInSeconds = toSecond(schedule.waktu);

      if (currentTimeInSeconds < scheduleTimeInSeconds) {
        const timeDifferenceInSeconds =
          scheduleTimeInSeconds - currentTimeInSeconds;
        const hours = Math.floor(timeDifferenceInSeconds / 3600);
        const minutes = Math.floor((timeDifferenceInSeconds % 3600) / 60);

        return `(${hours} jam, ${minutes} menit lagi)`;
      }
    }
    return "";
  }

  function getCurrentPrayerTime(currentTime, schedules) {
    const currentTimeInSeconds = toSecond(currentTime);

    // Iterate through the schedules to find the current prayer time
    for (let i = 0; i < schedules.length; i++) {
      const schedule = schedules[i];
      const scheduleTimeInSeconds = toSecond(schedule.waktu);

      if (currentTimeInSeconds >= scheduleTimeInSeconds) {
        return `${schedule.jadwal}`;
      }
    }

    // If there is no ongoing prayer, return a message
    return "Isya";
  }

  useEffect(() => {
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    console.log(date);
    console.log(month);
    console.log(year);
    axios
      .get(
        `https://api.myquran.com/v1/sholat/jadwal/0816/${year}/${month}/${date}`
      )
      .then((res) => {
        const jadwal = res.data.data.jadwal;
        console.log(jadwal);
        setSchedules([
          {
            jadwal: "Shubuh",
            waktu: jadwal.subuh,
            icon: <LuSunrise />,
            isActive: false,
          },
          {
            jadwal: "Dzuhur",
            waktu: jadwal.dzuhur,
            icon: <LuSun />,
            isActive: false,
          },
          {
            jadwal: "Ashar",
            waktu: jadwal.ashar,
            icon: <MdSunny />,
            isActive: false,
          },
          {
            jadwal: "Maghrib",
            waktu: jadwal.maghrib,
            icon: <LuSunset />,
            isActive: true,
          },
          {
            jadwal: "Isya'",
            waktu: jadwal.isya,
            icon: <LuMoonStar />,
            isActive: false,
          },
        ]);
        setDate(jadwal.tanggal);
      });
  }, []);

  return (
    <section id="shalat" className="my-14 lg:px-10">
      <div className="bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 lg:mx-auto rounded-[20px] lg:pt-[70px] px-2 lg:px-10 relative lg:h-[300px] max-lg:p-8 flex items-center lg:items-start -z-10 bg-accent">
        <div className="lg:container mx-auto">
          <div className="services-top flex items-center flex-col lg:flex-row lg:mb-[60px]">
            <h2 className="h2 text-white flex-1 mb-4 lg:mb-0 text-center lg:text-left">
              Jadwal Shalat <br />
              Kota <span className="text-secondary-light">Palembang</span>
            </h2>
            <div className="lg:text-2xl text-white flex-1 lg:text-left max-w-2xl lg:max-w-none">
              <p className="mb-2">
                Tanggal:{" "}
                <span className="text-secondary-light font-bold">{date}</span>
              </p>
              <p className="mb-2">
                Sekarang: Waktu{" "}
                <span className="text-secondary-light font-bold">
                  {" "}
                  {getCurrentPrayerTime(currentTime(), schedules)}
                </span>
              </p>
              <p>
                Akan Datang: Waktu{" "}
                <span className="text-secondary-light font-bold">
                  {getNextPrayerTime(currentTime(), schedules)}
                </span>
                {getTimeUntilNextPrayer(currentTime(), schedules)}
              </p>
            </div>
          </div>
          <div className="lg:hidden flex-col flex rounded-lg bg-white px-4">
            {schedules.map((schedule, index) => {
              return (
                <div
                  key={schedule.jadwal}
                  className={`${
                    index === 4 ? "border-none" : "border-b"
                  } py-2 flex flex-row items-center gap-4 justify-between`}
                >
                  <div className="text-3xl max-[310px]:hidden text-primary">
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
          {schedules.map((schedule, index) => {
            const nextSchedule = schedules[index + 1];
            const currentTimeInSeconds = toSecond(currentTime());
            const scheduleTimeInSeconds = toSecond(schedule.waktu);

            const isCurrentTimeInRange =
              currentTimeInSeconds >= scheduleTimeInSeconds &&
              (!nextSchedule ||
                currentTimeInSeconds < toSecond(nextSchedule.waktu));

            return (
              <div
                key={schedule.jadwal}
                className={` p-[30px] rounded-[10px] shadow-md flex flex-col items-center text-center  duration-300 transition-all  ${
                  isCurrentTimeInRange
                    ? "scale-105 bg-accent text-white shadow-2xl border border-white -translate-y-2"
                    : "bg-white hover:scale-105 hover:-translate-y-2"
                } `}
              >
                <div
                  className={`mb-4 text-4xl  ${
                    isCurrentTimeInRange ? " text-white" : "text-primary"
                  }`}
                >
                  {schedule.icon}
                </div>
                <h3
                  className={`h3 mb-[10px] ${
                    isCurrentTimeInRange ? " text-white" : ""
                  }`}
                >
                  {schedule.jadwal}
                </h3>
                <p
                  className={`font-semibold leading-normal text-lg max-w-[360px]`}
                >
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

import { useState } from "react";
import Modals from "./Modals";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Plan = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalId, setModalId] = useState(null);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/plan").then((res) => {
      const reversedNews = res.data.reverse();
      setPlans(reversedNews);
    });
  }, []);

  function handleClose(index = null) {
    setIsOpen(!isOpen);
    setModalId(index);
  }

  return (
    <section className="mt-20 mb-12" id="rencana">
      <div className="text text-center mb-12 px-3">
        <h2 className="h2 font-play text-center mx-auto">
          Rencana Acara & Kegiatan
        </h2>
        <p className="text-lg">
          Rencana kegiatan di Masjid Al-Irsyad kedepannya
        </p>
      </div>
      <div className="container mx-auto hidden md:grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 lg:px-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="rencana px-4 relative group rounded-lg border-grey border-2 py-4 cursor-pointer hover:border-primary  transition-all duration-300"
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
            <div className="flex gap-3 border-b-2">
              <div className="text-red-400 text-2xl font-semibold">
                0{index + 1}.
              </div>
              <div
                className="line-clamp-3 leading-6 text-justify"
                onClick={() => handleClose(index)}
              >
                {plan.title}
              </div>
            </div>

            <div className="flex justify-between">
              <div className="">Ditambahkan pada:</div>
              <div className="font-semibold">{plan.date}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Mobile */}
      <div className="container mx-auto md:hidden flex flex-wrap justify-between">
        {plans.map((plan, index) => {
          if (index <= 3) {
            return (
              <>
                {isOpen && (
                  <Modals
                    isOpen
                    handleClose={handleClose}
                    plan={plan}
                    index={index}
                    modalId={modalId}
                  />
                )}
                <div
                  key={index}
                  className="rencana mb-5 relative group overflow-hidden rounded-lg border-grey border-2 p-4 w-[49%] hover:border-primary  transition-all duration-300"
                >
                  <div className="flex gap-3 ">
                    <div className="text-justify overflow-hidden">
                      <div
                        className="border-b-2 line-clamp-3 text-sm leading-[14px] pb-[12px] "
                        onClick={() => handleClose(index)}
                      >
                        {plan.title}
                      </div>
                      <div className="flex text-xs justify-between mt-px">
                        <div className="">Ditambahkan :</div>
                        <div className="font-semibold">{plan.date}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        })}
      </div>
      <div className="text-center mt-6 md:text-xl text-base text-secondary underline cursor-pointer hover:text-secondary-dark">
        <Link to={"/kegiatan/rencana"}>
          Lihat agenda acara & kegiatan yang lainnya &raquo;
        </Link>
      </div>
    </section>
  );
};

export default Plan;

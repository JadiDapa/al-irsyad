import { useState } from "react";
import Modals from "../components/Modals";
import { BreadCrumb } from "../components";
import DotBg from "../assets/DotBg";
import Pagination from "../components/Pagination";
import { useEffect } from "react";
import axios from "axios";

const Plan = () => {
  const links = [
    { link: "/kegiatan", text: "Kegiatan" },
    { link: "/rencana", text: "Rencana" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [modalId, setModalId] = useState(null);
  const [plans, setPlans] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPlan, setFilteredPlan] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const planPerPage = 8;

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

  useEffect(() => {
    const filtered = plans.filter((newsItem) => {
      return newsItem.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    setFilteredPlan(filtered);
  }, [searchQuery, plans]);

  const startIndex = (currentPage - 1) * planPerPage;
  const endIndex = startIndex + planPerPage;

  const displayedPlans = searchQuery
    ? filteredPlan.slice(startIndex, endIndex)
    : plans.slice(startIndex, endIndex);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section className="py-12 lg:pt-12 lg:px-8 px-2 overflow-hidden">
      <BreadCrumb links={links} />
      <div className="flex flex-col items-center mb-12 px-3">
        <h2 className="text-3xl font-semibold text-text2  mt-8 tracking-wide font-play mb-2">
          Rencana Acara & Kegiatan Masjid{" "}
          <span className="font-arab tracking-wider text-primary font-bold">
            AL-IRSYAD
          </span>
        </h2>
        <p className="lg:text-lg text-base max-lg:mt-2">
          Rencana kegiatan di Masjid Al-Irsyad kedepannya
        </p>
        <div className="relative flex gap-x-[10px] items-center my-4">
          <input
            className="outline-none w-[200px] focus:w-[400px] focus:border-b-2 focus:border-primary text-primary placeholder:italic placeholder:text-base transition-all duration-200"
            placeholder="Cari Data Donasi..."
            type="text"
            value={searchQuery}
            id="searchNews"
            onChange={handleSearchInputChange}
          />
        </div>
      </div>
      <div className="container mx-auto hidden md:grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 lg:px-8">
        {displayedPlans.map((plan, index) => (
          <div
            key={index}
            className="rencana shadow-md bg-white px-4 relative group rounded-lg hover:shadow-sm"
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
            <div className="absolute left-0 -top-1/4 text-sm opacity-0 group-hover:opacity-100 px-2 py-1 bg-secondary text-white duration-150 rounded-t-lg ">
              SELENGKAPNYA
            </div>
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
      <div className="container mx-auto md:hidden block">
        {displayedPlans.map((plan, index) => {
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
                className="rencana px-4 py-2 shadow-md bg-white mb-8 relative group overflow-hidden rounded-lg hover:shadow-sm"
              >
                <div className="flex gap-3 ">
                  <div className="text-red-400 text-2xl font-semibold">
                    0{index + 1}.
                  </div>
                  <div className="text-justify overflow-hidden">
                    <div
                      className="border-b-2 line-clamp-3 text-sm  leading-[14px] pb-[1.5px] "
                      onClick={() => handleClose(index)}
                    >
                      {plan.title}
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
          );
        })}
      </div>
      <div className="mb-8 mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(
            searchQuery
              ? filteredPlan.length / planPerPage
              : plans.length / planPerPage
          )}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
};

export default Plan;

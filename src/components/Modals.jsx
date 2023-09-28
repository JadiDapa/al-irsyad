import "react-quill/dist/quill.snow.css";

const Modals = ({ plan, index, handleClose, modalId }) => {
  if (index === modalId) {
    return (
      <div
        id="hs-vertically-centered-scrollable-modal"
        className={`hs-overlay w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto border border-slate-600`}
      >
        <div
          className={`mt-7 opacity-100 duration-500  ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center`}
        >
          <div className="max-h-full overflow-hidden flex flex-col bg-white shadow-sm rounded-lg ">
            <div className="flex justify-between items-center py-3 px-4">
              <h3 className="text-3xl font-[500] text-primary mt-4">
                {plan.title}
              </h3>
              <button
                type="button"
                className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm"
                data-hs-overlay="#hs-vertically-centered-scrollable-modal"
                onClick={handleClose}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-3.5 h-3.5"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <div className="">
                <div>
                  <div className="w-full flex mb-6">
                    <div className="w-2/3 overflow-hidden p-2 shadow-lg rounded-lg">
                      <img
                        src={`http://localhost:3001/images/${plan.image}`}
                        className="w-full rounded-lg"
                      />
                    </div>
                    <div className="pt-2 flex w-1/3 flex-col justify-between text-end text-sm leading-5 mb-4 text-slate-700 font-light">
                      <div className="">
                        Ditambahhkan :
                        <div className="text-secondary text-base font-[500]">
                          {plan.date}
                        </div>
                      </div>
                      <div className="">
                        Estimasi :{" "}
                        <div className="text-primary text-base font-[500]">
                          {plan.estimated}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="display-quill text-slate-700 leading-6 flex flex-col gap-4 w-full"
                    dangerouslySetInnerHTML={{ __html: plan.content }}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 ">
              <button
                type="button"
                className="hs-dropdown-toggle py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                onClick={handleClose}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Modals;

export const ModalsDonation = ({ donasi, index, handleClose, modalId }) => {
  if (index === modalId) {
    return (
      <div
        className={`hs-overlay w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto border border-slate-600`}
      >
        <div
          className={`mt-7 opacity-100 duration-500  ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center`}
        >
          <div className="max-h-full overflow-hidden flex flex-col bg-white shadow-sm rounded-lg">
            <div className="flex justify-between items-center py-3 px-4">
              <h3 className="text-3xl font-[500] text-primary mt-4">
                {donasi.title}
              </h3>
              <button
                type="button"
                className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm"
                onClick={handleClose}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-3.5 h-3.5"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <div className="">
                <div>
                  <div className="w-full flex mb-6">
                    <div className="pt-2 flex w-full justify-between text-sm leading-5 mb-4 text-slate-700 font-light">
                      <div className="">
                        Ditambahhkan :
                        <span className="text-secondary text-base font-[500]">
                          {donasi.date}
                        </span>
                      </div>
                      <div className="">
                        Status :
                        <span className="text-primary text-base font-[500]">
                          {donasi.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="display-quill text-slate-700 leading-6 flex flex-col gap-4 w-full"
                    dangerouslySetInnerHTML={{ __html: donasi.content }}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 ">
              <button
                type="button"
                className="hs-dropdown-toggle py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                onClick={handleClose}
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

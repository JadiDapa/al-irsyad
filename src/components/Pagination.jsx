import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center items-center space-x-2">
      {currentPage > 1 && (
        <a
          className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md"
          onClick={() => onPageChange(currentPage - 1)}
          href="#"
        >
          <span aria-hidden="true">«</span>
          <span className="sr-only">Previous</span>
        </a>
      )}
      {pageNumbers.map((page) => (
        <a
          key={page}
          className={`w-10 h-10 ${
            currentPage === page
              ? "bg-blue-500 text-white"
              : "text-gray-500 hover:text-blue-600"
          } p-4 inline-flex items-center text-sm font-medium rounded-full`}
          onClick={() => onPageChange(page)}
          href="#"
          aria-current={currentPage === page ? "page" : undefined}
        >
          {page}
        </a>
      ))}
      {currentPage < totalPages && (
        <a
          className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md"
          onClick={() => onPageChange(currentPage + 1)}
          href="#"
        >
          <span className="sr-only">Next</span>
          <span aria-hidden="true">»</span>
        </a>
      )}
    </nav>
  );
};

export default Pagination;

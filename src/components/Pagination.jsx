const Pagination = () => {
  return (
    <nav className="flex justify-center items-center space-x-2">
      <a
        className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md"
        href="#"
      >
        <span aria-hidden="true">«</span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="w-10 h-10 bg-blue-500 text-white p-4 inline-flex items-center text-sm font-medium rounded-full"
        href="#"
        aria-current="page"
      >
        1
      </a>
      <a
        className="w-10 h-10 text-gray-500 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full"
        href="#"
      >
        2
      </a>
      <a
        className="w-10 h-10 text-gray-500 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full"
        href="#"
      >
        3
      </a>
      <a
        className="text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md"
        href="#"
      >
        <span className="sr-only">Next</span>
        <span aria-hidden="true">»</span>
      </a>
    </nav>
  );
};

export default Pagination;

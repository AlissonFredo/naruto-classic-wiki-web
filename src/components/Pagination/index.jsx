const Pagination = ({ currentPage, totalPages, handlePagination }) => {
  const pages = [
    currentPage - 1 > 0 ? currentPage - 1 : null,
    currentPage,
    currentPage + 1 <= totalPages ? currentPage + 1 : null,
  ].filter(Boolean);

  return (
    <div className="flex justify-center">
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => handlePagination(page)}
          className={`
                ${page === currentPage ? "mr-2 ml-2" : ""}
                w-10
                text-white
                p-2
                font-bold
                uppercase
                bg-radial-[at_50%_85%]
                ${
                  page === currentPage
                    ? "from-sky-400 via-blue-600 to-indigo-900"
                    : "from-sky-300 via-blue-400 to-indigo-500 cursor-pointer"
                } to-90%
              `}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

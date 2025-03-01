import Container from "../../components/Container";
import Header from "../../components/Header";
import { Link } from "react-router";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";

function Characters() {
  const [characters, setCharacters] = useState([]);

  const [paginacao, setPaginacao] = useState({
    currentPage: 1,
    totalPages: 1,
    totalRecords: 0,
  });

  useEffect(() => {
    getCharacters();
  }, [paginacao.currentPage]);

  const getCharacters = async () => {
    try {
      const { data } = await api.get(
        `/characters?page=${paginacao.currentPage}`
      );

      setCharacters(data.data);

      setPaginacao({
        currentPage: data.currentPage,
        totalPages: data.totalPages,
        totalRecords: data.totalRecords,
      });
    } catch (error) {
      if (!axios.isAxiosError(error)) return;
      console.log(error);
    }
  };

  return (
    <Container>
      <Header />

      <div
        className="
          pt-25 
          min-h-screen
          bg-radial-[at_50%_75%] from-orange-500 via-orange-400 to-orange-400 to-90%
          pb-6
          pt-30
          flex
          flex-col
          justify-between
        "
      >
        <h1
          className="
            text-center 
            text-white 
            text-4xl 
            font-bold 
            uppercase
          "
        >
          Characters
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-x-50 gap-y-20">
            {characters.length == 0 &&
              Array.from({ length: 6 }).map((_, key) => (
                <div key={key} className="animate-pulse">
                  <div className="size-50 rounded-full bg-gray-200"></div>
                  <div className="mt-8 h-4 rounded bg-gray-200"></div>
                </div>
              ))}

            {characters.length != 0 &&
              characters.map((character, key) => (
                <div
                  key={key}
                  className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                >
                  <Link to="/">
                    <div
                      className="size-50 rounded-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${character.url})` }}
                    ></div>
                    <h2 className="mt-8 rounded text-center text-white font-bold uppercase">
                      {character.name}
                    </h2>
                  </Link>
                </div>
              ))}
          </div>
        </div>

        <div className="flex justify-center">
          {Array.from({ length: 3 }).map((_, key) => {
            let page = parseInt(paginacao.currentPage);

            if (key == 0) {
              if (!(page - 1 == 0)) {
                page = page - 1;
                return (
                  <button
                    onClick={() =>
                      setPaginacao((prev) => ({ ...prev, currentPage: page }))
                    }
                    className="
                    cursor-pointer
                      w-10
                      text-white 
                      p-2
                      font-bold 
                      uppercase 
                      bg-radial-[at_50%_85%] 
                      from-sky-300 
                      via-blue-400 
                      to-indigo-500 to-90%
                    "
                  >
                    {page}
                  </button>
                );
              }
            }

            if (key == 1) {
              page = page;
              return (
                <button
                  className="
                      w-10
                      mr-2 ml-2
                      text-white 
                      p-2
                      font-bold 
                      uppercase 
                      bg-radial-[at_50%_85%] 
                      from-sky-400 
                      via-blue-600 
                      to-indigo-900 to-90%
                    "
                >
                  {page}
                </button>
              );
            }

            if (key == 2) {
              if (!(page == paginacao.totalPages)) {
                page = page + 1;
                return (
                  <button
                    onClick={() =>
                      setPaginacao((prev) => ({ ...prev, currentPage: page }))
                    }
                    className="
                    cursor-pointer
                      w-10
                      text-white 
                      p-2
                      font-bold 
                      uppercase 
                      bg-radial-[at_50%_85%] 
                      from-sky-300 
                      via-blue-400 
                      to-indigo-500 to-90%
                    "
                  >
                    {page}
                  </button>
                );
              }
            }
          })}
        </div>
      </div>

      <Footer />
    </Container>
  );
}

export default Characters;

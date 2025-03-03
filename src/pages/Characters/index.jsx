import Container from "../../components/Container";
import Header from "../../components/Header";
import { Link } from "react-router";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import Pagination from "../../components/Pagination";

function Characters() {
  const [characters, setCharacters] = useState([]);

  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalRecords: 0,
  });

  const handlePagination = (page) => {
    setPagination((prev) => ({ ...prev, currentPage: page }));
  };

  useEffect(() => {
    getCharacters();
  }, [pagination.currentPage]);

  const getCharacters = async () => {
    try {
      const { data } = await api.get(
        `/characters?page=${pagination.currentPage}`
      );

      setCharacters(data.data);

      setPagination({
        currentPage: parseInt(data.currentPage),
        totalPages: parseInt(data.totalPages),
        totalRecords: parseInt(data.totalRecords),
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
                  <Link to={`/characters/${character.id}`}>
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

        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          handlePagination={handlePagination}
        />
      </div>

      <Footer />
    </Container>
  );
}

export default Characters;

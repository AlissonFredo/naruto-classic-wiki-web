import Container from "../../components/Container";
import Header from "../../components/Header";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import Pagination from "../../components/Pagination";
import List from "../../components/List";

function Characters() {
  const [characters, setCharacters] = useState([]);

  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalRecords: 0,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
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

  const handlePagination = (page) => {
    setPagination((prev) => ({ ...prev, currentPage: page }));
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

        <List items={characters} baseUrl="/characters" />

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

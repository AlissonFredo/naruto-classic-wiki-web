import { useEffect, useState } from "react";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import { api } from "../../services/api";
import List from "../../components/List";

const Villages = () => {
  const [villages, setVillages] = useState([]);

  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalRecords: 0,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    getVillages();
  }, [pagination.currentPage]);

  const getVillages = async () => {
    try {
      const { data } = await api.get(
        `/villages?page=${pagination.currentPage}`
      );

      setVillages(data.data);

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
            mb-10
          "
        >
          Villages
        </h1>

        <List items={villages} baseUrl="/villages" />

        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          handlePagination={handlePagination}
        />
      </div>

      <Footer />
    </Container>
  );
};

export default Villages;

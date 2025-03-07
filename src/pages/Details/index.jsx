import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

const Details = ({ type = "characters" }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [detail, setDetail] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
    getDetails();
  }, []);

  const getDetails = async () => {
    try {
      const url =
        type == "characters" ? `/characters/${id}` : `/villages/${id}`;

      const { data } = await api.get(url);

      setDetail(data);
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
          min-h-screen
          bg-radial-[at_50%_75%] from-orange-500 via-orange-400 to-orange-400 to-90%
          pb-6
          pt-30
          flex justify-center items-center
          px-3
        "
      >
        <div className="w-3/3 sm:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            <div className="flex justify-center">
              <div
                className="size-50 md:size-60 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${detail.url})` }}
              ></div>
            </div>

            <div className="flex flex-col justify-center">
              <h1 className="text-center sm:text-start text-white font-bold uppercase text-xl md:text-4xl">
                {detail.name}
              </h1>
            </div>

            <div className="sm:col-span-2 px-5 sm:px-20 py-5 sm:py-10 mt-8 text-white font-bold uppercase bg-stone-800/10">
              {detail.about}
            </div>
          </div>
          <div className="text-end py-5">
            <button
              className="
                text-white 
                font-bold 
                uppercase 
                px-4 
                py-2 
                rounded-lg 
                bg-blue-500 
                transition 
                delay-150 
                duration-300 
                ease-in-out 
                hover:-translate-y-1 
                hover:scale-100 
                hover:bg-blue-500
                hover:opacity-75
              "
              onClick={() => navigate(-1)}
            >
              go Back
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Details;

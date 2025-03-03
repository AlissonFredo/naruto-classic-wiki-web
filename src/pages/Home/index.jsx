import NarutoBgImg from "../../assets/naruto.jpg";
import NarutoUzumakiImg from "../../assets/naruto.uzumaki.jpg";
import VillageSymbolKonohaImg from "../../assets/simbolo.aldeia.folha.png";
import Header from "../../components/Header";
import Container from "../../components/Container";
import { Link } from "react-router";
import { useEffect, useRef } from "react";
import Footer from "../../components/Footer";

function Home() {
  const exploreRef = useRef(null);

  const scrollToExplore = () => {
    if (exploreRef.current) {
      exploreRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Header />

      <div
        className="relative h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${NarutoBgImg})` }}
      >
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold">
            Discover the story of Classic Naruto
          </h1>
          <button
            onClick={scrollToExplore}
            className="mt-6 bg-orange-500 hover:bg-orange-600 text-white text-3xl px-6 py-2 rounded-lg font-semibold transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100"
          >
            Explore
          </button>
        </div>
      </div>

      <div
        className="h-full text-white flex flex-col items-center justify-center bg-radial-[at_50%_75%] from-orange-500 via-orange-400 to-orange-400 to-90%"
        id="explore"
        ref={exploreRef}
      >
        <h2 className="text-4xl font-bold mb-10">
          Choose what you want to dive in:
        </h2>

        <div className="grid grid-cols-2 gap-x-15">
          <div className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <Link to="/characters">
              <div
                className="size-60 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${NarutoUzumakiImg})` }}
              ></div>
              <h2 className="mt-8 rounded text-center text-white font-bold uppercase text-3xl">
                Characters
              </h2>
            </Link>
          </div>
          <div className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <Link to="/">
              <div
                className="size-60 bg-white rounded-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${VillageSymbolKonohaImg})`,
                  backgroundSize: "170px",
                }}
              ></div>
              <h2 className="mt-8 rounded text-center text-white font-bold uppercase text-3xl">
                Villages
              </h2>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </Container>
  );
}

export default Home;

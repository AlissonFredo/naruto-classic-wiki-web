import NarutoBgImg from "../../assets/naruto.jpg";
import NarutoUzumakiImg from "../../assets/naruto.uzumaki.jpg";
import VillageSymbolKonohaImg from "../../assets/simbolo.aldeia.folha.png";
import Header from "../../components/Header";
import Container from "../../components/Container";

function Home() {
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
          <a
            href="#explore"
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white text-2xl px-6 py-2 rounded-lg font-semibold transition"
          >
            Explore
          </a>
        </div>
      </div>

      <div
        className="h-full text-white flex flex-col items-center justify-center bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"
        id="explore"
      >
        <h2 className="text-4xl font-bold mb-10">
          Choose what you want to dive in:
        </h2>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h3 className="mb-5 text-center text-3xl font-bold uppercase">
              Characters
            </h3>
            <div>
              <img
                className="w-60 h-108 rounded-lg"
                src={NarutoUzumakiImg}
                alt=""
              />
            </div>
          </div>
          <div>
            <h3 className="mb-5 text-center text-3xl font-bold uppercase">
              Villages
            </h3>
            <div className="flex items-center justify-center w-60 h-108 rounded-lg bg-radial-[at_50%_85%] from-green-500 via-green-700 to-green-900 to-90%">
              <img className="w-50" src={VillageSymbolKonohaImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home;

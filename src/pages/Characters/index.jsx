import Container from "../../components/Container";
import Header from "../../components/Header";
import NarutoUzumakiImg from "../../assets/naruto.uzumaki.jpg";
import { Link } from "react-router";

function Characters() {
  return (
    <Container>
      <Header />
      <div
        className="
          pt-25 
          h-full
          bg-radial-[at_50%_75%] from-orange-500 via-orange-400 to-orange-400 to-90%
        "
      >
        <h1
          className="
            text-center 
            mt-15 
            mb-15 
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
            {Array.from({ length: 3 }).map((_, key) => (
              <div key={key} className="animate-pulse">
                <div className="size-50 rounded-full bg-gray-200"></div>
                <div className="mt-8 h-4 rounded bg-gray-200"></div>
              </div>
            ))}

            {Array.from({ length: 3 }).map((_, key) => (
              <div key={key} className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <Link to="/">
                  <div
                    className="size-50 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${NarutoUzumakiImg})` }}
                  ></div>
                  <h2 className="mt-8 rounded text-center text-white font-bold uppercase">
                    Uzumaki Naruto
                  </h2>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Characters;

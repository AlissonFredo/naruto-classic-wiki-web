import Container from "../../components/Container";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NarutoUzumakiImg from "../../assets/naruto.uzumaki.jpg";
import { useParams } from "react-router";

const Details = () => {
  const { id } = useParams();

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
          flex justify-center items-center
        "
      >
        <div className="w-2/3">
          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="flex justify-center">
              <div
                className="size-60 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${NarutoUzumakiImg})` }}
              ></div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-start text-white font-bold uppercase text-4xl">
                Naruto Uzumaki
              </h1>
            </div>
            <div className="col-span-2 px-20 py-10 mt-8 text-white font-bold uppercase bg-stone-800/10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              ea, quas rem dolorem quibusdam blanditiis, sit pariatur nemo
              corrupti quae illo nisi minima harum ad iste assumenda explicabo
              magni ipsam!
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Details;

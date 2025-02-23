import { Link } from "react-router";

function Home() {
  return (
    <div>
      <h1>Home: Naruto Classic Wiki</h1>
      <Link to="/characters">Characters page</Link>
    </div>
  );
}

export default Home;

import { Link } from "react-router";
import NarutoLogoImg from "../../assets/naruto.logo.png";

function Header() {
  return (
    <div
      className={`
          p-4 
          fixed 
          w-full 
          text-white 
          grid 
          grid-cols-3 
          gap-4 
          z-10 
          bg-radial-[at_50%_85%] from-sky-400 via-blue-600 to-indigo-900 to-90%
        `}
    >
      <div>
        <img className="w-28" src={NarutoLogoImg} alt="naruto logo" />
      </div>
      <div
        className="
            text-xl 
            font-bold 
            uppercase 
            text-center 
            grid 
            grid-cols-3 
            gap-4 
            place-items-center
        "
      >
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="#">Villages</Link>
      </div>
    </div>
  );
}

export default Header;

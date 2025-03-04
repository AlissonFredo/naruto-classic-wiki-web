import { Link } from "react-router";
import NarutoLogoImg from "../../assets/naruto.logo.png";

function Header() {
  const navLinks = [
    { title: "Home", url: "/" },
    { title: "Characters", url: "/characters" },
    { title: "Villages", url: "/villages" },
  ];

  return (
    <div className="p-4 fixed w-full text-white grid grid-cols-3 gap-4 z-10 bg-radial-[at_50%_85%] from-sky-400 via-blue-600 to-indigo-900 to-90%">
      <div>
        <img className="w-28" src={NarutoLogoImg} alt="naruto logo" />
      </div>
      <div className="text-xl font-bold uppercase text-center grid grid-cols-3 gap-4 place-items-center">
        {navLinks.map((navLink, key) => (
          <Link
            key={key}
            to={navLink.url}
            className="px-4 py-2 rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-blue-500"
          >
            {navLink.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;

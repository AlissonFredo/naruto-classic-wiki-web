import { Link } from "react-router";
import NarutoLogoImg from "../../assets/naruto.logo.png";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

function Header() {
  const navLinks = [
    { title: "Home", url: "/" },
    { title: "Characters", url: "/characters" },
    { title: "Villages", url: "/villages" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="
        p-2
        md:p-3
        lg:p-4
        fixed 
        w-full 
        text-white 
        grid
        grid-cols-2
        lg:grid-cols-3
        gap-2 
        md:gap-4 
        z-10 
        bg-radial-[at_50%_85%] 
        from-sky-400 
        via-blue-600 
        to-indigo-900 
        to-90%
      "
    >
      <div className="order-1">
        <img className="w-28" src={NarutoLogoImg} alt="naruto logo" />
      </div>

      <div
        className="
          order-3 
          col-span-2 
          lg:col-span-1 
          lg:order-2
          text-lg 
          md:text-xl 
          font-bold 
          uppercase 
          text-center 
          grid 
          grid-cols-1 
          md:grid-cols-3
          gap-2 
          md:gap-3
          lg:gap-4
          place-items-center
        "
      >
        {navLinks.map((navLink, key) => (
          <Link
            key={key}
            to={navLink.url}
            className={`
              px-4 
              py-2 
              rounded-lg 
              transition 
              delay-150 
              duration-300 
              ease-in-out 
              hover:-translate-y-1 
              hover:scale-100 
              hover:bg-blue-500
              ${isOpen ? "block" : "hidden"}
              lg:block
            `}
          >
            {navLink.title}
          </Link>
        ))}
      </div>
      <div className="order-2 lg:order-3 flex justify-end items-center block lg:hidden ">
        <IoMenu onClick={() => setIsOpen((prev) => !prev)} className="size-7" />
      </div>
    </div>
  );
}

export default Header;

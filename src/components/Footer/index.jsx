import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
      text-sm
      text-white 
      p-2
      sm:p-3 
      font-bold 
      uppercase 
      bg-radial-[at_50%_85%] 
      from-sky-400 
      via-blue-600 
      to-indigo-900 
      to-90%
      flex 
      justify-center 
      place-items-center

    "
    >
      Developed by Douglas Alisson
      <a
        href="https://github.com/AlissonFredo"
        target="_blank"
        className="ml-2"
      >
        <FaGithub className="text-2xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/douglas-alisson-da-silva-fredo/"
        target="_blank"
        className="ml-2"
      >
        <FaLinkedin className="text-2xl" />
      </a>
    </footer>
  );
};

export default Footer;

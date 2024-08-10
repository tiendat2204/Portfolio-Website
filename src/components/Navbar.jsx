import logo from "../assets/tdatdev-high-resolution-logo-white-transparent.png";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
const Navbar = ({ scrollToTop }) => {
  return (
    <nav className="fixed top-0 z-20 flex items-center justify-around gap-20 md:gap-72 w-full backdrop-blur-md h-16 ">
      <div className="flex flex-shrink-0 items-center">
          <img src={logo} alt="Logo" className="w-20 h-auto cursor-pointer" onClick={scrollToTop}/>
      </div>
      <div className="flex m-8 items-center justify-center gap-4">
        <a
          href="https://www.facebook.com/profile.php?id=100017476893022"
          target="_blank"
          rel="noreferrer"
          className="text-white "
        >
          <FaFacebook className="size-7" />
        </a>
        <a
          href="mailto:tdatdev@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-white "
        >
          <SiGmail className="size-7" />
        </a>
        <a
          href="https://github.com/tiendat2204"
          target="_blank"
          rel="noreferrer"
          className="text-white "
        >
          <FaGithub className="size-7" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

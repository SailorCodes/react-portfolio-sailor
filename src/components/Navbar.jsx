import logo from "../assets/sailorcodes.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/arda-gok/"><FaLinkedin /></a>
            <a href="https://github.com/SailorCodes"><FaGithub /></a>
            <a href="https://www.instagram.com/arda.gxk/"><FaInstagram /></a>
            <a href="https://x.com/SailxrK"><FaSquareXTwitter /></a>
        </div>
    </nav>
  )
}

export default Navbar

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="footer-container"
      className="bordered item-center flex h-full w-full flex-row"
    >
      <div className="bordered flex w-1/5 items-center justify-center">
        <div className="flex h-full w-full flex-row items-center text-code-variable">
          <span className="ml-2 mr-2 px-2">find me on:</span>
          <span className="bordered flex h-full items-center justify-center px-2">
            <FaLinkedin className="h-5 w-5 cursor-pointer transition-colors duration-100 hover:text-white" />
          </span>
          <span className="bordered flex h-full items-center justify-center px-2">
            <FaInstagram className="h-5 w-5 cursor-pointer transition-colors duration-100 hover:text-white" />
          </span>
        </div>
      </div>
      <div className="bordered flex-1"></div>
      <div className="bordered">
        <div className="flex h-full cursor-pointer items-center justify-center px-2 text-code-variable transition-colors duration-100 hover:text-white">
          <span className="mr-2">@timspizza</span>
          <FaGithub className="h-5 w-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

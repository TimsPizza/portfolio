import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="footer-container"
      className="bordered item-center flex h-full w-full flex-row"
    >
      <div className="bordered flex w-72 items-center justify-center">
        <div
          className="flex h-full w-full flex-row items-center"
          style={{ color: "var(--theme-code-variable)" }}
        >
          <span className="ml-2 mr-2 px-2">find me on:</span>
          <span className="bordered flex h-full items-center justify-center px-2">
            <a href="https://www.linkedin.com/in/timspizza/">
              <FaLinkedin
                className="h-5 w-5 cursor-pointer transition-colors duration-100"
                style={{ color: "var(--theme-code-variable)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--theme-text-light)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--theme-code-variable)")
                }
              />
            </a>
          </span>
          <span className="bordered flex h-full items-center justify-center px-2">
            <a href="https://www.instagram.com/timmspizza/">
              <FaInstagram
                className="h-5 w-5 cursor-pointer transition-colors duration-100"
                style={{ color: "var(--theme-code-variable)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--theme-text-light)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--theme-code-variable)")
                }
              />
            </a>
          </span>
        </div>
      </div>
      <div className="bordered flex-1"></div>
      <div className="bordered">
        <a
          className="flex h-full cursor-pointer items-center justify-center px-2 transition-all duration-100 hover:brightness-125"
          href="https://github.com/TimsPizza/portfolio"
          style={{ color: "var(--theme-code-variable)" }}
        >
          <FaGithub className="h-5 w-5 cursor-pointer mr-1" />
          <span className="mr-2">source</span>
        </a>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const FooterComponent = () => {
  return (
    <>
      <footer className="container bg-primary p-3">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <strong className="text-light">
                Nazzareno Ferraris Sabbatini
              </strong>
            </div>
            <div class="col">
              <a
                href="https://www.linkedin.com/in/nazzareno-dante-ferraris-sabbatini-3a8557269/"
                className="text-light text-decoration-none"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
            <div class="col">
              <a
                href="mailto:nazzaferrariss@gmail.com"
                className="text-light text-decoration-none"
              >
                <SiGmail />
              </a>
            </div>
            <div class="col">
              <a
                href="https://github.com/NazzaFerraris2023?tab=repositories"
                className="text-light text-decoration-none"
                target="_blank"
              >
                <FaGithub />
              </a>
            </div>
            <div class="col">
              <small className="text-light">
                &copy; {new Date().getFullYear()}
              </small>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;

import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
const NavBarComponent = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid ">
          <a class="navbar-brand text-dark" href="#">
            Nazzareno Ferraris
          </a>
          <button
            class="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon "></span>
          </button>
          <div class="collapse navbar-collapse text-dark " id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a
                  class="nav-link active text-dark"
                  aria-current="page"
                  href="#"
                >
                  Proyectos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">
                  Stack tecnologico
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark" href="#">
                  Experiencia
                </a>
              </li>
              <li class="nav-item bg-secondary p-0 rounded-3 mx-1">
                <a class="nav-link text-dark text-center" href="#">
                  <MdOutlineFileDownload /> Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBarComponent;

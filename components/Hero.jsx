import React from "react";

const Hero = () => {
  return (
    <>
      <section className="container ">
        <div className="row p-2" >
          <div className="col-6 " data-aos="fade-right" data-aos-delay="300">
          <img className="hero-img" src="/assets/code-2434271_640.jpg" alt="" />
        </div>

        <div className="col" data-aos="fade-left" data-aos-delay="300">
          <h1 className="special-text text-warning fw-bold primary-size">
          Nazzareno Ferraris Sabbatini
        </h1>

        <h2 className="special-text text-warning secondary-title-size">
          Estudiante de Analista en Sistemas | Desarrollador Full Stack |
          <span className="text-secondary fw-bold"> Orientación Frontend</span>
        </h2>

        <h3 className="text-info special-text fw-semibold tertiary-title-size">
          Desarrollo aplicaciones web con JavaScript, React y Node.js, enfocado
          en soluciones claras, eficientes y bien estructuradas.
        </h3>

        <div className="d-flex ">
          <div className="bg-secondary p-2 rounded-3 me-2">
            <a className="text-dark text-decoration-none special-text fw-semibold" href="#">Ver proyectos</a>
          </div>
          <div className="bg-success p-2 rounded-3 ms-2 ">
            <a className="text-dark text-decoration-none special-text fw-semibold" href="#">Contactarme</a>
          </div>
        </div>
        </div>
        
        </div>
        
      </section>
    </>
  );
};

export default Hero;

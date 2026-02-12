import React from "react";

const AboutMeComponent = () => {
  return (
    <>
      <section className="container mt-3 ">
        <h3 className="text-warning special-text fw-bold text-center secondary-title-size">
          Sobre mi
        </h3>
        <p className="text-info special-text fw-semibold normal-text-size">
          Actualmente estoy estudiando la tecnicatura en Analista de Sistemas.
          Me formé como desarrollador Frontend y actualmente busco expandir mis
          conocimientos, enfocándome en afianzar el backend mientras continúo
          perfeccionando mis habilidades en frontend. Además, dedico parte de mi
          tiempo al aprendizaje de tecnologías para desarrollo mobile (React
          Native / Kotlin).
        </p>

        <ul class="list-group list-group-flush special-text fw-semibold  ">
          <li class="list-group-item bg-primary text-info normal-text-size">
            Bases sólidas en lógica y programación
          </li>
          <li class="list-group-item bg-primary text-info special-text fw-semibold normal-text-size">
            Bases sólidas en Programación Orientada a Objetos
          </li>
          <li class="list-group-item bg-primary text-info special-text fw-semibold normal-text-size">
            Conocimientos en herramientas de gestión de proyectos (PERT, Gantt)
            y diagramas (UML, Secuencia)
          </li>
          <li class="list-group-item bg-primary text-info special-text fw-semibold normal-text-size">
            Experiencia en proyectos personales y académicos
          </li>
          <li class="list-group-item bg-primary text-info special-text fw-semibold normal-text-size">Conocimientos en bases de datos</li>
        </ul>
      </section>
    </>
  );
};

export default AboutMeComponent;

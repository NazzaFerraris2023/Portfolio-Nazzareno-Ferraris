import React from "react";

const ProyectosComponents = () => {
  return (
    <>
      <section className="container">
        <h3 className="text-dark special-text fw-bold text-center secondary-title-size">
          {" "}
          Proyectos
        </h3>

        <div className="">
          <h4 className="text-dark special-text fw-bold tertiary-title-size">
            Zoom For Education | Proyecto Final
          </h4>

          <p className="text-info special-text normal-text-size">
            Plugin para Moodle que extiende la integración con Zoom,
            incorporando validaciones automáticas y reglas de comportamiento
            para mejorar el control de las clases virtuales.
          </p>

          <p className="text-dark normal-text-size">
            <strong>Funcionalidades principales:</strong>
          </p>
          <ul>
            <li className="text-info list-unstyled">
              Preview de cámara y micrófono previo al ingreso a la reunión
              (WebRTC)
            </li>
            <li className="text-info list-unstyled">
              Validación de cámara, micrófono e iluminación
            </li>
            <li className="text-info list-unstyled">
              Sistema automático de advertencias y sanciones
            </li>
            <li className="text-info list-unstyled">
              Envío a sala de espera y expulsión según reglas configuradas
            </li>
            <li className="text-info list-unstyled">
              Integración con Zoom Meeting SDK (Component View)
            </li>
            <li className="text-info list-unstyled">
              Comunicación frontend ↔ backend mediante API propia
            </li>
          </ul>

          <p className="text-info">
            <strong className="text-dark">Stack:</strong> JavaScript, PHP,
            React, WebRTC, Zoom Meeting SDK, Moodle, MariaDB, Docker
          </p>

          <p className="text-info">
            <strong className="text-dark">Tipo:</strong> Proyecto académico
            grupal
          </p>

          <p className="text-info">
            <strong className="text-dark">Rol:</strong> Desarrollador Frontend
          </p>
          <ul>
            <li className="text-info list-unstyled">
              Desarrollo de preview con WebRTC
            </li>
            <li className="text-info list-unstyled">
              Validaciones de permisos de cámara y micrófono
            </li>
            <li className="text-info list-unstyled">
              Integración con Zoom Meeting SDK
            </li>
            <li className="text-info list-unstyled">
              Captura de eventos y lógica de sanciones
            </li>
            <li className="text-info list-unstyled">
              Gestión de sala de espera, reconexión y expulsión automática
            </li>
          </ul>

          <div className="d-flex ">
            <div className="bg-secondary p-2 rounded-3 mb-3">
              <a
                className="text-dark text-decoration-none special-text fw-semibold"
                href="#"
              >
                Ver demo
              </a>
            </div>
          </div>

          <h4 className="text-dark special-text fw-bold tertiary-title-size">
            Pagina web | Cliente privado
          </h4>
          <span className="text-warning">
            Sitio web corporativo para empresa internacional de comercio
            exterior
          </span>

          <p className="text-warning">
            Desarrollo de un sitio web corporativo orientado a mejorar la
            presencia digital, generar confianza y captar contactos comerciales.
          </p>

          <ul>
            <li className="text-warning">
              17 vistas informativas y comerciales
            </li>
            <li className="text-warning">
              Soporte multilenguaje (ES / EN / PT)
            </li>
            <li className="text-warning">
              Formulario de contacto con protección antispam
            </li>
            <li className="text-warning">
              Animaciones con AOS y diseño responsive
            </li>
            <li className="text-warning">Optimización SEO on-page</li>
          </ul>

          <p className="text-warning">
            <strong className="text-warning">Stack:</strong> React, Vite,
            Bootstrap, React Router, i18next, AOS, React Hook Form
          </p>
          <p className="text-warning">
            <strong className="text-warning">Tipo:</strong> Proyecto freelance
          </p>
          <p className="text-warning">
            <strong className="text-warning">Rol:</strong> Desarrollador
            Frontend
          </p>

          <div className="d-flex ">
            <div className="bg-secondary p-2 rounded-3 mb-3">
              <a
                className="text-dark text-decoration-none special-text fw-semibold"
                href="#"
              >
                Ver demo
              </a>
            </div>
          </div>

          <h4 className="text-dark special-text fw-bold tertiary-title-size">
            Landing page | Cliente privado
          </h4>
          <span className="text-info">
            Landing page corporativa para empresa de comercio internacional
            orientada a la captación de leads y optimización de la comunicación
            de servicios.
          </span>

          <ul className="mt-2">
            <li className="text-info">Navegación por secciones</li>
            <li className="text-info">
              Formulario con React Hook Form + FormSubmit
            </li>
            <li className="text-info">Soporte multilenguaje</li>
            <li className="text-info">SEO on-page y diseño responsive</li>
          </ul>

          <p className="text-info">
            <strong className="text-warning">Stack:</strong> React, Vite, React
            Router, react-i18next, React Hook Form, FormSubmit
          </p>
          <p className="text-info">
            <strong className="text-warning">Tipo:</strong> Proyecto freelance
          </p>
          <p className="text-info">
            <strong className="text-warning">Rol:</strong> Desarrollador
            Frontend
          </p>
        </div>

        <div className="d-flex ">
            <div className="bg-secondary p-2 rounded-3 mb-3">
              <a
                className="text-dark text-decoration-none special-text fw-semibold"
                href="#"
              >
                Ver demo
              </a>
            </div>
          </div>
      </section>
    </>
  );
};

export default ProyectosComponents;

import React, { useState } from "react";

const ProyectosComponents = () => {
  const [demoOrt, setDemoOrt] = useState(false);

  const handleDemo = () => {
    if (demoOrt === true) {
      return (
        <div style={{ backgroundColor: "red" }}>
          <h3>Demo de prueba</h3>
        </div>
      );
    }
  };
  return (
    <>
      <section className="container">
        <h3 className="text-dark special-text fw-bold text-center secondary-title-size">
          Proyectos
        </h3>

        <div className="">
          <div
            className="contenedor-custom "
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h4 className="text-dark special-text fw-bold tertiary-title-size ">
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

            <div className="d-flex justify-content-start">
              <div className="bg-secondary p-2 rounded-3 mb-3">
                <a
                  className="text-dark text-decoration-none special-text fw-semibold"
                  onClick={() => setDemoOrt(true)}
                >
                  {console.log(demoOrt)}
                  Ver demo
                </a>
              </div>
            </div>
          </div>

          {demoOrt && (
            <div
              className="modal fade show d-block"
              onClick={() => setDemoOrt(false)}
            >
              <div
                className="modal-dialog modal-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-content bg-primary text-white">
                  <div className="modal-header">
                    <h5 className="modal-title">Demo Zoom for Education</h5>
                    <button
                      type="button"
                      className="btn-close btn-close-white"
                      onClick={() => setDemoOrt(false)}
                    />
                  </div>

                  <div className="modal-body">
                    <video controls style={{ width: "95%", height:"90%" }}>
                      <source
                        src="/assets/Demo Zoom for education.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div
            className="d-flex justify-content-end flex-column text-end bg-whit contenedor-custom ms-auto"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h4 className="text-dark special-text fw-bold tertiary-title-size ">
              Pagina web | Cliente privado
            </h4>
            <span className="text-info">
              Sitio web corporativo para empresa internacional de comercio
              exterior
            </span>

            <p className="text-info">
              Desarrollo de un sitio web corporativo orientado a mejorar la
              presencia digital, generar confianza y captar contactos
              comerciales.
            </p>

            <p className="text-dark normal-text-size">
              <strong>Funcionalidades principales:</strong>
            </p>
            <ul className="text-end">
              <li className="text-info list-unstyled">
                17 vistas informativas y comerciales
              </li>
              <li className="text-info list-unstyled">
                Soporte multilenguaje (ES / EN / PT)
              </li>
              <li className="text-info list-unstyled">
                Formulario de contacto con protección antispam
              </li>
              <li className="text-info list-unstyled">
                Animaciones con AOS y diseño responsive
              </li>
              <li className="text-info list-unstyled">
                Optimización SEO on-page
              </li>
            </ul>

            <p className="text-info">
              <strong className="text-info">Stack:</strong> React, Vite,
              Bootstrap, React Router, i18next, AOS, React Hook Form
            </p>
            <p className="text-info">
              <strong className="text-info">Tipo:</strong> Proyecto freelance
            </p>
            <p className="text-info">
              <strong className="text-info">Rol:</strong> Desarrollador Frontend
            </p>

            <div className="d-flex justify-content-end">
              <div className="bg-secondary p-2 rounded-3 mb-3">
                <a
                  className="text-dark text-decoration-none special-text fw-semibold"
                  href="#"
                >
                  Ver demo
                </a>
              </div>
            </div>
          </div>
          <div className="contenedor-custom" data-aos="fade-right">
            <h4 className="text-dark special-text fw-bold tertiary-title-size">
              Landing page | Cliente privado
            </h4>
            <span className="text-info">
              Landing page corporativa para empresa de comercio internacional
              orientada a la captación de leads y optimización de la
              comunicación de servicios.
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
              <strong className="text-warning">Stack:</strong> React, Vite,
              React Router, react-i18next, React Hook Form, FormSubmit
            </p>
            <p className="text-info">
              <strong className="text-warning">Tipo:</strong> Proyecto freelance
            </p>
            <p className="text-info">
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
          </div>

          
        </div>
      </section>
    </>
  );
};

export default ProyectosComponents;

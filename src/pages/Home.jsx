import React from "react";

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="firstContact">
        <h1>Nazzareno Dante Ferraris Sabbatini</h1>

        <h2>
          Estudiante de Analista en Sistemas | Desarrollador Full Stack{" "}
          <span>Orientación Frontend</span>
        </h2>

        <h3>
          Desarrollo aplicaciones web con JavaScript, React y Node.js, enfocado en
          soluciones claras, eficientes y bien estructuradas.
        </h3>

        <div className="firstContactButtons">
          <div>
            <a href="">CV</a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/nazzareno-dante-ferraris-sabbatini-3a8557269/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div>
            <a
              href="https://github.com/NazzaFerraris2023?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section className="AboutMe">
        <p>
          Actualmente estoy estudiando la tecnicatura en Analista de Sistemas en
          ORT. Me formé como desarrollador Frontend y actualmente busco expandir
          mis conocimientos, enfocándome en afianzar el backend mientras continúo
          perfeccionando mis habilidades en frontend. Además, dedico parte de mi
          tiempo al aprendizaje de tecnologías para desarrollo mobile
          (React Native / Kotlin).
        </p>

        <ul>
          <li>Bases sólidas en lógica y programación</li>
          <li>Bases sólidas en Programación Orientada a Objetos</li>
          <li>
            Conocimientos en herramientas de gestión de proyectos (PERT, Gantt) y
            diagramas (UML, Secuencia)
          </li>
          <li>Experiencia en proyectos personales y académicos</li>
          <li>Conocimientos en bases de datos</li>
        </ul>
      </section>

      {/* SKILLS */}
      <section className="skills">
        <h4>Stack tecnológico</h4>

        <h5>Frontend</h5>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
        </ul>

        <h5>Backend</h5>
        <ul>
          <li>Java</li>
          <li>Node.js</li>
          <li>Express.js</li>
        </ul>

        <h5>Desarrollo mobile</h5>
        <ul>
          <li>React Native</li>
          <li>Kotlin / Jetpack Compose</li>
        </ul>

        <h5>Manejo de versiones</h5>
        <ul>
          <li>Git</li>
          <li>GitHub</li>
        </ul>

        <h5>Bases de datos</h5>
        <ul>
          <li>SQL Server</li>
          <li>Sequelize</li>
          <li>MariaDB</li>
        </ul>
      </section>

      {/* PROYECTOS */}
      <section>
        <h3>Proyectos</h3>

        <div className="contenedorProyectos">
          <h4>Zoom For Education</h4>
          <span className="tag">Proyecto Final – ORT</span>

          <p>
            Plugin para Moodle que extiende la integración con Zoom, incorporando
            validaciones automáticas y reglas de comportamiento para mejorar el
            control de las clases virtuales.
          </p>

          <p>
            <strong>Funcionalidades principales:</strong>
          </p>
          <ul>
            <li>
              Preview de cámara y micrófono previo al ingreso a la reunión
              (WebRTC)
            </li>
            <li>Validación de cámara, micrófono e iluminación</li>
            <li>Sistema automático de advertencias y sanciones</li>
            <li>
              Envío a sala de espera y expulsión según reglas configuradas
            </li>
            <li>Integración con Zoom Meeting SDK (Component View)</li>
            <li>Comunicación frontend ↔ backend mediante API propia</li>
          </ul>

          <p>
            <strong>Stack:</strong> JavaScript, PHP, React, WebRTC, Zoom Meeting
            SDK, Moodle, MariaDB, Docker
          </p>

          <p>
            <strong>Tipo:</strong> Proyecto académico grupal
          </p>

          <p>
            <strong>Rol:</strong> Desarrollador Frontend
          </p>
          <ul>
            <li>Desarrollo de preview con WebRTC</li>
            <li>Validaciones de permisos de cámara y micrófono</li>
            <li>Integración con Zoom Meeting SDK</li>
            <li>Captura de eventos y lógica de sanciones</li>
            <li>
              Gestión de sala de espera, reconexión y expulsión automática
            </li>
          </ul>

          <h4>Mercopoli</h4>
          <span>
            Sitio web corporativo para empresa internacional de comercio exterior
          </span>

          <p>
            Desarrollo de un sitio web corporativo orientado a mejorar la
            presencia digital, generar confianza y captar contactos
            comerciales.
          </p>

          <ul>
            <li>17 vistas informativas y comerciales</li>
            <li>Soporte multilenguaje (ES / EN / PT)</li>
            <li>Formulario de contacto con protección antispam</li>
            <li>Animaciones con AOS y diseño responsive</li>
            <li>Optimización SEO on-page</li>
          </ul>

          <p>
            <strong>Stack:</strong> React, Vite, Bootstrap, React Router,
            i18next, AOS, React Hook Form
          </p>
          <p>
            <strong>Tipo:</strong> Proyecto freelance
          </p>
          <p>
            <strong>Rol:</strong> Desarrollador Frontend
          </p>

          <h4>Bakotrade</h4>
          <span>
            Landing page corporativa para empresa de comercio internacional
          </span>

          <p>
            Landing page orientada a la captación de leads y optimización de la
            comunicación de servicios.
          </p>

          <ul>
            <li>Navegación por secciones</li>
            <li>Formulario con React Hook Form + FormSubmit</li>
            <li>Soporte multilenguaje</li>
            <li>SEO on-page y diseño responsive</li>
          </ul>

          <p>
            <strong>Stack:</strong> React, Vite, React Router, react-i18next,
            React Hook Form, FormSubmit
          </p>
          <p>
            <strong>Tipo:</strong> Proyecto freelance
          </p>
          <p>
            <strong>Rol:</strong> Desarrollador Frontend
          </p>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia">
        <h3>Experiencia</h3>

        <div className="card">
          <h4>Administración y Comercio Exterior</h4>
          <span>TEBIORG SAS</span>
          <p className="period">Septiembre 2024 – Actualidad</p>

          <ul>
            <li>Gestión de órdenes de compra y venta</li>
            <li>Comparación de cotizaciones de forwarders</li>
            <li>Control de logística marítima de punta a punta</li>
            <li>Conciliaciones bancarias y revisión de balances</li>
            <li>Reestructuración y control de stock en sistema</li>
            <li>Control y seguimiento de documentación</li>
          </ul>
        </div>

        <div className="card">
          <h4>Administrativo – Oficina Técnica de Mantenimiento</h4>
          <span>Complejo Teatral San Martín</span>
          <p className="period">Diciembre 2022 – Septiembre 2024</p>

          <ul>
            <li>Gestión de órdenes de compra</li>
            <li>Contacto con proveedores</li>
            <li>Control de stock por áreas</li>
            <li>Coordinación logística de materiales</li>
          </ul>
        </div>
      </section>

      {/* FORMACION */}
      <section id="formacion">
        <h3>Formación</h3>

        <div className="card">
          <h4>Analista en Sistemas</h4>
          <span>ORT – Sede Belgrano</span>
          <p className="period">Marzo 2024 – Actualidad</p>

          <ul>
            <li>Programación Orientada a Objetos</li>
            <li>Bases de datos</li>
            <li>Backend</li>
            <li>Metodologías Ágiles</li>
            <li>Patrones de Diseño</li>
          </ul>
        </div>

        <div className="card">
          <h4>Desarrollador Frontend React</h4>
          <span>Coderhouse</span>
          <p className="period">Enero 2023 – Noviembre 2023</p>
        </div>
      </section>

      {/* CERTIFICACIONES */}
      <section id="certificaciones">
        <h3>Certificaciones y Cursos</h3>

        <ul>
          <li>Desarrollador Frontend React – Coderhouse</li>
          <li>First Certificate Exam (Inglés)</li>
        </ul>
      </section>

      {/* CONTACTO */}
      <section id="contacto">
        <h3>Contacto</h3>

        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:nazzaferrariss@gmail.com">
              nazzaferrariss@gmail.com
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/NazzaFerraris2023"
              target="_blank"
              rel="noreferrer"
            >
              github.com/NazzaFerraris2023
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/nazzareno-dante-ferraris-sabbatini-3a8557269/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/nazzareno-dante-ferraris-sabbatini
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Home;

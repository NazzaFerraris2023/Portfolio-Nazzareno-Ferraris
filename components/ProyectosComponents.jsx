import React from 'react'

const ProyectosComponents = () => {
  return (
    <>
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
 
    </>
  )
}

export default ProyectosComponents

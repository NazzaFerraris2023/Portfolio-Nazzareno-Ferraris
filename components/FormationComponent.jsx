import React from 'react'

const FormationComponent = () => {
  return (
    <>
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
 
    </>
  )
}

export default FormationComponent

import React from 'react'
import SocialNetworkComponent from './socialNetworkComponent'

const Hero = () => {
  return (
    <>
      <section className="">
        <h1>Nazzareno Dante Ferraris Sabbatini</h1>

        <h2>
          Estudiante de Analista en Sistemas | Desarrollador Full Stack
          <span>Orientación Frontend</span>
        </h2>

        <h3>
          Desarrollo aplicaciones web con JavaScript, React y Node.js, enfocado en
          soluciones claras, eficientes y bien estructuradas.
        </h3>

        <SocialNetworkComponent />
      </section>

    </>
  )
}

export default Hero

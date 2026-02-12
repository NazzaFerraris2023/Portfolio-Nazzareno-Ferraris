import React from 'react'

const SkillsComponent = () => {
  return (
    <>
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
    </>
  )
}

export default SkillsComponent

import React from 'react'
import { LuDatabase } from "react-icons/lu";
import { FaGithub } from "react-icons/fa6";
import { CiMobile4 } from "react-icons/ci";
import { GoGear } from "react-icons/go";
import { HiOutlineCode } from "react-icons/hi";

const SkillsComponent = () => {
  return (
    <>
       <section className="container bg-primary">
        <h4 className='special-text text-dark fw-bold text-center my-3 secondary-title-size'>Stack tecnológico</h4>

        <div className='d-flex'>
          <div className='d-flex flex-column mx-auto gap-2 animation-front'>
            <h5 className='text-dark fw-bold'>Frontend <HiOutlineCode /></h5>
        <ul>
          <li className='text-info fw-semibold list-unstyled normal-text-size'>JavaScript</li>
          <li className='text-info fw-semibold list-unstyled normal-text-size'>React</li>
          <li className='text-info fw-semibold list-unstyled normal-text-size'>HTML</li>
          <li className='text-info fw-semibold list-unstyled normal-text-size'>CSS</li>
          <li className='text-info fw-semibold list-unstyled normal-text-size'>Bootstrap</li>
          <li className='text-info fw-semibold list-unstyled normal-text-size'>Tailwind</li>
        </ul>
          </div>
          
          <div className='d-flex flex-column mx-auto gap-2 animation-back'>
            <h5 className='text-dark fw-bold hover-text-back'>Backend <GoGear /></h5>
        <ul>
          <li className='text-info fw-semibold list-unstyled normal-text-size'>Java</li>
          <li className='text-info fw-semibold list-unstyled normal-text-size'>Node.js</li>
          <li className='text-info fw-semibold list-unstyled normal-text-size'>Express.js</li>
        </ul>    
          </div>
        
        <div className='d-flex flex-column mx-auto gap-2 animation-mobile'>
          <h5 className='text-dark fw-bold'>Desarrollo mobile <CiMobile4 /></h5>
        <ul>
          <li className='text-info fw-semibold list-unstyled normal-text-size'>React Native</li>
          <li className='text-info fw-semibold list-unstyled normal-text-size'>Kotlin / Jetpack Compose</li>
        </ul>
        </div>
        
        <div className='d-flex flex-column mx-auto gap-2 animation-versiones'>
          <h5 className='text-dark fw-bold'>Manejo de versiones <FaGithub /></h5>
        <ul>
          <li className='text-info fw-semibold list-unstyled normal-text-size'>Git</li>
          <li className='text-info fw-semibold list-unstyled normal-text-size'>GitHub</li>
        </ul>
        </div>
        
        <div className='d-flex flex-column mx-auto gap-2 animation-datos'>
          <h5 className='text-dark fw-bold'>Bases de datos <LuDatabase /> </h5>
        <ul>
          <li className='text-info fw-semibold list-unstyled normal-text-size'>SQL Server</li>
          <li className='text-info fw-semibold list-unstyled normal-text-size'>Sequelize</li>
          <li className='text-info fw-semibold list-unstyled normal-text-size'>MariaDB</li>
        </ul>
        </div>
        
        </div>
        
      </section>
    </>
  )
}

export default SkillsComponent

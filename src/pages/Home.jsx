import React from "react";
import Hero from "../../components/Hero";
import AboutMeComponent from "../../components/AboutMeComponent";
import SkillsComponent from "../../components/SkillsComponent";
import ProyectosComponents from "../../components/ProyectosComponents";
import ExperienceComponent from "../../components/ExperienceComponent";
import FormationComponent from "../../components/FormationComponent";
import CertificationComponents from "../../components/CertificationComponents";
import ContactComponent from "../../components/ContactComponent";
import NavBarComponent from "../../components/NavBarComponent";

const Home = () => {
  return (
    <>
    <div className="bg-primary">

        <NavBarComponent />

      {/* HERO */}
      <Hero />
      {/* ABOUT ME */}
      <AboutMeComponent />
      {/* SKILLS */}
     <SkillsComponent />

      {/* PROYECTOS */}
      <ProyectosComponents />
      {/* EXPERIENCIA */}
      <ExperienceComponent />

      {/* FORMACION */}
      <FormationComponent />
      {/* CERTIFICACIONES */}
      <CertificationComponents />

      {/* CONTACTO */}
      <ContactComponent />
    </div>   
      
    </>
  );
};

export default Home;

import React from "react";
import Hero from "../../components/Hero";
import AboutMeComponent from "../../components/AboutMeComponent";
import SkillsComponent from "../../components/SkillsComponent";
import ProyectosComponents from "../../components/ProyectosComponents";
import ContactComponent from "../../components/ContactComponent";
import NavBarComponent from "../../components/NavBarComponent";
import FooterComponent from "../../components/FooterComponent";

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

        {/* CONTACTO */}
        <ContactComponent />
        {/* FOOTER */}
        <FooterComponent />

      </div>
    </>
  );
};

export default Home;

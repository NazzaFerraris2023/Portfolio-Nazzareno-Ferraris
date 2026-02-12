import React from 'react'

const ExperienceComponent = () => {
  return (
    <>
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
    </>
  )
}

export default ExperienceComponent

import React, { useRef, useState } from "react";

const ContactComponent = () => {
  const honeyRef = useRef(null);
  const [data, setData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = async(elemento) => {
    const {name,value} = elemento.target
    setData((prev) => ({...prev,[name]:value}))
  }

  const handleSubmit = async (elemento) => {
    elemento.preventDefault();
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,60}$/;
    const soloNumeros = /^\+?[0-9]{8,15}$/;

    if (data.nombre.length > 60) return;
    if (data.email.length > 80) return;
    if (data.mensaje.length > 500) return;

    if (data.nombre.trim() === "" || data.email.trim() === "") {
      alert("El campo nombre o correo electronico es obligatorio");
      return;
    } else if (!soloLetras.test(data.nombre)) {
      alert("Caracteres invalidos");
      return;
    } else if (!soloNumeros.test(data.telefono)) {
      alert("Solo se aceptan numeros");
      return;
    }
    //Preparo datos para formsubmitted

    const datos = {
      nombre: data.nombre,
      email: data.email,
      telefono: data.telefono,
      mensaje: data.mensaje,
      _honey: honeyRef.current?.value || "",
      _replyto: data.email,
      _subject: "Recibiste una consulta de: " + data.nombre,
      _captcha: true,
      _template: "table",
    };

    const formBody = new URLSearchParams(datos);

    try {
      const res = await fetch(
        "https://formsubmit.co/15bd2c2f2398122de6d3a2392065f2aa",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formBody,
        }
      );

      if (res.ok) {
        alert("Mensaje enviado correctamente!");

        setData({
          nombre: "",
          email: "",
          telefono: "",
          mensaje: "",
        });
      } else {
        alert("Algo salio mal!");
      }
    } catch (error) {
      alert("Hubo un error de conexion!", error);
    } finally {
      honeyRef.current.value = "";
    }
  };

  return (
    <>
      <section id="contacto" className="container my-3">
        <h3 className="text-warning special-text fw-bold text-center secondary-title-size">
          Contacto
        </h3>
        <form
          action="/my-handling-form-page"
          method="post"
          className="formulario"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="_honey"
            ref={honeyRef}
            tabIndex="-1"
            autoComplete="off"
            style={{ display: "none" }}
          />
          <ul className="d-flex flex-column ">
            <li className="list-unstyled ">
              <label className="d-block text-info " for="name">
                Nombre:
              </label>
              <input
                className="form"
                type="text"
                id="name"
                name="nombre"
                placeholder="Pepe"
                value={data.nombre}
                onChange={handleChange}
              />
            </li>
            <li className="list-unstyled">
              <label className="d-block text-info" for="mail">
                Correo electrónico:
              </label>
              <input
                className="form"
                type="email"
                id="mail"
                name="email"
                placeholder="pepe@outlook.com.ar"
                value={data.email}
                onChange={handleChange}
              />
            </li>
            <li className="list-unstyled">
              <label className="d-block text-info" for="mail">
                Telefono de contacto:
              </label>
              <input
                className="form"
                type="tel"
                id="tel"
                name="telefono"
                placeholder="123456789"
                value={data.telefono}
                onChange={handleChange}
              />
            </li>
            <li className="list-unstyled">
              <label className="d-block text-info" for="msg">
                Mensaje:
              </label>
              <textarea
                className="form"
                id="msg"
                name="mensaje"
                placeholder="Deja tu consulta aca!"
                value={data.mensaje}
                onChange={handleChange}
              ></textarea>
            </li>
          </ul>
          <div className="d-flex justify-content-center ">
            <button className="bg-secondary rounded-3 mb-3 p-2 btn-form text-dark text-decoration-none special-text fw-semibold border border-0">
              Enviar
            </button>
          </div>
        </form>

        {/* Modal Bootstrap
       <div className={`modal fade ${showModal ? "show d-block" : ""}`} tabIndex="-1" style={{background: showModal ? "rgba(0,0,0,0.5)" : "none"}}>
        <div className="modal-dialog">
          <div className="modal-content color-modal">
            <div className="modal-header ">
              <h5 className="modal-title text-light">{t("form_advise")}!</h5>
              <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="modal-body">
              <p className="text-light">{modalMsg}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                {t("form_close_button")}
              </button>
            </div>
          </div>
        </div>
      </div> */}
      </section>
    </>
  );
};

export default ContactComponent;

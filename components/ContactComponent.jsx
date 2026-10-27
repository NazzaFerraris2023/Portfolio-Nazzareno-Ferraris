import React, { useRef, useState } from "react";
import Swal from "sweetalert2";

const ContactComponent = () => {
  const [loader, setLoader] = useState(false);
  const honeyRef = useRef(null);
  const [data, setData] = useState({
    name: "",
    email: "",
    telefono: "",
    message: "",
    honey: "",
  });

  const handleChange = async (elemento) => {
    const { name, value } = elemento.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (elemento) => {
    elemento.preventDefault();
    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,60}$/;
    const soloNumeros = /^\+?[0-9]{8,15}$/;

    if (data.name.length > 60) return;
    if (data.email.length > 80) return;
    if (data.message.length > 500) return;

    if (data.name.trim() === "" || data.email.trim() === "") {
      Swal.fire({
        title: "Error!",
        text: "El campo nombre o correo electronico es obligatorio",
        icon: "error",
        background: "#101622",
        color: "#94a3b8",
        confirmButtonColor: "#135bec",
      });
      return;
    } else if (!soloLetras.test(data.name)) {
      Swal.fire({
        title: "Error!",
        text: "Caracteres invalidos!",
        icon: "error",
        background: "#101622",
        color: "#94a3b8",
        confirmButtonColor: "#135bec",
      });
      return;
    } else if (data.telefono.trim() !== "") {
      if (!soloNumeros.test(data.telefono)) {
        Swal.fire({
          title: "Error!",
          text: "Solo se aceptan numeros!",
          icon: "error",
          background: "#101622",
          color: "#94a3b8",
          confirmButtonColor: "#135bec",
        });
        return;
      }
    }

    const datos = {
      name: data.name,
      email: data.email,
      telefono: data.telefono,
      message: data.message,
      honey: honeyRef.current.value,
    };

    if (honeyRef.current.value) return;
    try {
      setLoader(true);
      const res = await fetch(
        "https://portfolio-back-wqtk.onrender.com/nodemailer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datos),
        }
      );

      console.log("status:", res.status);
      console.log("ok:", res.ok);

      const text = await res.text();
      console.log("respuesta:", text);

      if (res.ok) {
        Swal.fire({
          title: "Mensaje enviado!",
          text: "Me pondre en contacto con vos lo antes posible!",
          icon: "success",
          background: "#101622",
          color: "#94a3b8",
          confirmButtonColor: "#135bec",
        });

        setData({
          name: "",
          email: "",
          telefono: "",
          message: "",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Algo salio mal!",
          icon: "error",
          background: "#101622",
          color: "#94a3b8",
          confirmButtonColor: "#135bec",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: "Error de conexion!",
        icon: "error",
        background: "#101622",
        color: "#94a3b8",
        confirmButtonColor: "#135bec",
      });
    } finally {
      honeyRef.current.value = "";
      setLoader(false);
    }
  };

  return (
    <>
      <section id="contacto" className="container my-3">
        <h3 className="text-warning special-text fw-bold text-center secondary-title-size">
          Contacto
        </h3>
        <form className="formulario" onSubmit={handleSubmit}>
          <input
            type="text"
            name="honey"
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
                name="name"
                placeholder="Pepe"
                value={data.name}
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
                name="message"
                placeholder="Deja tu consulta aca!"
                value={data.message}
                onChange={handleChange}
              ></textarea>
            </li>
          </ul>
          <div className="d-flex justify-content-center ">
            <button
              className="bg-secondary rounded-3 mb-3 p-2 btn-form text-dark text-decoration-none special-text fw-semibold border border-0"
              disabled={loader}
            >
              {loader ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Enviando...
                </>
              ) : (
                "Enviar"
              )}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactComponent;

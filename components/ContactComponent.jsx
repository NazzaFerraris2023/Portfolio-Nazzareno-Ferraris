import React from "react";

const ContactComponent = () => {
  return (
    <>
      <section id="contacto" className="container my-3">
        <h3 className="text-warning special-text fw-bold text-center secondary-title-size">Contacto</h3>
        <form action="/my-handling-form-page" method="post" className="">
          <ul className="d-flex flex-column ">
            <li className="list-unstyled form">
              <label className="d-block text-info " for="name">Nombre:</label>
              <input className="form" type="text" id="name" name="user_name" placeholder="Pepe"/>
            </li>
            <li className="list-unstyled">
              <label className="d-block text-info" for="mail">Correo electrónico:</label>
              <input className="form" type="email" id="mail" name="user_mail" placeholder="pepe@outlook.com.ar"/>
            </li>
            <li className="list-unstyled">
              <label className="d-block text-info" for="mail">Telefono de contacto:</label>
              <input className="form" type="tel" id="tel" name="tel" placeholder="123456789"/>
            </li>
            <li className="list-unstyled">
              <label className="d-block text-info" for="msg">Mensaje:</label>
              <textarea className="form" id="msg" name="user_message" placeholder="Deja tu consulta aca!"></textarea>
            </li>
          </ul>
          <div className="d-flex justify-content-center ">
              <div className="bg-secondary p-2 rounded-3 mb-3 p-3">
                <a
                  className="text-dark text-decoration-none special-text fw-semibold"
                >
                  Enviar
                </a>
              </div>
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

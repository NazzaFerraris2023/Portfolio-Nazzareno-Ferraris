import React from 'react'

const ContactComponent = () => {
  return (
    <>
     <section id="contacto">
        <h3>Contacto</h3>

        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:nazzaferrariss@gmail.com">
              nazzaferrariss@gmail.com
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/NazzaFerraris2023"
              target="_blank"
              rel="noreferrer"
            >
              github.com/NazzaFerraris2023
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/nazzareno-dante-ferraris-sabbatini-3a8557269/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/nazzareno-dante-ferraris-sabbatini
            </a>
          </li>
        </ul>
      </section>
 
    </>
  )
}

export default ContactComponent

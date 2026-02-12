import React from 'react'

const SocialNetworkComponent = () => {
  return (
    <>
     <div className="">
          <div className=''>
            <a 
            href=""
            title='Descargar el CV de Nazzareno Ferraris'
            >
              <svg className='size-7'>
                <use href = "src/assets/sprite.svg#icon-cv"/>
              </svg>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/nazzareno-dante-ferraris-sabbatini-3a8557269/"
              target="_blank"
              rel="noreferrer"
              title='Ir al Linkedin de Nazzareno Ferraris'
            >
              <svg className='size-7'>
                <use href='src/assets/sprite.svg#icon-linkedn'/>
              </svg>
            </a>
          </div>
          <div>
            <a
              href="https://github.com/NazzaFerraris2023?tab=repositories"
              target="_blank"
              rel="noreferrer"
              title='Ir al Github de Nazzareno Ferraris'

            >
              <svg className='size-7'>
                <use href='src/assets/sprite.svg#icon-github'/>
              </svg>
            </a>
          </div>
        </div> 
    </>
  )
}

export default SocialNetworkComponent

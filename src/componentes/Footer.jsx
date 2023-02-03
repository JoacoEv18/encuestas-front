import React from 'react'

const Footer = () => {
  const Año = new Date();
  return (
    <div className='footerContainer'>
        <div className="container">
          <footer className="py-5">
            <div className="d-flex flex-sm-row justify-content-center copyr">
              <p>&copy; {Año.getFullYear()} AvivamientoSI <br /> Todos los derechos reservados</p>
            </div>
          </footer>
        </div>
    </div>
  )
}

export default Footer
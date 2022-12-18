/* Css */
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="social-container">
          <a className='link-footer' target='_blank' href="https://www.linkedin.com/in/lucas-ayrton-otero/"><i className="fa-brands fa-linkedin social-icon"></i></a>
          <a className='link-footer' target='_blank' href="https://github.com/lu0tero"><i className="fa-brands fa-github social-icon"></i></a>
          <a className='link-footer' href="mailto:luotero.99@gmail.com?Subject:Consulta"><i className="fa-solid fa-envelope social-icon"></i></a> 
        </div>

          <span className='between-line'></span>

          <div className='footer-info'>
              <span className='copyright'>© 2022 Lucas Ayrton Otero</span>
          </div>
    </footer>
  )
}

export default Footer;
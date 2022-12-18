import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/img/avatar/logo.png'

const Header = () => {
  return (
    <header>
        <nav>
            <ul className='section-container'>
                <Link to='/'>
                  <li className='section-li logo'>
                    <img src={logo} alt="logo" />
                  </li>  
                </Link>
                  
                  <div className='btn-container'>
                    <li>
                        <a href='#cv'>
                          <button className='cv-btn'>CV</button>
                        </a>
                    </li>
                  </div>
            </ul>
        </nav>
    </header>
  )
}

export default Header
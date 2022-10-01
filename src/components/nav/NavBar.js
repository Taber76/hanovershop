import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'

import CartWidget from './CartWidget'
import logo from './logo.png'


const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={'/'}><img src={logo} alt="logo" width={80}/></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
              <li className="nav-item px-3 fs-5">
                <NavLink className="nav-link" to={'/calzado/mujer'}>Mujer</NavLink>
              </li>
              <li className="nav-item px-3 fs-5">
                <NavLink className="nav-link" to={'/calzado/hombre'}>Hombre</NavLink>
              </li>
              <li className="nav-item px-3 fs-5">
                <NavLink className="nav-link" to={'/calzado/nino'}>Niños</NavLink>
              </li>
              <li className="nav-item px-3 fs-5">
                <NavLink className="nav-link" to={'/'}>Oferta semanal</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <CartWidget/>
      </nav>
    </div>
  )
}

export default NavBar

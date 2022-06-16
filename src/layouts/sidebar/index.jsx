import { Link } from "react-router-dom"
import Img from '../../assets/img/LogoElCamioncito.png'

const SideBar = () => {
    return (
        <ul className="navbar-nav sidebar bg-gradient-white sidebar-dark accordion" id="accordionSidebar">

        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
            </div>
            <img src={Img} alt="logo"/>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
            <Link className="nav-link" to="/vehiculo">                          
            <i className="fa-solid fa-car-side me-2 text-dark" /> <span className="text-dark">Vehiculos</span>            
            </Link>                
        </li>

        <li className="nav-item active">
            <Link className="nav-link" to="/disponibilidad-vehiculo">                          
            <i className="fa-solid fa-car-side me-2 text-dark" /> <span className="text-dark">Disponibilidad</span>            
            </Link>                
        </li>
    </ul>
    )
}

export default SideBar
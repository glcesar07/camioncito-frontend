import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import Perfil from '../../assets/img/perfil.png'
const TopBar = () => {
    function Exit() {
        // remove user from local storage to log user out
        localStorage.removeItem('authUser');
        localStorage.removeItem('layout');
        window.location.href = '/login';
    
    }
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow rounded ms-2 me-2 mt-2" >

        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
            <i className="fa fa-bars"></i>
        </button>

        <ul className="navbar-nav ml-auto">

            <div className="topbar-divider d-none d-sm-block"></div>

            <li className="nav-item dropdown no-arrow">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="nav-link dropdown-toggle" href="#" >
                <img className="img-profile rounded-circle me-2" src={Perfil} alt=""/>
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Usuario</span>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}                    
                    <UncontrolledDropdown className='chart-dropdown' size="sm">
                    <DropdownToggle color='' className='bg-transparent btn-sm border-0 p-50'>
                    <i className="fa-solid fa-chevron-down"></i>
                    </DropdownToggle>
                    <DropdownMenu className='profile-dropdown mt-3'>
                      <DropdownItem>
                        <li><i className="fa-solid fa-user"></i><span className='ms-3'>Perfil</span></li>
                      </DropdownItem>
                      <DropdownItem onClick={() => Exit()}>
                        <li><i className="fa-solid fa-arrow-right-to-bracket"></i><span className='ms-3'>Salir</span></li>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </a>
            </li>

        </ul>
    </nav>
    )
}

export default TopBar
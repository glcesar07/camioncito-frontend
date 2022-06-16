import '../assets/css/template.css'
import '../assets/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from '../layouts/sidebar/index'
import TopBar from '../layouts/topbar/index'
import Footer from '../layouts/footer/index'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom"
  import Home from '../views/home/index'
  import Vehiculo from '../views/vehiculo/index'
  import Disponibilidad from '../views/reporteria/disponibilidad/index'
  import Error from '../views/errors/index'

const Index = () => {
    return (
        <div id="wrapper">
            <BrowserRouter>
                <Sidebar/>
                <div id="content-wrapper" className="d-flex flex-column">
                    
                    <div id="content">
                    <TopBar/>
                        <div className="container-fluid">
                            <Routes>
                                <Route path="/" element={<Home/>} />
                                <Route path="/vehiculo" element={<Vehiculo/>} />   
                                <Route path="/disponibilidad-vehiculo" element={<Disponibilidad/>} />                                                            
                                <Route path="*" element={<Error />} />                                                          
                            </Routes>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Index
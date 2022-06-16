import { Row, Col } from 'react-bootstrap'
import { ContentProvider } from './context'
import Formulario from './form'
import { ToastContainer } from 'react-toastify'
import List from './list'
const Index = () => {
    return (
        <ContentProvider>
            <Row>
                <Col>
                    <div className="h3 font-weight-bolder text-uppercase text-center">
                        Reporte Disponibilidad Vehiculo
                    </div>
                </Col> 
            </Row>
            <Row>
            <Col className="ms-4">
                    <Formulario/>    
                </Col>
            </Row>
            <Row className="pt-3">
                <Col>
                    <List/>    
                </Col>
            </Row>
            <ToastContainer />  
        </ContentProvider>
    )
}

export default Index
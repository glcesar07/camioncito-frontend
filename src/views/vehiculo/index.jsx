import { Row, Col } from 'react-bootstrap'
import { ContentProvider } from './context'
import { ToastContainer } from 'react-toastify'
import List from './list'
import Form from './form'
const Index = () => {
    return (
        <ContentProvider>
            <Row>
                <Col lg="2" sm="2">
                </Col>
                <Col>
                    <div className="h3 font-weight-bolder text-uppercase text-center">
                        VEHICULOS
                    </div>
                </Col>
                <Col className="d-flex justify-content-end" lg="2" sm="2">           
                 <Form/>          
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
import React, { Fragment } from 'react'
import { Alert, Row, Col } from "reactstrap"
import Img from '../../assets/img/ElCamioncito.png'

const Home = () => {
    return (
    <Fragment>
        <Alert className="text-center text-uppercase fw-bolder">
            Bienvenido al Sistema de Transportes El Camioncito
        </Alert>
        <Row>
            <Col className='text-center'>
                <img src={Img} alt="" style={{maxHeight: '200px'}}/>
            </Col>
        </Row>        
    </Fragment>
    )
}

export default Home
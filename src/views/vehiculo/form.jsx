import { Fragment, useContext, useEffect } from 'react'
import { Button, Modal } from "react-bootstrap"
import { Input, Row, Col, Form, Label, FormGroup } from 'reactstrap'
import { ContentContext } from './context'
import { useForm, Controller } from "react-hook-form"
import Select from 'react-select'
import { customStyles } from '../../globales/index'

export const Formulario = () => {
  const
        { handleSubmit, control, formState: { errors }, setValue, reset } = useForm(),
        { toggleModal, show, opcion, oneData, CreateUpdate, tipoVehiculo, modelo, linea } = useContext(ContentContext),
    onSubmit=(data)=>{
        let json = {
            capacidad: data.capacidad,
            consumoCombustible: data.consumoCombustible,
            placa: data.placa,
            anio: data.anio,                
            linea: data.linea.value, 
            modelo: data.modelo.value, 
            tipoVehiculo: data.tipoVehiculo.value,    
            costoDepreciacion: data.costoDepreciacion,         
          id: (oneData) ? oneData.id: null
        }
        CreateUpdate(json)
       //console.log(json)
    },
    setData = async () => {
        await setValue('capacidad', oneData.capacidad)
        await setValue('consumoCombustible', oneData.consumoCombustible)
        await setValue('placa', oneData.placa)
        await setValue('anio', oneData.año)
        await setValue('costoDepreciacion', oneData.costoDepreciacion)        
        await setValue('linea', {label : oneData.linea, value : oneData.idLinea})
        await setValue('modelo', {label : oneData.modelo, value : oneData.idModelo})
        await setValue('tipoVehiculo', {label : oneData.tipoVehiculo, value : oneData.idTipoVehiculo})
    }


  useEffect(
      () => {
          async function fetchMyAPI() {
              if (await opcion > 1 && oneData) { await setData() } else { reset() }
          }
          fetchMyAPI()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [opcion, oneData]
  )
    return (
        <Fragment>
              <Button variant="info" size="sm" onClick={() => toggleModal(1)}>
                <i className="fa fa-plus me-2 text-white"/><span className='text-white'>Crear</span>
              </Button> 
          <Modal show={show} onHide={() => toggleModal(0)} backdrop="static" centered keyboard={false} size="xl">
            <Modal.Header closeButton>
              <Modal.Title className="text-uppercase h2">
                {(opcion === 1)? 'CREAR' : opcion===3 ? 'ACTUALIZAR' : 'VISUALIZAR'} VEHICULO
              </Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Modal.Body>
                  <Row>
                    <Col>                      
                       <Row>                          
                          <Col>
                              <FormGroup>
                                <Label for="saldo"><i className="fa fa-circle me-1 text-danger"/> Modelo</Label>
                                     <Controller
                                        name="modelo"
                                        control={control}
                                        defaultValue=''
                                        rules={{ required: true }}
                                        render={({ field }) => <Select
                                                                {...field}
                                                                onChange={field.onChange} //resuelve el tener que dar doble click en movil
                                                                onBlur={event => event.preventDefault()} //resuelve el tener que dar doble click en movil
                                                                defaultValue={null}
                                                                options={modelo}
                                                                placeholder={'Seleccione...'}
                                                                noOptionsMessage={() => 'sin resultados'}
                                                                styles={(!!errors.modelo) ? customStyles : {}}
                                                            />}
                                    />    
                              </FormGroup>
                            </Col> 
                            <Col>
                              <FormGroup>
                                <Label for="apellidos"><i className="fa fa-circle me-1 text-danger"/> Línea</Label>
                                 <Controller
                                        name="linea"
                                        control={control}
                                        defaultValue=''
                                        rules={{ required: true }}
                                        render={({ field }) => <Select
                                                                {...field}
                                                                onChange={field.onChange} //resuelve el tener que dar doble click en movil
                                                                onBlur={event => event.preventDefault()} //resuelve el tener que dar doble click en movil
                                                                defaultValue={null}
                                                                options={linea}
                                                                placeholder={'Seleccione...'}
                                                                noOptionsMessage={() => 'sin resultados'}
                                                                styles={(!!errors.linea) ? customStyles : {}}
                                                            />}
                                    />    
                              </FormGroup>
                            </Col> 
                            <Col>
                              <FormGroup>
                                <Label for="nit"><i className="fa fa-circle me-1 text-danger"/> Tipo Vehiculo</Label>
                                <Controller
                                    name="tipoVehiculo"
                                    control={control}
                                    defaultValue=''
                                    rules={{ required: true }}
                                    render={({ field }) => <Select
                                                            {...field}
                                                            onChange={field.onChange} //resuelve el tener que dar doble click en movil
                                                            onBlur={event => event.preventDefault()} //resuelve el tener que dar doble click en movil
                                                            defaultValue={null}
                                                            options={tipoVehiculo}
                                                            placeholder={'Seleccione...'}
                                                            noOptionsMessage={() => 'sin resultados'}
                                                            styles={(!!errors.tipoVehiculo) ? customStyles : {}}
                                                        />}
                                    />    
                              </FormGroup>
                            </Col> 
                            <Col>
                              <FormGroup>
                                <Label for="dpi"><i className="fa fa-circle me-1 text-danger"/> Capacidad</Label>
                                <Controller
                                  name="capacidad"
                                  control={control}
                                  defaultValue=''
                                  rules={{ required: true }}
                                  render={({ field }) => <Input 
                                                      {...field} type="text"                                       
                                                      //placeholder="Saldo Inicial" 
                                                      //style={{borderRadius: '2px'}} 
                                                      invalid={errors.capacidad && true}
                                                      />}
                                />        
                              </FormGroup>
                            </Col> 
                       </Row>                       
                       <Row>                          
                          <Col sm="3">
                              <FormGroup>
                                <Label for="telefono"><i className="fa fa-circle me-1 text-danger"/> Placa</Label>
                                <Controller
                                  name="placa"
                                  control={control}
                                  defaultValue=''
                                  rules={{ required: true }}
                                  render={({ field }) => <Input 
                                                      {...field} type="text"                                       
                                                      //placeholder="Saldo Inicial" 
                                                      //style={{borderRadius: '2px'}} 
                                                      invalid={errors.placa && true}
                                                      />}
                                />    
                              </FormGroup>
                            </Col> 
                            <Col sm="3">
                              <FormGroup>
                                <Label for="email"><i className="fa fa-circle me-1 text-danger"/> Año</Label>
                                <Controller
                                  name="anio"
                                  control={control}
                                  defaultValue=''
                                  rules={{ required: true }}
                                  render={({ field }) => <Input 
                                                      {...field} type="text"                                       
                                                      //placeholder="Saldo Inicial" 
                                                      //style={{borderRadius: '2px'}} 
                                                      invalid={errors.anio && true}
                                                      />}
                                />        
                              </FormGroup>
                            </Col> 
                            <Col sm="3">
                              <FormGroup>
                                <Label for="direccion"><i className="fa fa-circle me-1 text-danger"/> Costo Depreciación</Label>
                                <Controller
                                  name="costoDepreciacion"
                                  control={control}
                                  defaultValue=''
                                  rules={{ required: true }}
                                  render={({ field }) => <Input 
                                                      {...field} type="text"                                       
                                                      //placeholder="Saldo Inicial" 
                                                      //style={{borderRadius: '2px'}} 
                                                      invalid={errors.costoDepreciacion && true}
                                                      />}
                                />        
                              </FormGroup>
                            </Col> 
                            <Col sm="3">
                              <FormGroup>
                                <Label for="direccion"><i className="fa fa-circle me-1 text-danger"/> Consumo por KM</Label>
                                <Controller
                                  name="consumoCombustible"
                                  control={control}
                                  defaultValue=''
                                  rules={{ required: true }}
                                  render={({ field }) => <Input 
                                                      {...field} type="text"                                       
                                                      //placeholder="Saldo Inicial" 
                                                      //style={{borderRadius: '2px'}} 
                                                      invalid={errors.consumoCombustible && true}
                                                      />}
                                />        
                              </FormGroup>
                            </Col> 
                       </Row>
                    </Col>
                  </Row>
              </Modal.Body>
              <Modal.Footer>
               <Col sm="12" className="d-flex justify-content-center">
                <Button className="me-2" id="exit" variant="secondary" size="sm" onClick={() => toggleModal(0)}>
                        Salir
                    </Button>
                    {
                    opcion !== 2 &&
                            <Button id="save" variant="success" size="sm" type="submit">
                                { opcion === 2 ? 'Actualizar' : 'Guardar'}
                            </Button>
                    }                    
                </Col>
              </Modal.Footer>
          </Form>
          </Modal>
        </Fragment>
    )
}

export default Formulario
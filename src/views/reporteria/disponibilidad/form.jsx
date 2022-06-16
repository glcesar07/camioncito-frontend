import { Fragment, useContext } from 'react'
// import { Button, Modal } from "react-bootstrap"
import { Row, Col, Form, Label, FormGroup, Button } from 'reactstrap'
import { ContentContext } from './context'
import { useForm, Controller } from "react-hook-form"
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export const Formulario = () => {
  const        
        { handleSubmit, control } = useForm(),
        { AllDisponibilidad, startDates, endDate } = useContext(ContentContext),

        onSubmit = (data) => { 
        
            const json = {
                fechaInicial: formatDate(data.FechaInicial),
                fechaFinal: formatDate(data.fechaFinal)
            }
            AllDisponibilidad(json)         
        }

        function formatDate(date) {
            const d = new Date(date)
        
            return `${d.getFullYear()}-${(`00${(d.getMonth() + 1)}`).slice(-2)}-${(`00${d.getDate()}`).slice(-2)}`
        }

    return (
        <Fragment>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Label >Seleccione un rango de fechas: </Label>
            <hr/>
                  <Row>
                    <Col>
                      <Row>
                         <Col sm="4">
                            <FormGroup>                            
                            <Controller
                                name='FechaInicial'
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => <DatePicker     
                                                            {...field}
                                                            onChange={field.onChange}
                                                            onBlur={event => event.preventDefault()} //resuelve el tener que dar doble click en movil
                                                            defaultValue={null}
                                                            placeholder={'00-00-0000'}
                                                            dateFormat="dd/MM/yyyy"
                                                            className="form-control"
                                                            selected={field.value}
                                                            locale="es"
                                                            selectsStart
                                                            startDate={startDates}
                                                            endDate={endDate}
                                                        />
                                    }
                            /> 
                            </FormGroup>
                          </Col>    
                          <Col sm="4">
                            <FormGroup>                            
                            <Controller
                                name="fechaFinal"
                                control={control}
                                defaultValue=''
                                rules={{ required: true }}
                                render={({ field }) => <DatePicker                                                                 
                                                            onChange={field.onChange}
                                                            onBlur={event => event.preventDefault()} //resuelve el tener que dar doble click en movil
                                                            defaultValue={null}
                                                            placeholder={'00-00-0000'}
                                                            dateFormat="dd/MM/yyyy"
                                                            className="form-control"
                                                            selected={field.value}
                                                            locale="es"
                                                            selectsEnd
                                                            startDate={startDates}
                                                            endDate={endDate}
                                                            minDate={startDates}
                                                        />
                                    }
                            /> 
                            </FormGroup>
                          </Col>   
                          <Col>
                             <Button type="submit" color="info">
                                    Buscar
                            </Button>
                          </Col>
                       </Row>
                    </Col>
                  </Row>                  
          </Form>
        </Fragment>
    )
}

export default Formulario
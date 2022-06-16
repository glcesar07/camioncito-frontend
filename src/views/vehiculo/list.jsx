import { Fragment, useState, useContext } from 'react'
import DataTable from 'react-data-table-component'
import { Row, Col, Form, Dropdown } from 'react-bootstrap'
import { ContentContext } from './context'

const List = () => {
    
    const { allData, One, Actions } = useContext(ContentContext)
    const [searchValue, setSearchValue] = useState(''),
          [filteredData, setFilteredData] = useState([]),
    handleFilter = e => {
        const value = e.target.value
        let updatedData = []
        setSearchValue(value)
    
        if (value.length) {
          updatedData = allData.filter(item => {
            const startsWith =
              item.marca.toLowerCase().startsWith(value.toLowerCase())
    
            const includes =
              item.marca.toLowerCase().startsWith(value.toLowerCase())
    
            if (startsWith) {
              return startsWith
            } else if (!startsWith && includes) {
              return includes
            } else return null
          })
          setFilteredData(updatedData)
          setSearchValue(value)
        }
      },
      Columns = [
        {
          name: 'marca',
          column: 'Marca',
          sortable: true,
          center: true,
          cell: row => row.marca
        },
        {
          name: 'Línea',
          column: 'linea',
          sortable: true,
          center: true,
          cell: row => row.linea
        },
        {
            name: 'Modelo',
            column: 'modelo',
            sortable: true,
            center: true,
            cell: row => row.modelo
          },
          {
            name: 'Tipo de Vehiculo',
            column: 'tipoVehiculo',
            sortable: true,
            center: true,
            cell: row => row.tipoVehiculo
          },
          {
            name: 'Capacidad',
            column: 'capacidad',
            sortable: true,
            center: true,
            cell: row => row.capacidad
          },
          {
            name: 'Estado',
            column: 'estado',
            sortable: true,
            center: true,
            width:'200px',
            cell: row => row.estado === 1 ? 'Activo' : 'Inactivo'
          },
        {
          name: 'Acciones',
          column: 'id',
          sortable: true,
          center: true,
          cell: row => (
            <Dropdown>
                <Dropdown.Toggle size="sm" className="py-1" id="dropdown-button-dark-example1" variant="dark">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                {row.estado === 1 && <><Dropdown.Item as="button" onClick={()=>One(row,2)}><i className="fa fa-eye me-2"/> Visualizar
                </Dropdown.Item>
                <Dropdown.Item as="button" onClick={()=>One(row,3)}><i className="fa fa-edit me-2"/> Actualizar</Dropdown.Item></>}
                <Dropdown.Item as="button" onClick={() => Actions(row) }>
                { row.estado === 1 ? <i className="fa fa-ban me-2 me-2"/> : <i className="fa-solid fa-check me-2"/>}
                <span className='align-middle ms-50'>{ row.estado === 1 ? 'Desactivar' : 'Activar' }</span>                                
                </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          )
        }
    ]

    return (
        <Fragment>
            <Row  className='justify-content-end mx-0'>
                <Col>

                </Col>
                <Col className='justify-content-end mt-1' md='4' sm='12'>
                    <Form.Group>
                      <Form.Control
                          className='dataTable-filter mb-2'
                          type='text'
                          placeholder="Buscar"
                          id='search-input'
                          value={searchValue}
                          onChange={handleFilter}
                      />
                    </Form.Group>
                </Col>
            </Row>
            <DataTable
                // dense
                noHeader
                highlightOnHover
                pagination
                data={searchValue.length ? filteredData : allData }          
                columns={Columns}
                className='table-responsive'
                paginationRowsPerPageOptions={[10, 25, 50, 100]}
                paginationComponentOptions={
                    {
                    rowsPerPageText: '',
                    rangeSeparatorText:''
                    }
                }
                noDataComponent='Sin Registros'
            />
        </Fragment>
    )
}

export default List
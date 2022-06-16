import { Fragment, useState, useContext } from 'react'
import DataTable from 'react-data-table-component'
import { Row, Col } from 'react-bootstrap'
import { ContentContext } from './context'

const List = () => {
    
    const { allData } = useContext(ContentContext)
    const [searchValue ] = useState(''),
          [filteredData] = useState([]),
 
      Columns = [
        {
          name: 'Placa',
          column: 'placa',
          sortable: true,
          center: true,
          cell: row => row.placa
        },
        {
            name: 'Marca',
            column: 'marca',
            sortable: true,
            center: true,
            cell: row => row.marca
          },
          {
            name: 'Linea',
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
            name: 'Tipo Vehiculo',
            column: 'tipoVehiculo',
            sortable: true,
            center: true,
            cell: row => row.tipoVehiculo
          },
          {
            name: 'Estado',
            column: 'disponibilidad',
            sortable: true,
            center: true,
            width:'200px',
            cell: row => row.disponibilidad === 1 ? 'Disponible' : 'Ocupado'
          },
    ]

    return (
        <Fragment>
            <Row  className='justify-content-end mx-0'>
                <Col>

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
import { createContext, useState, useEffect } from 'react'
//import { Notification } from '../../utility/index'
import { GetRoute, PostRoute } from '../../services/Private'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

export const ContentContext = createContext()

export const ContentProvider = ({children}) => {

    const
    [show, setShow] = useState(false),
    [oneData, setOneData] = useState([]),
    [allData, setAllData] = useState([]),
    [modelo, setModelo] = useState([]),
    [tipoVehiculo, setTipoVehiculo] = useState([]),
    [linea, setLinea] = useState([]),
    [opcion, setOpcion] = useState(0),
    nameController = 'vehiculo',
    toggleModal = data => {
        setOpcion(data)
        if (data === 1) { setOneData(null) }
        setShow(!show)
    },
    GetAll = async () => {
        const response = await GetRoute(`${nameController}/get-all`)
        setAllData((response.length) ? response : [])
    },
    One = async (data, opcion) => {

        const response = await PostRoute(`${nameController}/a-register`, { id : data.id })
        setOneData((response[0]) ? response[0] : [])
        toggleModal(opcion)

    },
    CreateUpdate = async (data) => {
        
        const id = toast.loading("Espere un momento...", {position: toast.POSITION.BOTTOM_RIGHT})
        let response = []
        response = await PostRoute(`${nameController}/${!data.id ? 'create' : 'update' }`, data)
        if(response.response === 1) {          
            toast.update(id,
              { render: response.message, 
                type: toast.TYPE.SUCCESS, 
                isLoading: false, 
                position: toast.POSITION.BOTTOM_RIGHT,         
                autoClose: 5000 })        
          } else {      
            toast.update(id, 
              { render: response.message, 
                type: toast.TYPE.ERROR, 
                isLoading: false, 
                position: toast.POSITION.BOTTOM_RIGHT,         
                autoClose: 5000 })
          }        
        toggleModal(0)
        GetAll()

    },
    Actions = async (data) => {
        const id = toast.loading("Espere un momento...", {position: toast.POSITION.BOTTOM_RIGHT})
        const response = await PostRoute(`${nameController}/${ data.estado === 1 ? 'unsubscribe' : 'subscribe'}`, { id : data.id })
        if(response.response === 1) {          
            toast.update(id,
              { render: response.message, 
                type: toast.TYPE.SUCCESS, 
                isLoading: false, 
                position: toast.POSITION.BOTTOM_RIGHT,         
                autoClose: 5000 })        
          } else {      
            toast.update(id, 
              { render: response.message, 
                type: toast.TYPE.ERROR, 
                isLoading: false, 
                position: toast.POSITION.BOTTOM_RIGHT,         
                autoClose: 5000 })
          }
        GetAll()

    },
    TipoVehiculoLB = async () => {
        const response = await GetRoute(`label/tipo-vehiculo`)
        setTipoVehiculo((response.length) ? response : [])
    },
    ModeloLB = async () => {
        const response = await GetRoute(`label/modelo`)
        setModelo((response.length) ? response : [])
    },
    LineaLB = async () => {
        const response = await GetRoute(`label/linea`)
        setLinea((response.length) ? response : [])
    },
    value = {
        GetAll,
        One,
        Actions,
        CreateUpdate,
        toggleModal,
        setOpcion,
        allData,
        show,
        oneData,
        opcion,
        modelo,
        linea,
        tipoVehiculo
    }
    
    useEffect(
        () => {
            const functionFetch = async () => {
                GetAll()
                TipoVehiculoLB()
                ModeloLB()
                LineaLB()                
            }
            functionFetch();        
        },[]
    )
    
    return (
        <ContentContext.Provider value={value} >
            {children}
        </ContentContext.Provider>
    )
}

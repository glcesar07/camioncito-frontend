import { createContext, useState, useEffect } from 'react'
//import { Notification } from '../../utility/index'
import { PostRoute } from '../../../services/Private'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

export const ContentContext = createContext()

export const ContentProvider = ({children}) => {

    const
    [show, setShow] = useState(false),
    [oneData, setOneData] = useState([]),
    [allData, setAllData] = useState([]),
    [opcion, setOpcion] = useState(0),       
    fechaActual = Date.now(),
    tiempoTranscurrido = Date.now()   
    let fechaUno = new Date(fechaActual)
    let fechaDos = new Date(tiempoTranscurrido)

    const [startDates, setStartDates] = useState(fechaUno),
    [endDate, setEndDate] = useState(fechaDos),    
    toggleModal = data => {
        setOpcion(data)
        if (data === 1) { setOneData(null) }
        setShow(!show)
    },
    AllDisponibilidad = async (data) => {
        const id = toast.loading("Espere un momento...", {position: toast.POSITION.BOTTOM_RIGHT})
        let response = []
        response = await PostRoute('reporteria/available-vehicle', data)

        if(response.response !== null) {          
            toast.update(id,
              { render: 'Registros encontrados con éxito', 
                type: toast.TYPE.SUCCESS, 
                isLoading: false, 
                position: toast.POSITION.BOTTOM_RIGHT,         
                autoClose: 5000 })        
          } 
          if (response.value === 23) {      
            toast.update(id, 
              { render: response.message, 
                type: toast.TYPE.ERROR, 
                isLoading: false, 
                position: toast.POSITION.BOTTOM_RIGHT,         
                autoClose: 5000 })
          }

        setAllData((response.length > 0) ? response : []);
    },
    // GetAll = async () => {
    //     const id = toast.loading("Espere un momento...", {position: toast.POSITION.BOTTOM_RIGHT})
    //     let response = []
    //     response = await GetRoute('reporteria/all-available-vehicle')

    //     if(response.response !== null) {          
    //         toast.update(id,
    //           { render: 'Registros encontrados con éxito', 
    //             type: toast.TYPE.SUCCESS, 
    //             isLoading: false, 
    //             position: toast.POSITION.BOTTOM_RIGHT,         
    //             autoClose: 5000 })        
    //       } 
    //       if (response.value === 23) {      
    //         toast.update(id, 
    //           { render: response.message, 
    //             type: toast.TYPE.ERROR, 
    //             isLoading: false, 
    //             position: toast.POSITION.BOTTOM_RIGHT,         
    //             autoClose: 5000 })
    //       }

    //     setAllData((response.length > 0) ? response : []);
    // },
    value = {
        //All,        
        toggleModal,
        setOpcion,
        allData,
        show,
        oneData,
        opcion,                                             
        AllDisponibilidad,
        setStartDates,
        setEndDate,
        startDates,
        endDate
    }
    
    useEffect(
        () => {
            const functionFetch=async()=>{                                
                //AllDisponibilidad()
                //GetAll()
            }
            functionFetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]
    )
    
    return (
        <ContentContext.Provider value={value} >
            {children}
        </ContentContext.Provider>
    )
}

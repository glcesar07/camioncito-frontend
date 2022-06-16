import { toast, Bounce } from 'react-toastify'

export function Notification(message, tipo){
    if(tipo === 1){
        toast.success(message, { position: 'bottom-right', transition: Bounce });
    }
    if(tipo === 2){
        toast.error(message, { position: 'bottom-right', transition: Bounce });
    }
    
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    Notification
}
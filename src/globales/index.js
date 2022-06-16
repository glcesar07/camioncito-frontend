import { Bounce } from 'react-toastify'

export const OptionsToast = { position : 'bottom-right', transition: Bounce }

export const styleClass = base => (
    {
        ...base,
        border: 'solid 1px #fd397a !important',
        boxShadow: 'none',
        borderRadius: '5px'
    }
)

export const customStyles = {
    control: styleClass
  }

export default {
    OptionsToast,
    customStyles
}
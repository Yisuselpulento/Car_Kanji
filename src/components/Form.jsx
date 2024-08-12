import { useState } from 'preact/hooks'
import { Alert } from './Alert'

export const Form = () => {
  const [formData, setFormData] = useState({
    Nombre: '',
    Email: '',
    Info: ''
  })
  const [alert, setAlert] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { Nombre, Email, Info } = formData

    // Validaciones
    if (!Nombre || !Email || !Info) {
      setAlert({ msg: 'Todos los campos deben estar llenos.', error: true })
      return
    }
    if (Nombre.length > 10) {
      setAlert({ msg: 'El nombre no debe tener más de 10 caracteres.', error: true })
      return
    }
    if (!validateEmail(Email)) {
      setAlert({ msg: 'El email no es válido.', error: true })
      return
    }

    // Si todas las validaciones pasan
    setAlert({ msg: 'Formulario enviado con éxito.', error: false })
    // Aquí puedes manejar el envío del formulario, como hacer una solicitud POST a un servidor, etc.

    // Limpiar el formulario si es necesario
    setFormData({
      Nombre: '',
      Email: '',
      Info: ''
    })
  }

  return (
    <form onSubmit={handleSubmit} class='shadow-xl md:p-16 p-2 flex flex-col gap-5 md:min-w-[500px] min-w-full'>
      <div>
        <label class='text-lg font-bold'>Nombre
          <input
            name='Nombre'
            value={formData.Nombre}
            onChange={handleChange}
            class='py-3 px-2 w-full bg-white dark:bg-neutral-900'
            placeholder='Coloque su nombre aquí...'
          />
        </label>
      </div>
      <div>
        <label class='text-lg font-bold'>Email
          <input
            name='Email'
            value={formData.Email}
            onChange={handleChange}
            class='py-3 px-2 w-full bg-white dark:bg-neutral-900'
            placeholder='example@example.com'
          />
        </label>
      </div>
      <div>
        <label class='text-lg font-bold'>Háblanos de ti
          <textarea
            name='Info'
            value={formData.Info}
            onChange={handleChange}
            class='py-3 px-2 w-full bg-white dark:bg-neutral-900 min-h-[130px]'
            placeholder='Escríbenos algo de ti'
          />
        </label>
      </div>
      <button
        class='py-3 px-5 w-full bg-primary hover:bg-hoverPrimary text-white cursor-pointer uppercase font-bold'
      >Enviar
      </button>
      {alert.msg && <Alert alert={alert} />}
    </form>
  )
}

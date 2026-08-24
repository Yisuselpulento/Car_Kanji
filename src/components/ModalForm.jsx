import { useState, useEffect } from 'preact/hooks'

const initial = { nombre: '', apellido: '', celular: '', edad: '', email: '', direccion: '', acepta: false }

export default function ModalForm ({ carModel }) {
  const [isOpen, setIsOpen] = useState(false)
  const [form, setForm] = useState(initial)
  const [alert, setAlert] = useState(null)

  const openModal = () => setIsOpen(true)
  const closeModal = () => { setIsOpen(false); setAlert(null); setForm(initial) }

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeModal() }
    if (isOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { nombre, apellido, celular, edad, email, direccion } = form
    if (!nombre || !apellido || !celular || !edad || !email || !direccion) {
      return setAlert({ error: true, msg: 'Todos los campos son obligatorios.' })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return setAlert({ error: true, msg: 'El email no es válido.' })
    }
    const edadNum = Number(edad)
    if (Number.isNaN(edadNum) || edadNum < 18) {
      return setAlert({ error: true, msg: 'Debes ser mayor de 18 años.' })
    }
    setAlert({ error: false, msg: '¡Solicitud enviada! Te contactaremos pronto.' })
    setForm(initial)
    setTimeout(closeModal, 2200)
  }

  const inputClass = 'bg-gray-200 dark:bg-neutral-700 py-3 px-5 text-black dark:text-white w-full rounded focus:outline-none focus:ring-2 focus:ring-primary'

  return (
    <>
      <button onClick={openModal} class='py-4 px-6 w-full bg-primary hover:bg-hoverPrimary text-white font-extrabold'>
        Comprar
      </button>

      {isOpen && (
        <div class='fixed inset-0 bg-black/60 z-40 flex justify-center items-center p-4' onClick={closeModal}>
          <form
            onSubmit={handleSubmit}
            onClick={e => e.stopPropagation()}
            class='bg-white dark:bg-neutral-800 md:p-8 p-5 rounded md:w-[750px] w-full max-h-[90vh] overflow-auto flex flex-col gap-4'
          >
            <div class='flex justify-between w-full items-center'>
              <h3 class='text-primary text-2xl font-extrabold'>
                Información Personal{carModel ? ` — ${carModel}` : ''}
              </h3>
              <button type='button' onClick={closeModal} aria-label='Cerrar' class='text-2xl hover:text-primary'>&times;</button>
            </div>

            <div class='flex md:flex-row flex-col gap-4'>
              <label class='flex flex-col gap-1 w-full'>Nombre <span class='text-red-600'>*</span>
                <input name='nombre' value={form.nombre} onInput={handleChange} class={inputClass} placeholder='Nombre' />
              </label>
              <label class='flex flex-col gap-1 w-full'>Apellido <span class='text-red-600'>*</span>
                <input name='apellido' value={form.apellido} onInput={handleChange} class={inputClass} placeholder='Apellido' />
              </label>
            </div>

            <div class='flex md:flex-row flex-col gap-4'>
              <label class='flex flex-col gap-1 w-full'>Número Cel <span class='text-red-600'>*</span>
                <input name='celular' value={form.celular} onInput={handleChange} class={inputClass} placeholder='+569...' />
              </label>
              <label class='flex flex-col gap-1 w-full'>Edad <span class='text-red-600'>*</span>
                <input name='edad' type='number' min='18' value={form.edad} onInput={handleChange} class={inputClass} placeholder='+18' />
              </label>
            </div>

            <label class='flex flex-col gap-1'>Email <span class='text-red-600'>*</span>
              <input name='email' value={form.email} onInput={handleChange} class={inputClass} placeholder='example@example.com' />
            </label>
            <label class='flex flex-col gap-1'>Dirección <span class='text-red-600'>*</span>
              <input name='direccion' value={form.direccion} onInput={handleChange} class={inputClass} placeholder='Dirección aquí' />
            </label>

            <label class='flex gap-3 items-center text-sm'>
              <input type='checkbox' name='acepta' checked={form.acepta} onChange={handleChange} />
              Deseo recibir información y actualizaciones.
            </label>

            {alert && (
              <p class={`text-center font-bold p-2 rounded ${alert.error ? 'text-red-600 dark:text-red-400' : 'bg-green-600 text-white'}`}>
                {alert.msg}
              </p>
            )}

            <button type='submit' class='bg-primary hover:bg-hoverPrimary text-xl font-extrabold text-white w-full py-4 px-5'>
              IR A LA COMPRA
            </button>
          </form>
        </div>
      )}
    </>
  )
}

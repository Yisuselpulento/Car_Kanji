import { useState } from 'preact/hooks'

export default function ModalForm () {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <button onClick={openModal} class='py-4 px-6 w-full bg-primary hover:bg-hoverPrimary text-white font-extrabold'>
        Comprar
      </button>

      {isOpen && (
        <div className='fixed inset-0 bg-white dark:bg-black bg-opacity-30 z-40 dark:bg-opacity-30 flex justify-center items-center p-4'>
          <div className='bg-white dark:bg-neutral-800 md:p-8 p-4 rounded md:w-[750px]  h-full md:h-[660px] overflow-auto'>
            <div className='flex justify-between w-full items-center'>
              <h3 className='text-primary text-2xl font-extrabold mb-5'>Información Personal</h3>
              <button onClick={closeModal}>
                <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'><path fill='currentColor' d='m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z' /></svg>
              </button>
            </div>
            <div className='flex flex-col gap-5'>
              <div>
                <div className='flex gap-4'>
                  <div className='flex flex-col gap-2 items-start w-full'>
                    <label htmlFor='nombre' className='text-xl font-normal'>
                      Nombre <span className='text-red-700 text-3xl'>*</span>
                    </label>
                    <input
                      type='text'
                      id='nombre'
                      name='nombre'
                      className='bg-gray-300 py-3 px-5 text-black w-full'
                      placeholder='Nombre Aquí'
                    />
                  </div>
                  <div className='flex flex-col gap-2 items-start  w-full '>
                    <label htmlFor='Apellido' className='text-xl font-normal'>
                      Apellido <span className='text-red-700 text-3xl'>*</span>
                    </label>
                    <input
                      type='text'
                      id='Apellido'
                      name='Apellido'
                      className='bg-gray-300 py-3 px-5 text-black w-full'
                      placeholder='Apellido Aquí'
                    />
                  </div>
                </div>
                <div className='flex gap-4'>
                  <div className='flex flex-col gap-2 items-start w-full'>
                    <label htmlFor='Celular' className='text-xl font-normal'>
                      Número Cel <span className='text-red-700 text-3xl'>*</span>
                    </label>
                    <input
                      type='text'
                      id='Celular'
                      name='Celular'
                      className='bg-gray-300 py-3 px-5 text-black w-full'
                      placeholder='+569...'
                    />
                  </div>
                  <div className='flex flex-col gap-2 items-start  w-full'>
                    <label htmlFor='Edad' className='text-xl font-normal'>
                      Edad <span className='text-red-700 text-3xl'>*</span>
                    </label>
                    <input
                      type='text'
                      id='Edad'
                      name='Edad'
                      className='bg-gray-300 py-3 px-5 text-black w-full'
                      placeholder='+18'
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className='flex flex-col items-start'>
                  <label htmlFor='Email' className='text-xl font-normal'>
                    Email <span className='text-red-700 text-3xl'>*</span>
                  </label>
                  <input
                    type='text'
                    id='Email'
                    name='Email'
                    className='w-full bg-gray-300 py-3 px-5 mt-3 text-black'
                    placeholder='example@example.com'
                  />
                </div>
                <div className='flex flex-col items-start'>
                  <label htmlFor='Direccion' className='text-xl font-normal'>
                    Dirección <span className='text-red-700 text-3xl'>*</span>
                  </label>
                  <input
                    type='text'
                    id='Direccion'
                    name='Direccion'
                    className='w-full bg-gray-300 py-3 px-5 mt-3 text-black'
                    placeholder='Dirección aquí'
                  />
                </div>
              </div>
              <div className='flex gap-3 items-center'>
                <input type='checkbox' />
                <p className='py-4'>
                  Por favor mándenme información sobre algún problema o actualización.
                </p>
              </div>
            </div>
            <button className='bg-primary hover:bg-hoverPrimary text-xl font-extrabold text-white w-full py-4 px-5'>
              IR A LA COMPRA
            </button>
          </div>
        </div>
      )}
    </>
  )
}

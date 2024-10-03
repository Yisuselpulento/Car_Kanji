import { useState, useEffect } from 'preact/hooks'
import { Cars } from '../CarsArray'
import ModalForm from './ModalForm'

export const Section2 = () => {
  const [carSelect, setCarSelect] = useState('Audi')
  const [number, setNumber] = useState(1)
  const [infoCar, setInfoCar] = useState()

  useEffect(() => {
    const filteredCars = Cars.filter(car => car.modelo === carSelect)
    const currentCar = filteredCars[number - 1]
    setInfoCar(currentCar)
  }, [carSelect, number])

  const carCounts = {
    Audi: 5,
    lamborghini: 8,
    bmw: 3,
    Astron: 2,
    otros: 4
  }

  const styleButton = 'bg-primary hover:bg-hoverPrimary py-4 md:w-[300px] w-full text-white font-bold text- px-4'

  const handleButtonClick = (value) => {
    setCarSelect(value)
    setNumber(1)
  }

  const handleNext = () => {
    setNumber((prev) => {
      const maxNumber = carCounts[carSelect]
      return prev === maxNumber ? 1 : prev + 1
    })
  }

  const handlePrevious = () => {
    setNumber((prev) => {
      const maxNumber = carCounts[carSelect]
      return prev === 1 ? maxNumber : prev - 1
    })
  }

  const ShowCar = carSelect + number

  return (
    <section class='flex w-full md:flex-row flex-col md:p-20 '>
      <div class=' p-5 flex flex-col gap-3 justify-center  md:w-2/7 w-full items-center'>
        <button
          onClick={() => handleButtonClick('Audi')}
          class={styleButton}
        >AUDI
        </button>
        <button
          onClick={() => handleButtonClick('lamborghini')}
          class={styleButton}
        >LAMBORGHINI
        </button>
        <button
          onClick={() => handleButtonClick('bmw')}
          class={styleButton}
        >BMW
        </button>
        <button
          onClick={() => handleButtonClick('Astron')}
          class={styleButton}
        >ASTRON
        </button>
        <button
          onClick={() => handleButtonClick('otros')}
          class={styleButton}
        >OTROS
        </button>
      </div>
      <div class=' p-5 flex justify-center flex-col items-center md:w-3/7 w-full'>
        <div class='mb-20 md:h-[250px] h-[130px] md:w-[500px]'>
          <img
            alt={`imagen de ${ShowCar}`}
            src={`./Cars/${ShowCar}.webp`}
            class='md:w-[700px]'
          />
        </div>
        <div class='flex flex-row gap-20'>
          <button
            onClick={handlePrevious}
            class='bg-primary hover:bg-hoverPrimary px-3 py-3 font-bold text-white'
          >ANTERIOR
          </button>
          <button
            onClick={handleNext}
            class='bg-primary hover:bg-hoverPrimary px-3 py-3 font-bold text-white'
          >SIGUIENTE
          </button>
        </div>
      </div>
      <div class=' md:w-2/7 w-full md:m-10 '>
        <div class='relative overflow-x-auto text-center m-2'>
          <p class='bg-red-700 text-white font-extrabold text-xl p-3 mx-2'>INFO</p>
          <table class='mb-10 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <tbody>
              <tr class='border-gray-700'>
                <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  Modelo
                </th>
                <td class='px-6 py-4'>
                  {infoCar?.modelo}
                </td>
              </tr>
              <tr class='border-gray-700'>
                <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  Año
                </th>
                <td class='px-6 py-4'>
                  {infoCar?.year}
                </td>
              </tr>
              <tr class='border-gray-700'>
                <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  Transmision
                </th>
                <td class='px-6 py-4'>
                  {infoCar?.transmision}
                </td>
              </tr>
              <tr class='border-gray-700'>
                <th scope='row' class='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  Precio
                </th>
                <td class='px-6 py-4'>
                  {infoCar?.precio}
                </td>
              </tr>
            </tbody>
          </table>
          <ModalForm />
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import acomo1 from '../imagem/acomo1.webp'
import { Link } from 'react-router-dom'

const Item = () => {
  return (
    <Link to="/" className='flex flex-col gap-2'>
        <img className='aspect-square rounded-2xl' src={acomo1} alt="" />

        <div>
            <h3 className='text-xl font-semibold'>Ilha do Cabo</h3>
            <p className='truncate text-gray-600'>A acomodação é a ação ou resultado de acomodar-se, 
                o que implica em instalar ou ajustar algo de modo a 
                adaptá-lo a outra coisa. No contexto mais amplo, pode se 
                referir a:
                Disposição ou Arranjo: Acomodação de móveis em um ambiente.
                Divisão Habitacional: Refere-se a quartos ou espaços onde as 
                pessoas se instalam ou se hospedam, como em hotéis </p>
        </div>
        <p><span className='font-semibold'>550.00Kz</span> por noite</p>
    </Link>
  )
}

export default Item
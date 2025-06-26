import React from 'react'
import logo from '../assets/cap.jpg'
import serch from '../assets/search.svg'

const Header = () => {
  return (
    <div className='shadow-md'>
        <div className='flex items-center justify-between px-8 py-4 mx-auto max-w-7xl pl-6'>
            <div className='flex items-center'>
                <img className='h-20' src={logo} alt="" />
                <p className='text-2xl, font-bold  text-primary-400'>Caputobnb</p>
                </div>

                    <div className='flex items-center border border-gray-300 py-2 px-4 rounded-full shadow-md'>
                        <p className='border-r border-r-gray-300 pr-4'>Qualquer lugar</p>
                        <p className='border-r border-r-gray-300 px-4'>Qualquer semana</p>
                        <p className='px-4'>Hóspedes</p>

                        <div className='bg-primary-400 rounded-full p-2 text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                    </div>
                </div>

             <div className='flex items-center gap-2 border border-gray-300 py-2 px-4 rounded-full shadow-md'>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-gray-600">
                        <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z" clipRule="evenodd" />
                        </svg>


                        <p className='px-4'>Caputo AMC</p>
                    
                </div>
        </div>
    </div>
  )
}

export default Header
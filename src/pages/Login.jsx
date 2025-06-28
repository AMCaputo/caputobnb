import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <section className='flex items-center'>
        <div className='w-full gap-4 flex flex-col items-center mx-auto max-w-96 '>
         <h1 className='text-3xl font-bold'>Faça sue Login</h1>

         <form className='flex flex-col gap-2 w-full'>
            <input type="email" className='w-full border border-gray-300 py-2 px-4 rounded-full' placeholder='Digite seu E-mail' />
            <input type="password" className='w-full border border-gray-300 py-2 px-4 rounded-full' placeholder='Digite sua Senha' />
            
            <button className='bg-primary-400 text-white font-bold cursor-pointer w-full border border-gray-300 py-2 px-4 rounded-full'>Login</button>
         </form>
         <p >Ainda não tem uma conta? <Link to="/register" className='font-semibold underline'>Registre-se aqui!</Link></p>
        </div>
    </section>
  )
}

export default Login
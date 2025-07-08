import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Accprofil from './Accprofil'

function Account() {
    const { subpage } = useParams()
    const buttonClass = (button) =>{
        let finalClass = "hover:bg-primary-400 rounded-full transition px-4 hover:text-white cursor-pointer"

        if(button === subpage) finalClass +="bg-primary-400 text-white"
        return finalClass
    }
  return (
    <section className="p-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 items-center">
            <div className='gap-4 flex'>
                <Link to="/account/profile" className={buttonClass("profile")}>Perfil</Link>
                <Link to="/account/bookings" className={buttonClass("bookings")}>Reselvas</Link>
                <Link to="/account/places" className={buttonClass("places")}>Lugares</Link>
            </div>
            {subpage === "profil" && <Accprofil/>}
        
        </div>
    </section>
  )
}

export default Account
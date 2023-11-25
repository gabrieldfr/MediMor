import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/nav.scss'

function Nav() {

    const [userLogado] = useState(JSON.parse(sessionStorage.getItem("usuarioLogado")))


    const handleLogout = ()=>{
        sessionStorage.removeItem("usuarioLogado")
        window.location.reload();
        window.location = "/";
    }
    
  return (
    <>
        <header>
            <nav className='navBar'>
                <div className='maxWidth'>
                    <div className='logout' style={userLogado == null ? {display:"none"}: {display:"block"}}>
                        <p>{userLogado != null ? `Usuário logado:${userLogado.nome}`:""}</p>
                        <p>{userLogado != null ? `email:${userLogado.email}`:""}</p>
                        <button id='logout' onClick={handleLogout}>Logout</button>
                    </div>
                    <div className='logo'>
                        <a href="#">Medimor</a>
                        <img className='imagemLogo' src="../public/logo2.png" alt="erro" />
                    </div>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Nav
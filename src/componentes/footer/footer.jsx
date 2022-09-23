import React from 'react'
import logo from './logo.png'
import './footer.css'

export default function footer() {
  return (
    <footer className='footer'>
        <img className='logo' src={logo}/>
        <p className='endereco'> 🚩Av: Chico Mendes</p>
        <p className='endereco'>Jd. Luciana Embu das Artes - SP </p>
        <p className='contato'> 📞(11) 95034-3901</p>
        <p className='contato'>contrutoraviana@gmail.com</p>
            
        
    </footer>
  )
}

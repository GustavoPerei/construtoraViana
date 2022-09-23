import React from 'react'
import Logo from './logo.png'
import './header.css';
 function Header() {
  return (
    <header className='header'>
        <div className='cabecalho'>
            <div>
                <img class='logo' src={Logo}></img>
            </div>
            <div className='relogio'>
                🕛
            </div>
            <div className='informacoes'>
                <p className='atendimento'>
                    Horario de atendimento
                </p> 
                <p className='horario'>
                    Seg - Qui: 08:00 - 18:00
                </p>
                <p className='local'>
                    🚩
                </p>
                <p className='endereco'>
                    Avenida
                </p>
                <p className='endereco2'>
                    Jardim Luciana, Embu das Artes - SP
                </p>
                <p className='telefone'>
                    📞
                </p>
                <p className='contato'>
                    (11) 95034-3901
                </p>
                <p className='contato2'>
                xxxxxxxx@xxxx.gmail.com
                </p>
            </div>
        </div>
        <div className='lista'>
            <nav>
                <ul>
                    <li>
                        <a href="#">
                        HOME
                        </a>
                    </li>
                    <li>
                        <a href="#">
                          EMPRESA
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        SERVIÇOS
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        OBRAS
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        PARCEIROS
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        ORÇAMENTOS
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        CONTATOS
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
export default Header

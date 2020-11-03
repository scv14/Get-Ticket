import React from "react"
import './header.css'
import logo from './logo.png'
import {Link} from "react-router-dom"

function Header (props){
    return (
        <header>
            <div className="conatiner">
                <div className="headerInner">
                    <Link to="/"><img className="logo" alt="logo" src={logo}/></Link>
                    <nav className="headerNavigation">
                        <li ><button className="headerItem">Регистрация</button></li>
                        <li><button className="headerItem">Войти</button></li>
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default Header;

import React, { Component } from 'react';
import './footer.css';
import Facebook from './facebook.png'
import Instagram from './instagram.png'
import Twitter from './twitter.png'
import {Link} from "react-router-dom"
import Whatsapp from './whatsapp.png'

export default class Footer extends Component{
    render(){
        return (
            <footer>
            <div className="conatiner">
                <div className='footerInner'>
                    <div className="generalInformation">
                        <h3>Общая информация</h3>
                        <nav>
                            <li><Link to="/ours">О нас</Link></li>
                            <li><Link to="howtobuy" >Как купить</Link></li>
                            <li><Link to="returnCond">Условия возврата</Link></li>
                        </nav>
                    </div>
                    <div className="contact">
                        <h3>Контакты</h3>
                        <nav className="contactItem">
                            <li><a href="tel: +79245917250">+79245917250</a></li>
                            <li><a href="mailto:vlad@htmlbook.ru?subject=Вопрос по HTML">shdhhx83@gmail.com</a></li>
                        </nav>
                    </div>
                    <div className="social">
                        <h3>Соцальные сети</h3>
                        <div className="socialItem">
                            <a href="https://www.instagram.com"><img alt="instagram" src={Instagram}/></a>
                            <a href="https://www.facebook.com/stories/create"><img alt="facebook" src={Facebook}/></a>
                            <a href="https://twitter.com/home?lang=ru"><img alt="twitter" src={Twitter}/></a>
                            <a href="https://wa.me/<79145917250>"><img alt="whatsApp" src={Whatsapp} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
    }
}

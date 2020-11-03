import React from "react";
import './ticketItem.css';
import Dog from './dog.png'

function TicketItem (props){
    return (
        <div className="ticketItem">
            <img src={Dog} alt="dog" className="ticketImg"/>
            <div className="ticketDiscription">
                <h2 className="ticketTitle">Выгуливание собак</h2>
                <p className="ticketInfo">Цетральный парк</p>
                <p className="ticketInfo">12 Ноября 2020 в 20:20</p>
                <p className="ticketPrice">Билет: бесплатно</p>
                <div className="ticketGanre">Прогулка</div>
                <div className="ticketGanre">Прогулка</div>
            </div>
        </div>

    )
}

export default TicketItem;
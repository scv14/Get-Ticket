import React from "react";
import './ticket.css';
import TicketItem from './ticketItem/ticketItem'

function Ticket (){
    return (
        <div>
            <div className="conatiner">
                <div className="ticketInner">
                    <TicketItem/>
                    <TicketItem/>
                    <TicketItem/>
                </div>
            </div>
        </div>
    )
}

export default Ticket;
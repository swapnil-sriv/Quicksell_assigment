import React from 'react';
import Ticket from './Ticket';

const TicketColumn = ({ title, tickets }) => {
  return (
    <div className="ticket-column">
      <h2>{title}</h2>
      <div className="tickets">
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketColumn;
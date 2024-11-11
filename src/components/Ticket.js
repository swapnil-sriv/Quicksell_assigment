
import React from 'react';
import { useState } from 'react';
import menuIcon from '../assets/3 dot menu.svg';






const Ticket = ({ ticket }) => {
 
const [isDone, setIsDone] = useState(false);


const handleCheckboxChange = ({}) => {
  setIsDone(!isDone);
  
};
  return (
    <div className="ticket">
      <div className="ticket-header">
       
        <span className="ticket-id">{ticket.id}</span>
        
        
      </div>
      
      <div className="ticket-body">
        
      <input
  type="checkbox"
  checked={isDone}
  onChange={handleCheckboxChange}
  className="task-checkbox"
/>
{isDone && <img src="/assets/Done.svg" alt="Completed" />}


       
        <h3>{ticket.title}</h3>
        
        
      
      </div>

   
      <div className="ticket-tags">
      <img src={menuIcon} alt="Menu" className="menu-icon" />
        {ticket.tag.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticket;

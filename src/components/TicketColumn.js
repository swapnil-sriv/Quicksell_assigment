
import React from 'react';
import Ticket from './Ticket';


import addIcon from '../assets/add.svg';
import menuIcon from '../assets/3 dot menu.svg';


const headerIcons = {
  "0": "/assets/No-priority.svg",
  "1": "/assets/Img%20-%20Low%20Priority.svg",
  "2": "/assets/Img%20-%20Medium%20Priority.svg",
  "3": "/assets/Img%20-%20High%20Priority.svg",
  "4": "/assets/SVG%20-%20Urgent%20Priority%20colour.svg",
  "Todo": "/assets/To-do.svg",
  "In progress": "/assets/in-progress.svg",
  "Backlog": "/assets/Backlog.svg",
  "Done": "/assets/Done.svg",
};

const priorityLabels = {
  0: "No Priority",
  1: "Low",
  2: "Medium",
  3: "High",
  4: "Urgent",
};

const TicketColumn = ({ title, tickets, grouping,  userMapping }) => {
  const taskCount = tickets.length;
  const displayTitle = grouping==='user' ? userMapping[title]  : "";

  console.log("Title:", title);     
  return (
    <div className='ticket-column'>

    
    <div className="column-header">
      <h2>
       
        {grouping==='user'&&displayTitle}
        {headerIcons[title] ? (
  <img src={headerIcons[title]} alt={`${title} icon`} className="header-icon" />
) : (
  <span></span>
)}
        {grouping==="status" && title} {priorityLabels[title]}
        
         <span style={{ fontSize: '20px', color: 'gray', paddingLeft:'15px' }}> {` ${taskCount}`} </span>
      <div className="header-icons">
          <img src={addIcon} alt="Add" className="add-icon" />
          <img src={menuIcon} alt="Menu" className="menu-icon" />
        </div>
      </h2> 

      </div>
      <div className="tickets">
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default TicketColumn;

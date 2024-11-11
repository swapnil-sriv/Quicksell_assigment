import React from 'react';
import TicketColumn from './TicketColumn';

const KanbanBoard = ({ tickets, groupingOption, sortingOption, userMapping }) => {
  const groupedTickets = groupTickets(tickets, groupingOption, sortingOption);

  return (
    <div className='Kanban'>

    <div className="kanban-board">
      {Object.keys(groupedTickets).map((key) => (
        <TicketColumn key={key} title={key} tickets={groupedTickets[key]} grouping={groupingOption} userMapping={userMapping} />
      ))}
      </div>
    </div>
  );
};

const groupTickets = (tickets, groupingOption, sortingOption) => {
  const sortedTickets = sortTickets(tickets, sortingOption);

  switch (groupingOption) {
    case 'status':
      return groupByStatus(sortedTickets);
    case 'user':
      return groupByUser(sortedTickets);
    case 'priority':
      return groupByPriority(sortedTickets);
    default:
      return {};
  }
};

const sortTickets = (tickets, sortingOption) => {
  return tickets.sort((a, b) => {
    if (sortingOption === 'priority') {
      return b.priority - a.priority;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
};

const groupByStatus = (tickets) => {
  return tickets.reduce((groups, ticket) => {
    if (!groups[ticket.status]) {
      groups[ticket.status] = [];
    }
    groups[ticket.status].push(ticket);
    return groups;
  }, {});
};

const groupByUser = (tickets) => {
  return tickets.reduce((groups, ticket) => {
    if (!groups[ticket.userId]) {
      groups[ticket.userId] = [];
    }
    groups[ticket.userId].push(ticket);
    return groups;
  }, {});
};

const groupByPriority = (tickets) => {
  return tickets.reduce((groups, ticket) => {
    if (!groups[ticket.priority]) {
      groups[ticket.priority] = [];
    }
    groups[ticket.priority].push(ticket);
    return groups;
  }, {});
};

export default KanbanBoard;
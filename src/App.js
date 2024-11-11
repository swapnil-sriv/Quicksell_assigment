import React, { useState, useEffect } from 'react'; 
import KanbanBoard from './components/KanbanBoard';
import DisplayDropdown from './components/DisplayDropdown';
import './App.css'

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortingOption, setSortingOption] = useState('priority');
  const [userMapping,setUserMapping] = useState({});
  
  useEffect(() => {
    document.body.style.backgroundColor = '#f4f6fa';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      const mapping = {};
      data.users.forEach(user => {
        mapping[user.id] = user.name;
      });
      setUserMapping(mapping)
      console.log(userMapping)
      setTickets(data.tickets);
    };
    fetchTickets();
  }, []);

  const handleGroupingOptionChange = (option) => {
    setGroupingOption(option);
    saveViewState(option, sortingOption);
  };

  const handleSortingOptionChange = (option) => {
    setSortingOption(option);
    saveViewState(groupingOption, option);
  };

  const saveViewState = (grouping, sorting) => {
    localStorage.setItem('groupingOption', grouping);
    localStorage.setItem('sortingOption', sorting);
  };

  const loadViewState = () => {
    setGroupingOption(localStorage.getItem('groupingOption') || 'status');
    setSortingOption(localStorage.getItem('sortingOption') || 'priority');
  };

  useEffect(() => {
    loadViewState();
  }, []);

  return (
    <div className="app">
      
      <div className='navbar'>
          <DisplayDropdown
            groupingOption={groupingOption}
            sortingOption={sortingOption}
            onGroupingOptionChange={handleGroupingOptionChange}
            onSortingOptionChange={handleSortingOptionChange}
          />
        </div>
      
     
      <KanbanBoard tickets={tickets} groupingOption={groupingOption} sortingOption={sortingOption} userMapping={userMapping} />
    </div>
  );
};

export default App;

import React from 'react';

const SortingControls = ({ sortingOption, onSortingOptionChange }) => {
  const handleChange = (event) => {
    onSortingOptionChange(event.target.value);
  };

  return (
    <div className="sorting-controls">
      <label htmlFor="sorting-option">Sort by:</label>
      <div className="sorting-options">
        <label>
          <input
            type="radio"
            name="sorting-option"
            value="priority"
            checked={sortingOption === 'priority'}
            onChange={handleChange}
          />
          Priority
        </label>
        <label>
          <input
            type="radio"
            name="sorting-option"
            value="title"
            checked={sortingOption === 'title'}
            onChange={handleChange}
          />
          Title
        </label>
      </div>
    </div>
  );
};

export default SortingControls;
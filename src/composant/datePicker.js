import React, { useState } from 'react';

const DateRangePicker = ({ initialStartDate, initialEndDate, onDateChange, startDate2, endDate2 }) => {
  const [startDate, setStartDate] = useState(initialStartDate || null);
  const [endDate, setEndDate] = useState(initialEndDate || null);

  const handleStartDateChange = date => {
    setStartDate(date);
    onDateChange({ startDate: date, endDate });
  };

  return (
    <div>
      <div>
        <label>Date de début:</label>
        <input type="date" value={startDate} min="2023-10-10" max="2023-12-25" onChange={e => handleStartDateChange(e.target.value)} />
      </div>
    </div>
  );
};

export default DateRangePicker;

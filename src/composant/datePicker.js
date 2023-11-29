import React, { useState } from 'react';
import styled from 'styled-components';


const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const DatePickerBox = styled.div`
  display:flex;
  flex-direction:column;
`;

const DateRangePicker = ({ onDateChange, label, startDate2, endDate2, id }) => {
  const currentDate = new Date().toISOString().split('T')[0]; // Récupère la date du jour au format YYYY-MM-DD
  const [startDate, setStartDate] = useState(currentDate);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    onDateChange(date); // Transmet la date sélectionnée à la fonction onDateChange du parent
  };

  return (
    <div>
      <DatePickerBox>
        <label>{label}</label>
        <Input
        id={id}
          className=""
          type="date"
          value={startDate}
          min={startDate2}// Utilisez startDate2 comme valeur minimale
          max={endDate2}// Utilisez endDate2 comme valeur maximale
          onChange={(e) => handleStartDateChange(e.target.value)}
        />
      </DatePickerBox>
    </div>
  );
};

export default DateRangePicker;

import React, { useEffect } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  font-size: 18px;
  color: #333;
  margin-top: 10px;
`;

const Select = styled.select`
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

function ListSelect({ datas, id, title }) {
  useEffect(() => {
    const stateSelect = document.getElementById(id);

    // Efface les options existantes avant d'ajouter de nouvelles options
    stateSelect.innerHTML = '';

    if (stateSelect) {
      datas.forEach((data) => {
        const option = document.createElement('option');
        option.value = data.abbreviation;
        option.text = data.name;
        stateSelect.appendChild(option);
      });
    }
  }, [datas, id]);

  return (
    <>
      <br/><Label htmlFor={id}>{title}</Label>
      <Select name={id} id={id}></Select>
    </>
  );
}

export default ListSelect;

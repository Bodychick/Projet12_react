import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import DataTable from 'react-data-table-component';

// Styled Components
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const TableHeaderCell = styled.th`
  padding: 8px;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
  text-align: left;
`;

const EmptyRow = styled.tr`
  background-color: white;
  text-align: center;
  font-style: italic;
`;


const ListEmployees = () => {
  const employees = useSelector((root) => root.employees);
  console.log(employees)

  const data = useMemo(() => {
    return employees; // Pas besoin de JSON.parse ici
  }, [employees]);
  

  const columns = [
      {
        name: 'First Name',
        selector: row => row.firstName,
      },
      {
        name: 'Last Name',
        selector: row => row.lastName,
      },
      {
        name: 'Date of Birth',
        selector: row => row.dateOfBirth,
      },
      {
        name: 'Start Date',
        selector: row => row.startDate,
      },
      {
        name: 'Department',
        selector: row => row.department,
      },
      {
        name: 'Street',
        selector: row => row.street,
      },
      {
        name: 'City',
        selector: row => row.city,
      },
      {
        name: 'State',
        selector: row => row.state,
      },
      {
        name: 'Zip Code',
        selector: row => row.zipCode,
      },
    ];



  return(
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h2>Employee List</h2>
      <DataTable
      columns={columns}
      data={employees}>

      </DataTable>
    </div>
  );
};

export default ListEmployees;

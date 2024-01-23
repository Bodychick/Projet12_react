import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width:80%;
  margin: auto;
  padding:20px;
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 8px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;


const ListEmployees = () => {
  const employees = useSelector((root) => root.employees);
  const [filter, setFilter]= useState(employees);
  const navigate = useNavigate();

  console.log(employees)

  const columns = [
      {
        name: 'First Name',
        selector: row => row.firstName,
        sortable:true
      },
      {
        name: 'Last Name',
        selector: row => row.lastName,
        sortable:true
      },
      {
        name: 'Date of Birth',
        selector: row => row.dateOfBirth,
        sortable:true
      },
      {
        name: 'Start Date',
        selector: row => row.startDate,
        sortable:true
      },
      {
        name: 'Department',
        selector: row => row.department,
        sortable:true
      },
      {
        name: 'Street',
        selector: row => row.street,
        sortable:true
      },
      {
        name: 'City',
        selector: row => row.city,
        sortable:true
      },
      {
        name: 'State',
        selector: row => row.state,
        sortable:true
      },
      {
        name: 'Zip Code',
        selector: row => row.zipCode,
        sortable:true
      },
    ];

    function handleNavigation(){
      navigate('/');
    }

    function handleFilter(event) {
      const searchTerm = event.target.value.toLowerCase();
      const newData = employees.filter(row => {
        // Vérifiez si le terme de recherche est présent dans l'une des propriétés de l'objet `row`
        return Object.values(row).some(value =>
          value.toString().toLowerCase().includes(searchTerm)
        );
      });
      setFilter(newData);
    }
    
  

  return(
    <Container>
      <Button onClick={handleNavigation}>Accueil</Button>
      <Heading>Employee List</Heading>
      <SearchInput type="text" onChange={handleFilter} placeholder="Search by first name" />
      <DataTable columns={columns} data={filter} pagination />
    </Container>
  );
};

export default ListEmployees;

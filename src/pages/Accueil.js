import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import EmployeeCreatedModal from '../composant/modal';
import { states } from '../data/states';
import DateRangePicker from '../composant/datePicker';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../state/store';

const Container = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const TitleText = styled.h1`
  font-size: 36px;
  color: #333;
`;

const CreateEmployeeForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 18px;
  color: #333;
  margin-top: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #0073e6;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 18px;

  &:hover {
    background-color: #0054a6;
  }
`;

const Confirmation = styled.div`
  text-align: center;
  background-color: #0073e6;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  margin-top: 20px;
`;

function EmployeeForm() {
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedBirthDate, setSelectedBirthDate] = useState(null);
  const dispatch = useDispatch();

  const handleDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const handleDateChangeDateBirth = (date) => {
    setSelectedBirthDate(date);
  };

  const hideConfirmationModal = () => {
    setConfirmationVisible(false);
  };

  useEffect(() => {
    // Initialisation du select "state"
    const stateSelect = document.getElementById('state');
    states.forEach((state) => {
      const option = document.createElement('option');
      option.value = state.abbreviation;
      option.text = state.name;
      stateSelect.appendChild(option);
    });
  }, []);

  const saveEmployee = () => {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dateOfBirth = document.getElementById('date-of-birth').value;
    const startDate = document.getElementById('start-date').value;
    const department = document.getElementById('department').value;
    const street = document.getElementById('street').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const zipCode = document.getElementById('zip-code').value;

    if(firstName !== "" 
    && lastName!== "" 
    && dateOfBirth!== "" 
    && startDate!== "" 
    && department !== ""
    && street !== "" 
    && city !== ""
    && state !== ""
    && zipCode !== "")
    {
      const employeeData = {
        firstName,
        lastName,
        dateOfBirth,
        startDate,
        department,
        street,
        city,
        state,
        zipCode,
      };
      console.log(employeeData)
      // Dispatch action to add employee to Redux store
      dispatch(addEmployee(employeeData));
  
      // Affichage de la confirmation
      setConfirmationVisible(true);
      console.log(confirmationVisible);
    }
    
  };

  return (
    <div>
      <Container>
        <Title>
          <TitleText>HRnet</TitleText>
        </Title>
        <CreateEmployeeForm>
          <Label htmlFor="first-name">First Name</Label>
          <Input type="text" id="first-name" />

          <Label htmlFor="last-name">Last Name</Label>
          <Input type="text" id="last-name" />

          <DateRangePicker
            onDateChange={handleDateChangeDateBirth}
            startDate2="2023-10-10"
            endDate2="2023-12-24"
            label="Date de naissance"
            id='date-of-birth'
          />

          <div>
            <DateRangePicker
              onDateChange={handleDateChange}
              startDate2="2023-10-10"
              endDate2="2023-12-24"
              label="Date de début"
              id="start-date"
              
            />
            <p>Date de début: {selectedStartDate || 'Non définie'}</p>
            <p>Date de naissance : {selectedBirthDate || 'Non définie'}</p>
          </div>

  

          <fieldset className="address">
            <legend>Address</legend>

            <Label htmlFor="street">Street</Label>
            <Input id="street" type="text" />

            <Label htmlFor="city">City</Label>
            <Input id="city" type="text" />

            <Label htmlFor="state">State</Label>
            <Select name="state" id="state"></Select>

            <Label htmlFor="zip-code">Zip Code</Label>
            <Input id="zip-code" type="number" />
          </fieldset>

          <Label htmlFor="department">Department</Label>
          <Select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </Select>
        </CreateEmployeeForm>

        <Button onClick={saveEmployee}>Save</Button>
      </Container>
      {confirmationVisible && (
        <EmployeeCreatedModal show={confirmationVisible} onClose={hideConfirmationModal} />
      )}
    </div>
  );
}

export default EmployeeForm;

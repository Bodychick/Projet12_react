import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: #fff;
  width: 300px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ModalHeader = styled.div`
  background: #007BFF;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

const ModalContent = styled.div`
  padding: 20px;
`;

const ModalFooter = styled.div`
  text-align: center;
  padding: 10px;
`;

const CloseButton = styled.button`
  background: #007BFF;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
`;

function EmployeeCreatedModal({ show, onClose }) {
  if (!show) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <h3>Employee Created!</h3>
        </ModalHeader>
        <ModalContent>
          <p>Congratulations! You have successfully created a new employee.</p>
        </ModalContent>
        <ModalFooter>
          <CloseButton onClick={onClose}>Close</CloseButton>
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default EmployeeCreatedModal;

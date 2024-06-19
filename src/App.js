// src/App.js
import React, { useState } from 'react';
import EmployeeScroller from './EmployeeScroller';
import EmployeeTable from './EmployeeTable';
import './App.css';

const employees = [
  { name: 'Thanmai', position: 'Engineer', department: 'Development' },
  { name: 'Uday', position: 'Manager', department: 'HR' },
  { name: 'Prem', position: 'Analyst', department: 'Finance' },
  { name: 'Thanmai', position: 'Engineer', department: 'Development' },
  { name: 'Uday', position: 'Manager', department: 'HR' },
  { name: 'Prem', position: 'Analyst', department: 'Finance' },
  { name: 'Thanmai', position: 'Engineer', department: 'Development' },
  { name: 'Uday', position: 'Manager', department: 'HR' },
  { name: 'Prem', position: 'Analyst', department: 'Finance' },
  { name: 'Thanmai', position: 'Engineer', department: 'Development' },
  { name: 'Uday', position: 'Manager', department: 'HR' },
  { name: 'Prem', position: 'Analyst', department: 'Finance' },
  // Add more employee data as needed
];

const App = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleSelectEmployee = (employee) => {
    setSelectedEmployee(employee);
  };

  return (
    <div className="App">
      <h1>Employee Directory</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <EmployeeScroller employees={employees} onSelectEmployee={handleSelectEmployee} />
        <div style={{ flex: 1, marginLeft: '20px' }}>
          {selectedEmployee ? (
            <div>
              <h2>Selected Employee</h2>
              <p>Name: {selectedEmployee.name}</p>
              <p>Position: {selectedEmployee.position}</p>
              <p>Department: {selectedEmployee.department}</p>
            </div>
          ) : (
            <p>Please select an employee from the list</p>
          )}
        </div>
      </div>
      <h2>Employee Table</h2>
      <EmployeeTable employees={employees} itemsPerPage={2} />
    </div>
  );
};

export default App;

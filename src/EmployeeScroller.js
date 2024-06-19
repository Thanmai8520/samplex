// src/EmployeeScroller.js
import React from 'react';

const EmployeeScroller = ({ employees, onSelectEmployee }) => {
  return (
    <div style={{ overflowY: 'auto', maxHeight: '200px', border: '1px solid #ccc', padding: '10px' }}>
      {employees.map((employee, index) => (
        <div key={index} onClick={() => onSelectEmployee(employee)}>
          {employee.name}
        </div>
      ))}
    </div>
  );
};

export default EmployeeScroller;

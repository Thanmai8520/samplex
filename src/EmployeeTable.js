// src/EmployeeTable.js
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

const EmployeeTable = ({ employees, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentEmployees = employees.slice(offset, offset + itemsPerPage);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={Math.ceil(employees.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default EmployeeTable;

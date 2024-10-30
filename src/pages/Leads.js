import React from 'react';
import '../Design/Leads.css';

const Leads = () => {
  return (
    <div className="leads">
      <h1>Leads</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Date Added</th>
          </tr>
        </thead>
        <tbody>
          <tr className="status-interested">
            <td>Fawad</td>
            <td>fawad@gmail.com</td>
            <td>Interested</td>
            <td>10/10/2024</td>
          </tr>
          <tr className="status-converted">
            <td>Raju</td>
            <td>raju@gmail.com</td>
            <td>Converted</td>
            <td>08/09/2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Leads;



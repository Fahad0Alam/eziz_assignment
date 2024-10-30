import React from 'react';
import Widget from '../components/Widget';


const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="widgets">
        <Widget title="Monthly Performance">
          <p>Chart or data here...</p>
        </Widget>
        <Widget title="Lead Statistics">
          <p>Chart or data here...</p>
        </Widget>
        <Widget title="Custom Metric">
          <p>Chart or data here...</p>
        </Widget>
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';


const Widget = ({ title, children }) => {
  return (
    <div className="widget">
      <h3>{title}</h3>
      <div className="widget-content">
        {children}
      </div>
    </div>
  );
};

export default Widget;

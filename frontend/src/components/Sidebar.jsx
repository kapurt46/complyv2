import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">

      <div className="sidebar-section">
        <h4>Documents</h4>
        <ul>
          <li><button>Doc1</button></li>
          <li><button>Doc2</button></li>
          <li><button>Doc3</button></li>
          <li><button>Doc4</button></li>
        </ul>
      </div>
      <div className="sidebar-section">
        <h4>Collaboration</h4>
        <ul>
          <li>Employee 1</li>
          <li>Employee 2</li>
          <li>Employee 3</li>
          <li>Employee 4</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

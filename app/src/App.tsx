import React from 'react';
import TaskTracker from './pages/TaskTracker';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="app-content">
        <TaskTracker />
      </div>
    </div>
  );
};

export default App;

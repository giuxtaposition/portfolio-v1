import './App.css';
import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import Routes from './components/Routes'

const App:  React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
}

export default App;



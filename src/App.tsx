import "./styles/App.scss";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
};

export default App;

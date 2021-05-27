import './App.css';
import React from 'react'
import {
  BrowserRouter as Router
} from "react-router-dom";
import Routes from './components/Routes'

function App() {

  return (
    <Router>
      <div className="App">
        <Routes />
      </div>
    </Router>
  );
}

export default App;

// TODO Add snap-scroll 
// TODO  Working nav links ✔
// TODO Working routes ✔ 
// TODO Working contact button
// TODO Tooltip over skills ✔
// TODO Projects Section ✔
// TODO Resume Section
// TODO Footer
// TODO Render only one Modal that changes based on project ✔
//  TODO Add  projects tags
// TODO Filter projects by tags
//  TODO Mobile Responsive
// TODO Better layout for  skills  icons section
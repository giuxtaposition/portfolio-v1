import "./styles/App.scss";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import LoadingScreen from "./components/LoadingScreen";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 600));

      setLoading((loading) => !loading);
    };

    loadData();
  }, []);

  return (
    <>
      <Router>
        {loading === false ? (
          <div className="App">
            <Routes />
          </div>
        ) : (
          <LoadingScreen />
        )}
      </Router>
    </>
  );
};

export default App;

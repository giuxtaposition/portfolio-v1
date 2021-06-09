import "./styles/App.scss";
import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
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
      <HashRouter basename={"/"}>
        {loading === false ? (
          <div className="App">
            <Routes />
          </div>
        ) : (
          <LoadingScreen />
        )}
      </HashRouter>
    </>
  );
};

export default App;

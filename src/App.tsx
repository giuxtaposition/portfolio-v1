import "./styles/App.scss";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";
import LoadingScreen from "./components/LoadingScreen";
import { useSpring, animated, useTransition } from "react-spring";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

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
          <animated.div className="App" style={fadeIn}>
            <Routes />
          </animated.div>
        ) : (
          <LoadingScreen />
        )}
      </Router>
    </>
  );
};

export default App;

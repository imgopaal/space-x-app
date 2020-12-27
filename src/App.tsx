import React, { useState, useCallback } from "react";
import "./App.css";
import Launch from "./components/Launch";
import LaunchDetails from "./components/LaunchDetails";

const App = () => {
  const [id, setId] = useState(0);
  const handleIdChange = useCallback((newId) => {
    setId(newId);
  }, []);
  return (
    <div>
      <nav className="nav">
        Developed By{" "}
        <a
          style={{ listStyle: "none", textDecoration: "none" }}
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/gopaldas123"
        >
          &nbsp;GOPAL DAS
        </a>
      </nav>

      <div className="App">
        <div className="launch">
          <Launch handleIdChange={handleIdChange} />
        </div>
        <div className="launchDetails">
          <LaunchDetails id={id} />
        </div>
      </div>
    </div>
  );
};

export default App;

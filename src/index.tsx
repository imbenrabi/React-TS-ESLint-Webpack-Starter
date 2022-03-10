import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <h1>Welcome to the weakest challenge{" "}{new Date().toLocaleDateString()}</h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
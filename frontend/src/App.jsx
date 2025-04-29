import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import AppRoutes from "./routes/app-routes";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
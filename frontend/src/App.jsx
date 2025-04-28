import React from "react";
import ListUsersPage from "./pages/list-user-page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 

function App() {
  return (
    <Router> 
      <div>
        <h1>My App</h1>
        <Routes>
          <Route path="/" element={<ListUsersPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
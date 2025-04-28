import React from "react";
import ListUsersPage from "./pages/list-user-page";
import CreateUserPage from "./pages/create-user-page";
import FindUserById from "./pages/search-user";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 

function App() {
  return (
    <Router> 
      <div>
        <h1>My App</h1>
        <Routes>
          <Route path="/" element={<ListUsersPage />} />
          <Route path="/add-user" element={<CreateUserPage />} /> 
          <Route path="/search-user" element={<FindUserById/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
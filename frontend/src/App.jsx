import React from "react";
import ListUsersPage from "./pages/list-user-page";
import CreateUserPage from "./pages/create-user-page";
import FindUserById from "./pages/search-user";
import UpdateUser from "./pages/update-user-page";
import DeleteUser from "./pages/delete-user-page";
import Header from "./components/header";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<ListUsersPage />} />
          <Route path="/create-user" element={<CreateUserPage />} />
          <Route path="/search-user" element={<FindUserById />} />
          <Route path="/update-user" element={<UpdateUser />} />
          <Route path="/delete-user" element={<DeleteUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React from "react";
import ListUsersPage from "./pages/list-user-page";
import CreateUserPage from "./pages/create-user-page";
import FindUserById from "./pages/search-user";
import UpdateUser from "./pages/update-user-page";
import DeleteUser from "./pages/delete-user-page";
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
          <Route path="/update-user" element={<UpdateUser/>} />
          <Route path="/delete-user" element={<DeleteUser/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import { Routes, Route } from "react-router-dom";
import ListUsersPage from "../pages/list-user-page";
import CreateUserPage from "../pages/create-user-page";
import FindUserById from "../pages/search-user";
import UpdateUser from "../pages/update-user-page";
import DeleteUser from "../pages/delete-user-page";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ListUsersPage />} />
      <Route path="/create-user" element={<CreateUserPage />} />
      <Route path="/search-user" element={<FindUserById />} />
      <Route path="/update-user" element={<UpdateUser />} />
      <Route path="/delete-user" element={<DeleteUser />} />
    </Routes>
  );
}
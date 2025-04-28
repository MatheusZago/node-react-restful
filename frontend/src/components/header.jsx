import { Link } from "react-router-dom";
import "./css/header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-links">
        <Link to="/">All Users</Link>
        <Link to="/create-user">Create User</Link>
        <Link to="/search-user">Find User</Link>
        <Link to="/update-user">Update User</Link>
        <Link to="/delete-user">Delete User</Link>
      </nav>
    </header>
  );
}

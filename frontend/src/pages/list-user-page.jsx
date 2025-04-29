import { useState, useEffect } from "react";
import { getAllUsers } from "../services/user-service";
import UserTable from '../components/user-table'
import { handleApiError } from "../utils/handle-api-exceptions"; 

export default function ListUsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers(); 
        setUsers(data);
      } catch (err) {
        const errorMessage = handleApiError(err);
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading Users...</div>;
  if (error) return <div style={{ color: "red", textAlign: "center" }}>{error}</div>;

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>User List</h1>
      <UserTable users={users} />
    </div>
  );
}
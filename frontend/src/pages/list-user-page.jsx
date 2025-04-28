import { useState, useEffect } from "react";
import { getAllUsers } from "../services/user-service";
import UserTable from '../components/user-table'

export default function ListUsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers(); 
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading Users...</div>;
  if (error) return <div>Error while loading users: {error}</div>;

  return (
    <div>
      <h1>User List</h1>
      <UserTable users={users} />
    </div>
  );
}
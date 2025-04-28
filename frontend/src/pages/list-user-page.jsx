import { useState, useEffect } from "react";
import axios from "axios";
import UserTable from '../components/user-table'

export default function ListUsersPage() {
  const [users, setUsers] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);  

  useEffect(() => {
    axios.get("http://localhost:3001/users")  
      .then((response) => {
        setUsers(response.data);  
        setLoading(false);  
      })
      .catch((error) => {
        setError(error.message);  
        setLoading(false);  
      });
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
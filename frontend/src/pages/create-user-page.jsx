import { useState } from "react";
import UserForm from "../components/user-form";

export default function AddUserPage() {
  const [error, setError] = useState(null);  
  const [success, setSuccess] = useState(null);  

  const handleSuccess = (message) => {
    setSuccess(message);
    setError(null);  
  };


  const handleError = (message) => {
    setError(message);
    setSuccess(null);  
  };

  return (
    <div>
      <h1>Add new user</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <UserForm onSuccess={handleSuccess} onError={handleError} />
    </div>
  );
}
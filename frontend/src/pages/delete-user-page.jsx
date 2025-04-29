import { useState } from "react";
import { deleteUser } from "../services/user-service";
import DeleteUserForm from "../components/delete-user-form";
import { handleApiError } from "../utils/handle-api-exceptions"; 

export default function DeleteUserPage() {
  const [inputId, setInputId] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!inputId) {
      setError("User ID is required!");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await deleteUser(inputId);
      setMessage(response.message || "User deleted successfully!");
      setInputId(""); 
    } catch (err) {
      console.error(err);
      const errorMessage = handleApiError(err);  
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <DeleteUserForm
      inputId={inputId}
      setInputId={setInputId}
      handleSubmit={handleSubmit}
      loading={loading}
      error={error}
      message={message}
    />
  );
}
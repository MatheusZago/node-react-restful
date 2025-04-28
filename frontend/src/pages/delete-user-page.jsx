import { useState } from "react";
import { deleteUser } from "../services/user-service";
import DeleteUserForm from "../components/user-delete-form";

export default function DeleteUserPage() {
  const [inputId, setInputId] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!inputId) return;

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await deleteUser(inputId);
      setMessage(response.message || "User deleted successfully!");
    } catch (err) {
      console.error(err);
      setError("Failed to delete user. Please check the ID.");
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
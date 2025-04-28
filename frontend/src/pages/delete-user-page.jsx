import { useState } from "react";
import { deleteUser } from "../services/user-service";

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
    <div>
      <h1>Delete User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Insert user Id"
          value={inputId}
          onChange={(e) => setInputId(e.target.value)}
        />
        <button type="submit">Delete</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
}

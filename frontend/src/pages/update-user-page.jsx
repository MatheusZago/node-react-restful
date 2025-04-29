import { useState } from "react";
import { getUserById, updateUser } from "../services/user-service";
import UserUpdateForm from "../components/update-user-form";
import "../components/css/forms.css";
import { handleApiError } from "../utils/handle-api-exceptions"; 

export default function UpdateUser() {
  const [id, setid] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setUser(null);

    if (!id) return;

    try {
      setLoading(true);
      const userData = await getUserById(id);
      setUser(userData);
    } catch (err) {
      const friendly = handleApiError(err);
      setError(friendly);
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdate(updatedData) {
    setError(null);
    setSuccess(null);

    try {
      await updateUser(id, updatedData);
      setSuccess("User updated successfully!");
    } catch (err) {
      const friendly = handleApiError(err);
      setError(friendly);
    }
  }

  return (
    <div>
      <h1>Update User</h1>

      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Enter user ID"
          value={id}
          onChange={(e) => setid(e.target.value)}
        />
        <button type="submit">Find User</button>
      </form>

      {loading && <p>Loading user...</p>}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      {success && <p style={{ color: "green", textAlign: "center" }}>{success}</p>}

      {user && (
        <UserUpdateForm user={user} onSubmit={handleUpdate} />
      )}
    </div>
  );
}
import { useState } from "react";
import { createUser } from "../services/user-service";
import CreateUserForm from "../components/create-user-form";
import { handleApiError } from "../utils/handle-api-exceptions"; 

export default function CreateUserPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!name || !email) {
      setError("Name and Email are required!");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await createUser({ name, email });
      setMessage(response.message || "User created successfully!");
      setName("");
      setEmail("");
    } catch (err) {
      console.error(err);
      const errorMessage = handleApiError(err);  // Aqui!
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <CreateUserForm
      name={name}
      email={email}
      setName={setName}
      setEmail={setEmail}
      handleSubmit={handleSubmit}
      loading={loading}
      error={error}
      message={message}
    />
  );
}
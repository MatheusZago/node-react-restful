import { useState } from "react";
import { createUser } from "../services/user-service"

export default function UserForm({ onSuccess, onError }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = { name, email };

    try {
      const newUser = await createUser(userData);
      onSuccess("User created successfully!");  
      setName("");
      setEmail("");
    } catch (error) {
      onError("Failed to create user: " + error.message);  
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Create User</button>
    </form>
  );
}
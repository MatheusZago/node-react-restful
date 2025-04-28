import { useState } from "react";
import axios from "axios";

export default function UserForm({ onSuccess, onError }) {
  const [name, setName] = useState("");  
  const [email, setEmail] = useState(""); 

  const handleSubmit = (event) => {
    event.preventDefault(); 

    axios.post("http://localhost:3001/users", { name, email })
      .then((response) => {
        onSuccess("User created.");  
        setName("");  
        setEmail("");  
      })
      .catch((error) => {
        onError("Error while creating user: " + error.message);  
      });
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
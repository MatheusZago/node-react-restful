import { useState } from "react";
import "./css/forms.css";

export default function UserUpdateForm({ user, onSubmit }) {
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ name, email });
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <input 
          type="text" 
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input 
          type="email" 
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Update User</button>
    </form>
  );
}
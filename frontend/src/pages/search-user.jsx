import { useState } from "react";
import { getUserById } from "../services/user-service"; 
import UserDetails from "../components/user-details";
import "../components/css/forms.css"
import { handleApiError } from "../utils/handle-api-exceptions"; 

export default function FindUserById() {
  const [id, setId] = useState("");
  const [user, setUser] = useState(null);    
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();  
    if (!id) return;   

    setLoading(true);
    setError(null);

    getUserById(id)  
      .then((response) => {
        setUser(response);  
      })
      .catch((err) => {
        setUser(null);
        const friendly = handleApiError(err);
        setError(friendly);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div>
      <h1>Search User</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <input 
          type="text" 
          placeholder="Insert user Id" 
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      {user && <UserDetails user={user} />}
    </div>
  );
}
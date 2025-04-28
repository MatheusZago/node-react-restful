import { useState } from "react";
import axios from "axios";
import UserDetails from "../components/user-details"

export default function FindUserById() {
    const [inputId, setInputId] = useState("");  // Para guardar o valor digitado
    const [user, setUser] = useState(null);       // Para guardar o usuário retornado
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null);
  
    function handleSubmit(event) {
      event.preventDefault();  // Para não recarregar a página
      if (!inputId) return;    // Se o campo estiver vazio, não faz nada
  
      setLoading(true);
      setError(null);
  
      axios.get(`http://localhost:3001/users/${inputId}`)
        .then((response) => {
          setUser(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setUser(null);
          setError("User not found or error.");
          setLoading(false);
        });
    }
  
    return (
      <div>
        <h1>Search User</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Insert user Id" 
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
  
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {user && <UserDetails user={user} />}
      </div>
    );
  }
import "./css/forms.css";

export default function DeleteUserForm({ 
    inputId, 
    setInputId, 
    handleSubmit, 
    loading, 
    error, 
    message 
  }) {
    return (
      <div>
        <h1>Delete User</h1>
        <form onSubmit={handleSubmit} className="form-container">
          <input
            type="text"
            placeholder="Insert user Id"
            value={inputId}
            onChange={(e) => setInputId(e.target.value)}
          />
          <button type="submit" style={{ backgroundColor: "rgb(169, 63, 62)", color: "white" }}>Delete</button>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {message && <p style={{ color: "green" }}>{message}</p>}
        </form>
  
      </div>
    );
  }
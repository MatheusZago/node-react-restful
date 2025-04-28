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
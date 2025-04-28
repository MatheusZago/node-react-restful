import "./css/forms.css";

export default function CreateUserForm({ 
  name, 
  email, 
  setName, 
  setEmail, 
  handleSubmit, 
  loading, 
  error, 
  message 
}) {
  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          placeholder="Insert user name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Insert user email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create User"}
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      {message && <p style={{ color: "green", textAlign: "center" }}>{message}</p>}
    </div>
  );
}
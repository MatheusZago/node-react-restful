import "../components/css/user-details.css"

export default function UserDetails({ user }) {
    if (!user) {
      return <div>User not found...</div>;
    }
  
    return (
      <div className="user-details-container">
        <h1>User details: </h1>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    );
  }
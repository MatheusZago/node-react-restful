export default function UserDetails({ user }) {
    if (!user) {
      return <div>User not found...</div>;
    }
  
    return (
      <div>
        <h1>User details: </h1>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    );
  }
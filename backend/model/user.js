class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name; 
  }

  getEmail() {
    return this.email;  
  }

  setName(name) {
    this.name = name; 
  }

  setEmail(email) {
    this.email = email;  
  }
}

module.exports = User;
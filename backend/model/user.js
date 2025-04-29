class User {
  constructor(id, name, email) {
    this._id = id;
    this._name = name;
    this._email = email;
  }

  getId() {
    return this._id;
  }

  getName() {
    return this._name; 
  }

  getEmail() {
    return this._email;  
  }

  setName(name) {
    this._name = name; 
  }

  setEmail(email) {
    this._email = email;  
  }
}

module.exports = User;
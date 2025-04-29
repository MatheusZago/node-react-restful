class UserDTO {
  constructor(user) {
    this.name = user.name;
    this.email = user.email;
  }

  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }
}

module.exports = UserDTO;
const User = require('../model/user');
const UserDTO = require('../model/dto/user-dto');

const userToDTO = (user) => {
  return new UserDTO({
      name: user.getName(),  
      email: user.getEmail()  
  });
};
const dtoToUser = (userDTO) => {
  return new User(null, userDTO.getName(), userDTO.getEmail());
}

module.exports = {
  userToDTO,
  dtoToUser
}
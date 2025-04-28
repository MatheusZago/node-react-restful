const userRepository = require('../repositories/user-repository');

const createUser = async (name, email) => {
    const newUser = await userRepository.createUser(name, email);
    return newUser;
}

module.exports = {createUser}
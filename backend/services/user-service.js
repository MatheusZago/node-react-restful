const userRepository = require('../repositories/user-repository');
const { validateUser, validateId } = require('../validations/user-validation');
const NotFoundException = require('../exceptions/not-found-exception');
const UserConverter = require('../utils/user-converter');

const createUser = async (userDTO) => {
    validateUser(userDTO.getName(), userDTO.getEmail());


    const user = UserConverter.dtoToUser(userDTO);

    const createdUser = await userRepository.createUser(user);
    

    return UserConverter.userToDTO(createdUser);
};

const getUsers = async () => {
    const users = await userRepository.getUsers();

    return users.map(user => UserConverter.userToDTO(user));
};

const getUserById = async (id) => {
    validateId(id);

    const user = await userRepository.getUserByid(id);

    if (!user) {
        throw new NotFoundException(`User with id ${id} not found`);
    }

    return UserConverter.userToDTO(user);
};

const updateUser = async (userDTO) => {
    validateId(userDTO.getId());
    validateUser(userDTO.getName(), userDTO.getEmail());

    const userEntity = UserConverter.dtoToUser(userDTO);

    const updatedUser = await userRepository.updateUser(userEntity);

    if (!updatedUser) {
        throw new NotFoundException(`User with id ${userDTO.getId()} not found`);
    }

    return UserConverter.userToDTO(updatedUser);
};

const deleteUser = async (id) => {
    validateId(id);

    const result = await userRepository.deleteUser(id);

    if (result === 0) {
        throw new NotFoundException(`User with id ${id} not found`);
    }

    return { message: `User with id ${id} deleted successfully.` };
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};
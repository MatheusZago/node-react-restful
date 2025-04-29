const userRepository = require('../repositories/user-repository');
const { validateUser, validateId } = require('../validations/user-validation');
const NotFoundException = require('../exceptions/not-found-exception');
const UserConverter = require('../utils/user-converter');

const createUser = async (userDTO) => {
    validateUser(userDTO.getName(), userDTO.getEmail());

    const user = UserConverter.dtoToUser(null, userDTO);
    const createdUser = await userRepository.createUser(user);

    return UserConverter.userToDTO(createdUser);
};

const getUsers = async () => {
    return await userRepository.getUsers();
};

const getUserById = async (id) => {
    validateId(id);

    const user = await userRepository.getUserByid(id);

    if (!user) {
        throw new NotFoundException(`User with id ${id} not found`);
    }

    return UserConverter.userToDTO(user);
};

const updateUser = async (id, userDTO) => {
    validateId(id);  // Valida o id
    validateUser(userDTO.getName(), userDTO.getEmail());  // Valida os dados do usuário

    // Passando o id diretamente para o dtoToUser para garantir a criação do User corretamente
    const userEntity = UserConverter.dtoToUser(id, userDTO);

    // Tentando atualizar o usuário no repositório
    const updatedUser = await userRepository.updateUser(userEntity);

    // Se não encontrar o usuário, lançamos a exceção
    if (!updatedUser) {
        throw new NotFoundException(`User with id ${id} not found`);
    }

    // Retorna o usuário atualizado como DTO
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
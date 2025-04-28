const userService = require('../services/user-service');

const createUser = async (req, res) => {
    const {name, email} = req.body;

    const newUser = await userService.createUser(name, email);
    res.status(201).json({id: newUser, name, email})
}

const getUsers = async (req, res) => {
    try{
        const users = await userService.getUsers();
        res.status(200).json(users);
    }catch(error){
        next(error);
    }
}

const getUserById = async (req, res, next) => {
    const { id } = req.params;
    try{ 
        const user = await userService.getUserById(id);
        res.status(200).json(user);
    }catch (error) {
        next(error);
    }
}

const updateUser = async (req, res, next) => {
    const { id } = req.params;
    const { email, name } = req.body;

    try{
        const user = await userService.updateUser(id, name, email);
        return res.status(200).json(user);
    }catch(error){
        next(error);
    }

}

const deleteUser = async (req, res, next) => {
    const { id } = req.params;

    try{
        const result = await userService.deleteUser(id);
        return res.status(200).json(result);
    } catch(error){
        next(error);
    }

}

module.exports = {
    createUser,
    getUsers, 
    getUserById,
    updateUser,
    deleteUser
}
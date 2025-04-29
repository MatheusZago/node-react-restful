const userService = require('../services/user-service');
const UserDTO = require('../model/dto/user-dto');

class UserController {
    static async createUser(req, res) {
        const { name, email } = req.body;
        const userDTO = new UserDTO({ name, email });

        const newUser = await userService.createUser(userDTO);

        res.status(201).json({
            name: newUser.getName(), 
            email: newUser.getEmail()  
        });
    }

    static async getUsers(req, res) {
        const users = await userService.getUsers();
        res.status(200).json(users);
    }

    static async getUserById(req, res) {
        const { id } = req.params;
        const user = await userService.getUserById(id);
        res.status(200).json(user);
    }

    static async updateUser(req, res, next) {
        const { id } = req.params;
        const { email, name } = req.body;
        const userDTO = new UserDTO({ id, name, email });

        const user = await userService.updateUser(userDTO);
        return res.status(200).json(user);
    }

    static async deleteUser(req, res, next) {
        const { id } = req.params;
        const result = await userService.deleteUser(id);
        return res.status(200).json(result);
    }
}

module.exports = UserController;
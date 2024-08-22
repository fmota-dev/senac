import { hashPassword } from "../services/bcrypt.js";
import { UserRepository } from "../repositories/user.repository.js";

export class UserController {
  constructor() {
    this.userRepository = new UserRepository();
  }

  create = async (req, res) => {
    try {
      const userPayload = req.body;

      const hashedPassword = await hashPassword(userPayload.password);
      userPayload.password = hashedPassword;

      const newUser = await this.userRepository.create(userPayload);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  findAll = async (req, res) => {
    try {
      const users = await this.userRepository.findAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  findById = async (req, res) => {
    try {
      const user = await this.userRepository.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  update = async (req, res) => {
    try {
      const userPayload = req.body;
      const updatedUser = await this.userRepository.update(
        req.params.id,
        userPayload
      );
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  delete = async (req, res) => {
    try {
      const deletedUser = await this.userRepository.delete(req.params.id);
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}

import * as yup from "yup";
import { UserRepository } from "../repositories/user.repository.js";

const userRepository = new UserRepository();

export const userSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
  phone: yup.string().nullable(true),
});

export const validateUserPayload = async (req, res, next) => {
  try {
    await userSchema.validate(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const checkEmailUnique = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await userRepository.findUserByEmail(email);
    if (user) {
      return res.status(400).json({ message: "Email already in use" });
    }
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

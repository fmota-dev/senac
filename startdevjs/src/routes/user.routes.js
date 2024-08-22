import { UserController } from "../controllers/user.controller.js";
import {
  validateUserPayload,
  checkEmailUnique,
} from "../middlewares/user.middleware.js";

const userRoutes = (app) => {
  const userController = new UserController();

  app.post(
    "/users",
    validateUserPayload,
    checkEmailUnique,
    userController.create
  );
  app.get("/users", userController.findAll);
  app.get("/users/:id", userController.findById);
  app.put("/users/:id", userController.update);
  app.delete("/users/:id", userController.delete);
};

export default userRoutes;

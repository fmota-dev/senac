import { prisma } from "../services/prisma.js";

export class UserRepository {
  async createUser(userPayload) {
    return await prisma.user.create({
      data: userPayload,
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
        password: false,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  async updateUser(id, userPayload) {
    return await prisma.user.update({
      where: { id },
      data: userPayload,
    });
  }

  async deleteUser(id) {
    return await prisma.user.delete({ where: { id } });
  }

  async findUserById(id) {
    return await prisma.user.findUnique({ where: { id } });
  }

  async findUserByEmail(email) {
    return await prisma.user.findUnique({ where: { email } });
  }

  async findAllUsers() {
    return await prisma.user.findMany();
  }
}

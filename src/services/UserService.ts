import { sign } from "jsonwebtoken";
import bcrypt, { hash } from "bcrypt";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export const registerUser = async (user: User) => {
  try {
    const hash = await bcrypt.hash(user.password, 10);
    const result = await prisma.user.create({
      data: {
        ...user,
        password: hash,
      },
      select: {
        id: true,
      },
    });

    const token = sign(result, "SECRETO", { expiresIn: "5m" });

    return token;
  } catch (error) {
    console.log(error);
  }
};

export const getUserById = async (id: number) => {
  try {
    const result = await prisma.post.findUnique({
      where: { id },
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (user: Pick<User, "email" | "password">) => {
  const userFound = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  });

  if (!userFound) return null;

  const isPasswordValid = await bcrypt.compare(
    user.password,
    String(userFound?.password)
  );

  if (!isPasswordValid) {
    return null;
  }

  const token = sign(userFound, "SECRETO", { expiresIn: "5m" });

  return {
    token,
  };
};

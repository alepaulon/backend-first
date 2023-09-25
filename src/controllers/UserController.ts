import { Router } from "express";
import { registerUser } from "../services/UserService";
import { sign } from "jsonwebtoken";

const UserController = Router();

// Obtener los usuarios

// Crear un usuario
UserController.post("/register", async (req, res) => {
  const user = req.body;

  // Validaciones
  if (!user.email || user.email.length < 10) {
    res.status(400).json({ message: "Inserte un mail correcto" });
  }

  const createdUser = await registerUser(user);

  // Genera un token JWT para el usuario autenticado
  const token = sign({ user: user }, "clavesupersegura123", {
    expiresIn: "2h",
  });
  console.log(token);

  return res
    .status(createdUser ? 201 : 500)
    .json(
      createdUser
        ? { message: "Creado exitosamente" }
        : { message: "Ocurrió un problema intente mas tarde" }
    );
});

export default UserController;

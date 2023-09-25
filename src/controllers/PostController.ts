import { Router } from "express";
import { createPost } from "../services/PostService";

const PostController = Router();

// test
PostController.get("/test", (req, res) => {
  console.log("Mostrando TEST");
});

// Obtener las publicaciones

// Crear una publicación
PostController.post("/", async (req, res) => {
  const post = req.body;

  // Validaciones
  if (!post.content || post.content.length < 10) {
    res
      .status(400)
      .json({ message: "Los datos no son correctos por favor verificarlos" });
  }

  const createdPost = await createPost(post);

  return res
    .status(createdPost ? 201 : 500)
    .json(
      createdPost
        ? { message: "Creado exitosamente" }
        : { message: "Ocurrió un problema intente mas tarde" }
    );
});

export default PostController;

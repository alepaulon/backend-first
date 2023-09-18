import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  paginateProducts,
  updateProduct,
} from "./service";

const productRoute = Router();

productRoute.get("/", (req, res) => {
  res.json(getAllProducts());
});

productRoute.delete("/:id", (req, res) => {
  const id = req.params.id;
  const hasRemoved = deleteProduct(Number(id));

  if (hasRemoved) {
    res.json({
      message: "Product succesfully removed",
    });
  } else {
    res.status(404).json({
      message: "Cannot remove product",
    });
  }
});

productRoute.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  res.json(getProductById(id));
});

productRoute.post("/", (req, res) => {
  const hasCreated = createProduct(req.body);
  if (hasCreated) {
    res.status(201).json({ message: "Product succesfully created" });
  } else {
    res.status(400).json({
      message: "Unexpected error creating the product. Please, try again.",
    });
  }
});

productRoute.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const updatedProduct = req.body;

  const hasUpdated = updateProduct(id, updatedProduct);

  if (hasUpdated) {
    res.json({ message: "Product succesfully updated" });
  } else {
    res.status(404).json({
      message: "Unexpected error updating the product. Please, try again.",
    });
  }
});

productRoute.get("/", (req, res) => {
  const items = req.query.items;
  const currentPage = req.query.currentPage;

  if (!items || !currentPage) {
    res.status(400).json({
      message: "items and currentPage is required",
    });
  }
  const paginateResult = paginateProducts(Number(items), Number(currentPage));
  res.json(paginateResult);
});

export default productRoute;

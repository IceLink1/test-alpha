import { Router } from "express";
import ProductController from "./product.controller.js";

const productRouter = Router();

productRouter.get("/", ProductController.getAll);
productRouter.get("/:id", ProductController.getById);
productRouter.post("/", ProductController.create);

export default productRouter;

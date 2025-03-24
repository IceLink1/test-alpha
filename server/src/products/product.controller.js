import Product from "../models/Product.model.js";

class ProductController {
  constructor() {}

  static async create(req, res) {
    try {
      const { title, description, image, price } = req.body;
      if (title && description && price) {
        const product = {
          title,
          description,
          image,
          price ,
        };
        const newProduct = await Product.create(product);
        return res.json(newProduct);
      }
      return res.json({ message: "title or description or image not found !" }).status(400);
    } catch (error) {
      console.log(error);
    }
  }

  static async getAll(req, res) {
    const products = await Product.find();
    return res.json(products);
  }
  static async getById(req, res) {
    const { id } = req.params;
    const product = await Product.findById(id);
    return res.json(product);
  }
}

export default ProductController;

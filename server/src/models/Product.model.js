import { model, Schema } from "mongoose";

const Product = Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: {
      type: String,
      default:
        "https://d1xv5jidmf7h0f.cloudfront.net/circleone/images/products_gallery_images/blank-banner_04555404202211.jpg",
    },
    price: { type: String, required: true },
  },
  { timestamps: true }
);

export default new model("Product", Product);

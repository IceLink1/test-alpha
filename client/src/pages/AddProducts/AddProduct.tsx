import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./AddProduct.scss";
import { useAppDispatch } from "../../store/store";
import { createProduct } from "../../store/Products/ProductsAction";

export default function AddProduct() {
  const [title, setTitle] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>("");
  const [price, setPrice] = React.useState<string>("");
  const [image, setImage] = React.useState<string>(
    "https://d1xv5jidmf7h0f.cloudfront.net/circleone/images/products_gallery_images/blank-banner_04555404202211.jpg"
  );
  const dispatch = useAppDispatch();

  const create = () => {
    if (title.trim() && description.trim() && price.trim()) {
      dispatch(createProduct({ title, description, price, image }));
      setTitle("");
      setDescription("");
      setPrice("");
    }else{
      alert("Заполните все поля!")
    }
  };

  return (
    <div className="AddProduct">
      <form>
        <TextField
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <TextField
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <TextField
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <TextField
          type="text"
          placeholder="Image"
          onChange={(e) => setImage(e.target.value)}
          value={image}
        />
        <Button onClick={create} variant="contained">
          Create
        </Button>
      </form>
      <img src={image} alt="" />
    </div>
  );
}

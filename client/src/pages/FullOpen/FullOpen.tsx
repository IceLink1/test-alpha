import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link, useParams } from "react-router-dom";
import "./FullOpen.scss";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchProductsById } from "../../store/Products/ProductsAction";

export default function FullOpen() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector((state) => state.product);

  const [favorites, setFavorites] = React.useState<number[]>([]);

  React.useEffect(() => {
    dispatch(fetchProductsById(`${id}`));
  }, []);

  const AddToFavorites = () => {
    if (favorites.includes(products[0]?._id)) {
      setFavorites(favorites.filter((item) => item !== products[0]?._id));
    } else {
      setFavorites([...favorites, products[0]?._id]);
    }
  };

  return (
    <div className="FullOpen">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Link to="/">
            <Button variant="contained" color="primary">
              Back
            </Button>
          </Link>

          <Card sx={{ maxWidth: 900 }} className="Card">
            <CardActions>
              <img src={products[0]?.image} alt="" />
              <div className="moreInfo">
                <h1>{products[0]?.title}</h1>
                <h3>Description: {products[0]?.description}</h3>
                <h3>Price: {products[0]?.price}</h3>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={AddToFavorites}
                >
                  <FavoriteIcon
                    color={
                      favorites.includes(products[0]?._id) ? "error" : "inherit"
                    }
                  />
                </Button>
              </div>
            </CardActions>
          </Card>
        </>
      )}
    </div>
  );
}

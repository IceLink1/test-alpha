import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  description: string;
  image: string;
  _id: number;
}

export default function MyCard(props: CardProps) {
  const [favorites, setFavorites] = React.useState<number[]>([]);

  const AddToFavorites = () => {
    if (favorites.includes(props._id)) {
      setFavorites(favorites.filter((item) => item !== props._id));
    } else {
      setFavorites([...favorites, props._id]);
    }
  };
  return (
    <Card sx={{ maxW_idth: 600 }}>
      <Link to={`/product/${props._id}`}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={props.image} alt="" />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              {props.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button variant="contained" color="primary" onClick={AddToFavorites}>
          <FavoriteIcon
            color={favorites.includes(props._id) ? "error" : "inherit"}
          />
        </Button>
      </CardActions>
    </Card>
  );
}

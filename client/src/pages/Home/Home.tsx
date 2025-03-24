import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import MyCard from "../../components/Card/Card";
import "./Home.scss";
import { fetchProducts } from "../../store/Products/ProductsAction";


export default function Home() {
  const dispatch = useAppDispatch();
  const { products, loading } = useAppSelector((state) => state.product);

  React.useEffect(() => {
    dispatch(fetchProducts()).then(() => {});
  }, []);

  return (
    <section>
      <div className="container">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {products.map((product) => (
              <MyCard
                key={product._id}
                _id={product._id}
                title={product.title}
                description={product.description}
                image={product.image}
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
}

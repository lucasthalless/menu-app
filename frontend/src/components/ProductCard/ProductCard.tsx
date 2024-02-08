import { Link } from "react-router-dom";
import "./style.scss";

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

export function ProductCard(product: Product) {
  return (
    <div className="product-card">
      <Link to={`/product-details/${product.id}`}>
        <div
          className="product-card-image"
          style={
            product.imageUrl != ""
              ? { backgroundImage: `url(${product.imageUrl})` }
              : { backgroundColor: "gray" }
          }
        ></div>
        <div className="product-card-text">
          <strong>{product.name}</strong>
          <span>R$ {(product.price / 100).toFixed(2)}</span>
          <p>Clique para mais detalhes</p>
        </div>
      </Link>
    </div>
  );
}

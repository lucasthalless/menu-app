import { Product, ProductCard } from "../ProductCard/ProductCard";
import "./style.scss";

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="products-container">
      {products.map((product: Product) => {
        const { id, price, name, imageUrl } = product;
        return (
          <ProductCard
            key={id}
            id={id}
            price={price}
            name={name}
            imageUrl={imageUrl}
          />
        );
      })}
    </div>
  );
}

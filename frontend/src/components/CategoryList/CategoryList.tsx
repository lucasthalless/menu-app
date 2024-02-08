import { useQuery } from "react-query";
import axios from "axios";

import { ProductList } from "../ProductList/ProductList";
import "./style.scss";
import { Product } from "../ProductCard/ProductCard";

export interface Category {
  id: string;
  name: string;
  parent?: string;
  products: Product[];
  child?: Category[];
}

export function CategoryList() {
  const { data, isLoading } = useQuery("categories", () => {
    return axios.get("http://localhost:3000/category/").then((response) => {
      const categoriesRelated: Category[] = response.data
        .filter(
          (category: Category) =>
            category.parent === "" || category.parent === null
        )
        .map((category: Category) => {
          return {
            ...category,
            child: response.data.filter(
              (childCategory: Category) => childCategory.parent === category.id
            ),
          };
        });
      return categoriesRelated;
    });
  });

  return (
    <section className="category-section">
      {isLoading ? (
        <p>carregando...</p>
      ) : (
        data?.map((category: Category) => {
          return (
            <div key={category.id}>
              <h2>{category.name}</h2>
              {category.child?.length ? (
                category.child.map((childCategory: Category, index: number) => {
                  return (
                    <div key={index}>
                      <h3>{childCategory.name}</h3>
                      {childCategory.products.length ? (
                        <ProductList products={category.products} />
                      ) : (
                        <p>Categoria sem produtos no momento.</p>
                      )}
                    </div>
                  );
                })
              ) : category.products.length ? (
                <ProductList products={category.products} />
              ) : (
                <p>Categoria sem produtos no momento.</p>
              )}
            </div>
          );
        })
      )}
    </section>
  );
}

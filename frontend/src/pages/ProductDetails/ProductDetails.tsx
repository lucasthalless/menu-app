import axios from "axios";
import { useParams } from "react-router-dom";
import { getCookieValue } from "../../utils/cookies";
import { useQuery } from "react-query";
import { Hamburger } from "phosphor-react";
import "./style.scss";

export function ProductDetails() {
  const { id } = useParams();

  const { data, isLoading } = useQuery("product", () => {
    return axios
      .get(`http://localhost:3000/product/${id}`, {
        headers: {
          Authorization: `Bearer ${getCookieValue("auth_token")}`,
        },
      })
      .then((response) => response.data);
  });

  return (
    <main>
      {isLoading ? (
        <div>carregando...</div>
      ) : (
        <section className="product-details">
          <div>
            <h1>{data.name}</h1>
            <div className="product-image">
              {data.imageUrl ? (
                <img src={data.imageUrl} alt="" />
              ) : (
                <Hamburger />
              )}
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              non quis laudantium quia laboriosam quod, vero error beatae
              deserunt quae, cum tempora porro harum praesentium veniam
              molestiae quas repellat earum. Eveniet, asperiores. Quos, dolore!
              Est suscipit voluptatem impedit excepturi vero maxime error
              quibusdam nam ea consequuntur laborum autem accusantium, ut
              consectetur totam modi reprehenderit aspernatur aperiam itaque
              sint commodi! Voluptatum
            </p>
          </div>
        </section>
      )}
    </main>
  );
}

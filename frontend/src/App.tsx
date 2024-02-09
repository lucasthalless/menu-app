import "./styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from "./pages/Products";
import { Error } from "./pages/Error";
import { ProductDetails } from "./pages/ProductDetails";
import { Login } from "./pages/Login/Login";
import { PrivateRoutes } from "./utils/PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/products" index element={<Products />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="*" element={<Error />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import "./styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from "./pages/Products";
import { Error } from "./pages/Error";
import { Header } from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

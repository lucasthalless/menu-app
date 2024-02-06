import "./styles/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Products } from "./pages/Products";
import { Error } from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

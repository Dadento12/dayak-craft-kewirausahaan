import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/home/home";
import ProductDetail from "./component/productDetail";
import Login from "./page/login/login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

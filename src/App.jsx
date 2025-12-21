import HomePage from "./view/HomeView";
import ProductDetail from './component/ProductList'
import Login from './view/LoginView'
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

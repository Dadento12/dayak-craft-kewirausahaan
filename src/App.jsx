import HomePage from "./view/HomeView";
import Login from './view/LoginView'
import UserDashboard from "./view/UserDashboard";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

import HomePage from "./view/HomeView";
import Login from './view/LoginView'
import UserDashboard from "./view/UserDashboard";
import { Routes, Route } from "react-router-dom";
import LoginView from "./view/LoginView";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/dashboard" element={<UserDashboard />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/dashboard" element={ <UserDashboard />}/>
    </Routes>
  );
}

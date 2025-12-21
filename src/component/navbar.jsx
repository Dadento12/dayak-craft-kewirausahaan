import Button from "./ui/button";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-amber-300 shadow-md p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
      <h1 className="text-xl font-bold text-gray-800 text-center sm:text-left">
        Dayak Craft
      </h1>

      <div className="flex w-full sm:w-auto justify-center sm:justify-end">
        <Button
          onClick={() => navigate("/login")}
          className="bg-amber-500 hover:bg-amber-600 text-gray-900 px-6 py-2 rounded-xl font-semibold shadow-md transition duration-200"
        >
          Login
        </Button>
      </div>
    </nav>
  );
}

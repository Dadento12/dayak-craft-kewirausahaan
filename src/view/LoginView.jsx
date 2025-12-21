import { useState } from "react";
import Button from "../component/ui/button";
import Input from "../component/ui/input";

async function handleLogin(username, password) {
  try {
    const backendUrl = "http://localhost:3000/login";
    const response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) throw new Error("Gagal login");
    const data = await response.json();
    console.log("Login sukses:", data);
    return data;
  } catch (error) {
    console.error("Error login:", error);
    return null;
  }
}

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await handleLogin(username, password);
    setLoading(false);

    if (result) {
    //   console.log("Redirect ke dashboard");
      // contoh redirect pakai react-router:
      // navigate('/dashboard');
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 p-6 bg-white shadow-lg rounded-xl max-w-sm mx-auto mt-10"
    >
      <h1 className="text-xl font-bold text-center text-gray-800">Login</h1>

      <Input
        label="Username"
        placeholder="Masukkan username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <Input
        label="Password"
        placeholder="Masukkan password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        type="submit"
        disabled={loading}
        className={`${
          loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        } text-white rounded-lg py-2 transition-all`}
      >
        {loading ? "Loading..." : "Login"}
      </Button>
    </form>
  );
}

export default Login;

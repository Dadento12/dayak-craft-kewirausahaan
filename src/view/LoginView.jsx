  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";


  export default function LoginView() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ username: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
      setError("");
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!form.username || !form.password) {
        setError("Isi semua kolom terlebih dahulu!");
        return;
      }

      // Validasi kredensial dummy
      if (form.username === "@AdminDashboard" && form.password === "12@Danka1299") {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          navigate("/dashboard", { state: { username: form.username } });
        }, 2000);
      } else {
        setError("Username atau password salah!");
      }
    };

    return (
      <div className="flex items-center justify-center min-h-screen bg-amber-50">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 w-80 flex flex-col gap-4 border border-amber-200"
        >
          <h2 className="text-center text-2xl font-bold text-gray-800">
            Login Akun
          </h2>

          {error && (
            <p className="text-red-500 text-sm text-center font-medium">
              {error}
            </p>
          )}

          <div>
            <label className="label font-semibold">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Masukkan username"
              required
            />
          </div>

          <div>
            <label className="label font-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="input input-bordered w-full"
              placeholder="Masukkan password"
              required
            />
          </div>

          <button
            type="submit"
            className="btn bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold mt-2"
            disabled={loading}
          >
            {loading ? "Memproses..." : "Login"}
          </button>

          <button type="reset" className="btn btn-ghost w-full mt-1">
            Reset
          </button>
        </form>
      </div>
    );
  }

// src/view/UserDashboard.jsx
import React, { useEffect, useState } from "react";

/*
  Dashboard sederhana berbasis DaisyUI/Tailwind.
  - Pastikan Tailwind + DaisyUI sudah terpasang dan terkonfigurasi.
  - Komponen ini menggunakan dummy state; ganti dengan fetch ke API jika ada.
*/

function StatCard({ title, value, delta, icon }) {
  return (
    <div className="card bg-base-100 shadow-md p-4">
      <div className="flex items-center gap-4">
        <div className="avatar">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
            {icon}
          </div>
        </div>
        <div className="flex-1">
          <div className="text-sm text-muted">{title}</div>
          <div className="text-2xl font-semibold">{value}</div>
        </div>
        <div className={`text-sm ${delta >= 0 ? "text-success" : "text-error"}`}>
          {delta >= 0 ? `+${delta}%` : `${delta}%`}
        </div>
      </div>
    </div>
  );
}

function ProductRow({ p, onEdit, onDelete }) {
  return (
    <tr className="hover">
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <img src={p.image} alt={p.name} loading="lazy" />
            </div>
          </div>
          <div>
            <div className="font-semibold">{p.name}</div>
            <div className="text-xs text-muted">{p.price}</div>
          </div>
        </div>
      </td>
      <td>{p.category || "Umum"}</td>
      <td>{p.stock ?? "-"}</td>
      <td className="text-right">
        <div className="flex justify-end gap-2">
          <button onClick={() => onEdit(p)} className="btn btn-sm btn-outline">
            Edit
          </button>
          <button onClick={() => onDelete(p)} className="btn btn-sm btn-error">
            Hapus
          </button>
        </div>
      </td>
    </tr>
  );
}

export default function UserDashboard() {
  // Dummy data; nanti ganti fetch ke API
  const [stats, setStats] = useState({
    orders: 124,
    revenue: "Rp 23.400.000",
    customers: 89,
  });

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Gelang Manik Kalimantan",
      price: "Rp 175.000",
      image: "/images/gelang1.jpg",
      category: "Gelang",
      stock: 12,
    },
    {
      id: 2,
      name: "Anyaman Dayak Kecil",
      price: "Rp 95.000",
      image: "/images/anyam1.jpg",
      category: "Anyaman",
      stock: 5,
    },
  ]);

  useEffect(() => {
    // placeholder: di sini bisa fetch('/api/admin/summary') -> setStats(...)
    // dan fetch produk -> setProducts(...)
  }, []);

  const handleEdit = (p) => {
    // contoh: redirect ke page edit atau open modal
    alert(`Edit produk: ${p.name}`);
  };

  const handleDelete = (p) => {
    if (!confirm(`Hapus produk "${p.name}"? Tindakan ini tidak bisa dibatalkan.`)) return;
    setProducts((prev) => prev.filter((x) => x.id !== p.id));
  };

  const handleAddProduct = () => {
    // demo quick add
    const id = Date.now();
    setProducts((prev) => [
      {
        id,
        name: `Produk baru ${id.toString().slice(-4)}`,
        price: "Rp 0",
        image: "/images/placeholder.png",
        category: "Lainnya",
        stock: 0,
      },
      ...prev,
    ]);
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
          <p className="text-sm text-muted">Ringkasan toko dan manajemen produk</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn btn-primary" onClick={handleAddProduct}>
            Tambah Produk
          </button>
          <button className="btn btn-ghost">Export CSV</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard title="Pesanan" value={stats.orders} delta={8} icon={"🧾"} />
        <StatCard title="Pendapatan" value={stats.revenue} delta={12} icon={"💰"} />
        <StatCard title="Pelanggan" value={stats.customers} delta={-2} icon={"🧑‍🤝‍🧑"} />
      </div>

      <div className="card bg-base-100 shadow">
        <div className="card-body">
          <h3 className="card-title">Daftar Produk</h3>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Produk</th>
                  <th>Kategori</th>
                  <th>Stok</th>
                  <th className="text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p) => (
                  <ProductRow key={p.id} p={p} onEdit={handleEdit} onDelete={handleDelete} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <footer className="mt-6 text-xs text-muted">
        <div>Dayak Craft Store — Admin panel (demo)</div>
      </footer>
    </div>
  );
}

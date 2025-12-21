import React, { useEffect, useState } from "react";
import { products as productsData } from "../api/product"; // import produk dummy

// Komponen kartu statistik
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

// Baris produk
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

// Dashboard utama
export default function UserDashboard() {
  const [stats, setStats] = useState({
    orders: 124,
    revenue: "Rp 23.400.000",
    customers: 89,
  });

  const [products, setProducts] = useState(productsData); // pakai produk dari product.js

  useEffect(() => {
    // Placeholder fetch API nanti
    // fetch('/api/admin/summary').then(...setStats)
  }, []);

  const handleEdit = (p) => alert(`Edit produk: ${p.name}`);
  const handleDelete = (p) => {
    if (!confirm(`Hapus produk "${p.name}"? Tindakan ini tidak bisa dibatalkan.`)) return;
    setProducts((prev) => prev.filter((x) => x.id !== p.id));
  };

  const handleAddProduct = () => {
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

  const handleExportCSV = () => {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Nama Produk,Harga,Kategori,Stok\n";
    products.forEach((p) => {
      csvContent += `${p.name},${p.price},${p.category ?? "Umum"},${p.stock ?? 0}\n`;
    });
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "produk_dayakcraft.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 min-h-screen bg-amber-50">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
          <p className="text-sm text-muted">Ringkasan toko dan manajemen produk</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn btn-primary" onClick={handleAddProduct}>
            Tambah Produk
          </button>
          <button className="btn btn-ghost" onClick={handleExportCSV}>
            Export CSV
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <StatCard title="Pesanan" value={stats.orders} delta={8} icon={"🧾"} />
        <StatCard title="Pendapatan" value={stats.revenue} delta={12} icon={"💰"} />
        <StatCard title="Pelanggan" value={stats.customers} delta={-2} icon={"🧑‍🤝‍🧑"} />
      </div>

      {/* Daftar Produk */}
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

      <footer className="mt-6 text-xs text-muted text-center">
        Dayak Craft Store — Admin panel (demo)
      </footer>
    </div>
  );
}

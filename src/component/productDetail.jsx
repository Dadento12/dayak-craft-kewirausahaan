import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../api/product";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const selectedProduct = products.find(
      (item) => item.id === parseInt(id)
    );

    if (!selectedProduct) {
      setError("Produk tidak ditemukan");
    } else {
      setProduct(selectedProduct);
    }

    setLoading(false);
  }, [id]);

  if (loading) return <p className="text-center mt-10">Memuat data...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div
      id={`product-${product.id}`}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6"
    >
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full text-center">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl w-full h-72 object-cover mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {product.name}
        </h1>
        <p className="text-gray-700 mb-3">{product.price}</p>
        <p className="text-gray-600 mb-6">{product.description}</p>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => navigate(product.contact) }
            className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold px-6 py-2 rounded-xl transition-all"
          >
            Beli Sekarang
          </button>
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-xl transition-all"
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { products } from "../api/product";
import Upper from "../component/upper";
import HomeLayout from "../Layout/HomeLayout";
import Product from "../component/Product";

const ITEMS_PER_PAGE = 6;

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    if (Array.isArray(products)) {
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      setDisplayedProducts(products.slice(startIndex, endIndex));
    }
  }, [currentPage]);

  const totalPages = Math.ceil((products?.length || 0) / ITEMS_PER_PAGE);

  if (!Array.isArray(products)) {
    return (
      <HomeLayout>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-red-500">Error: Data produk tidak valid</p>
        </div>
      </HomeLayout>
    );
  }

  return (
    <HomeLayout>
      <Upper />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Produk Kami</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {displayedProducts.map((p) => (
            <Product
              key={p.id}
              id={p.id}
              namaProduk={p.name}
              harga={p.price}
              gambar={p.image}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white border rounded disabled:opacity-50"
            >
              Sebelumnya
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1
                    ? "bg-blue-500 text-white"
                    : "bg-white border"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white border rounded disabled:opacity-50"
            >
              Selanjutnya
            </button>
          </div>
        )}
      </div>
    </HomeLayout>
  );
}

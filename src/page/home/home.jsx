import { useNavigate } from "react-router-dom";
import Navbar from "../../component/navbar";
import { products } from "../../api/product";
import Upper from "../../component/upper";
// import ContactMe from "../../component/contactME";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
    <Navbar></Navbar>
    <Upper></Upper>
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Produk Kami</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/product/${p.id}`)}
            className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-lg p-4 transition"
          >
            <img src={p.image} alt={p.name} className="rounded-lg w-full h-48 object-cover mb-3" />
            <p className="font-semibold text-gray-900">{p.name}</p>
            <p className="text-gray-600">{p.price}</p>
          </div>
        ))}
      </div>

      {/* <ContactMe></ContactMe> */}
    </div>
    </>
  );
}

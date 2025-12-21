import { useNavigate } from "react-router-dom";
import Button from "./ui/button";
import { products } from "../api/product"; 

export default function Product({ id, namaProduk, harga, gambar }) {
  const navigate = useNavigate();

  // Cari data produk sesuai id
  const produk = products.find((item) => item.id === id);

  const handleBuy = () => {
    if (produk && produk.contact) {
      window.open(produk.contact, "_blank");
    } else {
      console.error("Kontak WhatsApp untuk produk ini belum diset.");
    }
  };

  return (
    <div
      id={`product-${id}`}
      className="flex flex-col items-center bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-all w-full max-w-sm mx-auto"
    >
      <img
        src={gambar}
        alt={namaProduk}
        className="rounded-xl w-full h-full object-cover mb-3"
      />
      <p className="text-gray-900 font-semibold text-lg">{namaProduk}</p>
      <p className="text-gray-700 mb-3">{harga}</p>
      <Button
        onClick={handleBuy}
        className="bg-amber-400 hover:bg-amber-500 text-gray-800 font-semibold w-full py-2 rounded-xl"
      >
        Beli
      </Button>
    </div>
  );
}

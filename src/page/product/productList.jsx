import Product from "../../component/product";
import Button from "../../component/ui/button";
import { products } from "../../api/product";

function handleBuy(productName) {
  console.log(`Transaksi berhasil: ${productName}`);
  alert(`Kamu membeli produk: ${productName}`);
}

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((data) => (
        <div
          key={data.id}
          className="flex flex-col items-center bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-all duration-300"
        >
          <Product
            gambar={data.image}
            harga={data.price}
            namaProduk={data.name}
          />
          <Button
            className="bg-amber-400 hover:bg-amber-500 mt-3 text-gray-900 font-semibold py-2 px-4 rounded-xl"
            onClick={() => handleBuy(data.name)}
          >
            Beli
          </Button>
        </div>
      ))}
    </div>
  );
}

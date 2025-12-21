import Button from "./ui/button";
import DayakCraftLogo from "../assets/logo/logo.png";
import { useNavigate } from "react-router-dom";

export default function Upper() {
  const navigate = useNavigate();

  return (
    <section className="w-full h-auto flex flex-col md:flex-row items-center justify-between p-8 bg-amber-50">
      {/* Kolom 1: teks dan tombol */}
      <div className="flex-1 flex flex-col gap-4 md:pr-8 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-900">
          Warisan Budaya Dalam Setiap Karya
        </h1>
        <p className="text-gray-700 text-lg">
          Temukan keindahan dan makna filosofis dalam setiap kerajinan tangan
          khas Suku Dayak yang dibuat dengan penuh ketelitian dan penghayatan.
        </p>
        <p>
          Setiap produk yang tersedia dibuat langsung dengan tangan oleh sang
          pengrajin sehingga kualitas tidak perlu dipertanyakan.
        </p>
      </div>

      {/* Kolom 2: elemen bulat dekoratif */}
      <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-amber-400 rounded-full shadow-xl flex items-center justify-center overflow-hidden">
          <img
            src={DayakCraftLogo}
            alt="Logo Dayak Craft"
            className="w-56 h-56 object-contain"
          />
        </div>
      </div>
    </section>
  );
}

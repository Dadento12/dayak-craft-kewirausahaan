import Button from './ui/button'
import DayakCraftLogo from '../assets/logo/logo.png'

export default function Upper() {
  return (
    <section className="w-full h-auto flex flex-col md:flex-row items-center justify-between p-8 bg-amber-50">
      
      {/* Kolom 1: teks dan tombol */}
      <div className="flex-1 flex flex-col gap-4 md:pr-8 text-center md:text-left">
        <h1 className="text-4xl font-bold text-gray-900">
          Warisan Budaya Dalam Setiap Karya
        </h1>
        <p className="text-gray-700 text-lg">
          Temukan keindahan dan makna filosofis dalam setiap kerajinan tangan khas Suku Dayak yang dibuat dengan penuh ketelitian dan penghayatan.
        </p>
        <p>
          Setiap produk yang tersedia di buat langsung dengan tangan oleh sang pengrajin sehingga kualitasi tidak perlu dipertanyakan.
        </p>
        {/* <div className="flex gap-4 justify-center md:justify-start mt-4">
          <Button className="bg-amber-400 hover:bg-amber-500 text-gray-900 px-6 py-2 rounded-xl">
            Cari Produk
          </Button>
          <Button className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-xl">
            Tentang Kami
          </Button> */}
      {/* </div> */}
      </div>

      {/* Kolom 2: elemen bulat dekoratif */}
      <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
        <div className="w-64 h-64 md:w-80 md:h-80 bg-amber-400 rounded-full shadow-xl flex items-center justify-center text-white font-bold text-xl">
          <img src={DayakCraftLogo} alt="Logo Dayak Craft"/>
        </div>
      </div>

    </section>
  )
}

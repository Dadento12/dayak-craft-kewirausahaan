import gelangManik from '../assets/product/Gelang_Manik_Kalimantan.jpg'
import Kusak from '../assets/product/Kusak Pemanggil Wallet.jpg'

const waUrl = "https://wa.me/"
export const products = [
  {
    id: 1,
    name: "Gelang Manik Kalimantan",
    price: "Rp 75.000",
    description: "Gelang manik-manik berwarna cerah dengan pola khas etnik Dayak.",
    image: gelangManik,
    contact: waUrl+'+6282293530322',
  },
  {
    id: 2,
    name: "Kusak Pemanggil Wallet",
    price: "Rp 320.000",
    description: "Sebuah kusak atau biasa disebut dengan bakul, yang dapat digunakan untuk memanggil burung walet",
    image: Kusak,
    contact: waUrl+'+6282293530322',
  }
];

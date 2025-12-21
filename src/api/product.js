import gelangManik from '../assets/product/produk1.jpg'
import GalangLilis from '../assets/product/produk2.jpg'
import KalungManik from '../assets/product/Yaya_Produk.jpg'

const waUrl = "https://wa.me/"
export const products = [
  {
    id: 1,
    name: "Gelang Manik Kalimantan",
    price: "Rp 175.000",
    description: "Gelang manik-manik berwarna cerah dengan pola khas etnik Dayak.",
    image: gelangManik,
    contact: waUrl+'+6282293530322',
  },
  {
    id: 2,
    name: "Gelang Manik Khas Dayak Ngaju dengan tali Tridatu",
    price: "Rp 100.000",
    description: "Gelang manik khas dayak yang dikombinasikan dengan tali tridatu dari Bali.",
    image: GalangLilis,
    contact: waUrl+'+6282293530322',
  },
  {
    id: 3,
    name: "Kalung manik dengan Lilis Lamiang Buatan Tangan",
    price: "Rp 185.000",
    description: "Kalung manik khas dayak yang dikombinasikan dengan lilis lamiang khas Dayak Kalimantan Tengah. Kalung ini dibuat langsung dengan tangan sehingga kualitasnya dapat dijamin",
    image: KalungManik,
    contact: waUrl+'+6285845652652',
  },
];

export default products;
import { Helmet } from "react-helmet-async";
import Navbar from "../component/navbar";
import Footer from "../component/Footer";

const HomeLayout = ({ children }) => {
  console.log('App loades')
  return (
    <div className="flex flex-col min-h-screen bg-gray-100" data-theme="light">
      <Helmet>
        <title>Dayak Craft Store | Kerajinan Tangan Khas Kalimantan</title>
        <meta
          name="description"
          content="Temukan kerajinan tangan khas suku Dayak: anyaman, ukiran, gelang, dan perhiasan etnik dari pengrajin lokal Kalimantan."
        />
        <meta
          name="keywords"
          content="Dayak, kerajinan tangan, Kalimantan, etnik, souvenir, ukiran, anyaman"
        />
        <meta property="og:title" content="Dayak Craft Store" />
        <meta
          property="og:description"
          content="Jelajahi produk etnik khas Dayak — hasil karya tangan pengrajin lokal Kalimantan."
        />
        <meta
          property="og:image"
          content="https://dayak-craft-kewirausahaan-xbas.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keyword" content="Produk kerajinan dayak ngaju asli"/>
        <meta name="keyword" content="Produk Kerajinan"/>
        <meta name="keyword" content="Kerajinan tangan"/>
        <meta name="keyword" content="Khas dayak"/>
        <link rel="canonical" href="https://dayak-craft-kewirausahaan-xbas.vercel.app/" />
      </Helmet>

      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;

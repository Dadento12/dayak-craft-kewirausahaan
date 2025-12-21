import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const HomeLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100" data-themde="light">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;

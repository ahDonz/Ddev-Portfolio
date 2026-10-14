import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen w-full bg-white text-black">


      <main className="w-full px-2">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};

export default MainLayout;
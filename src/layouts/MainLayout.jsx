import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="main-layout min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

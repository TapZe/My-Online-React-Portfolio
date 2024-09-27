import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <container className="main-layout min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </container>
  );
};

export default MainLayout;

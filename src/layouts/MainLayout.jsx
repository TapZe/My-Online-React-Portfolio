import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTopButton from "../components/ScrollTopButton";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <container className="main-layout min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollTopButton />
    </container>
  );
};

export default MainLayout;

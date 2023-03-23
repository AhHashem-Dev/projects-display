import { Outlet } from "react-router-dom";
import { Footer, Navbar, Sidebar } from "../components";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};
export default Dashboard;

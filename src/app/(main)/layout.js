import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import ProtectedRoute from "../../components/ProtectedRoute";

export const metadata = {
  title: "Game Mano",
  description: "",
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <ProtectedRoute> */}
        <div className="flex min-h-screen text-white">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
        {/* </ProtectedRoute> */}
      </body>
    </html>
  );
}

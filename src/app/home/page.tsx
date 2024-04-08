import Navbar from "@/components/shared/Navbar";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="sticky top-0 z-50 bg-slate-500 bg-opacity-80">
        <Navbar />
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          height: "800px",
        }}
      >
        <h1>This is test</h1>
      </div>
    </div>
  );
};

export default HomePage;

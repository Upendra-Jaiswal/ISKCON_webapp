// src/pages/Home.js
import React from "react";
import banner01 from "./assets/Banner01.jpg";

const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${banner01})`,
        backgroundSize: "cover", // Ensures the image covers the whole div
        backgroundPosition: "center", // Centers the image
      }}
    >
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center"></div>
      </div>
    </div>
  );
};

export default Home;

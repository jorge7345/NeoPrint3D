import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [products, setProducts] = useState([
    {
      id: "001",
      name: "Maceta Decorativa",
      price: 1000,
      category: "Jardinería",
      image: "https://img.freepik.com/psd-gratis/renderizacion-3d-icono-planta_23-2151371070.jpg",
      description: "Hermosa maceta impresa en 3D.",
      stock: 10,
    },
  ]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/admin" element={<Admin isLogged={isLogged} products={products} setProducts={setProducts} />} />
        <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
        <Route path="/product/:id" element={<ProductDetail products={products} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Login from "./components/common/Login";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/modules/Header";
import Us from "./components/modules/Us";
import Contact from "./components/modules/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/fuerza-catolica" element={<Login />} />
        <Route path="/fuerza-catolica/home" element={<Header />} />
        <Route path="/fuerza-catolica/us" element={<Us />} />
        <Route path="/fuerza-catolica/contact" element={<Contact />} />
        <Route path="*" element={<p>Not found 404</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

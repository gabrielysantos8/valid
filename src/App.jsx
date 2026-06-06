import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./Home";
import Artigos from "./Artigos";
import ArtigosConteudo from "./ArtigosConteudo";
import Sobre from "./Sobre";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artigos" element={<Artigos />} />
        <Route path="/artigosConteudo" element={<ArtigosConteudo />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
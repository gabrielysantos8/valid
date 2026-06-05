import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./Home";
import Artigos from "./Artigos";
import ArtigosConteudo from "./ArtigosConteudo";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artigos" element={<Artigos />} />
        <Route path="/artigosConteudo" element={<ArtigosConteudo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
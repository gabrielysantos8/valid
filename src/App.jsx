import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./Home";
import Artigos from "./Artigos";
import ArtigosConteudo from "./ArtigosConteudo";
import Sobre from "./Sobre";
import Perfil from "./Perfil";
import Assinaturas from "./Assinaturas";
import Analise from "./Analise";
import EditarPerfil from "./EditarPerfil";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artigos" element={<Artigos />} />
        <Route path="/artigosConteudo" element={<ArtigosConteudo />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/assinaturas" element={<Assinaturas />} />
        <Route path="/analise" element={<Analise />} />
        <Route path="/editarPerfil" element={<EditarPerfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
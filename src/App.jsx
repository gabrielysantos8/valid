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
import Login from "./Login";
import CriarConta from "./CriarConta";
import EsqueceuSenha from "./EsqueceuSenha";
import EsqueceuSenhaCodigo from "./EsqueceuSenhaCodigo";
import NovaSenha from "./NovaSenha";
import HomeAntesLogin from "./HomeAntesLogin";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<HomeAntesLogin />} />
        <Route path="/artigos" element={<Artigos />} />
        <Route path="/artigosConteudo" element={<ArtigosConteudo />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/assinaturas" element={<Assinaturas />} />
        <Route path="/analise" element={<Analise />} />
        <Route path="/editarPerfil" element={<EditarPerfil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/criarconta" element={<CriarConta />} />
        <Route path="/esqueceuSenha" element={<EsqueceuSenha />} />
        <Route path="/esqueceuSenhaCodigo" element={<EsqueceuSenhaCodigo />} />
        <Route path="/novaSenha" element={<NovaSenha />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
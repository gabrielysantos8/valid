import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import perfil_not from "./assets/img/perfil_not.svg";
import { MdEmail, MdOutlinePassword} from "react-icons/md";
import { FcGoogle } from "react-icons/fc";


function NovaSenha() {

  const navigate = useNavigate();

  const API_URL = "http://localhost:8000";

  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const login = async (e) => {
    e.preventDefault();

    try {
      const resposta = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          senha,
        }),
      });

      const dados = await resposta.json();

      if (dados.status === "erro") {
        alert(dados.mensagem);
        return;
      }

      if (dados.status === "ok") {
        navigate("/inicial");
      }

    } catch (erro) {
      alert("Erro ao conectar com o servidor.");
      console.log(erro);
    }
  };

  
return (
  <div className="login-container">

    <div className="login-row">

      {/* Lado esquerdo */}
      <div className="login-left entrar divbranca">

        <h1 className="textoazul titulo-login">
          Esqueceu sua Senha?
        </h1>
        <p>Verifique o código enviado em seu email para redefinir a senha</p>

        <form onSubmit={login}>

          {/* senha */}
         <div className="divemail">
            <MdOutlinePassword size={20} color="#00A279" />
            <label className="label-field">Digite sua nova senha</label>
         </div>
        <input type="password" className="input" value={senha} onChange={(e) => setSenha(e.target.value)}/>

        <div className="divemail">
          <MdOutlinePassword size={20} color="#00A279" />
          <label className="label-field">Confirme sua nova senha</label>
        </div>
       <input type="password" className="input" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
                 

          <div>
            <Link to="/login" className="btnentrar">
              Redefinir
            </Link>
          </div>    
        </form>
      </div>

      {/* Lado direito */}
      <div className="login-right criarconta divazul">

        <h1 className="textobranco textoleft titulo-cadastro">
          Ainda não tem uma conta?
        </h1>

        <p className="textobranco textoleft">
          Cadastre-se agora e aproveite análises de documentos rápidas, seguras e eficientes!
        </p>

        <Link className="btnbranco" to="/criarconta">
          Criar conta
        </Link>

        <img src={perfil_not} alt="notificacao" className="img_logo_temp" />

      </div>

    </div>
  </div>
);
}

export default NovaSenha;

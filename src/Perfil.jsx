import { useState, useEffect } from "react"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style.css";
import tcc from "./assets/img/tcc.png";
import { FiEdit2, FiLock, FiFileText, FiClock, FiShield } from "react-icons/fi";
import BackToTop from "./components/BackToTop";

function Perfil() {

  // pra api (ajuda do gpt)
  const [usuario, setUsuario] = useState(null); // dados do usuário vazio
  const [loading, setLoading] = useState(true); // quando estiver carregando
  const [erro, setErro]       = useState(null); // caso tenha erro
  const [stats, setStats] = useState({ documentos: 25, ultimaHora: "Hoje, 12:45", ultimoArquivo: "Documento.pdf", taxa: "98,6%"});

  // quando abrir
  useEffect(() => { //BACK BACK BACK
    // fetch("https://sua-api.com/usuario/perfil", {
    //   headers: {
    //     // envia o coiso para autenticar o usuário?
    //     Authorization: `Bearer ${localStorage.getItem("token")}`
    //   }
    // })
    //   .then(res => {
    //     if (!res.ok) throw new Error("Erro ao buscar perfil");
    //     return res.json(); // transforma a resposta em objeto JavaScript
    //   })
    //   .then(data => {
    //     setUsuario(data);  // salva os dados do usuário
    //     setLoading(false); // terminou de carregar
    //   })
    //   .catch(err => {
    //     setErro(err.message); // salva o erro
    //     setLoading(false);    // terminou de carregar (mesmo com erro)
    //   });

    setUsuario({
      nome: "Fulano da Silva",
      email: "fulano.silva@gmail.com",
      fotoUrl: null // vai usar a imagem tcc como fallback
    });
    setLoading(false);

  }, []); 
  if (loading) {
    return (
      <div className="home">
        <Header />
        <p className="perfil_loading">Carregando perfil...</p>
        <Footer />
      </div>
    );
  }

  if (erro) {
    return (
      <div className="home">
        <Header />
        <p className="perfil_erro">Erro: {erro}</p>
        <Footer />
      </div>
    );
  }

  function handleEditarPerfil() {
    console.log("Editar perfil clicado");
  }

  function handleTrocarSenha() {
    console.log("Trocar senha clicado");
  }

  return (
    <div className="home">

      <Header />

      <section className="perfil"> {/*CARD PERFIL */}
        <div className="card_perfil container">

          <div className="card_perfil_esquerda">

            <div className="foto_perfil">
              {/* usuario.fotoUrl = URL da foto que veio do back-end
                  ex: "https://sua-api.com/uploads/foto-123.jpg"
                  Se não tiver foto, mostra uma imagem padrão */}
              <img src={usuario.fotoUrl || tcc} alt="Foto de perfil" />
            </div>

            <div>
              {/* usuario.nome e usuario.email vêm diretamente da resposta da API */}
              <p className="perfil_nome">{usuario.nome}</p>
              <p className="perfil_email">{usuario.email}</p>
            </div>

          </div>

          <div className="card_perfil_direita">
            <button className="btn_perfil" onClick={handleEditarPerfil}>
              <FiEdit2 size={14} />
              Editar perfil
            </button>
            <button className="btn_perfil" onClick={handleTrocarSenha}>
              <FiLock size={14} />
              Trocar senha
            </button>
          </div>

        </div>
      </section>

      <section className="cards_info_perfil container">
        <div className="cards_informacoes">

         {/*  Documentos analisados */}
          <div className="card_stat">
            <div className="card_stat_topo">
              <div className="card_stat_icone">
                <FiFileText size={22} color="#00A279" />
              </div>

              <div>
                {/* virá da API: stats.documentos */}
                <p className="card_stat_numero">{stats.documentos}</p>
                <p className="card_stat_titulo">Documentos analisados</p>
              </div>

            </div>
            <p className="card_stat_legenda">Total de análises realizadas</p>
          </div>

          {/* CARD 2: Última análise */}
          <div className="card_stat">
            <div className="card_stat_topo">
              <div className="card_stat_icone">
                <FiClock size={22} color="#00A279" />
              </div>
              <div>
                {/* virá da API: stats.ultimaHora */}
                <p className="card_stat_numero">{stats.ultimaHora}</p>
                <p className="card_stat_titulo">Última análise realizada</p>
              </div>
            </div>
            {/* virá da API: stats.ultimoArquivo */}
            <p className="card_stat_legenda">{stats.ultimoArquivo}</p>
          </div>

          {/* CARD 3: Taxa de autenticidade */}
          <div className="card_stat">
            <div className="card_stat_topo">
              <div className="card_stat_icone">
                <FiShield size={22} color="#00A279" />
              </div>
              <div>
                {/* virá da API: stats.taxa */}
                <p className="card_stat_numero">{stats.taxa}</p>
                <p className="card_stat_titulo">Taxa de autenticidade média</p>
              </div>
            </div>
            <p className="card_stat_legenda">Últimas taxas</p>
          </div>

        </div>
      </section>          

      <Footer />
      
      <BackToTop />
    </div>
  );
} 

export default Perfil;
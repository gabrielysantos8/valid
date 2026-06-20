import { useState, useEffect } from "react"; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style.css";
import tcc from "./assets/img/tcc.png";
import livro_artigos from "./assets/img/livro_artigos.svg";
import perfil_not from "./assets/img/perfil_not.svg";
import { FiEdit2, FiLock, FiFileText, FiClock, FiShield, FiUser, FiStar,  FiBell  } from "react-icons/fi";
import BackToTop from "./components/BackToTop";
import { Link } from "react-router-dom";

function Perfil() {

  // pra api (ajuda do gpt)
  const [usuario, setUsuario] = useState(null); // dados do usuário vazio
  const [loading, setLoading] = useState(true); // quando estiver carregando
  const [erro, setErro]       = useState(null); // caso tenha erro
  const [stats, setStats] = useState({ documentos: 25, ultimaHora: "Hoje, 12:45", ultimoArquivo: "Documento.pdf", taxa: "98,6%"});
  const [historico, setHistorico] = useState([]);

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

   const usuarioSalvo = localStorage.getItem("usuario");

    if (usuarioSalvo) {
      setUsuario(JSON.parse(usuarioSalvo));
    } else {
      setUsuario({
        nome: "Fulano da Silva",
        email: "fulano.silva@gmail.com",
        telefone: "+55 11 99999-9999",
        dataCadastro: "01/01/2026",
        fotoUrl: null
      });
    }

    setHistorico([
      {
        id: 1,
        nome: "Diploma_universidade.pdf",
        tamanho: "2,4 MB",
        data: "02/02/2026",
        hora: "09:10",
        status: "autentico"
      },
      {
        id: 2,
        nome: "Certificado_curso.pdf",
        tamanho: "1,1 MB",
        data: "03/03/2026",
        hora: "10:09",
        status: "autentico"
      },
      {
        id: 3,
        nome: "Rg_frente.pdf",
        tamanho: "1,8 MB",
        data: "04/04/2026",
        hora: "12:37",
        status: "suspeito"
      },
      {
        id: 4,
        nome: "Historico_escolar.pdf",
        tamanho: "2,2 MB",
        data: "05/05/2026",
        hora: "14:23",
        status: "autentico"
      }
  ]);
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

  function handleVerDetalhes(id) {
    console.log("Abrir análise:", id);
  }

  



  return (
    <div className="home">

      <Header />

      {/*CARD PERFIL */}
      <section className="perfil"> 
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
            <Link to="/editarPerfil" className="btn_perfil" onClick={handleEditarPerfil}>
              <FiEdit2 size={14} />
              Editar perfil
            </Link>
            <Link to="/" className="btn_perfil" onClick={handleTrocarSenha}>
              <FiLock size={14} />
              Trocar senha
            </Link>
          </div>

        </div>
      </section>

    {/* CARD DOS STATUS */}
      <section className="cards_info_perfil container">
        <div className="cards_informacoes">

         {/*  Documentos analisados */}
          <div className="card_stat">
            <div className="card_stat_topo">
              <div className="card_stat_icone">
                <FiFileText size={22} color="#fff" />
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
                <FiClock size={22} color="#fff" />
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
                <FiShield size={22} color="#fff" />
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
      
    {/* CARD DE EDIÇÃO DAS INFORMAÇÕES */}
    <section className="informacoes_perfil container">
      <div className="cards_dados_perfil">

        <div className="card_info">
           <div className="card_info_topo">
              <div className="card_dados_icone">
                <FiUser size={20} color="#00A279" /> 
              </div>
              <h2>Informações pessoais</h2>
               
           </div>  
        
          <div className="card_info_conteudo">
            <div className="card_info_esquerda">
              <div className="info_grid">
                <div className="info_item"> 
                    <span className="info_texto">Nome completo</span> 
                    <span className="info_valor">{usuario.nome}</span> 
                </div>

                  <div className="info_item"> 
                    <span className="info_texto">Email</span> 
                    <span className="info_valor">{usuario.email}</span> 
                </div>

                  <div className="info_item"> 
                    <span className="info_texto">Telefone</span> 
                    <span className="info_valor">{usuario.telefone}</span> 
                </div>

                  <div className="info_item"> 
                    <span className="info_texto">Data de Cadastro</span> 
                    <span className="info_valor">{usuario.dataCadastro}</span> 
                </div>
              </div>    

              
            </div>      

            <div  className="card_info_direita">
               <img src={livro_artigos} alt="livro_artigos" className="img_info" />    

              <Link to="/editarPerfil" className="btn_perfil_info" onClick={handleEditarPerfil}>
                  <FiEdit2 size={20} />
                  Editar Informações
              </Link>
            </div>
           
          </div>
         
         </div>   
         
          <div className="card_dados card_seguranca">
              <div className="card_dados_topo">
                <div className="card_dados_icone card_dados_icone_cheio"> 
                  <FiShield size={20} color="#00A279" /> 
                </div>
                <h2>Segurança</h2>
              </div>

              <Link to="/"  className="item_seguranca" onClick={handleTrocarSenha}>
                  <span className="item_seguranca_titulo">Alterar senha</span> 
                  <span className="item_seguranca_desc">Atualize sua senha de acesso</span> 
              </Link>

              <Link to="/"  className="item_seguranca">
                  <span className="item_seguranca_titulo">Verificação em duas etapas</span> 
                  <span className="item_seguranca_desc">Aumente a segurança da conta</span> 
              </Link>
          </div>     
      </div>

    </section>

    {/* CARD PLANOS E NOTIFICAÇÕES  */}
    <section className="plano_notificacoes container">
      <div className="cards_plano">

        <div className="card_plano">

          <div className="card_plano_topo">
            <FiStar size={18} />
            <h2>Plano atual</h2>
          </div>

          <div className="card_plano_conteudo">
            <div className="plano_info">
              <h3>Plano Pro</h3>
              <p> Aproveite todos os benefícios exclusivos </p>

              <Link to="/assinaturas" className="btn_upgrade">
                  Fazer upgrade
              </Link>
            </div>

            <div className="plano_beneficios">
              <span>✓ Análises ilimitadas</span>
              <span>✓ Relatórios completos</span>
              <span>✓ Suporte prioritário</span>
              <span>✓ Histórico avançado</span>
            </div>
           </div>

        </div>
     {/* notificações */}
        <div className="card_notificacoes">

          <div className="card_plano_topo">
            <FiBell size={18} />
            <h2>Notificações</h2>
          </div>

          <div className="notificacao_info">
            <div>
              <h4>Receber emails</h4>
              <p> Receba notificação de suas análises </p>
            </div>

           <label className="switch_bolinha">
              <input type="checkbox" />
              <span className="not_ligada"></span>
            </label>   
          </div>
          
          <img src={perfil_not} alt="livro_artigos" className="img_notificacao " />
        </div>
      </div>
    </section>

    {/* historico de analises */}
    <section className="historico_analises container">
      <div className="card_historico">
        <div className="historico_topo">
          <div className="historico_titulo">
            <FiClock size={22} />
            <h2>Histórico de análises</h2>
          </div>

          <Link to="/" className="historico_ver_todas">
            Ver todas
          </Link>
        </div>

        <div className="historico_cabecalho">
          <span>Documento</span>
          <span>Data</span>
          <span>Status</span>
          <span>Ações</span>
        </div>

        {historico.map((arquivo) => (

          <div className="historico_item" key={arquivo.id}>
            <div className="historico_documento">
              <FiFileText size={22} />

              <div>
                <p>{arquivo.nome}</p>
                <span>PDF - {arquivo.tamanho}</span>
              </div>

            </div>

            <div className="historico_data">
              <p>{arquivo.data}</p>
              <span>{arquivo.hora}</span>
            </div>

            <div className={arquivo.status === "autentico"? "status_autentico" : "status_suspeito"}>
              {arquivo.status === "autentico" ? "Autêntico" : "Suspeito"}
            </div>

            <button className="btn_historico" onClick={() => handleVerDetalhes(arquivo.id)}>
              Ver detalhes
            </button>

          </div>

        ))}

        <button className="btn_carregar">
          Carregar mais
        </button>

      </div>

    </section>




      <Footer />
      
      <BackToTop />
    </div>
  );
} 

export default Perfil;
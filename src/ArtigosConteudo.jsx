import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import "./style.css";
import artigo_conteudo from"./assets/img/artigoConteudo.svg";
import BackToTop from "./components/BackToTop";

function ArtigosConteudo() {
  return (
    <div className="home">

      <Header />

      <section className="fundoverde">
        <div className="row">

          <div className="col-6">
            <div className="div-texto">
              <p className="text-branco">Nome do artigo <p className="p_banner">Subtitulo do artigo </p></p>
            </div>
          </div>

          <div className="col-6">
            <div className="imgartigos">
              <img src={artigo_conteudo} alt="livro_artigos" />
            </div>
          </div>

        </div>
      </section>

      <section className="container">
          <div className="conteiner_artigo">
            <p className="texto_artigo_conteudo">
              It is a long established fact that a reader will be distracted by the readable content of 
              a page when looking at its layout. The point of using Lorem Ipsum is that it has a 
              more-or-less normal distribution of letters, as opposed to using 'Content here, content 
              here', making it look like readable English. Many desktop publishing packages and web page 
              editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
              will uncover many web sites still in their infancy. Various versions have evolved over the 
              years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>

             <h2 className="artigo_titulo_conteudo">Lorem lorem loremmm</h2>
             <p className="texto_artigo_conteudo">
              It is a long established fact that a reader will be distracted by the readable content of 
              a page when looking at its layout. The point of using Lorem Ipsum is that it has a 
              more-or-less normal distribution of letters, as opposed to using 'Content here, content 
              here', making it look like readable English. Many desktop publishing packages and web page 
              editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
              will uncover many web sites still in their infancy. Various versions have evolved over the 
              years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>

            <blockquote className="artigo_citacao">
              "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
            </blockquote>  

            <h2 className="artigo_titulo_conteudo">Ipsum ipsum ipsummm</h2>
            <p className="texto_artigo_conteudo">
              It is a long established fact that a reader will be distracted by the readable content of 
              a page when looking at its layout. The point of using Lorem Ipsum is that it has a 
              more-or-less normal distribution of letters, as opposed to using 'Content here, content 
              here', making it look like readable English. Many desktop publishing packages and web page 
              editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
              will uncover many web sites still in their infancy. Various versions have evolved over the 
              years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>

            <div className="conteudo_colorido">
              <span className="conteudo_colorido_titulo">Lorem Ipsummmm</span>
              <p className="texto_artigo_conteudo_colorido">
              It is a long established fact that a reader will be distracted by the readable content of 
              a page when looking at its layout. The point of using Lorem Ipsum is that it has a 
              more-or-less normal distribution of letters, as opposed to using 'Content here, content 
              here', making it look like readable English.
              </p>
            </div>

            <div>
              <Link to="/artigos" className="btn-voltar"> ☚ Voltar</Link>
            </div>

          </div>
      </section>


      <Footer />

      <BackToTop />
    </div>

  );
}

export default ArtigosConteudo;
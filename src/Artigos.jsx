import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style.css";
import documento from "./assets/img/documento.png";
import livro_artigos from "./assets/img/livro_artigos.svg";
import { LuFolderGit2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import BackToTop from "./components/BackToTop";

function Artigos() {
  return (
    <div className="home">

      <Header />

      <section className="fundoverde">
        <div className="row">

          <div className="col-6">
            <div className="div-texto">
              <p className="text-branco">Artigos <p className="p_banner">Aprenda os principais sinais de adulteração em documentos </p></p>
            </div>
          </div>

          <div className="col-6">
            <div className="imgartigos">
              <img src={livro_artigos} alt="livro_artigos" />
            </div>
          </div>

        </div>
      </section>

      <section className="container artigosmarbottom">
        <div className="cards-artigos">
          <div className="card_artigos">
            <div className="card_img_artigos"></div>
            <div className="card_body_artigos">
              <div className="card_clique">
                <Link to="/artigosConteudo" className="card_clique_aqui ">Clique Aqui</Link>
                <span className="card_author">Adriano Bendazzoli</span>
              </div>
              <p className="card_titulo_artigos">Como identificar documentos falsos</p>
              <p className="card_desc">Aprenda os principais sinais de falsificação</p>
            </div>
          </div>



          <div className="card_artigos">
            <div className="card_img_artigos"></div>
            <div className="card_body_artigos">
              <div className="card_clique">
                <Link to="/artigosConteudo" className="card_clique_aqui ">Clique Aqui</Link>
                <span className="card_author">Adriano Bendazzoli</span>
              </div>
              <p className="card_titulo_artigos">Como identificar documentos falsos</p>
              <p className="card_desc">Aprenda os principais sinais de falsificação</p>
            </div>
          </div>

          <div className="card_artigos">
            <div className="card_img_artigos"></div>
            <div className="card_body_artigos">
              <div className="card_clique">
                <Link to="/artigosConteudo" className="card_clique_aqui ">Clique Aqui</Link>
                <span className="card_author">Adriano Bendazzoli</span>
              </div>
              <p className="card_titulo_artigos">Como identificar documentos falsos</p>
              <p className="card_desc">Aprenda os principais sinais de falsificação</p>
            </div>
          </div>
        </div>

        <div className="cards-artigos">
          <div className="card_artigos">
            <div className="card_img_artigos"></div>
            <div className="card_body_artigos">
              <div className="card_clique">
                <Link to="/artigosConteudo" className="card_clique_aqui ">Clique Aqui</Link>
                <span className="card_author">Adriano Bendazzoli</span>
              </div>
              <p className="card_titulo_artigos">Como identificar documentos falsos</p>
              <p className="card_desc">Aprenda os principais sinais de falsificação</p>
            </div>
          </div>


          <div className="card_artigos">
            <div className="card_img_artigos"></div>
            <div className="card_body_artigos">
              <div className="card_clique">
                <Link to="/artigosConteudo" className="card_clique_aqui ">Clique Aqui</Link>
                <span className="card_author">Adriano Bendazzoli</span>
              </div>
              <p className="card_titulo_artigos">Como identificar documentos falsos</p>
              <p className="card_desc">Aprenda os principais sinais de falsificação</p>
            </div>
          </div>

          <div className="card_artigos">
            <div className="card_img_artigos"></div>
            <div className="card_body_artigos">
              <div className="card_clique">
                <Link to="/artigosConteudo" className="card_clique_aqui ">Clique Aqui</Link>
                <span className="card_author">Adriano Bendazzoli</span>
              </div>
              <p className="card_titulo_artigos">Como identificar documentos falsos</p>
              <p className="card_desc">Aprenda os principais sinais de falsificação</p>
            </div>
          </div>
        </div>

        <div className="cards-artigos">
          <div className="card_artigos">
            <div className="card_img_artigos"></div>
            <div className="card_body_artigos">
              <div className="card_clique">
                <Link to="/artigosConteudo" className="card_clique_aqui ">Clique Aqui</Link>
                <span className="card_author">Adriano Bendazzoli</span>
              </div>
              <p className="card_titulo_artigos">Como identificar documentos falsos</p>
              <p className="card_desc">Aprenda os principais sinais de falsificação</p>
            </div>
          </div>


          <div className="card_artigos">
            <div className="card_img_artigos"></div>
            <div className="card_body_artigos">
              <div className="card_clique">
                <Link to="/artigosConteudo" className="card_clique_aqui ">Clique Aqui</Link>
                <span className="card_author">Adriano Bendazzoli</span>
              </div>
              <p className="card_titulo_artigos">Como identificar documentos falsos</p>
              <p className="card_desc">Aprenda os principais sinais de falsificação</p>
            </div>
          </div>

          <div className="card_artigos">
            <div className="card_img_artigos"></div>
            <div className="card_body_artigos">
              <div className="card_clique">
                <Link to="/artigosConteudo" className="card_clique_aqui ">Clique Aqui</Link>
                <span className="card_author">Adriano Bendazzoli</span>
              </div>
              <p className="card_titulo_artigos">Como identificar documentos falsos</p>
              <p className="card_desc">Aprenda os principais sinais de falsificação</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <BackToTop />
    </div>

  );
}

export default Artigos;
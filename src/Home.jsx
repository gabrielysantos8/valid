import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style.css";
import documento from "./assets/img/documento.png";
import { LuFolderGit2 } from "react-icons/lu";

function Home() {
  return (
    <div className="home">

      <Header />

      <section className="fundoverde">
        <div className="row">

          <div className="col-6">
            <div className="div-texto">
              <p className="text-branco">Verifique a autenticidade de documentos com <p className="text-subli">Inteligência Artificial</p></p>
            </div>
          </div>

          <div className="col-6">
            <div className="div-imgdoc">
              <img src={documento} alt="Documento" />
            </div>
          </div>

        </div>
      </section>

      <section className="container">
        <div className="cards-home">
          <div className="card-home">
            <div className="icardhome"><LuFolderGit2 /></div>
            <h2>Não sei oq</h2>
            <p>qualquer coisa</p>
          </div>

          <div className="card-home">
            <div className="icardhome"><LuFolderGit2 /></div>
            <h2>Não sei oq</h2>
            <p>qualquer coisa</p>
          </div>

          <div className="card-home">
            <div className="icardhome"><LuFolderGit2 /></div>
            <h2>Não sei oq</h2>
            <p>qualquer coisa</p>
          </div>
        </div>
      </section>

      <section className="container como-funciona">
        <h2>Como funciona?</h2>
        <p>Processo simples e eficiente em apenas 4 etapas</p>

      </section>

      <Footer />

    </div>

  );
}

export default Home;
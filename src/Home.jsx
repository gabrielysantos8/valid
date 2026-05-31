import Header from "./components/Header";
import "./style.css";

function Home() {
  return (
    <>
      <Header />

      <section className="fundoverde">
        <div className="row">

          <div className="col-6">
            <p className="text-branco">Verifique a autenticidade de documentos com <p className="text-subli">Inteligência Artificial</p></p>
          </div>

          <div className="col-6">
            img
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;
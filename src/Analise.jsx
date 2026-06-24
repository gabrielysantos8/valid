import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import "./style.css";
import { useState } from "react";
import { LuDownload } from "react-icons/lu";
import { FaFilePdf } from "react-icons/fa";
import { GoShieldCheck } from "react-icons/go";
import { GoShield } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";

function Analise() {
    const [etapa, setEtapa] = useState("upload");
    const [arquivo, setArquivo] = useState(null);
    const [preview, setPreview] = useState(null);
    const [dragAtivo, setDragAtivo] = useState(false);

    const [resultado, setResultado] = useState(null); // useState vai mudar de acordo com o resultado q a api enviar

    const handleArquivo = (e) => {
        const file = e.target.files[0];

        if(file){
            setArquivo(file);
            setPreview(URL.createObjectURL(file));
            setEtapa("preview");
        }
    };

    const analisarDocumento = () => {
        // futuramente aqui vai chamar a API Python

        setTimeout(() => {
            setEtapa("resultado");
            setResultado("suspeito"); // teste
        }, 2000);
    };

    return(
        <div className={`analise ${dragAtivo ? "drag-ativo" : ""}`}
            onDragOver={(e) => {
                e.preventDefault();
                setDragAtivo(true);
            }}
            onDragLeave={() => setDragAtivo(false)}
            onDrop={(e) => {
                e.preventDefault();
                setDragAtivo(false);

                const file = e.dataTransfer.files[0];

                    if (file) {
                        setArquivo(file);
                        setPreview(URL.createObjectURL(file));
                        setEtapa("preview");
                    }
            }}
        >
            <Header />

            <section className="secanalise">
                <h1 className="titulos-analise">Análise de Documento</h1>

                <div className="container row-analise">

                    {/* CARD PRINCIPAL */}
                    <div className="card-analise">

                        {etapa === "upload" && (

                            <div className="upload-area">

                                <div className="icone-download"><LuDownload /></div>

                                <h3>Arraste ou envie seu documento</h3>

                                <div className="btn-upload">
                                    <label>
                                        Selecione um arquivo
                                        <input
                                            type="file"
                                            hidden
                                            accept=".pdf,.jpg,.jpeg,.png"
                                            onChange={handleArquivo}
                                        />
                                    </label>
                                </div>


                                <p>JPN, PNG ou PDF</p>

                            </div>

                        )}

                        {etapa === "preview" && (

                            <div className="preview-area">
                                <div className="preview-area-img">
                                    {arquivo?.type.includes("image") ? (

                                        <img
                                            src={preview}
                                            alt="Documento"
                                            className="preview-img"
                                        />

                                    ) : arquivo?.type === "application/pdf" ? (

                                        <div className="pdf-preview">
                                            <FaFilePdf size={80} color="#00A279" />
                                            <h3>{arquivo.name}</h3>
                                        </div>

                                    ) : null}
                                </div>

                            <button
                                className="btn-acao"
                                onClick={analisarDocumento}
                            >
                                Analisar documento
                            </button>

                            </div>

                        )}

                        {etapa === "resultado" && (

                            <div className="resultado-area">

                                <div className="icone-resultado">
                                    {resultado === "autentico" ? <GoShieldCheck /> : <GoShield />}
                                </div>

                                <h2>
                                    {resultado === "autentico" ? "Autêntico" : "Suspeito"}
                                </h2>

                                <p>
                                    {resultado === "autentico" 
                                    ? "Seu documento foi analisado com sucesso e não foram identificados sinais de alteração ou manipulação." 
                                    : "Seu documento foi analisado e foram identificados possíveis inconsistências no documento."}
                                </p>

                                <p>
                                    {resultado === "autentico" 
                                    ? "O documento é considerado verdadeiro." 
                                    : "O documento é considerado falso."}
                                </p>

                                <button
                                    className="btn-acao"
                                    onClick={() => setEtapa("relatorio")}
                                >
                                    Ver relatório completo
                                </button>

                            </div>

                        )}

                        {etapa === "relatorio" && (

                            <div className="relatorio-area">

                                <h2>Relatório</h2>

                                <div className="relatorio-box">

                                    <p>
                                        Aqui aparecerá o relatório retornado
                                        pelo backend em Python.
                                    </p>

                                </div>

                                <div className="acoes-relatorio">

                                    <button className="btn-acao">
                                        Baixar PDF
                                    </button>

                                    <button
                                        className="btn-acao btn-fechar-rel"
                                        onClick={() => setEtapa("resultado")}
                                    >
                                        Fechar
                                    </button>

                                </div>

                            </div>

                        )}

                    </div>

                    {/* STATUS */}
                    <div className="card-status">

                        <h3>Status</h3>

                        <hr />

                        <div className="status-item">
                            <div className={`status-circle ${etapa !== "upload" ? "concluido" : ""}`}>
                                {etapa !== "upload" && <FaCheck />}
                            </div>
                            <span>Upload do arquivo</span>
                        </div>

                        <div className="status-item">
                            <div
                                className={`status-circle ${
                                    ["resultado", "relatorio"].includes(etapa)
                                        ? "concluido"
                                        : ""
                                }`}
                            >
                                {["resultado", "relatorio"].includes(etapa) && <FaCheck />}
                            </div>
                            <span>Análise do documento</span>
                        </div>

                        <div className="status-item">
                            <div className={`status-circle ${etapa === "relatorio" ? "concluido" : ""}`}>
                                {etapa === "relatorio" && <FaCheck />}
                            </div>
                            <span>Relatório</span>
                        </div>

                    </div>

                </div>
            </section>

            <Footer />

            <BackToTop />
        </div>
    );
}
export default Analise;
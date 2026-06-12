// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import BackToTop from "./components/BackToTop";
// import "./style.css";
// import { useState } from "react";
// import { LuDownload } from "react-icons/lu";
import { GoShieldCheck } from "react-icons/go";
{/* <GoShieldCheck /> */}
import { GoShield } from "react-icons/go";
{/* <GoShield /> */}

// function Analise() {
//     const [etapa, setEtapa] = useState("upload");
//     const [arquivo, setArquivo] = useState(null);

//     const handleArquivo = (e) => {
//         const file = e.target.files[0];

//         if(file){
//             setArquivo(file);
//             setEtapa("preview");
//         }
//     };

//     const analisarDocumento = () => {
//         // futuramente aqui vai chamar a API Python

//         setTimeout(() => {
//             setEtapa("resultado");
//         }, 2000);
//     };

//     return(
//         <div className="analise">
//             <Header />

//             <section className="secanalise">
//                 <h1 className="titulos-analise">Análise de Documento</h1>

//                 <div className="container row-analise">

//                     {/* CARD PRINCIPAL */}
//                     <div className="card-analise">

//                         {etapa === "upload" && (

//                             <div className="upload-area">

//                                 <div className="icone-download"><LuDownload /></div>

//                                 <h3>Arraste ou envie seu documento</h3>

//                                 <label className="btn-upload">
//                                     Selecione um arquivo
//                                     <input
//                                         type="file"
//                                         hidden
//                                         accept=".pdf,.jpg,.jpeg,.png"
//                                         onChange={handleArquivo}
//                                     />
//                                 </label>

//                                 <p>JPN, PNG ou PDF</p>

//                             </div>

//                         )}

//                         {etapa === "preview" && (

//                             <div className="preview-area">
//                                 <div className="preview-area-img">
//                                     <img
//                                         src="/documento-exemplo.png"
//                                         alt="Documento"
//                                         className="preview-img"
//                                     />
//                                 </div>

//                                 <button
//                                     className="btn-analisar"
//                                     onClick={analisarDocumento}
//                                 >
//                                     Analisar documento
//                                 </button>

//                             </div>

//                         )}

//                         {etapa === "resultado" && (

//                             <div className="resultado-area">

//                                 <MdOutlineSecurity
//                                     size={70}
//                                     color="#00A279"
//                                 />

//                                 <h2>Autêntico</h2>

//                                 <p>
//                                     Seu documento foi analisado com sucesso
//                                     e não foram identificados sinais de
//                                     alteração ou manipulação.
//                                 </p>

//                                 <button
//                                     className="btn-acao"
//                                     onClick={() => setEtapa("relatorio")}
//                                 >
//                                     Ver relatório completo
//                                 </button>

//                             </div>

//                         )}

//                         {etapa === "relatorio" && (

//                             <div className="relatorio-area">

//                                 <h2>Relatório</h2>

//                                 <div className="relatorio-box">

//                                     <p>
//                                         Aqui aparecerá o relatório retornado
//                                         pelo backend em Python.
//                                     </p>

//                                 </div>

//                                 <div className="acoes-relatorio">

//                                     <button className="btn-acao">
//                                         Baixar PDF
//                                     </button>

//                                     <button
//                                         className="btn-acao"
//                                         onClick={() => setEtapa("resultado")}
//                                     >
//                                         Fechar
//                                     </button>

//                                 </div>

//                             </div>

//                         )}

//                     </div>

//                     {/* STATUS */}
//                     <div className="card-status">

//                         <h3>Status</h3>

//                         <hr />

//                         <div className="status-item">
//                             {etapa !== "upload" ? "✅" : "⭕"}
//                             <span>Upload do arquivo</span>
//                         </div>

//                         <div className="status-item">
//                             {["resultado", "relatorio"].includes(etapa)
//                                 ? "✅"
//                                 : "⭕"}
//                             <span>Análise do documento</span>
//                         </div>

//                         <div className="status-item">
//                             {etapa === "relatorio"
//                                 ? "✅"
//                                 : "⭕"}
//                             <span>Relatório</span>
//                         </div>

//                     </div>

//                 </div>
//             </section>

//             <Footer />
//         </div>
//     );
// }
// export default Analise;














// codigo teste para fazer o front

import Header from "./components/Header";
import Footer from "./components/Footer";
import { LuDownload } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";

function Analise() {
    return (
        <div className="analise">

            <Header />

            <section className="secanalise">

                <h1 className="titulos-analise">
                    Análise de Documento
                </h1>

                {/* ETAPA 1 */}
                <div className="container row-analise">

                    <div className="card-analise">

                        <div className="upload-area">

                            <div className="icone-download">
                                <LuDownload />
                            </div>

                            <h3>Arraste ou envie seu documento</h3>

                            <button className="btn-upload">
                                Selecione um arquivo
                            </button>

                            <p>JPN, PNG ou PDF</p>

                        </div>

                    </div>

                    <div className="card-status">

                        <h3>Status</h3>

                        <div className="status-item">⭕ Upload do arquivo</div>
                        <div className="status-item">⭕ Análise do documento</div>
                        <div className="status-item">⭕ Relatório</div>

                    </div>

                </div>

                {/* ETAPA 2 */}
                <div className="container row-analise">

                    <div className="card-analise">

                        <div className="preview-area">

                            <div className="preview-area-img">
                                <img
                                    src="/documento-exemplo.png"
                                    alt="Documento"
                                    className="preview-img"
                                />
                            </div>

                            <button className="btn-analisar">
                                Analisar documento
                            </button>

                        </div>

                    </div>

                    <div className="card-status">

                        <h3>Status</h3>

                        <div className="status-item">✅ Upload do arquivo</div>
                        <div className="status-item">⭕ Análise do documento</div>
                        <div className="status-item">⭕ Relatório</div>

                    </div>

                </div>

                {/* ETAPA 3 */}
                <div className="container row-analise">

                    <div className="card-analise">

                        <div className="resultado-area">

                            <div className="icone-resultado">
                                <GoShieldCheck />
                            </div>

                            <h2>Autêntico</h2>

                            <p>
                                Seu documento foi analisado com sucesso
                                e não foram identificados sinais de
                                alteração ou manipulação.
                            </p>

                            <button className="btn-acao">
                                Ver relatório completo
                            </button>

                        </div>

                    </div>

                    <div className="card-status">

                        <h3>Status</h3>

                        <div className="status-item">✅ Upload do arquivo</div>
                        <div className="status-item">✅ Análise do documento</div>
                        <div className="status-item">⭕ Relatório</div>

                    </div>

                </div>

                {/* ETAPA 4 */}
                <div className="container row-analise">

                    <div className="card-analise">

                        <div className="relatorio-area">

                            <h2>Relatório</h2>

                            <div className="relatorio-box">

                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.
                                </p>

                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.
                                </p>

                                <p>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    Sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.
                                </p>

                            </div>

                            <div className="acoes-relatorio">

                                <button className="btn-acao">
                                    Baixar PDF
                                </button>

                                <button className="btn-acao">
                                    Fechar
                                </button>

                            </div>

                        </div>

                    </div>

                    <div className="card-status">

                        <h3>Status</h3>

                        <div className="status-item">✅ Upload do arquivo</div>
                        <div className="status-item">✅ Análise do documento</div>
                        <div className="status-item">✅ Relatório</div>

                    </div>

                </div>

            </section>

            <Footer />

        </div>
    );
}

export default Analise;
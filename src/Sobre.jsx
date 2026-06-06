import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style.css";

import docsobre1 from "./assets/img/doc-sobre-1.png";
import docsobre2 from "./assets/img/doc-sobre-2.png";

function Sobre() {
    return (
        <div className="sobre">
            <Header />

            <section className="container section-sobre">
                <div className="row">
                    <div className="col-6 col-sobre">
                        <div className="texto-sobre">
                            <h1>Sobre o Valid</h1>
                            <p>O projeto consiste em uma plataforma que utiliza inteligência artificial para analisar documentos e identificar possíveis fraudes ou alterações. 
                                A ferramenta realiza uma análise detalhada pixel a pixel para determinar se um documento é verdadeiro ou falso. 
                                Com isso, ajuda empresas e instituições a evitarem golpes, prejuízos financeiros e problemas legais. O objetivo é tornar 
                                a validação documental mais rápida, segura e acessível, acompanhando a evolução das técnicas de falsificação e aumentando 
                                a confiança nos processos digitais e físicos.</p>
                        </div>
                    </div>

                    <div className="col-6 col-sobre">
                        <div className="card-img-sobre">
                            <img src={docsobre1} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="container section-sobre">
                <div className="row">
                    <div className="col-6 col-sobre img-col">
                        <div className="img-sobre"><img src={docsobre2} alt="" /></div>
                    </div>

                    <div className="col-6 col-sobre texto-col">
                        <div className="texto-sobre">
                            <h1>Por que foi desenvolvido</h1>
                            <p>Este projeto foi desenvolvido como Trabalho de Conclusão de Curso (TCC) pelos alunos Adriano Bendazolli, Ana Clara Rivas, 
                                Beatriz Krisan, Byanca Lourenço e Gabriely Santos, como parte do ensino médio integrado ao curso técnico de Informática 
                                para Internet da ETEC Profª Maria Cristina Medeiros.  A proposta tem como objetivo aplicar, na prática, conhecimentos 
                                adquiridos ao longo da formação, por meio da criação de uma solução tecnológica voltada à análise e validação de documentos. 
                                O projeto busca contribuir com a sociedade ao oferecer uma ferramenta inovadora para identificação de possíveis fraudes, unindo 
                                aprendizado acadêmico e impacto real no mercado.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="fundoverde marginsecdesen">
                <div className="container sec-desenvolvedores">
                    <h1>Desenvolvedores do projeto</h1>

                    <div className="row divfotos">
                        <div className="div-foto">
                            <div className="img-foto-desen"></div>
                            <h2>Adriano</h2>
                            <p>17 anos</p>
                        </div>

                        <div className="div-foto">
                            <div className="img-foto-desen"></div>
                            <h2>Ana Clara</h2>
                            <p>17 anos</p>
                        </div>

                        <div className="div-foto">
                            <div className="img-foto-desen"></div>
                            <h2>Beatriz</h2>
                            <p>17 anos</p>
                        </div>

                        <div className="div-foto">
                            <div className="img-foto-desen"></div>
                            <h2>Byanca</h2>
                            <p>17 anos</p>
                        </div>

                        <div className="div-foto">
                            <div className="img-foto-desen"></div>
                            <h2>Gabriely</h2>
                            <p>17 anos</p>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Sobre;
import { useState } from "react";
import { MdOutlineSecurity } from "react-icons/md";

function Planos() {
    const [tipoPlano, setTipoPlano] = useState("mensal");

    return (
        <div className="container container-planos">

            <div className="toggle-planos">
                <button
                    className={tipoPlano === "mensal" ? "ativo" : ""}
                    onClick={() => setTipoPlano("mensal")}
                >
                    Mensal
                </button>

                <button
                    className={tipoPlano === "anual" ? "ativo" : ""}
                    onClick={() => setTipoPlano("anual")}
                >
                    Anual
                </button>
            </div>

            {tipoPlano === "mensal" ? (

            <div className="cards-planos">

                <div className="card-plano card-plano-verde">
                    <div className="div-nome-planos">
                        <div className="icone-planos"><MdOutlineSecurity /></div>
                        <h1>Gratuito</h1>
                    </div>
                    <p>Ideal para quem quer testar a plataforma.</p>

                    <div className="beneficios">
                        <div className="beneficio">
                            <div className="icon-bene"><MdOutlineSecurity /></div>
                            <p>5 análises por mês</p>
                        </div>

                        <div className="beneficio">
                            <div className="icon-bene"><MdOutlineSecurity /></div>
                            <p>Relatórios básicos</p>
                        </div>

                        <div className="beneficio">
                            <div className="icon-bene"><MdOutlineSecurity /></div>
                            <p>Upload de documentos</p>
                        </div>

                        <div className="beneficio">
                            <div className="icon-bene"><MdOutlineSecurity /></div>
                            <p>Suporte por e-mail</p>
                        </div>
                    </div>

                    <div className="preco">
                        <h1>R$ 0</h1>
                        <h3>ao mês</h3>
                    </div>

                    <div className="div-btn-planos">
                        <a href="" className="btn-planos">Começar Grátis</a>
                    </div>

                </div>


                <div className="card-plano card-plano-branco">
                    <div className="div-nome-planos">
                        <div className="icone-planos-branco"><MdOutlineSecurity /></div>
                        <h1>Básico</h1>
                    </div>
                    <p>Perfeito para profissionais e pequenas empresas.</p>

                    <div className="beneficios">
                        <div className="beneficio">
                            <div className="icon-bene"><MdOutlineSecurity /></div>
                            <p>100 análises mensais</p>
                        </div>

                        <div className="beneficio">
                            <div className="icon-bene"><MdOutlineSecurity /></div>
                            <p>Relatórios completos</p>
                        </div>

                        <div className="beneficio">
                            <div className="icon-bene"><MdOutlineSecurity /></div>
                            <p>Histórico de análises</p>
                        </div>

                        <div className="beneficio">
                            <div className="icon-bene"><MdOutlineSecurity /></div>
                            <p>Processamento rápido</p>
                        </div>
                    </div>

                    <div className="preco">
                        <h1>R$ XX,00 </h1>
                        <h3>ao mês</h3>
                    </div>

                    <div className="div-btn-planos">
                        <a href="" className="btn-planos">Assinar</a>
                    </div>

                </div>


                <div className="card-plano card-plano-verde">
                    <div className="div-nome-planos">
                        <div className="icone-planos"><MdOutlineSecurity /></div>
                        <h1>Pro</h1>
                    </div>
                    <p>Para empresas que necessitam de maior capacidade.</p>

                    <div className="beneficios">
                        <div className="beneficio">
                            <div className="icon-bene"><MdOutlineSecurity /></div>
                            <p>500 análises mensais</p>
                        </div>

                        <div className="beneficio">
                            <div className="icon-bene"><MdOutlineSecurity /></div>
                            <p>Relatórios detalhados</p>
                        </div>

                        <div className="beneficio">
                            <div className="icon-bene"><MdOutlineSecurity /></div>
                            <p>Histórico ilimitado</p>
                        </div>

                        <div className="beneficio">
                            <div className="icon-bene"><MdOutlineSecurity /></div>
                            <p>Processamento rápido</p>
                        </div>
                    </div>

                    <div className="preco">
                        <h1>R$ XX,00 </h1>
                        <h3>ao mês</h3>
                    </div>

                    <div className="div-btn-planos">
                        <a href="" className="btn-planos">Assinar</a>
                    </div>

                </div>

            </div>

            ) : (

            <div className="cards-planos">

                <div className="card-plano card-plano-verde">
                    <div className="div-nome-planos">
                        <div className="icone-planos"><MdOutlineSecurity /></div>
                        <h1>Básico</h1>
                    </div>
                    <p>Perfeito para profissionais e pequenas empresas.</p>

                    <div className="beneficios">
                        <div className="beneficio">
                            <div className="icon-bene"><MdOutlineSecurity /></div>
                            <p>1.200 análises por ano</p>
                        </div>

                        <div className="beneficio">
                            <div className="icon-bene"><MdOutlineSecurity /></div>
                            <p>Relatórios completos</p>
                        </div>

                        <div className="beneficio">
                            <div className="icon-bene"><MdOutlineSecurity /></div>
                            <p>Histórico de 90 dias</p>
                        </div>

                        <div className="beneficio">
                            <div className="icon-bene"><MdOutlineSecurity /></div>
                            <p>Processamento rápido</p>
                        </div>

                    </div>

                    <div className="preco">
                        <h1>R$ XX,00</h1>
                        <h3>ao ano</h3>
                    </div>

                    <div className="div-btn-planos">
                        <a href="" className="btn-planos">Assinar</a>
                    </div>

                </div>


                <div className="card-plano card-plano-branco">
                    <div className="div-nome-planos">
                        <div className="icone-planos-branco"><MdOutlineSecurity /></div>
                        <h1>Pro</h1>
                    </div>
                    <p>Para empresas que necessitam de maior capacidade.</p>

                    <div className="beneficios">
                        <div className="beneficio">
                            <div className="icon-bene"><MdOutlineSecurity /></div>
                            <p>6.000 análises por ano</p>
                        </div>

                        <div className="beneficio">
                            <div className="icon-bene"><MdOutlineSecurity /></div>
                            <p>Relatórios detalhados</p>
                        </div>

                        <div className="beneficio">
                            <div className="icon-bene"><MdOutlineSecurity /></div>
                            <p>Histórico ilimitado</p>
                        </div>

                        <div className="beneficio">
                            <div className="icon-bene"><MdOutlineSecurity /></div>
                            <p>Suporte por chat</p>
                        </div>
                    </div>

                    <div className="preco">
                        <h1>R$ XX,00</h1>
                        <h3>ao ano</h3>
                    </div>

                    <div className="div-btn-planos">
                        <a href="" className="btn-planos">Assinar</a>
                    </div>

                </div>


                <div className="card-plano card-plano-verde">
                    <div className="div-nome-planos">
                        <div className="icone-planos"><MdOutlineSecurity /></div>
                        <h1>Ilimitado</h1>
                    </div>
                    <p>Ideal para grandes corporações e alta demanda.</p>

                    <div className="beneficios">
                        <div className="beneficio">
                            <div className="icon-bene"><MdOutlineSecurity /></div>
                            <p>Análises anuais ilimitadas</p>
                        </div>

                        <div className="beneficio">
                            <div className="icon-bene"><MdOutlineSecurity /></div>
                            <p>Relatórios avançados com IA</p>
                        </div>

                        <div className="beneficio">
                            <div className="icon-bene"><MdOutlineSecurity /></div>
                            <p>Histórico ilimitado</p>
                        </div>

                        <div className="beneficio">
                            <div className="icon-bene"><MdOutlineSecurity /></div>
                            <p>processamento instantâneo</p>
                        </div>
                    </div>

                    <div className="preco">
                        <h1>R$ XX,00 </h1>
                        <h3>ao ano</h3>
                    </div>

                    <div className="div-btn-planos">
                        <a href="" className="btn-planos">Assinar</a>
                    </div>

                </div>

            </div>

            )}

        </div>

    );
}

export default Planos;
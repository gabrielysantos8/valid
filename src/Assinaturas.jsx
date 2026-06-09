import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style.css";
import { MdOutlineSecurity } from "react-icons/md";
import { LuDownload } from "react-icons/lu";
import { TbShieldSearch } from "react-icons/tb";
import { PiClipboardTextBold } from "react-icons/pi";

function Assinaturas() {
    return(
        <div className="assinaturas">
            <Header />

            <section className="container">
                <div className="row">
                    <div className="col-6">

                        <div>
                            <MdOutlineSecurity />
                            <p>PLANOS E ASSINATURAS</p>
                        </div>

                        <div>
                            <h1>Escolha o plano Ideal para suas necessidades</h1>
                            <p>O Valid oferece planos flexíveis para pessoas, empresas e instituições que buscam mais segurança na validação documental com inteligência artificial.</p>
                        </div>
                        
                        <div>
                            <MdOutlineSecurity />
                            <p>Analise rápida e precisa.</p>
                        </div>

                        <div>
                            <MdOutlineSecurity />
                            <p>Segurança e privacidade garantidas.</p>
                        </div>

                    </div>

                    <div className="col-6">

                    </div>
                </div>
            </section>

            <section className="container">

            </section>

            <section className="container">
                <h1 className="titulos-home">Dúvidas Frequentes</h1>

                <div className="cards-dividas">
                    <div className="col-duvidas">

                        <div className="card-duvida">
                            <div className="icon-duvidas"><PiClipboardTextBold /></div>
                            <div>
                                <p className="p-duvidas">Posso cancelar minha assinatura?</p>
                                <p>Sim. Você pode cancelar seu plano a qualquer momento sem taxas adicionais.</p>
                            </div>
                        </div>

                        <div className="card-duvida">
                            <div className="icon-duvidas"><LuDownload /></div>
                            <div>
                                <p className="p-duvidas">Meus documentos ficam armazenados?</p>
                                <p>Os documentos são processados e seguem políticas de privacidade e proteção de dados.</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-duvidas">

                        <div className="card-duvida">
                            <div className="icon-duvidas"><TbShieldSearch /></div>
                            <div>
                                <p className="p-duvidas">Os planos possuem fidelidade?</p>
                                <p>Não. Todos os planos podem ser alterados ou cancelados quando desejar.</p>
                            </div>
                        </div>

                        <div className="card-duvida">
                            <div className="icon-duvidas"><MdOutlineSecurity /></div>
                            <div>
                                <p className="p-duvidas">Valid funciona em dispositivos móveis?</p>
                                <p>Sim. O Valid possui interface responsiva para computadores, tablets e smartphones.</p>  
                            </div>                          
                        </div>
                        
                    </div>
                </div>

            </section>

            <Footer />
        </div>
    );
}
export default Assinaturas;
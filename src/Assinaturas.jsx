import Header from "./components/Header";
import Footer from "./components/Footer";
import Planos from "./components/Planos";
import "./style.css";
import { MdOutlineSecurity } from "react-icons/md";
import { LuDownload } from "react-icons/lu";
import { TbShieldSearch } from "react-icons/tb";
import { PiClipboardTextBold } from "react-icons/pi";
import docpalnosass from "./assets/img/planos-assinaturas.png";
import BackToTop from "./components/BackToTop";

function Assinaturas() {
    return(
        <div className="assinaturas">
            <Header />

            {/* seção 1 */}
            <section className="fundoverdeclaro2">
                <div className="container row">
                    <div className="col-assinaturas div-planoassinturas">

                        <div className="planos-ass">
                            <div className="icon-planos-ass"><MdOutlineSecurity /></div>
                            <p>PLANOS E ASSINATURAS</p>
                        </div>

                        <div className="titulos-planos-ass">
                            <h1>Escolha o plano Ideal para suas necessidades</h1>
                            <p>O Valid oferece planos flexíveis para pessoas, empresas e instituições que buscam mais segurança na validação documental com inteligência artificial.</p>
                        </div>
                        
                        <div className="div-planos-ass">
                            <div className="icon-planos-ass"><MdOutlineSecurity /></div>
                            <p>Analise rápida e precisa.</p>
                        </div>

                        <div className="div-planos-ass">
                            <div className="icon-planos-ass"><MdOutlineSecurity /></div>
                            <p>Segurança e privacidade garantidas.</p>
                        </div>

                    </div>

                    <div className="col-assinaturas div-img-planos-ass">
                        <img src={docpalnosass} alt="" />
                    </div>
                </div>
            </section>

            {/* seção 2 - planos  */}
            <section className="container">
                <Planos />
            </section>

            {/* seção 3 - dúvidas */}
            <section className="container">
                <h1 className="titulos-home">Dúvidas Frequentes</h1>

                <div className="cards-dividas">
                    <div className="col-assinaturas">

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

                    <div className="col-assinaturas">

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

            <BackToTop />
        </div>
    );
}
export default Assinaturas;
import { Link } from "react-router-dom";
import "./compostyle.css";

import { FaRegUser } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { LuMessageSquareText } from "react-icons/lu";
import { LuSendHorizontal } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";

function Footer() {
    return(
        <footer>

            <div className="container">

                <div className="footer-content">

                    <div className="footer-left">
                        <div className="icon-footer"><MdOutlineSecurity /></div>
                        <h2>VALID</h2>

                        <hr />
                        
                        <div className="footer-info">

                            <h4>Email</h4>
                            <span>tccvalid@gmail.com</span>

                            <h4>Telefone</h4>
                            <span>+55 (11) 91010-1010</span>

                        </div>

                        <hr />

                        <h4 className="acesso-links">Acesso rápido</h4>
                        
                        <div className="links-footer">

                            <div>
                                <Link to="/">Home</Link>
                                <Link to="/sobre">Sobre</Link>
                                <Link to="/analise">Analisar com IA</Link>
                            </div>

                            <div>
                                <Link to="/artigos">Artigos</Link>
                                <Link to="/assinaturas">Assinaturas</Link>
                            </div>

                        </div>

                        <hr />

                        <div className="bolinhaverde"></div>
                        <div className="bolinhaverde"></div>
                        <div className="bolinhaverde"></div>

                    </div>

                    <form action="" className="footer-form">

                        <h4>Entre em contato</h4>

                        <div className="input-group">
                            <div className="icons-form"><FaRegUser /></div>
                            <input type="text" name="" id="" placeholder="Nome Completo"/>
                        </div>

                        <div class="input-group">
                            <div className="icons-form"><MdAlternateEmail /></div>
                            <input type="email" name="" id="" placeholder="Email" />
                        </div>

                        <div class="input-group">
                            <div className="icons-form"><BsTelephone /></div>
                            <input type="tel" name="" id="" placeholder="Telefone" />
                        </div>

                        <div class="input-group textarea-group">
                            <div className="icons-form"><LuMessageSquareText /></div>
                            <textarea rows="4" placeholder="Escreva sua mensagem"></textarea>
                        </div>

                        <button type="submit">
                            Enviar
                            <div className="icon-btn-form"><LuSendHorizontal /></div>
                        </button>

                    </form>

                </div>

            </div>

        </footer>
    );
}

export default Footer;
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import "./compostyle.css";

import { FaBars } from "react-icons/fa";
import { useState } from "react";

import { HiOutlineDocumentSearch } from "react-icons/hi";

function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    return(
        <header>
            <div className="icone-header">
                < HiOutlineDocumentSearch />
            </div>
            
            <nav className={menuAberto ? "ativo" : ""}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/analise">Analisar com IA</Link></li>
                    <li><Link to="/artigos">Artigos</Link></li>
                    <li><Link to="/assinaturas">Assinaturas</Link></li>
                </ul>
            </nav>

            <div className="actions">
                <div className="icons">
                    <IoSearch size={22} />
                    <Link to="/perfil">
                        <FaRegUser size={22} />
                    </Link>
                </div>

                <button
                    className="menu-btn"
                    onClick={() => setMenuAberto(!menuAberto)}
                >
                    <FaBars />
                </button>
            </div>


        </header>
    );
}

export default Header;
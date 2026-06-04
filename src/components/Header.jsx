import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import "./compostyle.css";

import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    return(
        <header>
            <div>
                <h1>Logo</h1>
            </div>
            
            <nav className={menuAberto ? "ativo" : ""}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Sobre</Link></li>
                    <li><Link to="/">Analisar com IA</Link></li>
                    <li><Link to="/artigos">Artigos</Link></li>
                    <li><Link to="/">Assinaturas</Link></li>
                </ul>
            </nav>

            <div className="actions">
                <div className="icons">
                    <IoSearch />
                    <FaRegUser />
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